import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
    return (
        <motion.section className='cta' initial={{opacity: 0}} animate={{
            opacity: 1,
            transition: {delay: 1, duration: 0.3, ease: 'easeIn'}
        }}>
            <p className='cta-text dark:text-white'>
                Have a job opportunity for me?
            </p>
            <motion.button whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10}}>
                <Link to='/contact' className="btn">Contact</Link>
            </motion.button>
        </motion.section>
    );
};

export default CTA;