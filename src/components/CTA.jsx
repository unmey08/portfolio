import { motion } from "framer-motion";

const CTA = () => {
    return (
        <motion.section className='cta' initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.3, ease: 'easeIn'}}>
            <p className='cta-text dark:text-white'>
                Have a job opportunity for me?
            </p>
            <motion.button whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10}}>
                <a href='#contact' className="btn">Contact</a>
            </motion.button>
        </motion.section>
    );
};

export default CTA;
