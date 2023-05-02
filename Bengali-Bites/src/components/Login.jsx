import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-12 px-52">Login Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
              <div>
                <div className="flex items-center gap-2 cursor-pointer bg-slate-300 rounded p-2">
                  <div>
                    <img className="w-10 h-10 rounded-full" src="../../public/img/google2.png" alt="" />
                  </div>
                  <h4 >Google</h4>
                </div>
                <div className="cursor-pointer flex mt-3 items-center gap-2 bg-slate-300 rounded p-2">
                  <div>
                    <img className="w-10 h-10 rounded-full" src="../../public/img/github.png" alt="" />
                  </div>
                  <h4 >GitHub</h4>
                </div>
              </div>
            </form>
            <p className="text-center mb-3"><small>Create an Account? <Link className="text-blue-500 font-bold" to='../registration'>Click Here</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
