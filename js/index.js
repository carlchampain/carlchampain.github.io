window.addEventListener('load', function eventHandler() {
    document.getElementsByClassName('nav-item')[0];
    document.getElementsByClassName('icon')[0].addEventListener('click', clickedOnIcon, false);
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

function clickedOnIcon() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function clickOnContact() { 
    var nodeDOM = document.getElementsByClassName('title')[0];
    // if (nodeDOM === undefined) {
    //     var contactTextTitle = "Contact";
    //     makeElement("h1", { className: "title" }, contactTextTitle);
    // }
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
        var contactTextTitle = "Contact";
        makeElement("h1", { className: "title" }, contactTextTitle);
    } 
    clickedOnIcon();  
}

function clickOnProjects() {
    var nodeDOM =  document.getElementsByClassName('title')[0];  
    // if (nodeDOM === undefined) {
    //     var projTextTitle = "Projects";
    //     makeElement("h1", { className: "title" }, projTextTitle);  
    // }  
    if ( nodeDOM.innerHTML === 'Contact' || 'Home') {
        //NOT NECESSARY WHEN EACH PAGE HAS CONTENT WITH SAME NESTED TREE
        while (nodeDOM.nextSibling) {
            nodeDOM.nextSibling.remove(); 
        } 
        nodeDOM.remove();
        var projTextTitle = "Projects";
        makeElement("h1", { className: "title" }, projTextTitle);
    }  
    clickedOnIcon();
}
function homePage() {
    var homeTextTitle = "Hi, I'm Carl from planet Earth.";
    makeElement("p", { className: "title" }, "I'm test #2");
    makeElement("p", { className: "title" }, "I'm just lil'test bro mate...");
    makeElement("h1", { className: "title" }, homeTextTitle);
}

function clickOnHome() {
    var nodeDOM =  document.getElementsByClassName('title')[0]; 
    if ( nodeDOM.innerHTML === 'Contact' || 'Projects') {
        while (nodeDOM.nextSibling) {
            nodeDOM.nextSibling.remove(); 
        }
        nodeDOM.remove();
        homePage();
    }  
    clickedOnIcon();
}

function onLoadCreateHome() {
    homePage();
}
