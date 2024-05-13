import {
  Checkbox,
  Col,
  DatePicker,
  Dropdown,
  Input,
  Radio,
  Row,
  Space,
} from "antd";
import dayjs from "dayjs";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoCaretDownOutline, IoCaretUpOutline, IoSearch } from "react-icons/io5";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { CiFlag1 } from "react-icons/ci";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [direction, setDirection] = useState("");
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const queryParams = new URLSearchParams(url.search);

const from = queryParams.get('from');
const to = queryParams.get('to')
  // const params = useSearchParams();
  // const location=useLocation()
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
 
  const options = [
    "pickup",
    "destination",
    "Occan",
    "Delivery",
    "Truck",
    "Rail",
  ];
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
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

  return (
    <div>
      <div className="box-container ">
        <div className=" w-full b-input d-md-flex d-none flex-md-row flex-column justify-content-between gap-2 box-container2">
          <div className="location">ORIGIN OF SHIPMENT</div>
          <div className="location">DESTINATION OF SHIPMENT</div>
          <div className="location2">READY TO LOAD</div>
        </div>
        <div className="w-full b-input d-flex flex-md-row flex-column justify-content-between gap-2 p-1 rounded-1  bg-white ">
        <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="p-2 location bg-white"
            onClick={() => {
              setDirection("from");
            }}
          >
            <Input
              placeholder="From"
              name="from"
              prefix={<FaLocationDot />}
              value={from || location}
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
            className="p-2 location bg-white"
            onClick={() => {
              setDirection("to");
            }}
          >
            <Input
              placeholder="To"
              name="to"
              value={to || destination}
              prefix={<FaLocationDot />}
            />
          </Dropdown>
          <DatePicker
            placeholder={`${new Date().toISOString().slice(0, 10)}`}
            name="date"
            defaultValue={dayjs("2019-09-03", dateFormat)}
            minDate={dayjs("2019-08-01", dateFormat)}
            maxDate={dayjs("2020-10-31", dateFormat)}
            className="location2 p-2 bg-white"
          />
          <div className="search">
            <IoSearch size={20} className="text-white icon2" />
          </div>
        </div>
      </div>
      <div
        onClick={() => setToggle(!toggle)}
        className={`filter-btn px-2 d-flex justify-content-between align-items-center mb-2 d-md-none d-block`}
      >
        <span>  {toggle?'Hidden ':'Show'}{" "}filter</span>
        {toggle? <IoCaretUpOutline />:<IoCaretDownOutline /> }
      </div>
      <div
        className={`row row-cols-md-4 d-md-block  ${
          toggle ? "d-block" : "d-none"
        }`}
      >
        <div className="col">
          <div className="menu-box" style={{ marginBottom: "20px" }}>
            <h4 className="menu-title">Types of container</h4>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical" className="menu-text">
                <Radio value={1}>{`20'`} Standard</Radio>
                <Radio value={2}>{`40'`} Standard</Radio>
                <Radio value={3}>{`40'`} High Cube</Radio>
                <Radio value={4}>{`20'`} Refrigerated</Radio>
                <Radio value={5}>{`40'`} Refrigerated</Radio>
                <Radio value={6}>{`45'`} High Cube</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="menu-box">
            <h4 className="menu-title">Included Services</h4>
            <Row>
              {options.map((i, item) => {
                return (
                  <Col span={16} key={item} className="mb-2 text-capitalize">
                    <Checkbox value={i}>{i}</Checkbox>
                  </Col>
                );
              })}
            </Row>
          </div>
          <div className="menu-box">
            <h4 className="menu-title">Shipping Line</h4>
            <Row>
              <Col span={16} className="mb-2 text-capitalize">
                <Checkbox value="Maersk">Maersk</Checkbox>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
