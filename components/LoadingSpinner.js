import loadingSpinner from "/assets/loadingSpinner.svg";

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <img src={loadingSpinner} alt="loading.." />
    </div>
  );
};

export default LoadingSpinner;
