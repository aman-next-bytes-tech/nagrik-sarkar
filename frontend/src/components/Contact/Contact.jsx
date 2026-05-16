import PropTypes from 'prop-types';
import Form from '../Utils/Form';


const List = ({ icon, type, details, href }) => {
    const content = (
        <>
            <div className="border-2 border-slate-700 w-7 h-7 rounded grid place-items-center">
                {icon}
            </div>
            <div className='text-sm'>
                <p className='font-semibold'>{type}</p>
                <p className='text-slate-300 break-all'>{details}</p>
            </div>
        </>
    )

    if (href) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='flex gap-2 items-center rounded-md transition-colors duration-200 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
            >
                {content}
            </a>
        )
    }

    return (
        <div className='flex gap-2 items-center'>
            {content}
        </div>
    )
}

List.propTypes = {
    icon: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    href: PropTypes.string,
}

const Contact = () => {
    return (
        <div className='py-8'>
            <div className='text-center max-w-screen-xl m-auto'>
                <h4 className='font-[500] text-[1.4rem] px-[1rem] text-indigo-500 mb-2'>Contact Us!</h4>
                <p className='hidden md:block text-slate-600 mb-8'>Empowering Citizens with Essential Welfare Services, Support Programs, and Opportunities for a Better, Inclusive Future.</p>
            </div>

            <div className='max-w-4xl m-auto grid grid-cols-2 p-4 md:rounded-xl bg-slate-950 text-white'>
                <div className='pr-4'>
                    <div className='border-b border-slate-800'>
                        <strong className='text-xl font-bold mb-4'>Get in touch</strong>
                        <p className='text-slate-300 mb-4'>
                            We are here to assist you with any questions or concerns you may have. Our team is dedicated to providing support and ensuring your needs are met.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3 mt-4'>
                        <List
                            icon={<i className="text-slate-400 uil uil-phone" />}
                            type={'Call Us'}
                            details={'+91 8227008227'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-envelope" />}
                            type={'send Email'}
                            details={'info@nagriksarkar.com'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-comment-alt" />}
                            type={'Tweet Us'}
                            details={'@NagrikSarkar'}
                            href={'https://x.com/NagrikSarkar'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-facebook-f" />}
                            type={'Facebook'}
                            details={'@Nagrik-Sarkar'}
                            href={'https://www.facebook.com/NagrikSarkar'}
                        />
                        <List
                            icon={<i className="text-slate-400 uil uil-instagram" />}
                            type={'Instagram'}
                            details={'@nagriksarkar'}
                            href={'https://www.instagram.com/NagrikSarkar'}
                        />
                    </div>
                </div>
                <div className='border-l border-slate-800 pl-4'>
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Contact
