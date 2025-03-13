import { socialLinks } from "../constants";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className={`rounded-lg md:flex border-solid text-3xl text-blue-200`}>
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          className={`mr-4 hover:text-neutral-600`}
          target="_blank"
          to={item.link}
          aria-label={item.name}
        >
          <ion-icon name={item.iconUrl}></ion-icon>
        </Link>
      ))}
    </div>
  );
};

export default HomeFooter;
