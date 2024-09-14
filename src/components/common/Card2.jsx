const Card2 = ({ data, isReverse }) => {
  const { text, imgUrl, width } = data;
  return (
    <div
      className={`flex flex-col w-[300px] rounded-2xl font-medium 
        ${isReverse && "flex-col-reverse"}   `}
    >
      <div>
        <h3>{text}</h3>
      </div>
      <div className="flex justify-end">
        <img className={` ${width ? width : "w-[130px]"}`} src={imgUrl} />
      </div>
    </div>
  );
};

export default Card2;
