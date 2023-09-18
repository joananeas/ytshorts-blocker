// Joan Aneas (joananeas on Github)
/* ##**inicio de main.js**###################################### */
function popUp() {
    alert("¡Hey!\nStop wasting your time SMH...\n\n¡Oye!\nDeja de perder el tiempo...");
    setTimeout(function(){}, 3000);
}

browser.storage.local.get(["intervalo"]).then((result) => {
    const intervalo = result.intervalo || "Sin datos";

    // Muestra las variables en la interfaz de usuario
    document.getElementById("variable1Estado").textContent = intervalo;
}).catch((error) => {
    console.error("Error al recuperar las variables:", error);
});

function verificarURL() {
    // Configuración por defecto
    if (window.location.href.includes("shorts")) {
        popUp();
        window.location.href = "https://www.youtube.com"; // Redirects to yt
    }
  }

  const getLoc = browser.storage.local.get().then((result) => {
    const y = result.x;
    console.log("Valor recuperado:", y);
    });
    getLoc("intervalo");
  // Establece un intervalo para verificar la URL cada segundo (3 segundos)
  // Posteriormente podrá controlarlo el usuario
  const refrescar = setInterval(verificarURL, getLoc[("intervalo")] * 1000);
 
/* ##**fin de main.js**###################################### */
