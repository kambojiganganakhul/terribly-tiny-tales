import React from 'react';
import Icon from './icon';
import { faStar, faThumbsUp, faEye,faHeart } from '@fortawesome/free-solid-svg-icons';

const MyComponent = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Icon icon={faStar} color="#7CB9E8" text="125" />
        <Icon icon={faThumbsUp} color="yellow" text="12" />
        <Icon icon={faEye}  color="grey" text="57.8k" />
        <Icon icon={faHeart}  color="red" text="26.0k" />
      </div>
      <br/>
      <strong style={{ borderTop:".25px solid #DCDCDC", borderRight:".25px solid #DCDCDC" ,color:"#7CB9E8"}}>134 posts{' '} </strong>
    </div>
  );
};

export default MyComponent;
