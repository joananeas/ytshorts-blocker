// Joan Aneas (joananeas on Github)
function popUp() {
    alert("¡Hey!\nStop wasting your time SMH...");
    setTimeout(function(){}, 3000);
}

function verificarURL() {
    //Default configuration:
    if (window.location.href.includes("shorts")) {
        popUp();
        window.location.href = "https://www.youtube.com"; //Redirects to yt
    }
  }
  // Establece un intervalo para verificar la URL cada segundo (1000 milisegundos)
  const intervalo = setInterval(verificarURL, 3 * 1000);



