import React from 'react';
import './NoPage.css'; 

const NoPage = () => {
  return (
    <div className="container">
      <h2>Error 404</h2>
      <h3>Page Not Found</h3>
      <button className="button" onClick={() => window.location.href = '/'}>
        Go to Home
      </button>
    </div>
  );
}

export default NoPage;