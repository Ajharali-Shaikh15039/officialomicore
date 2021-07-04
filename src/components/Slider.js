import React,{useState} from "react";
import Carousel from "react-multi-carousel";
// import "semantic-ui-css/semantic.min.css";
// import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import MediaCard from "./MediaCard.js";
// import product_card from "./product_data";

const product_data = [
  // silder = [
      {
      image: './images/Blue pottery/bp1.png',
      title: 'Blue pottery',
  },
  {
      image: './images/Flower vase/golden vase.jpg',
      title: 'Flower vase',
  },
  {
      image: './images/Hanging Panel/hp1.jpg',
      title: 'Hanging panel',
  },
  {
      image: './images/Mask/m1.jpg',
      title: 'Mask',
  },
  {
      image: './images/Mirror/mir1.jpg',
      title: 'Mirror',
  },
  {
      image: './images/Pendent lamp/p1.jpeg',
      title: 'Pendant Lamp',
  },
  {
    image: './images/Table figurine/tf4.png', 
    title: 'Table figurine',
},
{
  image: './images/Tea light/tl1.png',
  title: 'Tea light',
}
]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // paritialVisibilityGutter: 40
  }
};



// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  // const [list,setlist]=useState(product_card);
  return (
    <div style={{ padding: '25px' }}>
      <Carousel
        partialVisbile
        deviceType={deviceType}
        // itemClass="image-item"
        itemClass = "carousel-item-padding-0-px"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        draggable={true}
        autoPlay={true}
        infinite={true}
        
      >
        {product_data.slice(0, 8).map(item => {
          return (
            <>
            
              {/* <Image
                draggable={true}
                style={{ width: "300px", height: "250px"}}
                src={image}
              /> */}
              <MediaCard url={item.image} title={item.title}/>
              
            </>
          );
        })}


      </Carousel>
    </div>
  );
};

export default Simple;
