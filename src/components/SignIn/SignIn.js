import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SignIn({ hasSignedIn, setLoadUser }) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  
  const history = useHistory();
  const loadingAppPage = () => {
    let path = "/app";
    history.push(path);
  };

  const matchUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then(response => response.json())
      .then(data => {
        
        if (data.id) {
          loadingAppPage();
          hasSignedIn();
          setLoadUser({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            entries: data.entries,
            joined: data.joined,
        });

        }
      });
    console.log(signInEmail, signInPassword);
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => setSignInEmail(e.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => setSignInPassword(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={matchUser}
            />
          </div>
        </form>
      </main>
    </article>
  );
}

export default SignIn;
