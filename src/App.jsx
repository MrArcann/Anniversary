import { useRef, useState, useEffect } from "react";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";
import toplu from "./assets/toplupic.png"
import spoti from "./assets/firsttalkspoti.jpg"
import yiha from "./assets/yiha.jpg"
import yaso from "./assets/mutluyasemin.jpg"
import catplaying from "./assets/catplaying.gif"
import cemvekedi from "./assets/cemvekedi.jpg"
import dogum from "./assets/dogumselfi.jpg"
import mezun from "./assets/mezuniyetselfi.jpg"
import sahil from "./assets/sahilselfi.jpg"
import wave from "./assets/wavecat.gif"
import heart from "./assets/catheart.gif"
import goru from "./assets/goru.gif"
import cake from "./assets/cake.gif"
import love from "./assets/catlove.gif"

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {

  const ref = useRef();

  return (
    <div>
      <Parallax pages={19} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${toplu})`, backgroundSize: "cover" }}
        ></ParallaxLayer>

        <ParallaxLayer 
          offset={0.2} 
          speed={0.5}>
          <h2>Her şey Heybeli ada bisiklet turunda başladı.</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.7} 
          speed={0.5}>
          <h2>Spontane bir arkçı tanışması ve güzel bir vapur yolculuğu.</h2>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1.4} 
          speed={0.1}>
          <h2>Güzel konuşmalarla devam eden ilişkimiz efsane spotify şarkı değişimleriyle ilerledi.</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={1.5}
          style={{ backgroundImage: `url(${spoti})`, backgroundSize: "70%", backgroundPosition: "center" }}
        ></ParallaxLayer>

        <ParallaxLayer 
          offset={3} 
          speed={0.7}>
          <h2>Obviously we can't forget the best of all!</h2>
        </ParallaxLayer>

      
        <ParallaxLayer
          offset={3.7}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${yiha})`, backgroundSize: "50%", backgroundPosition: "center" }}
        ></ParallaxLayer>

        

        <ParallaxLayer sticky={{start: 4, end: 4}}>
          
          <img className="parachute" src={cat} />

        </ParallaxLayer>


        <ParallaxLayer 
          offset={4.7} 
          speed={0.05}>
          <h2>Mutlu anlarımda her zaman yanımdaydın.</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${yaso})`, backgroundSize: "50%", backgroundPosition: "center"}}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{start: 5.5, end: 6}}>
          
          <img className="parachute2" src={catplaying} />

        </ParallaxLayer>

        <ParallaxLayer 
          offset={6.3} 
          speed={0.05}>
          <h2>Kötü zamanlarımda da yanımdaydın ve en önemlisi de buydu.</h2>
          <br />
          <h2>Bunun için ben ve arkadaşım sana teşekkür ederiz.</h2>
        </ParallaxLayer>


        <ParallaxLayer
          offset={7.5}
          speed={0.5}
          factor={2}
          style={{ backgroundImage: `url(${cemvekedi})`, backgroundSize: "50%", backgroundPosition: "center"}}
        ></ParallaxLayer>


        <ParallaxLayer 
          offset={8.7} 
          speed={0.05}>
          <h2>Küçük bir galeri şovu kötü olmaz.</h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={9.5}
          speed={1}
          factor={1}
          style={{ backgroundImage: `url(${dogum})`, backgroundSize: "70%", backgroundPosition: "center"}}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{start: 9.5, end: 9.5}}>
          
          <img className="parachute2" src={wave} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={10.5}
          speed={1}
          factor={1}
          style={{ backgroundImage: `url(${mezun})`, backgroundSize: "70%", backgroundPosition: "center"}}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{start: 10.5, end: 10.5}}>
          
          <img className="parachute" src={heart} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={11.5}
          speed={1}
          factor={1}
          style={{ backgroundImage: `url(${sahil})`, backgroundSize: "70%", backgroundPosition: "center"}}
        ></ParallaxLayer>

        <ParallaxLayer sticky={{start: 12, end: 12.5}}>
          
          <img src={goru} />

        </ParallaxLayer>


        <ParallaxLayer 
          offset={13} 
          speed={0.05}>
          <h2>We also have to give props to Start Wars!</h2>
        </ParallaxLayer>


        <ParallaxLayer sticky={{start: 14, end: 14}}>
          
          <img className="midbig" src={cake} />

        </ParallaxLayer>

        <ParallaxLayer
          offset={17}
          speed={1}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        ></ParallaxLayer>

        <ParallaxLayer 
          offset={15} 
          speed={0.05}>
          <h2>Artık sonuna geldik.</h2>
          <br />
          
          <h2>Birlikte geçirdiğimiz 1 yıl gerçekten çok güzeldi. Seninle gittiğimiz her gezi, yediğimiz her yemek, içtiğimiz her kahve keyifliydi. Muhabbetlerimiz de tartışmalarımız da keyifliydi. Seninle geçirdiğimiz her dakika hem beni daha mutlu bir insan yaptı hem de beni geliştirdi. Devamını içtenlikle diliyorum ve seni seviyorum.</h2>
        </ParallaxLayer>

        <ParallaxLayer sticky={{start: 18, end: 18}}>
          
          <img src={love} />

        </ParallaxLayer>





      </Parallax>
    </div>
  );
}

export default App;
