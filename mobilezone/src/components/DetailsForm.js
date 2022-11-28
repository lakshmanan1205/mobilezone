import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "../App.css";
// import "./App.css";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
  Box,
} from "@mui/material";
import { ButtonContainer } from "./Button";

import { useForm } from "react-hook-form";
import Title from "./Title";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Validator } from "@mui/x-date-pickers/internals";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { productList } from "./productContext";
import { Link } from "react-router-dom";
import { clientAddress } from "../clientAddress";
const DetailForm = () => {
  const cart = useContext(productList);
  const amount = cart.cartTotal;

  const [value, setValue] = React.useState([null, null]);
  const [deliveryType, setDeliveryType] = useState(null);
  // const [canMove, setCanMove] = useState(false);
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [area, setArea] = useState("");
  const [street, setStreet] = useState("");
  const [plot, setPlot] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(cart.cartTotal);
    setPostalCode(data.postalCode);
    setState(data.state);
    setArea(data.area);
    setStreet(data.street);
    setPlot(data.plotNo);

    return setDeliveryType(data.deliveryType);
  };
  // const [myDate, setMydate] = useState(false);
  // const [endDate, setEndDate] = useState(false);
  console.log(errors);
  // const handleChange = (event) => {
  //   // setName(event.target.value);
  //   console.log(event);
  // };
  function getWeeksAfter(date, amount) {
    return date ? date.add(amount, "week") : undefined;
  }
  if (cart.cartproducts.length > 0) {
    return (
      <>
        <div className="container my-5">
          <div className="row ">
            <div className="col-10 mx-auto">
              <Title name="Details" title="form" />
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*     firstname             */}
                <div id="textField">
                  <TextField
                    id="outlined-basic"
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    {...register("firstName", {
                      required: "First Name is required.",
                      maxLength: {
                        value: 15,
                        message: "Excceds more than 15 character",
                      },
                      minLength: {
                        value: 2,
                        message: "it should be more than 2 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "First Name should be a alphabet",
                      },
                    })}
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                  />
                </div>
                {/*            lastname      */}
                <div id="textField">
                  <TextField
                    id="outline-basic "
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    {...register("lastName", {
                      required: "Lastname is required",
                      maxLength: {
                        value: 15,
                        message: "Excceds more than 15 character",
                      },
                      minLength: {
                        value: 2,
                        message: "it should be more than 2 characters",
                      },
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "Last Name should be a alphabet",
                      },
                    })}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                  />
                </div>
                {/*            PhoneNumber      */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="PhoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    {...register("PhoneNumber", {
                      required: "Phone number is mandatory",
                      minLength: {
                        value: 10,
                        message: "Mobile Number should be 10 numbers",
                      },

                      maxLength: {
                        value: 10,
                        message: "Mobile Number should be 10 numbers",
                      },
                      pattern: {
                        value: /^[-+]?[0-9]+$/,
                        message: "Mobile number should be a number",
                      },
                    })}
                    error={Boolean(errors.PhoneNumber)}
                    helperText={errors.PhoneNumber?.message}
                  />
                </div>
                {/*         Email         */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="Email"
                    label="E-Mail"
                    variant="outlined"
                    fullWidth
                    {...register("Email", {
                      required: "E-mail is mandatory",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Enter valid mail id",
                      },
                    })}
                    error={Boolean(errors.Email)}
                    helperText={errors.Email?.message}
                  />
                </div>
                {/*  plotNo and street*/}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="plotNo"
                    label="plotNo "
                    variant="outlined"
                    fullWidth
                    {...register("plotNo", {
                      required: "plotNo is mandatory",
                    })}
                    error={Boolean(errors.plotNo)}
                    helperText={errors.plotNo?.message}
                  />
                </div>
                {/*             street     */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="street"
                    label="street"
                    variant="outlined"
                    fullWidth
                    {...register("street", {
                      required: "street is mandatory",
                    })}
                    error={Boolean(errors.street)}
                    helperText={errors.street?.message}
                  />
                </div>
                {/*             area     */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="area"
                    label="Area"
                    variant="outlined"
                    fullWidth
                    {...register("area", {
                      required: "area is mandatory",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "area should be a alphabet",
                      },
                    })}
                    error={Boolean(errors.area)}
                    helperText={errors.area?.message}
                  />
                </div>
                {/*            state      */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="state"
                    label="state"
                    variant="outlined"
                    fullWidth
                    {...register("state", {
                      required: "state is mandatory",
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: "state should be a alphabet",
                      },
                    })}
                    error={Boolean(errors.state)}
                    helperText={errors.state?.message}
                  />
                </div>
                {/*            postalCode      */}
                <div id="textField">
                  <TextField
                    id="outline-basic"
                    name="postalCode"
                    label="PostalCode"
                    variant="outlined"
                    fullWidth
                    {...register("postalCode", {
                      required: "postalCode is mandatory",
                      minLength: {
                        value: 6,
                        message: "it should have minimun 6 characters ",
                      },
                      maxLength: {
                        value: 6,
                        message: "Mobile Number should be 6 numbers",
                      },
                    })}
                    error={Boolean(errors.postalCode)}
                    helperText={errors.postalCode?.message}
                  />
                </div>
                <div id="textField">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateRangePicker
                      disablePast
                      required
                      value={value}
                      maxDate={getWeeksAfter(value[0], 4)}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField
                            {...startProps}
                            id="outline-basic"
                            name="startDate"
                            variant="outlined"
                            fullWidth
                            // onChange={(newValue) => {
                            //   setPicker(newValue);
                            //   // setMydate(false);
                            // }}
                            {...register("startDate", {
                              required: "select a start delivery date",
                            })}
                            error={Boolean(errors.startDate)}
                            helperText={errors.startDate?.message}
                          />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField
                            {...endProps}
                            {...register("endDate", {
                              required: "select a end delivery date",
                            })}
                            error={Boolean(errors.endDate)}
                            helperText={errors.endDate?.message}
                          />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider>
                  {/* <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={{ start: "from-Date", end: "End-Date" }}
                  >
                    <DateRangePicker
                      name="address"
                      value={value}
                      // minDate={dayJs()}
                      // minDate={moment()}
                      onChange={(newValue) => {
                        setValue(newValue);
                        // setMydate(false);
                      }}
                      renderInput={(startProps, endProps) => (
                        <React.Fragment>
                          <TextField
                            {...startProps}
                            id="outline-basic"
                            name="startDate"
                            variant="outlined"
                            fullWidth
                            {...register("startDate", {
                              required: "select a start delivery date",
                            })}
                            error={Boolean(errors.startDate)}
                            helperText={errors.startDate?.message}
                          />
                          <Box sx={{ mx: 2 }}> to </Box>
                          <TextField
                            {...endProps}
                            id="outline-basic"
                            name="endDate"
                            variant="outlined"
                            fullWidth
                            {...register("endDate", {
                              required: "select a end delivery date",
                            })}
                            error={Boolean(errors.endDate)}
                            helperText={errors.endDate?.message}
                          />
                        </React.Fragment>
                      )}
                    />
                  </LocalizationProvider> */}
                </div>
                <div id="textField">
                  <FormControl error={Boolean(errors.deliveryType)}>
                    <FormLabel component="legend">
                      {" "}
                      Choose Your deliveryType{" "}
                    </FormLabel>
                    <RadioGroup row aria-label="delivery" name="deliveryType">
                      <FormControlLabel
                        value="OnlinePayment"
                        control={
                          <Radio
                            {...register("deliveryType", {
                              required: "Choose your deliveryType",
                            })}
                          />
                        }
                        label="OnlinePayment"
                      />
                      <FormControlLabel
                        value="Cash On Delivery"
                        control={
                          <Radio
                            {...register("deliveryType", {
                              required: "Choose your deliveryType",
                            })}
                          />
                        }
                        label="Cash On Delivery"
                      />
                    </RadioGroup>
                    <FormHelperText style={{ color: "#d32f2f" }}>
                      {errors.gender?.message}
                    </FormHelperText>
                  </FormControl>
                </div>

                <FormHelperText style={{ color: "#d32f2f" }}>
                  {/* {errors.startDate?.message} */}
                  {errors.tnc?.message}
                </FormHelperText>
                <div className="clearfix"></div>
                <div id="textField"></div>
                <div id="textField">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="btns"
                  >
                    Proceed
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* {deliveryType ? ( */}
        {deliveryType ? (
          <>
            <div className="container">
              <div className="row">
                <div className="col-5 ms-auto">
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AeozmQBoix90YtkUyFgELSTDVuATuqNS7dDpHTExvg4M_Eyuk8peVts8uM2rkkyr3Hcnfkx6bXvFJQ_5",
                    }}
                  >
                    <PayPalButtons
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          application_context: {
                            shipping_preferences: "SET_PROVIDED_ADDRESS", //Just add this and it will take the address
                          },
                          purchase_units: [
                            {
                              amount: {
                                value: cart.cartTotal,
                              },
                              shipping: {
                                address: {
                                  //plot street area state postalCode
                                  address_line_1: plot,
                                  address_line_2: street,
                                  admin_area_2: area,
                                  admin_area_1: state,
                                  postal_code: postalCode,
                                  country_code: "IN",
                                  // recipient_name: "Brian Robinson",
                                  // line1: "4th Floor",
                                  // line2: "Unit #34",
                                  // admin_area_2: 'Unit #34"',
                                  // city: "San Jose",
                                  // state: "TN",
                                  // phone: "12345678",
                                  // postal_code: "600061",
                                  // country_code: "IN",
                                },
                              },
                            },
                          ],
                          // intent: "CAPTURE",
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                          const name = details.payer.name.given_name;
                          alert(`Transaction completed by ${name}`);
                          cart.clearCart();
                          console.log(cart.clientAddress);
                          // setCanMove(true);
                        });
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        <Title name="payment" title="success" />
      </>
    );
  }
};

export default DetailForm;
