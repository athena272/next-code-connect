import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import db from "../../../../../../prisma/db";

type GETProps = {
    params: {
        id: string
    }
}

export async function GET(_request: NextRequest, { params }: GETProps) {
    try {
        const replies = await db.comment.findMany({
            where: {
                parentId: parseInt(params.id), // Certifique-se de que o id seja numérico
            },
            include: {
                author: true, // Ajuste o include se necessário
            },
        });

        return NextResponse.json(replies);
    } catch (error) {
        console.error("Failed to fetch replies:", error);
        return NextResponse.json(
            { error: "Failed to fetch replies" },
            { status: 500 }
        );
    }
}   