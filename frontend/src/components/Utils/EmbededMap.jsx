import React from 'react';

const EmbededMap = () => {
    return (
        <iframe className='w-full'
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3567580.286009529!2d77.8574!3d29.165699999999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730366059260!5m2!1sen!2sin"
            width="400"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    );
}

export default EmbededMap;
