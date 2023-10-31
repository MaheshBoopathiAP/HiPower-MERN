// import React from "react";
// import { useFilterGlobalContext } from "../context/FilterContext";
// // import Link from "next/link";
// // import { Image } from "antd";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../../public/assets/css/Featuredproducts.css";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// const FeaturedProducts = () => {
  
// const dummyProducts = [
//     {
//       id: 1,
//       type: "Product 1",
//       img: "product1.jpg",
//       price: 100,
//       warranty: 12,
//     },
//     {
//       id: 2,
//       type: "Product 2",
//       img: "product2.jpg",
//       price: 150,
//       warranty: 24,
//     },
//     {
//       id: 3,
//       type: "Product 3",
//       img: "product3.jpg",
//       price: 200,
//       warranty: 18,
//     },
//     {
//       id: 4,
//       type: "Product 4",
//       img: "product4.jpg",
//       price: 120,
//       warranty: 36,
//     },
//     {
//       id: 5,
//       type: "Product 5",
//       img: "product5.jpg",
//       price: 180,
//       warranty: 24,
//     },
//   ];
//   return (
//     <div className="ecomm-services w-full py-16 px-[5px] sm:px-[6%] md:px-[9%] lg:px-[5rem] bg-gradient-to-tr from-red-500 to-[#ff0e2c] ">
//       <div className="w-full">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold font-Poppins text-white tracking-wide mb-3">
//             Featured Products
//           </h1>
//           <p className="text-sm font-Poppins text-white/80">
//             Discover Excellence: Our Featured Selections Await You!
//           </p>
//         </div>
//         <Swiper
//           slidesPerView={3}
//           spaceBetween={50}
//           navigation={true}
//           breakpoints={{
//             510: { slidesPerView: 2 },
//             850: { slidesPerView: 3 },
//             1160: { slidesPerView: 4 },
//           }}
//           autoplay={{ delay: 2000, disableOnInteraction: false }}
//           modules={[Pagination, Autoplay, Navigation]}
//           className="mySwiper"
//           style={{ margin: "50px 0 0 0", zIndex: 0 }}
//         >
//           {dummyProducts.map((item, i) => {
//             return (
//               <SwiperSlide key={item.id} style={{ background: "transparent" }}>
//                 <div
//                   className={`w-[250px] sm:w-[270px] h-[350px] mx-auto md:mx-0 border-2 bg-white border-gray-100 overflow-hidden rounded-lg relative flex justify-center hover:scale-105 duration-300 py-10`}
//                   style={{ color: "black" }}
//                 >
//                   <div className="w-[80%] h-[30px] absolute flex items-center justify-center rounded-e-full text-[10px] font-bold border-2 border-gray-400 bg-gray-100 left-0 top-[3%]">
//                     <p>{item.warranty} Months Warranty</p>
//                   </div>
//                   <div className="flex flex-col items-center w-full h-full">
//                     <div className="w-[60%] lg:w-[65%] h-[60%] sm:h-[50%] overflow-hidden rounded-lg flex items-center px-2">
//                       <img className="object-cover w-[80%] h-[80%]" src={item.img} />
//                     </div>
//                     <div className=" w-[90%] lg:w-[90%] h-[50%] flex flex-col pt-4 px-6  items-center text-center">
//                       <h1 className="text-[20px] mb-2 font-semibold ">
//                         {item.type}
//                       </h1>
//                       <p className="text-[10px] text-gray-400">
//                         SKU:88736347484874
//                       </p>
//                       <div className="flex flex-col gap-2">
//                         <div className="flex flex-col">
//                           <p className="font-semibold text-md flex items-center gap-2">
//                             $ {item.price}
//                             <span className="text-[10px] text-blue-500">
//                               (Buy new Battery)
//                             </span>
//                           </p>
//                           <span className="text-[10px] tracking-normal p-0">
//                             (Inclusive of all taxes)
//                           </span>
//                         </div>
//                         <button className="py-1 flex justify-center items-center bg-[#04b879] text-white hover:bg-[#04b849] hover:scale-105 transition-all duration-300 rounded-md">
//                           {/* <Link
//                             prefetch={false}
//                             href={`/products/info/${item.name}`}
//                             className="w-full h-full "
//                           >
//                             View Details
//                           </Link> */}
//                         </button>
//                       </div>
//                     </div>
//                     {/* <div className="w-full h-[40%] flex flex-col bottom-0 absolute">
//                       <div className="h-[15%] flex justify-center items-center mx-5 border-b">
//                         <h1 className="text-sm uppercase text-gray-500">
//                           Specs
//                         </h1>
//                       </div>
//                       <div className="mx-5 flex italic py-5 px-2 text-sm justify-between items-center">
//                         <div className="flex flex-col">
//                           {item.specs.map((obj) => {
//                             return <p>{obj.key}</p>;
//                           })}
//                         </div>
//                         <p className="flex flex-col">
//                           {item.specs.map((obj) => {
//                             return <span>:</span>;
//                           })}
//                         </p>
//                         <div className="flex flex-col">
//                           {item.specs.map((obj) => {
//                             return <p>{obj.value}</p>;
//                           })}
//                         </div>
//                       </div>
//                     </div> */}
//                   </div>
//                 </div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
        
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;