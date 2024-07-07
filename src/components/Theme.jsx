import { options } from '../constants/index';

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
        <div className={`hidden md:fixed top-2 right-10 duration-400 dark:bg-slate-800/95 rounded-lg md:flex border-solid bg-slate-200/60`}>
            {
                options.map((themeOption) => (
                    <button className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${themeOption.text === theme ? setIconClass(themeOption) : ''} ${themeOption.text === 'dark' ? 'hover:text-blue-600' : 'hover:text-yellow-500'} duration-500`} key={themeOption.id} onClick={() => setTheme(themeOption.text)}>
                        <ion-icon name={themeOption.icon}></ion-icon>
                    </button>
                ))
            }
        </div>
    )
}

export default Theme