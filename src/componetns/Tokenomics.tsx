import { Pane, Paragraph, Text } from 'evergreen-ui';

const Tokenomics = () => {
  return (
    <Pane paddingBottom={30} borderBottom="1px solid #891a92">
      <Pane marginTop={50} maxWidth={800} marginLeft="auto" marginRight="auto">
        <Paragraph textAlign="center">
          <Text fontWeight="bold" fontSize="2.5em" color="white">
            Tokenomics
          </Text>
        </Paragraph>
        <Pane
          marginTop={20}
          display="flex"
          justifyContent="center"
          gridGap={10}
          flexWrap="wrap"
        >
          <img src="assets/1.jpeg" width="100px" height="100px" />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                8,888 Angry Bullies
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                With over 15 different furs, 20 expressions and 100 accessories,
                the possibilities for your bully are endless!!
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={10}
          display="flex"
          justifyContent="center"
          gridGap={10}
          flexWrap="wrap"
        >
          <img src="assets/maiar.png" width="100px" height="100px" />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                0.5 eGold Presale Price
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                Angry Bullies are Mintable at 0.5 eGold (excluding Gas cost).
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={10}
          display="flex"
          justifyContent="center"
          gridGap={10}
          flexWrap="wrap"
        >
          <img src="assets/ipfs.png" width="100px" height="100px" />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                InterPlanetary File System
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                The IPFS is a peer-to-peer network for storing and sharing data.
                This means KittyButts are decentralised and not soley on any one
                website or server.
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={10}
          display="flex"
          justifyContent="center"
          gridGap={10}
          flexWrap="wrap"
        >
          <img src="assets/onchain.svg" width="100px" height="100px" />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                On-Chain Randomised Starting Index
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                Using a Starting Index, similar to note-worthy NFT collections
                such as The Hashmasks, we can ensure KittyButts are minted
                fairly.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                No-one knows what KittyButt will be minted, not even us..
              </Text>
            </Paragraph>
          </div>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Tokenomics;
