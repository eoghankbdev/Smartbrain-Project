import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import 'tachyons';


//ImgLinkForm 
//FaceRecognition 
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>
      <ImageLinkForm></ImageLinkForm>
    </div>
  );
}

export default App;
