// Setting the variables and constants
const disable = document.querySelector('#disableBtn');
const input = document.getElementById('birthdayInput');
const findOut = document.getElementById('explore');

// event listener for the disable button
disable.addEventListener('click', disableAnimation => {
    document.getElementById('me').style.background = '#000000'; // background for old browsers
    document.getElementById('me').style.background = '-webkit-linear-gradient(to right, #000000, #434343)'; //for Chrome 10-25, Safari 5.1-6
    document.getElementById('me').style.background = 'linear-gradient(to right, #000000, #434343)'; // W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+

    disable.remove();
    document.getElementById('disclaimer').remove();
    // document.getElementById('enjoy').style.visibility = 'visible';
    const x = document.getElementById('enjoy');
    setTimeout(function () {
        x.style.visibility = 'visible'; // time function to display the enjoy text
    }, 1000);
    setTimeout(function () {
        x.style.visibility = 'hidden'; // time function to remove the enjoy text
    }, 3000);
});

// event for find out button
findOut.addEventListener('click', find => {
    // validation for input value
    if (input.value === '') {
        let error = document.querySelector('.error');
        error.style.display = 'block'; // time function to show error message

        setTimeout(function () {
            error.style.display = ''; // time function to remove error message
        }, 2500);
    }
    // getting users date of birth
    let date = new Date(input.value); // users date 

    // getting current date 
    let cDate = new Date();

    /*  using moment js */
    

    var a = moment(date); //users date
    var b = moment(cDate); // current date
    var years = b.diff(a, 'years'); // difference in years
    var months = b.diff(a, 'months'); // difference in months
    var weeks = b.diff(a, 'weeks'); // difference in weeks
    var days = b.diff(a, 'days'); // difference in days
    var hours = b.diff(a, 'hours'); // difference in hours
    var minutes = b.diff(a, 'minutes'); // difference in minutes

    // setting the values to the DOM
    document.getElementById('years').innerHTML = years;
    document.getElementById('months').innerHTML = months;
    document.getElementById('weeks').innerHTML = weeks;
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;

  
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