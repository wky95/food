
function Clicked(btn) {
    const img = btn.querySelector("img");
    
    console.log(img.src);

    console.log(img.alt);
    console.log(img.src);
    
    if (img.alt == "Black stone") {
        img.src = "Assets/whitestone.png";
        img.alt = "White stone";
    } else {
        img.src = "Assets/blackstone.png";
        img.alt = "Black stone";
    }
}