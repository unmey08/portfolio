import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const ScrollToTopButton = () => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) {
                setShowScrollToTopButton(true)
            }
            else {
                setShowScrollToTopButton(false);
            }
        })
    }, [])
    return (
        <>
        {
            showScrollToTopButton && 
            <motion.button className="fixed bottom-2 right-10 rounded-lg dark:bg-slate-800/95 p-3 bg-blue-300/20 text-black dark:text-white dark:hover:bg-slate-700 hover:bg-blue-400 hover:shadow-lg active:shadow-lg text-2xl"
            id="btn-back-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10}}
            >
                <ion-icon name="arrow-up-outline" />
            </motion.button>
        }
        </>
            
    )
}

export default ScrollToTopButton