var upsell_clicked= false;
            function isValidEmailAddress(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
            
            function isValidPhoneNumber(p){
                var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
                var digits = p.replace(/[^\d]/g, "");
                return (digits.match(phoneRe) !== null);
            }

            var countDownTime = 300;

            function countDownTimer() {
                var hours = parseInt( countDownTime / 3600 ) % 24;
                var minutes = parseInt( countDownTime / 60 ) % 60;
                var seconds = countDownTime % 60;
                var result = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

                document.getElementById("timer").innerHTML = result;

                if(countDownTime != 0 ){ 
                    countDownTime = countDownTime - 1;
                }

                if(countDownTime == 0 ){ 
                    result = " EXPIRED";document.getElementById("timer").innerHTML = result;
                }

                setTimeout(function(){ countDownTimer() }, 1000);
            }

            countDownTimer();
            function showError(result) {
                alert("There was a problem processing your form. Please try again.")
                window.upsell_clicked = false;
            }
            function showResult(result){

                if(result.message=='success'){
                    window.location = "https://theperfectwaisttrainer.com/order";
                }
                else if(result.message=='failure'){

                    $(".loader:first").fadeOut();
                    $("#model_headline").fadeOut().text(result.headline).fadeIn();
                    $("#model_content").text(result.text);
                    window.upsell_clicked = false;

                }
                else {
                    $(".loader:first").fadeOut();
                    $("#model_headline").fadeOut().text(result.headline).fadeIn();
                    $("#model_content").text(result.text);
                    window.upsell_clicked = false;





                }
            }



            $(document).ready(function(){

		var clientKey = "js-kOyYhI7SWCPyRuSFBU5BANUm6nx2aU2vJAu0jBTfeIO5dGLPARqaElxKJ4NUZPpI";
		
		var cache = {};
		var container = $("#form");
		
		function handleResp(data)
		{
			if (data.error_msg)
{
}			else if ("city" in data)
			{
				// Set city and state
				container.find("input[name='fields_city']").val(data.city);
	container.find("input[name='select_states']").val(data.state);

$('#states option[value='+data.state+']').attr('selected','selected');








				container.find("input[name='fields_state']").val(data.state);
			}
		}
		
		// Set up event handlers
		container.find("input[name='fields_zip']").on("keyup change", function() {
			// Get zip code
			var zipcode = $(this).val().substring(0, 5);
			if (zipcode.length == 5 && /^[0-9]+$/.test(zipcode))
			{

					var url = "https://www.zipcodeapi.com/rest/"+clientKey+"/info.json/" + zipcode + "/radians";
					
					// Make AJAX request
					$.ajax({
						"url": url,
						"dataType": "json"
					}).done(function(data) {
						handleResp(data);
	
					});
				}
			
		}).trigger("change");



                var model2= $("#error_handler_overlay");


                $('#error_handler_overlay_close').on("click",function() {
                    $("#error_handler_overlay").fadeOut();
                });








                $(window).bind('scroll', function() {
                    var navHeight = 30;
                    if ($(window).scrollTop() > navHeight) {
                        $('#topbar').addClass('fixed');
                    } else {
                        $('#topbar').removeClass('fixed');
                    }
                });
            
                $( "input" ).on( "focus",function() {
                    if ($(this).hasClass("invalid")) {
                        $(this).removeClass('invalid');
                    }
                });

                $( "select" ).on( "change",function() {
                    if ($(this).hasClass("invalid")) {
                        $(this).removeClass('invalid');
                    }
                    var state_name = $(this).val();
                    $("#state_hidden").val(state_name);
                });



            
                $('form').submit(function(event){
                    event.preventDefault();

                    if($("#firstName").val()!=""){
                        $('#firstName').removeClass('invalid');
                        $('#firstName').addClass('valid');
                    } else {
                        $('#firstName').removeClass('valid');
                        $('#firstName').addClass('invalid');
                    }

                    if($("#lastName").val()!=""){
                        $('#lastName').removeClass('invalid');
                        $('#lastName').addClass('valid');
                    } else {
                        $('#lastName').removeClass('valid');
                        $('#lastName').addClass('invalid');
                    }

                    if($("#address").val()!=""){
                        $('#address').removeClass('invalid');
                        $('#address').addClass('valid');
                    } else {
                        $('#address').removeClass('valid');
                        $('#address').addClass('invalid');
                    }

                    if($("#city").val()!=""){
                        $('#city').removeClass('invalid');
                        $('#city').addClass('valid');
                    } else {
                        $('#city').removeClass('valid');
                        $('#city').addClass('invalid');
                    }

                    if($("#zip").val()!=""){
                        var zipcode = $("#zip").val();

                        if(zipcode.length==5){
                            $('#zip').removeClass('invalid');
                            $('#zip').addClass('valid');
                        }else{
                            $('#zip').removeClass('valid');
                            $('#zip').addClass('invalid');
                        }
                    } else {
                        $('#zip').removeClass('valid');
                        $('#zip').addClass('invalid');
                    }

                    if($("#state_hidden").val()!=""){
                        $('#states').removeClass('invalid');
                        $('#states').addClass('valid');
                    } else {
                        $('#states').removeClass('valid');
                        $('#states').addClass('invalid');
                    }

                    if(isValidEmailAddress( $("#email").val())){
                        $("#email").removeClass('invalid');
                        $("#email").addClass('valid');
                    } else {
                        $("#email").removeClass('valid');$("#email").addClass('invalid'); 
                    }

                    if(isValidPhoneNumber( $("#phone").val())){
                        $("#phone").removeClass('invalid');
                        $("#phone").addClass('valid');
                    } else {
                        $("#phone").removeClass('valid');$("#phone").addClass('invalid'); 
                    }

                    if (!$("input").hasClass("invalid")) {
                        if(window.upsell_clicked==false) {


                            window.upsell_clicked = true;

                            model2.fadeIn();
                            $("body,html").scrollTo(model2,{offset:-50});



                            var form_data = $('form').serialize();
                            $.post("optin.php", form_data).done(showResult).fail(showError);
                        }
                    }
                    else{
                        var firsterror = $(".invalid:first");
                        $("body,html").scrollTo(firsterror,{offset:-10});
                        window.upsell_clicked = false;
                    }
                });
            });