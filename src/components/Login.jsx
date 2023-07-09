import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const { signIn, googleSign, gitHubSign } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  console.log(from)

  const handleForm = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    setError("");
    if (password.length < 6) {
      return setError("Password should be more then 6 digits");
    }
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        // navigate("/");
      })
      .catch((error) => setError(error.message));
  };

  const signInWithGoogle = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };
  const signInWithGitHub = () => {
    return gitHubSign()
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold my-12 px-52">Login Now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleForm} className="card-body">
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
                {show ? (
                  <div>
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      required
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                )}
                <label className="label">
                  <a
                    onClick={() => setShow(!show)}
                    className="label-text-alt link link-hover font-bold "
                  >
                    {show ? (
                      <span>Hide Password</span>
                    ) : (
                      <span>Show Password</span>
                    )}
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
              <div>
                <div
                  onClick={signInWithGoogle}
                  className="flex items-center gap-2 cursor-pointer bg-slate-300 rounded p-2"
                >
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="img/google2.png"
                      alt=""
                    />
                  </div>
                  <h4>Google</h4>
                </div>
                <div
                  onClick={signInWithGitHub}
                  className="cursor-pointer flex mt-3 items-center gap-2 bg-slate-300 rounded p-2"
                >
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src="img/github.png"
                      alt=""
                    />
                  </div>
                  <h4>GitHub</h4>
                </div>
              </div>
            </form>
            <p className="text-center mb-3">
              <span className="text-red-500 font-bold text-lg"><small>{error}</small></span><br />
              <small>
                Create an Account?{" "}
                <Link className="text-blue-500 font-bold" to="../registration">
                  Click Here
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
