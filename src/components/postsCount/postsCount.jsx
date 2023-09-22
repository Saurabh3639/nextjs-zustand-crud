'use client';

import React from 'react'
import { usePostsStore } from "@/store/Post";

const PostsCount = () => {
  const { posts } = usePostsStore();

  return (
    <div>{posts.length}</div>
  )
}

export default PostsCount