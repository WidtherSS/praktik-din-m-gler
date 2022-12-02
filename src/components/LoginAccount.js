const LoginAccount = () => {
  return (
    <div className="absolute top-[622px] left-[500px] rounded-[4px] bg-white shadow-[0px_10px_30px_rgba(0,_115,_225,_0.06)] [border:1px_solid_#d3dee8] box-border flex flex-col p-[72px_190px] items-center justify-center gap-[27px] text-left text-base text-gray-500 font-roboto">
      <div className="relative text-3xl leading-[42px] font-medium text-gray-1600 text-center inline-block">
        Opret bruger hos Din Mægler
      </div>
      <div className="relative w-[540px] h-[98px] shrink-0">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[540px] h-[60px]"
          type="text"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Fulde navn
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Fulde navn
        </div>
      </div>
      <div className="relative w-[540px] h-[98px] shrink-0 text-gray-1400">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[540px] h-[60px]"
          type="email"
        />
        <div className="absolute top-[0px] left-[0px] leading-[30px] inline-block">
          Email adresse
        </div>
        <div className="absolute top-[53px] left-[15px] leading-[30px] text-gray-500 inline-block">
          Email adresse
        </div>
      </div>
      <div className="relative w-[540px] h-[98px] shrink-0">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[540px] h-[60px]"
          type="password"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Password
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Password
        </div>
      </div>
      <div className="relative w-[540px] h-[98px] shrink-0">
        <input
          className="[border:1px_solid_#d3dee8] bg-white absolute top-[38px] left-[0px] rounded-[2px] box-border w-[540px] h-[60px]"
          type="password"
        />
        <div className="absolute top-[53px] left-[15px] leading-[30px] inline-block">
          Bekræft password
        </div>
        <div className="absolute top-[0px] left-[0px] leading-[30px] text-gray-1400 inline-block">
          Bekræft password
        </div>
      </div>
      <div className="relative w-[540px] h-[60px] shrink-0 text-center text-lg text-white">
        <div className="absolute top-[0px] left-[0px] rounded-[2px] bg-gray-1700 w-[540px] h-[60px]" />
        <div className="absolute top-[15px] left-[214px] leading-[30px] font-medium inline-block">
          Opret bruger
        </div>
      </div>
    </div>
  );
};

export default LoginAccount;
