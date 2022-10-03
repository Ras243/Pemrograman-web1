// menyiapkan canvas
const mycanvas = document.querySelector('#mycanvas');

// atur ukuran canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// tentukan context
const c = mycanvas.getContext('2d');

// manipulasi kotak
c.fillStyle = 'pink';
c.strokeStyle = '#999';
c.lineWidth = '5';

c.rect(100, 100, 300, 300);
c.fill();
c.stroke();