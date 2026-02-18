import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

// Import local audio files
import hamakiSong from '../hamaki.mp3';
import younesSong from '../younes.mp3';
import ehsasSong from '../ehsas.mp3';

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0); // Default to Hamaki (we'll arrange playlist so 0 is Hamaki if desired, or let user pick)
  
  // Arrange playlist - User prioritized Hamaki
  const playlist = [
    { title: "حماقي - خليت حياتي جنة", url: hamakiSong },
    { title: "يونس - في بلاد الشوق", url: younesSong },
    { title: "إحساس غريب", url: ehsasSong }
  ];

  // Native Audio Object
  const audioRef = useRef(new Audio(playlist[0].url));

  // Handle Song Change
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(playlist[currentSongIndex].url);
    audioRef.current.loop = true;
    
    // Maintain play state if it was playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log("Playback failed or interrupted:", error);
            // Don't set IsPlaying to true if it failed
            setIsPlaying(false);
          });
      }
    }
  };
  
  const playSong = (index) => {
    if (currentSongIndex === index) {
      togglePlay();
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true); // Logic in useEffect will handle the actual play()
    }
  };

  return (
    <AudioContext.Provider value={{ 
      isPlaying, 
      togglePlay, 
      currentSongIndex, 
      playSong, 
      playlist 
    }}>
      {children}
    </AudioContext.Provider>
  );
};
