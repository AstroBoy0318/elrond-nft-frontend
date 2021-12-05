import { Pane } from 'evergreen-ui';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const RoadMap = () => {
  return (
    <Pane paddingBottom={30} paddingTop={30} borderBottom="1px solid #891a92">
      <Pane maxWidth={800} marginX="auto">
        <VerticalTimeline layout="1-column">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              marginTop: '3em',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255,255,255,0.1)',
            }}
            dateClassName="road-map-date"
            date="Q4 2021"
            iconStyle={{
              background: 'rgb(33, 4, 31)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 1: Fueling
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Creation of The NFT Project/Community
            </h4>
            <ul>
              <li>
                Release the pre-sale of our Angry Bully Collection to first 1000
                early adopter (Dec 9th, 2021)
              </li>
              <li>Airdrop 50 early minters a rare bully NFT</li>
              <li>Giveaway .5 EGLD to 5 bully holders</li>
              <li>
                Integrate the Angry Bully Collection to the Emoon marketplace
              </li>
              <li>Release Official Angry Bully Collection (Dec 21th, 2021)</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              marginTop: '3em',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255,255,255,0.1)',
            }}
            className="vertical-timeline-element--work"
            date="Q1-Q2 2022"
            dateClassName="road-map-date"
            iconStyle={{
              background: 'rgb(33, 4, 31)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 2: Project Acceleration
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Progressive Steps Forward
            </h4>
            <ul>
              <li>Develop rarity by using RarityTools and similar platforms</li>
              <li>Dog Park metaverse design {'&'} release date announced</li>
              <li>
                Purchase plots of land within the metaverse to create an
                accessible place for holders
              </li>
              <li>Massive .2 ETH giveaway to five (5) bully holders</li>
              <li>
                Dog Show Contest (Winner will receive two (2) round trip tickets
                to their city of choice)
              </li>
              <li>
                Obtain partnership from two (2) major pet brands or tv
                personalities
              </li>
              <li>Announce our unique burning mechanism to the community</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              marginTop: '3em',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255,255,255,0.1)',
            }}
            className="vertical-timeline-element--work"
            date="Q3 2022"
            dateClassName="road-map-date"
            iconStyle={{
              background: 'rgb(33, 4, 31)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 3: Shake the Floor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Value Added to the After Market
            </h4>
            <ul>
              <li>
                Donate 2.5 EGLD to an animal shelter of the community’s choice
              </li>
              <li>
                Partnership with a major dog breeder to giveaway two (2)
                American Bullies to two NFT holders
              </li>
              <li>Airdrop one (1) plot of land to 1 bully holder</li>
              <li>
                Airdrop 3D characters to all existing NFT holders (Burn Warning)
              </li>
              <li>Giveaway 5 rare DogPark items</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              marginTop: '3em',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255,255,255,0.1)',
            }}
            className="vertical-timeline-element--work"
            date="Q4 2022"
            dateClassName="road-map-date"
            iconStyle={{
              background: 'rgb(33, 4, 31)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 4: New Era
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Testing of DogPark
            </h4>
            <ul>
              <li>
                Finish our DogPark metaverse {'&'} add expanded 3D characters
                list to Angry Bully City
              </li>
              <li>
                Begin metaverse testing and hire a support team to maintain
                {'&'} update our game servers
              </li>
              <li>Hire marketing team to build our user base</li>
              <li>Begin creation of our utility coin Bizcuit</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{
              marginTop: '3em',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  rgba(255,255,255,0.1)',
            }}
            className="vertical-timeline-element--work"
            date="Q1 2023"
            dateClassName="road-map-date"
            iconStyle={{
              background: 'rgb(33, 4, 31)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Phase 5: Game Day
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Official Launch of DogPark
            </h4>
            <ul>
              <li>Metaverse goes live and will be free to all NFT holders</li>
              {/* <li>
                Announce the release date of our online game Bully City, which
                will use Bizcuits as in-game currency
              </li> */}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Pane>
    </Pane>
  );
};

export default RoadMap;
