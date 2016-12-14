window.formSubmitted = false;
window.internalLink = false;
function ValidateExpDate() {
    var ccExpYear = '20'+$("#expirationYear").val();
    var ccExpMonth = $("#expirationMonth").val();
    var expDate=new Date();
    expDate.setFullYear(ccExpYear, ccExpMonth, 1);
    var today = new Date();
    if (expDate<today)
    {
        // Credit Card is expire
        return false;
    }
    else
    {
        // Credit is valid
        return true;
    }
}

function validate_form2(){
	var alertText = new Array();
	var errors = new Array();
	var filter = /[a-z A-Z]{1,64}$/;
	var phonefilter = /^([0-9\-\+\(\) ]{8,22})+$/ ;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var flag = 0;
	var fcs = '';
	//alert("Step1");
	//var is_terms_cheked = $('#terms_checkbox').attr('checked'); 
	$('#btn1').attr("disabled", false);
	$("#fields_fname").addClass('valid').removeClass('error');
	$("#fields_lname").addClass('valid').removeClass('error');
	$("#fields_email").addClass('valid').removeClass('error');
	
		$("#sizeselect").addClass('valid').removeClass('error');

	//$("#weight").addClass('valid').removeClass('error');

	if ($("#fields_fname").val().replace(/\s/g,"") =='' || $('#fields_fname').val()=='') {
		$("#fields_fname").addClass('error').removeClass('valid');
		flag = 1;
		var label = $("#fields_fname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		if(fcs =='')
				fcs = 'fields_fname';
	}
	else if(!filter.test($('#fields_fname').val())){
		$("#fields_fname").addClass('error').removeClass('valid');
		var label = $("#fields_fname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_fname';
	}
	
	if ($("#fields_lname").val().replace(/\s/g,"") =='' || $('#fields_lname').val()=='') {
		$("#fields_lname").addClass('error').removeClass('valid');
		var label = $("#fields_lname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_lname';
	}
	else if(!filter.test($('#fields_lname').val())){
		$("#fields_lname").addClass('error').removeClass('valid');
		var label = $("#fields_lname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_lname';
	}
	if ($("#fields_email").val().replace(/\s/g,"") =='' || $('#fields_email').val()=='') {
		$("#fields_email").addClass('error').removeClass('valid');
		var label = $("#fields_email").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_email';
	} else if ( !emailReg.test($('#fields_email').val()) ) {
		$("#fields_email").addClass('error').removeClass('valid');
		var label = $("#fields_email").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_email';
	}


if ($("#sizeselect").val()==''||$("#sizeselect").val()=='null') {
		$("#sizeselect").addClass('error').removeClass('valid');
		var label = $("#sizeselect").closest(":has('label')").find('label');
		alertText.push("Size");
		flag = 1;
		if(fcs =='')
				fcs = 'fields_size';
	} 
	else{
	
	
	
$('#sizeselect')
  .change(function () {
    var str = "";
    $( "select option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });
      $("#hiddensize").val( str );
  })
  .change();

   

	}


	if (flag == 0) {
		$('#btn1').val('Processing....');
		$('#btn1').attr("disabled", true);
		window.internalLink = true;
		return true;
	} else {
		var text = '';
		for(i=0; i<alertText.length; i++){
			text += '<li>'+alertText[i]+'</li>';
		}
		text = '<ul>'+text+'</ul>';
		Alert(text);
		$('#'+fcs).focus();
		return false;
	}
}

function validate_form3(){
	var alertText = new Array();
	var errors = new Array();
	var filter = /[a-z A-Z]{1,64}$/;
	var phonefilter = /^([0-9\-\+\(\) ]{8,22})+$/ ;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var flag = 0;
	var fcs = '';
	
	$('#btn1').attr("disabled", false);
	//$("#fields_fname").addClass('valid').removeClass('error');
	//$("#fields_lname").addClass('valid').removeClass('error');
	//$("#fields_email").addClass('valid').removeClass('error');
	
	$("#fields_address1").addClass('valid').removeClass('error');
	$("#fields_city").addClass('valid').removeClass('error');
	$("#fields_zip").addClass('valid').removeClass('error');
	//$("#country").addClass('valid').removeClass('error');
	$("#fields_state").addClass('valid').removeClass('error');
	$("#fields_phone").addClass('valid').removeClass('error');
	
	
	if ($("#fields_fname").val().replace(/\s/g,"") =='' || $('#fields_fname').val()=='') {
		flag = 1;
		alertText.push("First Name is missing");
	}
	if ($("#fields_lname").val().replace(/\s/g,"") =='' || $('#fields_lname').val()=='') {
		flag = 1;
		alertText.push("Last Name is missing");
	}
	if ($("#fields_email").val().replace(/\s/g,"") =='' || $('#fields_email').val()=='') {
		flag = 1;
		alertText.push("Email is missing");
	}
	
	if ($("#fields_address1").val().replace(/\s/g,"") =='' || $('#fields_address1').val()=='') {
		$("#fields_address1").addClass('error').removeClass('valid');
		var label = $("#fields_address1").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_address1';
	}
	else if(!filter.test($('#fields_address1').val())){
		$("#fields_address1").addClass('error').removeClass('valid');
		var label = $("#fields_address1").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_address1';
	}
	
	if ($("#fields_city").val().replace(/\s/g,"") =='' || $('#fields_city').val()=='') {
		$("#fields_city").addClass('error').removeClass('valid');
		var label = $("#fields_city").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_city';
	}
	else if(!filter.test($('#fields_city').val())){
		$("#fields_city").addClass('error').removeClass('valid');
		var label = $("#fields_city").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_city';
	}
	
	if ($("#fields_zip").val().replace(/\s/g,"") =='' || $('#fields_zip').val()=='') {
		$("#fields_zip").addClass('error').removeClass('valid');
		var label = $("#fields_zip").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_zip';
	}

	if ($("#fields_state").val().replace(/\s/g,"") =='' || $('#fields_state').val()=='') {
		$("#fields_state").addClass('error').removeClass('valid');
		var label = $("#fields_state").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_state';
	}

	if ($("#fields_phone").val().replace(/\s/g,"") =='' || $('#fields_phone').val()=='') {
		$("#fields_phone").addClass('error').removeClass('valid');
		var label = $("#fields_phone").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_phone';
	}
	

	if (flag == 0) {
		$('#btn3').val('Processing....');
		$('#btn3').attr("disabled", true);
		window.internalLink = true;
		return true;
	} else {
		var text = '';
		for(i=0; i<alertText.length; i++){
			text += '<li>'+alertText[i]+'</li>';
		}
		text = '<ul>'+text+'</ul>';
		Alert(text);
		$('#'+fcs).focus();
		return false;
	}

}






function validate_checkout_form(){
	var alertText = new Array();
	var errors = new Array();
	var phonefilter = /[0-9]$/;
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	var flag = 0;
	var fcs = '';
	
	//$("#cardNumber").addClass('valid').removeClass('error');
	//$("#cc_type").addClass('valid').removeClass('error');
	//$("#expirationMonth").addClass('valid').removeClass('error');
	//$("#expirationYear").addClass('valid').removeClass('error');
	//$("#securityCode").addClass('valid').removeClass('error');


if($("#billingSameAsShipping").val() == "NO"){
	if ($("#billing_fname").val().replace(/\s/g,"") =='' || $('#billing_fname').val()=='') {
		$("#billing_fname").addClass('error').removeClass('valid');
		var label = $("#billing_fname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_fname';
	}
	if ($("#billing_lname").val().replace(/\s/g,"") =='' || $('#billing_lname').val()=='') {
		$("#billing_lname").addClass('error').removeClass('valid');
		var label = $("#billing_lname").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_lname';
	}
	if ($("#billing_street_address").val().replace(/\s/g,"") =='' || $('#billing_street_address').val()=='') {
		$("#billing_street_address").addClass('error').removeClass('valid');
		var label = $("#billing_street_address").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_street_address';
	}
	if ($("#billing_city").val().replace(/\s/g,"") =='' || $('#billing_city').val()=='') {
		$("#billing_city").addClass('error').removeClass('valid');
		var label = $("#billing_city").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_city';
	}
	if ($("#billing_state").val().replace(/\s/g,"") =='' || $('#billing_state').val()=='') {
		$("#billing_state").addClass('error').removeClass('valid');
		var label = $("#billing_state").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_state';
	}
	if ($("#billing_zip").val().replace(/\s/g,"") =='' || $('#billing_zip').val()=='') {
		$("#billing_zip").addClass('error').removeClass('valid');
		var label = $("#billing_zip").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'billing_zip';
	}
}
	if( $("#cc_type").val().replace(/\s/g,"") =='' || $("#cc_type").val() == '') {
		$("#cc_type").addClass('error').removeClass('valid');
		var label = $("#cc_type").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'cc_type';
	}
	if( $("#cc_number").val().replace(/\s/g,"") =='' || $("#cc_number").val() == '' || !phonefilter.test($("#cc_number").val())) {
		$("#cc_number").addClass('error').removeClass('valid');
		var label = $("#cc_number").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'cc_number';
	}	
	
	if( $("#fields_expmonth").val().replace(/\s/g,"") =='' || $("#fields_expmonth").val() == '' ) {
		$("#fields_expmonth").addClass('error').removeClass('valid');
		alertText.push('Expiration Month');
		flag = 1;
		if(fcs =='')
				fcs = 'fields_expmonth';
	}
	if( $("#fields_expyear").val().replace(/\s/g,"") =='' || $("#fields_expyear").val() == '' ) {
		$("#fields_expyear").addClass('error').removeClass('valid');
		alertText.push('Expiration Year');
		flag = 1;
		if(fcs =='')
				fcs = 'fields_expyear';
	} 
	else if( ValidateExpDate()==false ) {
		$("#fields_expyear").addClass('error').removeClass('valid');
		$("#fields_expmonth").addClass('error').removeClass('valid');
		var label = $("#fields_expmonth").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'fields_expmonth';
	}
	if( $("#cc_cvv").val().replace(/\s/g,"") =='' || $("#cc_cvv").val() == '' || !phonefilter.test($("#cc_cvv").val())) {
		$("#cc_cvv").addClass('error').removeClass('valid');
		var label = $("#cc_cvv").closest(":has('label')").find('label');
		alertText.push(label.text().replace(':', ''));
		flag = 1;
		if(fcs =='')
				fcs = 'cc_cvv';
	}
	if (flag == 0 ) {
					
					return true;
				
				//return true;
				
				/*var page_ajax = 'limelight.php';
		        
				$.ajax({type:'POST', url: page_ajax, data:$('#index_form').serialize(), success: function(response) {
					  var res = response.split("|");
					  if( res[0]=='decline' ) {
						
						document.getElementById('btn4').disabled = false;
						$('#btn4').addClass('submit').removeClass('processing');
					  } else if( res[0]=='ok' ) {
						PreventExitPop = 1;
						window.location.href = 'sucess.php'res[1];
					  } else {
						  document.getElementById('btn4').disabled = false;
						  $('#btn4').addClass('submit').removeClass('processing');
					  }
				}});
					
				return false;*/
				
            } else {
				var text = '';
				for(i=0; i<alertText.length; i++){
					text += '<li>'+alertText[i]+'</li>';
				}
				text = '<ul>'+text+'</ul>';
				Alert(text);
				$('#'+fcs).focus();
				return false;
	}
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}




function togglebill(){
	if($("#billing_checkbox").is(':checked')){
		$("#hidden-fields").slideToggle().fadeOut(1);
		$('#billingSameAsShipping').val('YES');
	} else if($("#billing_checkbox").not(':checked')) {
		$("#hidden-fields").slideToggle().fadeIn(1);
		$('#billingSameAsShipping').val('NO');
	}
}


function onlyNumbers(e,type)
{
   var keynum;
   var keychar;
   var numcheck;
   if(window.event) // IE
   {
      keynum = e.keyCode;
   }
   else if(e.which) // Netscape/Firefox/Opera
   {
      keynum = e.which;
   }
   keychar = String.fromCharCode(keynum);
   numcheck = /\d/;

   switch (keynum)
   {
      case 8:    //backspace
      case 9:    //tab
      case 35:   //end
      case 36:   //home
      case 37:   //left arrow
      case 38:   //right arrow
      case 39:   //insert
      case 45:   //delete
      case 46:   //0
      case 48:   //1
      case 49:   //2
      case 50:   //3
      case 51:   //4
      case 52:   //5
      case 54:   //6
      case 55:   //7
      case 56:   //8
      case 57:   //9
      case 96:   //0
      case 97:   //1
      case 98:   //2
      case 99:   //3
      case 100:  //4
      case 101:  //5
      case 102:  //6
      case 103:  //7
      case 104:  //8
      case 105:  //9
         result2 = true;
         break;
      case 109: // dash -
         if (type == 'phone')
         {
            result2 = true;
         }
         else
         {
         result2 = false;
         }
      break;
      default:
         result2 = numcheck.test(keychar);
         break;
   }

   return result2;
}