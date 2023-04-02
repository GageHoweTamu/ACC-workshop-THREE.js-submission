import * as THREE from 'three';

const scene = new THREE.Scene(); // scene contains all the items, 3d models, etc
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// first param: in degrees, field of view; amount of scene visible at once
// second param: aspect ratio; ideal to use width/height to get correct ratio, avoid squishing
// third: items closer to camera than this amount are not rendered
// fourth: items farther than this amount are not rendered

const renderer = new THREE.WebGLRenderer();
// renderer to actually convert models onto screen
renderer.setSize( window.innerWidth, window.innerHeight );
// render to size of window screen (this can be changed)
document.body.appendChild( renderer.domElement );
// adding actual HTML to page

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// contains vertices, all geometric properties; but not ACTUAL cube, just the positioning
const material = new THREE.MeshBasicMaterial( { color: 0x3279a8 } );
// basic material to apply to geometry, uses hex colors
const cube = new THREE.Mesh( geometry, material );
// create cube from geometry and mesh
scene.add( cube );
// add cube at (0,0,0)

camera.position.set(0,0,10)
// can also do camera.position.x/y/z
// move camera up to (0,0,5) (up 5 units)


// LINES
const edges = new THREE.EdgesGeometry( geometry );
const lineMaterial =  new THREE.LineBasicMaterial( { color: 0x0d1e29 } );
const line = new THREE.LineSegments( edges, lineMaterial );
scene.add( line );

const points = [];
points.push( new THREE.Vector3( - 1, 0, 0 ) );
points.push( new THREE.Vector3( 0, 1, 0 ) );
points.push( new THREE.Vector3( 1, 0, 0 ) );
const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
const line2 = new THREE.Line( lineGeometry, lineMaterial);
scene.add(line2);

//OTHER GEOMETRIES
const cylinderGeometry = new THREE.CylinderGeometry( 1, 1, 0.5, 32 ); // top radius, bottom radius, height, radial segments
const cylinder = new THREE.Mesh( cylinderGeometry, material );
cylinder.position.set(5,5,0);
scene.add( cylinder );

const planeGeometry = new THREE.PlaneGeometry(1,1); // width, height
const plane = new THREE.Mesh(planeGeometry, material);
plane.position.set(-5,-5,0);
scene.add(plane);

const SphereGeometry = new THREE.SphereGeometry( 2, 32, 16 ); // radius, width segments, height segments
const sphere = new THREE.Mesh( SphereGeometry, material );
sphere.position.set(5,-5,0);
scene.add( sphere );

function animate() {
    // on every screen refresh (60 times per second on most screens, sometimes more), renders to scene
	requestAnimationFrame( animate );
    // ADD ANY UPDATES HERE
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    // LINES
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    line2.rotation.y += 0.05;
    line2.position.y += 0.01;

    //OTHER GEOMETRIES
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;

    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();