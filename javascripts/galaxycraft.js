var renderer, scene, camera, clock;
var material, mesh, uniforms, attributes;
var mouseX = 100,
    mouseY = 100,
    mouseWheel = 1.0;
var winWidth = 424;
var winHeight = 424;

init();
animate();

function init() {

	// renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( winWidth, winHeight );
	//document.body.appendChild( renderer.domElement );
	document.getElementById("coolGalaxyBox").appendChild(renderer.domElement);

	// scene
	scene = new THREE.Scene();

	// camera
//var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
    camera = new THREE.PerspectiveCamera( 40, winWidth / winHeight, 1, 1000 );
	camera.position.set( 0, 0, 55 );

	// axes
	//scene.add( new THREE.AxisHelper( 20 ) );

	// uniforms
	uniforms = {
		color: { type: "c", value: new THREE.Color( 0xaaaadd ) },

		iResolution: { type: "v3", value: new THREE.Vector3(500.0,400.0, 0.0) },
		iGlobalTime: { type: "f", value: 1.0 },
		spiralyness: { type: "f", value: 1.0 },
		bulgeSize: { type: "f", value: 1.0 },
		squish: { type: "f", value: 1.0 },
		iMouse: { type: "v4", value: new THREE.Vector4(5.0,40.0, 0.0, 0.0) },
	};

	// attributes
	attributes = {
	};

	// material
	material = new THREE.ShaderMaterial( {
		attributes      : attributes,
		uniforms        : uniforms,
		vertexShader    : document.getElementById( 'vertex_shader' ).textContent,
		fragmentShader  : document.getElementById( 'fragment_shader' ).textContent
	} );

	// plane geometry
	var geometry = new THREE.PlaneGeometry( 40, 40 );

	// plane
	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mousedown', onMouseDown, false);
    document.addEventListener('mouseup', onMouseUp, false);
    document.addEventListener('mousewheel', onMouseWheel, false);
    clock = new THREE.Clock();

}

function animate() {
    time = clock.getElapsedTime();
    delta = clock.getDelta();

    uniforms.iGlobalTime.value = time;
    //uniforms.cameraPos.value = camera.position;
    //uniforms.iGlobalTime.needsUpdate = true; // doesn't seem to be needed.?
    uniforms.iMouse.value = new THREE.Vector4(mouseX*400.01,mouseY*400.01, 400.0);
    //uniforms.squish.value = Math.sin(time)*0.5+0.6;
    uniforms.bulgeSize.value = Math.sin(time);
    uniforms.spiralyness.value = Math.sin(time);
    uniforms.spiralyness.needsUpdate;
    uniforms.iMouse.needsUpdate;
    uniforms.needsUpdate = true;

	requestAnimationFrame( animate );

	renderer.render( scene, camera );

}

var mouseIsDown = false;
//event listener
function onMouseDown(event_info) {
    //stop any other event listener from recieving this event
    event_info.preventDefault();

    mouseIsDown = true;
    //this where begin to transform the mouse cordinates to three,js cordinates
    mouseX = (event_info.clientX / winWidth) * 2 - 1;
    mouseY = -(event_info.clientY / winHeight) * 2 + 1;
}

function onMouseMove(event_info) {
    //stop any other event listener from recieving this event
    event_info.preventDefault();
    if (mouseIsDown)
    {
	    //this where begin to transform the mouse cordinates to three,js cordinates
	    mouseX = (event_info.clientX / winWidth) * 2 - 1;
	    mouseY = -(event_info.clientY / winHeight) * 2 + 1;
	}
}

function onMouseUp(event_info) {
	mouseIsDown = false;

}

function onMouseWheel(event_info) {
    // cross-browser wheel delta
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

    mouseWheel -= delta;
}
