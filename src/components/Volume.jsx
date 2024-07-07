import { useState, useEffect, useRef } from 'react';
import cinematicAudio from '../assets/audio/peaceful-cinematic.mp3'
import { useLocation } from 'react-router-dom';

const Volume = ({theme}) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioRef = useRef(new Audio(cinematicAudio));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    const pathname = useLocation().pathname;

    useEffect(() => {
        if(isAudioPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isAudioPlaying]);


  return (
    <div className={`hidden md:block fixed bottom-2 right-10 mt-1 w-10 h-10 cursor-pointer object-contain ${pathname === '/' ? 'text-black-500' : theme === 'dark' ? 'text-gray-200' : 'text-black-500'} font-bold`}>
        <button className={`w-8 h-8 leading-9 text-3xl rounded-full m-1 ${pathname === '/' ? 'text-blue-200 hover:text-gray-400' : theme === 'dark' ? 'text-white' : 'text-black hover:text-neutral-400'}`} onClick={() => setIsAudioPlaying(isAudioPlaying => !isAudioPlaying)}>
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