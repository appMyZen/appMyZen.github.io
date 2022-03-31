/**
 * Created by Dmitry-xeon-v3 on 031 31.03.22.
 */

//alert('платеж да 3');
//history.go(-8);

//window.close();

function closeWindow(){
	if (confirm('Перейти в приложение 6')) {
		//alert('переход ');
		//myapp.views.main.router.navigate('/input_name/');
		alert('проб выйти ');
		 function DoCPExit(){
  if(window != window.parent && window.parent && window.parent["DoCPExit"] !== undefined ){
    window.parent.DoCPExit();
  }
  else
  {
    if(window.top == self)
    {
      var win = window.open("","_self");
      win.close();
    }
    else
    {
      var win = window.top.open("","_self");
      win.top.close();
    }
  }
}
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
