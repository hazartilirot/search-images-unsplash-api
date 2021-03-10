import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'

/*Never forget to add props once you passed a value in a parent component to a child*/
/*Notice how destructuring is used in an arrow function.*/
const ImageList = props => {
  const arr = props.images.map(img => <ImageCard key={img.id} image={img} />)
  
  return (
      <div>
        <div className="image-list">{arr}</div>
        ImageList: {props.images.length}
      </div>
  )
}
export default ImageList;