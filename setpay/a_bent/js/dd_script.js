/**
 * Created by Dmitry-xeon-v3 on 031 31.03.22.
 */

//alert('платеж да 3');
//history.go(-8);

//window.close();

function closeWindow(){
	if (confirm('Перейти в приложение 7')) {
		//alert('переход ');
		//myapp.views.main.router.navigate('/input_name/');
		alert('проб выйти ');
		
		
		
	}	
}

closeWindow();



function close_tab() {
  if (confirm("Do you want to close this tab?")) {
    window.close();
  }
}


function g(url){
  if (opener){
    if (opener.closed)
      window.open(url, "");
    else if (opener.location.href.search(url) == -1)
      opener.location.href = url;
    self.close();
    return false;
  }
  return true;
}


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
