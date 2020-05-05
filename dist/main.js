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
    // getting users date of birth
   let date = new Date(input.value);   // users date 
//    let month = date.getMonth() +1; // users month
//    let day  = date.getDate(); // users day
//    let year = date.getFullYear(); // users year

   // getting current date 
    let cDate = new Date();
    // let cMonth = cDate.getMonth()+1;
    // let cDay = cDate.getDate();
    // let cYear = cDate.getFullYear();

//  using moment js
    // get difference in years
    var a = moment(date);
    var b = moment(cDate);
    var years = b.diff(a,'years');
    console.log('Years is:' + years);

    // get difference in Months
    var a = moment(date);
    var b = moment(cDate);
    var months = b.diff(a,'months');
    console.log('Months is:' + months)

    // get difference in weeks
    var a = moment(date);
    var b = moment(cDate);
    var weeks = b.diff(a,'weeks');
    console.log('weeks is:' + weeks)

    // get difference in days
    var a = moment(date);
    var b = moment(cDate);
    var days = b.diff(a,'days');
    console.log('Days is:' + days)
});



//using ordinary js 

    /* getting year difference
    
    let difYear = cYear - year;
    if(cMonth === month){  //if months are the same then check days
        if(cDay<day){
            difYear = difYear -1;
        }
    }else{
        if(cMonth < month){  // if current month is less than birthday month
            difYear = difYear -1;
        }
    }
    console.log("You are " + difYear + " years old.")
  
    // getting the number of months  and difference in current month and users birthday month
    let numberOfMonths; 
    numberOfMonths = (cYear - year) * 12 + (cMonth - month) - 1;  // both months in finding the difference are excluded
    console.log('You are '+ numberOfMonths + ' months old'); 
    */


