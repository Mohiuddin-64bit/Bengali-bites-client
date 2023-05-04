import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


const Registration = () => {
  const [error, setError] = useState("");
  const { createUser, googleSign, gitHubSign } =
    useContext(AuthContext);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.name.value;
    console.log(email, password, userName);

    setError("");
    if (password.length < 6) {
      return setError("Password should be more then 6 digits");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    return googleSign()
      .then((result) => {
        const user = result.user;
        console.log(user)
      })
      .catch((error) => setError(error.message));
  };
  const signInWithGitHub = () => {
    return gitHubSign().then(result => {
      const user = result.user;
    })
    .catch(error => {
      setError(error.message)
    })
  }
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-12">Registration Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Your Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Your Password"
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
                  Registration
                </button>
              </div>
              <div>
                <div onClick={signInWithGoogle} className="flex items-center gap-2 cursor-pointer bg-slate-300 rounded p-2">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="../../public/img/google2.png"
                      alt=""
                    />
                  </div>
                  <h4>Google</h4>
                </div>
                <div onClick={signInWithGitHub} className="cursor-pointer flex mt-3 items-center gap-2 bg-slate-300 rounded p-2">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="../../public/img/github.png"
                      alt=""
                    />
                  </div>
                  <h4>GitHub</h4>
                </div>
              </div>
            </form>

            <p className="text-center mb-3">
              <small>
                Already Have an Account?{" "}
                <Link className="text-blue-500 font-bold" to="../login">
                  Click here
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
