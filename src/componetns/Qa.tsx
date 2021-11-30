import { Pane, Text } from 'evergreen-ui';
import Collapsible from 'react-collapsible';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

const Tigger: React.FC = ({ children }) => {
  return (
    <Pane display="flex" justifyContent="space-between">
      <Text color="white">{children}</Text>
      <FontAwesomeIcon icon={'angle-down'} color="white" />
    </Pane>
  );
};

const Qa = () => {
  return (
    <Pane marginTop={50} paddingBottom={50} borderBottom="1px solid #891a92">
      <Pane maxWidth={800} marginX="auto">
        <Pane marginBottom={20}>
          <Text fontWeight="bold" fontSize="2em" color="white">
            FREQUENTLY ASKED QUESTIONS ( FAQ )
          </Text>
        </Pane>
        <Pane marginBottom={10}>
          <Text fontWeight="bold" fontSize="1.2em" color="white">
            GENERAL / NFT
          </Text>
        </Pane>
        <Collapsible
          trigger={<Tigger>1. What is an NFT?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>
            An NFT (non-fungible token) is a piece of art that lives on the
            blockchain. Owning an NFT is just like owning a painting, but
            instead of owning it physically, you own it virtually, on the
            blockchain. Angry Bully NFTs is a collection of 8888 different NFTs
            that will live on the Elrond blockchain.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>2. What network will this be launched on?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Elrond Blockchain</p>
        </Collapsible>
        <Pane marginBottom={10}>
          <Text fontWeight="bold" fontSize="1.2em" color="white">
            WHITELIST / PRESALE
          </Text>
        </Pane>
        <Collapsible
          trigger={<Tigger>4. When does the whitelist open?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>12:00 hrs UTC, Dec 09</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>5. When does the whitelist close?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>
            12:00 hrs UTC, Dec 15, or when all the spots are filled (whichever
            comes first).
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <Tigger>6. How many NFTs allowed reserved per person?</Tigger>
          }
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Minimum 1; Maximum 15</p>
        </Collapsible>
        <Collapsible
          trigger={
            <Tigger>7. Can I enter the whitelist more than once?</Tigger>
          }
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>
            No, we want everyone to have a fair chance to get Angry Bully City
            NFTs.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>8. Whitelist Mint price?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>0.5 EGLD</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>9. Public Pre Sale Mint Date?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>11/22 starting at 6 pm EST</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>10. Public Pre Sale NFTs available?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>
            Only 1000 Bully NFTs will be available for to mint on 12/09 starting
            at 6 pm EST
          </p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>11. Public Pre Sale Mint price?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>0.5 EGLD</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>12. Main Sale Mint Date?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>12/21 starting at 6 pm EST</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>13. Main Sale Bullys NFTs Available?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>7777 Bully NFTs will available</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>14. Mint price?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>1.0 EGLD</p>
        </Collapsible>
        <Pane marginBottom={10}>
          <Text fontWeight="bold" fontSize="1.2em" color="white">
            ANGRY BULLY NFT
          </Text>
        </Pane>
        <Collapsible
          trigger={<Tigger>15. Where can I mint this on launch?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>angrybullycity.com</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>16. How many can I mint?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Min. 1 to 10 Max</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>17. Where can I view my Bullys?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>
            We use Elrond Web wallet or Maiar mobile; or show them off in the"
            show your bullys " channel.
          </p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>18. Do the Bullys reveal right away?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Yes they do</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>19. Where can we see rarity?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Rarity Tools</p>
        </Collapsible>
        <Collapsible
          trigger={<Tigger>20. Will this be on opensea?</Tigger>}
          className="collapsed-item"
          openedClassName="collapsed-item"
        >
          <p>Nope!! You can only view these on EMOON.space post-launch</p>
        </Collapsible>
      </Pane>
    </Pane>
  );
};

export default Qa;
