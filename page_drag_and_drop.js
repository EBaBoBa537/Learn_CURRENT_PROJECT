var elements = document.querySelectorAll(".element");
var redact_dobavit_text = document.getElementById("redact_dobavit_text");
var redact_dobavit_image = document.getElementById("redact_dobavit_image");
var redact_dobavit_block = document.getElementById("redact_dobavit_block");
var redact_dobavit_spisok = document.getElementById("redact_dobavit_spisok");
var redact_dobavit_zagolovok = document.getElementById("redact_dobavit_zagolovok");
var redact_dobavit_podzagolovok = document.getElementById("redact_dobavit_podzagolovok");


var topPosition = 82; 
for (var i = 0; i < elements.length + 1; i++) {
    var div = document.createElement("div");
    div.className = "droppable";
    div.style = "position: absolute; left: 353px; top: " + topPosition + "px; width: 1010px; z-index: 1000"; 
    div.style.pointerEvents = 'none';
    div.id = "droppable_" + (i + 1);

    var div_in = document.createElement("div");
    div_in.className = "in_droppable";
    div_in.style = "position: relative; display: none; width: calc(100% - 75px); margin-left: 37px; height: 15px; background-image: url('materials/images/redact_fon_1.png'), url('materials/images/redact_fon_1.png'), url('materials/images/redact_fon_2.png'), url('materials/images/redact_fon_2.png'); background-repeat: repeat-x, repeat-x, repeat-y, repeat-y; background-position: top, bottom, right, left; background-size: 30px 2px, 30px 2px, 2px 30px, 2px 30px;"; 
    

    if (i === 0) {
        var firstDivHeight = 45 + 125 + (elements.length > 0 ? (elements[0].offsetHeight / 2) : 0) + 1 + calculateDobav(elements[0]);
        div.style.height = firstDivHeight + "px";
        div_in.style.marginTop = 45 + 125 + ((calculateDobav(elements[0]) - 21) / 2) + "px";
    } else if (i === elements.length) {
        var lastElement = elements[elements.length - 1];
        div.style.height = (lastElement.offsetHeight / 2) + calculateDobav(lastElement) + 1 + "px";
        div_in.style.marginTop = (lastElement.offsetHeight / 2) + ((calculateDobav(lastElement) - 21) / 2) + "px";
    } else {
        var currentElement = elements[i - 1];
        var nextElement = elements[i];
        div.style.height = (currentElement.offsetHeight / 2 + nextElement.offsetHeight / 2) + 1 + calculateDobav(nextElement) + "px";
        div_in.style.marginTop = (currentElement.offsetHeight / 2) + ((calculateDobav(nextElement) - 21) / 2) + "px";
    }

    div.appendChild(div_in);
    topPosition += parseInt(div.style.height);
    document.body.appendChild(div);
}
var droppables = document.querySelectorAll(".droppable");

function calculateDobav(element) {
    if (element.classList.contains("p") || element.classList.contains("spisok")) {
        return 25;
    } else if (element.classList.contains("zagolovok")) {
        return 55;
    } else if (element.classList.contains("podzagolovok")) {
        return 45;
    } else if (element.classList.contains("block") || element.classList.contains("image")) {
        return 30;
    } else {
        return 0;
    }
}



/* ----------------- drag and drop ------------------------------------------------------------------------------------------- */



let currentDroppable = null;
let droppableBelow = null;
let droppedLast = null;


function makeElementDraggable(element) {
    var parent = element.parentNode;

    element.onmousedown = function(event) {

        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
    
        element.style = 'position: absolute; width: 180px; height: 50px; border-radius: 8px; cursor: grabbing; user-select: none; z-index: 1000; background-size: 180px 50px;';
        document.body.append(element);
    
        moveAt(event.pageX, event.pageY);
    
        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            moveAt(event.pageX, event.pageY);

            droppables.forEach(function(droppable) {
                var rect = droppable.getBoundingClientRect();
                var droppableLeft = rect.left;
                var droppableTop = rect.top;
                var droppableWidth = droppable.offsetWidth;
                var droppableHeight = droppable.offsetHeight;
        
                if (mouseX >= droppableLeft && mouseX <= droppableLeft + droppableWidth &&
                    mouseY >= droppableTop && mouseY <= droppableTop + droppableHeight) {
                    droppableBelow = droppable;
                }
            });

            if (currentDroppable != droppableBelow) {
                if (currentDroppable) {
                    currentDroppable.querySelector(".in_droppable").style.display = "none";
                    // console.log("from " + currentDroppable.id);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    currentDroppable.querySelector(".in_droppable").style.display = "block";
                    // console.log("to " + currentDroppable.id);
                }
            }
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        element.onmouseup = function(event) {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
            element.style = 'position: relative; top: 0px; left: 0px; width: 180px; height: 50px; border-radius: 8px; cursor: grab; user-select: none; z-index: 1000; background-size: 180px 50px;';
            parent.append(element);

            var mouseX = event.clientX;
            var mouseY = event.clientY;

            droppables.forEach(function(droppable) {
                var rect = droppable.getBoundingClientRect();
                var droppableLeft = rect.left;
                var droppableTop = rect.top;
                var droppableWidth = droppable.offsetWidth;
                var droppableHeight = droppable.offsetHeight;
        
                if (mouseX >= droppableLeft && mouseX <= droppableLeft + droppableWidth &&
                    mouseY >= droppableTop && mouseY <= droppableTop + droppableHeight) {
                    droppedLast = droppable;
                    droppedLast.querySelector(".in_droppable").style.display = "none";
                    currentDroppable = null;
                    droppableBelow = null;
                    // console.log("dropped at " + droppedLast.id);
                } 
            });
        };
    };
    
    element.ondragstart = function() {
        return false;
    };
}



const draggableElements = document.querySelectorAll('#redact_dobavit_text, #redact_dobavit_image, #redact_dobavit_block, #redact_dobavit_spisok, #redact_dobavit_zagolovok, #redact_dobavit_podzagolovok');
  
draggableElements.forEach(element => {
    makeElementDraggable(element);
});
  

