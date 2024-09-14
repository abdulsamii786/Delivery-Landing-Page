import BannerTitle from "../components/common/BannerTitle";
import Input from "./Input";
import { secondInput } from "../utils/inputText";
import { newsLetterText } from "../utils/BannerText";
const Newsletter = () => {
  const { text, paragraph } = newsLetterText;
  return (
    <div id="news" className="bg-primarLightClr">
      <div className="py-20 mx-auto flex justify-between items-center gap-20  md:w-full lg:w-[80%]">
        <div className="w-[50%]">
          <h4 className=" text-[35px] font-semibold ">{text}</h4>
          <p className=" text-[20px] my-2 text-grayClr ">{paragraph}</p>
        </div>
        <div className="w-[50%]">
          <Input data={secondInput} />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
