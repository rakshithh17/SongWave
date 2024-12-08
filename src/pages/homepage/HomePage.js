import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Navigation styles
import 'swiper/css/pagination'; // Import Navigation styles
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import MusicCategory from './MusicCategories';
import { Link } from 'react-router-dom';



import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Footer from '../footer/Footer';

SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

const HomePage = () => {
    const swiperData = [
        {
          path: "/electronic",
          imageUrl: "https://www.itl.cat/pngfile/big/214-2144652_dj-snake-wallpapers-high-resolution-and-quality-download.jpg",
          text: "Electronic",
        },
        {
          path: "/rock",
          imageUrl: "https://www.graygroupintl.com/hubfs/Gray%20Group%20International/GGI%20-%20Assign%20and%20Sort%20%28WebP%29/Indie%20Rock%20Beyond%20the%20Mainstream.webp",
          text: "Rock",
        },
        {
            path: "/jazz",
            imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/373/623/desktop-wallpaper-selena-gomez-will-perform-in-north-carolina-donate-proceeds-to-local-lgbt-group-selena-gomez-concert.jpg",
            text: "Jazz",
          },
          {
            path: "/disco",
            imageUrl: "https://c4.wallpaperflare.com/wallpaper/42/920/864/concert-dance-disco-dubstep-wallpaper-preview.jpg",
            text: "Disco",
          },
          {
            path: "/melody",
            imageUrl: "https://media.assettype.com/filmcompanion/2023-11/b9b403e1-f078-4758-acf8-4d2d1e660f8a/ErasTour_Lead.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true" ,
            text: "Melody",
          },
          {
            path: "/rythmandblues",
            imageUrl: "https://www.instyle.com/thmb/qc_BJidlP2meps62yJu_QFYNp_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dua-Lipa-Social-2000-98830de4e99a464da49aab024f9cf17c.jpg" ,
            text: "Rythm and Blues",
          },
          {
            path: "/rap",
            imageUrl: "https://pm1.aminoapps.com/6886/1d48c1edc0c5bfb66e4939e74f1f59fe819c2caar1-2048-1365v2_hq.jpg" ,
            text: "Rap",
          },
          {
            path: "/pop",
            imageUrl: "https://www.udiscovermusic.com/wp-content/uploads/2020/10/Billie-EIlish-GettyImages-1200430037-1000x600.jpg" ,
            text: "Pop",
          },

        
      ];
    const gridsData = [
    {
      imageUrl: 'https://www.cinejosh.com/newsimg/newsmainimg/salaar-shooting-update_b_0501230552.jpg',
      text: 'Telugu',
    },
    {
      imageUrl: 'https://newdpz.com/wp-content/uploads/2023/07/1690255841_142_30-Best-Rolex-surya-hd-Dpz-HD-Images.jpeg',
      text: 'Tamil',
    },
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3DXBv4WUvTB7q7Sztce9fXnx931kJwqIoENAUFNI5c1tYrecx2XD7gWSrNI3FUyQebo&usqp=CAU',
      text: 'Hindi',
    },
    {
      imageUrl: 'https://cdn.magicdecor.in/com/2023/10/25162143/Noir-Knight-Ascends-Batman-Wall-Painting.jpg',
      text: 'English',
    },
    {
        imageUrl: 'https://mir-s3-cdn-cf.behance.net/projects/404/345ced154170341.Y3JvcCwyMDQ4LDE2MDEsMCw0NzY.jpg',
        text: 'Kannada',
    },
    {
        imageUrl: 'https://imgeng.jagran.com/images/2023/oct/Salaar1697436202910.jpg',
        text: 'Malayalam',
    },
  ];
  const gridsData1 = [
    {
      imageUrl: 'https://img.freepik.com/premium-vector/romantic-logo-vector_627535-30.jpg',
      text: 'Romantic',
    },
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/14/05/29/girl-1822702_640.jpg',
      text: 'Sad',
    },
    {
      imageUrl: 'https://w0.peakpx.com/wallpaper/309/937/HD-wallpaper-men-mood-headphones.jpg',
      text: 'FeelGood',
    },
    {
      imageUrl: 'https://pbs.twimg.com/media/FK7IzFKaIAAZKKD.jpg',
      text: 'Relaxed',
    },
    {
        imageUrl: 'https://w0.peakpx.com/wallpaper/943/50/HD-wallpaper-music-and-dance-and-dance-music.jpg',
        text: 'Dance',
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/61Dt3pAQLvL.jpg',
        text: 'Devotional',
    },
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{display:'flex', marginLeft:'500px'}}>
                
                
                
        </div>        
     < Swiper navigation autoplay={{ delay: 2000 }} loop pagination={{ clickable: true }} effect="coverflow" coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: false }} slidesPerView={2} centeredSlides style={{ height: '500px',marginTop:'20px' }}>
        {swiperData.map((slide, index) => (
         <div key={index}>
         <SwiperSlide>
           <Link to={slide.path}>
             <img src={slide.imageUrl} alt={`Slide ${index}`} />
             <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', fontWeight: 'bold' }}>{slide.text}</p>
           </Link>
         </SwiperSlide>
       </div>
        ))}
      </Swiper>
     <h1 style={{color:'white', textAlign:'left', fontSize:'30px', marginTop: '80px'}}>Explore by languages...</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px',marginBottom:'60px',borderRadius: '10px' }}>
        {gridsData.map((grid, index) => (
          <MusicCategory key={index} imageUrl={grid.imageUrl} text={grid.text} />
        ))}
      </div>
      <h1 style={{color:'white', textAlign:'left', fontSize:'30px', marginTop: '80px'}}>Moods</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px',borderRadius: '10px' }}>
        {gridsData1.map((grid, index) => (
          <MusicCategory key={index} imageUrl={grid.imageUrl} text={grid.text} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
