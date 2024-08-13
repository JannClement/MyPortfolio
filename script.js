const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
"#0033A0",
"#0056A0",
"#0070A0",
"#0090A0",
"#00A0A0",
"#C8102E",
"#E84D4D",
"#F1C40F",
"#F7D24D",
"#FFFFFF",
"#E0E0E0",
"#B0B0B0",
"#A0A0A0",
"#8C8C8C",
"#707070"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


// cursor

const cursor = document.querySelector('.cursor');
const roundCursor = document.querySelectorAll('.round-cursor');

window.addEventListener("mousemove", ({ clientX, clientY }) => {
    gsap.to(cursor, {
        left: `${clientX}px`,
        top: `${clientY}px`,
    });
});

roundCursor.forEach(hover => {
    hover.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow', 'grow-shrink');
    });
    hover.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (hover.classList.contains('shrink')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-shrink');
        }
    });
});