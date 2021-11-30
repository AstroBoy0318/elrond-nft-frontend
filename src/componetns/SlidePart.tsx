import { Pane, Paragraph, Text } from 'evergreen-ui';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const SlidePart = () => {
  return (
    <Pane>
      <Paragraph marginTop={50} textAlign="center">
        <Text fontWeight="bold" color="#fff" fontSize="2em">
          Welcome to NFT Minting
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
          centerSlidePercentage={33.33}
        >
          <div>
            <img src="assets/1.jpg" />
            <p className="legend">Cat 1</p>
          </div>
          <div>
            <img src="assets/2.jpg" />
            <p className="legend">Cat 2</p>
          </div>
          <div>
            <img src="assets/3.jpg" />
            <p className="legend">Cat 3</p>
          </div>
          <div>
            <img src="assets/1.jpg" />
            <p className="legend">Cat 4</p>
          </div>
          <div>
            <img src="assets/2.jpg" />
            <p className="legend">Cat 5</p>
          </div>
          <div>
            <img src="assets/3.jpg" />
            <p className="legend">Cat 6</p>
          </div>
          <div>
            <img src="assets/1.jpg" />
            <p className="legend">Cat 7</p>
          </div>
          <div>
            <img src="assets/2.jpg" />
            <p className="legend">Cat 8</p>
          </div>
          <div>
            <img src="assets/3.jpg" />
            <p className="legend">Cat 9</p>
          </div>
        </Carousel>
      </Paragraph>
    </Pane>
  );
};

export default SlidePart;
