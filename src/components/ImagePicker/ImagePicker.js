import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectableTile
} from 'carbon-components-react';

export const ImagePicker = ({
  images,
  onClick,
}) => {

  const onImageClick = (id) => {
    onClick(id);
  }

  return (
    images.map((image, i) => {
      return (
        <div key={i} className="image-picker--section__tile">
          <SelectableTile
            id={`tile-${i}`}
            handleClick={() => { onImageClick(i); }}
          >
            <img className="image-picker--section__image"
              src={image.url}
              alt={image.alt}
            />
          </SelectableTile>
        </div>
      );
    })
  );
}

ImagePicker.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImagePicker;
