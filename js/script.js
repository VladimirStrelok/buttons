
var disabled=false;
$("#disable").click(function(){
  if(!disabled)
  {
    $("#fieldset").attr("disabled", "disabled");
    $("#disable").text('Enable')
    disabled=true;
    $("#disable").switchClass( 'btn-danger', 'btn-alert')
  }
  else
  {
    $("#fieldset").removeAttr("disabled");
    $("#disable").text('Disable')
    disabled=false;
    $("#disable").switchClass( 'btn-alert', 'btn-danger')
  }
});
