import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import "./style.css";
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();
const sizes: any = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(100, sizes.width / sizes.height);
const box3 = new THREE.SphereGeometry(100);
// const camera2 = new THREE.Ort
const mat4 = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true });
const box = new THREE.BoxGeometry(10, 10, 10, 10);
// const plane = new THREE.PlaneGeometry(500,500);
const mat2 = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
// const mesh2 = new THREE.Mesh(plane, mat2);
const material = new THREE.MeshBasicMaterial({
  color: "orange",
  wireframe: true,
});
const sphere = new THREE.Mesh(box3, mat4);
const mesh = new THREE.Mesh(box, material);
const box2 = new THREE.TorusGeometry(50, 40, 40, 21);
const mat3 = new THREE.MeshBasicMaterial({ color: "green", wireframe: true });
const torus = new THREE.Mesh(box2, mat3);
const group1 = new THREE.Group();

window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});
window.addEventListener("resize", () => {
  console.log("Window resized");
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  render.setSize(sizes.width, sizes.height);
  render.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
const anotherbox = new THREE.SphereGeometry(50);
const mat5 = new THREE.MeshBasicMaterial({ color: "magenta", wireframe: true });
const sphere2 = new THREE.Mesh(anotherbox, mat5);
scene.add(sphere2);
scene.add(sphere);
scene.add(mesh);
scene.add(torus);
// mesh2.rotation.z = 0.4;
// mesh2.rotation.y = 0.01;
// mesh2.rotation.x = -0.8;

mesh.position.y = 2;

// scene.add(mesh2);
scene.add(camera);
camera.position.z = 50;

// scene.add(canvas);
// scene.add(canvas);
const render = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
render.setSize(sizes.width, sizes.height);
// document.body.appendChild(render.domElement)
const clock = new THREE.Clock();
function animate() {
  let t: number = 0.1;
  t++;
  mesh.rotation.x += -0.01;
  mesh.rotation.y += 0.01;
  // mesh2.rotation.z += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.z += 0.01;
  torus.rotation.y += 0.01; // mesh.position.y += 0.001 * Math.sin(t) * Math.PI
  sphere.rotation.z += -0.01;
  sphere.rotation.y += -0.001;
  // mesh.rotation.z += 0.01
  // camera.position.z += Math.sin(clock.getElapsedTime()) * 2;
  // camera.lookAt(mesh.position)
  sphere2.rotation.y += 0.01;

  requestAnimationFrame(animate);
  render.render(scene, camera);
  controls.update();
}
animate();
