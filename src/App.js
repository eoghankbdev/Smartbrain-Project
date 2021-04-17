import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500,
      }
    }
  }
}

function App() {
  constructor()
  super();
  this.state = {
    input: '',
  }

  onInputChange = (event) => {
    console.log(event);
  }

  return (
    <div className="App" >
      <Particles className="particles"
        params={particlesOptions}
      />
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>
      <ImageLinkForm
        onInputChange={this.onInputChange}>
      </ImageLinkForm>
    </div>
  );
}
export default App;
