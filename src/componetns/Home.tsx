import * as Dapp from '@elrondnetwork/dapp';
import MainLayout from './MainLayout';
import { Pane, Button, Paragraph, Text } from 'evergreen-ui';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { nftmintScAddress } from '../config';
import { createNft, setManager, updateItem } from '../transactions';
import { useTransactionUrlState } from '../hooks';
import { useEffect, useState } from 'react';
import { getTransactionByHash } from '../apiEndpoints';

const Home: React.FC = () => {
  const { address } = Dapp.useContext();
  const sendTransaction = Dapp.useSendTransaction();
  const [pending, setPending] = useState(false);
  const { txHash } = useTransactionUrlState();
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
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!txHash) return;
      setPending(true);
      const response = await fetch(getTransactionByHash(txHash));
      const data = await response.json();
      if (data) {
        const txDataSplit = atob(data.data).split('@');
        const txSCData = data.results?.[0]?.data;
        const txSCDataSplit = txSCData ? atob(txSCData).split('@') : [];
        console.log(txDataSplit, txSCDataSplit);
        if (txDataSplit[0] === 'createNft') {
          updateItem(parseInt(txDataSplit[1]), txSCDataSplit[2].toString());
        }
        setPending(false);
      }
    };
    if (txHash && !pending) {
      fetchTransactions();
    }
  }, [txHash]);
  return (
    <MainLayout>
      <Pane elevation={0} padding={30} boxShadow="none">
        <Pane>
          <Paragraph textAlign="center">
            <Text
              fontWeight="bold"
              fontSize="3em"
              color="white"
              textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
            >
              NFT Minting on Elrond
            </Text>
          </Paragraph>
          <Paragraph marginTop={50} textAlign="center">
            <Text color="#fff">There is 10,000 images to be mint.</Text>
          </Paragraph>
          <Paragraph marginTop={50} textAlign="center">
            <Button
              disabled={!address}
              appearance="primary"
              size="large"
              onClick={buyNFTHandler}
            >
              Buy a nft item
            </Button>
            <Button
              hidden={false}
              disabled={!address}
              appearance="primary"
              size="large"
              onClick={setManagerHandler}
            >
              Set Manager
            </Button>
          </Paragraph>
          <Paragraph marginTop={50} textAlign="center">
            <Text fontWeight="bold" color="#fff" fontSize="2em">
              Welcome to NFT Minting
            </Text>
          </Paragraph>
          <Paragraph
            marginTop={30}
            paddingBottom={30}
            borderBottom="1px solid #891a92"
          >
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              centerMode={true}
              showThumbs={false}
              centerSlidePercentage={33.33}
            >
              <div>
                <img src="assets/1.jpg" />
                <p className="legend">Cat 1</p>
              </div>
              <div>
                <img src="assets/2.jpg" />
                <p className="legend">Cat 2</p>
              </div>
              <div>
                <img src="assets/3.jpg" />
                <p className="legend">Cat 3</p>
              </div>
              <div>
                <img src="assets/1.jpg" />
                <p className="legend">Cat 4</p>
              </div>
              <div>
                <img src="assets/2.jpg" />
                <p className="legend">Cat 5</p>
              </div>
              <div>
                <img src="assets/3.jpg" />
                <p className="legend">Cat 6</p>
              </div>
              <div>
                <img src="assets/1.jpg" />
                <p className="legend">Cat 7</p>
              </div>
              <div>
                <img src="assets/2.jpg" />
                <p className="legend">Cat 8</p>
              </div>
              <div>
                <img src="assets/3.jpg" />
                <p className="legend">Cat 9</p>
              </div>
            </Carousel>
          </Paragraph>
        </Pane>
        <Pane paddingBottom={30} borderBottom="1px solid #891a92">
          <Pane
            marginTop={50}
            maxWidth={800}
            marginLeft="auto"
            marginRight="auto"
          >
            <Paragraph textAlign="center">
              <Text fontWeight="bold" fontSize="2.5em" color="white">
                Tokenomics
              </Text>
            </Paragraph>
            <Pane
              marginTop={20}
              display="flex"
              justifyContent="start"
              gridGap={10}
            >
              <img src="assets/1.jpg" width="80px" />
              <div>
                <Paragraph>
                  <Text color="white" fontWeight="bold" fontSize="1.5em">
                    10,000 KittyButts
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text color="white">
                    With 41 Colors.. 22 Furs.. and over 130 accessories. The
                    possible combinations are truly CAT-astrophic.
                  </Text>
                </Paragraph>
              </div>
            </Pane>
            <Pane
              marginTop={10}
              display="flex"
              justifyContent="start"
              gridGap={10}
            >
              <img src="assets/maiar.png" width="80px" />
              <div>
                <Paragraph>
                  <Text color="white" fontWeight="bold" fontSize="1.5em">
                    0,02 ETH Pre-Sale Price
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text color="white">
                    KittyButts are Mintable at 0.02 ETH (excluding Gas cost)
                    starting 30th July 2021.
                  </Text>
                </Paragraph>
              </div>
            </Pane>
          </Pane>
        </Pane>
        <Pane paddingBottom={30} borderBottom="1px solid #891a92">
          <Paragraph marginTop={50} textAlign="center">
            <Text fontWeight="bold" color="#fff" fontSize="2em">
              The KittyButt Club
            </Text>
          </Paragraph>
          <Pane
            marginTop={10}
            display="flex"
            justifyContent="start"
            gridGap={20}
            maxWidth={800}
            marginLeft="auto"
            marginRight="auto"
          >
            <img src="assets/2.jpg" width="150px" />
            <div>
              <Paragraph>
                <Text color="white">
                  KittyButts are Mintable at 0.02 ETH (excluding Gas cost)
                  starting 30th July 2021.
                </Text>
              </Paragraph>
            </div>
          </Pane>
        </Pane>
        <Pane marginTop={50} textAlign="center">
          <Paragraph>
            <Text color="white" fontWeight="bold" fontSize="1.5em">
              Contract
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="white">{nftmintScAddress}</Text>
          </Paragraph>
        </Pane>
      </Pane>
    </MainLayout>
  );
};

export default Home;
