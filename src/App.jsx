import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Volume from "./components/Volume";
import Theme from "./components/Theme";
import { Home, About, Projects, Contact } from './pages';
import {useState, useEffect} from 'react';
import SocialLinks from "./components/SocialLinks";

const App = () => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(darkMode ? 'dark' : 'light');
    const element = document.documentElement;

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
        <main className="h-full bg-slate-300/20 dark:bg-neutral-950/95 dark:h-full">
            <Router>
                <Navbar theme={theme} setTheme={setTheme}/>
                <Theme theme={theme} setTheme={setTheme}/>
                <SocialLinks theme={theme} />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About theme={theme}/>} />
                    <Route path="/contact" element={<Contact theme={theme}/>} />
                    <Route path="/projects" element={<Projects theme={theme}/>} />
                </Routes>
                <Volume theme={theme}/>
            </Router>
        </main>
    )
}

export default App;