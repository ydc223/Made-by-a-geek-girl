var lang;
var translations;
$(document).ready(fetchTranslations());



function set_language (){

  lang = document.getElementById('lang').value;
  localStorage.setItem("lang", lang);
  populate_translations();
  populate_dropdowns();
}

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
    populate_dropdowns();

  }).fail(function(xhr, status, error){
    console.log('not cool');
  });
};

/* Checks if the language is already selected, otherwise ukrainian in default*/

function populate_translations(){
  var text = translations.text;
  for(var i=0; i < text.length; i++){
    var element = document.getElementById(text[i]["id"]);
    if(element){
      // console.log(translations[i]["id"]);
      element.innerHTML = text[i][lang];
    }
  }

  var placeholders = translations.placeholder;
  for(var i=0; i < placeholders.length; i++){
    var element = document.getElementById(placeholders[i]["id"]);
    if(element){
      // console.log(placeholders[i]["id"]);
      element.setAttribute('placeholder', placeholders[i][lang]);
    }

  }
};

function populate_dropdowns(){

  /* Populating cities dropdown*/
  var cities = translations.city;

  var city_dropdown = document.getElementById('city');
  deleteFirstChild(city_dropdown);

  city_dropdown.append(option);
  for(var i = 0; i < cities.length; i++ ) {
    var option = document.createElement('option');
    option.innerHTML  = cities[i][lang];
    option.value = cities[i]["en"].toLowerCase();
    // option.appendChild(text);
    city_dropdown.append(option);
  };


  /* Populating subjects dropdown*/
  var subject_dropdown = document.getElementById('subject');
  deleteFirstChild(subject_dropdown);
  var subjects = translations.subject;

  for(var i = 0; i < subjects.length; i++ ) {
    var option = document.createElement('option');
    option.innerHTML= subjects[i][lang];
    option.value = i;
    subject_dropdown.append(option);
  };

  /* Populating official dropdown*/
  var official_dropdown = document.getElementById('official');
  deleteFirstChild(official_dropdown);
  var official = translations.official;

  for(var i = 0; i < official.length; i++ ) {
    var option = document.createElement('option');
    option.innerHTML= official[i][lang];
    option.value = i;
    official_dropdown.append(option);
  };

};

function deleteFirstChild(id){
  while (id.firstChild) {
    id.removeChild(id.firstChild);
  }
  var option = document.createElement('option');
  var text = option.innerHTML  = "";
  option.value = "-1";
  id.append(option);
}

/* Checks if the language is already selected, otherwise ukrainian in default*/
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
