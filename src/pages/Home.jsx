import Banner from "../components/Banner";
import BannerTitle from "../components/common/BannerTitle";
import Card from "../components/common/Card";
import Card2 from "../components/common/Card2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import {
  bannerData,
  bannerTitle1,
  bannerTitle2,
  bannerTitle3,
} from "../utils/BannerText";
import {
  card2Data,
  cardText,
  dishesText,
  dishesText2,
} from "../utils/cardData";

const Home = () => {
  return (
    <>
      <Header />

      <Banner data={bannerData} />

      <BannerTitle data={bannerTitle1} />

      <div className="flex justify-end items-center gap-20 mx-auto w-[80%] my-10">
        {dishesText.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
        <Card2 data={card2Data[0]} />
      </div>

      <div className="flex justify-start items-center gap-20 mx-auto w-[80%] my-10">
        <Card2 data={card2Data[1]} />
        {dishesText2.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>

      <BannerTitle data={bannerTitle2} />

      <div className="flex justify-around mx-auto w-[80%] my-10">
        {cardText.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>

      <BannerTitle data={bannerTitle3} />

      <Newsletter />

      <Footer />
    </>
  );
};

export default Home;
