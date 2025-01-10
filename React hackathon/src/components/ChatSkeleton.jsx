import React from 'react';

const ChatSkeleton = () => {
  return (
    <div className="flex justify-start mt-3 animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-purple-800 rounded-full" />
        <div className="flex flex-col space-y-2">
          <div className="bg-purple-800/50 rounded-lg p-3">
            <div className="h-4 w-48 bg-purple-700 rounded"></div>
          </div>
          <div className="bg-purple-800/50 rounded-lg p-3">
            <div className="h-4 w-64 bg-purple-700 rounded"></div>
          </div>
          <div className="bg-purple-800/50 rounded-lg p-3">
            <div className="h-4 w-32 bg-purple-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSkeleton;