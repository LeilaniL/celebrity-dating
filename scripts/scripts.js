$(document).ready(function() {
  $("form").submit(function(event)) {
    var gender = $("select#gender").val();
    var race = $("select#race").val();

    if (gender ==="female"){
      if(race==="human"){
        $("#crusher").show();
      }
      else {
        $("#notHumanF").show();
      }
    }
    else {
      if (race==="human"){
        $("#humanM").show();
      }
      else {
        $("#notHumanM").show();
      }
    }
    event.preventDefault();
  });
});
