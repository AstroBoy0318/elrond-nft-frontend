import * as Dapp from '@elrondnetwork/dapp';
import { Pane, Button, Paragraph, Text } from 'evergreen-ui';
import { createNft, setManager } from '../transactions';
import SocialLink from './SocialLink';
import Background from './Background';
import { siteName, mainLaunchDate } from '../config';
import { useEffect, useState } from 'react';

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

  const [timeRemained, setTimeRemained] = useState(
    Math.floor(mainLaunchDate.getTime() / 1000 - new Date().getTime() / 1000)
  );
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    if (timeRemained < 0) {
      setDays('00');
      setHours('00');
      setMinutes('00');
      setSeconds('00');
    } else {
      let remainedTime = timeRemained;
      setDays(
        Math.floor(remainedTime / 86400)
          .toString()
          .padStart(2, '0')
      );
      remainedTime = remainedTime % 86400;
      setHours(
        Math.floor(remainedTime / 3600)
          .toString()
          .padStart(2, '0')
      );
      remainedTime = remainedTime % 3600;
      setMinutes(
        Math.floor(remainedTime / 60)
          .toString()
          .padStart(2, '0')
      );
      remainedTime = remainedTime % 60;
      setSeconds(remainedTime.toString().padStart(2, '0'));
    }
  }, [timeRemained]);

  setTimeout(() => {
    setTimeRemained(timeRemained - 1);
  }, 1000);
  return (
    <Pane position="relative" minHeight="calc(100vh - 94px)">
      <Background />
      <Paragraph textAlign="center">
        <Text
          fontWeight="bold"
          fontSize="3em"
          lineHeight="1em"
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
          perfect for the hustle and bustle of any city setting. Each bully will
          allow its holder access to our future sythentic world The Dog Park.
          You will be able to play as your own bully in order to buy property,
          interact with others and really make a name for yourself in our unique
          metaverse.
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
          0.5 EGLD
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
          Presale starts
        </Text>
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="1.5em"
          marginTop={10}
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          December 20th
        </Text>
      </Pane>
      <Pane
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginTop={50}
        width={300}
        marginX="auto"
        gridGap={15}
      >
        <Pane>
          <Text
            fontSize="2em"
            fontWeight="bold"
            color="white"
            textTransform="uppercase"
            textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
          >
            Main launch
          </Text>
        </Pane>
        <Pane display="flex" justifyContent="space-around" width="100%">
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            gridGap={10}
          >
            <Text
              color="white"
              fontSize="2.5em"
              fontWeight="bold"
              textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
            >
              {days}
            </Text>
            <Text color="white">Days</Text>
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            gridGap={10}
          >
            <Text
              color="white"
              fontSize="2.5em"
              fontWeight="bold"
              textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
            >
              {hours}
            </Text>
            <Text color="white">Hours</Text>
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            gridGap={10}
          >
            <Text
              color="white"
              fontSize="2.5em"
              fontWeight="bold"
              textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
            >
              {minutes}
            </Text>
            <Text color="white">Minutes</Text>
          </Pane>
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            gridGap={10}
          >
            <Text
              color="white"
              fontSize="2.5em"
              fontWeight="bold"
              textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
            >
              {seconds}
            </Text>
            <Text color="white">Secpnds</Text>
          </Pane>
        </Pane>
      </Pane>
      <Paragraph marginTop={50} textAlign="center">
        <Button
          disabled={!address}
          size="large"
          transform="scale(1.5)"
          onClick={buyNFTHandler}
          background="rgba(27, 4, 19, 0.7)"
        >
          Mint
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
