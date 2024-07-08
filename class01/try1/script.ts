import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

console.log("OK");

const canvas: any = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

const sphere: any = new THREE.SphereGeometry(6); //orange

const sphere2: any = new THREE.SphereGeometry(10); //red

const sphere3: any = new THREE.SphereGeometry(6); //green

const sphere4: any = new THREE.SphereGeometry(5); //blue

const spheremat = new THREE.MeshBasicMaterial({ color: "red" });

const spheremat2 = new THREE.MeshBasicMaterial({ color: "green" });

const spheremat3 = new THREE.MeshBasicMaterial({ color: "blue" });

const cylinder: any = new THREE.CylinderGeometry(1, 1, 99);

const conemat: any = new THREE.MeshBasicMaterial({ color: "pink" });

const material = new THREE.MeshBasicMaterial({ color: "orange" });

const mesh2 = new THREE.Mesh(cylinder, conemat);

const mesh = new THREE.Mesh(sphere, material);

const mesh3 = new THREE.Mesh(sphere2, spheremat);

const mesh4 = new THREE.Mesh(sphere3, spheremat2);

const mesh5 = new THREE.Mesh(sphere4, spheremat3);

const size = {
  width: 1500,

  height: 800,
};
mesh2.position.x = 0;

mesh2.position.y = 1;

mesh2.position.z = -1;

mesh3.position.y = 18;

mesh4.position.y = -16;

mesh5.position.y = -32;

scene.add(mesh);

scene.add(mesh2);

scene.add(mesh3);

scene.add(mesh4);

scene.add(mesh5);

const camera = new THREE.PerspectiveCamera(100, size.width / size.height);

scene.add(camera);

camera.position.x = -1;

camera.position.z = 65;

camera.position.y = 4;

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

renderer.setSize(size.width, size.height);

renderer.render(scene, camera);

// const control: any = new THREE.OrbitControls(camera, renderer.domElement);
