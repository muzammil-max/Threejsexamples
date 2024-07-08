import * as THREE from "three";
import { log } from "three/examples/jsm/nodes/Nodes.js";
import gsap from "gsap";
console.log("OK");

console.log(gsap);

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


//translating (Positions kay saath cher khani!)
// myMesh.position.x = 1;
// myMesh.position.y = 1;
// myMesh.position.z = 1;

// //scaling ( scale the meshes)

// myMesh.scale.x = 3;
// myMesh.scale.y = 0.5;
// myMesh.scale.z = 4;

// //alternatively
// myMesh.scale.set(1, 1, 6);

// //rotation
// myMesh.rotation.reorder("YXZ");
// myMesh.rotation.x = Math.PI * 0.25; //half rotation completed (pie)
// myMesh.rotation.y = Math.PI * 0.25; //half rotaion complete
// myMesh.rotation.z = Math.PI;
// //putting object in scene

// myScene.add(myMesh);
// myMesh.position.normalize() uncommenting this will reset the position of values of mesh to 1.
// myMesh.position.set(-3, 1, 1); //here we can update the position of mesh at once!
//Sizes

const sizes = {
  width: 10000,
  height: 9000,
};

const myCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Camera
myCamera.position.x = 4;
myCamera.position.z = 10;
myCamera.position.y = 3;
myScene.add(myCamera);
// myCamera.lookAt(myMesh.position);
// myCamera.lookAt(new THREE.Vector3(5, 4, 3));

// console.log(myMesh.position.distanceTo(myCamera.position)); // This play the distance b/w camera and the cube

//Groups

const group = new THREE.Group();
myScene.add(group);

//Meshes making for group

const cube1: any = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);
group.add(cube1);
const cube2: any = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "green" })
);
group.add(cube2);

const cube3: any = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "blue" })
);
group.add(cube3);

cube3.position.x = 2;
cube1.position.x = 1;
group.position.x = 5;

group.rotation.y = 2.6;
group.rotation.x = 4;
cube1.rotation.y = Math.PI * 1;
cube1.rotation.x = 6;
//renderer

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

//Axes Helper

const axesHelper = new THREE.AxesHelper(4.5);
myScene.add(axesHelper);

//setting size of renderer
renderer.setSize(1000, 1000);

// adding things on my renderer
//clock
const clock = new THREE.Clock();
// console.log(clock);
//time
let time = Date.now();


//gsap use
gsap.to(group.position, { duration: 2, delay: 1, y: -3 });
gsap.to(group.rotation, { duration: 2, delay: 2, y: -3 });
gsap.to(group.position, { duration: 2, delay: 4, y: 2 });
gsap.to(group.position, { duration: 4, delay: 6, z : 3 });
gsap.to(group.position, { duration: 2, delay: 8, x: -3 });
gsap.to(group.position, { duration: 6, delay: 10, x: 5 });
gsap.to(group.scale, { duration: 4, delay: 11, x: 2 });

//Animation
const tick = () => {
  const elapsetime: any = clock.getElapsedTime();
  
  //Time (Not efficient)
  // console.log(elapsetime);
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(deltaTime);

  //transformations
  // myCamera.position.y = Math.sin(elapsetime);
  // myCamera.position.x = Math.cos(elapsetime);
  // myCamera.lookAt(group.position);

  // cube1.rotation.x += -0.03;
  // cube2.rotation.x += 0.09;
  // cube3.rotation.x += -0.1;

  // console.log("hello world");
  //Renderer
  renderer.render(myScene, myCamera);
  window.requestAnimationFrame(tick);
};
tick();
