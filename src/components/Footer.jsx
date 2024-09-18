import { buttons } from "../utils/buttonsText";
import { footerData } from "../utils/footerData";
import Button2 from "./common/Button2";

const Footer = ({ data }) => {
  let currentYear = new Date().getFullYear();

  const [
    firtArr,
    secArr,
    thirdArr,
    fourthArr,
    fifthArr,
    sixArr,
    seventhArr,
    eightArr,
  ] = footerData;
  return (
    <div className=" bg-blackClr py-20">
      <div className="flex justify-between w-[80%] mx-auto ">
        <div>
          <img src="/assets/imgs/🍕.png" alt="" />
          <div className="flex gap-6 my-10 ">
            {buttons.map((items, index) => {
              return <Button2 key={index} data={items} />;
            })}
          </div>
        </div>

        <div>
          {firtArr.map((item, index) => {
            const { title, link1, link2, link3, link4, link5 } = item;
            return (
              <div key={index}>
                <h4 className="text-[16px] font-medium text-whiteClr mb-3">
                  {title}
                </h4>
                <ul>
                  {link1 && (
                    <li className="text-[14px] text-grayClr my-1">{link1}</li>
                  )}
                  {link2 && (
                    <li className="text-[14px] text-grayClr my-1">{link2}</li>
                  )}
                  {link3 && (
                    <li className="text-[14px] text-grayClr my-1">{link3}</li>
                  )}
                  {link4 && (
                    <li className="text-[14px] text-grayClr my-1">{link4}</li>
                  )}
                  {link5 && (
                    <li className="text-[14px] text-grayClr my-1">{link5}</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div>
          {secArr.map((item, index) => {
            const { title, link1, link2, link3, link4, link5 } = item;
            return (
              <div key={index}>
                <h4 className="text-[16px] font-medium text-whiteClr mb-3">
                  {title}
                </h4>
                <ul>
                  {link1 && (
                    <li className="text-[14px] text-grayClr my-1">{link1}</li>
                  )}
                  {link2 && (
                    <li className="text-[14px] text-grayClr my-1">{link2}</li>
                  )}
                  {link3 && (
                    <li className="text-[14px] text-grayClr my-1">{link3}</li>
                  )}
                  {link4 && (
                    <li className="text-[14px] text-grayClr my-1">{link4}</li>
                  )}
                  {link5 && (
                    <li className="text-[14px] text-grayClr my-1">{link5}</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div>
          {thirdArr.map((item, index) => {
            const { title, link1, link2, link3, link4, link5 } = item;
            return (
              <div key={index}>
                <h4 className="text-[16px] font-medium text-whiteClr mb-3">
                  {title}
                </h4>
                <ul>
                  {link1 && (
                    <li className="text-[14px] text-grayClr my-1">{link1}</li>
                  )}
                  {link2 && (
                    <li className="text-[14px] text-grayClr my-1">{link2}</li>
                  )}
                  {link3 && (
                    <li className="text-[14px] text-grayClr my-1">{link3}</li>
                  )}
                  {link4 && (
                    <li className="text-[14px] text-grayClr my-1">{link4}</li>
                  )}
                  {link5 && (
                    <li className="text-[14px] text-grayClr my-1">{link5}</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        <div>
          {fourthArr.map((item, index) => {
            const { title, link1, link2, link3, link4, link5 } = item;
            return (
              <div key={index}>
                <h4 className="text-[16px] font-medium text-whiteClr mb-3">
                  {title}
                </h4>
                <ul>
                  {link1 && (
                    <li className="text-[14px] text-grayClr my-1">{link1}</li>
                  )}
                  {link2 && (
                    <li className="text-[14px] text-grayClr my-1">{link2}</li>
                  )}
                  {link3 && (
                    <li className="text-[14px] text-grayClr my-1">{link3}</li>
                  )}
                  {link4 && (
                    <li className="text-[14px] text-grayClr my-1">{link4}</li>
                  )}
                  {link5 && (
                    <li className="text-[14px] text-grayClr my-1">{link5}</li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between w-[80%] mx-auto mt-20 ">
        <div className="text-grayClr">
          © {currentYear} Abdul Sami.All right reserved
        </div>

        <div className="flex justify-between gap-10">
          {fifthArr.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-[14px] text-grayClr">{item.link1}</p>
              </div>
            );
          })}
          {sixArr.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-[14px] text-grayClr">{item.link1}</p>
              </div>
            );
          })}
          {seventhArr.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-[14px] text-grayClr">{item.link1}</p>
              </div>
            );
          })}
          {eightArr.map((item, index) => {
            return (
              <div key={index}>
                <p className="text-[14px] text-grayClr">{item.link1}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
