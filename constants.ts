/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUD_NAME: string
  readonly VITE_CLOUDINARY_UPLOAD_PRESET: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
console.log("CLOUDINARY_CLOUD_NAME:", CLOUDINARY_CLOUD_NAME);
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

