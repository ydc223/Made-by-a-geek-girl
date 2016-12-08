var lang;
var translations;
$(document).ready(fetchTranslations());

function set_language (){

  lang = document.getElementById('lang').value;
  localStorage.setItem("lang", lang);
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
  handle_language();

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

function handle_language(){
  //Setting the language and populting the language change drodown
  lang = localStorage.getItem("lang");
  console.log(lang);
  if (!lang){
    lang = "uk";
    localStorage.setItem("lang", lang);
  }

  var lang_dropdow = document.getElementById('lang');

  while (lang_dropdow.firstChild) {
    lang_dropdow.removeChild(lang_dropdow.firstChild);
  }

  var option = document.createElement('option');
  if (lang==="uk"){
    console.log("First case");
    var text = option.innerHTML  = "Укр";
    option.value = "uk";
    lang_dropdow.append(option);
    var option = document.createElement('option');
    var text = option.innerHTML  = "Eng";
    option.value = "en";
    lang_dropdow.append(option);
  }
  else{
    console.log("Second case");

    var text = option.innerHTML  = "Eng";
    option.value = "en";
    lang_dropdow.append(option);
    var option = document.createElement('option');
    var text = option.innerHTML  = "Укр";
    option.value = "uk";
    lang_dropdow.append(option);
  }
}
