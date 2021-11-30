import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link, Pane } from 'evergreen-ui';

library.add(fab, faTwitter, faDiscord);

const SocialLink = () => {
  return (
    <Pane display="flex" width={80} justifyContent="space-between">
      <Link
        href="https://twitter.com/angrybullycity?s=21"
        target="_blank"
        rel="noreferrer"
        style={{ marginRight: '10px' }}
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="white" />
      </Link>
      <Link href="https://discord.gg/YE4CQVYk" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'discord']} size="2x" color="white" />
      </Link>
    </Pane>
  );
};

export default SocialLink;
