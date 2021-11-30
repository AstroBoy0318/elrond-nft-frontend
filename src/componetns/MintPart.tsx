import * as Dapp from '@elrondnetwork/dapp';
import { Pane, Button, Paragraph, Text } from 'evergreen-ui';
import { createNft, setManager } from '../transactions';
import SocialLink from './SocialLink';
import Background from './Background';
import { siteName } from '../config';

const MintPart = () => {
  const sendTransaction = Dapp.useSendTransaction();
  const { address } = Dapp.useContext();
  const buyNFTHandler = async () => {
    const transaction = await createNft();
    if (transaction !== null) {
      sendTransaction({
        transaction: transaction,
        callbackRoute: '/',
      });
    }
  };
  const setManagerHandler = () => {
    sendTransaction({
      transaction: setManager(),
      callbackRoute: '/',
    });
  };
  return (
    <Pane position="relative" minHeight="calc(100vh - 124px)">
      <Background />
      <Paragraph textAlign="center">
        <Text
          fontWeight="bold"
          fontSize="3em"
          color="white"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          {siteName}
        </Text>
      </Paragraph>
      <Paragraph
        marginTop={50}
        textAlign="center"
        maxWidth={1000}
        marginX="auto"
      >
        <Text
          color="#fff"
          fontSize="1.5em"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          Angry Bully City is a Collection of 8888 designer crafted American
          Bullies. Built with a savage style, each bully executes a mean mug..
          perfect for the hustle and bustle of any city setting. 111 Bullies
          will be boxed for the core team to give away and promote the project.
          Each bully will allow its holder access to our future sythentic world
          The Dog Park. You will be able to play as your own bully in order to
          buy property, interact with others and really make a name for yourself
          in our unique metaverse.
        </Text>
      </Paragraph>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={50}
      >
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.2em"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          Total Bullies
        </Text>
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.5em"
          marginTop={10}
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          8888
        </Text>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={20}
      >
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.2em"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          Bully Price
        </Text>
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.5em"
          marginTop={10}
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          0.5 Eglod
        </Text>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={20}
      >
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.2em"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          Sale Starts
        </Text>
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.5em"
          marginTop={10}
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          December 01
        </Text>
      </Pane>
      <Paragraph marginTop={50} textAlign="center">
        <Button
          disabled={!address}
          appearance="primary"
          size="large"
          transform="scale(1.5)"
          onClick={buyNFTHandler}
        >
          Buy a nft item
        </Button>
        <Button
          display="none"
          disabled={!address}
          appearance="primary"
          size="large"
          onClick={setManagerHandler}
        >
          Set Manager
        </Button>
      </Paragraph>
      <Pane
        marginTop={60}
        paddingBottom={50}
        display="flex"
        justifyContent="space-around"
      >
        <SocialLink />
      </Pane>
    </Pane>
  );
};

export default MintPart;
