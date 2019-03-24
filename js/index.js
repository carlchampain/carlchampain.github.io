window.addEventListener('load', function eventHandler() {
    document.getElementsByClassName('nav-item')[0];
    document.getElementsByClassName('icon')[0].addEventListener('click', clickedOnIcon, false);
    for (var i=0; i<3; i++) {
        if (i === 1) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnProjects, false);
        }
        if (i === 2) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnContact, false);
        }
        if (i === 0) {
            document.getElementsByClassName('active')[i].addEventListener('click', clickOnHome, false);
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

function clickedOnIcon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function clickOnContact() {   
    if (document.getElementsByClassName('title')[0] === undefined) {
        var contactTextTitle = "Contact";
        makeElement("h1", { className: "title" }, contactTextTitle);
    }
    if ( document.getElementsByClassName('title')[0].innerHTML === 'Projects' || 'Home') {
        document.getElementsByClassName('title')[0].remove();
        var contactTextTitle = "Contact";
        makeElement("h1", { className: "title" }, contactTextTitle);
    } 
    clickedOnIcon();  
}

function clickOnProjects() {
    if (document.getElementsByClassName('title')[0] === undefined) {
        var projTextTitle = "Projects";
        makeElement("h1", { className: "title" }, projTextTitle);
        
    }  
    if ( document.getElementsByClassName('title')[0].innerHTML === 'Contact' || 'Home') {
        document.getElementsByClassName('title')[0].remove();
        var projTextTitle = "Projects";
        makeElement("h1", { className: "title" }, projTextTitle);
    }  
    clickedOnIcon();
}

function clickOnHome() {
    if ( document.getElementsByClassName('title')[0].innerHTML === 'Contact' || 'Projects') {
        document.getElementsByClassName('title')[0].remove();
        var homeTextTitle = "Hi, I'm Carl from planet Earth.";
        makeElement("h1", { className: "title" }, homeTextTitle);
    }  
    clickedOnIcon();
}

function onLoadCreateHome() {
    var homeTextTitle = "Hi, I'm Carl from planet Earth.";
    makeElement("h1", { className: "title" }, homeTextTitle);
}
