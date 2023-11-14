import React, { useState, useRef } from 'react';

const AudioButton = ({ audioUrl }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className="AudioBtn" onClick={toggleAudio}>
        {isPlaying ? 'Pause' : 'Écouter' }
       

      </button>
      <audio ref={audioRef} src={audioUrl} />
    </div>
  );
};

export default AudioButton;
