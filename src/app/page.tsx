'use client';

import CardPost from "@/components/CardPost";
import Pagination from "@/components/Pagination";
import { Post } from "@/types/Post";
import { getAllPosts } from "@/helper/functions";
import styles from './page.module.scss'
import { useEffect, useState } from "react";

const POSTS_PER_PAGE = 4

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const currentPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className={styles.grid}>
      {
        currentPosts.map(post => (
          <CardPost
            key={post.id}
            post={post}
          />
        ))
      }
      <Pagination
        totalPosts={posts.length}
        postsPerPage={POSTS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
