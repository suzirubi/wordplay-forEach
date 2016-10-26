$(document).ready(function() {

  $("form#puzzle").submit(function(event) {

    var userSentence = $("input#sentence").val();
    var sentenceSplit = userSentence.split(" ");
    var mixSentence = [];

    for (var count = 0; sentenceSplit[].length <= 3; count += 1) {
      mixSentence.push(sentenceSplit[count]);

    }

    // var puzzleSentence = mixSentence.join("");
    //
    // $("#output").show();
    // $("#puzzleDisplay").text(puzzleSentence);
    // $("form#puzzle").hide();
    event.preventDefault();
  });

});
