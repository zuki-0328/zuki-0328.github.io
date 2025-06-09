const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "first-website/images/firefox-icon.png") {
    myImage.setAttribute("src", "first-website/images/firefox2.png");
  } else {
    myImage.setAttribute("src", "first-website/images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else { 
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName} !`;
    }
  }
  

  myButton.onclick = () => {
    setUserName();
  };
  
