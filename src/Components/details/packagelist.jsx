import { Button, Col, Form, Input, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useState } from "react";

const PackageList = () => {
  const [isdisable, setIsdisable] = useState(false);
  return (
    <div
      style={{ minHeight: "70vh", background: "#F8F9FD" }}
      className="my-form py-4"
    >
      <div className="container">
        <Form
          layout="vertical"
          name="dynamic_form_nest_item"
          onFinish={(value) => {
            console.log(value);
          }}
          autoComplete="off"
        >
          <div className="mb-4 ">
            <div
              className="custom-form location-box p-3 "
              style={{
                borderRadius: "20px",
                background: "white",
                border: "2px solid black",
              }}
            >
              <Form.Item name="origin_shipment" label="Origin of Shippment">
                <Select
                  name="from"
                  placeholder="From"
                  className="text-center "
                >
                  <Select.Option key="1" value="Khulna">
                    Khulna
                  </Select.Option>
                  <Select.Option key="2" value="Dhaka">
                    Dhaka
                  </Select.Option>
                  <Select.Option key="3" value="Jessore">
                    Jessore
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="destination_shipment"
                label="Destination of Shippment"
                className="shipoint "
              >
                <Select placeholder="To" name="to">
                  <Select.Option key="1" value="Khulna">
                    Khulna
                  </Select.Option>
                  <Select.Option key="2" value="Dhaka">
                    Dhaka
                  </Select.Option>
                  <Select.Option key="3" value="Jessore">
                    Jessore
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="loading_date"
                label="Date of Loading"
                className=" rounded custom-form-date"
              >
                <Input
                  className="custom-date-picker "
                  type="date"
                  id="valid_till"
                />
              </Form.Item>
            </div>
          </div>
          <p className="fw-bold text-center">Packing List Details</p>
          <div>
            <p
              className="text-start mt-4 fw-bold"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Import Packing List in Bulk!
            </p>

            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  <div style={{ overflowX: isdisable ? "scroll" : "hidden" }}>
                    {fields.map(({ key, name, ...restField }) => (
                      <div key={key} className="text-label my-form">
                        <Row gutter={[8, 16]} align="middle">
                          <Col lg={6} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Cargo Name"
                              className="text-label"
                              {...restField}
                              name={[name, "cargo"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing cargo name",
                                },
                              ]}
                            >
                              <Select
                                defaultValue="raw"
                                style={{ width: "100%" }}
                                options={[
                                  {
                                    value: "raw",
                                    label: "Raw Materials",
                                  },
                                  {
                                    value: "finished",
                                    label: "Finished Goods",
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={5} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Measurement Unit"
                              className=""
                              {...restField}
                              name={[name, "measurement"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing measurement unit",
                                },
                              ]}
                            >
                              <Select
                                defaultValue="feet"
                                style={{ width: "100%" }}
                                options={[
                                  {
                                    value: "feet",
                                    label: "Feet",
                                  },
                                  {
                                    value: "meters",
                                    label: "Meters",
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Length"
                              className=""
                              {...restField}
                              name={[name, "length"]}
                            >
                              <Input type="number" className="" />
                            </Form.Item>
                          </Col>
                          <Col lg={2} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Width"
                              className=""
                              {...restField}
                              name={[name, "width"]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col lg={2} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Height"
                              className=""
                              {...restField}
                              name={[name, "height"]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col lg={5} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Weight Unit"
                              className=""
                              {...restField}
                              name={[name, "weight"]}
                            >
                              <Select
                                defaultValue="kg"
                                style={{ width: "100%" }}
                                options={[
                                  {
                                    value: "kg",
                                    label: "Kilograms",
                                  },
                                  {
                                    value: "lbs",
                                    label: "Pounds",
                                  },
                                ]}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={2} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="CBM"
                              className=""
                              {...restField}
                              name={[name, "cbm"]}
                            >
                              <Input type="number" className="" />
                            </Form.Item>
                          </Col>
                          <Col lg={3} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="WT(MT)"
                              className=""
                              {...restField}
                              name={[name, "wt"]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col lg={2} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="FRT"
                              className=""
                              {...restField}
                              name={[name, "frt"]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col lg={5} md={6} sm={12} xs={12}>
                            <Form.Item
                              label="Suggested Container"
                              className=""
                              {...restField}
                              name={[name, "suggestedContainer"]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col lg={1} md={1} sm={1} xs={1}>
                            <RiDeleteBin6Fill
                              style={{ color: "red" }}
                              onClick={() => remove(name)}
                            />
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add();
                      setIsdisable(true);
                    }}
                    style={{
                      width: "100%",
                      marginTop: "10px",
                    }}
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </>
              )}
            </Form.List>

            <Form.Item className="mx-auto mt-5" style={{ width: "123px" }}>
              <Button type="primary" htmlType="submit">
                Request Quote
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PackageList;
