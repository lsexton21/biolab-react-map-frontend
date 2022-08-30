import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <h3>Loading Species...</h3>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
