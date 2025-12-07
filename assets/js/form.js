// Sélection de la zone où insérer les éléments
const videoArea = document.getElementById("video-area");

// ----- Création des éléments dynamiques -----

// Bouton 1
const btnOpen = document.createElement("button");
btnOpen.textContent = "Découvrez notre vidéo";
btnOpen.classList.add("video-btn");

// Bouton 2
const btnClose = document.createElement("button");
btnClose.textContent = "Masquer la vidéo";
btnClose.classList.add("video-btn");
btnClose.style.display = "none"; // caché au début

// Vidéo
const video = document.createElement("video");
video.src = "http://tecfa.unige.ch/guides/html/html5-video/videos/state-of-wikipedia-480x272.ogv";
video.controls = true;
video.style.display = "none"; // cachée au début

// Ajout dans le DOM
videoArea.appendChild(btnOpen);
videoArea.appendChild(btnClose);
videoArea.appendChild(video);

// ----- Comportement -----

// Clic sur le bouton 1 → afficher vidéo
btnOpen.addEventListener("click", () => {
    btnOpen.style.display = "none";
    btnClose.style.display = "inline-block";

    video.style.display = "block";
    video.classList.remove("fadeOut");
    video.classList.add("fadeIn");
});

// Clic sur le bouton 2 → masquer vidéo
btnClose.addEventListener("click", () => {
    btnClose.style.display = "none";
    btnOpen.style.display = "inline-block";

    video.classList.remove("fadeIn");
    video.classList.add("fadeOut");

    setTimeout(() => {
        video.style.display = "none";
    }, 400); // douce transition
});

