var sar = document.getElementById('top');
var img=document.querySelector('img');
sar.addEventListener('click', function() {
    bordered("4px solid black", boyut);
});

function bordered(a,callback) {
        sar.style.border=a;
        sar.style.boxSizing='border-box'; 
        callback(150, 180);
}

function boyut(w, h) {
    var set = setTimeout(function() {
        img.style.width = w;
        img.style.height = h;
    }, 2000);
}