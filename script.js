const data = [
    {
        id : 1,
        author : "John Doe",
        designation : "Software Developer",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/1.jpg"
    },
    {
        id : 2,
        author : "Steve Doe",
        designation : "Software Designer",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/2.jpg"
    },
    {
        id : 3,
        author : "Morrish Johnson",
        designation : "FrontEnd Developer",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/3.jpg"
    },
    {
        id : 4,
        author : "Dave Will",
        designation : "Backend Developer",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/4.jpg"
    }
];


var authImg = document.querySelector("#author-img");
var authName = document.querySelector("#auth-name");
var authDegn = document.querySelector("#auth-degn");
var authDesc = document.querySelector("#auth-info");
var prevBtn = document.querySelector("#prev-btn");
var nxtBtn = document.querySelector("#nxt-btn");

var index = 0;
//show first item
window.addEventListener("DOMContentLoaded", function(){
    showAuthor(index);
});

//load author info
function showAuthor(author){
    var item = data[author];
    authImg.src = item.image;
    authName.textContent = item.author;
    authDegn.textContent = item.designation;
    authDesc.textContent = item.description;
}

//next button
nxtBtn.addEventListener("click", function(){
    index++;
    if(index > data.length-1){
        index = 0;
    }
    showAuthor(index);
});

//previous button
prevBtn.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = data.length - 1;
    }
    showAuthor(index);
});


//form
var inputFrm = document.querySelector("#info-frm");
inputFrm.addEventListener("submit", function(e){
    e.preventDefault();
    var name = e.target.name.value;
    var degn = e.target.desig.value;
    var desc = e.target.desc.value;

    data.push({
        author : name,
        designation : degn,
        description : desc,
        image : "images/5.jpg"
    });  
    alert("User added");
});