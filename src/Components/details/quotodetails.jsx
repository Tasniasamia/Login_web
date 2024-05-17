import { DatePicker, Dropdown, Input } from "antd";
import { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowLeftRightLine } from "react-icons/ri";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const QuotoDetails = () => {
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
            Packing List Details
          </p>
          <div className="row d-flex justify-content-between">
            <div
              className="col-md-3 col-12   p-2"
              style={{ borderRadius: "5px", border: "2px solid black" }}
            >
              <div style={{ fontSize: "12px" }} className="fw-bolder">
                <div
                  className=" text-decoration-none d-flex flex-column gap-2"
                  style={{ listStyle: "none", marginLeft: "0px" }}
                >
                  <span className="fw-bolder">Cargo Name - New Materails</span>
                  <span className="fw-bolder">Measurement Unit - Feet</span>
                  <span className="fw-bolder">Length- {`3'`}</span>
                  <span className="fw-bolder">Weight- {`2`}</span>
                  <span className="fw-bolder">Height- {`6'`}</span>
                  <span className="fw-bolder">Weight Unit - {`KG`}</span>
                  <span className="fw-bolder">CRM -</span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-12   p-2"
              style={{ borderRadius: "5px", border: "2px solid black" }}
            >
              <div style={{ fontSize: "12px" }} className="fw-bolder">
                <div
                  className=" text-decoration-none d-flex flex-column gap-2"
                  style={{ listStyle: "none", marginLeft: "0px" }}
                >
                  <span className="fw-bolder">Cargo Name - New Materails</span>
                  <span className="fw-bolder">Measurement Unit - Feet</span>
                  <span className="fw-bolder">Length- {`3'`}</span>
                  <span className="fw-bolder">Weight- {`2`}</span>
                  <span className="fw-bolder">Height- {`6'`}</span>
                  <span className="fw-bolder">Weight Unit - {`KG`}</span>
                  <span className="fw-bolder">CRM -</span>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-12   p-2"
              style={{ borderRadius: "5px", border: "2px solid black" }}
            >
              <div style={{ fontSize: "12px" }} className="fw-bolder">
                <div
                  className=" text-decoration-none d-flex flex-column gap-2"
                  style={{ listStyle: "none", marginLeft: "0px" }}
                >
                  <span className="fw-bolder">Cargo Name - New Materails</span>
                  <span className="fw-bolder">Measurement Unit - Feet</span>
                  <span className="fw-bolder">Length- {`3'`}</span>
                  <span className="fw-bolder">Weight- {`2`}</span>
                  <span className="fw-bolder">Height- {`6'`}</span>
                  <span className="fw-bolder">Weight Unit - {`KG`}</span>
                  <span className="fw-bolder">CRM -</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotoDetails;
