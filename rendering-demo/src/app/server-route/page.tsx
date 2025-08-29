import { serverSideFunction } from "@/utils/server-utils";
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import {ImageSlider} from "@/components/ImageSlider";
import { clientSideFunction } from "@/utils/client-utils"; // this will give error because that client component is only be usable in the client component

export default function ServerRoutePage() {
    const result = serverSideFunction();
    // return <h1>Server Route {result}</h1>

    // using this we can get errors
    // const settings = {
    //     dots: true,
    //   };
    //   return (
    //     <div className="image-slider-container">
    //       <Slider {...settings}>
    //         <div>
    //           <img src="https://picsum.photos/g/400/200" />
    //         </div>
    //         <div>
    //           <img src="https://picsum.photos/g/400/200" />
    //         </div>
    //         <div>
    //           <img src="https://picsum.photos/g/400/200" />
    //         </div>
    //         <div>
    //           <img src="https://picsum.photos/g/400/200" />
    //         </div>
    //       </Slider>
    //     </div>
    //   );

    // so to use the common function which is beign used in the client side use the component method
    // return (
    //     <>
    //     <h1>Server Route {result}</h1>
    //     <ImageSlider />
    //     </>
    // )

    const clientResult = clientSideFunction();

    return (
        <h1>Server Route {result}</h1>
    )
}