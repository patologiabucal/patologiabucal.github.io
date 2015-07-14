// Insert number of questions
var numberOfQuestions = 10;

// Insert number of questions displayed in answer area
var answers = new Array(numberOfQuestions);

// Insert answers to questions
answers[0] = "Leucoplasia";
answers[1] = "Candida Albicans";
answers[2] = "Herpes labial";
answers[3] = "Mucocele";
answers[4] = "Paladar";
answers[5] = "Hiperplasia Fibrosa Inflamatoria";
answers[6] = "Afta";
answers[7] = "Liquen Plano";
answers[8] = "Candidiasis";
answers[9] = "De tipo farmacológico";

// Do not change anything below here ...
function getScore(form) {
  seguro = confirm("Esta seguro que desea calificar sus respuestas?");
  if (!seguro) return ;
  var score = 0;
  var currElt;
  var currSelection;
  $("form[name='quiz'] ul").each(function(index) {
    $(this).find("li input[type='radio']").each(function() {
      value = $(this).val();
      checked = $(this).is(':checked');
      if (checked) {
        if (value === answers[index]) {
          $(this).closest('li').addClass('correct');
          score++;
        } else {
          $(this).closest('li').addClass('incorrect');
        }
      }
    });
  });

  score = Math.round(score/numberOfQuestions*100);
  if (score > 50) {
    $('.questions').append('<div class="results"> <p>Felicidades, su puntuacion es: '+score + '%</p></div>');
  } else {
    $('.questions').append('<div class="results"> <p>Su puntuacion es: '+score + '% </p></div>');
  }

  $('.submit').attr('disabled', 'disabled');
}
$(function() {
  $("input:reset").click(function() {
    results = $('.results');
    if (results) {
      results.remove();
    }
    $('li').removeClass('incorrect correct');
    $('.submit').removeAttr('disabled');
  })
})();
