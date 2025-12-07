document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Charger Bootstrap uniquement dans le Shadow DOM ---
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

    // --- 2. Récupérer la zone principale et créer un Shadow DOM isolé ---
    const zone = document.getElementById("ma-zone-bootstrap");
    const shadow = zone.attachShadow({ mode: "open" });

    // Ajouter Bootstrap dans le Shadow DOM (pas globalement)
    shadow.appendChild(link);

    // --- 3. Récupérer le formulaire déjà présent dans la page ---
    const zone_form = document.getElementById("zone-form");
    const originalHTML = zone_form.innerHTML;

    // Le réinjecter dans le Shadow DOM pour qu'il s'affiche
    const wrapper = document.createElement("div");
    wrapper.innerHTML = originalHTML;
    shadow.appendChild(wrapper);

    // --- 4. Créer une ligne Bootstrap pour les boutons + vidéos ---
    const col = document.createElement("div");
    col.classList.add("row", "justify-content-center", "mb-4");
    shadow.appendChild(col);

    // Colonne centrée
    const innerCol = document.createElement("div");
    innerCol.classList.add("col-12", "col-md-6", "text-center");
    col.appendChild(innerCol);

    // --- 5. Bouton 1 + vidéo 1 ---
    const btn1 = document.createElement("button");
    btn1.textContent = "Découvrez nos services";
    btn1.classList.add("btn", "btn-success", "btn-lg", "w-100", "rounded-pill", "btn-custom");

    const video1 = document.createElement("video");
    video1.src = "https://cdn.pixabay.com/video/2025/05/01/276047_large.mp4";
    video1.controls = true;
    video1.classList.add("video-style", "mt-3", "d-none");

    innerCol.appendChild(btn1);
    innerCol.appendChild(video1);

    // --- 6. Bouton 2 + vidéo 2 ---
    const btn2 = document.createElement("button");
    btn2.textContent = "Découvrez de nouveaux horizons";
    btn2.classList.add("btn", "btn-success", "btn-lg", "w-100", "rounded-pill", "btn-custom");

    const video2 = document.createElement("video");
    video2.src = "https://cdn.pixabay.com/video/2023/09/01/178732-860527368_large.mp4";
    video2.controls = true;
    video2.classList.add("video-style", "mt-3", "d-none");

    innerCol.appendChild(btn2);
    innerCol.appendChild(video2);

    // --- 7. Fonction utilitaire pour cacher une vidéo ---
    function hideVideo(video) {
        video.pause();
        video.classList.add("d-none");
    }

    // --- 8. Gestion du clic sur le premier bouton ---
    btn1.addEventListener("click", () => {
        if (video1.classList.contains("d-none")) {
            video1.classList.remove("d-none");
            video1.play();
            hideVideo(video2);
        } else {
            hideVideo(video1);
        }
    });

    // --- 9. Gestion du clic sur le deuxième bouton ---
    btn2.addEventListener("click", () => {
        if (video2.classList.contains("d-none")) {
            video2.classList.remove("d-none");
            video2.play();
            hideVideo(video1);
        } else {
            hideVideo(video2);
        }
    });

    // --- 10. Styles CSS injectés dans le Shadow DOM ---
    const style = document.createElement("style");
    style.textContent = `
        /* Styles des vidéos */
        .video-style {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 800px;
            border-radius: 1rem;
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
            margin-bottom: 1rem;
        }

        /* Boutons personnalisés */
        .btn-custom {
            background-color: var(--primary-color) !important;
            color: white !important;
            border: none;
        }
        .btn-custom:hover {
            background-color: #025e27ff !important;
        }

        /* Fond du formulaire */
        .form-fond {
            padding: 1rem;
        }

        /* Titre stylisé */
        h2 {
            flex: 0 0 100%;
            color: var(--primary-color);
            background-color: var(--primary-color);
            padding: 0.75rem 1rem;
            margin-bottom: 1rem;
            font-weight: normal;
            text-transform: uppercase;
            border-top: 3px solid var(--tertiary-color);
            border-bottom: 3px solid var(--tertiary-color);
            background: var(--white-color);
            text-align: center;
            font-size: 1.6rem;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-shadow: 0 0 1px #ffffff,
                         -1px 1px 0 #ADACAC,
                         -2px 2px 0 #ADACAC,
                         -3px 3px 0 #ADACAC,
                         -4px 4px 0 #ADACAC,
                         -4px 5px 15px black;
            transition: transform 0.3s, text-shadow 0.3s;
        }

        h2:hover {
            transform: scale(1.1);
            text-shadow: 0 0 1px #ffffff,
                         1px -1px 0 #ADACAC,
                         2px -2px 0 #ADACAC,
                         3px -3px 0 #ADACAC,
                         4px -4px 0 #ADACAC,
                         4px -5px 15px black;
        }

        /* Formulaire */
        .g-3 {
            background-color: #fff;
            padding: 2rem;
            border-radius: 3rem;
        }

        .form-control {
            border: 1px solid #dededeff;
            border-radius: 5px;
        }

        .form-control:focus {
            border-color: #025e27ff;
            box-shadow: 0 0 0 .25rem var(--primary-color);
        }

        /* Checkbox personnalisée */
        .form-check-input:checked {
            background-color: var(--primary-color);
            border-color: #025e27ff;
        }

        input[type="checkbox"]:focus {
            outline: none !important;
            box-shadow: 0 0 0 .25rem var(--primary-color);
        }

        /* Select (malgré les limites du navigateur) */
        .form-select {
            border: 1px solid #dededeff;
            border-radius: 5px;
            appearance: none !important;
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
        }

        .form-select:focus {
            border-color: #025e27ff;
            box-shadow: 0 0 0 .25rem var(--primary-color);
        }

        /* (ATTENTION : selon le navigateur, ces styles peuvent être ignorés) */
        .form-select option:checked {
            background-color: var(--primary-color) !important;
            color: #fff !important;
        }
        .form-select option:hover {
            background-color: var(--primary-color) !important;
            color: #fff !important;
        }
    `;
    
    shadow.appendChild(style);
});

