import { NavLink } from 'react-router-dom'
import {useState} from 'react';
import {logo} from '../assets/images'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(value => !value);
    }

    const setMenuClasses = () => {
        if(isMenuOpen) {
            return 'w-screen h-screen opacity-80'
        }
        else {
            return 'w-0 h-0 opacity-0'
        }
    }

    return (
        <div>
            <header className='header'>
                <NavLink to="/" className="hidden md:block w-20 h-20">
                    <img src={logo} className='blue-gradient_text'/>
                </NavLink>
                <nav className='text-lg gap-7 font-medium hidden md:flex'>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black dark:text-gray-200 hover:text-gray-400 duration-500'}>
                        About
                    </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black dark:text-gray-200 hover:text-gray-400 duration-500'}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black dark:text-gray-200 hover:text-gray-400 duration-500'}>
                        Contact Me
                    </NavLink>
                    <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black dark:text-gray-200 hover:text-gray-400 duration-500'}>
                        Resume
                    </NavLink>
                </nav>
                <div className='block md:hidden'>
                    {!isMenuOpen && <button className='text-3xl text-white duration-700 transition' onClick={openMenu}><ion-icon name="menu-outline"></ion-icon></button>}
                    {isMenuOpen && <button className='text-3xl text-white duration-700 transition' onClick={openMenu}><ion-icon name="close-outline"></ion-icon></button>}
                </div>
            </header>
            {isMenuOpen &&
                <div className={`z-90 ${setMenuClasses()} transition flex justify-center items-center bg-blue-500 dark:bg-neutral-700 duration-700 dark:opacity-95 ease-in-out`}>
                    <ul className='text-white text-3xl'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-black uppercase my-12' : 'text-black dark:text-white transition ease-out duration-500 block uppercase mb-12'} onClick={() => setIsMenuOpen(prev => !prev)}>
                        Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-black uppercase my-12' : 'text-black dark:text-white transition ease-out  duration-500 block uppercase my-12'} onClick={() => setIsMenuOpen(prev => !prev)}>
                        About
                        </NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-black uppercase my-12' : 'text-black dark:text-white transition ease-out  duration-500 block uppercase my-12'} onClick={() => setIsMenuOpen(prev => !prev)}>
                            Projects
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-black uppercase my-12' : 'text-black dark:text-white transition ease-out duration-500 block uppercase my-12'} onClick={() => setIsMenuOpen(prev => !prev)}>
                            Contact Me
                        </NavLink>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? 'text-black uppercase my-12' : 'text-black dark:text-white transition ease-out  duration-500 block uppercase mt-12'} onClick={() => setIsMenuOpen(prev => !prev)}>
                            Resume
                        </NavLink>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Navbar