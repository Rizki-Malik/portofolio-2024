// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// let object, controls;

// let objToRender = 'ship';

// const loader = new GLTFLoader();

// loader.load(
//     `models/${objToRender}/scene.gltf`,
//     function (gltf) {
//         object = gltf.scene;
//         scene.add(object);
//     },
//     function (xhr) {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     function(error){
//         console.error(error);
//     }
// );

// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize( window.innerWidth, window.innerHeight );

// document.getElementById("ship3D").appendChild(renderer.domElement);

// // camera.position.z = objToRender === "texture" ? 25 : 100;

// // controls = new OrbitControls( camera, renderer.domElement );
// // controls.enableDamping = true;
// // controls.dampingFactor = 0.05;

// // controls.screenSpacePanning = false;

// const topLight = new THREE.DirectionalLight(0xffffff, 1);
// topLight.position.set(500, 500, 500);
// topLight.castShadow = true;
// scene.add(topLight);

// // const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "texture" ? 5 : 1);
// // scene.add(ambientLight);

// function animate(){
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }

// window.addEventListener("resize", function() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// });

// animate();