/**
 * Created by Дмитрий on 001 01.10.20.
 */


var query11 = 'http://176.215.15.238:8007/';
//var query11 = 'http://nativnet.ru:8007/';
//var query11 = 'http://nativnet.ru:8007/';

var myapp = new Framework7({
    // App root element
    dialog: {
        // set default title for all dialog shortcuts
        title: 'My ZEN',
        // change default "OK" button text
        buttonOk: 'Ok'
    },
  theme: 'ios',
  //autoDarkTheme: false,
    root: '#app',
    // App Name
    name: 'My ZEN',
    // App id
    id: 'io.dddpoka.myzen',
    // Enable swipe panel
    panel: {
        swipe: true
    },
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: 'about.html'
        },
        {
            path: '/about2/',
            url: 'about2.html'
        },
      {
        path: '/map/',
        url: 'map.html'
      },
      {
        path: '/profile/',
        url: 'profile.html'
      },
      {
        path: '/option/',
        url: 'option.html'
      },
      {
        path: '/world_wise/',
        url: 'world_wise.html'
      },
      {
        path: '/input_name/',
        url: 'input_name.html'
      },
      {
        path: '/input_name_2/',
        url: 'input_name_2.html'
      },
      {
        path: '/input_email/',
        url: 'input_email.html'
      },
      {
        path: '/change_language/',
        url: 'change_language.html'
      },
      {
        path: '/morning_timer/',
        url: 'morning_timer.html'
      },
      {
        path: '/day_timer/',
        url: 'day_timer.html'
      },
      {
        path: '/sound_type/',
        url: 'sound_type.html'
      },
      {
        path: '/meditation_time/',
        url: 'meditation_time.html'
      },
      {
        path: '/support/',
        url: 'support.html'
      },
      {
        path: '/donation/',
        url: 'donation.html'
      },
      {
        path: '/statistic/',
        url: 'statistic.html'
      },
      {
        path: '/recomend/',
        url: 'recomend.html'
      },
      {
        path: '/edit_temp_avatar_foto/',
        url: 'edit_temp_avatar_foto.html'
      },
      {
        path: '/faq_project/',
        url: 'faq_project.html'
      },
      {
        path: '/intro/',
        url: 'intro.html'
      },
      {
        path: '/intro_1/',
        url: 'intro_1.html'
      },
      {
        path: '/faq_project_answer/',
        url: 'faq_project_answer.html'
      },
      {
        path: '/about_project/',
        url: 'about_project.html'
      }
    ]
    // ... other parameters
});

var $$ = Dom7;

var mainView = myapp.views.create('.view-main');
var mainView_1 = myapp.views.create('.view-main_1');

var curr_language = localStorage.getItem('mob_current_lang');
var toast_text_1, toast_text_2, toast_text_3, toast_text_4;
if (curr_language === 'русский'){
  toast_text_1 = 'Определяем ваше местоположение . . . ';
  toast_text_2 = 'Не получается определить ваше местоположение, возможно плохой сигнал GPS датчика . . . ';
  toast_text_3 = 'Раcсчитываем время практик . . . ';
  toast_text_4 = 'Экран уменьшит яркость во время работы таймера. ';
} else {
  toast_text_1 = 'We determine your location . . . ';
  toast_text_2 = 'It is not possible to determine your location, the signal from the GPS sensor may be bad . . . ';
  toast_text_3 = 'We calculate the practice time . . . ';
  toast_text_4 = 'The screen will dim while the timer is running . . . ';
}

var toastBottom = myapp.toast.create({
  text: toast_text_1,
  closeTimeout: 8000,
});
var toastBottom_2 = myapp.toast.create({
  text: toast_text_2,
  closeTimeout: 8000,
});
var toastBottom_3 = myapp.toast.create({
  text: toast_text_3,
  closeTimeout: 4000,
});
var toastCenter  = myapp.toast.create({
  text: toast_text_4,
  position: 'center',
  closeTimeout: 4000,
});

// var swiper = myapp.swiper.create('.swiper-container', {
//   speed: 400,
//   spaceBetween: 100
// });





$$(document).on('page:init', '.page[data-name="about_project"]', function (e) {
   // myapp.dialog.alert('111 инит экран about');


  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  if (curr_language === 'русский'){

    document.getElementById('lang_about_project_link_back').innerHTML = 'Назад';
    document.getElementById('lang_about_project_zagolov').innerHTML = 'О проекте';


    document.getElementById('lang_about_project_center').innerHTML =
      '<p>Проект направлен на развитие ОСОЗНАННОСТИ. </p>\n'+

      '<p>Осознанность — ключ от всех дверей. РЕГУЛЯРНАЯ практика медитации может преобразить ВСЮ вашу жизнь. </p>\n'+

      '<p>5 РАЗ по 5 МИНУТ. </p>\n'+
      '<p> Гарантированно изменит качество вашей жизни, подарит вам ЯСНОСТЬ, наполненность энергией, способность к внутренней сонастройке и регуляции всех своих функций.</p>\n'+
      '<p> Соблюдение плана пятиминутных медитации подведет вас к раскрытию вашего потенциала в полной мере, научит организм грамотно справляться со стрессом, поддерживать состояние потока и находить все ответы через соприкосновение с Источником внутри вас. Это невероятно просто, легко и совершенно бесплатно.</p>\n'+

      '<p>ПРОЦЕСС МЕДИТАЦИИ уже дан нам по праву рождения, однако мы не осознаем его, не используем в полной мере.</p>\n'+
      '<p>Данное приложение позволит вам ОСОЗНАННО входить в медитацию через сердце, исцелять и поддерживать свою структуру, получать инсайты и откровения, подарит вам новое видение привычных процессов жизни в единстве с миром.</p>\n'+
      '<p>…Великое сокрыто внутри нас.</p>';


  }

});

$$(document).on('page:init', '.page[data-name="about2"]', function (e) {
    myapp.dialog.alert('инит экран about2');
    var username = 'test_user';

    var query = query11+'api_test_new_api';

    myapp.request.post(query, {
            username: username,
            password: 'bar'
        },
        function (data) {
            data = JSON.parse(data);
            if (data.success === true) {
                myapp.dialog.alert('data.success');
                }
        },
    function (data2) {
        myapp.dialog.alert('error 333');
    });

});

$$(document).on('page:init', '.page[data-name="map"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var query = query11+'api_zen_get_for_map';

  var zapros_mobile  = 'запрос пользователя на карту';

  var current_latitude = localStorage.getItem('mob_current_latitude');
  var current_longitude = localStorage.getItem('mob_current_longitude');


  myapp.request.post(query, {
      zapros_mobile: zapros_mobile
    },
    function (data) {

      data = JSON.parse(data);

      if (data.success !== true){

        ymaps.ready(init);

        function init () {

          var myMap = new ymaps.Map("map", {
              center: [current_latitude, current_longitude],
              zoom: 14,
              controls: ['zoomControl']
            }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #1614ff; font-weight: bold; font-size: 12px">$[properties.iconContent]</div>'
            );

          var myGeoObjects = [];

          var text_baloon = 'медитируем . . .';

          for (var i = data.length - 1; i >= 0; i--) {

            myGeoObjects[i] = new ymaps.Placemark([data[i].zen_latitude,data[i].zen_longitude],{
              clusterCaption: 'Заголовок',
              balloonContentBody: text_baloon
            },{
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              iconImageHref: 'img/point_1.gif',
              // Размеры метки.
              iconImageSize: [70, 50],
              // Смещение левого верхнего угла иконки относительно её «ножки» (точки привязки).
              iconImageOffset: [-51, -30],
              iconContentOffset: [1, 1],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
            });

          }

          var clusterIcons=[{
            href:'img/point_1.gif',
            size:[40,80],
            offset:[0,0]
          }];

          var clusterer = new ymaps.Clusterer({
            clusterDisableClickZoom: false,
            clusterOpenBalloonOnClick: false,
            // Устанавливаем стандартный макет балуна кластера "Карусель".
            clusterBalloonContentLayout: 'cluster#balloonCarousel',
            // Устанавливаем собственный макет.
            //clusterBalloonItemContentLayout: customItemContentLayout,
            // Устанавливаем режим открытия балуна.
            // В данном примере балун никогда не будет открываться в режиме панели.
            clusterBalloonPanelMaxMapArea: 0,
            // Устанавливаем размеры макета контента балуна (в пикселях).
            clusterBalloonContentLayoutWidth: 300,
            clusterBalloonContentLayoutHeight: 200,
            // Устанавливаем максимальное количество элементов в нижней панели на одной странице
            clusterBalloonPagerSize: 5
            // Настройка внешего вида нижней панели.
            // Режим marker рекомендуется использовать с небольшим количеством элементов.
            // clusterBalloonPagerType: 'marker',
            // Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
            // clusterBalloonCycling: false,
            // Можно отключить отображение меню навигации.
            // clusterBalloonPagerVisible: false
          });

          clusterer.add(myGeoObjects);
          myMap.geoObjects.add(clusterer);
        }

      }

    },
    function (data2) {
      myapp.dialog.alert('error 333');
    });



// ===================  прошлый мап ===============================

  // ymaps.ready(init);
  //
  // function init() {
  //   var myMap = new ymaps.Map("map", {
  //       center: [current_latitude, current_longitude],
  //       zoom: 14
  //     }),
  //
  //     // Создаем геообъект с типом геометрии "Точка".
  //     myGeoObject = new ymaps.GeoObject({
  //       // Описание геометрии.
  //       geometry: {
  //         type: "Point",
  //         coordinates: [current_latitude, current_longitude]
  //       },
  //       // Свойства.
  //       properties: {
  //         // Контент метки.
  //         iconContent: 'Вы здесь.'
  //       }
  //     }, {
  //       // Опции.
  //       // Иконка метки будет растягиваться под размер ее содержимого.
  //       preset: 'islands#blackStretchyIcon',
  //       // Метку можно перемещать.
  //       draggable: false
  //     });
  //
  //
  //   myMap.geoObjects
  //     .add(myGeoObject);
  // }

// ===================  прошлый мап ===============================


});

$$(document).on('page:init', '.page[data-name="profile"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var user_name = localStorage.getItem('mob_user_name');
  if (user_name !== null){
    document.getElementById('value_user_name').innerHTML = user_name;
  } else {
    if (curr_language === 'русский'){
      document.getElementById('value_user_name').innerHTML = 'Имя';
    }
  }
  var user_name_2 = localStorage.getItem('mob_user_name_2');
  if (user_name_2 !== null){
    document.getElementById('value_user_name_2').innerHTML = user_name_2;
  }  else {
    if (curr_language === 'русский'){
      document.getElementById('value_user_name_2').innerHTML = 'Фамилия';
    }
  }
  var user_email = localStorage.getItem('mob_user_email');
  if (user_email !== null){
    document.getElementById('value_email').innerHTML = user_email;
  }  else {
    if (curr_language === 'русский'){
      document.getElementById('value_email').innerHTML = 'Эл.почта';
    }
  }


  if (curr_language === 'русский'){
    // document.getElementById('lang_profile_orr').innerHTML = 'или';
    // document.getElementById('lang_profile_Link').innerHTML = 'Привязать аккаунт:';
    document.getElementById('lang_statistic_in_profile').innerHTML = 'Статистика';
    document.getElementById('lang_profile_link_back').innerHTML = 'Назад';
  }

  var user_avatar = localStorage.getItem('mob_avatar_foto');
  if (user_avatar !== null){
    document.getElementById('block_avatar').innerHTML = '<img src="'+user_avatar+'" style="width: 100%">\n';
  }

});

$$(document).on('page:init', '.page[data-name="option"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var dd_checker_gong_begin = localStorage.getItem('mob_gong_begin');
  if (dd_checker_gong_begin === 'off'){
    document.getElementById('checker_gong_begin').checked = false;
  }
  var current_lang = localStorage.getItem('mob_current_lang');
  if (current_lang === 'русский'){
    document.getElementById('block_current_lang').innerHTML = current_lang;
  }

  var morning_timer = localStorage.getItem('mob_morning_timer');
  if (morning_timer === 'за 10 мин.'){
    if (current_lang === 'русский'){
      document.getElementById('block_morning_timer').innerHTML = morning_timer;
    } else {
      morning_timer = '10 min. before';
      document.getElementById('block_morning_timer').innerHTML = morning_timer;
    }
  } else {
    if (current_lang === 'русский'){
      morning_timer = 'за 5 мин.';
      document.getElementById('block_morning_timer').innerHTML = morning_timer;
    }
  }

  var day_timer = localStorage.getItem('mob_day_timer');
  if (day_timer === 'за 5 мин.'){
    if (current_lang === 'русский'){
      document.getElementById('block_day_timer').innerHTML = day_timer;
    } else {
      day_timer = '5 min. before';
      document.getElementById('block_day_timer').innerHTML = day_timer;
    }

  } else {
    if (current_lang === 'русский'){
      day_timer = 'вовремя';
      document.getElementById('block_day_timer').innerHTML = day_timer;
    }
  }

  var sound_type = localStorage.getItem('mob_sound_type');
  if (sound_type === 'гонг'){
    if (current_lang === 'русский'){
      document.getElementById('block_sound_type').innerHTML = sound_type;
    } else {
      sound_type = 'gong';
      document.getElementById('block_sound_type').innerHTML = sound_type;
    }
  } else {
    if (current_lang === 'русский'){
      sound_type = 'колокольчик';
      document.getElementById('block_sound_type').innerHTML = sound_type;
    }
  }

  var meditation_day_time = localStorage.getItem('mob_set_all_day_time');
  if (current_lang === 'русский'){
    document.getElementById('block_meditation_time').innerHTML = Number(meditation_day_time) / 5 + ' мин.';
  } else {
    document.getElementById('block_meditation_time').innerHTML = Number(meditation_day_time) / 5 + ' min.';
  }



  if (curr_language === 'русский'){
    document.getElementById('lang_option_link_back').innerHTML = 'Назад';
    document.getElementById('lang_option_start_sound').innerHTML = 'Звук при старте таймера';
    document.getElementById('lang_option_language').innerHTML = 'Язык';
    document.getElementById('lang_option_morning_timer').innerHTML = 'Напоминание утром';
    document.getElementById('lang_option_other_timer').innerHTML = 'Остальные напоминания';
    document.getElementById('lang_option_end_sound').innerHTML = 'Звук окончания';
    document.getElementById('lang_option_Meditation_time').innerHTML = 'Время медитации';

  }


});

$$(document).on('page:init', '.page[data-name="world_wise"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;


  var now = new Date();
  var year_now = now.getFullYear();
  var month_now = now.getMonth()+1;
  var day_now = now.getDate();

  var curr_day = 'год = ' + year_now + ' месяц = ' + month_now + ' день =  ' + day_now;

  //alert('curr_day = ' + curr_day);

  var last_curr_day = localStorage.getItem('mob_last_curr_day');

  if (curr_day !== last_curr_day){

    var query = query11+'api_zen_get_w_wise';

    var w_wise_id = localStorage.getItem('mob_w_wise_id');

    if (w_wise_id === null || w_wise_id === 'NaN'){
      w_wise_id = 1;
    }

    myapp.request.post(query, {
        w_wise_id: w_wise_id
      },
      function (data) {
        localStorage.setItem('mob_json_w_wise', data);
        data = JSON.parse(data);

        var data_text = data[0].w_wise_text;
        var data_title = data[0].w_wise_title;

        var data_text_eng = data[0].w_wise_text_eng;
        var data_title_eng = data[0].w_wise_title_eng;

        if (data_title !== ''){
          if (curr_language === 'русский'){
            document.getElementById('w_wise_title_inner').innerHTML = data_title;
          } else if (data_title_eng !== null){
            document.getElementById('w_wise_title_inner').innerHTML = data_title_eng;
          }
        }

        if (curr_language === 'русский'){
          document.getElementById('w_wise_text_inner').innerHTML = data_text;
        } else {
          document.getElementById('w_wise_text_inner').innerHTML = data_text_eng;
        }



        w_wise_id = Number(data[0].id) + 1;
        localStorage.setItem('mob_w_wise_id', w_wise_id);

        localStorage.setItem('mob_last_curr_day', curr_day);

 // ======================== вычисляем высоту и отступ ================================

        var hight_big_div = document.getElementById('height_big_div').clientHeight;

        //alert('hight_big_div = ' + hight_big_div);

        var hight_inner_div = document.getElementById('height_inner_div').clientHeight;

        //alert('height_inner_div = ' + hight_inner_div);

        var result_height_big = hight_big_div/2;
        var result_height_inner = hight_inner_div/2;
        var result_all = result_height_big - result_height_inner - 20;

        //alert('result_all = ' + result_all);

        if (result_all >= 0){
          document.getElementById('height_inner_div').style = 'margin-left: 5%; margin-right: 5%; margin-top:' + result_all + 'px';
        }
 // ======================== вычисляем высоту и отступ ================================

      },
      function (data2) {
        myapp.dialog.alert('error 333');
      });


  }
  else {
    var json_w_wise = localStorage.getItem('mob_json_w_wise');

    var data = JSON.parse(json_w_wise);

    var data_text = data[0].w_wise_text;
    var data_title = data[0].w_wise_title;

    var data_text_eng = data[0].w_wise_text_eng;
    var data_title_eng = data[0].w_wise_title_eng;

    if (data_title !== ''){
      if (curr_language === 'русский'){
        document.getElementById('w_wise_title_inner').innerHTML = data_title;
      } else if (data_title_eng !== ''){
        document.getElementById('w_wise_title_inner').innerHTML = data_title_eng;
      }
    }

    if (curr_language === 'русский'){
      document.getElementById('w_wise_text_inner').innerHTML = data_text;
    } else {
      document.getElementById('w_wise_text_inner').innerHTML = data_text_eng;
    }



 // ======================== вычисляем высоту и отступ ================================

    var hight_big_div = document.getElementById('height_big_div').clientHeight;

    //alert('hight_big_div = ' + hight_big_div);

    var hight_inner_div = document.getElementById('height_inner_div').clientHeight;

    //alert('height_inner_div = ' + hight_inner_div);

    var result_height_big = hight_big_div/2;
    var result_height_inner = hight_inner_div/2;
    var result_all = result_height_big - result_height_inner - 20;

    //alert('result_all = ' + result_all);

    if (result_all >= 0){
      document.getElementById('height_inner_div').style = 'margin-left: 5%; margin-right: 5%; margin-top:' + result_all + 'px';
    }
// ======================== вычисляем высоту и отступ ================================


  }



  if (curr_language === 'русский'){
    document.getElementById('lang_world_wise_link_back').innerHTML = 'Назад';


  }

});

$$(document).on('page:init', '.page[data-name="change_language"]', function (e) {
  //myapp.dialog.alert('111 инит экран about');
  var current_lang = localStorage.getItem('mob_current_lang');
  if (current_lang === 'русский'){
    document.getElementById('icon_check_lang_russ').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_lang_engl').innerHTML = '';
    document.getElementById('lang_lang').innerHTML = 'Выберите язык:';
    document.getElementById('lang_lang_link_back').innerHTML = 'Назад';
  }
});

$$(document).on('page:init', '.page[data-name="morning_timer"]', function (e) {
  //myapp.dialog.alert('111 инит экран about');
  var morning_timer = localStorage.getItem('mob_morning_timer');
  if (morning_timer === 'за 10 мин.'){
    document.getElementById('icon_check_morning_timer_10').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_morning_timer_5').innerHTML = '';
  }
  if (curr_language === 'русский'){

    document.getElementById('lang_morning_timer_link_back').innerHTML = 'Назад';
    document.getElementById('lang_morning_timer_remind').innerHTML = 'Напоминание утром:';
    document.getElementById('lang_morning_timer_5').innerHTML = 'за 5 мин.';
    document.getElementById('lang_morning_timer_10').innerHTML = 'за 10 мин.';

  }

});

$$(document).on('page:init', '.page[data-name="day_timer"]', function (e) {
  //myapp.dialog.alert('111 инит экран about');
  var day_timer = localStorage.getItem('mob_day_timer');
  if (day_timer === 'за 5 мин.'){
    document.getElementById('icon_check_day_timer_2').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_day_timer_1').innerHTML = '';
  }

  if (curr_language === 'русский'){

    document.getElementById('lang_day_timer_link_back').innerHTML = 'Назад';
    document.getElementById('lang_day_timer_remind').innerHTML = 'Напоминание днем:';
    document.getElementById('lang_day_timer_in_time').innerHTML = 'вовремя';
    document.getElementById('lang_day_timer_5').innerHTML = 'за 5 мин.';

  }
});

$$(document).on('page:init', '.page[data-name="sound_type"]', function (e) {
  //myapp.dialog.alert('111 инит экран about');
  var sound_type = localStorage.getItem('mob_sound_type');
  if (sound_type === 'гонг'){
    document.getElementById('icon_check_sound_type_gong').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_sound_type_kolokol').innerHTML = '';
  }

  if (curr_language === 'русский'){

    document.getElementById('lang_sound_type_link_back').innerHTML = 'Назад';
    document.getElementById('lang_sound_type').innerHTML = 'Звук окончания:';
    document.getElementById('lang_sound_type_kolokol').innerHTML = 'колокольчик';
    document.getElementById('lang_sound_type_gong').innerHTML = 'гонг';

  }
});

$$(document).on('page:init', '.page[data-name="meditation_time"]', function (e) {
  //myapp.dialog.alert('111 инит экран about');
  var meditation_time = localStorage.getItem('mob_set_all_day_time');
  if (meditation_time === '50'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '75'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '100'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '125'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '150'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '175'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '200'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '';
  }
  if (meditation_time === '225'){
    document.getElementById('icon_check_meditation_time_25').innerHTML = '';
    document.getElementById('icon_check_meditation_time_50').innerHTML = '';
    document.getElementById('icon_check_meditation_time_75').innerHTML = '';
    document.getElementById('icon_check_meditation_time_100').innerHTML = '';
    document.getElementById('icon_check_meditation_time_125').innerHTML = '';
    document.getElementById('icon_check_meditation_time_150').innerHTML = '';
    document.getElementById('icon_check_meditation_time_175').innerHTML = '';
    document.getElementById('icon_check_meditation_time_200').innerHTML = '';
    document.getElementById('icon_check_meditation_time_225').innerHTML = '<i class="f7-icons " style="color: #2C3B2B">checkmark_alt</i>';
  }

  if (curr_language === 'русский'){

    document.getElementById('lang_meditation_time_link_back').innerHTML = 'Назад';
    document.getElementById('lang_meditation_time').innerHTML = 'Время медитации: ';
    document.getElementById('lang_meditation_time_5').innerHTML = '5 мин.';
    document.getElementById('lang_meditation_time_10').innerHTML = '10 мин.';
    document.getElementById('lang_meditation_time_15').innerHTML = '15 мин.';
    document.getElementById('lang_meditation_time_20').innerHTML = '20 мин.';
    document.getElementById('lang_meditation_time_25').innerHTML = '25 мин.';
    document.getElementById('lang_meditation_time_30').innerHTML = '30 мин.';
    document.getElementById('lang_meditation_time_35').innerHTML = '35 мин.';
    document.getElementById('lang_meditation_time_40').innerHTML = '40 мин.';
    document.getElementById('lang_meditation_time_45').innerHTML = '45 мин.';


  }

});

$$(document).on('page:init', '.page[data-name="statistic"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;


  var now = new Date();
  var day_now = now.getDate();

  var ddd_month_now = localStorage.getItem('mob_month_now');
  var ddd_day_now = localStorage.getItem('mob_day_now');

// ================  месяца ========================
  var col_day_in_month;
  function day_in_month(num_month) {
    if (Number(num_month) === 1){col_day_in_month = 31}
    if (Number(num_month) === 2){col_day_in_month = 28}
    if (Number(num_month) === 3){col_day_in_month = 31}
    if (Number(num_month) === 4){col_day_in_month = 30}
    if (Number(num_month) === 5){col_day_in_month = 31}
    if (Number(num_month) === 6){col_day_in_month = 30}
    if (Number(num_month) === 7){col_day_in_month = 31}
    if (Number(num_month) === 8){col_day_in_month = 31}
    if (Number(num_month) === 9){col_day_in_month = 30}
    if (Number(num_month) === 10){col_day_in_month = 31}
    if (Number(num_month) === 11){col_day_in_month = 30}
    if (Number(num_month) === 12){col_day_in_month = 31}
  }

  var number_day = now.getDay();

  var ddd_month_displ_1, ddd_day_displ_1, ddd_displ_all_1;
  var ddd_month_displ_2, ddd_day_displ_2, ddd_displ_all_2;
  var ddd_month_displ_3, ddd_day_displ_3, ddd_displ_all_3;
  var ddd_month_displ_4, ddd_day_displ_4, ddd_displ_all_4;
  var ddd_month_displ_5, ddd_day_displ_5, ddd_displ_all_5;
  var ddd_month_displ_6, ddd_day_displ_6, ddd_displ_all_6;
  var ddd_month_displ_0, ddd_day_displ_0, ddd_displ_all_0;

  if (number_day === 0){
    ddd_day_displ_1 = Number(ddd_day_now) - 6;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }

    ddd_day_displ_2 = Number(ddd_day_now) - 5;
    if (ddd_day_displ_2 <= 0){
      ddd_month_displ_2 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      day_in_month(Number(ddd_month_displ_2));
      ddd_day_displ_2 = col_day_in_month + ddd_day_displ_2;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
    else {
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }

    ddd_day_displ_3 = Number(ddd_day_now) - 4;
    if (ddd_day_displ_3 <= 0){
      ddd_month_displ_3 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      day_in_month(Number(ddd_month_displ_3));
      ddd_day_displ_3 = col_day_in_month + ddd_day_displ_3;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
    else {
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }

    ddd_day_displ_4 = Number(ddd_day_now) - 3;
    if (ddd_day_displ_4 <= 0){
      ddd_month_displ_4 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      day_in_month(Number(ddd_month_displ_4));
      ddd_day_displ_4 = col_day_in_month + ddd_day_displ_4;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }
    else {
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }

    ddd_day_displ_5 = Number(ddd_day_now) - 2;
    if (ddd_day_displ_5 <= 0){
      ddd_month_displ_5 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      } else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      day_in_month(Number(ddd_month_displ_5));
      ddd_day_displ_5 = col_day_in_month + ddd_day_displ_5;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
      ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
    }
    else {
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      } else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
    }

    ddd_day_displ_6 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_6 <= 0){
      ddd_month_displ_6 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      } else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      day_in_month(Number(ddd_month_displ_6));
      ddd_day_displ_6 = col_day_in_month + ddd_day_displ_6;
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      } else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
      ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;
    }
    else {
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      } else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;
    }

    ddd_day_displ_0 = Number(ddd_day_now);
    if (ddd_day_displ_0 < 10){
      ddd_day_displ_0 = '0' + ddd_day_displ_0
    }
    else {
      ddd_day_displ_0 = String(ddd_day_displ_0);
    }
    ddd_month_displ_0 = Number(ddd_month_now);
    if (ddd_month_displ_0 < 10){
      ddd_month_displ_0 = '0' + ddd_month_displ_0
    } else {
      ddd_month_displ_0 = String(ddd_month_displ_0);
    }
    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 6){
    ddd_day_displ_1 = Number(ddd_day_now) - 5;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now) - 4;
    if (ddd_day_displ_2 <= 0){
      ddd_month_displ_2 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      day_in_month(Number(ddd_month_displ_2));
      ddd_day_displ_2 = col_day_in_month + ddd_day_displ_2;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
    else {
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
//=====================================================================
    ddd_day_displ_3 = Number(ddd_day_now) - 3;
    if (ddd_day_displ_3 <= 0){
      ddd_month_displ_3 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      day_in_month(Number(ddd_month_displ_3));
      ddd_day_displ_3 = col_day_in_month + ddd_day_displ_3;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
    else {
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
//======================================================================
    ddd_day_displ_4 = Number(ddd_day_now) - 2;
    if (ddd_day_displ_4 <= 0){
      ddd_month_displ_4 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      day_in_month(Number(ddd_month_displ_4));
      ddd_day_displ_4 = col_day_in_month + ddd_day_displ_4;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }
    else {
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }
//======================================================================
    ddd_day_displ_5 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_5 <= 0){
      ddd_month_displ_5 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      } else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      day_in_month(Number(ddd_month_displ_5));
      ddd_day_displ_5 = col_day_in_month + ddd_day_displ_5;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
      ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
    }
    else {
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      } else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
    }
//=====================================================================
    ddd_day_displ_6 = Number(ddd_day_now);
    if (ddd_day_displ_6 < 10){
      ddd_day_displ_6 = '0' + ddd_day_displ_6
    }
    else {
      ddd_day_displ_6 = String(ddd_day_displ_6);
    }
    ddd_month_displ_6 = Number(ddd_month_now);
    if (ddd_month_displ_6 < 10){
      ddd_month_displ_6 = '0' + ddd_month_displ_6
    }
    else {
      ddd_month_displ_6 = String(ddd_month_displ_6);
    }
    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

// ================= future =========================================
    ddd_day_displ_0 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = '01';
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 5){
    ddd_day_displ_1 = Number(ddd_day_now) - 4;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now) - 3;
    if (ddd_day_displ_2 <= 0){
      ddd_month_displ_2 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      day_in_month(Number(ddd_month_displ_2));
      ddd_day_displ_2 = col_day_in_month + ddd_day_displ_2;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
    else {
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
//=====================================================================
    ddd_day_displ_3 = Number(ddd_day_now) - 2;
    if (ddd_day_displ_3 <= 0){
      ddd_month_displ_3 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      day_in_month(Number(ddd_month_displ_3));
      ddd_day_displ_3 = col_day_in_month + ddd_day_displ_3;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
    else {
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
//======================================================================
    ddd_day_displ_4 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_4 <= 0){
      ddd_month_displ_4 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      day_in_month(Number(ddd_month_displ_4));
      ddd_day_displ_4 = col_day_in_month + ddd_day_displ_4;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }
    else {
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      } else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
    }
//======================================================================
    ddd_day_displ_5 = Number(ddd_day_now);
    if (ddd_day_displ_5 < 10){
      ddd_day_displ_5 = '0' + ddd_day_displ_5
    }
    else {
      ddd_day_displ_5 = String(ddd_day_displ_5);
    }
    ddd_month_displ_5 = Number(ddd_month_now);
    if (ddd_month_displ_5 < 10){
      ddd_month_displ_5 = '0' + ddd_month_displ_5
    }
    else {
      ddd_month_displ_5 = String(ddd_month_displ_5);
    }
    ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
// ================= future =========================================
    ddd_day_displ_6 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_6 > col_day_in_month){
      ddd_month_displ_6 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_day_displ_6 = '01';
    }
    else {
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }

    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

//======================================================================
    ddd_day_displ_0 = Number(ddd_day_now) + 2;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = ddd_day_displ_0 - col_day_in_month;
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      }
      else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 4){
    ddd_day_displ_1 = Number(ddd_day_now) - 3;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now) - 2;
    if (ddd_day_displ_2 <= 0){
      ddd_month_displ_2 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      day_in_month(Number(ddd_month_displ_2));
      ddd_day_displ_2 = col_day_in_month + ddd_day_displ_2;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
    else {
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
//=====================================================================
    ddd_day_displ_3 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_3 <= 0){
      ddd_month_displ_3 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      day_in_month(Number(ddd_month_displ_3));
      ddd_day_displ_3 = col_day_in_month + ddd_day_displ_3;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
    else {
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      } else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
    }
//======================================================================
    ddd_day_displ_4 = Number(ddd_day_now);
    if (ddd_day_displ_4 < 10){
      ddd_day_displ_4 = '0' + ddd_day_displ_4
    }
    else {
      ddd_day_displ_4 = String(ddd_day_displ_4);
    }
    ddd_month_displ_4 = Number(ddd_month_now);
    if (ddd_month_displ_4 < 10){
      ddd_month_displ_4 = '0' + ddd_month_displ_4
    }
    else {
      ddd_month_displ_4 = String(ddd_month_displ_4);
    }
    ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
// ================= future =========================================
    ddd_day_displ_5 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_5 > col_day_in_month){
      ddd_month_displ_5 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_day_displ_5 = ddd_day_displ_5 - col_day_in_month;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }
    else {
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }

    ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
//======================================================================
    ddd_day_displ_6 = Number(ddd_day_now) + 2;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_6 > col_day_in_month){
      ddd_month_displ_6 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_day_displ_6 = ddd_day_displ_6 - col_day_in_month;
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }
    else {
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      } else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }

    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

//======================================================================
    ddd_day_displ_0 = Number(ddd_day_now) + 3;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = ddd_day_displ_0 - col_day_in_month;
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      }
      else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 3){
    ddd_day_displ_1 = Number(ddd_day_now) - 2;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_2 <= 0){
      ddd_month_displ_2 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      day_in_month(Number(ddd_month_displ_2));
      ddd_day_displ_2 = col_day_in_month + ddd_day_displ_2;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
    else {
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
    }
//=====================================================================
    ddd_day_displ_3 = Number(ddd_day_now);
    if (ddd_day_displ_3 < 10){
      ddd_day_displ_3 = '0' + ddd_day_displ_3
    }
    else {
      ddd_day_displ_3 = String(ddd_day_displ_3);
    }
    ddd_month_displ_3 = Number(ddd_month_now);
    if (ddd_month_displ_3 < 10){
      ddd_month_displ_3 = '0' + ddd_month_displ_3
    }
    else {
      ddd_month_displ_3 = String(ddd_month_displ_3);
    }
    ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
// ================= future =========================================
    ddd_day_displ_4 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_4 > col_day_in_month){
      ddd_month_displ_4 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_day_displ_4 = ddd_day_displ_4 - col_day_in_month;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }
    else {
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }

    ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
//======================================================================
    ddd_day_displ_5 = Number(ddd_day_now) + 2;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_5 > col_day_in_month){
      ddd_month_displ_5 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_day_displ_5 = ddd_day_displ_5 - col_day_in_month;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }
    else {
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }

    ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
//======================================================================
    ddd_day_displ_6 = Number(ddd_day_now) + 3;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_6 > col_day_in_month){
      ddd_month_displ_6 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_day_displ_6 = ddd_day_displ_6 - col_day_in_month;
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }
    else {
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      } else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }

    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

//======================================================================
    ddd_day_displ_0 = Number(ddd_day_now) + 4;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = ddd_day_displ_0 - col_day_in_month;
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      }
      else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 2){
    ddd_day_displ_1 = Number(ddd_day_now) - 1;
    if (ddd_day_displ_1 <= 0){
      ddd_month_displ_1 = Number(ddd_month_now) - 1;
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      day_in_month(Number(ddd_month_displ_1));
      ddd_day_displ_1 = Number(col_day_in_month) + Number(ddd_day_displ_1);
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    } else {
      if (ddd_day_displ_1 < 10){
        ddd_day_displ_1 = '0' + ddd_day_displ_1
      } else {
        ddd_day_displ_1 = String(ddd_day_displ_1);
      }
      ddd_month_displ_1 = Number(ddd_month_now);
      if (ddd_month_displ_1 < 10){
        ddd_month_displ_1 = '0' + ddd_month_displ_1
      } else {
        ddd_month_displ_1 = String(ddd_month_displ_1);
      }
      ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
    }
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now);
    if (ddd_day_displ_2 < 10){
      ddd_day_displ_2 = '0' + ddd_day_displ_2
    }
    else {
      ddd_day_displ_2 = String(ddd_day_displ_2);
    }
    ddd_month_displ_2 = Number(ddd_month_now);
    if (ddd_month_displ_2 < 10){
      ddd_month_displ_2 = '0' + ddd_month_displ_2
    }
    else {
      ddd_month_displ_2 = String(ddd_month_displ_2);
    }
    ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
// ================= future =========================================
    ddd_day_displ_3 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_3 > col_day_in_month){
      ddd_month_displ_3 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      }
      else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_day_displ_3 = ddd_day_displ_3 - col_day_in_month;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
    }
    else {
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      }
      else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
    }

    ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
//=====================================================================
    ddd_day_displ_4 = Number(ddd_day_now) + 2;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_4 > col_day_in_month){
      ddd_month_displ_4 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_day_displ_4 = ddd_day_displ_4 - col_day_in_month;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }
    else {
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }

    ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
//======================================================================
    ddd_day_displ_5 = Number(ddd_day_now) + 3;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_5 > col_day_in_month){
      ddd_month_displ_5 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_day_displ_5 = ddd_day_displ_5 - col_day_in_month;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }
    else {
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }

    ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
//======================================================================
    ddd_day_displ_6 = Number(ddd_day_now) + 4;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_6 > col_day_in_month){
      ddd_month_displ_6 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_day_displ_6 = ddd_day_displ_6 - col_day_in_month;
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }
    else {
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      } else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }

    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

//======================================================================
    ddd_day_displ_0 = Number(ddd_day_now) + 5;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = ddd_day_displ_0 - col_day_in_month;
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      }
      else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  if (number_day === 1){
    ddd_day_displ_1 = Number(ddd_day_now);
    if (ddd_day_displ_1 < 10){
      ddd_day_displ_1 = '0' + ddd_day_displ_1
    }
    else {
      ddd_day_displ_1 = String(ddd_day_displ_1);
    }
    ddd_month_displ_1 = Number(ddd_month_now);
    if (ddd_month_displ_1 < 10){
      ddd_month_displ_1 = '0' + ddd_month_displ_1
    }
    else {
      ddd_month_displ_1 = String(ddd_month_displ_1);
    }
    ddd_displ_all_1 = ddd_day_displ_1 + '.' + ddd_month_displ_1;
//=====================================================================
    ddd_day_displ_2 = Number(ddd_day_now) + 1;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_2 > col_day_in_month){
      ddd_month_displ_2 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      }
      else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      ddd_day_displ_2 = ddd_day_displ_2 - col_day_in_month;
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      }
      else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
    }
    else {
      ddd_month_displ_2 = Number(ddd_month_now);
      if (ddd_month_displ_2 < 10){
        ddd_month_displ_2 = '0' + ddd_month_displ_2
      }
      else {
        ddd_month_displ_2 = String(ddd_month_displ_2);
      }
      if (ddd_day_displ_2 < 10){
        ddd_day_displ_2 = '0' + ddd_day_displ_2
      } else {
        ddd_day_displ_2 = String(ddd_day_displ_2);
      }
    }

    ddd_displ_all_2 = ddd_day_displ_2 + '.' + ddd_month_displ_2;
// ================= future =========================================
    ddd_day_displ_3 = Number(ddd_day_now) + 2;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_3 > col_day_in_month){
      ddd_month_displ_3 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      }
      else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      ddd_day_displ_3 = ddd_day_displ_3 - col_day_in_month;
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      }
      else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
    }
    else {
      ddd_month_displ_3 = Number(ddd_month_now);
      if (ddd_month_displ_3 < 10){
        ddd_month_displ_3 = '0' + ddd_month_displ_3
      }
      else {
        ddd_month_displ_3 = String(ddd_month_displ_3);
      }
      if (ddd_day_displ_3 < 10){
        ddd_day_displ_3 = '0' + ddd_day_displ_3
      } else {
        ddd_day_displ_3 = String(ddd_day_displ_3);
      }
    }

    ddd_displ_all_3 = ddd_day_displ_3 + '.' + ddd_month_displ_3;
//=====================================================================
    ddd_day_displ_4 = Number(ddd_day_now) + 3;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_4 > col_day_in_month){
      ddd_month_displ_4 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      ddd_day_displ_4 = ddd_day_displ_4 - col_day_in_month;
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      }
      else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }
    else {
      ddd_month_displ_4 = Number(ddd_month_now);
      if (ddd_month_displ_4 < 10){
        ddd_month_displ_4 = '0' + ddd_month_displ_4
      }
      else {
        ddd_month_displ_4 = String(ddd_month_displ_4);
      }
      if (ddd_day_displ_4 < 10){
        ddd_day_displ_4 = '0' + ddd_day_displ_4
      } else {
        ddd_day_displ_4 = String(ddd_day_displ_4);
      }
    }

    ddd_displ_all_4 = ddd_day_displ_4 + '.' + ddd_month_displ_4;
//======================================================================
    ddd_day_displ_5 = Number(ddd_day_now) + 4;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_5 > col_day_in_month){
      ddd_month_displ_5 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      ddd_day_displ_5 = ddd_day_displ_5 - col_day_in_month;
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      }
      else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }
    else {
      ddd_month_displ_5 = Number(ddd_month_now);
      if (ddd_month_displ_5 < 10){
        ddd_month_displ_5 = '0' + ddd_month_displ_5
      }
      else {
        ddd_month_displ_5 = String(ddd_month_displ_5);
      }
      if (ddd_day_displ_5 < 10){
        ddd_day_displ_5 = '0' + ddd_day_displ_5
      } else {
        ddd_day_displ_5 = String(ddd_day_displ_5);
      }
    }

    ddd_displ_all_5 = ddd_day_displ_5 + '.' + ddd_month_displ_5;
//======================================================================
    ddd_day_displ_6 = Number(ddd_day_now) + 5;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_6 > col_day_in_month){
      ddd_month_displ_6 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      ddd_day_displ_6 = ddd_day_displ_6 - col_day_in_month;
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      }
      else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }
    else {
      ddd_month_displ_6 = Number(ddd_month_now);
      if (ddd_month_displ_6 < 10){
        ddd_month_displ_6 = '0' + ddd_month_displ_6
      }
      else {
        ddd_month_displ_6 = String(ddd_month_displ_6);
      }
      if (ddd_day_displ_6 < 10){
        ddd_day_displ_6 = '0' + ddd_day_displ_6
      } else {
        ddd_day_displ_6 = String(ddd_day_displ_6);
      }
    }

    ddd_displ_all_6 = ddd_day_displ_6 + '.' + ddd_month_displ_6;

//======================================================================
    ddd_day_displ_0 = Number(ddd_day_now) + 6;
    day_in_month(Number(ddd_month_now));
    if(ddd_day_displ_0 > col_day_in_month){
      ddd_month_displ_0 = Number(ddd_month_now) + 1;
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      ddd_day_displ_0 = ddd_day_displ_0 - col_day_in_month;
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      }
      else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }
    else {
      ddd_month_displ_0 = Number(ddd_month_now);
      if (ddd_month_displ_0 < 10){
        ddd_month_displ_0 = '0' + ddd_month_displ_0
      }
      else {
        ddd_month_displ_0 = String(ddd_month_displ_0);
      }
      if (ddd_day_displ_0 < 10){
        ddd_day_displ_0 = '0' + ddd_day_displ_0
      } else {
        ddd_day_displ_0 = String(ddd_day_displ_0);
      }
    }

    ddd_displ_all_0 = ddd_day_displ_0 + '.' + ddd_month_displ_0;


  }

  document.getElementById('date_col_1').innerHTML = 'Пн <br> '+ddd_displ_all_1;
  document.getElementById('date_col_2').innerHTML = 'Вт <br> '+ddd_displ_all_2;
  document.getElementById('date_col_3').innerHTML = 'Ср <br> '+ddd_displ_all_3;
  document.getElementById('date_col_4').innerHTML = 'Чт <br> '+ddd_displ_all_4;
  document.getElementById('date_col_5').innerHTML = 'Пт <br> '+ddd_displ_all_5;
  document.getElementById('date_col_6').innerHTML = 'Сб <br> '+ddd_displ_all_6;
  document.getElementById('date_col_0').innerHTML = 'Вс <br> '+ddd_displ_all_0;

  var dd_displ_all_massiv = [ddd_displ_all_0, ddd_displ_all_1, ddd_displ_all_2, ddd_displ_all_3, ddd_displ_all_4, ddd_displ_all_5, ddd_displ_all_6];


  var data_income_practic, den_income_practic, data_displ_practic, den_displ_practic;

  var checker_ok = 0;

  var block_id, graph_id, el_data;

  var cell_practic;


  var user_id = localStorage.getItem('mob_user_id');

  var query = query11+'api_zen_list_checker';
  myapp.request.post(query, {
      user_id: user_id
    },
    function (data) {
      data = JSON.parse(data);
      var ob_col_vo_practic = data.length;

      if (ob_col_vo_practic > 0){
        if (ob_col_vo_practic > 10){

          for (var j = 0; j<=6; j++){
            checker_ok = 0;
            if (j === 0){den_displ_practic = 'ВС'}
            if (j === 1){den_displ_practic = 'ПН'}
            if (j === 2){den_displ_practic = 'ВТ'}
            if (j === 3){den_displ_practic = 'СР'}
            if (j === 4){den_displ_practic = 'ЧТ'}
            if (j === 5){den_displ_practic = 'ПТ'}
            if (j === 6){den_displ_practic = 'СБ'}

            for (var i = ob_col_vo_practic-1; i >= ob_col_vo_practic-10; i--){
              data_income_practic = data[i].zen_date_practic;
              den_income_practic = data[i].zen_den_practic;

              data_displ_practic = dd_displ_all_massiv[j];

              if (data_income_practic === data_displ_practic && den_income_practic === den_displ_practic){
                if (data[i].zen_practic_1 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_2 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_3 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_4 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_5 === 'ok'){
                  checker_ok = checker_ok + 1;
                }

                block_id = 'col_pract_' + j;
                document.getElementById(block_id).innerHTML = checker_ok;

                cell_practic = 'mob_graph_id_' + j;
                localStorage.setItem(cell_practic, checker_ok);

              }
            }
          }

        }
        else {
          for (var j = 0; j<=6; j++){
            checker_ok = 0;
            if (j === 0){den_displ_practic = 'ВС'}
            if (j === 1){den_displ_practic = 'ПН'}
            if (j === 2){den_displ_practic = 'ВТ'}
            if (j === 3){den_displ_practic = 'СР'}
            if (j === 4){den_displ_practic = 'ЧТ'}
            if (j === 5){den_displ_practic = 'ПТ'}
            if (j === 6){den_displ_practic = 'СБ'}

            for (var i = ob_col_vo_practic-1; i >= 0; i--){
              data_income_practic = data[i].zen_date_practic;
              den_income_practic = data[i].zen_den_practic;

              data_displ_practic = dd_displ_all_massiv[j];

              if (data_income_practic === data_displ_practic && den_income_practic === den_displ_practic){
                if (data[i].zen_practic_1 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_2 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_3 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_4 === 'ok'){
                  checker_ok = checker_ok + 1;
                }
                if (data[i].zen_practic_5 === 'ok'){
                  checker_ok = checker_ok + 1;
                }

                block_id = 'col_pract_' + j;
                document.getElementById(block_id).innerHTML = checker_ok;

                cell_practic = 'mob_graph_id_' + j;
                localStorage.setItem(cell_practic, checker_ok);






              }

            }

          }
        }

        var ddtest, value_checker, memor_value;
        for (var k = 0; k<= 6; k++){

          memor_value = 'mob_graph_id_' + k;
          value_checker = localStorage.getItem(memor_value);

          graph_id = 'graph_id_' + k;
          el_data = document.getElementById(graph_id);
          el_data.dataset.graph = value_checker;
        }

        let months = document.querySelectorAll('td');
        const max = 5;

        months.forEach(month => {
          if (month.dataset.graph) {
            const value = month.dataset.graph;
            const bar = month.querySelector('span');
            const barHeight = (value / max) * 100;

            bar.style.height = `${barHeight}%`;
          }
        });


// ====================== статистика за год ====================================================

        var temp_date, temp_month, temp_month_2;

        var summ_month_1, summ_month_2, summ_month_3, summ_month_4, summ_month_5, summ_month_6;
        var summ_month_7, summ_month_8, summ_month_9, summ_month_10, summ_month_11, summ_month_12;

        var procent_month_1, procent_month_2, procent_month_3, procent_month_4, procent_month_5, procent_month_6;
        var procent_month_7, procent_month_8, procent_month_9, procent_month_10, procent_month_11, procent_month_12;

        var temp_pract_ok, kkk;

        summ_month_1 = 0;
        summ_month_2 = 0;
        summ_month_3 = 0;
        summ_month_4 = 0;
        summ_month_5 = 0;
        summ_month_6 = 0;
        summ_month_7 = 0;
        summ_month_8 = 0;
        summ_month_9 = 0;
        summ_month_10 = 0;
        summ_month_11 = 0;
        summ_month_12 = 0;


        for (var jj = 0; jj <= ob_col_vo_practic - 1; jj++){
          temp_date = data[jj].zen_date_practic;
          temp_month_2 = temp_date.split('.');
          temp_month = temp_month_2[1];




          if (temp_month === '01'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_1 = summ_month_1 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_1 = summ_month_1 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_1 = summ_month_1 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_1 = summ_month_1 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_1 = summ_month_1 + 1;
            }
          }
          if (temp_month === '02'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_2 = summ_month_2 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_2 = summ_month_2 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_2 = summ_month_2 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_2 = summ_month_2 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_2 = summ_month_2 + 1;
            }
          }
          if (temp_month === '03'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_3 = summ_month_3 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_3 = summ_month_3 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_3 = summ_month_3 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_3 = summ_month_3 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_3 = summ_month_3 + 1;
            }
          }
          if (temp_month === '04'){
            for (kkk = 1; kkk <= 5; kkk ++){
              temp_pract_ok = 'zen_practic_' + kkk;
              if (data[jj].temp_pract_ok === 'ok'){
                summ_month_4 = summ_month_4 + 1;
              }
            }
          }
          if (temp_month === '05'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_5 = summ_month_5 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_5 = summ_month_5 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_5 = summ_month_5 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_5 = summ_month_5 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_5 = summ_month_5 + 1;
            }
          }
          if (temp_month === '06'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_6 = summ_month_6 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_6 = summ_month_6 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_6 = summ_month_6 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_6 = summ_month_6 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_6 = summ_month_6 + 1;
            }
          }
          if (temp_month === '07'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_7 = summ_month_7 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_7 = summ_month_7 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_7 = summ_month_7 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_7 = summ_month_7 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_7 = summ_month_7 + 1;
            }
          }
          if (temp_month === '08'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_8 = summ_month_8 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_8 = summ_month_8 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_8 = summ_month_8 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_8 = summ_month_8 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_8 = summ_month_8 + 1;
            }

          }
          if (temp_month === '09'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_9 = summ_month_9 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_9 = summ_month_9 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_9 = summ_month_9 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_9 = summ_month_9 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_9 = summ_month_9 + 1;
            }
          }
          if (temp_month === '10'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_10 = summ_month_10 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_10 = summ_month_10 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_10 = summ_month_10 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_10 = summ_month_10 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_10 = summ_month_10 + 1;
            }
          }
          if (temp_month === '11'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_11 = summ_month_11 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_11 = summ_month_11 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_11 = summ_month_11 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_11 = summ_month_11 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_11 = summ_month_11 + 1;
            }
          }
          if (temp_month === '12'){
            if (data[jj].zen_practic_1 === 'ok'){
              summ_month_12 = summ_month_12 + 1;
            }
            if (data[jj].zen_practic_2 === 'ok'){
              summ_month_12 = summ_month_12 + 1;
            }
            if (data[jj].zen_practic_3 === 'ok'){
              summ_month_12 = summ_month_12 + 1;
            }
            if (data[jj].zen_practic_4 === 'ok'){
              summ_month_12 = summ_month_12 + 1;
            }
            if (data[jj].zen_practic_5 === 'ok'){
              summ_month_12 = summ_month_12 + 1;
            }
          }

        }


        procent_month_1 = summ_month_1 * 100 / 155;
        procent_month_2 = summ_month_2 * 100 / 140;
        procent_month_3 = summ_month_3 * 100 / 155;
        procent_month_4 = summ_month_4 * 100 / 150;
        procent_month_5 = summ_month_5 * 100 / 155;
        procent_month_6 = summ_month_6 * 100 / 150;
        procent_month_7 = summ_month_7 * 100 / 155;
        procent_month_8 = summ_month_8 * 100 / 155;
        procent_month_9 = summ_month_9 * 100 / 150;
        procent_month_10 = summ_month_10 * 100 / 155;
        procent_month_11 = summ_month_11 * 100 / 150;
        procent_month_12 = summ_month_12 * 100 / 150;

        if (procent_month_1 !== 0){procent_month_1 = Math.round(procent_month_1);}
        if (procent_month_2 !== 0){procent_month_2 = Math.round(procent_month_2);}
        if (procent_month_3 !== 0){procent_month_3 = Math.round(procent_month_3);}
        if (procent_month_4 !== 0){procent_month_4 = Math.round(procent_month_4);}
        if (procent_month_5 !== 0){procent_month_5 = Math.round(procent_month_5);}
        if (procent_month_6 !== 0){procent_month_6 = Math.round(procent_month_6);}
        if (procent_month_7 !== 0){procent_month_7 = Math.round(procent_month_7);}
        if (procent_month_8 !== 0){procent_month_8 = Math.round(procent_month_8);}
        if (procent_month_9 !== 0){procent_month_9 = Math.round(procent_month_9);}
        if (procent_month_10 !== 0){procent_month_10 = Math.round(procent_month_10);}
        if (procent_month_11 !== 0){procent_month_11 = Math.round(procent_month_11);}
        if (procent_month_12 !== 0){procent_month_12 = Math.round(procent_month_12);}



        var name_of_month_1, name_of_month_2, name_of_month_3, name_of_month_4, name_of_month_5, name_of_month_6;
        var name_of_month_7, name_of_month_8, name_of_month_9, name_of_month_10, name_of_month_11, name_of_month_12;

        if (curr_language === 'русский'){
          name_of_month_1 = 'Январь';
          name_of_month_2 = 'Февраль';
          name_of_month_3 = 'Март';
          name_of_month_4 = 'Апрель';
          name_of_month_5 = 'Май';
          name_of_month_6 = 'Июнь';
          name_of_month_7 = 'Июль';
          name_of_month_8 = 'Август';
          name_of_month_9 = 'Сентябрь';
          name_of_month_10 = 'Октябрь';
          name_of_month_11 = 'Ноябрь';
          name_of_month_12 = 'Декабрь';
        }
        else {
          name_of_month_1 = 'January';
          name_of_month_2 = 'February';
          name_of_month_3 = 'March';
          name_of_month_4 = 'April';
          name_of_month_5 = 'May';
          name_of_month_6 = 'June';
          name_of_month_7 = 'July';
          name_of_month_8 = 'August';
          name_of_month_9 = 'September';
          name_of_month_10 = 'October';
          name_of_month_11 = 'November';
          name_of_month_12 = 'December';
        }

        // alert('procent_month_8 = ' + procent_month_8);
        // alert('summ_month_8 = ' + summ_month_8);

        document.getElementById('stat_year_month_1').className = 'percentage percentage-' + summ_month_1;
        document.getElementById('stat_year_month_2').className = 'percentage percentage-' + summ_month_2;
        document.getElementById('stat_year_month_3').className = 'percentage percentage-' + summ_month_3;
        document.getElementById('stat_year_month_4').className = 'percentage percentage-' + summ_month_4;
        document.getElementById('stat_year_month_5').className = 'percentage percentage-' + summ_month_5;
        document.getElementById('stat_year_month_6').className = 'percentage percentage-' + summ_month_6;
        document.getElementById('stat_year_month_7').className = 'percentage percentage-' + summ_month_7;
        document.getElementById('stat_year_month_8').className = 'percentage percentage-' + summ_month_8;
        document.getElementById('stat_year_month_9').className = 'percentage percentage-' + summ_month_9;
        document.getElementById('stat_year_month_10').className = 'percentage percentage-' + summ_month_10;
        document.getElementById('stat_year_month_11').className = 'percentage percentage-' + summ_month_11;
        document.getElementById('stat_year_month_12').className = 'percentage percentage-' + summ_month_12;


        document.getElementById('stat_year_month_1').innerHTML = '<span class="text">'+ name_of_month_1 + ': ' + summ_month_1 + ' (' + procent_month_1 + '%)</span>';
        document.getElementById('stat_year_month_2').innerHTML = '<span class="text">'+ name_of_month_2 + ': ' + summ_month_2 + ' (' + procent_month_2 + '%)</span>';
        document.getElementById('stat_year_month_3').innerHTML = '<span class="text">'+ name_of_month_3 + ': ' + summ_month_3 + ' (' + procent_month_3 + '%)</span>';
        document.getElementById('stat_year_month_4').innerHTML = '<span class="text">'+ name_of_month_4 + ': ' + summ_month_4 + ' (' + procent_month_4 + '%)</span>';
        document.getElementById('stat_year_month_5').innerHTML = '<span class="text">'+ name_of_month_5 + ': ' + summ_month_5 + ' (' + procent_month_5 + '%)</span>';
        document.getElementById('stat_year_month_6').innerHTML = '<span class="text">'+ name_of_month_6 + ': ' + summ_month_6 + ' (' + procent_month_6 + '%)</span>';
        document.getElementById('stat_year_month_7').innerHTML = '<span class="text">'+ name_of_month_7 + ': ' + summ_month_7 + ' (' + procent_month_7 + '%)</span>';
        document.getElementById('stat_year_month_8').innerHTML = '<span class="text">'+ name_of_month_8 + ': ' + summ_month_8 + ' (' + procent_month_8 + '%)</span>';
        document.getElementById('stat_year_month_9').innerHTML = '<span class="text">'+ name_of_month_9 + ': ' + summ_month_9 + ' (' + procent_month_9 + '%)</span>';
        document.getElementById('stat_year_month_10').innerHTML = '<span class="text">'+ name_of_month_10 + ': ' + summ_month_10 + ' (' + procent_month_10 + '%)</span>';
        document.getElementById('stat_year_month_11').innerHTML = '<span class="text">'+ name_of_month_11 + ': ' + summ_month_11 + ' (' + procent_month_11 + '%)</span>';
        document.getElementById('stat_year_month_12').innerHTML = '<span class="text">'+ name_of_month_12 + ': ' + summ_month_12 + ' (' + procent_month_12 + '%)</span>';






      }

      if (data.success === true) {

        var dialog_text;
        var lang_user = localStorage.getItem('mob_current_lang');
        if (lang_user === 'русский'){
          dialog_text = 'У вас еще нет практик для статистики';
        } else {
          dialog_text = "You don't have practice for statistics yet";
        }
        myapp.dialog.alert(dialog_text);
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });


  if (curr_language === 'русский'){
    document.getElementById('lang_statistic_link_back').innerHTML = 'Назад';
    document.getElementById('lang_show_week').innerHTML = 'Неделя';
    document.getElementById('lang_show_year').innerHTML = 'Год';



  }


});

$$(document).on('page:init', '.page[data-name="recomend"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var text_0, text_1, text_2;

  var val_slider_0 = localStorage.getItem('mob_val_slider_0');
  var val_slider_1 = localStorage.getItem('mob_val_slider_1');
  var val_slider_2 = localStorage.getItem('mob_val_slider_2');
  //myapp.dialog.alert('val_slider_2 = ' + val_slider_2);

  if (val_slider_0 !== '1'){
    if (val_slider_0 === '0'){
      if (curr_language === 'русский'){
        text_0 =
          '<p>Когда вы испытываете состояние повышенной эмоциональной возбужденности, неустойчивости психики, постарайтесь сделать ваше дыхание как можно более ровным и спокойным.</p>' +
          '<p>Вдох должен быть равен выдоху, если ваше дыхание поверхностно, то вы неукоренены в своем теле, это вызывает неустойчивость ума, страхи, гневные и болезненные ощущения.' +
          '</p>';
      } else {
        text_0 =
          '<p>When you experience a state of increased emotional arousal, mental instability, try to make your breathing as even and calm as possible.</p>' +
          '<p>Inhalation should be equal to exhalation, if your breathing is shallow, then you are not rooted in your body, this causes instability of the mind, fears, angry and painful sensations.' +
          '</p>';
      }

    }
    if (val_slider_0 === '2'){
      if (curr_language === 'русский'){
        text_0 =
          '<p>Если вы испытываете подавленное депрессивное состояние, угнетение психики, старайтесь сделать ваш выдох более длительным, а вдох резким.</p>' +
          '<p>Так вы способствуете пробуждению организма и насыщению его кислородом, нехватка которого и способствует нарастанию подобных проекции.</p> ';
      } else {
        text_0 =
          '<p>If you experience a depressed depressive state, depression of the psyche, try to make your exhalation longer and your inhalation sharp.</p>' +
          '<p>So you contribute to the awakening of the body and its saturation with oxygen, the lack of which contributes to the growth of such projections.</p> ';
      }

    }


    document.getElementById('text_inner_0').innerHTML = text_0;
    document.getElementById('emotion_block').style.display = 'block';
  }

  if (val_slider_1 !== '1'){
    if (val_slider_1 === '0'){
      if (curr_language === 'русский'){
        text_1 =
          '<p>При стабильно хорошем физическом состоянии и бодрости Духа благодарны будьте за дары Божьи.</p>' +
          '<p>Человек, как правило, привык подмечать только состояние болезни, согласитесь вы никогда не говорите другу, что у вас не болит голова, нет температуры и в боку сегодня не закололо.</p>' +
          '<p>Любите этот мир также, как и он вас, это исцеляет.</p>';
      } else {
        text_1 =
          '<p>With a consistently good physical condition and cheerfulness of the Spirit, be thankful for the gifts of God.</p>' +
          '<p>A person, as a rule, is used to noticing only the state of the disease, you must admit that you never tell a friend that you don’t have a headache, you don’t have a temperature, and you didn’t stab in your side today.</p>' +
          '<p>Love this world as much as it loves you, it heals.</p>';
      }

    }
    if (val_slider_1 === '2'){
      if (curr_language === 'русский'){
        text_1 =
          '<p>Если вы ощущаете усталость, ломоту в теле, болезненность, это свидетельство снижения энергоресурса в теле.</p>' +
          '<p>Постарайтесь разогнать энергию по телу различными способами в зависимости от состояния в котором вы прибываете — в ход идут: гвозди, бег, активная пранаяма или просто произнесение мантр и зикров…</p>';
      } else {
        text_1 =
          '<p>If you feel tired, body aches, soreness, this is evidence of a decrease in the energy resource in the body.</p>' +
          '<p>Try to disperse the energy through the body in various ways, depending on the state in which you arrive - they are used: nails, running, active pranayama, or simply reciting mantras and dhikrs ...</p>';
      }

    }


    document.getElementById('text_inner_1').innerHTML = text_1;
    document.getElementById('phisical_block').style.display = 'block';
  }

  if (val_slider_2 !== '1'){
    if (val_slider_2 === '0'){
      if (curr_language === 'русский'){
        text_2 =
          '<p>Кучи мыслей роятся в вашей голове.</p>' +
          '<p>Вас так и тянет философствовать и размышлять, однако жизнь далеко не категорийная догма.</p>' +
          '<p>Большое количество даже самых благостных и фантастически красивых мыслей порой не позволяют вам увидеть течение жизни и насладиться этим прекрасным процессом.</p>';
      } else {
        text_2 =
          '<p>Heaps of thoughts swarm in your head.</p>' +
          '<p>You are drawn to philosophize and reflect, but life is far from being a categorical dogma.</p>' +
          '<p>A large number of even the most blessed and fantastically beautiful thoughts sometimes do not allow you to see the course of life and enjoy this wonderful process.</p>';
      }

    }
    if (val_slider_2 === '2'){
      if (curr_language === 'русский'){
        text_2 =
          '<p>Чем пчелы отличаются от мух?</p>' +
          '<p>Утром пчела выходит на работу и идет собирать нектар, она летит и ищет цель —цветок с прекрасным ароматом и пыльцой</p>' +
          '<p>Муха утром выходит на работу и тоже видимо хочет собрать нектар, но пролетая мимо видит говно, забывает про цель. И начинает разбираться, в том кто же это сделал, кто виноват, как он мог, какая консистенция и цвет и так далее. Она приучает себя рыться в этом, это не хорошо и не плохо, естественный отбор, главное чтобы мухе нравилось и она не завидовала пчелам, не укоряла и не сетовала на свой погрязший в фекалиях мир.</p>';
      } else {
        text_2 =
          '<p>How are bees different from flies?</p>' +
          '<p>In the morning, the bee goes to work and goes to collect nectar, she flies and looks for a target - a flower with a wonderful aroma and pollen</p>' +
          '<p>The fly goes to work in the morning and also apparently wants to collect nectar, but flying by sees shit, forgets about the goal. And he begins to figure out who did it, who is to blame, how he could, what consistency and color, and so on. She trains herself to dig into it, it not good or bad, natural selection, the main thing is that the fly likes it and she does not envy the bees, does not reproach and does not complain about her world mired in feces.</p>';
      }

    }


    document.getElementById('text_inner_2').innerHTML = text_2;
    document.getElementById('mental_block').style.display = 'block';
  }

  if (val_slider_0 === '1' && val_slider_1 === '1' && val_slider_2 === '1'){
    document.getElementById('all_good_block').style.display = 'block';
  } else {
    document.getElementById('block_send').style.display = 'block';
  }

  if (curr_language === 'русский'){
    document.getElementById('lang_recomend_link_back').innerHTML = 'Назад';
    document.getElementById('lang_emotion_condition').innerHTML = 'Эмоциональное состояние';
    document.getElementById('lang_fisical_condition').innerHTML = 'Физическое состояние';
    document.getElementById('lang_mental_condition').innerHTML = 'Ментальное состояние';
    document.getElementById('lang_general_condition').innerHTML = 'Общее состояние';
    document.getElementById('lang_text_general_condition').innerHTML = ' У вас все хорошо ! <br> Так держать !';
    document.getElementById('block_send_button').innerHTML = 'Для более подробной рекомендации по практикам наживите здесь и мы отправим вам комплекс решений данной проблемы';
    document.getElementById('lang_recomm_send_recom').innerHTML = 'Отправить';
  }


});

$$(document).on('page:init', '.page[data-name="input_name"]', function (e) {
  //myapp.dialog.alert('инит экран recomend');

  var user_name = localStorage.getItem('mob_user_name');
  if (user_name !== null){
    document.getElementById('d_input_name').placeholder = user_name;
  }

  if (curr_language === 'русский'){
    document.getElementById('lang_profile_name_Enter').innerHTML = 'Введите имя:';
    document.getElementById('lang_profile_name_link_back').innerHTML = 'Назад';
    document.getElementById('lang_profile_save_name').innerHTML = 'Сохранить';
  }

});

$$(document).on('page:init', '.page[data-name="input_name_2"]', function (e) {
  //myapp.dialog.alert('инит экран recomend');

  var user_name_2 = localStorage.getItem('mob_user_name_2');
  if (user_name_2 !== null){
    document.getElementById('d_input_name_2').placeholder = user_name_2;
  }

  if (curr_language === 'русский'){
    document.getElementById('lang_profile_name2_Enter').innerHTML = 'Введите фамилию:';
    document.getElementById('lang_profile_name2_link_back').innerHTML = 'Назад';
    document.getElementById('lang_profile_save_name2').innerHTML = 'Сохранить';
  }


});

$$(document).on('page:init', '.page[data-name="input_email"]', function (e) {
  //myapp.dialog.alert('инит экран recomend');

  var input_email = localStorage.getItem('mob_user_email');
  if (input_email !== null){
    document.getElementById('d_input_email').placeholder = input_email;
  }

  var temp_user_email = localStorage.getItem('mob_temp_user_email');
  if (temp_user_email !== null){
    document.getElementById('block_go_confirm').style.display = 'block';
  }

  if (curr_language === 'русский'){
    document.getElementById('lang_profile_email_Enter').innerHTML = 'Введите e-mail:';
    document.getElementById('lang_profile_email_link_back').innerHTML = 'Назад';
    document.getElementById('lang_profile_save_email').innerHTML = 'Отправить';
    document.getElementById('lang_profile_save_email_cod').innerHTML = 'Введите код:';
    document.getElementById('lang_profile_conf_email').innerHTML = 'Подтвердить';
  }


});

 $$(document).on('page:init', '.page[data-name="support"]', function (e) {


  if (curr_language === 'русский'){

    document.getElementById('lang_support_link_back').innerHTML = 'Назад';
    document.getElementById('lang_support_zagolov').innerHTML = 'Написать нам:';
    document.getElementById('lang_support_write_telegram').innerHTML = 'Написать в Telegram';
    document.getElementById('lang_support_write_email').innerHTML = 'Написать на почту';
    document.getElementById('lang_support_write_watsapp').innerHTML = 'Написать в WatsApp';

  }


});

$$(document).on('page:init', '.page[data-name="donation"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;





  if (curr_language === 'русский'){
    document.getElementById('lang_donation_link_back').innerHTML = 'Назад';
    document.getElementById('lang_donation_zagolov').innerHTML = 'Пожертвование';
    document.getElementById('lang_block_text_center').innerHTML =
      '<p>Нам удалось сделать проект совершенно БЕСПЛАТНЫМ, ведь процесс медитации дарован вам по праву воплощения. Это базовая опция. </p>\n'+

      '<p>Однако в современном мире необходимо поддерживать этот проект в сторах — развивать, модернизировать и содержать. Мы будем рады любому проявлению щедрости и благодарности. Для перечисления денежных средств просто кликните на кнопку ниже. </p>';


    document.getElementById('lang_button_donation_1').innerHTML = 'Пожертвовать';
    document.getElementById('lang_donation_text_down_1').innerHTML = 'Добро сделанное втайне, вознаграждается явно';
    document.getElementById('lang_donation_text_down_2').innerHTML = '*японская пословица';
    document.getElementById('lang_donation_text_down_3').innerHTML = 'введите сумму:';

    document.getElementById('lang_donation_button_down_4').value = 'Пожертвовать'

  }


});

$$(document).on('page:init', '.page[data-name="faq_project"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var query = query11+'api_zen_get_faq_project';

  var zapros_mobile  = 'запрос пользователя на инструкцию';


  myapp.request.post(query, {
      zapros_mobile: zapros_mobile
    },
    function (data) {
      localStorage.setItem('mob_json_faq_project', data);
      data = JSON.parse(data);
      var faq_lenght = data.length;
      var list_insert_faq_project_content = '';

      for (var i = 0; i <= faq_lenght -1; i++){

        var zen_faq_project_id = data[i].id;

        var zen_faq_project_question = data[i].zen_faq_project_question;
        var zen_faq_project_answer = data[i].zen_faq_project_answer;
        var zen_faq_project_question_eng = data[i].zen_faq_project_question_eng;
        var zen_faq_project_answer_eng = data[i].zen_faq_project_answer_eng;
        var zen_faq_project_video = data[i].zen_faq_project_video;

        if (curr_language === 'русский'){

          list_insert_faq_project_content = list_insert_faq_project_content +
            '<div class="list inset" >\n' +
            ' <ul style="background-color: rgba(178,237,167,0.4)">\n' +
            '  <li>\n' +
            '   <div class="item-content" >\n' +
            '    <div class="item-inner" onclick="go_faq_answer('+ zen_faq_project_id + ')">\n' +
            '     <div class="item-input-wrap">' + zen_faq_project_question + '</div>\n' +
            '    </div>\n' +
            '   </div>\n' +
            '  </li>\n' +
            ' </ul>\n' +
            '</div>\n';
        }
        else {
          list_insert_faq_project_content = list_insert_faq_project_content +
            '<div class="list inset" >\n' +
            ' <ul style="background-color: rgba(178,237,167,0.4)">\n' +
            '  <li>\n' +
            '   <div class="item-content" >\n' +
            '    <div class="item-inner" onclick="go_faq_answer('+ zen_faq_project_id + ')">\n' +
            '     <div class="item-input-wrap">' + zen_faq_project_question_eng + '</div>\n' +
            '    </div>\n' +
            '   </div>\n' +
            '  </li>\n' +
            ' </ul>\n' +
            '</div>\n';
        }

      }

      document.getElementById('faq_project_content').innerHTML = list_insert_faq_project_content;

    },
    function (data2) {
      myapp.dialog.alert('error 333');
    });



  if (curr_language === 'русский'){
    document.getElementById('lang_faq_project_link_back').innerHTML = 'Назад';
    document.getElementById('lang_faq_project_1').innerHTML = 'Вступление';


  }


});

$$(document).on('page:init', '.page[data-name="faq_project_answer"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var question_id =  localStorage.getItem('mob_id_faq_project_quation');

  var json_data = localStorage.getItem('mob_json_faq_project');
  var data = JSON.parse(json_data);
  var faq_lenght = data.length;

  var project_answer_text_inner, project_video_inner;

  for (var i=0; i<=faq_lenght-1; i++){

    if (Number(question_id) === Number(data[i].id)){

      if (curr_language === 'русский'){
        project_answer_text_inner = data[i].zen_faq_project_answer;
      } else {
        project_answer_text_inner = data[i].zen_faq_project_answer_eng;
      }

      project_video_inner = data[i].zen_faq_project_video;

      document.getElementById('faq_project_answer_text_inner').innerHTML = project_answer_text_inner;

      if (project_video_inner !== ''){
        var video_youtube_faq = data[i].zen_faq_project_video;
        localStorage.setItem('mob_video_youtube_faq', video_youtube_faq);
        document.getElementById('w_wise_video_inner').style.display = 'block'
      }

// ======================== вычисляем высоту и отступ ================================

      var hight_big_div = document.getElementById('faq_project_answer_height_big_div').clientHeight;
      var hight_inner_div = document.getElementById('faq_project_answer_height_inner_div').clientHeight;

      var result_height_big = hight_big_div/2;
      var result_height_inner = hight_inner_div/2;
      var result_all = result_height_big - result_height_inner - 20;

      if (result_all >= 0){
        document.getElementById('faq_project_answer_height_inner_div').style = 'margin-left: 5%; margin-right: 5%; margin-top:' + result_all + 'px';
      }

    }

  }


  if (curr_language === 'русский'){
    document.getElementById('lang_faq_project_answer_link_back').innerHTML = 'Назад';
  }

});

$$(document).on('page:init', '.page[data-name="intro"]', function (e) {
  //myapp.dialog.alert('инит экран recomend');

  main_app_view();






  var panel = myapp.panel.get('.panel-left');

  panel.swipeable = false;

  // panel.on('opened', function () {
  //   alert('dddddddd');
  // });






  if (curr_language === 'русский'){
    document.getElementById('lang_button_eng').className = 'col button button-outline button-round button-raised color-green';
    document.getElementById('lang_button_ru').className = 'col button button-outline button-round button-raised button-active color-green';

    document.getElementById('lang_button_eng').innerHTML = 'Анг';
    document.getElementById('lang_button_ru').innerHTML = 'Рус';

    document.getElementById('lang_swipe_text_0').innerHTML = 'Добро пожаловать в Zen…';
    document.getElementById('lang_swipe_text_1').innerHTML = 'Путь простых истин';
    document.getElementById('lang_swipe_text_2').innerHTML = 'Медитация — это естественная функция организма по поддержанию и восстановлению всех его систем';
    document.getElementById('lang_swipe_text_3').innerHTML = 'Пока вы находитесь в состоянии покоя, ваш организм обновляется… как смартфон при перезагрузке';
    document.getElementById('lang_swipe_text_4').innerHTML = 'Всего 5 практик по 5 минут позволят вам ясно видеть, четко знать. Быть продуктивным, спокойным, свободным.';
    document.getElementById('lang_swipe_text_5').innerHTML = 'Лови волну высоких вибраций, находи нестандартные решения, совершенствуйся с MyZen <br> Все просто включил таймер, выключил   УМ.';
    document.getElementById('lang_button_go_go').innerHTML = 'Далее';

  }

  var swiper = myapp.swiper.create('.swiper-container', {
    speed: 2000,
    spaceBetween: 1
  });

  var loop_number = 1;

  function loop_slide_next() {
    loop_number = loop_number +1;
    if (loop_number < 7){
      setTimeout(function () {
        swiper.slideNext();
        loop_slide_next();
      }, 7000);
    }

  }

  loop_slide_next();
  // setTimeout(function () {
  //
  //   swiper.slideNext();
  //
  //
  // }, 6000);




});

$$(document).on('page:init', '.page[data-name="intro_1"]', function (e) {
  //myapp.dialog.alert('инит экран recomend');

  var panel = myapp.panel.get('.panel-left');

  panel.swipeable = false;

  // panel.on('opened', function () {
  //   alert('dddddddd');
  // });


  if (curr_language === 'русский'){
    document.getElementById('lang_button_eng_0').className = 'col button button-outline button-round button-raised';
    document.getElementById('lang_button_ru_0').className = 'col button button-outline button-round button-raised button-active';

    document.getElementById('lang_button_eng_0').innerHTML = 'Анг';
    document.getElementById('lang_button_ru_0').innerHTML = 'Рус';

    document.getElementById('lang_swipe_text_1_0').innerHTML = 'Добро пожаловать в Zen <br>Путь простых истин';
    document.getElementById('lang_swipe_text_2_0').innerHTML = 'Медитация — это естественная функция организма для поддержания всей системы в гармонии и балансе';
    document.getElementById('lang_swipe_text_3_0').innerHTML = 'Медитация позволяет обновляться вашему организму, вы просто находитесь в состоянии покоя, как смартфон при перезагрузке';
    document.getElementById('lang_swipe_text_4_0').innerHTML = 'Мы сделали приложение интуитивно понятным 5 практик по 5 минут. <br> Просто попробуйте, для обретения ясности, продуктивности и равновесия';
    document.getElementById('lang_swipe_text_5_0').innerHTML = 'Мы существуем в волновом пространстве. <br> Лови волну высоких вибраций, поддерживай своё состояния и будь на высоте. <br> Все просто включил таймер, выключил   УМ.';
    document.getElementById('lang_button_go_go_0').innerHTML = 'Ok';

  }


});


//=============================== редактор фото ===============================

$$(document).on('page:init', '.page[data-name="edit_temp_avatar_foto"]', function (e) {

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = false;

  var hight_screen = window.innerHeight;
  //alert('hight_screen = ' + hight_screen);

  var hight_foto = Number(localStorage.getItem('mob_temp_shop_foto_result_hight'));
  var down_block = (hight_screen - hight_foto)/2;

  //document.getElementById('add_for_center_blok').style.paddingTop =  down_block + 'px';

  //myapp.preloader.show('red');

  var list_temp_avatar_foto;

  var mUsername_id = localStorage.getItem('mob_user_id');

  var file_temp_avatar_foto = localStorage.getItem('mob_temp_avatar_foto');

  list_temp_avatar_foto = '<img id="target" src="'+file_temp_avatar_foto+'" style="width: 100%; padding-top: 0;margin-top: 0">\n';

  document.getElementById('edit_temp_shop_foto_block').innerHTML = list_temp_avatar_foto;

  //import Cropper from 'cropperjs';


  function getRoundedCanvas(sourceCanvas) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = 'destination-in';
    context.beginPath();
    context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
    context.fill();
    return canvas;
  }




  const image = document.getElementById('target');
  const cropper = new Cropper(image, {
    aspectRatio: 1,
    rounded: true,
    ready: function () {
      croppable = true;
    },
    zoomable: false,

    // crop(event) {
    //   console.log(event.detail.x);
    //   console.log(event.detail.y);
    //   console.log(event.detail.width);
    //   console.log(event.detail.height);
    //   console.log(event.detail.rotate);
    //   console.log(event.detail.scaleX);
    //   console.log(event.detail.scaleY);
    // },
  });
  // myapp.preloader.hide();



  var button_save = document.getElementById('save_edit_shop_logo_icon');
  var button_rotate_l = document.getElementById('button_rotate_l_icon');
  var button_rotate_r = document.getElementById('button_rotate_r_icon');

  button_rotate_l.onclick = function () {

    cropper.rotate(90);

    // var croppedCanvas, src_Image;
    // croppedCanvas = cropper.getCroppedCanvas({'width': 1080, 'height': 540});
    // src_Image = croppedCanvas.toDataURL();







  };
  button_rotate_r.onclick = function () {

    cropper.rotate(-90);

    // var croppedCanvas, src_Image;
    // croppedCanvas = cropper.getCroppedCanvas({'width': 1080, 'height': 540});
    // src_Image = croppedCanvas.toDataURL();







  };

  button_save.onclick = function () {

    var croppedCanvas, src_Image, roundedCanvas, roundedImage;


    croppedCanvas = cropper.getCroppedCanvas({'width': 540, 'height': 540});

    roundedCanvas = getRoundedCanvas(croppedCanvas);


    src_Image = roundedCanvas.toDataURL();


    var query = query11+'api_zen_set_edit_avatar_foto';
    myapp.request.post(query, {
        mUsername_id: mUsername_id,
        data: src_Image,
      },
      function (data) {
        var json_user_foto = JSON.parse(data);
        var user_foto = json_user_foto.success;
        var path_user_foto = query11 + 'image/zen_avatar_foto/' + user_foto + '.png';
        localStorage.setItem('mob_avatar_foto', path_user_foto);
        //alert('path_user_foto = ' + path_user_foto);

        document.getElementById('block_avatar').innerHTML = '<img src="'+path_user_foto+'" style="width: 100%">\n';

        myapp.views.main.router.back();
      },
      function (data2) {
        myapp.dialog.alert('Ошибка связи с сервером, проверьте подключение к интернету.', function () {
          //window.location.href = 'index.html';
        });
      });
  };

});
