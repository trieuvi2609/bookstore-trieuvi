import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "features/session/sessionSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "react-google-login";
export default function Register() {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const onChangeUserName = ({ target }) => {
    const newUserName = target.value;
    setUserName(newUserName);
  }
  const onChangePassword = ({ target }) => {
    const newPassword = target.value;
    setPassword(newPassword);
  }
  const onChangeName = ({ target }) => {
    const newName = target.value;
    setName(newName);
  }
  const createNewAccount= (userName, password) =>{

  }
  const createAccount = async () => {
    console.log(userName);
    console.log(password);
    createNewAccount(userName, password);
    dispatch(signUp({ username: name, name: name }));
    history.push("/homepage")
    // try {
    //   const signUpInfo = { email: email, password: password };
    //   const resp = await axios.post('https://reqres.in/api/register', signUpInfo);
    //   if (resp.status !== 404) {
        
    //     console.log(resp.data.token);
    //     console.log(resp.data.id);
        
    //   }
    // } catch (err) {
    //   // Handle Error Here
    //   console.error(err);
    // }
  }
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const userObj =response.profileObj;
    const googleName = userObj.name;
    const googleEmail = userObj.email;
    const googlePassword = "abcd";
    const imageUrl = userObj.imageUrl;
    createNewAccount(googleEmail, googlePassword);
    dispatch(signUp({name:googleName, username: googleEmail, email: googleEmail, imageUrl: imageUrl }));
    history.push("/homepage")
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                <GoogleLogin
                    render={renderProps => (
                      <button onClick={renderProps.onClick} disabled={renderProps.disabled}
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
    )}
                    clientId="38195780971-2khqdc32dvhtqrds4432s1e2j6b1mtob.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      value={name}
                      onChange={onChangeName}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      UserName
                    </label>
                    <input
                      type="userName"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="UserName"
                      value={userName}
                      onChange={onChangeUserName}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        value={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    {(!checked) ? <button
                      className="bg-gray-400 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button> : <button onClick={createAccount}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
