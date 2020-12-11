import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
// import Clarifai from "clarifai";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
// import Rank from './components/Rank/Rank'
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Rank from "./components/Rank/Rank";

// const API_KEY = process.env.REACT_APP_FACE_RECOGNITION_API_KEY;

// const app = new Clarifai.App({
//   apiKey: `${API_KEY}`,
// });

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [faceBox, setFaceBox] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  // const [dataBaseUsers, setDataBaseUsers] = useState([]);
  const loadUserInitial = {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  };
  const [loadUser, setLoadUser] = useState(loadUserInitial);
  console.log(loadUser);

  // useEffect( () => {
  //   fetch('https://localhost:3001/')
  //   .then(response => response.json())
  //   .then(data => setDataBaseUsers(data))
  // }, [])

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const submitImg = () => {
    setImageUrl(input);
    fetch("http://localhost:3001/imageurl", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    })
      .then(response => response.json())
      
      .then((response) => {
        if (response) {
          fetch("http://localhost:3001/image", {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: loadUser.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setLoadUser({ ...loadUser, entries: count });
            })
            .catch((err) => console.log(err));
        }
        const faceBoxInImg =
          response.outputs[0].data.regions[0].region_info.bounding_box;
        calculateFaceBox(faceBoxInImg);
      })
      .catch((err) => console.log(err));
  };

  const calculateFaceBox = (imgBoxData) => {
    const img = document.getElementById("img");
    const width = Number(img.width);
    const height = Number(img.height);
    setFaceBox({
      topRow: height * imgBoxData.top_row,
      bottomRow: height - height * imgBoxData.bottom_row,
      leftCol: width * imgBoxData.left_col,
      rightCol: width - width * imgBoxData.right_col,
    });
  };

  const hasSignedIn = () => {
    setIsSignedIn(true);
  };

  const hasSignedOut = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="tc">
      <Navigation
        isSignedIn={isSignedIn}
        hasSignedOut={hasSignedOut}
        loadUserInitial={loadUserInitial}
        setLoadUser={setLoadUser}
        setImageUrl={setImageUrl}
      />
      <Switch>
        <Route exact path="/faceRecognition2020">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn hasSignedIn={hasSignedIn} setLoadUser={setLoadUser} />
        </Route>
        <Route path="/register">
          <Register hasSignedIn={hasSignedIn} setLoadUser={setLoadUser} />
        </Route>
        <Route path="/app">
          <Logo />
          <Rank name={loadUser.name} entries={loadUser.entries} />
          <ImageLinkForm inputChange={inputChange} submitImg={submitImg} />
          <FaceRecognition faceBox={faceBox} imgSrc={imageUrl} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
