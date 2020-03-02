import React from 'react';
import { Button, Link } from 'carbon-components-react';
import { default as Api124 } from '@carbon/icons-react/lib/API--1/24';
import Document24 from '@carbon/icons-react/lib/document/24';
import IbmCloud24 from '@carbon/icons-react/lib/ibm-cloud/24';
import Launch16 from '@carbon/icons-react/lib/launch/16';
import LogoGithub24 from '@carbon/icons-react/lib/logo--github/24';

import './styles/main.scss';
import useScript from './hooks/useScript';
import Header from './components/Header';
import ServiceContainer from './components/ServiceContainer';
import { description, title } from './data/input.json';

const HEADER_LINKS = [
  <Link
    className="link"
    key="api-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/apidocs/visual-recognition"
  >
    <p className="link-text">API reference</p>
    <Api124 className="link-icon" />
  </Link>,
  <Link
    className="link"
    key="docs-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/docs/services/visual-recognition?topic=visual-recognition-getting-started-tutorial"
  >
    <p className="link-text">Documentation</p>
    <Document24 className="link-icon" />
  </Link>,
  <Link
    className="link"
    key="github-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/watson-developer-cloud/visual-recognition-code-pattern"
  >
    <p className="link-text">GitHub</p>
    <LogoGithub24 className="link-icon" />
  </Link>,
  <Link
    className="link getting-started"
    key="ibm-cloud-link"
    target="_blank"
    rel="noopener noreferrer"
    href="https://cloud.ibm.com/registration?target=%2Fdeveloper%2Fwatson%2Flaunch-service%2Fvisual-recognition%3FhideTours%3Dtrue"
  >
    <Button className="link-button" kind="tertiary" renderIcon={Launch16}>
      Start for free on IBM Cloud
    </Button>
    <IbmCloud24 className="link-icon" />
  </Link>,
];

export const App = () => {
  useScript(
    'https://cdn.jsdelivr.net/gh/watson-developer-cloud/watson-developer-cloud.github.io@master/analytics.js',
  );

  return (
    <div className="app-container">
      <Header
        description={description}
        links={HEADER_LINKS}
        title={title}
      />
      <ServiceContainer />
    </div>
  );
}

export default App;