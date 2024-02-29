 // seetig the date we are counting to
 var countDownDate = new Date("may 30, 2024 00:00:00").getTime();
      
 // Update the countdown every 1 second
 var x = setInterval(function() {

   // Get the current date and time
   var now = new Date().getTime();

   // Find the distance between now and the countdown date
   var distance = countDownDate - now;

   // Calculate time units
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with class="timing"
   document.querySelector('.timing').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   // If the countdown is over, display a message
   if (distance < 0) {
     clearInterval(x);
     document.querySelector('.timing').innerHTML = "EXPIRED";
   }
 }, 1000);