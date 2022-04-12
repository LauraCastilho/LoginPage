import { useState } from 'react';
import './style.css';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-tittle">Welcome</span>

            <div className="wrap-input">
              <input className={email !== "" ? 'has-val login-form-input' : 'login-form-input'} type="email" value={email} onChange = {e => setEmail(e.target.value)}></input>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className={password !== "" ? 'has-val login-form-input' : 'login-form-input'} type="password" value={password} onChange = {e => setPassword(e.target.value)}></input>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="container-login-create-account">
              <span className="txt1">Don't have an account yet?</span>
              <a className="txt2" href="#">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
