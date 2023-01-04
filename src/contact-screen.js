const contact_screen_container = document.createElement("div");
contact_screen_container.setAttribute("id", "contact_screen_container");
const contact_screen = document.createElement("div");
contact_screen.setAttribute("id", "contact_screen");

const close_button = document.createElement("i");
close_button.className = "close-button fa fa-close";
close_button.onclick = () => {
    document.querySelector("#contact_screen_container").remove();
}

const form = document.createElement("form");
form.setAttribute("id", "contact_form");
form.setAttribute("action", "https://formspree.io/f/mvonoaar");
form.setAttribute("method", "POST");
form.className = "flex dir-column ali-center";
const input_email = document.createElement("input");
input_email.setAttribute("placeholder", "Your email");
input_email.setAttribute("type", "email");
input_email.setAttribute("name", "email");
input_email.className = "form-input";
const input_subject = document.createElement("input");
input_subject.setAttribute("placeholder", "Subject");
input_subject.setAttribute("type", "text");
input_subject.setAttribute("name", "subject");
input_subject.className = "form-input";
const input_message = document.createElement("textarea");
input_message.setAttribute("placeholder", "Your message...");
input_message.setAttribute("name", "message");
input_message.className = "form-input";
const input_submit_button = document.createElement("button");
input_submit_button.setAttribute("type", "submit");
input_submit_button.innerText = "Submit";
input_submit_button.className = "form-button";

const social_links_container = document.createElement("div");
social_links_container.setAttribute("id", "social_links_container");
social_links_container.className = "flex dir-column ali-center";

function createSocialLink(url, faIcon) {
    const social_link = document.createElement("div");
    social_link.className = "social-link flex ali-center";
    const social_link_icon = document.createElement("span");
    social_link_icon.className = `fab ${faIcon} social-link-icon`;

    social_link.onclick = () => {
        window.open(url, "_blank");
    }

    social_link.appendChild(social_link_icon);

    return social_link;
}

const github_social_link = createSocialLink("https://github.com/lz-coder", "fa-github");
const linkedin_social_link = createSocialLink("https://linkedin.com/", "fa-linkedin");
const instagram_social_link = createSocialLink("https://instagram.com/", "fa-instagram");

social_links_container.appendChild(github_social_link);
social_links_container.appendChild(linkedin_social_link);
social_links_container.appendChild(instagram_social_link);

form.appendChild(input_email);
form.appendChild(input_subject);
form.appendChild(input_message);
form.appendChild(input_submit_button);

contact_screen.appendChild(close_button);
contact_screen.appendChild(form);
contact_screen.appendChild(social_links_container);
contact_screen_container.appendChild(contact_screen);

function showContactScreen() {
    document.querySelector("body").append(contact_screen_container);
    const form_inputs = document.querySelectorAll(".form-input");
    form_inputs.forEach(input => {
        input.setAttribute("required", "true");
    });
}
