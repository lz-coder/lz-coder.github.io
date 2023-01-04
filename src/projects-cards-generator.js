const page_projects_container = document.querySelector(".page-container > .projects-section");

function createProjectCard(title, img, desc, url, sourceUrl) {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const card_figure = document.createElement("figure");
    card_figure.classList.add("card-figure");
    const card_figure_img = document.createElement("img");
    card_figure_img.classList.add("card-figure-img");
    card_figure_img.src = img;

    const card_title = document.createElement("h3");
    card_title.classList.add("card-title");
    card_title.innerText = title;

    const card_desc = document.createElement("p");
    card_desc.classList.add("card-description");
    card_desc.innerText = desc;

    const view_button = document.createElement("div");
    view_button.className = "card-button project-view-button";
    const view_button_icon = document.createElement("span");
    view_button_icon.className = "fa fa-play";
    view_button.appendChild(view_button_icon);
    view_button.addEventListener('click', () => {
        window.open(url, "_blank");
    });

    const source_button = document.createElement("div");
    source_button.className = "card-button project-source-button";
    const source_button_icon = document.createElement("span");
    source_button_icon.className = "fa fa-file";
    source_button.appendChild(source_button_icon);
    source_button.addEventListener('click', () => {
        window.open(sourceUrl, "_blank");
    });


    card_figure.addEventListener('mouseenter', () => {
        card_figure_img.style.filter = "grayscale(90%)";
        card_figure.appendChild(view_button);
        card_figure.appendChild(source_button);
        const card_buttons = card_figure.querySelectorAll(".card-button");
        card_buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = "scale(1.2)";
            });
            button.addEventListener('mouseleave', () => {
                button.style.transform = "scale(1)";
            });
        });
    });
    card_figure.addEventListener('mouseleave', () => {
        card_figure_img.style.filter = "grayscale(0)";
        card_figure.removeChild(view_button);
        card_figure.removeChild(source_button);
    })

    card.appendChild(card_title);
    card_figure.appendChild(card_figure_img);
    card.appendChild(card_figure);
    card.appendChild(card_desc);
    page_projects_container.appendChild(card);
}

async function generateProjectCards() {
    await fetch("./projects.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                createProjectCard(
                    element.name, element.image, element.desc,
                    element.url, element.sourceUrl
                );
            });
        });
}

generateProjectCards();

