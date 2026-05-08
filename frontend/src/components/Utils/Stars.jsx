import React from 'react';
import star from '../../assets/star.svg';
import halfStar from '../../assets/half-star.svg';
import mutedStar from '../../assets/star_muted.svg';

const Stars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const halfStars = hasHalfStar ? 1 : 0;
    const emptyStars = Math.max(0, 5 - fullStars - halfStars);

    const starsArray = [
        ...Array(fullStars).fill(star),
        ...Array(halfStars).fill(halfStar),
        ...Array(emptyStars).fill(mutedStar),
    ];

    return (
        <div className='flex gap-[1px]'>
            {starsArray.map((star, index) => (
                <img key={index} src={star} alt="star" className='w-4 h-4' />
            ))}
        </div>
    );
}

export default Stars;
