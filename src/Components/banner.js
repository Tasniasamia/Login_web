
import { DatePicker, Input } from "antd";
import dayjs from "dayjs";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoSearch } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
import { useState } from "react";

const Banner = () => {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const [isShippingFocused, setIsShippingFocused] = useState(false);

  return (
    <div className=" py-2">
      <div className="bg-white w-full b-input d-flex flex-md-row flex-column justify-content-between custom-shadow">
        <Input
          placeholder="From"
          prefix={<FaLocationDot />}
          className="p-2 location"
        />
        <div className="icon">
          <RiArrowLeftRightLine size={16} style={{ color: "#c9cfdb" }} />
        </div>
        <Input
          placeholder="To"
          prefix={<FaLocationDot />}
          className="p-2 location"
        />
        <DatePicker
          placeholder={`${new Date().toISOString().slice(0, 10)}`}
          name="date"
          defaultValue={dayjs("2019-09-03", dateFormat)}
          minDate={dayjs("2019-08-01", dateFormat)}
          maxDate={dayjs("2020-10-31", dateFormat)}
          className="location2 p-2"
        />
        <Input
          placeholder="date"
          prefix={<MdLocalShipping />}
          className="p-2 location2 shipping"
          onFocus={() => setIsShippingFocused(true)}
          onBlur={() => setIsShippingFocused(false)}
        />

        <div className="search">
          <IoSearch size={20} className="text-white icon2" />
        </div>
      </div>
      <div
        className={`${
          isShippingFocused ? "d-flex justify-content-end" : "d-none"
        }`}
      >
        <div className="bg-white shipping-box2 mt-1 ">
          <h6
            className="text-transform-uppercase fw-bold mb-2"
            style={{
              fontSize: "10px",
              color: "#000c37",
              letterSpacing: ".1rem",
              background:"red"
            }}
          >
            SHIPPING TYPE
          </h6>
      
           <div className="row rol-cols-4  mx-auto fw-bold bg-white"style={{fontSize:"10px",borderRadius:"6px"}}>
            <div className="col text-center rounded-1 fw-bold"style={{background:"yellow",padding:'10px'}}>
              <div>SEA</div>
            </div>
            <div className="col text-center rounded-1"style={{background:"yellow",padding:'10px'}}>
              <div>LAND</div>
            </div>
            <div className="col text-center rounded-1"style={{background:"red",padding:'10px'}}>
              <div>AIR </div>
            </div>
            <div className="col text-center rounded-1 ms-1"disabled  style={{background:"yellow",marginLeft:"2px",padding:'10px'}}>
              <div>AUTO </div>
            </div>
          </div>
      
       
        </div>
      </div>
    </div>
  );
};

export default Banner;
