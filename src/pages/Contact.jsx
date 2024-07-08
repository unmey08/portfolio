import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    return { alert, showAlert, hideAlert };
};

const Contact = ({theme}) => {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleFocus = () => setCurrentAnimation("walk");
    const handleBlur = () => setCurrentAnimation("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setCurrentAnimation("hit");
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Unmey Mahaddalkar",
                    from_email: form.email,
                    to_email: "unmey08@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: "Thank you for your message!",
                        type: "success",
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setCurrentAnimation("idle");
                        setForm({
                            name: "",
                            email: "",
                            message: "",
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setCurrentAnimation("idle");

                    showAlert({
                        show: true,
                        text: "I didn't receive your message",
                        type: "danger",
                    });
                }
            );
    };

    return (
        <AnimatedPage>
            <section className='relative flex lg:flex-row flex-col max-container w-full h-screen dark:h-screen'>
                {alert.show && <Alert {...alert} />}

                <div className='flex-1 min-w-[50%] flex flex-col'>
                    <motion.h1 className='head-text dark:text-white' initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                    }}>Get in Touch</motion.h1>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='w-full flex flex-col gap-7 mt-14'
                    >
                        <motion.div initial={{opacity: 0}} animate={{
                            opacity: 1,
                            transition: {delay: 0.2, duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                        }}>
                            <label className='text-black-500 dark:text-slate-400 font-semibold'>
                                Name
                                <input
                                    type='text'
                                    name='name'
                                    className={theme === 'dark' ? 'dark-input' : 'input'}
                                    placeholder='John'
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </motion.div>
                        <motion.div initial={{opacity: 0}} animate={{
                            opacity: 1,
                            transition: {delay: 0.4, duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                        }}>
                            <label className='text-black-500 dark:text-slate-400 font-semibold'>
                                Email
                                <input
                                    type='email'
                                    name='email'
                                    className={theme === 'dark' ? 'dark-input' : 'input'}
                                    placeholder='John@gmail.com'
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </motion.div>
                        <motion.div initial={{opacity: 0}} animate={{
                            opacity: 1,
                            transition: {delay: 0.6, duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                        }}>
                            <label className='text-black-500 dark:text-slate-400 font-semibold'>
                                Your Message
                                <textarea
                                    name='message'
                                    rows='4'
                                    className={theme === 'dark' ? 'dark-textarea' : 'textarea'}
                                    placeholder='Write your thoughts here...'
                                    value={form.message}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </label>
                        </motion.div>

                        <motion.button
                            type='submit'
                            disabled={loading}
                            className='btn'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            initial={{opacity: 0}} animate={{
                                opacity: 1,
                                transition: {delay: 0.8, duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                            }}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </motion.button>
                    </form>

                    <motion.div className="text-center text-black-500 dark:text-slate-400" initial={{opacity: 0}} animate={{
                        opacity: 1,
                        transition: {delay: 1, duration: 0.4, ease: [0.22, 0, 0.39, 1]}
                    }}>
                        <p className="text-2xl font-bold mt-5">OR</p>
                        <p className="mt-5">You can reach out to me at <a href="mailto:unmey08@gmail.com" className="text-blue-500 hover:underline">unmey08@gmail.com</a></p>
                    </motion.div>
                </div>

                <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Contact;