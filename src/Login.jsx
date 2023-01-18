import React from "react";
import { Form, Field } from "react-final-form";

function Login() {
  const onSubmit = () => {};
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
          <p className="text-4xl font-medium text-slate-800">Sign In</p>
          <button className="mt-8 text-sm border-solid border bg-btn-blue text-sm font-light p-2 text-slate-100 rounded w-full">
            Sign in
          </button>
          <div className="flex">
            <div class="flex flex-row items-center justify-center items-center w-72">
              <hr class="w-2/5 h-px my-8 border-0 dark:bg-gray-300 mr-1" />
              <p className="w-full text-xs text-slate-500 font-medium text-center">
                or sign in with your email
              </p>
              <hr class="w-2/5 h-px my-8 border-0 dark:bg-gray-300 ml-1" />
            </div>
          </div>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Email address</label>
                  <Field
                    name="email"
                    component="input"
                    placeholder="Email address"
                    className="text-sm p-2 rounded min-h-[38px]"
                  />
                </div>
                <div className="flex flex-col mt-5">
                  <div className="flex justify-between">
                    <label className="text-sm mb-1">Access key</label>
                    <label className="text-sm mb-1 cursor-pointer text-[#4e89c0]">
                      Forgot access key?
                    </label>
                  </div>
                  <Field
                    name="access key"
                    component="input"
                    placeholder="Enter your key"
                    className="text-sm p-2 rounded min-h-[38px]"
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
          />
        </div>
      </div>

      <hr class="w-full h-px border-0 dark:bg-gray-300 absolute" />
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

export default Login;
