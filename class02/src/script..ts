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
// const myMesh = new THREE.Mesh(myCube, myMaterial);

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
  width: 900,
  height: 700,
};

const myCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
//Camera
myCamera.position.x = -2;
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

cube3.position.x = 1;
cube1.position.x = 2;
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

renderer.render(myScene, myCamera);
