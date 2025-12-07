document.addEventListener("DOMContentLoaded", () => {

    const zone = document.getElementById("ma-zone-bootstrap");

    const shadow = zone.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    shadow.appendChild(link);

    const col = document.createElement("div");
    col.classList.add("row", "justify-content-center", "mb-4");
    
    shadow.appendChild(col);

    const innerCol = document.createElement("div");
    innerCol.classList.add("col-12", "col-md-6", "text-center");
    
    col.appendChild(innerCol);

    const btn1 = document.createElement("button");
    btn1.textContent = "Découvrez nos services";
    btn1.classList.add("btn", "btn-success", "btn-lg", "w-100", "rounded-pill", "btn-custom");
    
    const video1 = document.createElement("video");
    video1.src = "https://cdn.pixabay.com/video/2025/05/01/276047_large.mp4";
    video1.controls = true;
    video1.classList.add("video-style", "mt-3", "d-none");

    innerCol.appendChild(btn1);
    innerCol.appendChild(video1);
    
    const btn2 = document.createElement("button");
    btn2.textContent = "Découvrez de nouveaux horizons";
    btn2.classList.add("btn", "btn-success", "btn-lg", "w-100", "rounded-pill", "btn-custom");
    
    const video2 = document.createElement("video");
    video2.src = "https://cdn.pixabay.com/video/2023/09/01/178732-860527368_large.mp4"; 
    video2.controls = true;
    video2.classList.add("video-style", "mt-3", "d-none");
    
    innerCol.appendChild(btn2);
    innerCol.appendChild(video2);
  
    function hideVideo(video) {
        video.pause();
        video.classList.add("d-none");
    }

    btn1.addEventListener("click", () => {
        if (video1.classList.contains("d-none")) {
            video1.classList.remove("d-none");
            video1.play();
            hideVideo(video2);
        } else {
            hideVideo(video1);
        }
    });

    btn2.addEventListener("click", () => {
        if (video2.classList.contains("d-none")) {
            video2.classList.remove("d-none");
            video2.play();
            hideVideo(video1);
        } else {
            hideVideo(video2);
        }
    });

    const style = document.createElement("style");
    style.textContent = `
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
        .btn-custom {
            background-color: var(--primary-color) !important;  /* ta couleur */
            color: white !important;
            border: none;
        }
        .btn-custom:hover {
            background-color: #025e27ff !important;  /* couleur hover */
        }
    `;
    shadow.appendChild(style);
});
