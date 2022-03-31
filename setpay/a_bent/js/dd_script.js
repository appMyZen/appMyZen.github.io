/**
 * Created by Dmitry-xeon-v3 on 031 31.03.22.
 */

alert('платеж да');
//history.go(-8);

//window.close();

function closeWindow(){
	if (confirm('Перейти в приложение')) {
		myapp.views.main.router.navigate('/input_name/');
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
