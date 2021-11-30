import React from 'react';
import { Pane } from 'evergreen-ui';

const Background = () => {
  return (
    <Pane
      width="100vw"
      height="calc(100% + 124px)"
      background="url(images/cover.jpeg)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      opacity="0.3"
      position="absolute"
      left="calc(50% - 50vw)"
      top={-124}
      zIndex={-1}
    ></Pane>
  );
};

export default Background;
