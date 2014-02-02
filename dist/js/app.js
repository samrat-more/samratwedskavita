(function(){
  $(document).ready(function(){
    // Counter code starts
    var note = $('#note'),
    ts = new Date(2014, 2, 9),
    newYear = true;
  
    if((new Date()) > ts){
      // The new year is here! Count towards something else.
      // Notice the *1000 at the end - time must be in milliseconds
      ts = (new Date()).getTime() + 10*24*60*60*1000;
      newYear = false;
    }
    
    $('#countdown').countdown({
      timestamp : ts,
      callback  : function(days, hours, minutes, seconds){
        
        var message = "";
        
        message += days + " day" + ( days==1 ? '':'s' ) + ", ";
        message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
        message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
        message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
        
        if(newYear){
          message += "left until the new year!";
        }
        else {
          message += "left to 10 days from now!";
        }
        
        note.html(message);
      }
    });
    // Counter code ends

    // Settings code
    $('.settings .background-theme li a').on('click', function() {
      var color = $(this).css('background');
      console.log(color);
      $('body').css('background', color);
    });

    $('.settings .background-pattern li a').on('click', function() {
      var color = $(this).css('background');
      console.log(color);
      $('body').css('background', color);
    });

/*
background:
linear-gradient(135deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
linear-gradient(225deg, #708090 22px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
background-color:#708090;
background-size: 64px 128px
*/

    
  });
}());