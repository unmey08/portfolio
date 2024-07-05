import { NavLink } from 'react-router-dom'
import cinematicAudio from '../assets/audio/peaceful-cinematic.mp3'
import { soundoff, soundon } from '../assets/icons';
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const audioRef = useRef(new Audio(cinematicAudio));
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;

    useEffect(() => {
        if(isAudioPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isAudioPlaying]);
    return (
        <header className='header'>
            <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className='blue-gradient_text'>UM</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact Me
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Resume
                </NavLink>
                <div>
                <img src={isAudioPlaying ? soundon : soundoff} className='mt-1 w-5 h-5 cursor-pointer object-contain' alt='sound' onClick={() => setIsAudioPlaying(!isAudioPlaying)}/>
            </div>
            </nav>
        </header>
    )
}

export default Navbar