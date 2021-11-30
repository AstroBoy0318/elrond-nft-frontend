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
            contentStyle={{ marginTop: '2em' }}
            dateClassName="road-map-date"
            date="2021 Q3"
            iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>aaaaaaaaa</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ marginTop: '2em' }}
            className="vertical-timeline-element--work"
            date="2021 Q4"
            dateClassName="road-map-date"
            iconStyle={{
              background: 'rgb(33, 150, 243)',
              color: '#fff',
              transform: 'scale(0.5)',
            }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Pane>
    </Pane>
  );
};

export default RoadMap;
