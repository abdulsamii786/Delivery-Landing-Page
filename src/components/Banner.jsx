import { firstInput } from "../utils/inputText";
import { buttons } from "../utils/buttonsText";
import Button2 from "./common/Button2";
import Input from "./Input";

const Banner = ({ data }) => {
  const { mainHeading, subHeading, imgUrl } = data;
  return (
    <div className="flex items-center justify-between w-[80%] mx-auto my-10 gap-20">
      <div>
        {mainHeading && (
          <h1 className="text-6xl font-[700] my-10 ">{mainHeading}</h1>
        )}
        <p className=" text-[20px] my-10 text-grayClr ">{subHeading}</p>
        <Input data={firstInput} />
        <div className="flex gap-6 my-10 ">
          {buttons.map((items, index) => {
            return <Button2 key={index} data={items} />;
          })}
        </div>
      </div>

      <div>{imgUrl && <img src={imgUrl} />}</div>
    </div>
  );
};

export default Banner;
