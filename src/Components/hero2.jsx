import { DatePicker, Form, Input } from "antd";
import "./style.css";
import { IoLocationOutline } from "react-icons/io5";
import { TbSwitchHorizontal } from "react-icons/tb";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { SearchOutlined } from "@ant-design/icons";
import Navber from "../Navber/Navber";
const Header2 = () => {
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
  return (
    <>
  
      <h2 className="text-start text-white ">Book Your Container</h2>

      <div className="">
        <Form
          onFinish={async (values) => {
            console.log(values);
          }}
          className="p-2 "
        >
          <div className="justify input-h  mx-auto">
            <Input
              name="from"
              addonBefore={
                <IoLocationOutline size={20} className="hover-color" />
              }
              placeholder="From"
              className=""
            />
            <div className="style-logo">
              <TbSwitchHorizontal size={15} />
            </div>
            <Input
              name="to"
              addonBefore={
                <IoLocationOutline size={20} className="hover-color" />
              }
              placeholder="To"
              className=""
            />
            <DatePicker
              name="date"
              defaultValue={dayjs("2019-09-03", dateFormat)}
              minDate={dayjs("2019-08-01", dateFormat)}
              maxDate={dayjs("2020-10-31", dateFormat)}
            />
            <button className="bg-primary "><SearchOutlined size={20} /></button>
            {/* <button className="bg-light "><CiSearch size={15} /></button> */}
          </div>
        </Form>
      </div>
    </>
  );
};

export default Header2;
