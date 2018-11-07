// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

var config = {
  apiKey: "AIzaSyCs07CLz-PZ1b1lwSkBT3LZcuJm0oMOysc",
  authDomain: "employeedata-ed7c4.firebaseapp.com",
  databaseURL: "https://employeedata-ed7c4.firebaseio.com",
  projectId: "employeedata-ed7c4",
  storageBucket: "employeedata-ed7c4.appspot.com",
  messagingSenderId: "835517334784"
  };

firebase.initializeApp(config);

// // Create a variable to reference the database
var database = firebase.database();


// Initial Values
var initialName = "No one";
var initialRole = "No role";
var initialDay = "No start day";
var initialRate = "No rate";



// --------------------------------------------------------------

var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#addData").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
          // var name = $("#addName").val();
          // var role = $("#addRole").val();
          // var startDay = $("#addStartDay").val();
          // var rate = $("#addRate").val();
          // var monthsWorked = 0;
          // var totalBilled = 0;


  var name = $("#addName").val().trim();
  var role = $("#addRole").val().trim();
  var startDate = $("#addStartDay").val();
  var monthlyRate = parseInt($("#addRate").val());
  var startFormat = "MM/DD/YYYY";
  convertedDate = moment(startDate, startFormat);

  // Save info in Firebase

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,

    monthlyRate: monthlyRate


    });

  var monthsWorked = moment().diff(convertedDate, "months"); // positive number
  var totalBilled = monthsWorked * monthlyRate;


  // Log the Bidder and Price (Even if not the highest)

  console.log(name);
  console.log(role);
  console.log(startDate);
  console.log(monthsWorked);
  console.log(monthlyRate);
  console.log(totalBilled); 

// Change the HTML to reflect the new high price and bidder
  $("#employee-name").append(name);
  $("#role").append(role);
  $("#start-day").append(startDate);
  $("#months-worked").append(monthsWorked);
  $("#monthly-rate").append(monthlyRate);
  $("#total-billed").append(totalBilled);

});
