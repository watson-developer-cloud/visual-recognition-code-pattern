import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Tile,
} from 'carbon-components-react';
import ImagePanel from '../ImagePanel/ImagePanel';

export const ImageContainer = ({
  images,
  onSubmitImage,
  handleUnsupportedFormats,
  isClassifying,
}) => {
  let defaultImageUrl = '';
  if (images[0] && images[0].url) {
    defaultImageUrl = images[0].url;
  }
  const [mainDisplayImage, setMainDisplayImage] = useState(defaultImageUrl);

  const submitSampleImage = (tileId) => {
    const selectedImage = images[tileId].url;
    onSubmitImage({ image_file: selectedImage });
    setMainDisplayImage(selectedImage);
  }

  const submitUserImage = (images) => {
    const image = images[0];
    const acceptedImageTypes = ['image/gif','image/png','image/jpg','image/jpeg'];
    if (!acceptedImageTypes.includes(image.type)) {
      handleUnsupportedFormats();
    }
    else {
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const imageData = reader.result;
        setMainDisplayImage(imageData);
        onSubmitImage({ image_data: imageData });
      }
      reader.readAsDataURL(image);
    }
  };

  return (
    <Tile className="input-container">
      <h4 className="container-title">Input</h4>
      <ImagePanel
        showLoader={isClassifying}
        viewerImage={mainDisplayImage}
        pickerImages={images}
        onSelectTile={(tileId) => { submitSampleImage(tileId); }}
        onUpload={(images) => { submitUserImage(images); }}
      />
      <h4 className="container-footer">Select An Image to Analyze</h4>
    </Tile>
  );
}

ImageContainer.propTypes = {
  onSubmitImage: PropTypes.func.isRequired,
  handleUnsupportedFormats: PropTypes.func.isRequired,
  isClassifying: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageContainer;
