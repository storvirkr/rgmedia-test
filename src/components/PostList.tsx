import React, { useEffect, useState } from "react";
import { PostType } from "../types";

import styles from "./PostList.module.css";
import { getPosts } from "../postService";
import { Link } from "react-router-dom";

interface Props {
  posts?: PostType[];
}

const PostList: React.FC<Props> = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const fetchedPosts = await getPosts(page, 10);
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, [page]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.postList}>
            {posts.map((post) => (
               <Link
               key={post.id}
               to={`/posts/${post.id}`}
               className={styles.link}
             >
               <div className={styles.post}>
                 <h2>{post.title}</h2>
                 <p>{post.body}</p>
               </div>
             </Link>
            ))}
          </div>
          <div className={styles.pagination}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
              Предыдущая
            </button>
            <span>{page}</span>
            <button onClick={() => setPage(page + 1)}>Следующая</button>
          </div>
        </>
      )}
    </div>
  );
};

export default PostList;
