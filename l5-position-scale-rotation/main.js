const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;
scene.add(camera);
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
const box = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(box, material);
scene.add(cube);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectMatrix();
});
// increment varible for movement
let x = 0;
function animate() {
  window.requestAnimationFrame(animate);
  // position
  // cube.position.x += 0.1;
  // cube.position.y += 0.1;
  // cube.position.z += 0.1;
  // increment varivable for movement
  x += 0.02;
  // cube.position.set(x, x, 0);
  // scale
  // cube.scale.x += 0.002;
  // cube.scale.y += 0.002;
  // cube.scale.z += 0.002;
  // cube.scale.set(x, x, x)
  // Rotation
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
  cube.rotation.set(x, x, 0);
  renderer.render(scene, camera);
}
animate();
