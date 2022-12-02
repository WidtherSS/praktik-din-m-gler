import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar2 = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="absolute top-[5px] left-[0px] flex flex-col items-center justify-center">
      <div className="relative w-[1920px] h-[147px] shrink-0">
        <nav className="absolute top-[62px] left-[0px] bg-white w-[1920px] flex flex-row p-[18px_405px] box-border items-center justify-between sm:w-[10%] sm:pl-[20px] sm:pr-[20px] sm:box-border">
          <div className="relative w-[148px] h-[40px] shrink-0 hidden">
            <div className="absolute top-[0px] left-[30px] text-2xl leading-[40px] font-medium font-roboto text-gray-1600 text-left inline-block">
              Ghor Bari
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[22px] h-[40px] overflow-hidden"
              alt=""
              src="../frame5.svg"
            />
          </div>
          <Link
            className="cursor-pointer [text-decoration:none] relative w-[296px] h-[49px] shrink-0 overflow-hidden"
            to="/home-01"
          >
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../g14301.svg"
            />
          </Link>
          <a className="[text-decoration:none] flex flex-row items-center justify-center gap-[65px] cursor-pointer">
            <button className="cursor-pointer [border:none] p-[0] bg-black relative w-[24px] h-[24px] shrink-0 overflow-hidden hidden md:flex">
              <img
                className="absolute w-[75%] top-[41.67%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                alt=""
                src="../vector.svg"
              />
              <img
                className="absolute w-[75%] top-[25%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                alt=""
                src="../vector.svg"
              />
              <img
                className="absolute w-[75%] top-[58.33%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                alt=""
                src="../vector.svg"
              />
              <img
                className="absolute w-[75%] top-[75%] right-[12.5%] left-[12.5%] max-w-full overflow-hidden h-[0px]"
                alt=""
                src="../vector.svg"
              />
            </button>
            <div className="relative w-[583px] h-[30px] shrink-0 md:hidden">
              <Link
                className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] text-base leading-[30px] font-roboto text-gray-1400 text-left inline-block hover:animate-[1s_ease-in-out_0s_1_normal_none_scale-down-center] hover:opacity-[1]"
                to="/propertylist"
              >
                Boliger til salg
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[179px] text-base leading-[30px] font-roboto text-gray-1400 text-left inline-block"
                to="/agents-2"
              >
                Mæglere
              </Link>
              <Link
                className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[315px] text-base leading-[30px] font-roboto text-gray-1400 text-left inline-block"
                to="/favorites"
              >
                Mine favoritter
              </Link>
              <a className="[text-decoration:none] absolute top-[0px] left-[497px] text-base leading-[30px] font-roboto text-gray-1400 text-left inline-block">
                Kontakt os
              </a>
            </div>
          </a>
        </nav>
        <header className="absolute top-[0px] left-[0px] bg-gray-1700 flex flex-row p-[16px_405px] box-border items-start justify-start gap-[328px] text-left text-base text-white font-roboto sm:flex-row sm:p-[0px_20px] sm:box-border">
          <div className="relative w-[218px] h-[30px] shrink-0">
            <div className="absolute top-[0px] left-[32px] leading-[30px] inline-block">
              4000@dinmaegler.com
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-[24px] h-[24px] overflow-hidden"
              alt=""
              src="../paperplane-1-16.svg"
            />
          </div>
          <div className="relative w-[151px] h-[30px] shrink-0">
            <div className="absolute top-[0px] left-[30px] leading-[30px] inline-block">
              +45 7070 4000
            </div>
            <img
              className="absolute top-[3px] left-[0px] w-[22px] h-[22px] overflow-hidden"
              alt=""
              src="../call-16.svg"
            />
          </div>
          <button
            className="cursor-pointer [border:none] p-[0] bg-[transparent] relative w-[85px] h-[30px] shrink-0 hover:animate-[1s_ease-in-out_1s_1_reverse_none_scale-up] hover:opacity-[1]"
            onClick={onLoginButtonClick}
          >
            <img
              className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_42.5px)] w-[18px] h-[18px] overflow-hidden"
              alt=""
              src="../user-4-1.svg"
            />
            <img
              className="absolute top-[6px] left-[2px] w-[16px] h-[18px] hidden"
              alt=""
              src="../login.svg"
            />
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_16.5px)] text-base leading-[30px] font-roboto text-white text-left inline-block [-webkit-text-stroke:1px_#000]">
              Log ind
            </div>
          </button>
        </header>
      </div>
    </div>
  );
};

export default NavigationBar2;
