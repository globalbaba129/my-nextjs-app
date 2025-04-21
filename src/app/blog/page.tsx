"use client";
import FirstPage from "../first/page";
import Footer from "../Footer/page";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const router = useRouter();

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  // Save posts to localStorage every time posts state changes
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("blogPosts", JSON.stringify(posts));
    }
  }, [posts]);

  const handleAddOrUpdate = () => {
    if (!title || !content) return;

    const newPost = {
      title,
      content,
      date: new Date().toLocaleDateString(),
      image: image,
    };

    if (editIndex !== null) {
      const updated = [...posts];
      updated[editIndex] = newPost;
      setPosts(updated);
      setEditIndex(null);
    } else {
      setPosts([...posts, newPost]);
    }

    setTitle("");
    setContent("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (index) => {
    const post = posts[index];
    setTitle(post.title);
    setContent(post.content);
    setImage(post.image);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const handleView = (post) => {
    localStorage.setItem("post", JSON.stringify(post));
    router.push("/post-view");
  };

  return (
    <>
      <FirstPage />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">Blog Manager</h1>

          <div className="bg-white p-6 rounded shadow mb-8">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Post Content"
              className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="h-40 w-full object-cover rounded mb-4"
              />
            )}
            <button
              onClick={handleAddOrUpdate}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded transition-all"
            >
              {editIndex !== null ? "Update Post" : "Add Post"}
            </button>
          </div>

          <ul className="space-y-6">
            {posts.map((post, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-md">
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-60 object-cover rounded mb-4"
                  />
                )}
                <h2 className="text-2xl font-semibold text-indigo-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.content}</p>
                <p className="text-sm text-gray-400 mt-1">Posted on: {post.date}</p>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleView(post)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    View
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </>
  );
}
