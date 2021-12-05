import { Pane, Paragraph, Text } from 'evergreen-ui';

const Team = () => {
  return (
    <Pane paddingBottom={30} paddingTop={30} borderBottom="1px solid #891a92">
      <Paragraph textAlign="center" marginBottom={20}>
        <Text fontSize="1.5em" color="white" fontWeight="bold">
          TEAM MEMBERS
        </Text>
      </Paragraph>
      <Pane display="flex" flexWrap="wrap" justifyContent="space-around">
        <Pane textAlign="center">
          <Paragraph>
            <img src="images/cofounder.png" width={200} />
          </Paragraph>
          <Paragraph>
            <Text color="white">Co-Founder</Text>
          </Paragraph>
          <Paragraph>
            <Text color="white" fontSize="1.2em">
              Loki
            </Text>
          </Paragraph>
        </Pane>
        <Pane textAlign="center">
          <Paragraph>
            <img src="images/producer.png" width={200} />
          </Paragraph>
          <Paragraph>
            <Text color="white">Co-Founder/Producer </Text>
          </Paragraph>
          <Paragraph>
            <Text color="white" fontSize="1.2em">
              Opie
            </Text>
          </Paragraph>
        </Pane>
        <Pane textAlign="center">
          <Paragraph>
            <img src="images/artist.png" width={200} />
          </Paragraph>
          <Paragraph>
            <Text color="white">Head Artist </Text>
          </Paragraph>
          <Paragraph>
            <Text color="white" fontSize="1.2em">
              Odin
            </Text>
          </Paragraph>
        </Pane>
        <Pane textAlign="center">
          <Paragraph>
            <img src="images/marketer.png" width={200} />
          </Paragraph>
          <Paragraph>
            <Text color="white">Marketing Director </Text>
          </Paragraph>
          <Paragraph>
            <Text color="white" fontSize="1.2em">
              Yoda
            </Text>
          </Paragraph>
        </Pane>
      </Pane>
    </Pane>
  );
};

export default Team;
