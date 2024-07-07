import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'

const SocialLinks = ({theme}) => {
  return (
    <div className={`hidden md:fixed top-1/3 left-0 duration-400 dark:bg-slate-800/95 rounded-lg md:flex border-solid bg-slate-200/60 flex-col text-3xl py-10 px-2`}>
            {socialLinks.map((item) => (
                <Link key={item.name} className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-4 last:mb-0 ${item.className}`} target="_blank" to={item.link}>
                    <ion-icon name={item.iconUrl}></ion-icon>
                </Link>
            ))}
    </div>
  )
}

export default SocialLinks