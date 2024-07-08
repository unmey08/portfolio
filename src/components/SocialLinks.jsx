import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SocialLinks = ({theme, page}) => {
  return (
    <div className={`${page === 'Home' && window.innerWidth < 768 ? 'flex flex-row text-3xl mt-8 justify-center space-x-5' : 'hidden md:fixed top-1/3 left-0 duration-400 dark:bg-slate-800/95 rounded-lg md:flex border-solid bg-blue-300/20 flex-col text-3xl py-10 px-2'}`}>
            {socialLinks.map((item) => (
                <Link key={item.name} className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-4 last:mb-0 ${item.className} duration-200 transition ease-in`} target="_blank" to={item.link}
                initial={{opacity: 0}} animate={{
                    opacity: 1,
                    transition: {delay: 0.9, duration: 0.4, ease: 'easeIn'}
                }}>
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <ion-icon name={item.iconUrl}></ion-icon>
                    </motion.div>
                </Link>
            ))}
    </div>
  )
}

export default SocialLinks