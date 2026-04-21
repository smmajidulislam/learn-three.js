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

// ✅ small sphere (cursor)
const geometry = new THREE.SphereGeometry(0.08, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: "white" });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// 👉 raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// 👉 dynamic plane (camera অনুযায়ী perfect size)
function createPlane() {
  const distance = camera.position.z;
  const fov = camera.fov * (Math.PI / 180);
  const height = 2 * Math.tan(fov / 2) * distance;
  const width = height * camera.aspect;

  const planeGeo = new THREE.PlaneGeometry(width, height);
  const planeMat = new THREE.MeshBasicMaterial({ visible: false });

  const plane = new THREE.Mesh(planeGeo, planeMat);
  plane.position.z = 0;
  return plane;
}

let plane = createPlane();
scene.add(plane);

// 👉 mouse move
window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// 👉 resize
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // 👉 plane recreate
  scene.remove(plane);
  plane = createPlane();
  scene.add(plane);
});

// 👉 animation
function animate() {
  requestAnimationFrame(animate);

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(plane);

  if (intersects.length > 0) {
    const point = intersects[0].point;

    // 👉 IMPORTANT: z fix → no distortion
    const target = new THREE.Vector3(point.x, point.y, 2);

    // 👉 smooth follow
    sphere.position.lerp(target, 0.2);
  }

  renderer.render(scene, camera);
}

animate();
