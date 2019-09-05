// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eat-it").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = $(this).data("devoured");

    var isDevoured = {
      consumed: devoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed status to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerNameID").val().trim()
      //devoured: $("").val().trim()   // what the heck is this???  Do we need it?
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
