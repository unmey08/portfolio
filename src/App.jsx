import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Volume from "./components/Volume";
import Theme from "./components/Theme";
import { Home, About, Projects, Contact, Resume } from './pages';

const App = () => {
    return (
        <main className="h-full bg-slate-300/20 dark:bg-neutral-950 dark:h-full">
            <Router>
                <Navbar />
                <Theme />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Volume />
            </Router>
        </main>
    )
}

export default App;