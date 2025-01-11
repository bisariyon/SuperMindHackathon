import React from "react";
import locationIcon from "../assets/location.svg";

const PostDetails = ({ post }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-xl mb-20">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
        {/* Post Content Section */}
        <div className="p-6">
          {/* Username and Location */}
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-800">
              @{post.username}
            </div>
            <div className="text-sm text-gray-500 flex items-center">
              <img
                src= {locationIcon}
                alt="Location"
                className="h-5 w-5 mr-1 text-gray-500"
              />
              {post.location}
            </div>
          </div>

          {/* Content */}
          <p className="mt-4 text-gray-700 text-lg">{post.content}</p>

          {/* Hashtags */}
          <div className="mt-4">
            {post.hashtags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex justify-around bg-gray-100 text-gray-600 py-2 border-t border-gray-200">
          <div className="text-center">
            <span className="block text-2xl font-semibold text-gray-800">
              {post.likes.toLocaleString()}
            </span>
            <span className="text-sm">Likes</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-semibold text-gray-800">
              {post.comments.toLocaleString()}
            </span>
            <span className="text-sm">Comments</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-semibold text-gray-800">
              {post.shares.toLocaleString()}
            </span>
            <span className="text-sm">Shares</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-semibold text-gray-800">
              {post.views.toLocaleString()}
            </span>
            <span className="text-sm">Views</span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-gray-500 text-center text-sm">
          Posted on: {new Date(post.timestamp).toLocaleDateString()} via{" "}
          {post.device}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
