// import * as THREE from 'three';
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);



// ADDED SHAPES, We're making a full dice set

const testTexture = new THREE.TextureLoader().load('images/d6.jpg')

// Tetrahedron
const d4 = new THREE.TetrahedronGeometry(7);
const d4Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0x264653 });
const d4Mesh = new THREE.Mesh(d4, d4Material);

// Cube? IDK the -hedron name
const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const d6Texture = new THREE.TextureLoader().load('images/d6.jpg')

const d6 = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 7);
const d6Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0x2a9d8f });
const d6Mesh = new THREE.Mesh(d6, d6Material);

// Octahedron
const d8 = new THREE.OctahedronGeometry(7);
const d8Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0x8ab17d });
const d8Mesh = new THREE.Mesh(d8, d8Material);

// Dodecahedron WERE MAKING OUR OWN???? https://aqandrew.com/blog/10-sided-die-react/
// Vertices and Faces from https://threejs.org/docs/#api/en/geometries/PolyhedronGeometry

const sides=10
const vertices = [
    [0, 0, 1],
    [0, 0, -1],
].flat();

for (let i = 0; i < sides; ++i) {
    const b = (i * Math.PI * 2) / sides;
    vertices.push(-Math.cos(b), -Math.sin(b), 0.105 * (i % 2 ? 1 : -1));
}

const faces = [
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6],
    [0, 6, 7],
    [0, 7, 8],
    [0, 8, 9],
    [0, 9, 10],
    [0, 10, 11],
    [0, 11, 2],
    [1, 3, 2],
    [1, 4, 3],
    [1, 5, 4],
    [1, 6, 5],
    [1, 7, 6],
    [1, 8, 7],
    [1, 9, 8],
    [1, 10, 9],
    [1, 11, 10],
    [1, 2, 11],
].flat();

const d10 = new THREE.PolyhedronGeometry( vertices, faces, 7 );
const d10Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0xe9c46a });
const d10Mesh = new THREE.Mesh(d10, d10Material);

// Dodecahedron
const d12 = new THREE.DodecahedronGeometry(7);
const d12Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0xf4a261 });
const d12Mesh = new THREE.Mesh(d12, d12Material);

// Icosahedron
const d20Texture = new THREE.TextureLoader().load('images/background.jpg')

const d20 = new THREE.IcosahedronGeometry(7);
const d20Material = new THREE.MeshStandardMaterial({map: testTexture, color: 0xe76f51 });
const d20Mesh = new THREE.Mesh(d20, d20Material);

// Uncanny Cube
const uncannyTexture = new THREE.TextureLoader().load('images/catsquare.png')

const uncannyCube = new THREE.BoxGeometry(7, 7, 7)
const uncannyMaterial = new THREE.MeshStandardMaterial({map: uncannyTexture, transparent: true});
const uncannyMesh = new THREE.Mesh(uncannyCube, uncannyMaterial);

// Canny Cube
const cannyTexture = new THREE.TextureLoader().load('images/cannycatsquare.png')

const cannyCube = new THREE.BoxGeometry(7, 7, 7)
const cannyMaterial = new THREE.MeshStandardMaterial({map: cannyTexture, transparent: true});
const cannyMesh = new THREE.Mesh(cannyCube, cannyMaterial);

// Lighting

const pointLight = new THREE.PointLight(0xffffff);
const directionLight = new THREE.DirectionalLight(0xffffff, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const lightHelper = new THREE.PointLightHelper(pointLight);

const gridHelper = new THREE.GridHelper(200,50);

// Background

const backTexture = new THREE.TextureLoader().load('images/background.jpg')


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

scene.add(d4Mesh);
scene.add(d6Mesh);
scene.add(d8Mesh);
scene.add(d10Mesh)
scene.add(d12Mesh);
scene.add(d20Mesh);
scene.add(uncannyMesh)
scene.add(cannyMesh)

// scene.add( cube );
// scene.add(icoMesh);

scene.add(directionLight);
scene.add(ambientLight);

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);


//set the color of the basic material in the object parameters `{}`

d4Mesh.position.z = 0;
d4Mesh.position.x = -53;

d6Mesh.position.z = 0;
d6Mesh.position.x = -33;

d8Mesh.position.z = 0;
d8Mesh.position.x = -13;

d10Mesh.position.z = 0;
d10Mesh.position.x = 7;

d12Mesh.position.z = 0;
d12Mesh.position.x = 27;

d20Mesh.position.z = 0;
d20Mesh.position.x = 47;

uncannyMesh.position.x = 7
uncannyMesh.position.y = -10
uncannyMesh.position.z = 25

cannyMesh.position.x = -13
cannyMesh.position.y = -10
cannyMesh.position.z = 25

// Lights
pointLight.position.set(0, -10, 10);
ambientLight.position.set(25, -15, -400);

function animate() {
    requestAnimationFrame( animate );
    // Rotate shapes
    d4Mesh.rotation.x += 0.01;
    d4Mesh.rotation.y += -0.02;

    d6Mesh.rotation.x += 0.03;
    d6Mesh.rotation.y += -0.04;

    d8Mesh.rotation.x += -0.02;
    d8Mesh.rotation.y += 0.03;

    d10Mesh.rotation.x += -0.02;
    d10Mesh.rotation.y += -0.05;

    d12Mesh.rotation.x += 0.01;
    d12Mesh.rotation.y += 0.04;

    d20Mesh.rotation.x += 0.05;
    d20Mesh.rotation.y += 0.03;

    uncannyMesh.rotation.y += 0.01

    cannyMesh.rotation.y += -0.01

    renderer.render( scene, camera );
}

animate();

// Helpers

// scene.add(lightHelper)
//
// scene.add(gridHelper)

// Background
scene.background = backTexture;
