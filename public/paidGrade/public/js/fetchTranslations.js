var lang = "uk";
var translations;
$(document).ready(fetchTranslations());

function set_language (){
  lang = document.getElementById('lang').value;
  populate_translations();
}

function populate_translations(){
  var text = translations.text;
  for(var i=0; i < text.length; i++){
    var element = document.getElementById(text[i]["id"]);
    if(element){
      // console.log(translations[i]["id"]);
      element.innerHTML = text[i][lang];
    }
  }

  console.log(translations);

  var placeholders = translations.placeholder;
  for(var i=0; i < placeholders.length; i++){
    var element = document.getElementById(placeholders[i]["id"]);
    if(element){
      // console.log(placeholders[i]["id"]);
      element.setAttribute('placeholder', placeholders[i][lang]);
    }

  }
};

function fetchTranslations(){
  $.ajax({
    url: "/translations",
    type: "GET",
    datatype: "json"
  }).done(function(json){
    console.log(json);
    translations = json;
    populate_translations();

  }).fail(function(xhr, status, error){
    console.log('not cool');
  });
};
