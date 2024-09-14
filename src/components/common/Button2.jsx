const Button2 = ({ data }) => {
  const { logo, mainText, subText } = data;

  return (
    <>
      <button className="flex items-center gap-2 px-4 py-2 bg-bgGray rounded-lg ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col items-start ">
          <h4 className="text-[12px] font-semibold">{subText}</h4>
          <h4 className="text-[20px] font-semibold leading-none">{mainText}</h4>
        </div>
      </button>
    </>
  );
};

export default Button2;
