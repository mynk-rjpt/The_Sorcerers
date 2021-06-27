var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 2;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
});
renderer.render(scene, camera);

//form and the metrial --- 3D element we define 2 things.

var mesh = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.7),
  new THREE.MeshLambertMaterial({ color: 0xffcc00 })
);
mesh.position.set(0, -0.75, 0);
mesh.rotation.set(90, 0, 0);
scene.add(mesh);

var plane = new THREE.Mesh(
  new THREE.PlaneGeometry(3, 50),
  new THREE.MeshBasicMaterial({ color: 0x3c3c3d, side: THREE.DoubleSide })
);
plane.position.set(0, -1, 0);
plane.rotation.set(90, 0, 0);
scene.add(plane);

// mesh.rotation.set(10,0,0); // about x,y,z axis
// mesh.scale.set(2,1,1);

var light1 = new THREE.PointLight(0xffffff, 1, 500);
light1.position.set(20, 10, 15);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 1, 500);
light2.position.set(-20, 10, 15);
scene.add(light2);

var render = function () {
  requestAnimationFrame(render); // to draw the screen again everytime it is refreshed or resized.

  renderer.render(scene, camera);
};

render();

const pos = mesh.position.x;

document.body.addEventListener("keypress", (x) => {
  if (x.key == "a" && mesh.position.x >= pos) {
    mesh.position.x -= 1;
    //    camera.position.x -=1;
  } else if (x.key == "d" && mesh.position.x <= pos) {
    mesh.position.x += 1;
    // camera.position.x +=1;
  }
});

this.t1 = TimeLineMax({ paused: true }).delay(0.3);
this.tl.to(this.mesh.scale, 1, { x: 2, ease: Expo.easeOut });
this.tl.to(this.mesh.scale, 0.5, { x: 1, ease: Expo.easeOut });

this.tl.to(this.mesh.position, -0.75, { y: 2, ease: Expo.easeOut });
this.tl.to(this.mesh.scale, 0.5, { x: 1, ease: Expo.easeOut }, "=-1.5");
