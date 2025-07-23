const getcolor = () => {
const randomnumber = Math.floor(Math.random() * 16777215);
const colorcode = "#" + randomnumber.toString(16);
document.getElementById("color-code").innerText = colorcode ;
document.body.style.backgroundColor = colorcode;

navigator.clipboard.writeText(colorcode);
}

//event call
document.getElementById("btn").addEventListener("click",getcolor);

//initial call
getcolor();