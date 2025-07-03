import Image from 'next/image';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <Image src="/assets/loadingSpinner.svg" alt="loading.." width={50} height={50} />
    </div>
  );
};

export default LoadingSpinner;