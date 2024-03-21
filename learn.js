
// -------------------------------- ПРОКРУТКА 1 -------------------------------



// var isScrolling = false;

// document.getElementById('scrollable').addEventListener('wheel', function(e) {
//     e.preventDefault();
//     if (!isScrolling) {
//         var scrollLeft = this.scrollLeft;
//         var delta = e.deltaY > 0 ? 200 : -200;
//         var target = scrollLeft + delta;
//         animateScroll(this, scrollLeft, target, 500); // 500 мс для скорости анимации
//     }
// });

// function animateScroll(element, start, target, duration) {
//     isScrolling = true;
//     var startTime = performance.now();
//     function step(currentTime) {
//         var elapsedTime = currentTime - startTime;
//         var progress = Math.min(elapsedTime / duration, 1);
//         element.scrollLeft = start + (target - start) * progress;
//         if (progress < 1) {
//             requestAnimationFrame(step);
//         } else {
//             isScrolling = false; 
//         }
//     }
//     requestAnimationFrame(step);
// }



// -------------------------------- ПРОКРУТКА 2 -------------------------------



// var isScrolling = false;

// document.getElementById('scrollable').addEventListener('wheel', function(e) {
//     e.preventDefault();
//     if (!isScrolling) {
//         var scrollLeft = this.scrollLeft;
//         var delta = e.deltaY > 0 ? 200 : -200;
//         var target = scrollLeft + delta;
//         animateScroll(this, scrollLeft, target, 500); // 500 мс для скорости анимации
//     }
// });

// function animateScroll(element, start, target, duration) {
//     isScrolling = true;
//     var startTime = null;
//     function step(currentTime) {
//         if (!startTime) {
//             startTime = currentTime;
//         }
//         var elapsedTime = currentTime - startTime;
//         var progress = Math.min(elapsedTime / duration, 1);
//         progress = easeInOutQuad(progress);
//         element.scrollLeft = start + (target - start) * progress;
//         if (progress < 1) {
//             requestAnimationFrame(step);
//         } else {
//             isScrolling = false;
//         }
//     }
//     requestAnimationFrame(step);
// }

// function easeInOutQuad(t) {
//     return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
// }


// -------------------------------- КУРСОР МЫШИ -------------------------------

var scrollableElement = document.getElementById('scrollable');
var scrollSpeed = 20; // Скорость прокрутки
var scrollAreaWidth = 200; // Ширина области прокрутки

var scrollDirection = 0; // Направление прокрутки (0 - не прокручивается, -1 - влево, 1 - вправо)
var scrollIntervalId = null; // Идентификатор интервала прокрутки

scrollableElement.addEventListener('mousemove', function(e) {
    var mouseX = e.clientX; // Получаем координату X курсора мыши
    var containerWidth = scrollableElement.offsetWidth; // Ширина элемента
    var scrollLeft = scrollableElement.scrollLeft; // Текущее положение прокрутки
    
    // Определяем расстояние до левой и правой границы элемента
    var distanceToLeftEdge = mouseX;
    var distanceToRightEdge = containerWidth - mouseX;

    // Если курсор находится в области прокрутки слева, устанавливаем направление прокрутки влево
    if (distanceToLeftEdge < scrollAreaWidth) {
        scrollDirection = -1;
    }
    // Если курсор находится в области прокрутки справа, устанавливаем направление прокрутки вправо
    else if (distanceToRightEdge < scrollAreaWidth) {
        scrollDirection = 1;
    }
    // В противном случае прекращаем прокрутку
    else {
        scrollDirection = 0;
    }
});

scrollableElement.addEventListener('mouseleave', function() {
    // Если курсор ушел из элемента, останавливаем прокрутку
    scrollDirection = 0;
});

function scroll() {
    // Если есть направление прокрутки
    if (scrollDirection !== 0) {
        // Получаем текущее положение прокрутки
        var scrollLeft = scrollableElement.scrollLeft;
        // Прокручиваем элемент в соответствии с направлением прокрутки
        scrollableElement.scrollLeft += scrollDirection * scrollSpeed;
    }

    // Планируем следующий вызов функции с помощью requestAnimationFrame
    requestAnimationFrame(scroll);
}

// Запускаем прокрутку
scroll();