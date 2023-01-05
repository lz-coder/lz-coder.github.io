const image_slider = document.getElementById("image_slider");
const slider_images = [];
const slider_titles = [];
const slider_current_image = document.getElementById("current_image");
const slider_next_image = document.getElementById("next_image");
const slider_title = document.getElementById("slider_title");

async function getSliderImages() {
    await fetch("../projects.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                slider_images.push(element.image);
                slider_titles.push(element.name);
            });
        });

    let actualImage = 0;
    let nextImage = 1;
    let lastImage = slider_images.length - 1;
    var currentWidth;

    const setSliderImages = (actual, next) => {
        slider_current_image.src = slider_images[actual];
        slider_title.innerText = slider_titles[actual];
        slider_next_image.src = slider_images[next];
        slider_next_image.style.display = "none";
        slider_current_image.style.transform = `translateX(0)`;
        console.log(currentWidth);
    }


    const renderSliderImages = (actual, next) => {
        currentWidth = `${slider_current_image.offsetWidth}`;
        slider_current_image.animate(
            [
                { transform: 'translateX(0)' },
                { transform: 'scale(1)' },
                { transform: 'scale(0.6)' },
                { transform: `translateX(-${currentWidth}px)` },
            ],
            {
                duration: 1200,
            }
        );
        slider_next_image.style.display = "block";

        slider_next_image.animate(
            [
                { transform: 'translateX(0)' },
                { transform: `translateX(-${currentWidth}px)` }
            ],
            {
                duration: 1200,
                delay: 500,
            }
        );
        slider_current_image.style.transform = `translateX(-${currentWidth + 100}px)`;
        setTimeout(() => {
            console.log(currentWidth);
            setSliderImages(actual, next);
        }, 1700);
    }

    setSliderImages(actualImage, nextImage);

    setInterval(() => {
        if (nextImage < lastImage) {
            actualImage = nextImage;
            nextImage = actualImage + 1;
        } else {
            actualImage = nextImage;
            nextImage = 0;
        }
        renderSliderImages(actualImage, nextImage);
    }, 5000);

}

getSliderImages();
