const image_slider = document.getElementById("image_slider");
let slider_titles = [];

const addImage = (img, name) => {
    if (img != null) {
        const image = document.createElement("img");
        image.className = "slider-image";
        image.src = img;
        image_slider.appendChild(image);
    }
}

async function getSliderImages() {
    await fetch("../projects.json")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                addImage(element.image);
                slider_titles.push(element.name);
            });
        });


    let currentPos = 0;
    const slider_images = image_slider.querySelectorAll(".slider-image");
    let endPos = slider_images.length - 1;

    const setImageSlider = () => {
        slider_images.forEach((element, index) => {
            if (index != currentPos) {
                element.style.display = "none";
            } else {
                element.style.display = "block";
                document.querySelector("#slider_title").innerText = slider_titles[index];
            }
        })
    }

    setImageSlider();

    setInterval(() => {
        { currentPos < endPos ? currentPos++ : currentPos = 0 }
        console.log(currentPos);
        setImageSlider();
    }, 5000)

}

getSliderImages();

