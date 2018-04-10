var config = {
  apiKey: "AIzaSyDK5h4W7uDYGaqx9QbiajmSbIGwZ6XsKTo",
  authDomain: "testproject-2286c.firebaseapp.com",
  databaseURL: "https://testproject-2286c.firebaseio.com",
  projectId: "testproject-2286c",
  storageBucket: "testproject-2286c.appspot.com",
  messagingSenderId: "716275202251"
};

firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

//code for handaling the push
database.ref().push({
  employeeName: name,
  role: role,
  startDate: date,
  monthsWorked: number,
  totalBilled: number,
})
var connectionsRef = database.ref("/connections");

    // Initial Values
    var trainName = "";
    var Destination = "";
    var trainTime = "";
    var Frequency = 0;
    

    // Capture Button Click
    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Don't forget to provide initial data to your Firebase database.
      trainTime = $("#name-input").val().trim();
      destination= $("#destination-input").val().trim();
      trainTime= $("#trainTime-input").val().trim();
      frequency = $("#fequency-input").val().trim();
    });
    database.ref().set({
        train:train,
        destination:destination,
        trainTime:trainTime,
        frequency:frequency,
    });

    // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    dataRef.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().Destination);
      console.log(childSnapshot.val().trainTime);
      console.log(childSnapshot.val().frequency);

      $("#displayed-data").text(snapshot.val().trainName + " | " + snapshot.val().destination + " | " + snapshot.val().trainTime+ " | " + snapshot.val().frequency);

      // full list of items to the well
      $("#full-member-list").append("<div class='well'><span class='member-name'> " + childSnapshot.val().trainName +
        " </span><span class='member-email'> " + childSnapshot.val().destination +
        " </span><span class='member-age'> " + childSnapshot.val().trainTime +
        " </span><span class='member-comment'> " + childSnapshot.val().frequency+ " </span></div>");

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

    dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

      // Change the HTML to reflect
      $("#name-display").text(snapshot.val().trainName);
      $("#email-display").text(snapshot.val().destination);
      $("#age-display").text(snapshot.val().trainTime);
      $("#comment-display").text(snapshot.val().frequency);
    });

 


