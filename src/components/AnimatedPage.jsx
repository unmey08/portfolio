import {motion} from 'framer-motion'

const AnimatedPage = ({children}) => {
    const animationsVar = {
        initial: {
            opacity: 0,
            // x: 100,
            // scaleX: 0,
            // scaleY: 0
        },
        animate: {
            opacity: 1,
            // x: 0,
            // scaleX: 1,
            // scaleY: 1
        },
        exit: {
            opacity: 0,
            // x: -100,
            // scaleX: 1,
            // scaleY: 1
        }
    }

    return (
        <div>
            <motion.div variants={animationsVar} initial="initial" animate="animate" exit="exit" transition={{duration: 0.4, ease: [0.22, 0, 0.39, 1], type: "spring"}}>
                {children}
            </motion.div>
        </div>
    )
}

export default AnimatedPage