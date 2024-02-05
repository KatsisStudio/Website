window.addEventListener("load", _ => {
    if (sessionStorage.getItem("consent") === "true") {
        document.getElementById("disclaimer").hidden = true;
        document.getElementById("content").hidden = false;
    }

    document.getElementById("entry-confirm").addEventListener("click", () => {
        sessionStorage.setItem("consent", "true");
        document.getElementById("disclaimer").hidden = true;
        document.getElementById("content").hidden = false;
    });

    document.getElementById("entry-deny").addEventListener("click", () => {
        window.location.href = "https://google.com";
    });
});