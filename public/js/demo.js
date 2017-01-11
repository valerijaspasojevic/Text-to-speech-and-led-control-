$(document).ready(function() {
  interval = null;
  clearInterval(interval);
  interval2 = null;
  clearInterval(interval2);
  interval3 = null;
  clearInterval(interval3);

  /* Paljenje celog levog oka */
  $("#ledOnLeftEye").click(function() {
    clearInterval(interval);
    $.get('/arduino_control/digital/3/1');
  });

  $("#offLeftEye").click(function() {
    clearInterval(interval);
    $.get('/arduino_control/digital/3/0');
  });

  /* Blinkanje levog oka */
  $("#ledBlinkLeftEye").click(function() {
    interval = setInterval(function(){
      $.get('/arduino_control/ledBlinkLeftEye');
    }, 1000);
  });

  /* Paljenje desnog oka */
  $("#ledOnRightEye").click(function() {
    clearInterval(interval2);
    $.get('/arduino_control/digital/2/1', function() {
      $.get('/arduino_control/digital/4/1', function() {
        $.get('/arduino_control/digital/5/1');
      });
    });
  });

  /* Random paljenje desnog oka */
  $("#ledRandomRightEye").click(function() {
    interval2 = setInterval(function(){
      $.get('/arduino_control/ledRandomRightEye');
    }, 1000);
  });

  $("#offRightEye").click(function() {
    clearInterval(interval2);
    $.get('/arduino_control/digital/2/0', function() {
      $.get('/arduino_control/digital/4/0', function() {
        $.get('/arduino_control/digital/5/0');
      });
    });
  });

  /* Paljenje usta */
  $("#mouthAll").click(function() {
    interval3 = setInterval(function(){
      $.get("/arduino_control/mouthAll");
    }, 1000);
  });

  /* Srecna usta */
  $("#happyMouth").click(function() {
    clearInterval(interval3);
    $.get('/arduino_control/digital/7/1', function() {
      $.get('/arduino_control/digital/6/0');
    });
  });

  /* Tuzna usta */
  $("#sadMouth").click(function() {
    clearInterval(interval3);
    $.get('/arduino_control/digital/6/1', function() {
      $.get('/arduino_control/digital/7/0');
    });
  });

  $("#offMouth").click(function() {
    clearInterval(interval3);
    $.get('/arduino_control/digital/6/0', function() {
      $.get('/arduino_control/digital/7/0', function() {
        $.get('/arduino_control/digital/8/0');
      });
    });
  });

  /* Srecne obrve */
  $("#happyEyebrows").click(function() {
    $.get("/arduino_control/happyEyebrows");
  });

  /* Tuzne obrve */
  $("#sadEyebrows").click(function() {
    $.get("/arduino_control/sadEyebrows");
  });
});