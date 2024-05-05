import { Form, Input } from "antd";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

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
        <div className="col-md-5 col-12 d-flex flex-column justify-content-center p-4">
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
                  label="Country"
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
                  name="number"
                  label="PHONE NUMBER"
                  className="pb-2 fw-bold col w-full"
                  style={{
                    color: "#000c37",
                    fontSize: "10px",
                    lineHeight: "1.2",
                  }}
                >
                  {/* <PhoneInput
                      style={{
                        paddingBottom: "12.5px",
                        paddingTop: "12.5px",
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        borderRadius:"6px",
                        width:"100%",
                        border:"1px solid #d9d9d9",
                      }}
                    value={value}
                    defaultCountry="US"
                    international
                    onChange={setValue}
                  /> */}
                  <PhoneInput
                    style={{
                      paddingBottom: "12.5px",
                      paddingTop: "12.5px",
                    //   paddingLeft: "16px",
                    //   paddingRight: "16px",
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
              className="pb-2 fw-bold col"
              style={{
                color: "#000c37",
                fontSize: "10px",
                lineHeight: "1.2",
              }}
            >
              By creating an account, you agree to our Terms & Conditions
            </p>
            {/* <Form.Item
              name="fastname"
              label="FIRST NAME"
              className="pb-2 fw-bold"
              style={{ color: "#000c37", fontSize: "10px", lineHeight: "1.2" }}
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
            <Form.Item
              name="lastname"
              label="LASTNAME"
              className="pb-2  fw-bold"
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
            </Form.Item> */}

            <Form.Item>
              <button htmlType="submit" className="submit w-full fw-bold">
                Create account
              </button>
            </Form.Item>
          </Form>
          <p className="text-center" style={{ color: "#6e7e92" }}>
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
            className="text-center py-2 fw-normal"
            style={{ fontSize: "14px", lineHeight: "1.57" }}
          >
            Don’t have an account yet?{" "}
            <span className="text-decoration-underline">Sign up</span>
          </p>
        </div>
        <div className="col-md-7 col-12 h-full d-md-block d-none">
          <img
            src="/banner.png"
            className="img-fluid"
            alt="image"
            style={{ borderRadius: "10px", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
