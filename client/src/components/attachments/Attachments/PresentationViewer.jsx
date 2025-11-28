/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './PresentationViewer.module.scss';

const PresentationViewer = React.memo(({ src, className }) => {
  // Use Office Online Viewer for presentations
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(src)}`;

  return (
    // eslint-disable-next-line jsx-a11y/iframe-has-title
    <iframe src={viewerUrl} className={classNames(styles.wrapper, className)} />
  );
});

PresentationViewer.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PresentationViewer.defaultProps = {
  className: undefined,
};

export default PresentationViewer;
