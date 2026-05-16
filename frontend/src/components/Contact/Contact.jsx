import PropTypes from 'prop-types';
import Form from '../Utils/Form';


const List = ({ icon, type, details, href }) => {
    const isExternalLink = href?.startsWith('http');
    const content = (
        <>
            <div className="grid h-9 w-9 flex-none place-items-center rounded-md border border-slate-700 bg-slate-900">
                {icon}
            </div>
            <div className='min-w-0 text-sm'>
                <p className='font-semibold'>{type}</p>
                <p className='break-words text-slate-300'>{details}</p>
            </div>
        </>
    )

    if (href) {
        return (
            <a
                href={href}
                target={isExternalLink ? '_blank' : undefined}
                rel={isExternalLink ? 'noreferrer' : undefined}
                className='flex items-center gap-3 rounded-lg p-2 transition-colors duration-200 hover:bg-slate-900 hover:text-indigo-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70'
            >
                {content}
            </a>
        )
    }

    return (
        <div className='flex items-center gap-3 rounded-lg p-2'>
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
        <div className='px-4 py-10'>
            <div className='mx-auto max-w-3xl text-center'>
                <h4 className='mb-2 px-4 text-[1.4rem] font-[500] text-indigo-500'>Contact Us!</h4>
                <p className='mb-8 hidden text-slate-600 md:block'>Empowering Citizens with Essential Welfare Services, Support Programs, and Opportunities for a Better, Inclusive Future.</p>
            </div>

            <div className='mx-auto max-w-5xl overflow-hidden rounded-xl bg-slate-950 text-white shadow-xl'>
                <div className='grid gap-3 border-b border-slate-800 p-5 sm:p-6 md:grid-cols-[220px_1fr] md:items-start md:p-8'>
                    <strong className='text-2xl font-bold leading-tight'>Get in touch</strong>
                    <p className='text-sm leading-6 text-slate-300 md:text-justify'>
                        We are here to assist you with any questions or concerns you may have. Our team is dedicated to providing support and ensuring your needs are met.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr]'>
                    <div className='p-5 sm:p-6 md:p-8'>
                        <div className='flex flex-col gap-2'>
                            <List
                                icon={<i className="uil uil-phone text-slate-400" />}
                                type={'Call Us'}
                                details={'+91 8227008227'}
                                href={'tel:+918227008227'}
                            />

                            <List
                                icon={<i className="uil uil-envelope text-slate-400" />}
                                type={'Email Us'}
                                details={'info@nagriksarkar.com'}
                                href={'mailto:info@nagriksarkar.com'}
                            />

                            <List
                                icon={<i className="uil uil-comment-alt text-slate-400" />}
                                type={'X / Twitter'}
                                details={'@NagrikSarkar'}
                                href={'https://x.com/NagrikSarkar'}
                            />

                            <List
                                icon={<i className="uil uil-facebook-f text-slate-400" />}
                                type={'Facebook'}
                                details={'@NagrikSarkar'}
                                href={'https://www.facebook.com/NagrikSarkar'}
                            />

                            <List
                                icon={<i className="uil uil-instagram text-slate-400" />}
                                type={'Instagram'}
                                details={'@NagrikSarkar'}
                                href={'https://www.instagram.com/NagrikSarkar'}
                            />
                        </div>
                    </div>

                    <div className='border-t border-slate-800 p-5 sm:p-6 md:border-l md:border-t-0 md:p-8'>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact
