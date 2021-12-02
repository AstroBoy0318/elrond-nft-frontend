import MainLayout from './MainLayout';
import MintPart from './MintPart';
import SlidePart from './SlidePart';
import Tokenomics from './Tokenomics';
import RoadMap from './RoadMap';
import Qa from './Qa';
import Team from './Team';
import { Pane, Paragraph, Text } from 'evergreen-ui';
import { nftmintScAddress } from '../config';
import { updateItem } from '../transactions';
import { useTransactionUrlState } from '../hooks';
import { useEffect, useState } from 'react';
import { getTransactionByHash } from '../apiEndpoints';

const Home: React.FC = () => {
  const [pending, setPending] = useState(false);
  const { txHash } = useTransactionUrlState();
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
        <MintPart />
        <SlidePart />
        <Tokenomics />
        <RoadMap />
        {/* <Pane paddingBottom={30} borderBottom="1px solid #891a92">
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
            <img src="assets/2.jpg" width="150px" className="visible-image" />
            <div>
              <Paragraph>
                <Text color="white">
                  KittyButts are Mintable at 0.02 ETH (excluding Gas cost)
                  starting 30th July 2021.
                </Text>
              </Paragraph>
            </div>
          </Pane>
        </Pane> */}
        <Qa />
        <Team />
        <Pane marginTop={50} textAlign="center">
          <Paragraph>
            <Text color="white" fontWeight="bold" fontSize="1.5em">
              Contract
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="white" wordBreak="break-all">
              {nftmintScAddress}
            </Text>
          </Paragraph>
        </Pane>
      </Pane>
    </MainLayout>
  );
};

export default Home;
