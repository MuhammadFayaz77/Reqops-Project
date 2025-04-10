"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

function UploadComponent() {
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="flex flex-col items-start  p-7 bg-white rounded-lg shadow-md border border-red-300 w-[30vw] h-100 relative ">
         <h2 className="text-lg font-semibold text-gray-900">Upload Samples</h2>
      <div
        className="border-2 border-dashed border-red-400 bg-red-50 p-6 rounded-lg w-full h-full "
        onClick={handleFileClick}
      >
        
        {preview ? (
          <img src={preview} alt="Uploaded File" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <>
           
            <div className="flex flex-col items-center space-y-6">
              <Image src="Images/upload.svg" width={50} height={50} alt="Upload" />
              <p className="text-gray-700">Drag & drop files or <span className="text-red-500 font-medium">Browse</span></p>
              <p className="text-gray-500 text-sm">Supported formats: mp3, mp4, jpeg</p>
            </div>
          </>
        )}
      </div>
      <input type="file" ref={inputRef} className="hidden" onChange={handleFileChange} />
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="terms" className="w-4 h-4" />
        <label htmlFor="terms" className="text-gray-700 text-sm py-4">Accept Terms of services</label>
      </div>
      <div className="flex space-x-9">
        <button className="px-6 py-2 bg-[#E33C1240] font-medium rounded-lg  hover:bg-[#E33C12] transition">CANCEL</button>
        <button className=" py-2 hover:bg-[#E33C12] hover:text-white font-medium rounded-lg  bg-[#E33C1240]   transition px-16">VERIFY</button>
      </div>
    </div>
  );
}

export default UploadComponent;