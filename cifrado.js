
        const combinacionSecreta = 1234;
        const alfabeto = "abcdefghijklmnopqrstuvwxyz";
        const claveAlmacenamiento = "mensaje_encriptado";
        let pr;

        function cargarMensaje() {
            let mensajeCifrado = localStorage.getItem(claveAlmacenamiento);
            return mensajeCifrado || "";
        }

        function guardarMensaje(mensaje) {
            localStorage.setItem(claveAlmacenamiento, mensaje);
        }

        function menu() {
            pr = prompt("¿Quieres ver el mensaje o encriptar uno nuevo? (marca un número 1 o 2)");
            const entradaMenu = prompt("1. Nueva encriptación y sustituir el mensaje actual\n2. Leer encriptación:\n3.Descodificar mensaje nuevo por fuerza bruta");

            return entradaMenu;
        }

        function cifrarMensaje(mensajeCifrar, mensajeCifrado) {
            let nuevoMensajeCifrado = "";
            for (let letra of mensajeCifrar) {
                if (alfabeto.includes(letra)) {
                    const numeroLetraCifrar = alfabeto.indexOf(letra);
                    nuevoMensajeCifrado += alfabeto[(numeroLetraCifrar + 10) % 26];
                } else {
                    nuevoMensajeCifrado += letra;
                }
            }
            return nuevoMensajeCifrado;
        }

        function desencriptarMensaje(mensajeDescifrar) {
            let nuevoMensajeCifrado = "";
            for (let letra of mensajeDescifrar) {
                if (alfabeto.includes(letra)) {
                    const numeroLetraActual = alfabeto.indexOf(letra);
                    nuevoMensajeCifrado += alfabeto[(numeroLetraActual - 10 + 26) % 26];
                } else {
                    nuevoMensajeCifrado += letra;
                }
            }
            return nuevoMensajeCifrado;
        }
        
        function fuerzaBruta(mensajeCodificado) {
            for (let i = 0; i < 26; i++) {
                let mensajeDescifrado = "";
        
                for (let letra of mensajeCodificado) {
                    if (alfabeto.includes(letra)) {
                        let numeroLetraActual = alfabeto.indexOf(letra);
                        mensajeDescifrado += alfabeto[(numeroLetraActual + i + 26) % 26];
                    } else {
                        mensajeDescifrado += letra;
                    }
                }
        
                let siOno = prompt("Descodificador número " + i + " ¿Es este mensaje correcto? (si) o intro para continuar\n"+mensajeDescifrado);
        
                while (!(siOno.toLowerCase() === "si")) {
                    siOno = prompt("Por favor, introduce una respuesta correcta (si/no)");
                }
        
                if (siOno.toLowerCase() === "si") {
                    return mensajeDescifrado;
                }
            }
        
            // Si no se encuentra ninguna respuesta "si", puedes retornar algo o manejarlo según tus necesidades.
            return "No se encontró una respuesta válida.";
        }


        // Comenzamos el programa:
        let mensajeCifrado = cargarMensaje();
        pr = prompt("Mensaje encriptado actual:\n" + mensajeCifrado);
        console.log();

        
        let numeroMenu = "noSalir";
        while (numeroMenu !== "salir") {
            numeroMenu = menu();

            if (numeroMenu === "1") {
                const contrasena = parseInt(prompt("Díganos la contraseña para darle acceso:"));
                if (contrasena === combinacionSecreta) {
                    const nuevoMensajeCifrado = prompt("Contraseña correcta! Escriba su nuevo mensaje a cifrar:");
                    mensajeCifrado = cifrarMensaje(nuevoMensajeCifrado.toLowerCase(), mensajeCifrado);
                    guardarMensaje(mensajeCifrado);
                    pr = prompt("Mensaje actual cifrado : " + mensajeCifrado);
                } else {
                    pr = prompt("----------------------");
                    pr = prompt("CONTRASEÑA INCORRECTA!");
                    pr = prompt("----------------------\n");
                }
            } else if (numeroMenu === "2") {
                const contrasena = parseInt(prompt("Díganos la contraseña para darle acceso:"));
                if (contrasena === combinacionSecreta) {
                mensajeCifrado = desencriptarMensaje(mensajeCifrado);
                pr = prompt("Mensaje cifrado : " + mensajeCifrado);
            } else {
                pr = prompt("----------------------");
                pr = prompt("CONTRASEÑA INCORRECTA!");
                pr = prompt("----------------------\n");
            }
            } else if (numeroMenu === "salir") {
                pr = prompt("bye!");
            } else if (numeroMenu=3){
                let nuevoFuerzaBruta = prompt("Escriba el mensaje a romper por fuerza bruta:")
                fuerzaBruta(nuevoFuerzaBruta)
            }else {
                pr = prompt("Por favor, escriba un número (1) o (2) o (3). También puede escribir 'salir' para finalizar el programa");
            }
        }

        console.log("\n-------------------");
        pr = prompt("PROGRAMA FINALIZADO");
    
