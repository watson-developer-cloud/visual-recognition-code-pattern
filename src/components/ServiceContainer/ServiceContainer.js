import React, { useState } from 'react';
import ImageContainer from '../ImageContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import Toast from '../Toast';
import { parseClassifyResponse, getTopTenClasses } from './utils';

import sampleImages from '../../data/sampleImages.json';
import defaultResponse from '../../data/mockClassifyResponse.json';

const GDPR_DISCLAIMER =
  'This system is for demonstration purposes only and is not intended to process Personal Data. No Personal Data is to be entered into this system as it may not have the necessary controls in place to meet the requirements of the General Data Protection Regulation (EU) 2016/679.';

export const ServiceContainer = () => {
  const [isClassifying, setIsClassifying] = useState(false);
  const [results, setResults] = useState(defaultResponse);
  const [error, setError] = useState(null);

  const handleUnsupportedFormats = () => {
    setError({ title: 'Invalid file format:', description: 'Only JPGs, PNGs, and GIFs are supported' });
  }

  const onClassify = async (image) => {
    setIsClassifying(true);
    fetch('/api/classify', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(image),
    })
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setResults(parseClassifyResponse(data));
      }
    })
    .catch((err) => {
        setError({ title: err.message, description: err.message });
    })
    .finally(() => setIsClassifying(false));
  };

  return (
    <div className="service-container">
      <Toast kind="info" subtitle={GDPR_DISCLAIMER}/>
      {error && (
        <Toast
          kind="error"
          title={error.title}
          subtitle={error.description}
          hideAfterFirstDisplay={false}
          timeout={5000}
          onCloseButtonClick={() => setError(null)}
        />
      )}
      <ImageContainer
        onSubmitImage={(image) => { onClassify(image); }}
        isClassifying={isClassifying}
        images={sampleImages}
        handleUnsupportedFormats={handleUnsupportedFormats}
      />
      <OutputContainer
        classifyResults={getTopTenClasses(results)}
      />
    </div>
  );
};

export default ServiceContainer;
