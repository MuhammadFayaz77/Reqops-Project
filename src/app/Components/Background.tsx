'use client';
import React from 'react';


export default function Background() {
  return (
    <div className="background-container">
      <div className="circle-cut-bg "></div>
      <div className="content">
        <h1 className="text-white text-2xl font-bold">Your Title</h1>
        <p className="text-white mt-4">Your content goes here...</p>
        <button className="mt-6 px-4 py-2 bg-white text-orange-500 rounded-lg">
          Click Me
        </button>
      </div>
    </div>
  );
}