import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>
                Have a job opportunity for me?
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
        </section>
    );
};

export default CTA;