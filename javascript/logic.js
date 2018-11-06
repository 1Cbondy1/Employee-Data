// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// var config = {

//   };
// firebase.initializeApp(config);

// // Create a variable to reference the database
// var database = firebase.database();


// Initial Values
var initialName = "No one";
var initialRole = "No role";
var initialDay = "No start day";
var initialRate = "No rate";



// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
// database.ref().on("value", function(snapshot) {

//   // If Firebase has a highPrice and highBidder stored (first case)
//   if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

//     // Set the variables for highBidder/highPrice equal to the stored values in firebase.
//     highBidder = snapshot.val().highBidder;
//     highPrice = snapshot.val().highPrice;


//     // Change the HTML to reflect the stored values
//     $("#highest-bidder").text(highBidder);
//     $("#highest-price").text(highPrice);


//     // Print the data to the console.
//     $("#highest-bidder").text(highBidder);
//     $("#highest-price").text(highPrice);
//   }

//   // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
//   else {

//     // Change the HTML to reflect the initial values
//     $("#highest-bidder").text(highBidder);
//     $("#highest-price").text(highPrice);


//     // Print the data to the console.
//     console.log("highBidder: " + highBidder);
//     console.log("highPrice: " + highPrice);
//   }


// // If any errors are experienced, log them to console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var name = $("#addName").val();
  var role = $("#addRole").val();
  var startDay = $("#addStartDay").val();
  var rate = $("#addRate").val();
  var monthsWorked = 0;
  var totalBilled = 0;


  // Log the Bidder and Price (Even if not the highest)
  console.log(name);
  console.log(role);
  console.log(startDay);
  console.log(rate);
  console.log(monthsWorked);
  console.log(totalBilled);

    // Save info in Firebase
  // database.ref().push({
  //   name: name,
  //   role: role,
  //   start-day: startDay,
  //   monthly-rate: rate,
  //   months-worked: monthsWorked,
  //   total-billed: totalBilled
  // });

  // console.log("Employee Name: " + name);
  // console.log("Role: " + name);
  // console.log("Employee Name: " + name);
  // console.log("Employee Name: " + name);
  // console.log("Employee Name: " + name);
  // console.log("Employee Name: " + name);

// Change the HTML to reflect the new high price and bidder
  $("#employee-name").append(name);
  $("#role").append(role);
  $("#start-day").append(startDay);
  $("#months-worked").append(monthsWorked);
  $("#monthly-rate").append(rate);
  $("#total-billed").append(totalBilled);

});
