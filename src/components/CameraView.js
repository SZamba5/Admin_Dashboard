// src/components/CameraView.js
import React, { useRef, useEffect } from 'react';

const CameraView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let currentVideoRef = videoRef.current; // Capture the current value

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (currentVideoRef) {
          currentVideoRef.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    };

    startCamera();

    return () => {
      // Use the captured value in the cleanup function
      if (currentVideoRef && currentVideoRef.srcObject) {
        const tracks = currentVideoRef.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []); // Empty dependency array is fine here

  return (
    <div className="camera-view">
      <h3>Camera View</h3>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default CameraView;