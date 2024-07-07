import { socialLinks } from "../constants"
import { Link } from "react-router-dom"

const HomeFooter = () => {
  return (
    <div className={`hidden md:fixed bottom-0 left-2/4 duration-400 rounded-lg md:flex border-solid text-3xl text-blue-200`}>
            {socialLinks.map((item) => (
                <Link key={item.name} className={`mr-4 hover:text-neutral-600`} target="_blank" to={item.link}>
                    <ion-icon name={item.iconUrl}></ion-icon>
                </Link>
            ))}
    </div>
  )
}

export default HomeFooter