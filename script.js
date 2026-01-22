

function onButtonClick() {
    
    const nameElement = document.querySelector("input[name=name]");
    const ageElement = document.querySelector("input[name=age]");
    const robotTypeElement = document.querySelector("select[name=robot-type]");
    
    const name = nameElement.value;
    const age = ageElement.value;
    const robotType = robotTypeElement.value;

    if (name == "" || age == "" || robotType == "") {
        nameElement.classList.add("site-form-input-error");
        ageElement.classList.add("site-form-input-error");
        return
    }

    nameElement.classList.remove("site-form-input-error");
    ageElement.classList.remove("site-form-input-error");
    
    
    const imageUrl = getImageUrl(name, age, robotType);
    const robotImageElement = document.querySelector("#robot-image");
    robotImageElement.src = imageUrl;

    const outputTitleElement = document.querySelector(".site-output-box-title");
    outputTitleElement.innerHTML = name;

    const outputElement = document.querySelector(".site-output-box");
    outputElement.classList.remove("hide");
}

function getImageUrl(name, age, robotType) {
    let apiUrl = "https://robohash.org/";
    apiUrl = apiUrl + name + age;

    apiUrl += "?size=500x500";
    if (robotType !== "robot") {
        apiUrl += "&set="
        if (robotType === "monster") {
            apiUrl += "set2"
        } else if (robotType === "suave") {
            apiUrl += "set3"
        } else if (robotType === "kitten") {
            apiUrl += "set4"
        }
    }

    return apiUrl;
}

const formButtonElement = document.querySelector(".site-form-button");
formButtonElement.addEventListener("click", onButtonClick);