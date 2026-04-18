const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  67,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);
scene.add(camera);
const render = new THREE.WebGLRenderer();
render.render(scene, camera);
