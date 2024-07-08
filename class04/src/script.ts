import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//Cursor

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event: any) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
  console.log(cursor.x, cursor.y);
});

/**
 * Base
 */
// Canvas
const canvas: any = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 600,
  height: 500,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: "green" })
);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;
//Orthographic camera                        L  R   T  B   N     F
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.01, 100);

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.00000001,
  9999999999999
);
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);
console.log(camera.position.length()); // This function return the value which is the distance of the camera from the origin

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer: any = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update; objects
  // mesh.rotation.y = elapsedTime;

  // //update camera
  // camera.position.x = -Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 10;
  // camera.lookAt(mesh.position);
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
