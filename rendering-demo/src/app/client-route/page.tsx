"use client"

// import { serverSideFunction } from "@/utils/server-utils"; // using this directly doess not prevent to use server funciton in client side code
// to prevent this we need to use server-only package. Install this using npm i server-only

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import { useTheme } from '@/components/theme-provider';

import { clientSideFunction } from "@/utils/client-utils"

export default function ClientRoutePage() {
    // const result = serverSideFunction();
    // return <h1>Client Route {result}</h1>

    // const theme = useTheme()
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

    //         {/* to use the useTheme theme variable */}
    //         <h1 style={{color: theme.colors.secondary}}>Client Route Page</h1> 
    //     </div>
    //   );

    const result = clientSideFunction();

    return (
        <>
            <h1>Client Side Router Page - {result}</h1>
        </>
    )
}