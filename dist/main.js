
// Setting the variables and constants
const disable = document.querySelector('#disableBtn');
let bodyFx= document.querySelector('.bodyAnimation')

// event listener for the disable button

disable.addEventListener('click', disableAnimation =>{
    document.getElementById('me').style.background ='#000000'; // background for old browsers
    document.getElementById('me').style.background ='-webkit-linear-gradient(to right, #000000, #434343)'; //for Chrome 10-25, Safari 5.1-6
    document.getElementById('me').style.background ='linear-gradient(to right, #000000, #434343)'; // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+

    disable.remove();
    document.getElementById('disclaimer').remove();
    document.getElementById('enjoy').style.visibility = 'visible';

});

