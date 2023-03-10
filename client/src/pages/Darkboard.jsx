import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import WebSocket from "websocket"

function Darkboard() {
  const canvasRef = useRef(null)
  // const [data, setData] = useState([])
  // const ws = new WebSocket("ws://localhost:8080")

  useEffect(() => {
    const canvas = canvasRef.current

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0, 0))

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const line = new THREE.Line(geometry, material);

    // BOX 
    const box = new THREE.Box3()
    box.setFromCenterAndSize( new THREE.Vector3( 1, 1, 1 ), new THREE.Vector3( 2, 1, 3 ) )
    const helper = new THREE.Box3Helper(box, 0xabb2bf)

    // AXES
    const axesHelper = new THREE.AxesHelper( 100 )
    axesHelper.setColors( 0xe06c75, 0x61afef, 0xe5c07b )

    // GRID
    const gridHelper = new THREE.GridHelper( 100, 30, 0xabb2bf, 0xabb2bf )
    

    // SCENE
    const scene = new THREE.Scene()
    scene.add(helper)
    scene.add(axesHelper)
    scene.add(line)
    scene.add(gridHelper)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(7, 5, 15);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div className="flex justify-center item-center">
      <canvas ref={canvasRef} width={320}/>
    </div>
    
  )
}

export default Darkboard;