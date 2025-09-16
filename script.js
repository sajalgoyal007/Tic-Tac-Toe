// console.log(window.document);

// let firstVar = document.getElementById("container");
// console.log(firstVar.innerHTML);
// console.log(firstVar.innerText);
// console.log(firstVar.textContent);


// let mydiv = document.querySelector(".box");
// console.log(mydiv);
// let mydivs = document.querySelectorAll(".box");
// console.log(mydivs);

// mydivs.forEach(element => {
//     element.style.backgroundColor = "lightgreen";
// });


mydivs = document.getElementsByClassName("box");
for (let i = 0; i < mydivs.length; i++) {
    mydivs[i].style.backgroundColor = "lightblue";
    if(i%2==0){
 mydivs[i].style.backgroundColor = "purple";
    }else{
 mydivs[i].style.backgroundColor = "orange";
    }
}