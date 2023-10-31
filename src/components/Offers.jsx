import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cube';
import "../../public/assets/css/Offers.css";
import { Pagination, FreeMode, Navigation, Autoplay, Thumbs, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Offers = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const OfferData = [
        { src: "../../public/assets/images/2.png"},
        { src: "../../public/assets/images/2.png" }
    ];
    
    return (
        <section className="w-screen flex flex-col items-center gap-5 py-16 overflow-hidden px-[5px] sm:px-[5rem] bg-white">
            <div className='text-center'>
                <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3'>Our Offers</h1>
                <p className='text-sm font-Poppins text-gray-600'>Unlock Savings: Unmissable Offers Await!</p>
            </div>
            <Swiper
                effect={'cube'}
                loop={true}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[Pagination, Navigation, Autoplay, Thumbs, EffectCube]}
                spaceBetween={50}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={true}
                className="mySwiper w-[90%] sm:w-[70vw]"
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                style={{ margin: "20px 0 0 0", paddingBottom: "20px", zIndex: 0, '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
            >
                {OfferData.map((data, index) => (
                    <SwiperSlide key={index} style={{ background: "transparent", minWidth: "80px", width: "80%" }}>
                        <div className="w-full flex justify-center">
                            <img src={data.src} alt={`Offer ${index}`} className="rounded-2xl overflow-hidden max-sm:w-[85%_!important]" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, FreeMode, Thumbs]}
                className="mySwiper2 z-[0_!important]"
            >
                {OfferData.map((data, index) => (
                    <SwiperSlide key={index} style={{ background: "none", minWidth: "80px" }}>
                        <div className="w-full flex justify-center">
                            <img src={data.src} alt={`Offer ${index}`} className="rounded-lg overflow-hidden" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Offers;
