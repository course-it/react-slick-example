import React from "react";
import "./style.css";
import Item from "../Item";
import Slider from "react-slick";

class Carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-main-container">
        <h2>{this.props.title}</h2>
        <div className="carousel-container">
          {this.props.products.length > 0 ? (
            <Slider {...settings}>
              {this.props.products.map((item, key) => {
                return <Item data={item} key={key} />;
              })}
            </Slider>
          ) : (
            <p>Todavia no hay resultados para este carousel</p>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
