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
const box1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({ color: "blue" });
const cube1 = new THREE.Mesh(box1, material1);
const group = new THREE.Group();

scene.add(group);
group.add(cube);
group.add(cube1);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
let x = 0;
//  auto animation method 1
// let dateAndTime = Date.now();
//  auto animation method 2
const clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  x += 0.1;
  // position
  cube.position.x = 5;
  // cube.position.y = x;
  // cube.position.z = x;
  // cube.position.set(x, x, x);

  // scale
  // cube.scale.x = x;
  // cube.scale.y = x;
  // cube.scale.z = x;
  // cube.scale.set(x, x, x);

  // rotation
  // cube.rotation.x = x;
  // cube.rotation.y = x;
  // cube.rotation.z = x;
  // cube.rotation.set(x, x, x);

  // cube1 position for visution
  cube1.position.x = -5;

  // grouping
  // position
  // group.position.x = x;
  // group.position.y = x;
  // group.position.z = x;
  // group.position.set(x, x, x);

  // group scale
  // group.scale.x = x;
  // group.scale.y = x;
  // group.scale.z = x;
  // group.scale.set(x, x, x);

  // group rotation
  // group.rotation.x = x;
  // group.rotation.y = x;
  // group.rotation.z = x;
  // group.rotation.set(x, x, x);

  // math using sin and cos
  // group.rotation.x = Math.sin(x);
  // group.rotation.x = Math.cos(x);

  //  auto animation method 1
  // let currentTime = Date.now();
  // let delayTime = currentTime - dateAndTime;
  // group.rotation.x = delayTime * 0.001;

  //  auto animation method 2
  // const elapsedTime = clock.getElapsedTime();
  // group.rotation.x = elapsedTime;

  // auto animation method 3
  // const deltaTime = clock.getDelta();
  // group.rotation.x += deltaTime;

  renderer.render(scene, camera);
}
animate();
