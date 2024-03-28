import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.162.0/three.module.js';
        // Variables para controlar la cámara y la escena
        var scene, camera, renderer;
        var cube, theta;
        var evento;
        

        // Variables para controlar el movimiento
        // var keys = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, };
        var moveSpeed = 0.1;
        var rotateSpeed = 0.015;
        const arrows= { UPcamera: false, DOWNcamera: false, leftcamera: false, rightcamera: false };
        const movement = { forward: false, backward: false, left: false, right: false };

        function init() {
            // Crear una nueva escena
            scene = new THREE.Scene();

            // Crear una nueva cámara
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;
            camera.rotation.order = "YXZ";
            

            // Crear un cubo rojo
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Crear el renderer
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Añadir detección de eventos de teclado
            // document.addEventListener('keydown', onKeyDown, false);
        }
        
        
        function animate() {
            
            
            
            
            // Actualizar la posición y rotación de la cámara en base a las teclas presionadas
            if (arrows.leftcamera) {
                camera.rotation.y += rotateSpeed;
            }
            if (arrows.rightcamera) {
                camera.rotation.y -= rotateSpeed;
            }
            if (arrows.UPcamera) {
                camera.rotation.x +=  rotateSpeed;
               
            }
            if (arrows.DOWNcamera) {
                camera.rotation.x -= rotateSpeed;
            }
            if (movement.forward) {
                camera.position.x -= Math.sin(camera.rotation.y) * moveSpeed;
                camera.position.z -= Math.cos(camera.rotation.y) * moveSpeed;
                camera.position.y += Math.sin(camera.rotation.x) * moveSpeed;
               
                
                    
            }
            if (movement.backward) {
                camera.position.x += Math.sin(camera.rotation.y) * moveSpeed;
                camera.position.z += Math.cos(camera.rotation.y) * moveSpeed;
                camera.position.y -= Math.sin(camera.rotation.x) * moveSpeed;
            }
            if (movement.left) {
                camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * moveSpeed;
                camera.position.z += Math.cos(camera.rotation.y - Math.PI / 2) * moveSpeed;
            }
            if (movement.right) {
                camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * moveSpeed;
                camera.position.z += Math.cos(camera.rotation.y + Math.PI / 2) * moveSpeed;
            }
        

            
           
            // Renderizar la escena
            renderer.render(scene, camera);

            // Llamar de nuevo a la función animate en el próximo frame
            requestAnimationFrame(animate);
        }

        function onKeyDown(event) {

            // keys[event.keyCode] = true;
            // event.key devuelve la tecla que se presiono, despues va al switch y dependiendo de que tecla fue cambia el boolean correspondiente a
            // true, el cual va a los if de animate, lo que hace que se mueva la camara
          
          switch (event.key) {
                case "ArrowUp":
                    arrows.UPcamera = true;
                    break;
                case "ArrowDown":
                    arrows.DOWNcamera = true;
                    break;
                case "ArrowLeft":
                    arrows.leftcamera = true;
                    break;
                case "ArrowRight":
                    arrows.rightcamera = true;
                    break;
            }

            switch (event.key) {
                case "w":
                    movement.forward = true;
                    break;
                case "s":
                    movement.backward = true;
                    break;
                case "a":
                    movement.left = true;
                    break;
                case "d":
                    movement.right = true;
                    break;
            }
        }

        function onKeyUp(event) {
            // keys[event.keyCode] = false;
            switch (event.key) {
                case "ArrowUp":
                    arrows.UPcamera = false;
                    break;
                case "ArrowDown":
                    arrows.DOWNcamera = false;
                    break;
                case "ArrowLeft":
                    arrows.leftcamera = false;
                    break;
                case "ArrowRight":
                    arrows.rightcamera = false;
                    break;
            }


            switch (event.key) {
                case "w":
                    movement.forward = false;
                    break;
                case "s":
                    movement.backward = false;
                    break;
                case "a":
                    movement.left = false;
                    break;
                case "d":
                    movement.right = false;
                    break;
            }
        }
        function keysim(){

            var prueba = new KeyboardEvent('keydown',{
                key:'ArrowUp'
            })
            document.dispatchEvent(prueba);
        }
        function simulatekeydown(input){
            switch(input){

                case "w":
                    evento = new KeyboardEvent('keydown',{
                        key:'w'   
                    });
                    
                    break;
                case "a":
                    evento = new KeyboardEvent('keydown',{
                        key:'a'
                    });
                    break;
                case "s":
                    evento = new KeyboardEvent('keydown',{
                        key:'s'
                    });
                    break;
                case "d":
                    evento = new KeyboardEvent('keydown',{
                        key:'d'
                    });
                    break;
                case "777":
                    evento = new KeyboardEvent('keydown',{
                        key:'ArrowUp'
                    });
                    
                    break;
                case "ArrowDown":
                    evento = new KeyboardEvent('keydown',{
                        key:'ArrowDown'
                    });
                    break;
                case "ArrowRight":
                    evento = new KeyboardEvent('keydown',{
                        key:'ArrowRight'
                    });
                    break;
                case "ArrowLeft":
                    evento = new KeyboardEvent('keydown',{
                        key:'ArrowLeft'
                    });
                    break;
            
            }
            document.dispatchEvent(evento);
            
                
        }
        function simulatekeyup(input){
            switch(input){

                case "w":
                    evento = new KeyboardEvent('keyup',{
                        key:'w'   
                    });
                    
                    break;
                case "a":
                    evento = new KeyboardEvent('keyup',{
                        key:'a'
                    });
                    break;
                case "s":
                    evento = new KeyboardEvent('keyup',{
                        key:'s'
                    });
                    break;
                case "d":
                    evento = new KeyboardEvent('keyup',{
                        key:'d'
                    });
                    break;
                case "777":
                    evento = new KeyboardEvent('keyup',{
                        key:'ArrowUp'
                    });
                    
                    break;
                case "ArrowDown":
                    evento = new KeyboardEvent('keyup',{
                        key:'ArrowDown'
                    });
                    break;
                case "ArrowRight":
                    evento = new KeyboardEvent('keyup',{
                        key:'ArrowRight'
                    });
                    break;
                case "ArrowLeft":
                    evento = new KeyboardEvent('keyup',{
                        key:'ArrowLeft'
                    });
                    break;
            
            }
            document.dispatchEvent(evento);
            
                
        }
                    

                    


        
       
        

        // Añadir detección de eventos de teclado
        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);

        // Inicializar y animar
        init();
        animate();