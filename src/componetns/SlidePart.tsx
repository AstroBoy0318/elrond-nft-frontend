import { Pane, Paragraph, Text } from 'evergreen-ui';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { siteName } from '../config';

const SlidePart = () => {
  return (
    <Pane>
      <Paragraph marginTop={50} textAlign="center">
        <Text
          fontWeight="bold"
          color="#fff"
          fontSize="2em"
          textShadow="0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92,0 0 3px #891a92"
        >
          Welcome {siteName}
        </Text>
      </Paragraph>
      <Paragraph
        marginTop={30}
        paddingBottom={30}
        borderBottom="1px solid #891a92"
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          centerMode={true}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          centerSlidePercentage={33.33}
        >
          <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Bully 1</p>
          </div>
          <div>
            <img src="assets/2.png" />
            <p className="legend">Bully 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Bully 3</p>
          </div>
          <div>
            <img src="assets/4.png" />
            <p className="legend">Bully 4</p>
          </div>
          <div>
            <img src="assets/5.png" />
            <p className="legend">Bully 5</p>
          </div>
          <div>
            <img src="assets/6.png" />
            <p className="legend">Bully 6</p>
          </div>
          <div>
            <img src="assets/7.png" />
            <p className="legend">Bully 7</p>
          </div>
          <div>
            <img src="assets/8.png" />
            <p className="legend">Cat 8</p>
          </div>
          <div>
            <img src="assets/9.jpeg" />
            <p className="legend">Bully 9</p>
          </div>
          <div>
            <img src="assets/10.png" />
            <p className="legend">Bully 10</p>
          </div>
          <div>
            <img src="assets/11.jpeg" />
            <p className="legend">Bully 11</p>
          </div>
        </Carousel>
      </Paragraph>
    </Pane>
  );
};

export default SlidePart;
