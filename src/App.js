import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Clarifai from "clarifai";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
// import Rank from './components/Rank/Rank'
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const API_KEY = process.env.REACT_APP_FACE_RECOGNITION_API_KEY;

const app = new Clarifai.App({
  apiKey: `${API_KEY}`,
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [faceBox, setFaceBox] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  console.log(isSignedIn)
  
  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const submitImg = () => {
    app.models
      .initModel({ id: Clarifai.FACE_DETECT_MODEL })
      .then((faceDetectModel) => {
        return faceDetectModel.predict(input);
      })
      .then((response) => {
        const faceBoxInImg =
          response.outputs[0].data.regions[0].region_info.bounding_box;
        calculateFaceBox(faceBoxInImg);
      });

    setImageUrl(input);
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

  const HasSignedIn = () => {
    setIsSignedIn(true)
  }

  const HasSignedOut = () => {
    setIsSignedIn(false)
  }

  return (
    <div className="tc">
      <Navigation isSignedIn={isSignedIn} HasSignedOut={HasSignedOut} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-in">
          <SignIn HasSignedIn={HasSignedIn} />
        </Route>
        <Route path="/register">
          <Register HasSignedIn={HasSignedIn} />
        </Route>
        <Route path="/app">
          <Logo />
          {/* <Rank /> */}
          <ImageLinkForm inputChange={inputChange} submitImg={submitImg} />
          <FaceRecognition faceBox={faceBox} imgSrc={imageUrl} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
