import React, { useState } from "react";
const FullScreenVideo = () => {
  // Estado para controlar si el video está visible
  const [showVideo, setShowVideo] = useState(false);

  // Función para mostrar el video
  const handleShowVideo = () => {
    setShowVideo(true);
  };

  // Función para ocultar el video cuando termina
  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div>
      {/* Botón para activar el video */}
      <button
        onClick={handleShowVideo}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Mostrar Video
      </button>

      {/* Video en pantalla completa si `showVideo` es verdadero */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <video
            src="../assets/video/viaje.mp4" // Reemplaza con la URL de tu video
            className="w-full h-full object-cover"
            autoPlay
            onEnded={handleVideoEnd} // Desaparecer cuando termine el video
          />
        </div>
      )}
    </div>
  );
};

export default FullScreenVideo;
