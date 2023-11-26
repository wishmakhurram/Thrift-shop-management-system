import Carousel from "react-bootstrap/Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiTwotoneDownCircle } from "react-icons/ai";

function CarouselPage() {
  return (
    <Carousel prevIcon={<AiTwotoneDownCircle className="custom-chevron" />}
    nextIcon={<AiTwotoneDownCircle />} style={{ height: '700px' }}>
      <Carousel.Item>
        <img src="images/slide4.jpg" width={"100%"} className="carousel-image" alt="" />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h4 className="newArrival">New Arrivals</h4>
            <p className="autumn">AUTUMN OVERCOAT</p>
            <button className="shopnow">shop now</button>
          </div>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/slide1.jpg" width={"100%"} className="carousel-image" alt="" />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h4 className="newArrival">Men Of Summer</h4>
            <p className="autumn">Men Dresses</p>
            <button className="shopnow">shop now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/slide3.jpg" width={"100%"} className="carousel-image" alt="" />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h4 className="newArrival1">New Arrivals</h4>
            <p className="autumn1">Men Glasses</p>
            <button className="shopnow1">shop now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPage;
