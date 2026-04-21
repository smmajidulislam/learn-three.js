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
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
const planeteBox = new THREE.SphereGeometry(1, 32, 32);
const planeteMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const planete = new THREE.Mesh(planeteBox, planeteMaterial);
scene.add(planete);

// moon 1

const moonBox = new THREE.SphereGeometry(0.5, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ color: "white" });
const moon1 = new THREE.Mesh(moonBox, moonMaterial);
scene.add(moon1);

// moon 2

const moon1Box = new THREE.SphereGeometry(0.3, 32, 32);
const moon1Material = new THREE.MeshBasicMaterial({ color: "gray" });
const moon2 = new THREE.Mesh(moon1Box, moon1Material);
scene.add(moon2);

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
let angle = 0;
function animate() {
  window.requestAnimationFrame(animate);
  angle += 0.02;
  planete.position.set(0, 0, 0);
  moon1.position.x = Math.cos(angle) * 1.6;
  moon1.position.z = Math.sin(angle) * 1.6;
  moon2.position.x = Math.cos(angle) * 2.6;
  moon2.position.z = Math.sin(angle) * 2.6;

  renderer.render(scene, camera);
}
animate();
