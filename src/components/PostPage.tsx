// components/PostPage.tsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostType } from "../types";
import { getPostById } from "../postService";
import styles from "./PostPage.module.css";

const PostPage: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;

      const fetchedPost = await getPostById(parseInt(postId));
      setPost(fetchedPost);
    };
    fetchPost();
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className={styles.link}>Back to Posts</Link>
    </div>
  );
};

export default PostPage; // Ensure that PostPage is correctly exported
