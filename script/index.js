function fillImage() { 
    let elem = document.getElementById("achive");

    for (let i = 1; i != 17; i ++) {
        let pic = new Image();
        pic.scr = "image/" + i + ".jpg";
        elem.appendChild(pic);
    }
}
