import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.set(0,0,10)

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0x3279a8});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const edges = new THREE.EdgesGeometry( geometry );
const lineMaterial = new THREE.LineBasicMaterial({color: 0x3279a8});
const line = new THREE.LineSegments(edges, lineMaterial);

const points = []
points.push(new THREE.Vector3(-1, 0, 0))
points.push(new THREE.Vector3(0, 1, 0))
points.push(new THREE.Vector3(1, 0, 0))
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line2 = new THREE.Line(lineGeometry, lineMaterial);

const cylGeometry = new THREE.CylinderGeometry(1, 1, 0.5, 32)
const cylinder = new THREE.Mesh(cylGeometry, material);
cylinder.position.set(5, 5, 0);
scene.add(cylinder);

const SphereGeom = new THREE.SphereGeometry(2, 32, 16);
const sphere = new THREE.Mesh(SphereGeom,  material)

const loader = new GLTFLoader();

loader.load('amogus.glb', function (gltf) {
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            child.material = amogusMaterial;
        }
    });
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

const amogusMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, 1, 0) });

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath( 'starter_code/amogus.glb' );
loader.setDRACOLoader( dracoLoader );

// Load a glTF resource
loader.load(
	amogus.glb,
)


scene.add( gltf.scene );

    
scene.add(line);
scene.add(line2);

function animate() {
    requestAnimationFrame(animate);
    // all animation happens here
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.position.x += 0.01

    line.rotation.x += 0.1
    line.rotation.y += 0.01

    CylinderGeometry.rotation.x += 2

    sphere.position.y += 0.1

    loader.position.x += 0.01
    cube.rotation.y += 0.01

    dracoLoader.position.x += 0.01
    dracoLoader.rotation.y += 0.01

    renderer.render(scene, camera);
}

animate();