import React, { useState, useCallback } from 'react';
import { UploadIcon } from './icons';
import Loader from './Loader';

interface FileUploadProps {
  onUpload: (file: File) => void;
  isLoading: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload, isLoading }) => {
  const handleFileSelect = (files: FileList | null) => {
    if (files && files[0]) {
      onUpload(files[0]);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="video-upload"
        className={`relative block w-full border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors duration-30 border-slate-700 hover:border-slate-500
        }`}
      >
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <Loader />
            <p className="mt-4 text-slate-400">Uploading, please wait...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <UploadIcon />
            <p className="mt-4 text-lg font-semibold text-slate-300 text-slate-500">Click to select a file</p>
          </div>
        )}
      </label>
      <input
        id="video-upload"
        type="file"
        className="hidden"
        accept="video/*"
        onChange={(e) => handleFileSelect(e.target.files)}
        disabled={isLoading}
      />
    </div>
  );
};

export default FileUpload;