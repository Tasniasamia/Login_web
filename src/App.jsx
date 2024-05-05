import "./App.css";
import { Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";

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
        <div className="col-md-5 col-12 d-flex flex-column justify-content-center p-4">
          <h4
            className="text-lg fw-bold pb-2"
            style={{ color: "#000c37" }}
          >
            Welcome!
          </h4>
          <p
            className="text-muted font-size-14 font-weight-normal"
            style={{ lineHeight: "1.5rem" ,color:"rgba(33, 37, 41, 0.75)"}}
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
                style={{ fontSize: "10px",color:"#000c37" }}
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
                Sign in
              </button>
            </Form.Item>
          </Form>
          <p className="text-center"style={{color:"#6e7e92"}}>Or continue with</p>
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

export default App;
