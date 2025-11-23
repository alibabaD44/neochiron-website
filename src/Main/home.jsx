import React from "react";

import "./home.css";
import "./msandvs.css";

function Home() { 
  return (
    <>
      <div className="Foto">
        <div className="grayScreen">
          <h1>NEOCHIRON</h1> 
          <h3>Geleceği kodlayan takım.</h3>
        </div>
        <img src="/src/assets/sal.png" alt="" />
        
      </div>
      <div id="hakkimizda" className="Hakkımızda">
        <div className="Hak">
          <div className="Hak-ack">
            <h2>Hakkımızda</h2>
            <h3>
              Neochiron, Şehremini Anadolu Lisesi öğrencilerinden oluşan,
              yenilikçi ve tutkulu bir FRC (FIRST Robotics Competition)
              takımıdır. Takımımız, STEM (Bilim, Teknoloji, Mühendislik ve
              Matematik) alanlarında derinlemesine düşünen, problem çözme
              yeteneklerini geliştirmeye odaklanan ve takım çalışmasına güçlü
              bir şekilde inanan gençlerden oluşmaktadır. Her bir üyemiz,
              öğrenmeye olan merakı ve üretme tutkusuyla hareket eder;
              yaratıcılık, analitik düşünme ve inovasyon gibi becerilerini,
              bilim ve teknolojiyi kullanarak gerçek dünyadaki problemlere çözüm
              üretmek için kullanır. Bizler, sadece robot yapmayı öğrenmekle
              kalmaz; aynı zamanda stratejik düşünme, liderlik, iletişim ve iş
              birliği becerilerimizi de geliştiririz. Başarıya tutkuyla bağlı
              bir ekip olarak, her projede sınırlarımızı zorlamaya ve fark
              yaratmaya odaklanırız. Neochiron olarak amacımız, bilimin gücünü
              kullanarak topluma değer katmak, öğrenmeyi eğlenceli ve anlamlı
              hâle getirmek ve geleceğin teknolojik liderlerini yetiştirmektir.
            </h3>
          </div>
        </div>
        <div className="imgHak"> </div>
      </div>
      <div id="misyonumuz"className="misyonandvizyon">
        <div className="misyon">
          <h2>MİSYONUMUZ</h2>
          <h3>
            Farklı yeteneklere sahip bireyleri ortak bir amaçta
            buluşturmak;araştıran,sorgulayan,çözüm üreten gençler yetiştirmek.
            Takım içi dayanışma,sürdürebilir mühendislik yaklaşımı ve etik
            değerlere bağlılıkla; her tasarımda, her projede öğrenmeye ve
            gelişmeye devam etmek.
          </h3>
        </div>
        <div className="vizyon">
          <h2>VİZYONUMUZ</h2>
          <h3>
            Teknolojiyi,bilgeliği ve ekip ruhunu harmanlayarak yanlızca
            yarışmalarda değil; geleceğin mühendislik dünyasında da kalıcı izler
            bırakmak. NEOCHIRON, adanmışlığın,disiplinin ve stratejik düşüncenin
            sembolü olarak, hem ulusal hem de uluslararası arenada örnek bir
            takım olmayı hedefler.
          </h3>
        </div>
      </div>
    </>
  );
}

export default Home;
