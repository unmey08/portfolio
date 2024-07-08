import { options } from '../constants/index';
import { Tooltip } from '@material-tailwind/react';
import { motion } from 'framer-motion';

const Theme = ({theme, setTheme}) => {

    const setIconClass = (option) => {
        if(option.text === 'light') {
            return 'text-yellow-500';
        }
        else if(option.text === 'dark') {
            return 'text-blue-600';
        }
        else {
            return 'text-gray-400'
        }
    }

    return (
        <div className={`hidden md:fixed top-2 right-10 duration-400 dark:bg-slate-800/95 rounded-lg md:flex border-solid bg-blue-300/20`}>
            {
                options.map((themeOption) => (
                    <Tooltip content={themeOption.uiText} animate={{
                                    mount: {scale: 1, y: 0},
                                    unmount: {scale: 0, y: 25}
                    }} className="bg-neutral-500 dark:bg-slate-700" key={themeOption.id}>
                        <motion.button whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10}} className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${themeOption.text === theme ? setIconClass(themeOption) : ''} ${themeOption.text === 'dark' ? 'hover:text-blue-600' : 'hover:text-yellow-500'}`} onClick={() => setTheme(themeOption.text)}>
                            <ion-icon name={themeOption.icon}></ion-icon>
                        </motion.button>
                    </Tooltip>
                ))
            }
        </div>
    )
}

export default Theme