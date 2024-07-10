import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import { Home, About, Projects, Contact } from './pages';
import {useState, useEffect} from 'react';
import SocialLinks from "./components/SocialLinks";
import { AnimatePresence } from "framer-motion";
import { Particle } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(darkMode ? 'dark' : 'light');
    const element = document.documentElement;
    const location = useLocation();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setTheme('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setTheme('light')
                break;
            default:
                localStorage.removeItem('theme');
                break;
        }
    }, [theme])

    return (
        <main className={`background-fade h-fit dark:h-fit w-full no-scrollbar ${theme === 'dark' ? 'bg-slate-950 absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#313141,transparent)]' : 'absolute top-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(220,225,225,0.2),rgba(0,114,255,0.2))]'} `}>
            <ScrollToTop />
            <Particle />
                <Navbar theme={theme} setTheme={setTheme}/>
                <Theme theme={theme} setTheme={setTheme}/>
                <SocialLinks theme={theme} page={'App'}/>
                <AnimatePresence mode="wait">
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<Home theme={theme}/>}/>
                        <Route path="/about" element={<About theme={theme}/>} />
                        <Route path="/contact" element={<Contact theme={theme}/>} />
                        <Route path="/projects" element={<Projects theme={theme}/>} />
                    </Routes>
                </AnimatePresence>
            <ScrollToTopButton />
        </main>
    )
}

export default App;