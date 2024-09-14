const BannerTitle = ({ data }) => {
  const { text, paragraph } = data;
  return (
    <div className="flex flex-col m-20">
      <h2 className="text-center text-[35px] font-semibold">{text}</h2>
      {paragraph && (
        <p className="text-center text-grayClr text-[20px] my-3 ">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default BannerTitle;
