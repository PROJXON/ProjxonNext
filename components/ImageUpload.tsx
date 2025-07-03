import { ChangeEvent, forwardRef } from 'react';
import { ImageUploadProps } from '@/types/interfaces';

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(({ onFileSelect }, ref) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) onFileSelect(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" ref={ref} onChange={handleFileChange} />
    </div>
  );
});

export default ImageUpload;