import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AdvancedVideo } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUDINARY_CLOUD_NAME } from '../constants';
import { ArrowLeftIcon } from '../components/icons';

const WatchPage: React.FC = () => {
  const { publicId } = useParams<{ publicId: string }>();

  if (!publicId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-400 text-xl">Video ID not found in URL.</p>
      </div>
    );
  }

  if (CLOUDINARY_CLOUD_NAME === 'YOUR_CLOUD_NAME') {
    return (
        <div className="flex items-center justify-center min-h-screen text-center p-4">
            <p className="text-red-400 text-xl">Cloudinary is not configured. The application owner needs to set the cloud name.</p>
        </div>
    );
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUDINARY_CLOUD_NAME,
    },
  });

  const myVideo = cld.video(publicId);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
       <div className="w-full max-w-4xl">
         <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 transition-colors">
            <ArrowLeftIcon />
            Upload another video
         </Link>
         <div className="aspect-video w-full bg-slate-800 rounded-lg overflow-hidden shadow-2xl shadow-slate-950/50">
           <AdvancedVideo cldVid={myVideo} controls autoPlay className="w-full h-full" />
         </div>
       </div>
    </div>
  );
};

export default WatchPage;