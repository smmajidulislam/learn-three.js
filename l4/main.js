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
const box = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(box, material);
scene.add(cube);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectMatrix();
});
function animate() {
  window.requestAnimationFrame(animate);
  cube.position.x += 0.01;
  cube.position.y -= 0.01;
  cube.position.z += 0.02;
  renderer.render(scene, camera);
}
animate();
