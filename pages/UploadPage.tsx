import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import QRCodeDisplay from '../components/QRCodeDisplay';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from '../constants';

interface UploadedVideo {
  publicId: string;
}

const UploadPage: React.FC = () => {
  const [uploadedVideo, setUploadedVideo] = useState<UploadedVideo | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    if (CLOUDINARY_CLOUD_NAME === 'YOUR_CLOUD_NAME' || CLOUDINARY_UPLOAD_PRESET === 'YOUR_UPLOAD_PRESET') {
        setError('Cloudinary is not configured. Please update `constants.ts` with your credentials.');
        return;
    }

    setIsUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'Upload failed. Please check your Cloudinary settings and network.');
      }

      const data = await response.json();
      setUploadedVideo({ publicId: data.public_id });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleReset = () => {
    setUploadedVideo(null);
    setError(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-2xl text-center">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
            QR VidShare
          </h1>
          <p className="text-slate-400 mt-2">Upload a video, get a QR code, and share it instantly.</p>
        </header>

        {error && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!uploadedVideo ? (
          <FileUpload onUpload={handleUpload} isLoading={isUploading} />
        ) : (
          <QRCodeDisplay publicId={uploadedVideo.publicId} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default UploadPage;