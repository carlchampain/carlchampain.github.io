window.addEventListener('load', function eventHandler() {
    // document.getElementsByClassName('nav-item')[0];
    document.getElementsByClassName('icon')[0].addEventListener('click', clickedOnIcon, false);
    document.getElementsByClassName("closebtn")[0].addEventListener('click', clickedCloseBtn, false);
    for (var i=0; i<3; i++) {
        if (i === 0) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnHome, false);
        } 
        if (i === 1) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnProjects, false);
        }
        if (i === 2) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnContact, false);
        }
    }  
        onLoadCreateHome();
    }, false
    );

function makeElement(type, props, text) {
    var newDiv = document.createElement(type);
    Object.keys(props).forEach(function(prop) {
        newDiv[prop] = props[prop];
       });
    var newContent = document.createTextNode(text); 
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("container"); 
    document.body.insertBefore(newDiv, currentDiv.nextSibling); 
}  
function makeChildElem(type, props, text) {
    var newDiv = document.createElement(type);
    Object.keys(props).forEach(function(prop) {
        newDiv[prop] = props[prop];
       });
    var newContent = document.createTextNode(text); 
    newDiv.appendChild(newContent);  
    document.getElementsByClassName('title')[0].appendChild(newDiv); 
} 

function handleLoadImg() {
    var imgTag = document.getElementsByTagName("img");
    for (var i = 0; i < imgTag.length; i++) {
        imgTag[i].className += " loaded";
    }
}

function loadForHomeImg() {
    var imageHome = document.getElementsByTagName("img");
    for (var i = 0; i < imageHome.length; i++) {
        imageHome[i].onload = function() {
            handleLoadImg();
        };
    };
}

function clickedOnIcon() {
    // var x = document.getElementById("myTopnav");
    // if (x.className === "topnav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "topnav";
    // }
    var menu = document.getElementsByClassName("sidenav")[0];
    menu.className += " open-sidenav";
    document.getElementById("myTopnav").style.opacity = 0.9;
}

function clickedCloseBtn() {
    var menu = document.getElementsByClassName("sidenav")[0];
    menu.className = "sidenav";
    document.getElementById("myTopnav").style.opacity = 1;
}

function clickOnContact() { 
    window.location = "#Contact";
    var nodeDOM = document.getElementsByClassName('title')[0];
    if ( nodeDOM.innerHTML === 'Projects' || 'Home') {
        while (nodeDOM.nextSibling) {
            nodeDOM.nextSibling.remove(); 
        } 
        nodeDOM.remove(); 
        var LinkedInLinkText = "This is my ";
        makeElement("p", { className: "title" }, LinkedInLinkText);
        makeChildElem(
            "a", 
            { 
                href: "https://linkedin.com/in/carl-champain-2901aa9a/",
                target: "_blank"
            }, 
            "LinkedIn profile"
        );     
        var contactTextTitle = "- Contact -";
        makeElement("h1", { className: "title" }, contactTextTitle);
    } 
    clickedCloseBtn();  
}

function clickOnProjects() {
    window.location = "#Projects";
    var nodeDOM =  document.getElementsByClassName('title')[0];  
    if ( nodeDOM.innerHTML === 'Contact' || 'Home') {
        //NOT NECESSARY WHEN EACH PAGE HAS CONTENT WITH SAME NESTED TREE
        while (nodeDOM.nextSibling) {
            nodeDOM.nextSibling.remove(); 
        } 
        nodeDOM.remove();
        var projTextTitle = "- Projects -";
        makeElement("p", { className: "title", id: "safarify" }, "");
        makeChildElem("img", { id: "safarifylogo", className: "imgHome", src: "./bear.png" }, "");
        var div = document.getElementById('safarify');
        div.innerHTML += "This is my web app ";
        makeChildElem(
            "a", 
            { 
                href: "https://safarify.herokuapp.com/",
                target: "_blank"
            }, 
            "Safarify"
        );
        div.innerHTML += '. Built with Node.js, React and Firebase DB, check it out on a mobile browser for best experience!';
        makeElement("h1", { className: "title" }, projTextTitle);
        loadForHomeImg();
    }  
    clickedCloseBtn();
}
function onLoadCreateHome() {
    window.location = "#Home";
    var homeTextTitle = "Hi, I am Carl from planet Earth.";
    makeElement("img", { className: "imgHome", id: "moi", src: "./moi.png" }, "");
    makeElement("h4", { className: "title" }, "This is a single page app built with plain javascript and css.");
    makeElement("h4", { className: "title" }, "I am a full stack web developer living in Brooklyn, NY.");
    makeElement("h1", { className: "title" }, homeTextTitle);
    loadForHomeImg();
}


function clickOnHome() {
    var nodeDOM =  document.getElementsByClassName('title')[0]; 
    if ( nodeDOM.innerHTML === 'Contact' || 'Projects') {
        while (nodeDOM.nextSibling) {
            nodeDOM.nextSibling.remove(); 
        }
        nodeDOM.remove();
        onLoadCreateHome();
    }  
    clickedCloseBtn();
}
