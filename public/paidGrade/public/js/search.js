var universities = JSON.parse('{"kharkiv": [ { "uk": "Харківський національний університет міського господарства імені О.М. Бекетова", "en": "O.M.Beketov National University of Urban Economy in Kharkiv,", "key": "khbeketova" },  { "uk": "Національний аерокосмічний університет ім. М.Є. Жуковського «Харківський авіаційний інститут»", "en": "National Aerospace University – Kharkiv Aviation Institute", "key": "khai" },  { "uk": "Національний технічний університет «Харківський політехнічний інститут» (НТУ ХПІ)", "en": "National Technical University Kharkiv Polytechnic Institute", "key": "khpi" },  { "uk": "Національний юридичний університет імені Ярослава Мудрого", "en": "National University Yaroslav the Wise Law Academy of Ukraine", "key": "khmudrogo" },  { "uk": "Харківський національний медичний університет (ХНМУ)", "en": "Kharkiv National Medical University", "key": "khmed" },  { "uk": "Харківський національний педагогічний університет імені Г. С. Сковороди (ХНПУ)", "en": "H.S. Skovoroda Kharkiv National Pedagogical University", "key": "khped" },  { "uk": "Харківський національний університет імені В.Н. Каразіна", "en": "National University of Kharkiv", "key": "khkarazin" },  { "uk": "Харківський національний університет радіоелектроніки (ХНУРЕ)", "en": "Kharkiv National University of Radioelectronics", "key": "khire" },  { "uk": "Харківський національний економічний університет", "en": "Kharkiv National University of Economics", "key": "khneu" } ],  "kiev": [ { "uk": "Київський національний університет імені Тараса Шевченка (КНУ)", "en": "Taras Shevchenko National University of Kyiv (KNU)", "key": "knu" },  { "uk": "Національний авіаційний університет (НАУ)", "en": "National Aviation University", "key": "knau" },  { "uk": "Київський національний торговельно-економічний університет", "en": "Kyiv Nnational University of Trade and Economics", "key": "kteu" },  { "uk": "Національний технічний університет України “Київський політехнічний інститут", "en": "National Technical University of Ukraine Igor Sikorsky Kyiv Polytechnic Institute", "key": "kpi" },  { "uk": "Київський національний економічний університет ім. Вадима Гетьмана", "en": "Vadym Hetman Kyiv National Economic University", "key": "kneu" },  { "uk": "Київський національний університет технологій і дизайну", "en": "Kyiv National University of Technologies and Design", "key": "kutd" },  { "uk": "Київський національний університет будівництва і архітектури", "en": "Kyiv National University of Construction and Architecture", "key": "knuba" },  { "uk": "Київський національний лінгвістичний університет", "en": "Kyiv National Linguistic University", "key": "knlu" } ],  "lviv": [ { "uk": "Національний університет “Львівська політехніка", "en": "Lviv Polytechnic University", "key": "lpol" },  { "uk": "Львівський національний університет ім. Івана Франка", "en": "Ivan Franko Lviv National University", "key": "lnufranka" },  { "uk": "Львівська державна фінансова академія (ЛДФА)", "en": "Lviv State Academy of Finance", "key": "ldfa" },  { "uk": "Львівська національна академія мистецтв (ЛНАМ)", "en": "The Lviv National Academy of Arts", "key": "lnam" } ],  "odesa": [ { "uk": "Одеська національна юридична академія", "en": "South Regional Center of National Academy of Legal Sciences of Ukraine", "key": "onua" },  { "uk": "Одеський національний політехнічний університет", "en": "Odessa National Polytechnic University", "key": "onpu" },  { "uk": "Одеський національний університет ім. І.І. Мечнікова", "en": "Official site of Odessa I.I.Mechnikov National University", "key": "onumechnikova" },  { "uk": "Одеська державна академія будівництва і архітектури", "en": "Odessa State Academy of Civil Engineering and Architecture", "key": "odaba" },  { "uk": "Одеський державний економічний університет", "en": "Odessa National Economics University", "key": "odeu" },  { "uk": "Одеська національна морська академія", "en": "National University Odessa Maritime Academy", "key": "onma" },  { "uk": "Міжнародний гуманітарний університет", "en": "International Humanitarian University", "key": "omgu" }, { "uk": "Інший", "en": "Other", "key": "other" }  ] }');
var subjects = [ { "uk": "Готельно-ресторанна справа, туризм", "en": "Hotel and restaurant business, tourism " }, { "uk": "Ветеринарна медицина", "en": "Pediatrics" }, { "uk": "Педагогіка", "en": "Pedagogy" }, { "uk": "Менеджмент, маркетинг", "en": "Management, Marketing" }, { "uk": "Авіаційна та ракетно-космічна техніка", "en": "Aviation and rocket-space equipment" }, { "uk": "Автоматизація, приладобудування", "en": "Automation Instrumentation" }, { "uk": "Біологія, екологія", "en": "Biology, ecology " }, { "uk": "Військові науки, національна безпека", "en": "Military Science, National Security" }, { "uk": "Географія, геологія", "en": "Geography, Geology" }, { "uk": "Журналістика, видавництво та поліграфія",   "en": "Journalism, Publishing and Printing" }, { "uk": "Інформаційні технології, кібербезпека", "en": "Information technology, cybersecurity" }, { "uk": "Історія, археологія", "en": "History, Archaeology" }, { "uk": "Культура, мистецтво", "en": "Culture" }, { "uk": "Koп\\'ютерні науки", "en": "Computer science" }, { "uk": "Легка промисловість", "en": "Light industry" }, { "uk": "Математика, статистика", "en": " Mathematics, Statistics" }, { "uk": "Інженерія, машинобудування", "en": "Engineering" }, { "uk": "Медицина, фармація", "en": "Medicine, pharmacy" }, { "uk": "Металургія", "en": "Metallurgy" }, { "uk": "Цивільна безпека", "en": "Civil Safety" }, { "uk": "Харчові технології", "en": "Food Technology " }, { "uk": "Політологія, міжнародні відносини", "en": "Political science, international relations " }, { "uk": "Психологія", "en": "Psychology" }, { "uk": "Електроніка, телекомунікації", "en": "Electronics, Telecommunications" }, { "uk": "Аграрні науки та продовольство", "en": "Agricultural science" }, { "uk": "Соціологія, соціальна робота", "en": "Sociology" }, { "uk": "Будівництво, архітектура", "en": "Architecture " }, { "uk": "Транспорт", "en": "Transportation" }, { "uk": "Фізика, астрономія", "en": "Physics, astronomy" }, { "uk": "Фізична культура", "en": "Physical Education" }, { "uk": "Філологія", "en": "Philology" }, { "uk": "Філософія, релігія та культурологія", "en": "Philosophy, religious and cultural studies" }, { "uk": "Хімія, біоінженерія", "en": "Chemistry, bioengineering" }, { "uk": "Економіка", "en": "Economy" }, { "uk": "Енергетика", "en": "Energetics" }, { "uk": "Право", "en": "Law" }, { "uk": "Інше", "en": "Other" } ];
var translations = [{"id": "title", "uk": "Інформація про взятки в різних університетах", "en": "Search through reported information"}, {"id": "label-for-city", "uk": "Місто", "en": "City"}, {"id": "label-for-university", "uk": "Університет", "en": "University"}, {"id": "label-for-subject", "uk": "Предмет", "en": "Subject"},{"id": "paidgrade-label", "uk": "PAID GRADE", "en": "PAID GRADE"},{"id": "about-label", "uk": "ПРО НАС", "en": "ABOUT"},{"id": "contacts-label", "uk": "КОНТАКТИ", "en": "CONTACTS"}];
var cities = [{"uk": "Київ", "en": "Kiev"}, {"uk": "Харків", "en": "Kharkiv"},{"uk": "Львів", "en": "Lviv"},{"uk": "Одеса", "en": "Odesa"}, { "uk": "Інше", "en": "Other" }];
var valid_cities = ['kharkiv', 'kiev', 'odesa', 'lviv'];
var lang;

$(document).ready(handle_language(),
  populate_dropdowns(),
  populate_translations(),
  filter_bribes()
);



function set_language (){
  lang = document.getElementById('lang').value;
  localStorage.setItem("lang", lang);
  populate_translations();
  populate_dropdowns();
  filter_bribes();
}

function populate_translations(){
  for(var i=0; i < translations.length; i++){
    var element = document.getElementById(translations[i]["id"]);
    element.innerHTML=translations[i][lang];
  }
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

function populate_dropdowns(){

  /* Populating cities dropdown*/
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

  /* Populating university dropdown*/
  var university_dropdown = document.getElementById('university');
  deleteFirstChild(university_dropdown);

  for (var by_city in universities) {
    arrayofKeys = universities[by_city];
    arrayofUniversities = universities[by_city];
    for(var i = 0; i < arrayofUniversities.length; i++ ) {
      var option = document.createElement('option');
      option.innerHTML  = arrayofUniversities[i][lang];
      option.value = arrayofKeys[i]["key"];
      university_dropdown.append(option);
    };
  }

  /* Populating subjects dropdown*/
  var subject_dropdown = document.getElementById('subject');
  deleteFirstChild(subject_dropdown);

  for(var i = 0; i < subjects.length; i++ ) {
    var option = document.createElement('option');
    option.innerHTML= subjects[i][lang];
    option.value = i;
    subject_dropdown.append(option);
  };
};


function get_criteria () {
  var prefilled = localStorage.getItem("prefill");
  console.log(prefilled);
  if (prefilled!=='null'){
    console.log(valid_cities);
    console.log(prefilled in valid_cities);
    if (valid_cities.indexOf(prefilled)!==-1){
      document.getElementById('city').value = prefilled;
      localStorage.setItem("prefill", null);
    }
    else{
      document.getElementById('custom-search').value = prefilled;
      localStorage.setItem("prefill", null);
    }
  }

  var city = document.getElementById('city').value;
  var university = document.getElementById('university').value;
  var subject_val = document.getElementById('subject').value;
  var custom = document.getElementById('custom-search').value;


  var obj = {'city': city, 'university': university, 'subject': subject_val, 'custom': custom };
  return obj;
};


function filter_bribes(){
  var criteria = get_criteria();

  $.ajax({
    url: "/filter",
    type: "GET",
    datatype: "json"
  }).done(function(json){
    var bribes = [];

    json.forEach(function(bribe) {
      // check for title
      var custom_flag = false;
      if(bribe.customCity)
        custom_flag = (bribe.customCity.toLowerCase().includes(criteria.custom.toLowerCase()));
      if(bribe.customUniversity)
        custom_flag = (custom_flag || bribe.customUniversity.toLowerCase().includes(criteria.custom.toLowerCase()));
      // check for semester
      // var city = (criteria.city === -1 || bribe.city[criteria.semester] === 1);
      // check for requirement
      if (!criteria.custom) {
         custom_flag = true;
      }
      var city_flag = (criteria.city === "-1" || bribe.city === criteria.city);

      var university_flag = (criteria.university === "-1" || bribe.university === criteria.university);

      var subject_flag = (criteria.subject === "-1" || bribe.subject === criteria.subject);

      if (city_flag && university_flag && subject_flag  && custom_flag) {
        bribes.push(bribe);
      }
    });

    var bribe_box = document.getElementById('bribe-box');
    while (bribe_box.firstChild) {
      bribe_box.removeChild(bribe_box.firstChild);
    }
    for (var i = 0; i < bribes.length; i++) {
      bribe_box.appendChild(get_bribe_element(bribes[i], i));
    }
    console.log('haha')
  }).fail(function(xhr, status, error){
    console.log('not cool');
  });
};

function get_bribe_element(bribe, id_num) {
  // console.log(bribe);
  var amount = bribe.amount;
  var bribe_li = document.createElement('li');
  var city_p = document.createElement('p');
  var university_p = document.createElement('p');
  if (bribe.city !== "other"){
    city_p.appendChild(document.createTextNode(capitalizeFirstLetter(bribe.city)));
    if (bribe.university !== "other"){
      for (var by_city in universities) {
        arrayofUniversities = universities[by_city];
        for(var i = 0; i < arrayofUniversities.length; i++ ) {
          // console.log(arrayofUniversities[i]["key"]);
          // console.log(bribe.university);

          if (arrayofUniversities[i]["key"]===bribe.university)
            university_p.appendChild(document.createTextNode(arrayofUniversities[i][lang]));
        };
      }
    }
    else {
      university_p.appendChild(document.createTextNode(bribe.customUniversity));
    }

  }
  else{
    city_p.appendChild(document.createTextNode(bribe.customCity));
    university_p.appendChild(document.createTextNode(bribe.customUniversity));
  }


  var course_span_id = document.createElement('span');
  course_span_id.appendChild(document.createTextNode(amount));

  bribe_li.appendChild(city_p);
  bribe_li.appendChild(university_p);
  bribe_li.appendChild(course_span_id);


  return bribe_li;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function handle_language(){
  //Setting the language and populting the language change drodown
  lang = localStorage.getItem("lang");
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
    var text = option.innerHTML  = "Укр";
    option.value = "uk";
    lang_dropdow.append(option);
    var option = document.createElement('option');
    var text = option.innerHTML  = "Eng";
    option.value = "en";
    lang_dropdow.append(option);
  }
  else{

    var text = option.innerHTML  = "Eng";
    option.value = "en";
    lang_dropdow.append(option);
    var option = document.createElement('option');
    var text = option.innerHTML  = "Укр";
    option.value = "uk";
    lang_dropdow.append(option);
  }
}
