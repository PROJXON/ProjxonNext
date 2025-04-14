import React from "react";

const ImageUpload = React.forwardRef(({ onFileSelect }, ref) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileSelect(selectedFile);
  };

  return (
    <div>
      <input type="file" ref={ref} onChange={handleFileChange} />
    </div>
  );
});

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
