"use client";
import FirstPage from "../first/page";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PostView() {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const router = useRouter();

  // Load post and comments
  useEffect(() => {
    const stored = localStorage.getItem("post");
    const storedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    if (stored) {
      setPost(JSON.parse(stored));
    } else {
      router.push("/");
    }
    setComments(storedComments);
  }, []);

  const handleCommentSubmit = () => {
    if (comment.trim() === "") return;

    const newComments = [...comments, comment];
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setComment(""); // Clear input after submission
  };

  if (!post) return null;

  return (
    <>
      <FirstPage />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        {/* Main Content */}
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow">
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <h1 className="text-4xl font-bold text-indigo-700 mb-4">{post.title}</h1>
          <p className="text-gray-700 text-lg mb-6">{post.content}</p>
          <p className="text-sm text-gray-400 mb-6">Posted on: {post.date}</p>

          {/* Comment Section */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Comments</h2>
            <div className="mb-4">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
              />
              <button
                onClick={handleCommentSubmit}
                className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
              >
                Submit Comment
              </button>
            </div>

            <ul className="space-y-4 mt-6">
              {comments.map((c, index) => (
                <li key={index} className="border-b py-4">
                  <p className="text-lg text-gray-800">{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
