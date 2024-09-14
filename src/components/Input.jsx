const Input = ({ data }) => {
  const { placeholder, btnText, type } = data;
  return (
    <div className="relative my-3">
      <input
        className=" bg-bgGray w-full px-[20px] py-[16px] rounded-[36px] text-[14px] outline-none "
        placeholder={placeholder}
        type={type}
      />
      <button className=" absolute right-[4px] top-[50%] transform -translate-y-[50%] rounded-[36px] bg-primaryClr px-[20px] py-[10px] text-whiteClr font-[500] ">
        {btnText}
      </button>
    </div>
  );
};

export default Input;
