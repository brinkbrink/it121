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
