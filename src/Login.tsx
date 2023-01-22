import React from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import { blackA, whiteA } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import * as Label from "@radix-ui/react-label";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${import.meta.env.VITE_BASE_API}/login`, {
        email: data.email,
        key: data.accessKey,
      })
      .then((res) => {
        window.localStorage.setItem("userId", res.data.data);
        navigate("/dashboard");
      })
      .catch(console.log);
  };
  return (
    <div className="login-container relative">
      <header className="flex items-center justify-between py-4 min-h-[72px]">
        <div className="text md:text-4xl title-scrible text-4xl italic text-center font-bold decoration-indigo-500">
          Scrible
        </div>
        <div className="flex items-center">
          <p className="text-sm text-slate-500 cursor-pointer">
            New to Scrible?
          </p>
          <button className="text-sm border-solid border text-sm border-slate-300 ml-4 py-1.5 px-2 text-slate-600 shadow-sm rounded">
            Create an account
          </button>
        </div>
      </header>
      <div className="h-[calc(100vh_-_144px)] flex items-center justify-center">
        <div className="flex flex-col items-center w-72">
          <Formik
            onSubmit={onSubmit}
            initialValues={{
              email: "",
              accessKey: "",
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              isSubmitting,
              handleChange,
            }) => (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col">
                  <LabelRoot htmlFor="email">Email</LabelRoot>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address..."
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <LabelRoot htmlFor="accessKey">Access key</LabelRoot>
                  <Input
                    type="password"
                    id="accessKey"
                    name="accessKey"
                    placeholder="Enter your access key..."
                    onChange={handleChange}
                    value={values.accessKey}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 text-sm border-solid border bg-[#0eb053] text-sm font-light p-2 text-slate-100 rounded w-full"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <hr className="w-full h-px border-0 dark:bg-gray-300 absolute" />
      <footer className="flex items-center justify-between py-4 min-h-[72px]">
        <p className="text-xs text-neutral-600">© 2023 Scrible</p>
        <div className="flex items-center">
          <p className="text-sm text-[#4e89c0] cursor-pointer mr-6">Terms</p>
          <p className="text-sm text-[#4e89c0] cursor-pointer">Privacy</p>
        </div>
      </footer>
    </div>
  );
}

const LabelRoot = styled(Label.Root, {
  fontSize: 12,
  fontWeight: 500,
  marginBottom: 4,
  color: "rgba(55, 53, 47, 0.65)",
});

const Input = styled("input", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 6,
  padding: "3px 10px",
  height: 30,
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: "rgba(242, 241, 238, 0.6)",
  boxShadow: `rgb(15 15 15 / 10%) 0px 0px 0px 1px inset`,
  "&:focus": {
    boxShadow: `rgb(35 131 226 / 57%) 0px 0px 0px 1px inset, rgb(35 131 226 / 35%) 0px 0px 0px 2px !important`,
  },
  "&::placeholder": {
    color: "#ababa8",
  },
});

export default Login;
