import "./App.css";
import { Button, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { Value } from "sass";

function App() {
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
        className="container1 bg-white p-4 row  shadow-custom "
        style={{ borderRadius: "10px", height: "745px" }}
      >
        <div className="col-md-5 col-12 d-flex flex-column justify-content-center">
          <h4
            className="text-lg font-weight-bold pb-2"
            style={{ color: "#000c37" }}
          >
            Welcome!
          </h4>
          <p
            className="text-muted font-size-14 font-weight-normal"
            style={{ lineHeight: "1.5rem" }}
          >
            We are glad to see you
          </p>
          <Form
            layout="vertical"
            onFinish={(value) => {
              console.log(value);
            }}
          >
            <Form.Item
              name="email"
              label="LOGIN OR EMAIL"
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
              name="password"
              label="PASSWORD"
              className="pb-2 relative fw-bold"
              style={{
                color: "#000c37",
                fontSize: "10px",
                lineHeight: "1.2",
              }}
            >
              <span
                className="text-decoration-underline text-uppercase fw-normal absolute "
                style={{ fontSize: "10px" }}
              >
                Forget Password?
              </span>
              <Input.Password
                style={{
                  paddingBottom: "12.5px",
                  paddingTop: "12.5px",
                  paddingLeft: "16px",
                  paddingRight: "16px",
                }}
              />
            </Form.Item>

            <Form.Item>
              <button htmlType="submit" className="submit w-full ">
                Submit
              </button>
            </Form.Item>
          </Form>
          <p className="text-center">Or continue with</p>
          <div className="d-flex justify-content-center gap-2">
            <span className="p-11 btn flex gap-2 align-items-center">
              <FcGoogle /> Google
            </span>
            <span className="p-11 btn flex gap-2 align-items-center">
              <IoLogoFacebook style={{ color: "#08f" }} /> Facebook
            </span>
          </div>
          <p
            className="text-center py-2 fw-normal"
            style={{ fontSize: "14px", lineHeight: "1.57" }}
          >
            Don’t have an account yet?{" "}
            <span className="text-decoration-underline">Sign up</span>
          </p>
        </div>
        <div className="col-md-7 col-12 h-full">
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

export default App;
