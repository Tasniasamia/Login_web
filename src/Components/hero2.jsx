import { DatePicker, Dropdown, Input } from "antd";
import dayjs from "dayjs";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoSearch } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [direction, setDirection] = useState("");
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  console.log("direction", direction);
  const items = [
    {
      label: (
        <div
          onClick={() => {
            if (direction === "from") setLocation("Dhaka, Bangladesh");
            if (direction === "to") setDestination("Dhaka, Bangladesh");
          }}
        >
          Dhaka, Bangladesh
        </div>
      ),
      key: "0",
      icon: <CiFlag1 />,
    },
    {
      label: (
        <div
          onClick={() => {
            if (direction === "from") setLocation("Khulna, Bangladesh");
            if (direction === "to") setDestination("Khulna, Bangladesh");
          }}
        >
          Khulna, Bangladesh
        </div>
      ),
      key: "1",
      icon: <CiFlag1 />,
    },
    {
      label: (
        <div
          onClick={() => {
            if (direction === "from") setLocation("Kolkata, Bangladesh");
            if (direction === "to") setDestination("Kolkata, Bangladesh");
          }}
        >
          Kolkata, Bangladesh
        </div>
      ),
      key: "2",
      icon: <CiFlag1 />,
    },
  ];
  const navigate=useNavigate();
 return (
    <div>
      <div className="box-container ">
        <div className="w-full b-input d-flex flex-md-row flex-column justify-content-between gap-2 p-1 rounded-1  bg-white ">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="p-2 location bg-white order-2"
            onClick={() => {
              setDirection("from");
            }}
          >
            <Input
              placeholder="From"
              name="from"
              prefix={<FaLocationDot />}
              value={location}
            />
          </Dropdown>
          <div className="icon ">
            <RiArrowLeftRightLine size={13} style={{ color: "#0139ff" }} />
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="p-2 location bg-white order-1"
            onClick={() => {
              setDirection("to");
            }}
          >
            <Input
              placeholder="To"
              name="to"
              value={destination}
              prefix={<FaLocationDot />}
            />
          </Dropdown>
          <DatePicker
            placeholder={`${new Date().toISOString().slice(0, 10)}`}
            name="date"
            defaultValue={dayjs("2019-09-03", dateFormat)}
            minDate={dayjs("2019-08-01", dateFormat)}
            maxDate={dayjs("2020-10-31", dateFormat)}
            className="location2 p-2 bg-white order-3"
          />
          <div className="search order-4">
            <IoSearch
              size={20}
              className="text-white icon2"
              onClick={() => {
                navigate(`/home2?from=${location}&to=${destination}`);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
