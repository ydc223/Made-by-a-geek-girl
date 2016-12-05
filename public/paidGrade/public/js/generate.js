var keys = {"kiev":["knu","knau","kteu", "kpi", "kneu", "kutd", "knuba", "knlu"],
"kharkiv": ["khbeketova", "khai", "khpi", "khmudrogo", "khmed", "khped", "khkarazin", "khire", "khneu"],
"lviv": ["lpol", "lnufranka", "ldfa", "lnam"],
"odesa": ["onua", "onpu", "onumechnikova", "odaba", "odeu", "onma", "omgu"]};

var sub = {"subject": ["Готельно-ресторанна справа, туризм",
   "Ветеринарна медицина",
   "Педагогіка",
   "Менеджмент, маркетинг",
   "Авіаційна та ракетно-космічна техніка",
   "Автоматизація, приладобудування",
   "Біологія, екологія",
   "Військові науки, національна безпека",
   "Географія, геологія",
   "Журналістика, видавництво та поліграфія",
   "Інформаційні технології, кібербезпека",
   "Історія, археологія",
   "Культура, мистецтво",
   "Koпютерны науки",
   "Легка промисловість",
   "Математика, статистика",
   "Інженерія, машинобудування",
   "Медицина, фармація",
   "Металургія",
   "Цивільна безпека",
   "Харчові технології",
   "Політологія, міжнародні відносини",
   "Психологія",
   "Електроніка, телекомунікації",
   "Аграрні науки та продовольство",
   "Соціологія, соціальна робота",
   "Будівництво, архітектура",
   "Транспорт",
   "Фізика, астрономія",
   "Фізична культура",
   "Філологія",
   "Філософія, релігія та культурологія",
   "Хімія, біоінженерія",
   "Економіка",
   "Енергетика",
   "Право",
   "Інше"]
};


var universities = {"kharkiv":
  {"Universities": ["Харківський національний університет міського господарства імені О.М. Бекетова",
    "Національний аерокосмічний університет ім. М.Є. Жуковського «Харківський авіаційний інститут»",
    "Національний технічний університет «Харківський політехнічний інститут» (НТУ ХПІ)",
    "Національний юридичний університет імені Ярослава Мудрого",
    "Харківський національний медичний університет (ХНМУ)",
    "Харківський національний педагогічний університет імені Г. С. Сковороди (ХНПУ)",
    "Харківський національний університет імені В.Н. Каразіна",
    "Харківський національний університет радіоелектроніки (ХНУРЕ)",
    "Харківський національний економічний університет"]},

  "kiev":
    {"Universities":["Київський національний університет імені Тараса Шевченка (КНУ)",
      "Національний авіаційний університет (НАУ)",
      "Київський національний торговельно-економічний університет",
      "Національний технічний університет України “Київський політехнічний інститут",
      "Київський національний економічний університет ім. Вадима Гетьмана",
      "Київський національний університет технологій і дизайну",
      "Київський національний університет будівництва і архітектури",
      "Київський національний лінгвістичний університет"]},
  "lviv":
    {"Universities":["Національний університет “Львівська політехніка",
      "Львівський національний університет ім. Івана Франка",
      "Львівська державна фінансова академія (ЛДФА)",
      "Львівська національна академія мистецтв (ЛНАМ)"]},
  "odesa":
    {"Universities":["Одеська національна юридична академія",
      "Одеський національний політехнічний університет",
      "Одеський національний університет ім. І.І. Мечнікова",
      "Одеська державна академія будівництва і архітектури",
      "Одеський державний економічний університет",
      "Одеська національна морська академія",
      "Міжнародний гуманітарний університет"]},

};

var obj = {};


for (var by_city in universities) {
  arrayofUniversities = universities[by_city].Universities;
  arrayofKeys = keys[by_city];
  var city = [];

  for(var i=0; i < arrayofUniversities.length; i++ ){
    one_city = {};
    one_city["\"uk\""] = arrayofUniversities[i];
    one_city["\"en\""] = '';
    one_city["\"key\""] = arrayofKeys[i];
    city.push(one_city);
  };
  obj[by_city]=city;
}
console.log(obj);

var areas = sub.subject;
var area=[];
for(var i=0; i < areas.length; i++ ){
  one_area = {};
  one_area["\"uk\""] = areas[i];
  one_area["\"en\""] = '';
  area.push(one_area);
};

console.log(area);
