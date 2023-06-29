import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 1000)
camera.position.set(0,.5, 4)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('hero')?.appendChild(renderer.domElement)


const geometry = new THREE.CylinderGeometry(1, 1, 2)
const material = new THREE.MeshBasicMaterial({
  color: 0xffff11
})

const cube = new THREE.Mesh(geometry, material)
cube.rotation.set(1,2,1)
scene.add(cube)




function animate(){
  requestAnimationFrame(animate)

  cube.rotation.x -=.04

  renderer.render( scene, camera)
}

animate()
