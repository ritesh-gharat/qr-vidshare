import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

interface QRCodeDisplayProps {
  publicId: string;
  onReset: () => void;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ publicId, onReset }) => {
  const shareUrl = `${window.location.origin}${window.location.pathname}#/watch/${publicId}`;

  return (
    <div className="w-full bg-slate-800/50 rounded-lg p-8 flex flex-col items-center animate-fade-in">
      <h2 className="text-2xl font-bold text-slate-200 mb-2">Share Your Video!</h2>
      <p className="text-slate-400 mb-6">Scan this QR code with a phone to watch the video.</p>
      
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <QRCodeCanvas value={shareUrl} size={256} level="H" includeMargin={true} />
      </div>

      <div className="w-full max-w-md mt-6">
        <p className="text-slate-400 text-sm mb-2">Or share this link:</p>
        <div className="flex items-center gap-2">
          <input
            type="text"
            readOnly
            value={shareUrl}
            className="w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-6 rounded-lg transition-transform duration-200 hover:scale-105"
      >
        Upload Another Video
      </button>
    </div>
  );
};

export default QRCodeDisplay;