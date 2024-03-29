import * as Dapp from '@elrondnetwork/dapp';
import { useHistory } from 'react-router-dom';
import {
  Pane,
  Heading,
  majorScale,
  StatusIndicator,
  Popover,
  Menu,
  Position,
  Strong,
  Text,
} from 'evergreen-ui';
import { useMediaQuery } from 'react-responsive';
import { shortenWalletAddress } from '../utils';
import { routes } from '../routes';
import { ChainID } from '../types';
import SocialLink from './SocialLink';
import { siteName } from '../config';

const MainLayout: React.FC = ({ children }) => {
  const { address, chainId } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const smallRes = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const getChainName = (chainID: ChainID) => {
    if (chainID === ChainID.TESTNET) return 'Elrond Testnet';
    if (chainID === ChainID.DEVNET) return 'Elrond Devnet';
    if (chainID === ChainID.MAINNET) return 'Elrond Mainnet';
    return '';
  };

  const logOut = (e: React.SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
  };

  return (
    <Pane>
      <Dapp.Authenticate routes={routes} unlockRoute="/unlock">
        <Pane background="transparent" marginBottom={0} border="none">
          <Pane
            maxWidth={1280}
            paddingX={30}
            marginX="auto"
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height={majorScale(8)}
          >
            <Pane display="flex">
              <Heading
                size={800}
                onClick={() => history.push('/')}
                cursor="pointer"
                display="flex"
                alignItems="center"
                color="white"
                paddingTop={20}
              >
                <img
                  src="images/logo.png"
                  height={80}
                  style={{ opacity: '0.5' }}
                />
              </Heading>
              {!smallRes && (
                <StatusIndicator color="success" marginLeft={20}>
                  <Text color="white">
                    {getChainName(chainId.valueOf() as ChainID)}
                  </Text>
                </StatusIndicator>
              )}
            </Pane>
            {address ? (
              <Pane display="flex" alignItems="center">
                {/* <Heading
                  onClick={() => history.push('/dashboard')}
                  cursor="pointer"
                  marginRight={15}
                >
                  Dashboard
                </Heading> */}
                <Popover
                  position={Position.BOTTOM_RIGHT}
                  content={
                    <Menu>
                      <Menu.Group>
                        <Menu.Item onSelect={logOut}>Logout</Menu.Item>
                      </Menu.Group>
                    </Menu>
                  }
                >
                  <StatusIndicator
                    color="success"
                    title={address}
                    cursor="pointer"
                  >
                    <Text color="white">{shortenWalletAddress(address)}</Text>
                  </StatusIndicator>
                </Popover>
              </Pane>
            ) : (
              <Pane>
                <Strong
                  onClick={() => history.push('/unlock')}
                  cursor="pointer"
                  color="white"
                >
                  Connect Wallet
                </Strong>
              </Pane>
            )}
          </Pane>
        </Pane>
        <Pane
          maxWidth={1280}
          paddingX={30}
          marginX="auto"
          width="100%"
          paddingBottom={40}
        >
          {children}
        </Pane>
        <Pane
          background="#3e0744"
          borderTop="1px solid #881a92"
          paddingY={30}
          paddingX={10}
        >
          <Pane textAlign="center" className="bottom-title-mobile">
            <Text color="white" fontSize="2em" fontWeight="bold">
              {siteName}
            </Text>
          </Pane>
          <Pane display="flex" justifyContent="space-between">
            <Pane width={180}>
              <SocialLink />
            </Pane>
            <Text
              color="white"
              fontSize="2em"
              fontWeight="bold"
              className="bottom-title-desktop"
            >
              {siteName}
            </Text>
            <Pane width={180} textAlign="right" marginRight={10}>
              <Text color="white">© 2021 Angry Bullies</Text>
            </Pane>
          </Pane>
        </Pane>
      </Dapp.Authenticate>
    </Pane>
  );
};

export default MainLayout;
