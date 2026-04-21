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

const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / window.innerWidth - 0.5;
  cursor.y = e.clientY / window.innerHeight - 0.5;
});

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
function animate() {
  window.requestAnimationFrame(animate);

  planete.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  planete.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  planete.position.y = cursor.y * 5;

  camera.lookAt(planete.position);

  renderer.render(scene, camera);
}
animate();
