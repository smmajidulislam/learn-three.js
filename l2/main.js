const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
camera.position.z = 5;
scene.add(camera);
const canvas = document.querySelector("#canvas");

const render = new THREE.WebGLRenderer({ canvas });
render.setSize(window.innerWidth, window.innerHeight);
const box = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(box, material);
scene.add(cube);
render.render(scene, camera);
