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
        <Pane marginTop={20} display="flex" justifyContent="start" gridGap={10}>
          <img src="assets/1.jpg" width="80px" />
          <div>
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
        <Pane marginTop={10} display="flex" justifyContent="start" gridGap={10}>
          <img src="assets/maiar.png" width="80px" />
          <div>
            <Paragraph>
              <Text color="white" fontWeight="bold" fontSize="1.5em">
                0.5 Egold Presale Price
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="white">
                Angry Bullies are Mintable at 0.5 Egold (excluding Gas cost).
              </Text>
            </Paragraph>
          </div>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Tokenomics;
