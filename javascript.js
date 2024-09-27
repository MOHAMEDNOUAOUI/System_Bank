var inputsrange = document.querySelectorAll('input[type="range"]');
var inputmonths = document.querySelector('.duree').querySelector('input[type="range"]') , 
    output = document.querySelector('.duree').querySelector('input[type="text"]')
;

var max;
var array = generatearray(120);
inputmonths.setAttribute("max" , array.length - 1);

inputmonths.oninput = function() {
    
    output.value = array[this.value];
}


inputmonths.oninput();



function generatearray (max) {
        const current = [];
        let start = 12;


        while(start <= max) {
            current.push(start);
            start = start+6;
        }
        max = max;

        return current;
}








// inputsrange.forEach((element) => {
//     element.addEventListener('input' , (event) => {
//         var closest_input_text = element.closest('div').querySelector('input[type="text"]');
//         if(closest_input_text) {
//             closest_input_text.value = event.target.value;
//         }
//     });
// })