/**
 * Created by Дмитрий on 001 01.10.20.
 */



var query11 = 'http://176.215.15.238:8007/';
//var query11 = 'http://nativnet.ru:8007/';
//var query11 = 'http://nativnet.ru:8007/';


document.addEventListener('deviceready', function () {
    // var userNam = localStorage.getItem('mUsername');
    // var versio = '003';

  var first_time = localStorage.getItem('mob_first_time');

  if (first_time === 'no'){
    document.getElementById('main_app').style.display = 'none';
    start_main_app();
    setTimeout(function () {

      document.getElementById('show_logo').style.display = 'none';
      document.getElementById('main_app').style.display = 'block';

    }, 5000);

  }
  else {
    document.getElementById('main_app').style.display = 'none';
    setTimeout(function () {

      setTimeout(function () {
        document.getElementById('show_logo').style.display = 'none';

      }, 400);

      //document.getElementById('main_app').style.display = 'block';
      myapp.views.main.router.navigate('/intro/', {animated: false});

    }, 5000);

  }




}, false);

var exit_app;
document.addEventListener("backbutton", function(){

  var exit_text;
  var lang_user = localStorage.getItem('mob_current_lang');
  if (lang_user === 'русский'){
    exit_text = 'Выйти из приложения?';
  } else {
    exit_text = 'Exit the app?';
  }

  myapp.dialog.confirm(exit_text, function () {
    navigator.app.exitApp();
  }, function () {
    //alert('выход просто алерт 2');
  });
}, false);

document.addEventListener("pause", function() {
  var timer_on = Date.now();
  localStorage.setItem('mob_timer_on', timer_on);
}, false);
document.addEventListener("resume", function() {
  var timer_off = Date.now();
  var timer_on_pause = localStorage.getItem('mob_timer_on');
  var timer_result = timer_off - timer_on_pause;
  if (timer_result > 600000){
    setTimeout(function() {

      window.location.href = 'index.html';
    }, 0);
  }
}, false);

function start_main_app() {
  // ----------------------------- push ------------------------------------


  var user_push_id = localStorage.getItem('mob_user_push_id');

  if (user_push_id === null){
    get_user_push_id();
  }

  // var notificationOpenedCallback = function(jsonData) {
  // 	console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  // };
  // window.plugins.OneSignal
  // 	.startInit("478dbf69-6d55-4b47-a0f7-5b3ccb6e64e3")
  // 	.handleNotificationOpened(notificationOpenedCallback)
  // 	.endInit();
  // window.plugins.OneSignal.getIds(function(ids) {
  // 	//myApp.alert("userId = " + ids.userId);
  // 	localStorage.setItem('pUseId', ids.userId);
  // });

  var set_all_day_time, session_time_minute, session_time_second;

  var now = new Date();

  var time_zone = now.getTimezoneOffset();
  //alert('time_zone = ' + time_zone);
  var last_time_zone = localStorage.getItem('mob_last_time_zone');
  if (last_time_zone === null){
    localStorage.setItem('mob_last_time_zone', time_zone);
  } else {
    var last_time_zone_1 = Number(last_time_zone) + 59;
    var last_time_zone_0 = Number(last_time_zone) - 59;
    if (time_zone < last_time_zone_0 || time_zone > last_time_zone_1){
      var dialog_text;
      var lang_user = localStorage.getItem('mob_current_lang');
      if (lang_user === 'русский'){
        dialog_text = 'Изменение временной зоны. Для точного расчета времени практик, необходимо определить ваши координаты и пересчитать время практик';
      } else {
        dialog_text = 'Changing the time zone. To accurately calculate the practice time, you need to determine your coordinates and recalculate the practice time';
      }
      myapp.dialog.confirm(dialog_text, function () {
        var set_coordinate = '';
        localStorage.setItem('mob_current_latitude', set_coordinate);
        localStorage.setItem('mob_current_longitude', set_coordinate);
        get_coordinate();

      }, function () {
        //alert('выход просто алерт 2');
      });

    }
  }


  var year_now = now.getFullYear();
  var month_now = now.getMonth()+1;
  localStorage.setItem('mob_develop_month', month_now);
  localStorage.setItem('mob_develop_year', year_now);
  if (month_now < 10){
    month_now = '0' + month_now
  } else {
    month_now = String(month_now);
  }
  localStorage.setItem('mob_month_now', month_now);

  var day_now = now.getDate();

  if (day_now < 10){
    day_now = '0' + day_now
  } else {
    day_now = String(day_now);
  }
  localStorage.setItem('mob_day_now', day_now);

  function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return days[date.getDay()];
  }
  var week_day_now = getWeekDay(now);
  localStorage.setItem('mob_week_day_now', week_day_now);

  var hours_now = now.getHours();
  localStorage.setItem('mob_hours_now', hours_now);
  if (hours_now < 10){hours_now = '0' + hours_now}
  var minutes_now = now.getMinutes();
  localStorage.setItem('mob_minutes_now', minutes_now);
  if (minutes_now < 10){minutes_now = '0' + minutes_now}


  var month_last = localStorage.getItem('mob_month_last');
  if (month_last === null){month_last = ''}
  var day_last = localStorage.getItem('mob_day_last');
  if (day_last === null){day_last = ''}


  if (month_now === month_last && day_now === day_last){

    display_screen_2_timer();
  }
  else {
    localStorage.setItem('mob_month_last', month_now);
    localStorage.setItem('mob_day_last', day_now);


    set_all_day_time = localStorage.getItem('mob_set_all_day_time');
    if (set_all_day_time === null){
      set_all_day_time = '25';
      localStorage.setItem('mob_set_all_day_time', set_all_day_time);
      localStorage.setItem('mob_set_all_day_time_ttt', set_all_day_time);

    }

    localStorage.setItem('mob_all_day_time', set_all_day_time);
    localStorage.setItem('mob_set_all_day_time_ttt', set_all_day_time);
    session_time_minute = Number(set_all_day_time)/5;
    localStorage.setItem('mob_set_interval', session_time_minute);

    session_time_second = '00';

    localStorage.setItem('mob_session_time_current_minute', session_time_minute);
    localStorage.setItem('mob_session_time_current_second', session_time_second);

    document.getElementById('all_day_time').innerHTML = set_all_day_time;
    document.getElementById('session_time_current').innerHTML = session_time_minute + ' : ' + session_time_second;

    var checker = '';
    localStorage.setItem('mob_checker_1', checker);
    localStorage.setItem('mob_checker_2', checker);
    localStorage.setItem('mob_checker_3', checker);
    localStorage.setItem('mob_checker_4', checker);
    localStorage.setItem('mob_checker_5', checker);

    var is_vibra = localStorage.getItem('mob_is_vibra');
    if (is_vibra === 'vibra'){
      document.getElementById('button_zvuk').innerHTML = '<img src="img/vibra_1.png" style="width: 100%; margin-top: 7%">';
    }

    var is_light_on = localStorage.getItem('mob_is_light_on');
    if (is_light_on === 'off'){
      document.getElementById('button_sleep').innerHTML = '<img src="img/dont_sleep_v2_1.png" style="width: 100%">';
    }


  }

  display_checker();

  slider_work();

// ======================== для тестов =================================
//   var current_latitude = 56.807351;
//   var current_longitude = 60.602607;
//   localStorage.setItem('mob_current_latitude', current_latitude);
//   localStorage.setItem('mob_current_longitude', current_longitude);
// ======================== для тестов =================================

  var develop_month = month_now;
  var develop_year = year_now;
  localStorage.setItem('mob_develop_month', develop_month);
  localStorage.setItem('mob_develop_year', develop_year);


  var current_latitude = localStorage.getItem('mob_current_latitude');
  var current_longitude = localStorage.getItem('mob_current_longitude');

  if (current_latitude === null){
    var dialog_text_rass;
    var lang_user_1 = localStorage.getItem('mob_current_lang');
    if (lang_user_1 === 'русский'){
      dialog_text_rass = 'Для точного расчета времени практик, необходимо определить ваши координаты. Проверьте, включен ли GPS датчик и нажмите Ok.';
    } else {
      dialog_text_rass = 'To accurately calculate the practice time, you need to determine your coordinates. Check if the GPS sensor is enabled and click Ok.';
    }
    myapp.dialog.confirm(dialog_text_rass, function () {

      get_coordinate();

    }, function () {
      var dialog_text_rass_2;
      var lang_user_2 = localStorage.getItem('mob_current_lang');
      if (lang_user_2 === 'русский'){
        dialog_text_rass_2 = 'Без ваших координат невозможно расчитать время практик.';
      } else {
        dialog_text_rass_2 = 'Without your coordinates, it is impossible to calculate the time of practice.';
      }
      myapp.dialog.alert(dialog_text_rass_2, function () {
        setTimeout(question_get_coordinate, 20000);
        //window.location.href = 'index.html';
      });
    });
  }
  else {
    var dd_develop_last_month = localStorage.getItem('mob_dd_develop_last_month');
    if (Number(dd_develop_last_month) === Number(develop_month)){
      //alert('month ===');
      set_time_day();
    } else {
      //alert('month !===');
      get_time_pract();
    }
  }


  display_left_panel();

  check_language();

  sbros_checker_val_0();



}


function display_left_panel() {
  var user_avatar = localStorage.getItem('mob_avatar_foto');
  if (user_avatar !== null){
    document.getElementById('left_panel_avatar').innerHTML = '<img src="'+user_avatar+'" style="width: 100%">\n';
  }
  var user_name = localStorage.getItem('mob_user_name');
  var user_name_2 = localStorage.getItem('mob_user_name_2');
  if (user_name !== null && user_name_2 !== null){
    document.getElementById('profile_names').innerHTML = '<h3 style="margin-top: 4%; margin-bottom: 0px">'+user_name+'</h3><h3 style="margin-top: 0px">'+user_name_2+'</h3>';
  } else {
    if (user_name !== null){
      document.getElementById('profile_names').innerHTML = '<h3>'+user_name+'</h3>';
    }
    if (user_name_2 !== null){
      document.getElementById('profile_names').innerHTML = '<h3>'+user_name_2+'</h3>';
    }
  }
}

function display_screen_2_timer() {
  var set_all_day_time = localStorage.getItem('mob_all_day_time');
  document.getElementById('all_day_time').innerHTML = set_all_day_time;

  var session_time_minute = localStorage.getItem('mob_session_time_current_minute');
  var session_time_second = localStorage.getItem('mob_session_time_current_second');

  document.getElementById('session_time_current').innerHTML = session_time_minute + ' : ' + session_time_second;

  var is_vibra = localStorage.getItem('mob_is_vibra');
  if (is_vibra === 'vibra'){
    document.getElementById('button_zvuk').innerHTML = '<img src="img/vibra_1.png" style="width: 100%; margin-top: 7%">';
  }

  var is_light_on = localStorage.getItem('mob_is_light_on');
  if (is_light_on === 'off'){
    document.getElementById('button_sleep').innerHTML = '<img src="img/dont_sleep_v2_1.png" style="width: 100%">';
  }
}

function check_coordinate() {
  var current_latitude = localStorage.getItem('mob_current_latitude');
  if (current_latitude === null || current_latitude === ''){
    toastBottom_2.open();
  }
}
function get_coordinate() {
  myapp.preloader.show('green');
  toastBottom.open();
  setTimeout(dont_get_coordinate, 30000);
  setTimeout(check_coordinate, 18000);
  var onSuccess = function(position) {
    var current_latitude = position.coords.latitude;
    var current_longitude = position.coords.longitude;

    localStorage.setItem('mob_current_latitude', current_latitude);
    localStorage.setItem('mob_current_longitude', current_longitude);
    myapp.preloader.hide();
    toastBottom_3.open();

    var now = new Date();
    var time_zone = now.getTimezoneOffset();
    localStorage.setItem('mob_last_time_zone', time_zone);

    get_city_name();
    send_coordinate();

  };
  function onError(error) {
    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Неудается определить местоположение. Без ваших координат невозможно расчитать время практик. Включите GPS датчик.';
    } else {
      dialog_text = 'Unable to determine location. Without your coordinates, it is impossible to calculate the time of practice. Turn on the GPS sensor.';
    }
    myapp.dialog.alert(dialog_text,
      function () {
      window.location.href = 'index.html';
    });
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
function question_get_coordinate() {

  var dialog_text;
  var lang_user = localStorage.getItem('mob_current_lang');
  if (lang_user === 'русский'){
    dialog_text = 'Для точного расчета времени практик, необходимо определить ваши координаты. Проверьте, включен ли GPS датчик и нажмите Ok.';
  } else {
    dialog_text = 'To accurately calculate the practice time, you need to determine your coordinates. Check if the GPS sensor is enabled and click Ok.';
  }
  myapp.dialog.confirm(dialog_text, function () {

    get_coordinate();

  }, function () {

    var dialog_text_2;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text_2 = 'Без ваших координат невозможно рассчитать время практик.';
    } else {
      dialog_text_2 = 'Without your coordinates, it is impossible to calculate the time of practice.';
    }
    myapp.dialog.alert(dialog_text_2, function () {
      setTimeout(question_get_coordinate, 20000);
      //window.location.href = 'index.html';
    });
  });
}
function dont_get_coordinate() {
  var current_latitude = localStorage.getItem('mob_current_latitude');
  //alert('current_latitude = ' + current_latitude);
  if (current_latitude === null || current_latitude === ''){
    myapp.preloader.hide();
   // toastBottom_2.open();

    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Не получается определить ваше местоположение, возможно плохой сигнал GPS датчика.';
    } else {
      dialog_text = 'Unable to determine your location, possibly a bad signal from the GPS sensor.';
    }
    myapp.dialog.alert(dialog_text, function () {
      setTimeout(question_get_coordinate, 20000);
      //window.location.href = 'index.html';
    });
  }
}

function test_reqest_1_() {

    var username = 'good_test';

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
    myapp.dialog.alert('инит 444');
}



function slider_work() {

  var range0 = myapp.range.get('#slider_0');
  var range1 = myapp.range.get('#slider_1');
  var range2 = myapp.range.get('#slider_2');


  var slider_default = '1';
  localStorage.setItem('mob_val_slider_0', slider_default);
  localStorage.setItem('mob_val_slider_1', slider_default);
  localStorage.setItem('mob_val_slider_2', slider_default);



  range0.on('change', function () {
    var val_slider_0 = range0.getValue();
    localStorage.setItem('mob_val_slider_0', val_slider_0);

    if (val_slider_0 === 0){
      document.getElementById('circle_0_0').style.fill = '#FF3526';
      document.getElementById('circle_0_0').style.r = 18;

      document.getElementById('circle_0_1').style.fill = '#FF3526';
      document.getElementById('circle_0_1').style.r = 18;

      document.getElementById('circle_0_2').style.fill = '#FF3526';
      document.getElementById('circle_0_2').style.r = 18;

    }
    if (val_slider_0 === 1){
      document.getElementById('circle_0_0').style.fill = '#68ff72';
      document.getElementById('circle_0_0').style.r = 4;

      document.getElementById('circle_0_1').style.fill = '#68ff72';
      document.getElementById('circle_0_1').style.r = 4;

      document.getElementById('circle_0_2').style.fill = '';
      document.getElementById('circle_0_2').style.r = 4;

    }
    if (val_slider_0 === 2){
      document.getElementById('circle_0_0').style.fill = '#0f16ff';
      document.getElementById('circle_0_0').style.r = 18;

      document.getElementById('circle_0_1').style.fill = '#0f16ff';
      document.getElementById('circle_0_1').style.r = 18;

      document.getElementById('circle_0_2').style.fill = '#0f16ff';
      document.getElementById('circle_0_2').style.r = 18;

    }
  });
  range1.on('change', function () {
    var val_slider_1 = range1.getValue();
    localStorage.setItem('mob_val_slider_1', val_slider_1);

    if (val_slider_1 === 0){
      document.getElementById('circle_1_0').style.fill = '#FF3526';
      document.getElementById('circle_1_0').style.r = 18;

      document.getElementById('circle_1_1').style.fill = '#FF3526';
      document.getElementById('circle_1_1').style.r = 18;

      document.getElementById('circle_1_2').style.fill = '#FF3526';
      document.getElementById('circle_1_2').style.r = 18;

    }
    if (val_slider_1 === 1){
      document.getElementById('circle_1_0').style.fill = '#68ff72';
      document.getElementById('circle_1_0').style.r = 4;

      document.getElementById('circle_1_1').style.fill = '#68ff72';
      document.getElementById('circle_1_1').style.r = 4;

      document.getElementById('circle_1_2').style.fill = '';
      document.getElementById('circle_1_2').style.r = 4;

    }
    if (val_slider_1 === 2){
      document.getElementById('circle_1_0').style.fill = '#0f16ff';
      document.getElementById('circle_1_0').style.r = 18;

      document.getElementById('circle_1_1').style.fill = '#0f16ff';
      document.getElementById('circle_1_1').style.r = 18;

      document.getElementById('circle_1_2').style.fill = '#0f16ff';
      document.getElementById('circle_1_2').style.r = 18;

    }
  });
  range2.on('change', function () {
    var val_slider_2 = range2.getValue();
    localStorage.setItem('mob_val_slider_2', val_slider_2);

    if (val_slider_2 === 0){
      document.getElementById('circle_2_0').style.fill = '#FF3526';
      document.getElementById('circle_2_0').style.r = 18;

      document.getElementById('circle_2_1').style.fill = '#FF3526';
      document.getElementById('circle_2_1').style.r = 18;

      document.getElementById('circle_2_2').style.fill = '#FF3526';
      document.getElementById('circle_2_2').style.r = 18;

    }
    if (val_slider_2 === 1){
      document.getElementById('circle_2_0').style.fill = '#68ff72';
      document.getElementById('circle_2_0').style.r = 4;

      document.getElementById('circle_2_1').style.fill = '#68ff72';
      document.getElementById('circle_2_1').style.r = 4;

      document.getElementById('circle_2_2').style.fill = '';
      document.getElementById('circle_2_2').style.r = 4;

    }
    if (val_slider_2 === 2){
      document.getElementById('circle_2_0').style.fill = '#0f16ff';
      document.getElementById('circle_2_0').style.r = 18;

      document.getElementById('circle_2_1').style.fill = '#0f16ff';
      document.getElementById('circle_2_1').style.r = 18;

      document.getElementById('circle_2_2').style.fill = '#0f16ff';
      document.getElementById('circle_2_2').style.r = 18;


    }
  });
  //alert('ddd');
}

function timer_start() {

  //  ====   пересчет времени ====
  start_main_app();
  // ===========================



  var timer_status;

  var current_interval = Number(localStorage.getItem('mob_current_interval'));
  // mob_current_interval - разовый таймер (5:00) * интервал, в котором сейчас (максимальное общее время)
  var all_day_time = Number(localStorage.getItem('mob_all_day_time'));

  var add_time_all = Number(localStorage.getItem('mob_add_time_all'));

  var check_current_second = localStorage.getItem('mob_session_time_current_second');

  var is_light_on = localStorage.getItem('mob_is_light_on');

  //alert('all_day_time = ' + all_day_time + '; current_interval = ' + current_interval + '; check_current_second = ' + check_current_second);

  if (all_day_time > current_interval || add_time_all === 0 || all_day_time === current_interval && check_current_second !== '00'){

    // document.getElementById('button_block').innerHTML =
    //   '<div  class="col-30" ></div>\n' +
    //   '<div id="button_zakaz" class="col-40 d_logo_center" onclick="timer_stop()">\n' +
    //   ' <img src="img/button_2_active.png" style="width: 100%">\n' +
    //   '</div>\n' +
    //   '<div class="col-30" ></div>\n';

    window.plugins.insomnia.keepAwake();

    document.getElementById('button_block').style.display = 'none';
    document.getElementById('button_block_1').style.display = 'block';

    timer_status = 'start';
    localStorage.setItem('mob_timer_status', timer_status);



    if (all_day_time > 0 || all_day_time === 0 && check_current_second !== '00'){


      if (is_light_on === 'off'){
        setTimeout(screen_light_off, 3000);
      }


      startTimer();
      playAudio();
    }

    function startTimer() {

      timer_status =  localStorage.getItem('mob_timer_status');

      var current_minute = Number(localStorage.getItem('mob_session_time_current_minute'));
      var current_second = Number(localStorage.getItem('mob_session_time_current_second'));

      current_second = current_second - 1;

      if (current_second < 10 && current_second >= 0) {current_second = "0" + current_second}
      if (current_second < 0) {current_second = 59}

      if(current_second === 59){
        if (current_minute > 0){
          current_minute = current_minute -1;
          all_day_time = all_day_time - 1;
          localStorage.setItem('mob_all_day_time', all_day_time);
          document.getElementById('all_day_time').innerHTML = all_day_time;
        }
        else {
          // =================== таймер закончил  ========================
          current_second = '00';
          var timer_status = '';
          localStorage.setItem('mob_timer_status', timer_status);

          var current_minute_set = localStorage.getItem('mob_set_all_day_time_ttt');

          current_minute = Number(current_minute_set) / 5;
          localStorage.setItem('mob_session_time_current_minute', current_minute);
          localStorage.setItem('mob_session_time_current_second', current_second);

          // document.getElementById('button_block').innerHTML =
          //   '<div  class="col-30" ></div>\n' +
          //   '<div id="button_zakaz" class="col-40 d_logo_center" onclick="timer_start()">\n' +
          //   ' <img src="img/button_start_2.png" style="width: 100%">\n' +
          //   '</div>\n' +
          //   '<div class="col-30" ></div>\n';

          document.getElementById('button_block_1').style.display = 'none';
          document.getElementById('button_block').style.display = 'block';

          var timer_current_all_day_time = document.getElementById('all_day_time').innerHTML;
          localStorage.setItem('mob_all_day_time', timer_current_all_day_time);

          var is_vibra = localStorage.getItem('mob_is_vibra');
          if (is_vibra !== 'vibra'){
            playAudio_2();
          } else {
            navigator.vibrate([500, 500, 500]);
          }

          window.plugins.insomnia.allowSleepAgain();

          check_checker();

          if (is_light_on === 'off'){
            screen_light_on();
          }

        }
      }

      document.getElementById('session_time_current').innerHTML = current_minute + ' : ' + current_second;

      localStorage.setItem('mob_session_time_current_minute', current_minute);
      localStorage.setItem('mob_session_time_current_second', current_second);

      if (timer_status === 'start'){
        setTimeout(startTimer, 1000);
      }
    }

  }
  else {
    var time_do_practic = localStorage.getItem('mob_time_do_practic');

    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Следующая практика начнется через ';
    } else {
      dialog_text = 'Next practice starts in ';
    }
    myapp.dialog.alert(dialog_text + time_do_practic);
  }

}

function playAudio(){
  var dd_checker_gong_begin = localStorage.getItem('mob_gong_begin');
  if (dd_checker_gong_begin !== 'off'){
    var myAudio = new Audio();
    myAudio.src = "sound/gong_01.wav";
    myAudio.play();
  }

}
function playAudio_2(){
  var sound_type = localStorage.getItem('mob_sound_type');
  if (sound_type === 'гонг'){
    var myAudio_1 = new Audio();
    myAudio_1.src = "sound/gong_01.wav";
    myAudio_1.play();
  } else {
    var myAudio = new Audio();
    myAudio.src = "sound/kolokol.wav";
    myAudio.play();
  }

}

function timer_stop() {
  window.plugins.insomnia.allowSleepAgain();
  var timer_status = '';
  localStorage.setItem('mob_timer_status', timer_status);

  // document.getElementById('button_block').innerHTML =
  //   '<div  class="col-30" ></div>\n' +
  //   '<div id="button_zakaz" class="col-40 d_logo_center" onclick="timer_start()">\n' +
  //   ' <img src="img/button_start_2.png" style="width: 100%">\n' +
  //   '</div>\n' +
  //   '<div class="col-30" ></div>\n';

  document.getElementById('button_block_1').style.display = 'none';
  document.getElementById('button_block').style.display = 'block';

  var timer_current_all_day_time = document.getElementById('all_day_time').innerHTML;
  localStorage.setItem('mob_all_day_time', timer_current_all_day_time);

  var is_light_on = localStorage.getItem('mob_is_light_on');
  if (is_light_on === 'off'){
    screen_light_on();
  }


}

function get_time_pract() {

  var d_query = 'http://api.aladhan.com/v1/calendar?';

  var method = '2';

  var d_current_latitude = localStorage.getItem('mob_current_latitude');
  var d_current_longitude = localStorage.getItem('mob_current_longitude');

  var d_month = localStorage.getItem('mob_develop_month');
  var d_year = localStorage.getItem('mob_develop_year');

  var full_query = d_query + 'latitude=' + d_current_latitude + '&longitude=' + d_current_longitude + '&method=' + method + '&month=' + d_month + '&year=' + d_year;


  myapp.request.get(full_query,
    function (data) {
      localStorage.setItem('mob_json_current_month_time', data);
      localStorage.setItem('mob_dd_develop_last_month', d_month);
      set_time_day();
    },
    function (data2) {
      myapp.dialog.alert('Ошибка связи с сервером time, проверьте подключение к интернету.', function () {
        //window.location.href = 'index.html';
      });
    });



}
function get_time_pract_change() {

  var d_query = 'http://api.aladhan.com/v1/calendar?';

  var method = '2';

  var d_current_latitude = localStorage.getItem('mob_current_latitude');
  var d_current_longitude = localStorage.getItem('mob_current_longitude');

  var d_month = localStorage.getItem('mob_develop_month');
  var d_year = localStorage.getItem('mob_develop_year');

  var full_query = d_query + 'latitude=' + d_current_latitude + '&longitude=' + d_current_longitude + '&method=' + method + '&month=' + d_month + '&year=' + d_year;


  myapp.request.get(full_query,
    function (data) {
      localStorage.setItem('mob_json_current_month_time', data);
      set_time_day();
    },
    function (data2) {
      myapp.dialog.alert('Ошибка связи с сервером time, проверьте подключение к интернету.', function () {
        //window.location.href = 'index.html';
      });
    });

}

function set_time_day() {

  var massiv_houer = [];
  var massiv_minute = [];

  var hour_do, minute_do, hour_do_1, current_interval, my_now_location, show_date, time_do_practic;

  var current_day = localStorage.getItem('mob_day_now');
  var current_hour = Number(localStorage.getItem('mob_hours_now'));
  var current_minute = localStorage.getItem('mob_minutes_now');
  var set_interval = Number(localStorage.getItem('mob_set_interval'));

  var json_current_month_time = localStorage.getItem('mob_json_current_month_time');
  var data = JSON.parse(json_current_month_time);


  current_day = Number(current_day) - 1;

  var time_1 = data.data[current_day].timings.Fajr;
  time_1 = time_1.split('(', 1);
  document.getElementById('time_1').innerHTML = time_1;

  var time_2 = data.data[current_day].timings.Dhuhr;
  time_2 = time_2.split('(', 1);
  document.getElementById('time_2').innerHTML = time_2;

  var time_3 = data.data[current_day].timings.Asr;
  time_3 = time_3.split('(', 1);
  document.getElementById('time_3').innerHTML = time_3;

  var time_4 = data.data[current_day].timings.Sunset;
  time_4 = time_4.split('(', 1);
  document.getElementById('time_4').innerHTML = time_4;

  var time_5 = data.data[current_day].timings.Isha;
  time_5 = time_5.split('(', 1);
  document.getElementById('time_5').innerHTML = time_5;

  var time_5_1, mass_h_time_5_1, h_time_5_1, mass_time_5_1, m_time_5_1;
  var time_5_2, mass_h_time_5_2, h_time_5_2, mass_time_5_2, m_time_5_2;
  var time_5_3, mass_h_time_5_3, h_time_5_3, mass_time_5_3, m_time_5_3;
  var time_5_4, mass_h_time_5_4, h_time_5_4, mass_time_5_4, m_time_5_4;
  var time_5_5, mass_h_time_5_5, h_time_5_5, mass_time_5_5, m_time_5_5;

  if (current_day + 1 === data.data.length){

    time_5_1 = data.data[0].timings.Fajr;
    time_5_1 = time_5_1.split('(', 1);
    time_5_1 = String(time_5_1);
    mass_h_time_5_1 = time_5_1.split(':', 1);
    h_time_5_1 = Number(mass_h_time_5_1[0]);
    mass_time_5_1 = time_5_1.split(':', 2);
    m_time_5_1 = Number(mass_time_5_1[1]);


    time_5_2 = data.data[0].timings.Dhuhr;
    time_5_2 = time_5_2.split('(', 1);
    time_5_2 = String(time_5_2);
    mass_h_time_5_2 = time_5_2.split(':', 1);
    h_time_5_2 = Number(mass_h_time_5_2[0]);
    mass_time_5_2 = time_5_2.split(':', 2);
    m_time_5_2 = Number(mass_time_5_2[1]);


    time_5_3 = data.data[0].timings.Asr;
    time_5_3 = time_5_3.split('(', 1);
    time_5_3 = String(time_5_3);
    mass_h_time_5_3 = time_5_3.split(':', 1);
    h_time_5_3 = Number(mass_h_time_5_3[0]);
    mass_time_5_3 = time_5_3.split(':', 2);
    m_time_5_3 = Number(mass_time_5_3[1]);


    time_5_4 = data.data[0].timings.Sunset;
    time_5_4 = time_5_4.split('(', 1);
    time_5_4 = String(time_5_4);
    mass_h_time_5_4 = time_5_4.split(':', 1);
    h_time_5_4 = Number(mass_h_time_5_4[0]);
    mass_time_5_4 = time_5_4.split(':', 2);
    m_time_5_4 = Number(mass_time_5_4[1]);


    time_5_5 = data.data[0].timings.Isha;
    time_5_5 = time_5_5.split('(', 1);
    time_5_5 = String(time_5_5);
    mass_h_time_5_5 = time_5_5.split(':', 1);
    h_time_5_5 = Number(mass_h_time_5_5[0]);
    mass_time_5_5 = time_5_5.split(':', 2);
    m_time_5_5 = Number(mass_time_5_5[1]);

  }
  else {
    time_5_1 = data.data[current_day + 1].timings.Fajr;
    time_5_1 = time_5_1.split('(', 1);
    time_5_1 = String(time_5_1);
    mass_h_time_5_1 = time_5_1.split(':', 1);
    h_time_5_1 = Number(mass_h_time_5_1[0]);
    mass_time_5_1 = time_5_1.split(':', 2);
    m_time_5_1 = Number(mass_time_5_1[1]);


    time_5_2 = data.data[current_day + 1].timings.Dhuhr;
    time_5_2 = time_5_2.split('(', 1);
    time_5_2 = String(time_5_2);
    mass_h_time_5_2 = time_5_2.split(':', 1);
    h_time_5_2 = Number(mass_h_time_5_2[0]);
    mass_time_5_2 = time_5_2.split(':', 2);
    m_time_5_2 = Number(mass_time_5_2[1]);


    time_5_3 = data.data[current_day + 1].timings.Asr;
    time_5_3 = time_5_3.split('(', 1);
    time_5_3 = String(time_5_3);
    mass_h_time_5_3 = time_5_3.split(':', 1);
    h_time_5_3 = Number(mass_h_time_5_3[0]);
    mass_time_5_3 = time_5_3.split(':', 2);
    m_time_5_3 = Number(mass_time_5_3[1]);


    time_5_4 = data.data[current_day + 1].timings.Sunset;
    time_5_4 = time_5_4.split('(', 1);
    time_5_4 = String(time_5_4);
    mass_h_time_5_4 = time_5_4.split(':', 1);
    h_time_5_4 = Number(mass_h_time_5_4[0]);
    mass_time_5_4 = time_5_4.split(':', 2);
    m_time_5_4 = Number(mass_time_5_4[1]);


    time_5_5 = data.data[current_day + 1].timings.Isha;
    time_5_5 = time_5_5.split('(', 1);
    time_5_5 = String(time_5_5);
    mass_h_time_5_5 = time_5_5.split(':', 1);
    h_time_5_5 = Number(mass_h_time_5_5[0]);
    mass_time_5_5 = time_5_5.split(':', 2);
    m_time_5_5 = Number(mass_time_5_5[1]);

  }


  my_now_location = localStorage.getItem('mob_user_city');
  document.getElementById('home_region_block').innerHTML = my_now_location;

  time_1 = String(time_1);
  time_2 = String(time_2);
  time_3 = String(time_3);
  time_4 = String(time_4);
  time_5 = String(time_5);

  var mass_h_time_1 = time_1.split(':', 1);
  var mass_h_time_2 = time_2.split(':', 1);
  var mass_h_time_3 = time_3.split(':', 1);
  var mass_h_time_4 = time_4.split(':', 1);
  var mass_h_time_5 = time_5.split(':', 1);

  var h_time_1 = Number(mass_h_time_1[0]);
  var h_time_2 = Number(mass_h_time_2[0]);
  var h_time_3 = Number(mass_h_time_3[0]);
  var h_time_4 = Number(mass_h_time_4[0]);
  var h_time_5 = Number(mass_h_time_5[0]);

  massiv_houer.push(h_time_1);
  massiv_houer.push(h_time_2);
  massiv_houer.push(h_time_3);
  massiv_houer.push(h_time_4);
  massiv_houer.push(h_time_5);
  localStorage.setItem('mob_massive_hour', massiv_houer);




  var mass_time_1 = time_1.split(':', 2);
  var mass_time_2 = time_2.split(':', 2);
  var mass_time_3 = time_3.split(':', 2);
  var mass_time_4 = time_4.split(':', 2);
  var mass_time_5 = time_5.split(':', 2);

  var m_time_1 = Number(mass_time_1[1]);
  var m_time_2 = Number(mass_time_2[1]);
  var m_time_3 = Number(mass_time_3[1]);
  var m_time_4 = Number(mass_time_4[1]);
  var m_time_5 = Number(mass_time_5[1]);

  massiv_minute.push(m_time_1);
  massiv_minute.push(m_time_2);
  massiv_minute.push(m_time_3);
  massiv_minute.push(m_time_4);
  massiv_minute.push(m_time_5);
  localStorage.setItem('mob_massive_minute', massiv_minute);


  var curr_language, d_num_interval;

  if (h_time_1 >= current_hour){
    hour_do = h_time_1 - current_hour;
    minute_do = m_time_1 - current_minute;

    current_interval = set_interval * 5;
    d_num_interval = 5;

    if (h_time_1 === current_hour && minute_do === 0){
      current_interval = set_interval * 4;
      d_num_interval = 4;
    }

    if (h_time_1 === current_hour && minute_do < 0){
      hour_do = h_time_2 - current_hour;
      minute_do = m_time_2 - current_minute;
      current_interval = set_interval * 4;
      d_num_interval = 4;
    }
    if (minute_do < 0){
      minute_do = 60 + minute_do;
      hour_do = hour_do - 1;
    }

    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;

    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }

  if (h_time_2 >= current_hour && current_hour > h_time_1){

    hour_do = h_time_2 - current_hour;
    minute_do = m_time_2 - current_minute;
    current_interval = set_interval * 4;
    d_num_interval = 4;

    if (h_time_1 === current_hour && minute_do === 0){
      current_interval = set_interval * 3;
      d_num_interval = 3;
    }
    if (h_time_2 === current_hour && minute_do < 0){
      hour_do = h_time_3 - current_hour;
      minute_do = m_time_3 - current_minute;
      current_interval = set_interval * 3;
      d_num_interval = 3;
    }
    if (minute_do < 0){
      minute_do = 60 + minute_do;
      hour_do = hour_do - 1;
    }

    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;
    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }

  if (h_time_3 >= current_hour && current_hour > h_time_2){

    hour_do = h_time_3 - current_hour;
    minute_do = m_time_3 - current_minute;
    current_interval = set_interval * 3;
    d_num_interval = 3;

    if (h_time_1 === current_hour && minute_do === 0){
      current_interval = set_interval * 2;
      d_num_interval = 2;
    }
    if (h_time_3 === current_hour && minute_do < 0){
      hour_do = h_time_4 - current_hour;
      minute_do = m_time_4 - current_minute;
      current_interval = set_interval * 2;
      d_num_interval = 2;
    }
    if (minute_do < 0){
      minute_do = 60 + minute_do;
      hour_do = hour_do - 1;
    }

    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;
    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }

  if (h_time_4 >= current_hour && current_hour > h_time_3){

    hour_do = h_time_4 - current_hour;
    minute_do = m_time_4 - current_minute;
    current_interval = set_interval * 2;
    d_num_interval = 2;

    if (h_time_1 === current_hour && minute_do === 0){
      current_interval = set_interval;
      d_num_interval = 1;
    }
    if (h_time_4 === current_hour && minute_do < 0){
      hour_do = h_time_5 - current_hour;
      minute_do = m_time_5 - current_minute;
      current_interval = set_interval;
      d_num_interval = 1;
    }
    if (minute_do < 0){
      minute_do = 60 + minute_do;
      hour_do = hour_do - 1;
    }

    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;
    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }

  if (h_time_5 >= current_hour && current_hour > h_time_4){

    hour_do = h_time_5 - current_hour;
    minute_do = m_time_5 - current_minute;
    current_interval = set_interval;
    d_num_interval = 1;

    if (h_time_1 === current_hour && minute_do === 0){
      current_interval = 0;
      d_num_interval = 0;
    }
    if (h_time_5 === current_hour && minute_do < 0){

      hour_do_1 = 23 - current_hour;
      hour_do = h_time_5_1 + hour_do_1;
      minute_do = 60 - current_minute + m_time_5_1;
      current_interval = 0;
      d_num_interval = 0;
      if (minute_do > 59){
        hour_do = hour_do + 1;
        minute_do = minute_do - 60;
      }

    }
    if (minute_do < 0){
      minute_do = 60 + minute_do;
      hour_do = hour_do - 1;
    }

    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;
    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }

  if (current_hour > h_time_5){

    hour_do_1 = 23 - current_hour;
    hour_do = h_time_5_1 + hour_do_1;
    minute_do = 60 - current_minute + m_time_5_1;
    current_interval = 0;
    d_num_interval = 0;
    if (minute_do > 59){
      hour_do = hour_do + 1;
      minute_do = minute_do - 60;
    }


    localStorage.setItem('mob_current_interval', current_interval);

    curr_language = localStorage.getItem('mob_current_lang');
    if (curr_language === 'русский'){
      time_do_practic = hour_do + ' ч. ' + minute_do + ' мин.';
    } else {
      time_do_practic = hour_do + ' h. ' + minute_do + ' min.';
    }

    document.getElementById('time_do').innerHTML = time_do_practic;
    localStorage.setItem('mob_time_do_practic', time_do_practic);
  }


  var date_1 = data.data[current_day].date.gregorian.weekday.en;
  var date_2 = data.data[current_day].date.gregorian.day;
  var date_3 = data.data[current_day].date.gregorian.month.en;

  //var date_4 = data.data[current_day].date.hijri.day;
  var date_5 = data.data[current_day].date.hijri.month.en;
  var date_6 = data.data[current_day].date.hijri.year;
  var date_7 = data.data[current_day].date.hijri.designation.abbreviated;

// Расчет лунных суток  ==================================================

  var year_now = localStorage.getItem('mob_develop_year');
  year_now = Number(year_now);
  var lunar_num_year = year_now - 2013;
  lunar_num_year = lunar_num_year * 11;

  var month_now = localStorage.getItem('mob_develop_month');
  month_now = Number(month_now);
  var day_now = localStorage.getItem('mob_day_now');
  day_now = Number(day_now);

  var lunar_day = lunar_num_year - 14 + month_now + day_now;

  var num_30 = lunar_day / 30;
  num_30 = Math.floor(num_30);
  num_30 = 30 * num_30;

  var current_lunar_day = lunar_day - num_30 + 1;
  if (current_lunar_day === 31){current_lunar_day = 1}

  // for (var i = lunar_day; i > 30; i - 30){
  //   current_lunar_day = current_lunar_day - 30;
  // }


  show_date = date_1 + ' ' + date_2 + ' ' + date_3 + ' / ' + current_lunar_day + ' lunar day';
  document.getElementById('current_date').innerHTML = show_date;


  var now_time_now = new Date().getTime();
  var add_time_hour = hour_do * 3600000;
  var add_time_minute = minute_do * 59000;
  var add_time_all = add_time_hour + add_time_minute;

  localStorage.setItem('mob_add_time_all', add_time_all);

  // Расчет будильников - доп.4 ==================================================

  var add_time_hour_22, add_time_minute_22, add_time_all_22, hour_do_22, minute_do_22;
  var add_time_hour_33, add_time_minute_33, add_time_all_33, hour_do_33, minute_do_33;
  var add_time_hour_44, add_time_minute_44, add_time_all_44, hour_do_44, minute_do_44;
  var add_time_hour_55, add_time_minute_55, add_time_all_55, hour_do_55, minute_do_55;

  if (d_num_interval === 5){
    hour_do_22 = h_time_2 - current_hour;
    minute_do_22 = m_time_2 - current_minute;
    if (minute_do_22 < 0){
      minute_do_22 = 60 + minute_do_22;
      hour_do_22 = hour_do_22 - 1;
    }

    hour_do_33 = h_time_3 - current_hour;
    minute_do_33 = m_time_3 - current_minute;
    if (minute_do_33 < 0){
      minute_do_33 = 60 + minute_do_33;
      hour_do_33 = hour_do_33 - 1;
    }

    hour_do_44 = h_time_4 - current_hour;
    minute_do_44 = m_time_4 - current_minute;
    if (minute_do_44 < 0){
      minute_do_44 = 60 + minute_do_44;
      hour_do_44 = hour_do_44 - 1;
    }

    hour_do_55 = h_time_5 - current_hour;
    minute_do_55 = m_time_5 - current_minute;
    if (minute_do_55 < 0){
      minute_do_55 = 60 + minute_do_55;
      hour_do_55 = hour_do_55 - 1;
    }

  }

  if (d_num_interval === 4){
    hour_do_22 = h_time_3 - current_hour;
    minute_do_22 = m_time_3 - current_minute;
    if (minute_do_22 < 0){
      minute_do_22 = 60 + minute_do_22;
      hour_do_22 = hour_do_22 - 1;
    }

    hour_do_33 = h_time_4 - current_hour;
    minute_do_33 = m_time_4 - current_minute;
    if (minute_do_33 < 0){
      minute_do_33 = 60 + minute_do_33;
      hour_do_33 = hour_do_33 - 1;
    }

    hour_do_44 = h_time_5 - current_hour;
    minute_do_44 = m_time_5 - current_minute;
    if (minute_do_44 < 0){
      minute_do_44 = 60 + minute_do_44;
      hour_do_44 = hour_do_44 - 1;
    }

    hour_do_55 = 23 - current_hour;
    hour_do_55 = h_time_5_1 + hour_do_55;
    minute_do_55 = 60 - current_minute + m_time_5_1;
    if (minute_do_55 > 59){
      minute_do_55 = minute_do_55 - 60;
      hour_do_55 = hour_do_55 + 1;
    }

  }

  if (d_num_interval === 3){
    hour_do_22 = h_time_4 - current_hour;
    minute_do_22 = m_time_4 - current_minute;
    if (minute_do_22 < 0){
      minute_do_22 = 60 + minute_do_22;
      hour_do_22 = hour_do_22 - 1;
    }

    hour_do_33 = h_time_5 - current_hour;
    minute_do_33 = m_time_5 - current_minute;
    if (minute_do_33 < 0){
      minute_do_33 = 60 + minute_do_33;
      hour_do_33 = hour_do_33 - 1;
    }

    hour_do_44 = 23 - current_hour;
    hour_do_44 = h_time_5_1 + hour_do_44;
    minute_do_44 = 60 - current_minute + m_time_5_1;
    if (minute_do_44 > 59){
      minute_do_44 = minute_do_44 - 60;
      hour_do_44 = hour_do_44 + 1;
    }

    hour_do_55 = 23 - current_hour;
    hour_do_55 = h_time_5_2 + hour_do_55;
    minute_do_55 = 60 - current_minute + m_time_5_2;
    if (minute_do_55 > 59){
      minute_do_55 = minute_do_55 - 60;
      hour_do_55 = hour_do_55 + 1;
    }

  }

  if (d_num_interval === 2){
    hour_do_22 = h_time_5 - current_hour;
    minute_do_22 = m_time_5 - current_minute;
    if (minute_do_22 < 0){
      minute_do_22 = 60 + minute_do_22;
      hour_do_22 = hour_do_22 - 1;
    }

    hour_do_33 = 23 - current_hour;
    hour_do_33 = h_time_5_1 + hour_do_33;
    minute_do_33 = 60 - current_minute + m_time_5_1;
    if (minute_do_33 > 59){
      minute_do_33 = minute_do_33 - 60;
      hour_do_33 = hour_do_33 + 1;
    }

    hour_do_44 = 23 - current_hour;
    hour_do_44 = h_time_5_2 + hour_do_44;
    minute_do_44 = 60 - current_minute + m_time_5_2;
    if (minute_do_44 > 59){
      minute_do_44 = minute_do_44 - 60;
      hour_do_44 = hour_do_44 + 1;
    }

    hour_do_55 = 23 - current_hour;
    hour_do_55 = h_time_5_3 + hour_do_55;
    minute_do_55 = 60 - current_minute + m_time_5_3;
    if (minute_do_55 > 59){
      minute_do_55 = minute_do_55 - 60;
      hour_do_55 = hour_do_55 + 1;
    }

  }

  if (d_num_interval === 1){
    hour_do_22 = 23 - current_hour;
    hour_do_22 = h_time_5_1 + hour_do_22;
    minute_do_22 = 60 - current_minute + m_time_5_1;
    if (minute_do_22 > 59){
      minute_do_22 = minute_do_22 - 60;
      hour_do_22 = hour_do_22 + 1;
    }

    hour_do_33 = 23 - current_hour;
    hour_do_33 = h_time_5_2 + hour_do_33;
    minute_do_33 = 60 - current_minute + m_time_5_2;
    if (minute_do_33 > 59){
      minute_do_33 = minute_do_33 - 60;
      hour_do_33 = hour_do_33 + 1;
    }

    hour_do_44 = 23 - current_hour;
    hour_do_44 = h_time_5_3 + hour_do_44;
    minute_do_44 = 60 - current_minute + m_time_5_3;
    if (minute_do_44 > 59){
      minute_do_44 = minute_do_44 - 60;
      hour_do_44 = hour_do_44 + 1;
    }

    hour_do_55 = 23 - current_hour;
    hour_do_55 = h_time_5_4 + hour_do_55;
    minute_do_55 = 60 - current_minute + m_time_5_4;
    if (minute_do_55 > 59){
      minute_do_55 = minute_do_55 - 60;
      hour_do_55 = hour_do_55 + 1;
    }

  }

  if (d_num_interval === 0){
    hour_do_22 = 23 - current_hour;
    hour_do_22 = h_time_5_2 + hour_do_22;
    minute_do_22 = 60 - current_minute + m_time_5_2;
    if (minute_do_22 > 59){
      minute_do_22 = minute_do_22 - 60;
      hour_do_22 = hour_do_22 + 1;
    }

    hour_do_33 = 23 - current_hour;
    hour_do_33 = h_time_5_3 + hour_do_33;
    minute_do_33 = 60 - current_minute + m_time_5_3;
    if (minute_do_33 > 59){
      minute_do_33 = minute_do_33 - 60;
      hour_do_33 = hour_do_33 + 1;
    }

    hour_do_44 = 23 - current_hour;
    hour_do_44 = h_time_5_4 + hour_do_44;
    minute_do_44 = 60 - current_minute + m_time_5_4;
    if (minute_do_44 > 59){
      minute_do_44 = minute_do_44 - 60;
      hour_do_44 = hour_do_44 + 1;
    }

    hour_do_55 = 23 - current_hour;
    hour_do_55 = h_time_5_5 + hour_do_55;
    minute_do_55 = 60 - current_minute + m_time_5_5;
    if (minute_do_55 > 59){
      minute_do_55 = minute_do_55 - 60;
      hour_do_55 = hour_do_55 + 1;
    }

  }


  add_time_hour_22 = hour_do_22 * 3600000;
  add_time_minute_22 = minute_do_22 * 59000;
  add_time_all_22 = add_time_hour_22 + add_time_minute_22;

  add_time_hour_33 = hour_do_33 * 3600000;
  add_time_minute_33 = minute_do_33 * 59000;
  add_time_all_33 = add_time_hour_33 + add_time_minute_33;

  add_time_hour_44 = hour_do_44 * 3600000;
  add_time_minute_44 = minute_do_44 * 59000;
  add_time_all_44 = add_time_hour_44 + add_time_minute_44;

  add_time_hour_55 = hour_do_55 * 3600000;
  add_time_minute_55 = minute_do_55 * 59000;
  add_time_all_55 = add_time_hour_55 + add_time_minute_55;

  var add_day_timer;
  var day_timer = localStorage.getItem('mob_day_timer');
  if (day_timer === 'за 5 мин.'){add_day_timer = 300000;} else {add_day_timer = 0;}


  if (add_time_all === 0){
    set_timer_again();
  } else {
    var timeer_on = new Date(now_time_now + add_time_all);
    var timeer_on_2 = new Date(now_time_now + add_time_all_22 - add_day_timer);
    var timeer_on_3 = new Date(now_time_now + add_time_all_33 - add_day_timer);
    var timeer_on_4 = new Date(now_time_now + add_time_all_44 - add_day_timer);
    var timeer_on_5 = new Date(now_time_now + add_time_all_55 - add_day_timer);


    //alert('timeer_on = ' + timeer_on);

    cordova.plugins.notification.local.schedule([
      {
        id: 1,
        title: 'Практика My ZEN',
        at: timeer_on,
        foreground: true,
        vibrate: true
        //smallIcon: 'res://ic_launcher_foreground.png'
      }
    ]);

    cordova.plugins.notification.local.schedule([
      {
        id: 2,
        title: 'Практика My ZEN',
        at: timeer_on_2,
        foreground: true,
        vibrate: true
        //smallIcon: 'res://ic_launcher_foreground.png'
      }
    ]);

    cordova.plugins.notification.local.schedule([
      {
        id: 3,
        title: 'Практика My ZEN',
        at: timeer_on_3,
        foreground: true,
        vibrate: true
        //smallIcon: 'res://ic_launcher_foreground.png'
      }
    ]);

    cordova.plugins.notification.local.schedule([
      {
        id: 4,
        title: 'Практика My ZEN',
        at: timeer_on_4,
        foreground: true,
        vibrate: true
        //smallIcon: 'res://ic_launcher_foreground.png'
      }
    ]);

    cordova.plugins.notification.local.schedule([
      {
        id: 5,
        title: 'Практика My ZEN',
        at: timeer_on_5,
        foreground: true,
        vibrate: true
        //smallIcon: 'res://ic_launcher_foreground.png'
      }
    ]);
  }



}

function set_timer_again() {
  var current_minute = localStorage.getItem('mob_minutes_now');
  current_minute = Number(current_minute) + 1;
  localStorage.setItem('mob_minutes_now', current_minute);
  setTimeout(set_time_day, 60000);
}

function check_checker() {

  var massiv_houer = localStorage.getItem('mob_massive_hour');
  massiv_houer = massiv_houer.split(',', 5);

  //alert('massiv_houer = ' + massiv_houer);

  var massiv_minute = localStorage.getItem('mob_massive_minute');
  massiv_minute = massiv_minute.split(',', 5);

  var set_interval = Number(localStorage.getItem('mob_set_interval'));

  var now_checker = new Date();
  var hours_now_checker = now_checker.getHours();
  var minutes_now_checker = now_checker.getMinutes() - set_interval;


  var checker_val = 'ok';
  var is_checked;
  var practic_houer, practic_houer_1;

  var number_interval;

  if (hours_now_checker < Number(massiv_houer[4]) || hours_now_checker === Number(massiv_houer[4]) && minutes_now_checker <= Number(massiv_minute[4])){
    if (hours_now_checker < Number(massiv_houer[3]) || hours_now_checker === Number(massiv_houer[3]) && minutes_now_checker <= Number(massiv_minute[3])){
      if (hours_now_checker < Number(massiv_houer[2]) || hours_now_checker === Number(massiv_houer[2]) && minutes_now_checker <= Number(massiv_minute[2])){
        if (hours_now_checker < Number(massiv_houer[1]) || hours_now_checker === Number(massiv_houer[1]) && minutes_now_checker <= Number(massiv_minute[1])){
          if (hours_now_checker < Number(massiv_houer[0]) || hours_now_checker === Number(massiv_houer[0]) && minutes_now_checker <= Number(massiv_minute[0])){
            number_interval = 0;
          } else {number_interval = 1;}
        } else {number_interval = 2;}
      } else {number_interval = 3;}
    } else {number_interval = 4;}
  } else {number_interval = 5;}


  if (number_interval === 5){
    is_checked = localStorage.getItem('mob_checker_5');
    if (is_checked === 'ok'){
      is_checked = localStorage.getItem('mob_checker_1');
      if (is_checked === 'ok'){
        is_checked = localStorage.getItem('mob_checker_2');
        if (is_checked === 'ok'){
          is_checked = localStorage.getItem('mob_checker_3');
          if (is_checked === 'ok'){
            localStorage.setItem('mob_checker_4', checker_val);
          }
          localStorage.setItem('mob_checker_3', checker_val);
        }
        localStorage.setItem('mob_checker_2', checker_val);
      }
      localStorage.setItem('mob_checker_1', checker_val);
    }
    localStorage.setItem('mob_checker_5', checker_val);
  }
  if (number_interval === 4){
    is_checked = localStorage.getItem('mob_checker_4');
    if (is_checked === 'ok'){
      is_checked = localStorage.getItem('mob_checker_1');
      if (is_checked === 'ok'){
        is_checked = localStorage.getItem('mob_checker_2');
        if (is_checked === 'ok'){
          localStorage.setItem('mob_checker_3', checker_val);
        }
        localStorage.setItem('mob_checker_2', checker_val);
      }
      localStorage.setItem('mob_checker_1', checker_val);
    }

    localStorage.setItem('mob_checker_4', checker_val);
  }
  if (number_interval === 3){
    is_checked = localStorage.getItem('mob_checker_3');
    if (is_checked === 'ok'){
      is_checked = localStorage.getItem('mob_checker_1');
      if (is_checked === 'ok'){
        localStorage.setItem('mob_checker_2', checker_val);
      }
      localStorage.setItem('mob_checker_1', checker_val);
    }
    localStorage.setItem('mob_checker_3', checker_val);
  }
  if (number_interval === 2){
    is_checked = localStorage.getItem('mob_checker_2');
    if (is_checked === 'ok'){
      localStorage.setItem('mob_checker_1', checker_val);
    }
    localStorage.setItem('mob_checker_2', checker_val);
  }
  if (number_interval === 1){
    localStorage.setItem('mob_checker_1', checker_val);
  }
  if (number_interval === 0){
    is_checked = localStorage.getItem('mob_checker_5');
    if (is_checked === 'ok'){
      is_checked = localStorage.getItem('mob_checker_1');
      if (is_checked === 'ok'){
        is_checked = localStorage.getItem('mob_checker_2');
        if (is_checked === 'ok'){
          is_checked = localStorage.getItem('mob_checker_3');
          if (is_checked === 'ok'){
            localStorage.setItem('mob_checker_4', checker_val);
          }
          localStorage.setItem('mob_checker_3', checker_val);
        }
        localStorage.setItem('mob_checker_2', checker_val);
      }
      localStorage.setItem('mob_checker_1', checker_val);
    }
    localStorage.setItem('mob_checker_5', checker_val);
  }

  display_checker();

  send_checker();

  // for (var i = 0; i <= 3; i++ ){
  //
  //   practic_houer = Number(massiv_houer[i]);
  //
  //
  //   practic_houer_1 = Number(massiv_houer[i+1]);
  //
  //   // alert('hours_now_checker = ' + hours_now_checker + '; Number(massiv_houer[4]) = ' + Number(massiv_houer[4]) + '; practic_houer_1 = ' + practic_houer_1 + '; Number(massiv_minute[i+1]) = ' + Number(massiv_minute[i+1]) + '; minutes_now_checker = ' + minutes_now_checker);
  //
  //   // alert('hours_now_checker = ' + hours_now_checker + '; practic_houer_1 = ' + practic_houer_1);
  //
  //   if (hours_now_checker > Number(massiv_houer[4]) || hours_now_checker === practic_houer_1 &&  Number(massiv_minute[i+1]) <= minutes_now_checker){
  //     is_checked = localStorage.getItem('mob_checker_5');
  //     if (is_checked === 'ok'){
  //       is_checked = localStorage.getItem('mob_checker_1');
  //       if (is_checked === 'ok'){
  //         is_checked = localStorage.getItem('mob_checker_2');
  //         if (is_checked === 'ok'){
  //           is_checked = localStorage.getItem('mob_checker_3');
  //           if (is_checked === 'ok'){
  //             localStorage.setItem('mob_checker_4', checker_val);
  //           }
  //           localStorage.setItem('mob_checker_3', checker_val);
  //         }
  //         localStorage.setItem('mob_checker_2', checker_val);
  //       }
  //       localStorage.setItem('mob_checker_1', checker_val);
  //     }
  //     localStorage.setItem('mob_checker_5', checker_val);
  //     display_checker();
  //   }
  //
  //   if (practic_houer < hours_now_checker && hours_now_checker < practic_houer_1 || practic_houer === hours_now_checker && Number(massiv_minute[i]) <= minutes_now_checker || practic_houer_1 === hours_now_checker && Number(massiv_minute[i+1]) > minutes_now_checker){
  //     if (i === 0){
  //       localStorage.setItem('mob_checker_1', checker_val);
  //     }
  //     if (i === 1){
  //       is_checked = localStorage.getItem('mob_checker_2');
  //       if (is_checked === 'ok'){
  //         localStorage.setItem('mob_checker_1', checker_val);
  //       }
  //       localStorage.setItem('mob_checker_2', checker_val);
  //     }
  //     if (i === 2){
  //       is_checked = localStorage.getItem('mob_checker_3');
  //       if (is_checked === 'ok'){
  //         is_checked = localStorage.getItem('mob_checker_1');
  //         if (is_checked === 'ok'){
  //           localStorage.setItem('mob_checker_2', checker_val);
  //         }
  //         localStorage.setItem('mob_checker_1', checker_val);
  //       }
  //       localStorage.setItem('mob_checker_3', checker_val);
  //     }
  //     if (i === 3){
  //       is_checked = localStorage.getItem('mob_checker_4');
  //       if (is_checked === 'ok'){
  //         is_checked = localStorage.getItem('mob_checker_1');
  //         if (is_checked === 'ok'){
  //           is_checked = localStorage.getItem('mob_checker_2');
  //           if (is_checked === 'ok'){
  //             localStorage.setItem('mob_checker_3', checker_val);
  //           }
  //           localStorage.setItem('mob_checker_2', checker_val);
  //         }
  //         localStorage.setItem('mob_checker_1', checker_val);
  //       }
  //
  //       localStorage.setItem('mob_checker_4', checker_val);
  //     }
  //
  //     display_checker();
  //
  //   }
  // }

}

function display_checker() {
  var checker_ok = 'checkmark_alt_circle';

  var checker_1 = localStorage.getItem('mob_checker_1');
  var checker_2 = localStorage.getItem('mob_checker_2');
  var checker_3 = localStorage.getItem('mob_checker_3');
  var checker_4 = localStorage.getItem('mob_checker_4');
  var checker_5 = localStorage.getItem('mob_checker_5');
  if (checker_1 === 'ok'){
    document.getElementById('block_checker_1').innerHTML = checker_ok;
  }
  if (checker_2 === 'ok'){
    document.getElementById('block_checker_2').innerHTML = checker_ok;
  }
  if (checker_3 === 'ok'){
    document.getElementById('block_checker_3').innerHTML = checker_ok;
  }
  if (checker_4 === 'ok'){
    document.getElementById('block_checker_4').innerHTML = checker_ok;
  }
  if (checker_5 === 'ok'){
    document.getElementById('block_checker_5').innerHTML = checker_ok;
  }

  if (checker_1 === 'ok' && checker_2 === 'ok' && checker_3 === 'ok' && checker_4 === 'ok' && checker_5 === 'ok'){
    show_lotos();
  }
}
function get_city_name() {

  var dd_query = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  var dd_current_latitude = localStorage.getItem('mob_current_latitude');
  var dd_current_longitude = localStorage.getItem('mob_current_longitude');
  var end_get = '.json?access_token=pk.eyJ1IjoibXl6ZW4iLCJhIjoiY2tyNGFkdnB1MTdvMDJycW1xcWI3dmttcyJ9.69ivkCs1tTa61xE7_qrsjA';
  var full_get = dd_query + dd_current_longitude + ',' + dd_current_latitude + end_get;

  myapp.request.get(full_get,
    function (data) {
    var datat = JSON.parse(data);
    var user_city = datat.features[2].text;
    //alert('user_city = ' + user_city);
      localStorage.setItem('mob_user_city', user_city);
      get_time_pract();

    },
    function (data2) {
      myapp.dialog.alert('Ошибка связи с сервером time, проверьте подключение к интернету.', function () {
        //window.location.href = 'index.html';
      });
    });
}

function change_name() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/input_name/');
}
function save_name() {

  var el_name = document.getElementById('d_input_name').value;
  if (el_name === ''){
    myapp.dialog.alert('Введите имя');
  } else {
    localStorage.setItem('mob_user_name', el_name);
    send_name();
    document.getElementById('value_user_name').innerHTML = el_name;
    myapp.views.main.router.back();
  }




}
function change_name_2() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/input_name_2/');
}
function save_name_2() {
  var el_name_2 = document.getElementById('d_input_name_2').value;
  if (el_name_2 === ''){
    myapp.dialog.alert('Введите фамилию');
  } else {
    localStorage.setItem('mob_user_name_2', el_name_2);
    send_name_2();
    document.getElementById('value_user_name_2').innerHTML = el_name_2;
    myapp.views.main.router.back();
  }
}
function change_email() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/input_email/');
}
function check_confirm_email() {
  var el_email = document.getElementById('d_input_email').value;
  var curr_language = localStorage.getItem('mob_current_lang');
  var text_conf_email;
  if (curr_language === 'русский'){
    text_conf_email = 'На электронную почту: ' + el_email + ' отправлено письмо, введите код подтверждения из письма';
  } else {
    text_conf_email = 'Email was sent: ' + el_email + ', enter the confirmation code from the email';
  }

  if (el_email === ''){
    myapp.dialog.alert('Введите email');

  } else {

    document.getElementById('block_input_email').style.display = 'none';
    document.getElementById('block_confirm_email').style.display = 'block';
    document.getElementById('text_confirm_email').innerHTML = text_conf_email;



    localStorage.setItem('mob_temp_user_email', el_email);

    send_temp_email();
  }


}
function i_have_cod() {

  var el_email = localStorage.getItem('mob_temp_user_email');
  var curr_language = localStorage.getItem('mob_current_lang');
  var text_conf_email;

  if (curr_language === 'русский'){
    text_conf_email = 'На электронную почту: ' + el_email + ' было отправлено письмо, введите код подтверждения из письма';
  } else {
    text_conf_email = 'Email was sent: ' + el_email + ', enter the confirmation code from the email';
  }

  document.getElementById('block_input_email').style.display = 'none';
  document.getElementById('block_confirm_email').style.display = 'block';
  document.getElementById('text_confirm_email').innerHTML = text_conf_email;
}
function confirm_email() {
  var el_confirm_email = document.getElementById('d_confirm_email').value;
  var curr_language = localStorage.getItem('mob_current_lang');
  var text_alert_conf_email, text_alert_dont_conf_email;
  if (curr_language === 'русский'){
    text_alert_conf_email = 'Email подтвержден.';
    text_alert_dont_conf_email = 'Неверный код, проверьте электронную почту.';
  } else {
    text_alert_conf_email = 'Email confirmed.';
    text_alert_dont_conf_email = 'Invalid code, check your email.';
  }

  var user_id = localStorage.getItem('mob_user_id');
  var query = query11+'api_zen_get_conf_email';
  myapp.request.post(query, {
      user_id: user_id
    },
    function (data) {
      data = JSON.parse(data);
      var test_confirm = data.success;
      //alert('test_confirm = ' + test_confirm);
      if (Number(el_confirm_email) === Number(test_confirm)){
        myapp.dialog.alert(text_alert_conf_email);
        var conf_email = localStorage.getItem('mob_temp_user_email');
        localStorage.setItem('mob_user_email', conf_email);
        document.getElementById('value_email').innerHTML = conf_email;
        myapp.views.main.router.back();

      } else {
        myapp.dialog.alert(text_alert_dont_conf_email);
      }


    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });



}
function go_change_language() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/change_language/');
}
function go_morning_timer() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/morning_timer/');
}
function go_day_timer() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/day_timer/');
}
function go_sound_type() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/sound_type/');
}
function go_meditation_time() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/meditation_time/');
}


function go_statistic() {
  var user_email = localStorage.getItem('mob_user_email');
  if (user_email !== null){
    var refresh_index = 'refresh';
    localStorage.setItem('mob_refresh_index', refresh_index);
    myapp.views.main.router.navigate('/statistic/');
  } else {

    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Статистика по практикам доступна только зарегистрированным пользователям. Выполнить регистрацию?';
    } else {
      dialog_text = 'Statistics on practices is available only to registered users. Complete registration?';
    }
    myapp.dialog.confirm(dialog_text, function () {
      myapp.views.main.router.navigate('/profile/');
    }, function () {
      //alert('выход просто алерт 2');
    });
  }

}

function go_recomend() {
  var user_email = localStorage.getItem('mob_user_email');
  if (user_email !== null){
    myapp.views.main.router.navigate('/recomend/');
  } else {

    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Рекомендации доступны только зарегистрированным пользователям. Выполнить регистрацию?';
    } else {
      dialog_text = 'Recommendations are available only to registered users. Complete registration?';
    }
    myapp.dialog.confirm(dialog_text, function () {
      myapp.views.main.router.navigate('/profile/');
    }, function () {
      //alert('выход просто алерт 2');
    });
  }


}

function change_vibration() {

  var vibra;
  var is_vibra = localStorage.getItem('mob_is_vibra');

  if (is_vibra !== 'vibra'){
    document.getElementById('button_zvuk').innerHTML = '<img src="img/vibra_1.png" style="width: 100%; margin-top: 7%">';
    vibra = 'vibra';
    localStorage.setItem('mob_is_vibra', vibra);

    navigator.vibrate([500, 500, 500]);
  } else {
    document.getElementById('button_zvuk').innerHTML = '<img src="img/sound_v3.png" style="width: 100%; margin-top: 5%">';
    vibra = '';
    localStorage.setItem('mob_is_vibra', vibra);
    playAudio_2();
  }


}

function change_checker_gong_begin() {
  var dd_checker;
  var el_checker_gong_begin = document.getElementById('checker_gong_begin').checked;
  if (el_checker_gong_begin === false){
    dd_checker = 'off';
    localStorage.setItem('mob_gong_begin', dd_checker);
  } else {
    dd_checker = '';
    localStorage.setItem('mob_gong_begin', dd_checker);
  }
}

function change_lang_russ() {
  var current_lang = 'русский';
  localStorage.setItem('mob_current_lang', current_lang);
  document.getElementById('block_current_lang').innerHTML = current_lang;
  myapp.dialog.alert('Необходимо перезапустить приложение. Application must be restarted.',
    function () {
      window.location.href = 'index.html';
    });
  //myapp.views.main.router.back();
}
function change_lang_eng() {
  var current_lang = 'english';
  localStorage.setItem('mob_current_lang', current_lang);
  document.getElementById('block_current_lang').innerHTML = current_lang;
  myapp.dialog.alert('Необходимо перезапустить приложение. Application must be restarted.',
    function () {
      window.location.href = 'index.html';
    });
  //myapp.views.main.router.back();
}

function change_morning_timer_10() {
  var morning_timer = 'за 10 мин.';
  localStorage.setItem('mob_morning_timer', morning_timer);
  document.getElementById('block_morning_timer').innerHTML = morning_timer;
  myapp.views.main.router.back();
}
function change_morning_timer_5() {
  var morning_timer = 'за 5 мин.';
  localStorage.setItem('mob_morning_timer', morning_timer);
  document.getElementById('block_morning_timer').innerHTML = morning_timer;
  myapp.views.main.router.back();
}

function change_day_timer_2() {
  var day_timer = 'за 5 мин.';
  localStorage.setItem('mob_day_timer', day_timer);
  document.getElementById('block_day_timer').innerHTML = day_timer;
  myapp.views.main.router.back();
}
function change_day_timer_1() {
  var day_timer = 'вовремя';
  localStorage.setItem('mob_day_timer', day_timer);
  document.getElementById('block_day_timer').innerHTML = day_timer;
  myapp.views.main.router.back();
}

function change_sound_type_gong() {
  var sound_type = 'гонг';
  localStorage.setItem('mob_sound_type', sound_type);
  document.getElementById('block_sound_type').innerHTML = sound_type;
  myapp.views.main.router.back();
}
function change_sound_type_kolokol() {
  var sound_type = 'колокольчик';
  localStorage.setItem('mob_sound_type', sound_type);
  document.getElementById('block_sound_type').innerHTML = sound_type;
  myapp.views.main.router.back();
}

function change_meditation_time(d_num) {
  localStorage.setItem('mob_set_all_day_time', d_num);
  var current_meditation_time = d_num / 5;

  var dialog_text, lang_min;
  var lang_user = localStorage.getItem('mob_current_lang');
  if (lang_user === 'русский'){
    dialog_text = 'Изменения вступят в силу на следующий день.';
    lang_min = ' мин.'
  } else {
    dialog_text = 'The changes will take effect the next day.';
    lang_min = ' min.'
  }
  document.getElementById('block_meditation_time').innerHTML = current_meditation_time + lang_min;

  myapp.dialog.alert(dialog_text, function () {
    myapp.views.main.router.back();
  });



}

function back_refresh_index() {
  var refresh_index = localStorage.getItem('mob_refresh_index');
  if (refresh_index === 'refresh'){
    refresh_index = '';
    localStorage.setItem('mob_refresh_index', refresh_index);

    display_left_panel();
    set_time_day();
    display_screen_2_timer();
    check_language();
    display_checker();
    slider_work();
    //check_checker();

  }
}

function go_to_watsapp() {
  window.location.href = 'https://wa.me/79002061704';
}
function mail_to_admin() {
  window.location.href = 'mailto:app.myzen@gmail.com';
}
function go_to_yelegram() {
  window.location.href = 'https://t.me/argus_m';
}
function get_video_youtube() {
  window.location.href = 'https://www.youtube.com/watch?v=bq6HRGWQNjs&list=RDBclyGc1-JGw&index=9';
}
function share_app() {
  var text = 'Медитируйте с приложением My Zen.  http://nativnet.com/';
  navigator.share(text);
}

function get_coordinate_for_map() {
  myapp.preloader.show('green');
  toastBottom.open();
  var onSuccess = function(position) {
    var current_latitude = position.coords.latitude;
    var current_longitude = position.coords.longitude;

    localStorage.setItem('mob_current_latitude', current_latitude);
    localStorage.setItem('mob_current_longitude', current_longitude);
    myapp.preloader.hide();
    send_coordinate();

    myapp.views.main.router.navigate('/map/');

  };
  function onError(error) {
    myapp.preloader.hide();

    var dialog_text;
    var lang_user = localStorage.getItem('mob_current_lang');
    if (lang_user === 'русский'){
      dialog_text = 'Не удается определить местоположение. Возможно плохой сигнал GPS или выключен датчик.';
    } else {
      dialog_text = 'Unable to determine location. Possibly a bad GPS signal or the sensor is turned off.';
    }
    myapp.dialog.alert(dialog_text,
      function () {
       // window.location.href = 'index.html';
      });
  }
  navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 20000});
}
function back_from_map() {
  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = true;
}

function change_screen_light() {

  var is_light_on = localStorage.getItem('mob_is_light_on');
  if (is_light_on === 'off'){
    is_light_on = '';
    localStorage.setItem('mob_is_light_on', is_light_on);
    document.getElementById('button_sleep').innerHTML = '<img src="img/dont_sleep_v2.png" style="width: 100%">';

  } else {
    is_light_on = 'off';
    localStorage.setItem('mob_is_light_on', is_light_on);
    document.getElementById('button_sleep').innerHTML = '<img src="img/dont_sleep_v2_1.png" style="width: 100%">';

    toastCenter.open();

    setTimeout(screen_light_off, 4000);

    setTimeout(screen_light_on, 5000);
  }

}
function screen_light_off() {
  var brightness = cordova.plugins.brightness;
  var light = 0;
  dd_success = function () {};
  dd_error = function () {};

  brightness.setBrightness(light, dd_success, dd_error);
}
function screen_light_on() {
  var brightness = cordova.plugins.brightness;
  var light = -1;
  ddd_success = function () {};
  ddd_error = function () {};
  brightness.setBrightness(light, ddd_success, ddd_error);
}

function check_language() {
  var curr_language = localStorage.getItem('mob_current_lang');
  if (curr_language === 'русский'){
    document.getElementById('lang_your_city').innerHTML = 'Ваш город:';
    document.getElementById('lang_morning').innerHTML = 'Утро';
    document.getElementById('lang_day').innerHTML = 'День';
    document.getElementById('lang_Afternoon').innerHTML = 'После полудня';
    document.getElementById('lang_Evening').innerHTML = 'Вечер';
    document.getElementById('lang_Night').innerHTML = 'Ночь';
    document.getElementById('lang_next_pract').innerHTML = 'До следующей практики:';
    document.getElementById('lang_dont_worr').innerHTML = 'Не волнуйтесь, если пропустили время, просто добавьте его к следующей практике';

    document.getElementById('lang_Your_time').innerHTML = 'Ваше время';

    document.getElementById('lang_Emotional').innerHTML = 'Эмоциональное состояние';
    document.getElementById('lang_Excited').innerHTML = 'Возбужденное <span class="price-value">Подавленное</span>';
    document.getElementById('lang_Physical').innerHTML = 'Физическое состояние';
    document.getElementById('lang_Stable').innerHTML = 'Стабильное <span class="price-value">Нестабильное</span>';
    document.getElementById('lang_Mental').innerHTML = 'Ментальное состояние';
    document.getElementById('lang_Socrates').innerHTML = 'Сократ <span class="price-value">Пилат</span>';
    document.getElementById('lang_Recom').innerHTML = 'Рекомендации';
    document.getElementById('lang_Statis').innerHTML = 'Статистика';

    // Timer_end

    document.getElementById('lang_timer_end_text_1').innerHTML = 'Регулярная практика медитации позволяет вам становиться более продуктивным, снижает уровень стресса и улучшает качество жизни.';
    document.getElementById('lang_timer_end_text_2').innerHTML = 'Мы собрали статистику, чтобы вы смогли отследить, как изменилась ваша жизнь с началом практики. В медитации вы очищаете восприятие от устаревших системных привычек, создаете новые нейронные связи, сознаете мир иначе. Вы видите мир в лотосе собственного сердца.';



    // Zazen

    var inner_zazen_block;

    inner_zazen_block =
      ' <h3 class="d_text_centr">ZEN — путь простых истин.</h3>\n'+
      ' <p>Метод Дзадзен взят в основу практики медитации. </p>\n'+
      ' <p>Медитация — естественная функция организма.  </p>\n'+
      ' <p>Все уже сталкивались с ней в жизни, просто не осознавали этого.</p>\n'+
      ' <p>Осознанный подход позволяет вам ВКЛЮЧАТЬ АЛЬФА-частоту для отдыха и перезагрузки, получения необходимой информации или решения задачи.</p>\n'+
      ' <p>Стресс блокирует свободное течение энергии в организме и мы начинаем совершать ошибки, спешить, путаемся и раздражаемся. Доказано, что регулярное пятиминутное переключение волновой частоты с -БЕТА- в режим -АЛЬФА- позволяет вам обновиться, как это делает ваш смартфон.</p>\n'+
      ' <p>Проведите аналогию в тот момент, когда система перезагружается ваш гаджет абсолютно бесполезен, он не производит никаких процессов, не создает задач, процесс невидим, едва ли поддаётся описанию, но ОН ПРОИСХОДИТ.</p>\n'+
      ' <p>То же самое в ДЗАДЗЕН, наш основной посыл — ПРОСТО СИДИТЕ с ПРЯМОЙ СПИНОЙ. Не надо думать, что вы медитируете, что вы слышите шум прибоя и прочие визуальные техники создания иллюзий. Это не есть медитация. </p>\n'+
      ' <p>Истинная медитация происходит здесь и сейчас в любой момент времени, в любом помещении, при любых условиях — это естественный процесс. Вспомните себя после пробуждения или в момент дикого стресса — вы freeze замираете (морозитесь) и смотрите в одну точку. Так ваша умная система BodyMindSoul настраивается и подбирает оптимальный режим присутсвия, идет смена волновой активности.</p>\n'+
      ' <p>Итак, от вас требуется отключение от внешних раздражителей на 5 минут и погружение внутрь. Медитация проводится в сидячем положении с прямой спиной — это важно. Вы можете сидеть в любой удобной позиции йоги или просто на стуле, главное чтобы ваш позвоночник от макушки до креста составлял единую прямую линию. Ваше дыхание абсолютно спокойное и ровное. Руки мы рекомендуем положить в центр груди — первая ладонь, покрывает левую, также вы можете воспользоваться классическим положением рук в медитации, где руки сложены под пупком (дхьян-мудра) или лежат на коленях (джняна-мудра). Взгляд глаза могут быть закрыты, полуприкрыты или открыты (взгляд расфокусирован).</p>\n'+
      ' <p>Таймер позволит вам не думать о времени практики, он интуитивно понятен, время выставляется автоматически — вы услышите гонг/вибрацию по окончанию практики. В этот момент сделайте глубокий вдох и на выдохе с благодарностью (руки в намасте) выйдете из медитации. Также вы может настроить уведомления, которые напомнят вам о необходимости отдыха в медитации.</p>\n'+
      ' <p>Помните, что медитация — состояние NO MIND, где вы не сознаете процессы привычным способом, но это не значит что ничего не происходит. Просто вы привыкли анализировать умом, а сейчас при ПРАВИЛЬНО ПОСТАВЛЕННОЙ практике он отдыхает в АЛЬФА-частоте и вам кажется, что вы просто бестолково сидите. Как раз в это время вы и перезагружаетесь, идет глубокая релаксация и перезапуск, устанавливается контакт души с телом(гармония), организм приобретает способность к самоисцелению без химических препаратов и стимуляторов.</p>\n'+
      ' <p>Происходит незримая балансировка всех систем организма.</p>\n'+
      ' <p>Ниже представлено видео, где Мастер рассказывает о классической технике ZAZEN. Ознакомьтесь с этой простой техникой, выполняйте согласно рекомендации, один нюанс — мы предлагаем вам положить руки на сердце, это ускорит процесс исЦЕЛения вашей многомерной структуры. <br> Подробнее об этом во вкладке ALL WORLD. </p>\n'+

      ' <div style="margin-left: 30%; margin-right: 30%">\n'+
      '  <button class="col button button-outline button-round button-raised color-green"  onclick="get_video_youtube()">видео</button>\n'+
      ' </div>';

    document.getElementById('lang_zazen_inner').innerHTML = inner_zazen_block;


    // all world

    var inner_all_world_block;

    inner_all_world_block =
      ' <h3 class="d_text_centr">All world</h3>\n'+

      ' <div style="margin-left: 5%; margin-right: 5%">\n'+
      '  <p>Мы связаны друг с другом посредством сердца также, как смартфоны связаны между собой. Люди связаны между собой единой нативной, естетсвенной сетью, данной нам по праву рождения. </p>\n'+

      '  <p>Мы назвали её nativnet </p>\n'+
      '  <p>С помощью этой естественной сети мы получаем возможность пребывания здесь, божественная искра данная при рождении соединяет нас со всем мирозданием. </p>\n'+
      '  <p>Здесь вы можете посмотреть как люди со всего мира медитируют вместе, разгружаясь и перепрошиваясь на тонком уровне через священную нить(сутру) соединяющую их с Высшим.</p>\n'+
      ' </div>';

    document.getElementById('lang_all_world_block_text').innerHTML = inner_all_world_block;


    document.getElementById('lang_button_show_on_map').innerHTML = 'Посмотреть на карте';




    // левая панель

    document.getElementById('lang_go_to_profile').innerHTML = 'Перейти в профиль';
    document.getElementById('lang_go_to_Option').innerHTML = 'Настройки';
    document.getElementById('lang_go_to_World').innerHTML = 'Мудрый мир';
    document.getElementById('lang_go_to_Support').innerHTML = 'Техподдержка';
    document.getElementById('lang_go_to_Donation').innerHTML = 'Пожертвование';
    document.getElementById('lang_go_to_faq').innerHTML = 'Инструкция';
    document.getElementById('lang_go_to_About').innerHTML = 'О проекте';
    document.getElementById('lang_go_to_Share').innerHTML = 'Поделиться с друзьями';




  }

}
//======================================================================
function send_push_id_new_user() {
  var user_push_id = localStorage.getItem('pUseId');
  var query = query11+'api_zen_new_user';

  myapp.request.post(query, {
      user_push_id: user_push_id

    },
    function (data) {
      data = JSON.parse(data);
      // if (data.success === true) {
      //   myapp.dialog.alert('data.success');
      // }


      var user_id = data[0].id;
      //myapp.dialog.alert('user_id = ' + user_id);
      localStorage.setItem('mob_user_id', user_id);
    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });


}

function get_user_push_id() {
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };
  window.plugins.OneSignal
    .startInit("478dbf69-6d55-4b47-a0f7-5b3ccb6e64e3")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  window.plugins.OneSignal.getIds(function(ids) {
    //myApp.alert("userId = " + ids.userId);
    localStorage.setItem('pUseId', ids.userId);
    send_push_id_new_user();
  });
}

function send_coordinate() {
  var user_id = localStorage.getItem('mob_user_id');
  var current_latitude = localStorage.getItem('mob_current_latitude');
  var current_longitude = localStorage.getItem('mob_current_longitude');


  var query = query11+'api_zen_save_coordinate';
  myapp.request.post(query, {
      user_id: user_id,
      current_latitude: current_latitude,
      current_longitude: current_longitude
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        //myapp.dialog.alert('data.success');
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });

}
//======================================================================
function send_name() {
  var user_id = localStorage.getItem('mob_user_id');
  var user_name = localStorage.getItem('mob_user_name');
  var query = query11+'api_zen_save_name';
  myapp.request.post(query, {
      user_id: user_id,
      user_name: user_name
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        //myapp.dialog.alert('data.success');
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });
}
function send_name_2() {
  var user_id = localStorage.getItem('mob_user_id');
  var user_name_2 = localStorage.getItem('mob_user_name_2');
  var query = query11+'api_zen_save_name_2';
  myapp.request.post(query, {
      user_id: user_id,
      user_name_2: user_name_2
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        //myapp.dialog.alert('data.success');
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });
}
function send_temp_email() {
  var user_id = localStorage.getItem('mob_user_id');
  var user_temp_email = localStorage.getItem('mob_temp_user_email');
  var query = query11+'api_zen_send_temp_email';
  myapp.request.post(query, {
      user_temp_email: user_temp_email,
      user_id: user_id
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        //myapp.dialog.alert('data.success');
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });
}
//====================== загрузка фото ================================================
function get_picture_avatar() {
  navigator.camera.getPicture(uploadPhoto_avatar, function(message) {
      myapp.dialog.alert('Ошибка загрузки, вы не выбрали фото.', function () {
        //window.location.href = 'index.html';
      });
    },{
      quality: 50,
      destinationType: navigator.camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    }
  );
}
function uploadPhoto_avatar(imageURI) {
  var userNam_id = localStorage.getItem('mob_user_id');


  var options = new FileUploadOptions();
  options.fileKey="my_avatar";
  options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
  options.mimeType="image/jpeg";

  var params = new Object();
  params.value1 = "test";
  params.value2 = "param";

  options.params = params;
  options.chunkedMode = false;

  var ft = new FileTransfer();

  var query = query11+'api_zen_send_temp_avatar_foto';
  var headers = {'headerParam':userNam_id};

  options.headers = headers;

  myapp.preloader.show('green');

  ft.upload(imageURI, query, win_avatar_foto, fail1_avatat_foto, options);
}
function win_avatar_foto() {
  var userNam_id = localStorage.getItem('mob_user_id');
  var query = query11+'api_zen_get_temp_avatat_foto';

  myapp.request.post(query, {
      mUsername_id: userNam_id
    },
    function (data) {
      var user_data = JSON.parse(data);

      var result_width = user_data[0].result_width;
      var result_hight = user_data[0].result_hight;
      localStorage.setItem('mob_temp_shop_foto_result_width', result_width);
      localStorage.setItem('mob_temp_shop_foto_result_hight', result_hight);

      var file_temp_avatar_foto, file_temp__foto_1, list_temp_shop_foto;
      list_temp_shop_foto = '';

      file_temp_avatar_foto = query11 + 'image/zen_temp_avatar_foto/' + user_data[0].zen_user_temp_avatar_foto + '.jpeg';

      localStorage.setItem('mob_temp_avatar_foto', file_temp_avatar_foto);

      myapp.preloader.hide();

      myapp.views.main.router.navigate('/edit_temp_avatar_foto/');

    },
    function (data2) {
      myapp.dialog.alert('Ошибка связи с сервером, проверьте подключение к интернету.', function () {
        //window.location.href = 'index.html';
      });
    });
}
function fail1_avatat_foto(error) {
  alert("Ошибка загрузки: Code = " + error.code);
}
//======================================================================
function send_recomend() {
  var val_slider_0 = localStorage.getItem('mob_val_slider_0');
  var val_slider_1 = localStorage.getItem('mob_val_slider_1');
  var val_slider_2 = localStorage.getItem('mob_val_slider_2');

  var user_id = localStorage.getItem('mob_user_id');
  var user_lang = localStorage.getItem('mob_current_lang');
  var query = query11+'api_zen_send_recomenda';

  myapp.request.post(query, {
      user_id: user_id,
      val_slider_0: val_slider_0,
      val_slider_1: val_slider_1,
      val_slider_2: val_slider_2,
      user_lang: user_lang
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        var lang_user = localStorage.getItem('mob_current_lang');
        var send_ok__text;
        if (lang_user === 'русский'){
          send_ok__text = 'Рекомендации отправлены на электронную почту.';
        } else {
          send_ok__text = 'Recommendations sent by email.';
        }
        myapp.dialog.alert(send_ok__text);
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });
}
function send_checker() {
  var user_id = localStorage.getItem('mob_user_id');

  var day_now = localStorage.getItem('mob_day_now');
  var month_now = localStorage.getItem('mob_month_now');
  var week_day_now = localStorage.getItem('mob_week_day_now');

  var check_practic_1 = localStorage.getItem('mob_checker_1');
  var check_practic_2 = localStorage.getItem('mob_checker_2');
  var check_practic_3 = localStorage.getItem('mob_checker_3');
  var check_practic_4 = localStorage.getItem('mob_checker_4');
  var check_practic_5 = localStorage.getItem('mob_checker_5');


  var query = query11+'api_zen_save_checker';
  myapp.request.post(query, {
      user_id: user_id,
      day_now: day_now,
      month_now: month_now,
      week_day_now: week_day_now,
      check_practic_1: check_practic_1,
      check_practic_2: check_practic_2,
      check_practic_3: check_practic_3,
      check_practic_4: check_practic_4,
      check_practic_5: check_practic_5
    },
    function (data) {
      data = JSON.parse(data);
      if (data.success === true) {
        //myapp.dialog.alert('data.success');
      }



    },
    function (data2) {
      myapp.dialog.alert('Ошибка соединения с сервером, проверьте подключение к интернету.');
    });


}

function sbros_checker_val_0() {
  var sbros_checker = 0;

  localStorage.setItem('mob_graph_id_0', sbros_checker);
  localStorage.setItem('mob_graph_id_1', sbros_checker);
  localStorage.setItem('mob_graph_id_2', sbros_checker);
  localStorage.setItem('mob_graph_id_3', sbros_checker);
  localStorage.setItem('mob_graph_id_4', sbros_checker);
  localStorage.setItem('mob_graph_id_5', sbros_checker);
  localStorage.setItem('mob_graph_id_6', sbros_checker);
  //alert('ookk');

}

function donation_change_block_text() {
  document.getElementById('block_text_donation').style.display = 'none';
  document.getElementById('block_donation').style.display = 'block';
}

function go_to_intro() {

  myapp.views.main.router.navigate('/intro_1/');
}
function change_lang_to_ru_0() {
  document.getElementById('lang_button_eng_0').className = 'col button button-outline button-round button-raised';
  document.getElementById('lang_button_ru_0').className = 'col button button-outline button-round button-raised button-active';

  document.getElementById('lang_button_eng_0').innerHTML = 'Анг';
  document.getElementById('lang_button_ru_0').innerHTML = 'Рус';

  document.getElementById('lang_swipe_text_1_0').innerHTML = 'Добро пожаловать в Zen <br>Путь простых истин';
  document.getElementById('lang_swipe_text_2_0').innerHTML = 'Медитация — это естественная функция организма для поддержания всей системы в гармонии и балансе';
  document.getElementById('lang_swipe_text_3_0').innerHTML = 'Медитация позволяет обновляться вашему организму, вы просто находитесь в состоянии покоя, как смартфон при перезагрузке';
  document.getElementById('lang_swipe_text_4_0').innerHTML = 'Мы сделали приложение интуитивно понятным 5 практик по 5 минут. <br> Просто попробуйте, для обретения ясности, продуктивности и равновесия';
  document.getElementById('lang_swipe_text_5_0').innerHTML = 'Мы существуем в волновом пространстве. <br> Лови волну высоких вибраций, поддерживай своё состояния и будь на высоте. <br> Все просто включил таймер, выключил   УМ.';
  document.getElementById('lang_button_go_go_0').innerHTML = 'Далее';

  var current_lang = 'русский';
  localStorage.setItem('mob_current_lang', current_lang);
}
function change_lang_to_eng_0() {
  document.getElementById('lang_button_eng_0').className = 'col button button-outline button-round button-raised button-active';
  document.getElementById('lang_button_ru_0').className = 'col button button-outline button-round button-raised';

  document.getElementById('lang_button_eng_0').innerHTML = 'Eng';
  document.getElementById('lang_button_ru_0').innerHTML = 'Ru';

  document.getElementById('lang_swipe_text_1_0').innerHTML = 'Welcome to Zen  <br>  The path of simple truths';
  document.getElementById('lang_swipe_text_2_0').innerHTML = 'Meditation is a natural function of the body to keep the entire system in harmony and balance';
  document.getElementById('lang_swipe_text_3_0').innerHTML = 'Meditation allows your body to refresh, you are just at rest, like a smartphone when you reboot';
  document.getElementById('lang_swipe_text_4_0').innerHTML = "We've made the app intuitive 5 practices for 5 minutes <br> Just try it for clarity, productivity and balance";
  document.getElementById('lang_swipe_text_5_0').innerHTML = "We exist in wave space. <br> Catch a wave of high vibrations, maintain your condition and be on top.<br> It's all just  turned on the timer, turned off the MIND.";
  document.getElementById('lang_button_go_go_0').innerHTML = "Ok";

  var current_lang = 'english';
  localStorage.setItem('mob_current_lang', current_lang);
}


function go_back_to_intro() {
  myapp.views.main.router.back();
}

//=========================== Intro ==========================================
function change_lang_to_ru() {
  document.getElementById('lang_button_eng').className = 'col button button-outline button-round button-raised color-green';
  document.getElementById('lang_button_ru').className = 'col button button-outline button-round button-raised button-active color-green';

  document.getElementById('lang_button_eng').innerHTML = 'Анг';
  document.getElementById('lang_button_ru').innerHTML = 'Рус';

  document.getElementById('lang_swipe_text_0').innerHTML = 'Добро пожаловать в Zen';
  document.getElementById('lang_swipe_text_1').innerHTML = 'Путь простых истин';
  document.getElementById('lang_swipe_text_2').innerHTML = 'Медитация — это естественная функция организма для поддержания всей системы в гармонии и балансе';
  document.getElementById('lang_swipe_text_3').innerHTML = 'Медитация позволяет обновляться вашему организму, вы просто находитесь в состоянии покоя, как смартфон при перезагрузке';
  document.getElementById('lang_swipe_text_4').innerHTML = 'Мы сделали приложение интуитивно понятным 5 практик по 5 минут. <br> Просто попробуйте, для обретения ясности, продуктивности и равновесия';
  document.getElementById('lang_swipe_text_5').innerHTML = 'Мы существуем в волновом пространстве. <br> Лови волну высоких вибраций, поддерживай своё состояния и будь на высоте. <br> Все просто включил таймер, выключил   УМ.';
  document.getElementById('lang_button_go_go').innerHTML = 'Далее';

  var current_lang = 'русский';
  localStorage.setItem('mob_current_lang', current_lang);

  var first_start_change_lang = 'restart_app';
  localStorage.setItem('mob_first_start_change_lang', first_start_change_lang);
}

function change_lang_to_eng() {
  document.getElementById('lang_button_eng').className = 'col button button-outline button-round button-raised button-active color-green';
  document.getElementById('lang_button_ru').className = 'col button button-outline button-round button-raised color-green';

  document.getElementById('lang_button_eng').innerHTML = 'Eng';
  document.getElementById('lang_button_ru').innerHTML = 'Ru';

  document.getElementById('lang_swipe_text_0').innerHTML = 'Welcome to Zen';
  document.getElementById('lang_swipe_text_1').innerHTML = 'The path of simple truths';
  document.getElementById('lang_swipe_text_2').innerHTML = 'Meditation is a natural function of the body to keep the entire system in harmony and balance';
  document.getElementById('lang_swipe_text_3').innerHTML = 'Meditation allows your body to refresh, you are just at rest, like a smartphone when you reboot';
  document.getElementById('lang_swipe_text_4').innerHTML = "We've made the app intuitive 5 practices for 5 minutes <br> Just try it for clarity, productivity and balance";
  document.getElementById('lang_swipe_text_5').innerHTML = "We exist in wave space. <br> Catch a wave of high vibrations, maintain your condition and be on top.<br> It's all just  turned on the timer, turned off the MIND.";
  document.getElementById('lang_button_go_go').innerHTML = "let's start";

  var current_lang = 'english';
  localStorage.setItem('mob_current_lang', current_lang);
}

function button_go_go_start() {
  var first_time = 'no';
  localStorage.setItem('mob_first_time', first_time);
  start_main_app();
  document.getElementById('show_logo').style.display = 'none';
  document.getElementById('main_app').style.display = 'block';

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = true;

  var first_start_change_lang = localStorage.getItem('mob_first_start_change_lang');

  if (first_start_change_lang === 'restart_app'){
    window.location.href = 'index.html';
  } else {
    myapp.views.main.router.back();
  }



}
function button_go_go_start_1() {
  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);

  var panel = myapp.panel.get('.panel-left');
  panel.swipeable = true;

  myapp.views.main.router.back();
  
}

function main_app_view() {
  document.getElementById('main_app').style.display = 'block';
}

//=========================== faq_project ==========================================

function go_faq_answer(id) {
  localStorage.setItem('mob_id_faq_project_quation', id);

  var refresh_index = 'refresh';
  localStorage.setItem('mob_refresh_index', refresh_index);
  myapp.views.main.router.navigate('/faq_project_answer/');

}

function get_video_youtube_faq_projact() {
  var video_youtube_faq_dd = localStorage.getItem('mob_video_youtube_faq');
  window.location.href = video_youtube_faq_dd;
}

//=========================== statistic ==========================================

function statistic_show_year() {
  document.getElementById('block_week_statistic').style.display = 'none';
  document.getElementById('block_year_statistic').style.display = 'block';
}

function statistic_show_week() {
  document.getElementById('block_week_statistic').style.display = 'block';
  document.getElementById('block_year_statistic').style.display = 'none';
}

function show_lotos() {
  setTimeout(function () {

    document.getElementById('tab_2_timer').style.display = 'none';
    document.getElementById('show_lotos').style.display = 'block';

  }, 500);
}

//=========================== temp ==========================================

function donation_test() {

  var ref = cordova.InAppBrowser.open('http://nativnet.com/license/', '_blank', 'location=yes,hidenavigationbuttons=yes,hideurlbar=yes');


  // var inAppBrowserRef;
  //
  // function dd_showHelp() {
  //
  //   var target = "_blank";
  //
  //   var options = "location=yes,hidden=yes,beforeload=yes";
  //
  //   var url = 'https://yoomoney.ru/to/410011378842567';
  //
  //   inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
  //
  //   inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
  //
  //
  // }
  //
  // function loadStartCallBack() {
  //
  //   alert('start load');
  //
  //   //$('#status-message').text("loading please wait ...");
  //
  // }
  //
  // dd_showHelp();
}


function temp_set_coord() {
  var current_latitude = 56.807351;
  var current_longitude = 60.602607;
  localStorage.setItem('mob_current_latitude', current_latitude);
  localStorage.setItem('mob_current_longitude', current_longitude);
}

function temp_go_map() {
  myapp.views.main.router.navigate('/map/');
}


function first_start() {
  var first_time = '';
  localStorage.setItem('mob_first_time', first_time);
  alert('первый запуск - вкл.');
}

function test_2() {
  var brightness = cordova.plugins.brightness;
  var light = -1;




  var ddd_success = function () {

    alert('change_light');
  };
  var ddd_error = function () {

    //alert('errror  change_light');
  };

  brightness.setBrightness(light, ddd_success, ddd_error);
}

function test_3() {
  var long = localStorage.getItem('mob_current_latitude');
  alert('long = ' + long);
}

function w_wise_add_one() {
  var day_w_wise_change = 'ttt';
  localStorage.setItem('mob_last_curr_day', day_w_wise_change);
  alert('day + 1');

}






