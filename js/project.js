window.addEventListener("load", _ => {
    for (let project of document.getElementsByClassName("project-info")) {
        const previews = project.dataset.previews.split(';').filter(x => x !== "");

        if (previews.length > 0) {
            const img = project.querySelector("img");

            project.addEventListener("mouseover", _ => {
                img.src = previews[0];
            });
            project.addEventListener("mouseout", _ => {
                img.src = project.dataset.src;
            });
        }
    }
});