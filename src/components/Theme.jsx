import {useLocation} from 'react-router-dom';
import { options } from '../constants/index';
// import {useState, useEffect} from 'react';

const Theme = ({theme, setTheme}) => {
    // const [theme, setTheme] = useState('system');
    const pathname = useLocation().pathname;
    // const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const element = document.documentElement;

    const setIconClass = (option) => {
        if(option.text === 'light') {
            return 'text-yellow-500';
        }
        else if(option.text === 'dark') {
            return 'text-blue-600';
        }
        else {
            return 'text-gray-400'
        }
    }

    // useEffect(() => {
    //     switch (theme) {
    //         case 'dark':
    //             element.classList.add('dark');
    //             localStorage.setItem('theme', 'dark');
    //             break;
    //         case 'light':
    //             element.classList.remove('dark');
    //             localStorage.setItem('theme', 'light');
    //             break;
    //         default:
    //             localStorage.removeItem('theme');
    //             break;
    //     }
    // }, [theme])

    return (
        <div className={`hidden md:fixed top-8 right-10 duration-400 dark:bg-slate-800 bg-transparent rounded-lg md:flex border-solid border ${pathname === '/' ? 'border-black' : theme === 'dark' ? 'border-white' : 'border-black'}`}>
            {
                options.map((themeOption) => (
                    <button className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${themeOption.text === theme ? setIconClass(themeOption) : ''} hover:${setIconClass(themeOption)} duration-500`} key={themeOption.id} onClick={() => setTheme(themeOption.text)}>
                        <ion-icon name={themeOption.icon}></ion-icon>
                    </button>
                ))
            }
        </div>
    )
}

export default Theme