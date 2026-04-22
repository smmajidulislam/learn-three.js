import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

scene.add(cube);

// Camera position
camera.position.z = 5;
let cursor = { x: 0, y: 0 };

window.addEventListener("mousemove", (event) => {
  cursor.x = (event.clientX / window.innerWidth - 0.5) * 2;
  cursor.y = (event.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y = cursor.y;
  cube.rotation.x = cursor.x;

  renderer.render(scene, camera);
}

animate();
