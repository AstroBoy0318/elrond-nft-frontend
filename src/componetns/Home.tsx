import MainLayout from './MainLayout';
import { useHistory } from 'react-router-dom';
import { Pane, Button, Paragraph, Text } from 'evergreen-ui';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <Pane backgroundColor="white" elevation={1} padding={30}>
        <Pane>
          <Paragraph marginBottom={15}>
            <Text fontWeight="bold">First NFT Project:</Text> You can mint NFT
            tokens here.
          </Paragraph>
        </Pane>
      </Pane>
      <Pane
        marginTop={30}
        textAlign="center"
        backgroundColor="white"
        elevation={1}
        padding={30}
      >
        <Button
          onClick={() => history.push('/unlock')}
          appearance="primary"
          size="large"
        >
          Unlock
        </Button>
      </Pane>
    </MainLayout>
  );
};

export default Home;
