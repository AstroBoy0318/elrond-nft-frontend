import { Pane, Paragraph, Text } from 'evergreen-ui';

const Tokenomics = () => {
  return (
    <Pane paddingBottom={30} borderBottom="1px solid #891a92">
      <Pane marginTop={50} maxWidth={800} marginLeft="auto" marginRight="auto">
        <Paragraph textAlign="center">
          <Text fontWeight="bold" fontSize="2.5em" color="white">
            TOKENOMICS
          </Text>
        </Paragraph>
        <Pane
          marginTop={50}
          display="flex"
          justifyContent="center"
          gridGap={30}
          flexWrap="wrap"
        >
          <img
            src="assets/elrond.png"
            width="100px"
            height="100px"
            style={{ filter: 'brightness(1000%)' }}
          />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                Elrond Smart Contract
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                Built on the Elrond Network, the Angry Bullies can be owned by
                anyone with a Maiar or Elrond Wallet address. Angry Bullies are
                fully transferable to other networks and tradable on platforms
                such as Emoon, Areovek {'&'} Erdsea.
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={50}
          display="flex"
          justifyContent="center"
          gridGap={30}
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
                {/* With over 15 different furs, 20 expressions and 100 accessories,
                the possibilities for your bully are endless!! 111 Bullies will
                be boxed for the core team. */}
                With over 15 different furs, 100 accessories and 20 expressions,
                the possibilities for your bully are endless!! 111 Bullies will
                be boxed for the core team to support giveaways and promotional
                campaigns.
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={50}
          display="flex"
          justifyContent="center"
          gridGap={30}
          flexWrap="wrap"
        >
          <img src="assets/maiar.png" width="100px" height="100px" />
          <div className="tokenomics-text">
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                0.5 EGLD Presale Price
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                Angry Bullies are a Mintable at 0.5 EGLD (excluding Gas Cost)
                starting December 20th 2021. You can mint 12 per transaction.
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={50}
          display="flex"
          justifyContent="center"
          gridGap={30}
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
                The IPFS is a peer-to-peer network for storing and sharing data
                .This means Angry Bullies are decentralised and not soley on any
                one website or server.
              </Text>
            </Paragraph>
          </div>
        </Pane>
        <Pane
          marginTop={50}
          display="flex"
          justifyContent="center"
          gridGap={30}
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
                such as The Hashmasks, we can ensure Angry Bullies are minted
                fairly.
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                No-one knows what Angry Bully will be minted, not even us..
              </Text>
            </Paragraph>
          </div>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Tokenomics;
