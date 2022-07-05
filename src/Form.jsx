import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";

export default function Form() {


  const validations = yup.object().shape({
    name: yup.string().required("Name Required"),
    email: yup.string().required("Email Required").email("Invalid Email"),
    mobile: yup
      .string()
      .required("Mobile Number Required")
      .min(10, "Not valid Phone Number")
      .max(10, "Not Valid Phone Number"),
    country: yup.string().required("Country Required"),
    city: yup.string().required("City Required"),
    state: yup.string().required("State Required"),
    msg: yup.string().required("Message Required"),
  });

  const myForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      country: "",
      city: "",
      state: "",
      msg: "",
    },
    validationSchema: validations,

    onSubmit: (values) => {
      console.log("Entered Values:", values);
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="global-container main">
        <div className="card login-form car">
          <div className="card-body">
            <h3 className="card-title text-center">Enter Details</h3>

            <div className="card-text">
              <form onSubmit={myForm.handleSubmit} className="form m-1">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter Name"
                  {...myForm.getFieldProps('name')}
                />
                {myForm.touched.name && myForm.errors.name ? (
                  <div className="errors">{myForm.errors.name}</div>
                ) : null}
                <br />
                <input
                  type="email"
                  name="email"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter Mail"
                  {...myForm.getFieldProps('email')}
                />
                {myForm.touched.email && myForm.errors.email ? (
                  <div className="errors">{myForm.errors.email}</div>
                ) : null}
                <br />
                <input
                  type="number"
                  name="mobile"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter Mobile Number"
                  {...myForm.getFieldProps('mobile')}
                />
                {myForm.touched.mobile && myForm.errors.mobile ? (
                  <div className="errors">{myForm.errors.mobile}</div>
                ) : null}
                <br />
                <input
                  type="text"
                  name="country"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter Country"
                  {...myForm.getFieldProps('country')}
                />
                {myForm.touched.country && myForm.errors.country ? (
                  <div className="errors">{myForm.errors.country}</div>
                ) : null}
                <br />
                <input
                  type="text"
                  name="city"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter City"
                  {...myForm.getFieldProps('city')}
                />
                {myForm.touched.city && myForm.errors.city ? (
                  <div className="errors">{myForm.errors.city}</div>
                ) : null}
                <br />
                <input
                  type="text"
                  name="state"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter State"
                  {...myForm.getFieldProps('state')}
                />
                {myForm.touched.state && myForm.errors.state ? (
                  <div className="errors">{myForm.errors.state}</div>
                ) : null}
                <br />
                <input
                  type="text"
                  name="msg"
                  className="form-control form-control-sm mt-3 col-lg-6 col-md-6 col-12"
                  placeholder="Enter Message"
                  {...myForm.getFieldProps('msg')}
                />
                {myForm.touched.msg && myForm.errors.msg ? (
                  <div className="errors">{myForm.errors.msg}</div>
                ) : null}
                <br />
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
