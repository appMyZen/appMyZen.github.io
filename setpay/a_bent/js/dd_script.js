/**
 * Created by Dmitry-xeon-v3 on 031 31.03.22.
 */

alert('платеж прошел, спасибо. закрыть');
//history.go(-8);

//window.close();

function closeWindow(){
	if (confirm('Вы действительно хотите закрыть страницу?')) {
		window.close();
	}
}

closeWindow();

// alert('ddd_good');
//
// setTimeout(function() {
//
//   alert('ddd_good_555');
//
//   //window.location.href = 'index.html';
//
//   //history.back(2);
//
//   history.go(-8);
//
// }, 5000);
