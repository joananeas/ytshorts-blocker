        // Manejo de eventos para guardar configuración
        document.getElementById("guardar").addEventListener("click", function () {
            // Obtiene los valores de los parámetros
            const intervalo = document.getElementById("intervalo").value;
            console.log("Hiciste clic en Guardar");
        
            // Guarda la configuración en el almacenamiento local de la extensión
            
            chrome.storage.local.set({
                intervalo: intervalo
            });
            console.log("Guardando configuración...");
            browser.storage.local.set({
                intervalo: intervalo
            }).then(() => {
                console.log("Configuración guardada exitosamente.");
                window.close();
            }).catch((error) => {
                console.error("Error al guardar la configuración:", error);
            });
            browser.storage.local.get("intervalo").then((result) => {
                const intervalo = result.intervalo;
                console.log("Valor recuperado:", intervalo);
            });
        });
