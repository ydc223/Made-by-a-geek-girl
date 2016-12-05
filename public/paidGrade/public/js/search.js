var universities = JSON.parse('{ "kharkiv": [ { "uk": "Харківський національний університет міського господарства імені О.М. Бекетова", "en": "", "key": "khbeketova" }, { "uk": "Національний аерокосмічний університет ім. М.Є. Жуковського «Харківський авіаційний інститут»", "en": "", "key": "khai" }, { "uk": "Національний технічний університет «Харківський політехнічний інститут» (НТУ ХПІ)", "en": "", "key": "khpi" }, { "uk": "Національний юридичний університет імені Ярослава Мудрого", "en": "", "key": "khmudrogo" }, { "uk": "Харківський національний медичний університет (ХНМУ)", "en": "", "key": "khmed" }, { "uk": "Харківський національний педагогічний університет імені Г. С. Сковороди (ХНПУ)", "en": "", "key": "khped" }, { "uk": "Харківський національний університет імені В.Н. Каразіна", "en": "", "key": "khkarazin" }, { "uk": "Харківський національний університет радіоелектроніки (ХНУРЕ)", "en": "", "key": "khire" }, { "uk": "Харківський національний економічний університет", "en": "", "key": "khneu" } ], "kiev": [ { "uk": "Київський національний університет імені Тараса Шевченка (КНУ)", "en": "", "key": "knu" }, { "uk": "Національний авіаційний університет (НАУ)", "en": "", "key": "knau" }, { "uk": "Київський національний торговельно-економічний університет", "en": "", "key": "kteu" }, { "uk": "Національний технічний університет України “Київський політехнічний інститут", "en": "", "key": "kpi" }, { "uk": "Київський національний економічний університет ім. Вадима Гетьмана", "en": "", "key": "kneu" }, { "uk": "Київський національний університет технологій і дизайну", "en": "", "key": "kutd" }, { "uk": "Київський національний університет будівництва і архітектури", "en": "", "key": "knuba" }, { "uk": "Київський національний лінгвістичний університет", "en": "", "key": "knlu" } ], "lviv": [ { "uk": "Національний університет “Львівська політехніка", "en": "", "key": "lpol" }, { "uk": "Львівський національний університет ім. Івана Франка", "en": "", "key": "lnufranka" }, { "uk": "Львівська державна фінансова академія (ЛДФА)", "en": "", "key": "ldfa" }, { "uk": "Львівська національна академія мистецтв (ЛНАМ)", "en": "", "key": "lnam" } ], "odesa": [ { "uk": "Одеська національна юридична академія", "en": "", "key": "onua" }, { "uk": "Одеський національний політехнічний університет", "en": "", "key": "onpu" }, { "uk": "Одеський національний університет ім. І.І. Мечнікова", "en": "", "key": "onumechnikova" }, { "uk": "Одеська державна академія будівництва і архітектури", "en": "", "key": "odaba" }, { "uk": "Одеський державний економічний університет", "en": "", "key": "odeu" }, { "uk": "Одеська національна морська академія", "en": "", "key": "onma" }, { "uk": "Міжнародний гуманітарний університет", "en": "", "key": "omgu" } ] }');
var subjects = [ { "uk": "Готельно-ресторанна справа, туризм", "en": "" }, { "uk": "Ветеринарна медицина", "en": "" }, { "uk": "Педагогіка", "en": "" }, { "uk": "Менеджмент, маркетинг", "en": "" }, { "uk": "Авіаційна та ракетно-космічна техніка", "en": "" }, { "uk": "Автоматизація, приладобудування", "en": "" }, { "uk": "Біологія, екологія", "en": "" }, { "uk": "Військові науки, національна безпека", "en": "" }, { "uk": "Географія, геологія", "en": "" }, { "uk": "Журналістика, видавництво та поліграфія",   "en": "" }, { "uk": "Інформаційні технології, кібербезпека", "en": "" }, { "uk": "Історія, археологія", "en": "" }, { "uk": "Культура, мистецтво", "en": "" }, { "uk": "Koмп\'ютерні науки", "en": "" }, { "uk": "Легка промисловість", "en": "" }, { "uk": "Математика, статистика", "en": "" }, { "uk": "Інженерія, машинобудування", "en": "" }, { "uk": "Медицина, фармація", "en": "" }, { "uk": "Металургія", "en": "" }, { "uk": "Цивільна безпека", "en": "" }, { "uk": "Харчові технології", "en": "" }, { "uk": "Політологія, міжнародні відносини", "en": "" }, { "uk": "Психологія", "en": "" }, { "uk": "Електроніка, телекомунікації", "en": "" }, { "uk": "Аграрні науки та продовольство", "en": "" }, { "uk": "Соціологія, соціальна робота", "en": "" }, { "uk": "Будівництво, архітектура", "en": "" }, { "uk": "Транспорт", "en": "" }, { "uk": "Фізика, астрономія", "en": "" }, { "uk": "Фізична культура", "en": "" }, { "uk": "Філологія", "en": "" }, { "uk": "Філософія, релігія та культурологія", "en": "" }, { "uk": "Хімія, біоінженерія", "en": "" }, { "uk": "Економіка", "en": "" }, { "uk": "Енергетика", "en": "" }, { "uk": "Право", "en": "" }, { "uk": "Інше", "en": "" } ]
var translations = [{"id": "title", "uk": "Інформація про взятки в різних університетах", "en": "Search through reported information"}, {"id": "label-for-city", "uk": "Місто", "en": "City"}, {"id": "label-for-university", "uk": "Університет", "en": "University"}, {"id": "label-for-subject", "uk": "Предмет", "en": "Subject"}];
var cities = [{"uk": "Київ", "en": "Kiev"}, {"uk": "Харків", "en": "Kharkiv"},{"uk": "Львів", "en": "Lviv"},{"uk": "Одеса", "en": "Odesa"}];

var lang = "en";

populate_dropdowns();
populate_translations();

function populate_translations(){
  for(var i=0; i < translations.length; i++){
    var element = document.getElementById(translations[i]["id"]);
    var text = document.createTextNode(translations[i][lang]);
    element.appendChild(text);
  }
};

function populate_dropdowns(){

  /* Populating cities dropdown*/
  var city_dropdown = document.getElementById('city');
  for(var i = 0; i < cities.length; i++ ) {
    var option = document.createElement('option');
    var text = document.createTextNode(cities[i][lang]);
    option.value = cities[i]["en"].toLowerCase();
    option.appendChild(text);
    city_dropdown.append(option);
  };

  /* Populating university dropdown*/
  var university_dropdown = document.getElementById('university');
  for (var by_city in universities) {
    var list = Object.getOwnPropertyNames(by_city);
    arrayofKeys = universities[by_city];
    arrayofUniversities = universities[by_city];
    for(var i = 0; i < arrayofUniversities.length; i++ ) {
      var option = document.createElement('option');
      var text = document.createTextNode(arrayofUniversities[i][lang]);
      option.value = arrayofKeys[i]["key"];
      option.appendChild(text);
      university_dropdown.append(option);
    };
  }

  /* Populating subjects dropdown*/
  var university_dropdown = document.getElementById('subject');
  for(var i = 0; i < subjects.length; i++ ) {
    var option = document.createElement('option');
    var text = document.createTextNode(subjects[i][lang]);
    option.appendChild(text);
    option.value = i;
    university_dropdown.append(option);
  };
};


function get_criteria () {
  var city = document.getElementById('city').value;
  var university = document.getElementById('university').value;
  var subject_val = document.getElementById('subject').value;
  var custom = document.getElementById('custom-search').value;


  var obj = {'city': city, 'university': university, 'subject': subject_val, 'custom': custom };
  console.log(obj);
  return obj;
};

function filter_bribes(){
  var criteria = get_criteria();
  $.ajax({
    url: "/filter",
    type: "GET",
    datatype: "json"
  }).done(function(json){
    console.log(json);
    var bribes = [];

    json.forEach(function(bribe) {
      // check for title
      var custom_flag = true;
      if(bribe.customCity)
        custom_flag = (bribe.customCity.toLowerCase().indexOf(criteria.custom.toLowerCase()) !== -1);
      if(bribe.customUniversity)
        custom_flag = (custom_flag || bribe.customUniversity.toLowerCase().indexOf(criteria.custom.toLowerCase()) !== -1);
      // check for semester
      // var city = (criteria.city === -1 || bribe.city[criteria.semester] === 1);
      // check for requirement
      var city_flag = (criteria.city === "-1" || bribe.city === criteria.city);

      var university_flag = (criteria.university === "-1" || bribe.university === criteria.university);

      var subject_flag = (criteria.subject === "-1" || bribe.subject === criteria.subject);
      console.log(city_flag, university_flag, subject_flag, custom_flag );

      // if (criteria.type === undefined) {
      //   req = true;
      // } else {
      //   course.requirements.forEach(function(r) {
      //     if (criteria.type.includes(r)) {
      //       req = true;
      //     }
      //   });
      // }

      if (city_flag && university_flag && subject_flag  && custom_flag) {
        bribes.push(bribe);
      }
    });
    console.log(bribes);

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
  console.log(bribe);
  var amount = bribe.amount;
  var bribe_li = document.createElement('li');
  var course_span_id = document.createElement('span');
  course_span_id.appendChild(document.createTextNode(amount));

  bribe_li.appendChild(course_span_id);

  return bribe_li;
}
