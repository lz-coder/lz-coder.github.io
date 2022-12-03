const fa_links = document.querySelectorAll("a.fa");
const fa_links_pair = document.querySelectorAll("a.fa:nth-of-type(2n)");
const project_cards = document.getElementsByClassName("project-card");
var mouseOnCard = false;

function animateFaLinks(link, dir, minSize, maxSize) {
    link.animate([
        {transform: `scale(${minSize})`},
        {transform: `scale(${maxSize})`}
    ],
    {
        duration: 200,
        direction: dir
    });
    if (dir == "normal") {
        link.style.transform = `scale(${maxSize})`;
    } else {
        link.style.transform = `scale(${minSize})`;
    }
}

for (let i = 0; i < project_cards.length; i++) {
    project_cards[i].addEventListener('mouseenter', function() {
        console.warn(`enter ${mouseOnCard}`);
        if (mouseOnCard == false) {
            mouseOnCard = true;
            console.log(`enter if ${mouseOnCard}`);
        }
        if (mouseOnCard) {
            setTimeout( () => {
                animateFaLinks(this, "normal", 1, 1.1);
                this.style.zIndex = 1;
                this.style.boxShadow = "0 0 10px 5px #000"; 
                console.log("card time out!!!");
                }, 500);
        }
    });
    project_cards[i].addEventListener('mouseleave', function() {
        console.warn(`leave ${mouseOnCard}`);
        if (mouseOnCard == true) {
            mouseOnCard = false;
            console.log(`leave if ${mouseOnCard}`);
        }
        if (!mouseOnCard) {
            animateFaLinks(this, "reverse", 1, 1.1);
            this.style.zIndex = 0;
            this.style.boxShadow = "none";
        }
    });
}

for (let i = 0; i < fa_links_pair.length; i++) {
    if (fa_links_pair[i].nextElementSibling == null) {
        fa_links_pair[i].style.marginLeft = "0.3em";
    } else {
        fa_links_pair[i].style.margin = "0 0.3em";
    }
}

for (let i = 0; i < fa_links.length; i++) {
    fa_links[i].addEventListener('mouseover', () => {
        animateFaLinks(fa_links[i], "normal", 1, 1.4);
    }); 
    fa_links[i].addEventListener('mouseout', () => {
        animateFaLinks(fa_links[i], "reverse", 1, 1.4);
    })
}
