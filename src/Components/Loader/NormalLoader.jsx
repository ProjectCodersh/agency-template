// import React from 'react'
import { LoaderCircleIcon } from 'lucide-react';
import '../../assets/loader.css';

function NormalLoader() {
  return (
    <>
      <div className="loader-container">
        <LoaderCircleIcon />
      </div>
    </>
  );
}

export default NormalLoader;
