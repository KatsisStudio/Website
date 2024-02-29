window.addEventListener("load", _ => {

    // PROJECT MENU BUTTONS

    const buttons = document.querySelectorAll("#projects-container > div");
    for (let i = 1; i < buttons.length; i++)
    {
        buttons[i].classList.add("hidden");
    }

    for (let button of document.querySelectorAll("#projects-menu > button"))
    {
        button.addEventListener("click", _ => {
            for (let b of buttons)
            {
                b.classList.add("hidden");
            }
            document.getElementById(button.dataset.target).classList.remove("hidden");
        });
    }

    // PROJECT RENDERING
    let intervalFct;

    let displayImg;
    let displayPreviews;
    let displayIndex;

    function displayImages() {
        if (displayIndex == displayPreviews.length) {
            displayIndex = 0;
        }

        displayImg.src = displayPreviews[displayIndex];

        displayIndex++;
    }

    for (let project of document.getElementsByClassName("project-info")) {
        const previews = project.dataset.previews.split(';').filter(x => x !== "");

        if (previews.length > 0) {
            const img = project.querySelector("img");

            project.addEventListener("mouseover", _ => {
                img.src = previews[0];

                displayImg = img;
                displayPreviews = previews;
                displayIndex = 1;

                intervalFct = setInterval(displayImages, 1000);
            });
            project.addEventListener("mouseout", _ => {
                img.src = project.dataset.src;

                clearInterval(intervalFct);
            });
        }
    }

    for (let member of document.getElementsByClassName("member-info")) {
        const img = member.querySelector("img");

        member.addEventListener("mouseover", _ => {
            img.src = member.dataset.nsfw;
        });
        member.addEventListener("mouseout", _ => {
            img.src = member.dataset.sfw;
        });
    }

    for (let charac of document.getElementsByClassName("character-info")) {
        const img = charac.querySelector("img");

        charac.addEventListener("mouseover", _ => {
            img.src = charac.dataset.nsfw;
        });
        charac.addEventListener("mouseout", _ => {
            img.src = charac.dataset.sfw;
        });
    }
});