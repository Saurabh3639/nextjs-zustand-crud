import { create } from "zustand";

export const usePostsStore = create((set) => ({
  posts: [
    {
      id: "1",
      title: "Post Title1",
      description: "Post Description1",
    },
    {
      id: "2",
      title: "Post Title2",
      description: "Post Description2",
    },
  ],
  addPost: (newPost) => {
    set((state) => {
      return { posts: [...state.posts, newPost] };
    });
  },
  editPost: (id, updatePost) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, ...updatePost };
        }
        return post;
      });
      return { posts: updatedPosts };
    });
  },
  deletePost: (id) => {
    set((state) => {
        const updatedPosts = state.posts.filter((post) => post.id !== id);
        return { posts: updatedPosts };
      });
  }
}));
