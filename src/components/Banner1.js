import { Link } from "react-router-dom";

const Banner1 = () => {
  return (
    <a className="[text-decoration:none] absolute top-[152px] left-[calc(50%_-_960px)] bg-gray-1200 flex flex-col items-center justify-center gap-[0px] text-center text-xl text-white font-roboto">
      <b className="relative leading-[50px] inline-block">Account Register</b>
      <img
        className="relative w-[1920px] h-[350px] shrink-0 object-cover mix-blend-multiply"
        alt=""
        src="../mask-group@2x.png"
      />
      <div className="relative w-[149px] h-[30px] shrink-0 text-left text-base text-gray-1700">
        <div className="absolute top-[0px] left-[83px] leading-[30px] inline-block">
          Register
        </div>
        <div className="absolute top-[8px] left-[65px] bg-white w-[2px] h-[14px] opacity-[0.6]" />
        <Link
          className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] leading-[30px] text-white text-center inline-block"
          to="/home-01"
        >
          Home
        </Link>
      </div>
    </a>
  );
};

export default Banner1;
