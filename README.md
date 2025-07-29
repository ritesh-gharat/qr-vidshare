# QR Video Share

A Basic Video Sharing application that allows users to upload videos and generate QR codes for easy sharing. Built with React, TypeScript, Vite, and Cloudinary for video storage and streaming.

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd qr-vidshare
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

### 3. Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace the placeholder values with your actual Cloudinary credentials:
   ```bash
   CLOUDINARY_CLOUD_NAME='your_cloud_name'
   CLOUDINARY_UPLOAD_PRESET='your_upload_preset'
   ```

### 4. Configure Cloudinary

To get your Cloudinary credentials:

1. **Sign up** for a free Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. **Get your Cloud Name**: Available on your Cloudinary Dashboard main page
3. **Create an Upload Preset**:
   - Go to Settings → Upload
   - Click "Add upload preset"
   - Set "Signing Mode" to "Unsigned" (for client-side uploads)
   - Copy the preset name
4. **Update your `.env` file** with these credentials

## Development

### Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
qr-vidshare/
├── components/          # Reusable React components
│   ├── FileUpload.tsx   # File upload component
│   ├── icons.tsx        # Icon components
│   ├── Loader.tsx       # Loading component
│   └── QRCodeDisplay.tsx # QR code generation component
├── pages/               # Page components
│   ├── UploadPage.tsx   # Video upload page
│   └── WatchPage.tsx    # Video viewing page
├── App.tsx              # Main application component
├── constants.ts         # Application constants
├── index.tsx            # Application entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## Technologies Used

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **Cloudinary** - Video storage and streaming
- **QRCode.react** - QR code generation