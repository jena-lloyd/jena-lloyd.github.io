//Jenifer Lloyd 12.9.2020
//lab11 - Alien Form script

//Dialog with Animation
$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "clip",
        duration: 1000
      },
      hide: {
        effect: "fadeOut",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

//Datepicker 
$( function() {
  $( "#datepicker" ).datepicker();
} );

//Radio Buttons
$( function() {
    $( "input[type='radio']" ).checkboxradio({
      icon: false
    });
  } );

//Slider for Weight(.lbs) and Height(ft)
$("#slider_me").slider({
  slider:function(event,ui){
  $("my_value").val(ui.value);
  }
});
$("my_value").val($("#slide_me").slider("value"));

//Spinner for number of eyes, arms, and legs
$( function() {
  $( "#spinner" ).spinner({
    spin: function( event, ui ) {
      if ( ui.value > 10 ) {
        $( this ).spinner( "value", 0 );
        return false;
      } else if ( ui.value < 0 ) {
        $( this ).spinner( "value", 10 );
        return false;
      }
    }
  });
} );

//Color Picker Slider for Alien color
$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  } );