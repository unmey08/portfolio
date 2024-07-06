import { useState, useEffect, useRef } from 'react';
import cinematicAudio from '../assets/audio/peaceful-cinematic.mp3'
import { useLocation } from 'react-router-dom';

const Volume = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioRef = useRef(new Audio(cinematicAudio));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const pathname = useLocation().pathname;
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        if(isAudioPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isAudioPlaying]);


  return (
    <div className={`hidden md:block fixed bottom-2 right-10 mt-1 w-10 h-10 cursor-pointer object-contain ${pathname === '/' ? 'text-black-500' : darkMode ? 'text-gray-200' : 'text-black-500'} font-bold`}>
        <button className={`w-8 h-8 leading-9 text-3xl rounded-full m-1 ${pathname === '/' ? 'hover:text-gray-200' : darkMode ? 'text-white' : 'text-black'}`} onClick={() => setIsAudioPlaying(!isAudioPlaying)}>
            {isAudioPlaying ? (
                <ion-icon name="volume-medium-outline"></ion-icon>
            ) : (
                <ion-icon name="volume-off-outline"></ion-icon>
            )}
        </button>
    </div>
  )
}

export default Volume