import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import {
  SelectableTile
} from 'carbon-components-react';
import Upload32 from '@carbon/icons-react/lib/upload/32';

export const UploadImage = ({
  onUpload,
}) => {
  return (
    <div className="image-picker--section__tile">
      <SelectableTile
        id="123"
        handleClick={() => {}}
      >
        <Dropzone
          multiple={false}
          onDrop={(acceptedFiles) => { onUpload(acceptedFiles); }}
        >
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()} className="upload-image">
              <input {...getInputProps()} />
              <Upload32 />
              <p className="upload-text">Select or drag an image</p>
            </div>
          )}
        </Dropzone>
      </SelectableTile>
  </div>
);
}

UploadImage.propTypes = {
  onUpload: PropTypes.func.isRequired,
};

export default UploadImage;
