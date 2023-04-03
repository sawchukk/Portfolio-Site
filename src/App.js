//import logo from './logo.svg';
import React from 'react';
import * as THREE from 'three';
import './App.css';
import { Navbar } from './components';
import { Header, About, Proj } from './containers';


function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Proj />
    </div>
  );
}

export default App;

/*
class App extends React.Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    this.mount.appendChild( renderer.domElement );
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    camera.position.z = 5;
    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
        <div ref={ref => (this.mount = ref)} />
    )
  }
}

export default App;*/


/*class App extends React.Component {
  render(){
    return(
      <Header />
    );
  }

}

export default App;*/