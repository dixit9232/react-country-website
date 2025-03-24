import "../css/error.css"

export const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404 Error</h1>
      <p className="error-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <button className="btn" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};
