const Button = ({ text }) => {
  return (
    <>
      <button className="rounded-[36px] bg-primaryClr px-[20px] py-[10px] text-whiteClr font-[500] ">
        {text}
      </button>
    </>
  );
};

export default Button;
