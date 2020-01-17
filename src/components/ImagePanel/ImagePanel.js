import React from 'react';
import PropTypes from 'prop-types';
import ImagePicker from '../ImagePicker/ImagePicker';
import Loader from '../Loader/Loader';
import UploadImage from '../UploadImage/UploadImage';

const ImagePanel = ({
  showLoader,
  viewerImage,
  pickerImages,
  onSelectTile,
  onUpload,
}) => {
  return (
    <div className="main-image-picker__container">
      <div className="main-image-picker">
        <div>
          <img className="main-image-picker__image"
            src={viewerImage}
            alt="main"
          />
          {showLoader ? (
            <Loader />
          ) : null}
        </div>
      </div>
      <div className="image-selection__container">
        <div className="image-picker__tiles">
          <ImagePicker
            images={pickerImages}
            onClick={(id) => { onSelectTile(id); }}
          />
          <UploadImage
            onUpload={(files) => { onUpload(files); }}
          />
        </div>
      </div>
    </div>
  );
};

ImagePanel.propTypes = {
  showLoader: PropTypes.bool.isRequired,
  viewerImage: PropTypes.string.isRequired,
  pickerImages: PropTypes.array.isRequired,
  onSelectTile: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  viewerType: PropTypes.string,
};

ImagePanel.defaultProps = {
  viewerType: 'image',
};

export default ImagePanel;
