import { Pane, Paragraph, Text } from 'evergreen-ui';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { siteName } from '../config';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

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
          Welcome to {siteName}
        </Text>
      </Paragraph>
      <Paragraph
        marginTop={30}
        paddingBottom={30}
        borderBottom="1px solid #891a92"
        style={{ position: 'relative' }}
      >
        <div
          style={{
            position: `absolute`,
            left: 0,
            top: 0,
            width: `100%`,
            height: `100%`,
            background: `transparent`,
            zIndex: 1,
          }}
        ></div>
        <Carousel
          draggable={false}
          swipeable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
          arrows={false}
          containerClass="carousel-container"
        >
          <img src="assets/1.jpeg" />
          <img src="assets/2.png" />
          <img src="assets/3.jpeg" />
          <img src="assets/4.png" />
          <img src="assets/5.png" />
          <img src="assets/6.png" />
          <img src="assets/7.png" />
          <img src="assets/8.png" />
          <img src="assets/9.jpeg" />
          <img src="assets/10.png" />
          <img src="assets/11.jpeg" />
        </Carousel>
      </Paragraph>
    </Pane>
  );
};

export default SlidePart;
