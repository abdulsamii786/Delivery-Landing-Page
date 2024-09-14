const Card = ({ data }) => {
  const { text, num, imgUrl } = data;
  return (
    <div className="flex flex-col w-[180px]">
      <div>
        <h3 className="text-primaryClr text-4xl font-semibold">{num}</h3>
      </div>
      <div className=" flex flex-col items-center bg-bgGray p-5 rounded-2xl">
        <img className="bg-white rounded-full p-2 w-[50px]" src={imgUrl} />
        <h3 className="font-semibold text-center pt-4">{text}</h3>
      </div>
    </div>
  );
};

export default Card;
