import React from 'react';
import { Pane } from 'evergreen-ui';

const Background = () => {
  return (
    <Pane
      className="background-image"
      width="100vw"
      height="calc(100% + 94px)"
      background="url(images/cover.jpeg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      opacity="0.3"
      position="absolute"
      left="calc(50% - 50vw)"
      top={-94}
      zIndex={-1}
    ></Pane>
  );
};

export default Background;
