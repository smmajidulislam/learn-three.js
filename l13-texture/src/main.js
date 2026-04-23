import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;
scene.add(camera);

const manager = new THREE.LoadingManager();
manager.onStart = () => console.log("started loading");
manager.onLoad = () => console.log("Finised loading");
manager.onProgress = (url, loaded, total) =>
  console.log(`${loaded}/${total} loaded`);
manager.onError = (url) => console.log("Error", "==> Error done");

const textureLoader = new THREE.TextureLoader(manager);
const load = textureLoader.load("/usersImage.jpg");
const canvas = document.querySelector("#app");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const box = new THREE.BoxGeometry(4, 4, 4);
const material = new THREE.MeshBasicMaterial({ map: load });
const cube = new THREE.Mesh(box, material);
scene.add(cube);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
