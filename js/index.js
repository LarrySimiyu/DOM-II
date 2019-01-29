let mouseEnter = document.querySelectorAll('header div nav .nav-link');
//console.log(mouseEnter);

for ( i = 0; i < mouseEnter.length; i++) {
    mouseEnter[i].addEventListener("mouseenter",  (event) => {   
        // highlight the mouseenter target
        //target.style.color = "red"
        event.target.style.color = "red";
        //console.log(event);
        //console.log("is this right"); 
    });
};

let mouseOut = document.querySelectorAll('header div nav .nav-link');

for (i = 0; i < mouseOut.length; i++) {
    mouseOut[i].addEventListener("mouseout", event => {
        event.target.style.color = "blue";
    });
}

//  let dblclickEvent = document.querySelectorAll('nav-link');

//  dblclickEvent.forEach(function (element){
//      dblclickEvent.addEventListener("dbclick", event => {
//          console.log("hella");
//         //event.target.style.color = "black";
//      })
   
//  });

 let mouseClick =  document.querySelectorAll('header div nav .nav-link');

 for(i = 0; i < mouseClick.length; i++) {
     mouseClick[i].addEventListener("click", event => {
         event.target.style.color = "green";
     });
 };

 let mouseDown =  document.querySelectorAll('header div nav .nav-link');

 for(i = 0; i < mouseClick.length; i++) {
     mouseDown[i].addEventListener("mousedown", event => {
         event.target.style.color = "purple";
     });
 };

 let mouseUp =  document.querySelectorAll('header div nav .nav-link');

 for(i = 0; i < mouseClick.length; i++) {
     mouseUp[i].addEventListener("mouseup", event => {
         event.target.style.color = "teal";
     });
 };


 let focusEvent = document.getElementsByClassName('img-content');

 for(i = 0; i < focusEvent.length; i++) {
    focusEvent[i].addEventListener("focus", event => {
        console.log("event");
    })
};



// let dragEvent = document.getElementsByClassName('');

// let loadEvent = document.getElementsByClassName(');

// let focusEvent = document.getElementsByClassName(');

// let resizeEvent = document.getElementsByClassName('');

// let scrollEvent = document.getElementsByClassName('');

// let selectEvent = document.getElementsByClassName('nav-link');

