// all jQuery functions follow

// tabs function
$( function() {
  $( "#tabs" ).tabs();
} );

// draggable/droppable function
$( function() {
  $( "#draggable" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );

// resizable function
$( function() {
  $( "#resizable" ).resizable();
} );

// sortable function
$( function() {
  $( "#sortable" ).sortable();
} );

// color change function
$( function() {
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
} );

// progress bar function 1
$( function() {
  $( "#progressbar1" ).progressbar({
    value: 20
  });
} );

// progress bar function 2
$( function() {
  $( "#progressbar2" ).progressbar({
    value: 40
  });
} );

// progress bar function 3
$( function() {
  $( "#progressbar3" ).progressbar({
    value: 60
  });
} );

// progress bar function 4
$( function() {
  $( "#progressbar4" ).progressbar({
    value: 80
  });
} );

// progress bar function 5
$( function() {
  $( "#progressbar5" ).progressbar({
    value: 100
  });
} );
