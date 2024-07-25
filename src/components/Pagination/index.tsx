import styles from './Pagination.module.scss'

type PaginationProps = {
    totalPosts: number,
    postsPerPage: number,
    currentPage: number,
    onPageChange: (page: number) => void
}

export default function Pagination({ totalPosts, postsPerPage, currentPage, onPageChange }: PaginationProps) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    return (
        <div className={styles.pagination}>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={currentPage === index + 1 ? styles.active : ''}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}