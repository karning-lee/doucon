let currentOutputContent = ""

$('.box textarea').keyup(function() {
    $(".box p").html(this.value.replace(/\n/g, '<br/>'));
    currentOutputContent = this.value
});




function scramble(text) {
    let words = text.split(' ');
    words = words.map(word => {
        if (word.length > 2) {
            return word.split('').sort(() => 0.5-Math.random()).join('');
        }

        return word;
    });
    return words.join(' ');
}

console.log('running');
console.log(document.getElementById('input-scale-2'));


var scaleButtonAll = document.querySelectorAll('.input-scale-controller div span')
var scaleButtonAll2 = document.querySelectorAll('.output-scale-controller div span')

// text area
var textarea = document.getElementById('textarea');
var scaleButton1 = document.getElementById('input-scale-2');
scaleButton1.addEventListener('click', function(){
    textarea.style.fontSize = '18pt';
    textarea.style.lineHeight= '18pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton1.style.opacity = '1';
})

var scaleButton2 = document.getElementById('input-scale-2-1/3');
scaleButton2.addEventListener('click', function(){
    textarea.style.fontSize = '20.25pt';
    textarea.style.lineHeight= '20.25pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton2.style.opacity = '1';
})

var scaleButton3 = document.getElementById('input-scale-2-2/3');
scaleButton3.addEventListener('click', function(){
    textarea.style.fontSize = '24.75pt';
    textarea.style.lineHeight= '24.75pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton3.style.opacity = '1';
})

var scaleButton4 = document.getElementById('input-scale-3');
scaleButton4.addEventListener('click', function(){
    textarea.style.fontSize = '27pt';
    textarea.style.lineHeight= '27pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton4.style.opacity = '1';
})

var scaleButton5 = document.getElementById('input-scale-3-1/8');
scaleButton5.addEventListener('click', function(){
    textarea.style.fontSize = '31.5pt';
    textarea.style.lineHeight= '32pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton5.style.opacity = '1';
})

var scaleButton6 = document.getElementById('input-scale-4');
scaleButton6.addEventListener('click', function(){
    textarea.style.fontSize = '36pt';
    textarea.style.lineHeight= '36pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton6.style.opacity = '1';
})

var scaleButton7 = document.getElementById('input-scale-5');
scaleButton7.addEventListener('click', function(){
    textarea.style.fontSize = '45pt';
    textarea.style.lineHeight= '46pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton7.style.opacity = '1';
})

var scaleButton8 = document.getElementById('input-scale-6');
scaleButton8.addEventListener('click', function(){
    textarea.style.fontSize = '54pt';
    textarea.style.lineHeight= '54pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton8.style.opacity = '1';
})

var scaleButton9 = document.getElementById('input-scale-7');
scaleButton9.addEventListener('click', function(){
    textarea.style.fontSize = '63pt';
    textarea.style.lineHeight= '63pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton9.style.opacity = '1';
})

var scaleButton10 = document.getElementById('input-scale-8');
scaleButton10.addEventListener('click', function(){
    textarea.style.fontSize = '72pt';
    textarea.style.lineHeight= '63pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton10.style.opacity = '1';
})

var scaleButton11 = document.getElementById('input-scale-9');
scaleButton11.addEventListener('click', function(){
    textarea.style.fontSize = '81pt';
    textarea.style.lineHeight= '72pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton11.style.opacity = '1';
})

var scaleButton12 = document.getElementById('input-scale-10');
scaleButton12.addEventListener('click', function(){
    textarea.style.fontSize = '90pt';
    textarea.style.lineHeight= '81pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll[i].style.opacity = '0.5';
    }
    scaleButton12.style.opacity = '1';
})



// outputbutton
var output = document.getElementById('output');
var scaleButton13 = document.getElementById('output-scale-2');
scaleButton13.addEventListener('click', function(){
    output.style.fontSize = '18pt';
    output.style.lineHeight= '18pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton13.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton14 = document.getElementById('output-scale-2-1/3');
scaleButton14.addEventListener('click', function(){
    output.style.fontSize = '20.25pt';
    output.style.lineHeight= '20.25pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton14.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton15 = document.getElementById('output-scale-2-2/3');
scaleButton15.addEventListener('click', function(){
    output.style.fontSize = '24.75pt';
    output.style.lineHeight= '24.75pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton15.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton16 = document.getElementById('output-scale-3');
scaleButton16.addEventListener('click', function(){
    output.style.fontSize = '27pt';
    output.style.lineHeight= '27pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton16.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton17 = document.getElementById('output-scale-3-1/8');
scaleButton17.addEventListener('click', function(){
    output.style.fontSize = '31.5pt';
    output.style.lineHeight= '32pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton17.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton18 = document.getElementById('output-scale-4');
scaleButton18.addEventListener('click', function(){
    output.style.fontSize = '36pt';
    output.style.lineHeight= '36pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    scaleButton18.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton19 = document.getElementById('output-scale-5');
scaleButton19.addEventListener('click', function(){
    output.style.fontSize = '45pt';
    output.style.lineHeight= '46pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }

    scaleButton19.style.opacity = '1';
    output.innerHTML = currentOutputContent;
})

var scaleButton20 = document.getElementById('output-scale-6');
scaleButton20.addEventListener('click', function(){
    output.style.fontSize = '54pt';
    output.style.lineHeight= '54pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    
    output.innerHTML = scramble(output.textContent);
    scaleButton20.style.opacity = '1';
})

var scaleButton21 = document.getElementById('output-scale-7');
scaleButton21.addEventListener('click', function(){
    output.style.fontSize = '63pt';
    output.style.lineHeight= '63pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    output.innerHTML = scramble(output.textContent);
    scaleButton21.style.opacity = '1';
})

var scaleButton22 = document.getElementById('output-scale-8');
scaleButton22.addEventListener('click', function(){
    output.style.fontSize = '72pt';
    output.style.lineHeight= '63pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    output.innerHTML = scramble(output.textContent);
    scaleButton22.style.opacity = '1';
})

var scaleButton23 = document.getElementById('output-scale-9');
scaleButton23.addEventListener('click', function(){
    output.style.fontSize = '81pt';
    output.style.lineHeight= '72pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    output.innerHTML = scramble(output.textContent);
    scaleButton23.style.opacity = '1';
})

var scaleButton24 = document.getElementById('output-scale-10');
scaleButton24.addEventListener('click', function(){
    output.style.fontSize = '90pt';
    output.style.lineHeight= '81pt';
    for (var i = 0; i<scaleButtonAll.length; i++){
        scaleButtonAll2[i].style.opacity = '0.5';
    }
    output.innerHTML = scramble(output.textContent);
    scaleButton24.style.opacity = '1';
})

// outputrandom

// var elem = document.getElementById('box');

// elem.textContent = elem.textContent.split('').map((v) =>
//   Math.round(Math.random()) ? v.toUpperCase() : v.toLowerCase()
// ).join('');

// var scaleButton = document.querySelectorAll('.input-scale-controller div span');
// function buttonSelector(){
//     for (var i = 0; i<scaleButton.length; i++){
//         scaleButton[i].addEventListener('click', function(){
//             // textarea.style.fontSize = '20pt';
//             scaleButton[i].style.opacity = '1';
//         })
//     }
// }

// buttonSelector();

// console.log('style:' + scaleButton[1].style);
// console.log(scaleButton);