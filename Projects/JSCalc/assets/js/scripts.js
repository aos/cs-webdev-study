$(document).ready(function () {

  var current = "";
  var value = "";
  var full = "";
  var answer = "";
  var log = "";

  // Grab value of button on click
  $("button").click(function () {
    current = $(this).attr("value");

    // All clear (AC) functionality
    if (current === "AC") {
      $("#display").text("0");
      $("#entry").text("");
      current = "";
      answer = "";
      value = "";
      full = "";
    }

    // Clear entry (CE) functionality
    if (current === "CE") {
      // if (answer) {
      //   $("#entry").html("");
      //   current = "";
      // } else {
      //   current = "";
        $("#entry").html("");
    }

    // Calculate value of operation when "=" pressed
    if (current === "=") {
      if (answer) {

        // If answer is set, but equal is pressed again without input 
        if (full) {
        value = eval(full);
        }
      
      // If beginning of string is an operation symbol, remove operation
      } else {
        if (full[0] === "+" || full[0 === "-"] || full[0] === "*" || full[0] === "/") {
          full = full[full.length - 1];
        }

        value = eval(full);
      }

      // Round to 5 decimal places when necessary
      answer = Math.round(value * 100000) / 100000;

      $("#display").html(answer);
      $("#entry").append(" = " + answer);
      full = "";
    }

    // Math operations logic
    if (current === "+" || current === "/" || current === "*" || current === "-") {

      if (full[full.length - 1] === "" || full === "") {
        current === "";
      }

      // Prevent multiple symbols to be added in conjunction
      if (full[full.length - 1] === "+" ||
        full[full.length - 1] === "-" ||
        full[full.length - 1] === "*" ||
        full[full.length - 1] === "/" ||
        full[full.length - 1] === ".") {
        current = "";
      }

      // If answer exists (aka equal pressed), change entry to add answer + operator
      if (answer) {
        $("#entry").text(answer + current);
        full = answer + current;
      } else {
        full += current;
        $("#display").text(current);
        $("#entry").append(current);
      }
    }

    // Building operation string to be eval'd when numbers are pressed
    if (!isNaN(Number(current))) {
      log += current;
      full += log;
      $("#entry").text(full);
      log = "";
    }

    // Decimal functionality
    if (current === ".") {
      // Check for number before decimal
      if (full[full.length - 1] === ".") {
        current = "";
      } else if (isNaN(full[full.length - 1])) {
        full += "0.";
        $("#entry").append("0.");
      } else {
        $("#entry").append(".");
        full += ".";
      }
    }
  })
})