/************************** LOADING *****************************/

// Il <div> della pagina che funge da progress-bar
let progressBar = document.getElementById("progress");

// Il titolo di questa sezione (Loading...)
const title = document.getElementById("loading-title");


/************************ CRONOMETRO ****************************/

// Lo <span> della pagina in cui scrivere il tempo
const tempoAttuale = document.getElementById("cronometro");

// I tre bottoni del cronometro
const btnPlay = document.getElementById("play-btn");
const btnStop = document.getElementById("stop-btn");
const btnReset = document.getElementById("reset-btn");

// Variabili di stato del cronometro
let secondi = 0;
let cronometroTimer = null;

// Mostriamo 0 come valore iniziale
tempoAttuale.textContent = secondi;

// Gestisco gli eventi
btnPlay.addEventListener("click", function () {
	// Disabilito play e attivo stop
	btnPlay.disabled = true;
	btnStop.disabled = false;
	btnReset.disabled = true;

	// Avvio il timer che ogni secondo (1000ms) incrementa i secondi
	cronometroTimer = setInterval(function () {
		secondi++;
		tempoAttuale.textContent = secondi;
	}, 1000);
});

btnStop.addEventListener("click", function () {
	// Fermo il conteggio
	clearInterval(cronometroTimer);

	// Riattivo play e reset, disabilito stop
	btnPlay.disabled = false;
	btnStop.disabled = true;
	btnReset.disabled = false;
});

btnReset.addEventListener("click", function () {
	// Reimposto il contatore a 0 e aggiorno la pagina
	secondi = 0;
	tempoAttuale.textContent = secondi;

	// Disabilito il tasto reset finché non riparte il cronometro
	btnReset.disabled = true;
});


let progress = 0;
progressBar.style.width = "0%"

const timer = setInterval(gestisciLarghezza, 100);


function gestisciLarghezza() {
	progress++
	progressBar.style.width = progress + "%";

	if (progress >= 100) {
		clearInterval(timer);
		title.textContent = "Caricamento completato";
	}
}
