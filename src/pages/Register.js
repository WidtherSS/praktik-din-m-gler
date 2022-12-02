import BG2 from "../components/BG2";
import LoginAccount from "../components/LoginAccount";
import Banner1 from "../components/Banner1";
import Footer1 from "../components/Footer1";
import Nav1 from "../components/Nav1";

const Register = () => {
  return (
    <div className="relative bg-white w-full h-[2395px] overflow-hidden lg:w-full">
      <BG2 />
      <LoginAccount />
      <Banner1 />
      <Footer1
        icon="../icon1.svg"
        icon1="../icon2.svg"
        dinMaegler="../din-maegler.svg"
        icon2="../icon.svg"
      />
      <Nav1 />
    </div>
  );
};

export default Register;
