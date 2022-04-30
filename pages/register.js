import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/");
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>

      <div className="center">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="txt_field">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
              <span></span>
              <label htmlFor="name">Name</label>
            </div>
            <div className="txt_field">
              <input
                type="email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
              <span></span>
              <label htmlFor="exampleInputEmail1">Email address</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="exampleInputPassword1"
                name="password"
                value={password}
                onChange={handleChangeInput}
              />
              <span></span>
              <label htmlFor="exampleInputPassword1">Password</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="exampleInputPassword2"
                name="cf_password"
                value={cf_password}
                onChange={handleChangeInput}
              />
              <span></span>
              <label htmlFor="exampleInputPassword2"> Confirm Password</label>
            </div>

            <button type="submit">Register</button>
            <div className="signin">
              You don't have an account?{" "}
              <Link href="/signin">
                <a>Login</a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
