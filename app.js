// js/app.js
const { createWindow } = require("node-web-browser");
const THREE = require("three");

// Create a new window
createWindow().then((window) => {
  // Create a new Three.js scene
  const scene = new THREE.Scene();

  // Create a new Three.js camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Create a new Three.js renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  window.document.body.appendChild(renderer.domElement);

  // Create a new Three.js cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  // Add the cube to the scene
  scene.add(cube);

  // Animate the cube
  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();
});