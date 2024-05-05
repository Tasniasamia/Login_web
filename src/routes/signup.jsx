import { Form, Input, Select } from "antd";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function SignUp() {
  const validatePassword = (_, value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+|~\-={}\[\]:";'<>?,./\\]/;

    if (
      !uppercaseRegex.test(value) ||
      !lowercaseRegex.test(value) ||
      !digitRegex.test(value) ||
      !specialCharRegex.test(value)
    ) {
      return Promise.reject(
        "Password must include at least one uppercase and lowercase character, one digit, and one special symbol"
      );
    }

    return Promise.resolve();
  };
  const [value, setValue] = useState();
  const { Option } = Select;

  return (
    <div
      className=" "
      style={{
        backgroundColor: "red",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <div
        className=" bg-white p-4 row  shadow-custom "
        style={{ borderRadius: "10px" }}
      >
        <div className="col-lg-5 col-12 d-flex flex-column justify-content-center p-4">
          <h4 className="text-lg fw-bold pb-2" style={{ color: "#000c37" }}>
            Sign up
          </h4>
          <p
            className="text-muted font-size-14 font-weight-normal"
            style={{ lineHeight: "1.5rem", color: "rgba(33, 37, 41, 0.75)" }}
          >
            Make your booking experience excellent{" "}
          </p>
          <Form
            layout="vertical"
            onFinish={(value) => {
              console.log(value);
            }}
          >
            <div className="row row-cols-md-2 row-cols-1 g-2">
              <div>
                <Form.Item
                  name="fastname"
                  label="FIRST NAME"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <Input
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="lastname"
                  label="LAST NAME"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <Input
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row row-cols-md-1 row-cols-1 ">
              <div>
                <Form.Item
                  name="email"
                  label="EMAIL"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <Input
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 g-2">
              <div>
                <Form.Item
                  name="cname"
                  label="COMPANY NAME"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <Input
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  name="country"
                  label="COUNTRY"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                  rules={[
                    {
                      required: true,
                      message: "please select your country",
                    },
                  ]}
                >
                  <Select
                    style={{
                      height: "48px",
                    }}
                  >
                    {" "}
                    <Option value="1">Bangladesh</Option>
                    <Option value="2">India</Option>
                    <Option value="3">Pakistan</Option>
                    <Option value="4">Canada</Option>
                    <Option value="5">Soudi</Option>
                    <Option value="6">Denmark</Option>
                    <Option value="7">USA</Option>
                    <Option value="8">UK</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="row row-cols-md-1 row-cols-1 ">
              <div>
                <Form.Item
                  name="number"
                  label="PHONE NUMBER"
                  className="pb-2 fw-bold col w-full"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  <PhoneInput
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      borderRadius: "6px",
                      width: "100%",
                      border: "1px solid #d9d9d9",
                    }}
                    country={"us"}
                    value={value}
                    onChange={setValue}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="row row-cols-md-1 row-cols-1 ">
              <div>
                <Form.Item
                  name="password"
                  label="PASSWORD"
                  className="pb-2 fw-bold col"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                  rules={[
                    { required: true, message: "Please input your password!" },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters long!",
                    },
                    { validator: validatePassword },
                  ]}
                >
                  <Input.Password
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                    }}
                  />
                </Form.Item>
              </div>
            </div>

            <p
              className="fw-normal"
              style={{ color: "#6e7e92", fontSize: "14px" }}
            >
              By creating an account, you agree to our Terms & Conditions
            </p>
            <Form.Item>
              <button htmlType="submit" className="submit w-full fw-bold">
                Create account
              </button>
            </Form.Item>
          </Form>
          <p
            className="text-center fw-normal"
            style={{ color: "#6e7e92", fontSize: "14px" }}
          >
            Or continue with
          </p>
          <div className="row row-cols-2 g-3">
            <div>
              <span className=" col btn1 d-flex gap-2 align-items-center justify-content-center col">
                <FcGoogle size={24} /> Google
              </span>
            </div>
            <div>
              <span className=" col btn1 d-flex gap-2 align-items-center justify-content-center col">
                <IoLogoFacebook style={{ color: "#08f" }} size={24} /> Facebook
              </span>
            </div>
          </div>
          <p
            className="text-center  fw-normal pt-2"
            style={{ fontSize: "14px" }}
          >
            Back to <span className="text-decoration-underline">Sign in</span>
          </p>
          <p className="text-center  fw-normal" style={{ fontSize: "14px" }}>
            Back to Are you interested in{" "}
            <span className="text-decoration-underline">Vendor account?</span>
          </p>
        </div>
        <div className="col-lg-7 col-12 h-full d-md-block right_side">
          <div
            className="d-flex flex-row flex-md-nowrap flex-wrap  justify-content-evenly align-items-center  gap-4"
            style={{ paddingBottom: "215px" }}
          >
            <img
              src="https://www.searates.com/design/images/apps/auth/icons/searates.svg"
              className="mh-20 w-auto"
              alt="brand"
            />
            <img
              src="https://www.searates.com/design/images/apps/auth/icons/landrates.svg"
              className="h-20 w-auto"
              alt="brand"
            />
            <img
              src="https://www.searates.com/design/images/apps/auth/icons/airrates.svg"
              className="h-20 w-auto"
              alt="brand"
            />
            <img
              src="https://www.searates.com/design/images/apps/auth/icons/df-alliance.svg"
              className="h-20 w-auto"
              alt="brand"
            />
            <img
              src="https://www.searates.com/design/images/apps/auth/icons/dp-world.svg"
              className="h-20 w-auto"
              alt="brand"
            />
          </div>
          <div style={{ paddingLeft: "48px" }}>
            <h1 style={{ color: "#000c37" }} className="fw-bolder text-xl ">
              Find the best
            </h1>
            <h1 style={{ color: "#000c37" }} className="fw-bolder text-xl">
              freight quote
            </h1>
            <p
              className="font-medium"
              style={{
                color: "#000c37",
                fontSize: "18px",
                lineHeight: "1.55",
                paddingBottom: "115px",
              }}
            >
              Welcome to SeaRates! To get started, please fill out the form to
              create your account and begin using our services.
            </p>
          </div>
          <div className="testimonial">
            <p className="pb-4 font-medium2">
              Efficiency is the key in logistics. By leveraging technology and
              streamlining processes, we can provide top service while
              maximizing productivity and profitability.
            </p>
            <div className="d-flex align-items-center gap-2">
              <img
                src="https://www.searates.com/design/images/apps/auth/COO-searates.png"
                className="profile rounded-circle"
                alt="profile"
              />
              <div className="text-white d-flex flex-column">
                <span className="fw-bold ">Stefan Rogovskiy</span>
                <span className="fw-normal">COO of SeaRates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
