"use client";

import React, { useState } from "react";
import { usePostsStore } from "@/store/Post";

const Posts = () => {
  const { posts, addPost, editPost, deletePost } = usePostsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddPost = (e) => {
    e.preventDefault();

    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };

    addPost(newPost);

    setTitle("");
    setDescription("");
  };

  const EditPost = (id) => {
    const post = posts.filter((post) => post.id === id)[0];
    setTitle(post.title);
    setDescription(post.description);
    setPostId(id);
    setIsEdit(true);
  }

  const handleEditPost = (e) => {
    e.preventDefault();

    if (!title && !description) return;

    const updatedPost = {
      id: postId,
      title,
      description,
    };

    editPost(updatedPost.id, updatedPost);

    setTitle("");
    setDescription("");
    setIsEdit(false);
  }

  const handleDeletePost = (postId) => {
    deletePost(postId);
  }

  return (
    <div className="container">
      <form className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          className="p-2 border focus:outline-none"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="p-2 border focus:outline-none"
          placeholder="description"
          value={description}
          cols="3"
          rows="3"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          className="border-2 me-4 p-2 bg-green-500"
          onClick={isEdit ? handleEditPost : handleAddPost}
        >
          {isEdit ? "Edit Post" : "Add Post"}
        </button>
      </form>
      <h1 className="text-2xl">Posts</h1>
      {posts ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4 border-4">
            <h3 className="p-2">{post.title}</h3>
            <p className="mb-2 p-2">{post.description}</p>
            <button className="border-2 me-4 p-2 bg-blue-500" onClick={()=>EditPost(post.id)}>Edit</button>
            <button className="border-2 me-4 p-2 bg-red-500" onClick={()=>handleDeletePost(post.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default Posts;
