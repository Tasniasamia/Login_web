import { Button, DatePicker, Dropdown, Form, Input, Space } from "antd";
import { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFileCirclePlus } from "react-icons/fa6";
import { TiMinusOutline, TiPlusOutline } from "react-icons/ti";

const PackageList = () => {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [direction, setDirection] = useState("");
  const [towards, setToward] = useState(false);
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const queryParams = new URLSearchParams(url.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to");
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";
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
    <div style={{ minHeight: "70vh", background: "#F8F9FD" }}>
      <div className="container">
        <div>
          <Link to="/client/quote-requests ">
            <IoIosArrowBack
              size={30}
              className="mb-4 p-1 btn btn-outline-info"
            />
          </Link>
          <div className="p-4 border bg-white rounded">
            <div className=" w-full b-input d-md-flex d-none flex-md-row flex-column justify-content-between gap-2 box-container2">
              <div className="location">ORIGIN OF SHIPMENT</div>
              <div className="location">DESTINATION OF SHIPMENT</div>
              <div className="location2 ">READY TO LOAD</div>
            </div>
            <div className="w-full b-input d-flex flex-md-row flex-column justify-content-between gap-2 p-1 rounded-1  bg-white ">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className={`p-2 location bg-white order-1 `}
                onClick={() => {
                  setDirection("from");
                }}
              >
                <Input
                  placeholder="From"
                  name="from"
                  prefix={<FaLocationDot />}
                  value={towards ? to : from}
                />
              </Dropdown>
              <div
                className="icon "
                onClick={() => {
                  setToward(!towards);
                }}
              >
                <RiArrowLeftRightLine
                  size={13}
                  style={{
                    color: "#0139ff",
                    transform: towards ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />
              </div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                className={`p-2 location bg-white order-2`}
                onClick={() => {
                  setDirection("to");
                }}
              >
                <Input
                  placeholder="To"
                  name="to"
                  value={towards ? from : to}
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
            </div>
          </div>
          <p
            className="text-start mt-4 fw-bold"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Import Packing List in Bulk!
          </p>
          <p
            className="text-start mt-2 d-flex gap-2 align-items-center"
            style={{
              fontSize: "16px",
              
            }}
          > 
            <span>Choose excel file for bulk import </span>
            <FaFileCirclePlus style={{color:"#0139ff"}}/>
          </p>
        <div className="d-flex gap-2 align-items-center">
            <span>Or</span>
            <div style={{background:"black",height:"2px",width:"100%"}}/>
        </div>
        <Form
  name="dynamic_form_nest_item"
  onFinish={(value)=>{console.log(value)}}
  style={{ maxWidth: "100%" }} // Enclose "100%" in quotes
  autoComplete="off"
>
  <Form.List name="users">
    {(fields, { add, remove }) => (
      <>
        {fields.map(({ key, name, ...restField }) => (
          <div key={key} className=" d-flex gap-2">
            <Form.Item
             className="w-[10%]"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-[10%]"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-5"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-5"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-5"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-7"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-5"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-6"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
             className="w-5"
              {...restField}
              name={[name, 'first']}
              rules={[{ required: true, message: 'Missing first name' }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <TiMinusOutline onClick={() => remove(name)} />
          </div>
        ))}
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block icon={<TiPlusOutline />}>
         </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
  {/* <div className="mx-auto" > */}
  <Form.Item className="mx-auto"style={{width:"123px"}}>
    <Button type="primary" htmlType="submit">
      Request Quote
    </Button>
  </Form.Item>
  {/* </div> */}
 
</Form>

        </div>
      </div>
    </div>
  );
};

export default PackageList;
