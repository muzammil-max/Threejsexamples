import * as THREE from "three";
console.log("OK");

//canvas

const canvas: any = document.querySelector("canvas.webgl");
//if i console.log it fetches the canvas tag woth webgl property to me
console.log(canvas); ///output: <canvas class="webgl"> </canvas>

//create scene
const myScene = new THREE.Scene();

//create a cube
const myCube = new THREE.BoxGeometry(1, 1, 1);

//defining the material to cube

const myMaterial = new THREE.MeshBasicMaterial({ color: "orange" });

//creating mesh
const myMesh = new THREE.Mesh(myCube, myMaterial);

//putting object in scene

myScene.add(myMesh);

//Sizes

const sizes = {
  width: 900,
  height: 700,
};

//Camera
const myCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
myScene.add(myCamera);
myCamera.position.z = 8;
myCamera.position.y = 3;
myCamera.position.x = 6;

//renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

//setting size of renderer
renderer.setSize(1000, 1000);

// adding things on my renderer

renderer.render(myScene, myCamera);
