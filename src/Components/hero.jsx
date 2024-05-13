import { DatePicker, Dropdown, Input, Space } from "antd";
import dayjs from "dayjs";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  return (
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
            trigger={['click']}
            className="p-2 location"
        >
        <Input
          placeholder="From"
          prefix={<FaLocationDot />}
         
        />
        </Dropdown>
        <div className="icon ">
          <RiArrowLeftRightLine size={13} style={{ color: "#0139ff" }} />
        </div>

        <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
            className="p-2 location"
        >
        <Input
          placeholder="To"
          prefix={<FaLocationDot />}
         
        />
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
  );
};

export default Hero;
