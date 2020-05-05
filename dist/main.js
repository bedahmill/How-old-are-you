// Setting the variables and constants
const disable = document.querySelector('#disableBtn');
const input = document.getElementById('birthdayInput'); 
const findOut = document.getElementById('explore');

// event listener for the disable button
disable.addEventListener('click', disableAnimation =>{
    document.getElementById('me').style.background ='#000000'; // background for old browsers
    document.getElementById('me').style.background ='-webkit-linear-gradient(to right, #000000, #434343)'; //for Chrome 10-25, Safari 5.1-6
    document.getElementById('me').style.background ='linear-gradient(to right, #000000, #434343)'; // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+

    disable.remove();
    document.getElementById('disclaimer').remove();
    // document.getElementById('enjoy').style.visibility = 'visible';
    const x = document.getElementById('enjoy');
    setTimeout(function(){
         x.style.visibility = 'visible';  // time function to display the enjoy text
         }, 1000);    
    setTimeout(function(){
         x.style.visibility = 'hidden';  // time function to remove the enjoy text
         }, 3000);    
});

// event for find out button
findOut.addEventListener('click', find =>{
   let date = new Date(input.value);  // changing the input value to a date function
   let month = date.getMonth() +1;
   let day  = date.getDate();
   let year = date.getFullYear();


    console.log("Day is :"+ day);
    console.log('Month is' + month);
    console.log('Year is' + year);

    let tdate = new Date();
    let 
});


