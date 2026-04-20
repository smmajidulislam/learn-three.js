const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;

const canvas = document.querySelector("#canvas");

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

/* 🌍 Planet (center object) */
const planetGeo = new THREE.SphereGeometry(0.6, 32, 32);
const planetMat = new THREE.MeshBasicMaterial({ color: "red" });
const planetCube = new THREE.Mesh(planetGeo, planetMat);
scene.add(planetCube);

/* 🌕 Moon */
const moonGeo = new THREE.SphereGeometry(0.3, 32, 32);
const moonMat = new THREE.MeshBasicMaterial({ color: "white" });
const moonCube = new THREE.Mesh(moonGeo, moonMat);
scene.add(moonCube);

const moon2Geo = new THREE.SphereGeometry(0.2, 32, 32);
const moon2Mat = new THREE.MeshBasicMaterial({ color: "blue" });
const moon2Cube = new THREE.Mesh(moon2Geo, moon2Mat);
scene.add(moon2Cube);

const moon3Geo = new THREE.SphereGeometry(0.1, 32, 32);
const moon3Mat = new THREE.MeshBasicMaterial({ color: "mediumpurple" });
const moon3Cube = new THREE.Mesh(moon3Geo, moon3Mat);
scene.add(moon3Cube);

/* resize */
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

let angle = 0;

function animate() {
  requestAnimationFrame(animate);

  angle += 0.02;

  // 🌍 planet fixed (center)
  planetCube.position.set(0, 0, 0);

  moonCube.position.x = Math.cos(angle) * 1;
  moonCube.position.z = Math.sin(angle) * 1;

  moon2Cube.position.x = Math.cos(angle) * 1.6;
  moon2Cube.position.z = Math.sin(angle) * 1.6;

  moon3Cube.position.x = Math.cos(angle) * 2;
  moon3Cube.position.z = Math.sin(angle) * 2;

  renderer.render(scene, camera);
}

animate();
