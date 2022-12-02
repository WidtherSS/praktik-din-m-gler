import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="absolute top-[654px] left-[405px] w-[1110px] h-[922px] overflow-hidden text-right text-lg text-gray-1400 font-roboto">
      <div className="absolute top-[474px] left-[0px] w-[540px] h-[446px]">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
          alt=""
          src="../mask-group18@2x.png"
        />
        <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
          <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-orange w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
              C
            </div>
          </div>
        </div>
        <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
            Fjordager 234 • Gevninge
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        <img
          className="absolute top-[24px] left-[480px] w-[36px] h-[36px]"
          alt=""
          src="../love.svg"
        />
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[0px] left-[0px] w-[540px] h-[446px] [&.animate]:animate-[1s_ease_0s_1_normal_backwards_scale-down-center] opacity-[1] text-[inherit]"
        to="/property-details"
        data-animate-on-scroll
      >
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
          alt=""
          src="../mask-group19@2x.png"
        />
        <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
          <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-turquoise w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
            Klosterengen 234
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        <select className="absolute top-[24px] left-[480px] w-[36px] h-[36px]" />
      </Link>
      <div className="absolute top-[0px] left-[570px] w-[540px] h-[446px]">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
          alt=""
          src="../mask-group20@2x.png"
        />
        <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
          <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-gold w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
              B
            </div>
          </div>
        </div>
        <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
            Lønbjergparken 22 • Vindinge
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        <img
          className="absolute top-[24px] left-[480px] w-[36px] h-[36px]"
          alt=""
          src="../love1.svg"
        />
      </div>
      <div className="absolute top-[476px] left-[570px] w-[540px] h-[446px]">
        <div className="absolute top-[0px] left-[0px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] w-[540px] h-[446px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[540px] h-[225px] object-cover"
          alt=""
          src="../mask-group29@2x.png"
        />
        <div className="absolute top-[390px] left-[24px] w-[492px] h-[30px]">
          <div className="absolute top-[0px] left-[372px] w-[120px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block">
              Kr. 4.567.890
            </div>
          </div>
          <div className="absolute top-[0px] left-[57px] w-[139px] h-[28px] text-left text-sm">
            <div className="absolute top-[0px] left-[0px] leading-[28px] inline-block">
              4 værelser • 156 m²
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[30px] h-[30px] text-center text-white">
            <div className="absolute top-[0px] left-[0px] bg-brown-100 w-[30px] h-[30px]" />
            <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium inline-block w-[30px]">
              A
            </div>
          </div>
        </div>
        <div className="absolute top-[249px] left-[24px] w-[492px] h-[110px] text-left">
          <div className="absolute top-[40px] left-[0px] text-sm leading-[28px] inline-block w-[492px] h-[32px]">
            4000 Roskilde
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[30px] font-medium text-gray-1600 inline-block">
            Sivholmvej 123 • Veddelev
          </div>
          <div className="absolute top-[80px] left-[0px] w-[190px] h-[30px]">
            <div className="absolute top-[0px] left-[0px] inline-block">
              <span className="leading-[30px] font-medium">Villa</span>
              <span className="text-sm leading-[28px]">
                {" "}
                • Ejerudgift: 4.567 kr.
              </span>
            </div>
          </div>
        </div>
        <div className="absolute top-[373px] left-[24px] bg-gray-400 w-[492px] h-[1px]" />
        <img
          className="absolute top-[24px] left-[480px] w-[36px] h-[36px]"
          alt=""
          src="../love2.svg"
        />
      </div>
    </div>
  );
};

export default Cards;
