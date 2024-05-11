import { Input } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className=" py-3" style={{ background: "yellow" }}>
      <div className="bg-white w-full b-input d-flex">
        <Input placeholder="From" prefix={<FaLocationDot />} className="p-3" />
        <div className="icon">
          <RiArrowLeftRightLine size={16} style={{ color: "#c9cfdb" }} />
        </div>
        <Input placeholder="To" prefix={<FaLocationDot />} className="p-3" />
      </div>
    </div>
  );
};

export default Hero;
