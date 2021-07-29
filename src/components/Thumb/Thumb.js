import React from 'react';
import { IMG } from './Thumb.styled';

const Thumb = ({image,movieId,clickable}) => {
    // console.log(image);
    return (
        <div>
<IMG src={image} alt= "movie poster"/>
        </div>
    )
}

export default Thumb
