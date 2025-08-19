// import React from 'react';
import { LoaderCircleIcon } from 'lucide-react';
import '../../assets/loader.css';

const simpleLoader = () => {
  return (
    <>
      <div className="loader-container">
        <LoaderCircleIcon />
      </div>
    </>
  );
};

export default simpleLoader;
