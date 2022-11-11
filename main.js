const link_buttons = document.getElementsByClassName("link-button");
const contact_buttons = document.getElementsByClassName("contact-button");
const contact_email = document.querySelector(".contact-email");

function animateLinkButton (element, dir) {
    element.animate([
        {transform: "scale(1)"},
        {transform: "scale(1.2)"}
    ],
    {
        duration: 100,
        direction: dir
    });
    if (dir == "normal") {
        element.style.transform = "scale(1.2)";
        element.style.textShadow = "-2px 2px 4px #000";
    } else {
        element.style.transform = "scale(1)";
        element.style.textShadow = "none";
    }
}
function animateContactButton (element, dir) {
    element.animate([
        {transform: "scale(1)"},
        {transform: "scale(1.1)"}
    ],
    {
        duration: 200,
        direction: dir
    });
    if (dir == "normal") {
        element.style.transform = "scale(1.1)";
        element.style.boxShadow = "0 0 4px #000";
        element.style.zIndex = "1";
    } else {
        element.style.transform = "scale(1)";
        element.style.boxShadow = "none";
        element.style.zIndex = "0";
    }
}

for (let i = 0; i < link_buttons.length; i++) {
    link_buttons[i].addEventListener('mouseenter', function () {
        animateLinkButton(this, "normal");
    });
    link_buttons[i].addEventListener('mouseleave', function () {
        animateLinkButton(this, "reverse");
    });
}
for (let i = 0; i < contact_buttons.length; i++) {
    contact_buttons[i].addEventListener('mouseenter', function () {
        animateContactButton(this, "normal");
    });
    contact_buttons[i].addEventListener('mouseleave', function () {
        animateContactButton(this, "reverse");
    });
}

contact_email.addEventListener('mouseover', function () {
    animateContactButton(this, "normal");
});
contact_email.addEventListener('mouseout', function () {
    animateContactButton(this, "reverse");
});
