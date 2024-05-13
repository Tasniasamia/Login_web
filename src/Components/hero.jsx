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
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Hero = () => {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const options = [
    "pickup",
    "destination",
    "Occan",
    "Delivery",
    "Truck",
    "Rail",
  ];
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="box-container ">
        <div className=" w-full b-input d-md-flex d-none flex-md-row flex-column justify-content-between gap-2 box-container2">
          <div className="location">ORIGIN OF SHIPMENT</div>
          <div className="location">DESTINATION OF SHIPMENT</div>
          <div className="location2">READY TO LOAD</div>
        </div>
        <div className="bg-white w-full b-input d-flex flex-md-row flex-column justify-content-between gap-2 p-1 rounded-1  ">
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="p-2 location"
          >
            <Input placeholder="From" prefix={<FaLocationDot />} />
          </Dropdown>
          <div className="icon ">
            <RiArrowLeftRightLine size={13} style={{ color: "#0139ff" }} />
          </div>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
            className="p-2 location"
          >
            <Input placeholder="To" prefix={<FaLocationDot />} />
          </Dropdown>
          <DatePicker
            placeholder={`${new Date().toISOString().slice(0, 10)}`}
            name="date"
            defaultValue={dayjs("2019-09-03", dateFormat)}
            minDate={dayjs("2019-08-01", dateFormat)}
            maxDate={dayjs("2020-10-31", dateFormat)}
            className="location2 p-2"
          />
          <div className="search">
            <IoSearch size={20} className="text-white icon2" />
          </div>
        </div>
      </div>
      <div className="row row-cols-md-4">
        <div className="col">
          <div className="menu-box"style={{marginBottom:'20px'}}>
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
                <Checkbox value='Maersk'>Maersk</Checkbox>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
