const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const box = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);
renderer.render(scene, camera);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
