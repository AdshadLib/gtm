//This is used for forms with a dropdown box. It reads each value in the box, then returns
//the user selected value.

function() {
  var selectId = document.getElementById("billing-state");
  try {
    var options = selectId.options;
    for (var i = 0;i < options.length;i++){
      if(options[i].selected) {
        return options[i].value;
      }
    }
  } catch(e) {}
  return "";
}