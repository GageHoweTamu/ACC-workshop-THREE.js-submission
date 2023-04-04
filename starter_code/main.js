import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x3279a8});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    // all animation happens here
    renderer.render(scene, camera);
}

animate()