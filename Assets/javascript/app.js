$(function () {
  /* onread execute js */

  /* card data js */
  $.ajax({
    url: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple',
    method: 'GET',
  }).then(function (response) {
    processData(response);
  });


  function processData(response){
    console.log(response);
    var stack = $('#stack');
    var results = response.results;
    var card_top = 0;
    var card_right = 0;
    var card_z_index = results.length;

    for (var i = 0; i < results.length; i++){
      var card = createNewCard(i);
      var front_card = card.children('.front'); // reference to inner div "front"
      var back_card = card.children('.back'); // reference to inner div "back"

      front_card.html(results[i].question); // add question data
      back_card.html(results[i].correct_answer); // add answer data

      // add style
      card.attr('style', 'top: '+card_top+'px; right: '+card_right+'px; z-index: '+card_z_index+';')
      
      // increment card positions and z-index
      card_top += 3;
      card_right += 2;
      card_z_index--;

      stack.append(card);
    }

  }

  /* create a blank card object */
  function createNewCard(i){
    var card = $('<div>');
    var front = $('<div>');
    var back = $('<div>');

    card.addClass('card');
    front.addClass('front');
    back.addClass('back');

    // add listener to flip card
    card.click(function () {
      $(this).addClass('flipped');
      $(this).find('.front').addClass('showingBack');
      $(this).find('.front').css("z-index", 0);
      $(this).css("z-index", i);
    });

    card.append(front).append(back);

    return card;
  }


});