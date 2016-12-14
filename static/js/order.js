var upsell_clicked = false;

            function showResult(result){

                if(result.status=='success'){
                    window.location = result.url;
                }
                else if(result.status=='failure'){

                    $(".loader:first").fadeOut();


                    $("#model_headline").fadeOut();
                    $("#model_headline").text("Order Could Not Be Processed").fadeIn();

                    $("#model_content").text(result.error_text);
                    window.upsell_clicked = false;

                }
                else {
                    $(".loader:first").fadeOut();
                    $("#model_headline").fadeOut().text(result.headline).fadeIn();
                    $("#model_content").text(result.text);
                    window.upsell_clicked = false;





                }
            }






        function stripeResponseHandler(status, response) {
            if (response.error) {
                $(".loader:first").fadeOut();
                $("#model_headline").fadeOut().text("Failed to Submit Form").fadeIn();
                $("#model_content").text(response.error.message);


                window.upsell_clicked = false;
            } else {

                var token = response.id;
                $('#opt_in_form').append($('<input type="hidden" name="stripeToken">').val(token));
                var form_data = $('#opt_in_form').serialize();
                $.post("charge.php",form_data).done(showResult).fail(showResult);


            }
        };

     

       
       
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

        function valid_credit_card(value) {
            if (/[^0-9-\s]+/.test(value)){
                return false;
            }

            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);

                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }

                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) == 0;
        }

        $(document).ready(function() {




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

            $('input[type="radio"]').click(function(){
                if ($(this).is(':checked')){
                    var parent_div =  $(this).closest("div");

                    if($(parent_div).find("h2 span").hasClass("invalid")){
                        var spanner = $(parent_div).find("h2 span");
                        $(spanner).removeClass("invalid");
                        $(spanner).addClass("valid");
                    }else{
                        console.log($(this));
                    }
                }
            });

            $("#fields_select_size").change(function() {
                var size_picked = $(this).val();
                $("#fields_size").val(size_picked);
            });

            $("#exp_month").change(function() {
                var exp_month = $(this).val();
                $("#fields_cc_month").val(exp_month);
            });

            $("#exp_year").change(function() {
                var exp_year = $(this).val();
                $("#fields_cc_year").val(exp_year);
            });

            
             
            $('#opt_in_form').submit(function(event){
                event.preventDefault();


                if ($("#fields_size").val() != "") 
                {
                    $('#fields_select_size').removeClass('invalid');
                    $('#fields_select_size').addClass('valid');
                }
                
                
                else {
                    $('#fields_select_size').removeClass('valid');
                    $('#fields_select_size').addClass('invalid');
                    $("#fields_select_size").focus();
                    $("body,html").scrollTo("#fields_select_size");

                    return false;
                }

                var basket_colors = [];
                var color_errors = 0;
                var quantity_wt = $("#fields_quantity").val();

                $(':radio:checked').each(function(){
                    var color_value = $(this).val();
                    color_value =  color_value.slice(0,-1);
                    basket_colors.push(color_value);
                });

                for(var i =0; i<quantity_wt; i ++){
                    var c = i +1;
                    var selector = "#colordiv" + c + " input:radio:checked";

                    if($(selector).size()===0){
                        $("span#validation"+c).addClass("invalid");
                        $("span#validation"+c).removeClass("valid");
                        color_errors = color_errors +1;
                        $("span#validation"+c).text(" Please Select A Color!");
                    }else{
                        $("span#validation"+c).removeClass("invalid");
                        $("span#validation"+c).addClass("valid");
                    }
                }

                if(color_errors==0){
                    $('#color_array').val(JSON.stringify(basket_colors));
                }else{
                    $("body,html").scrollTo("#approved-content2");
                    color_errors = 0;

                    return false;
                }

                if ($("#ccnumber").val() != "") {
                    var cc_number = $("#ccnumber").val();
                    if(cc_number.length>=14){
                        $('#ccnumber').removeClass('invalid');
                        $('#ccnumber').addClass('valid');
                    }

                    if(valid_credit_card(cc_number)){
                        $('#ccnumber').removeClass('invalid');
                        $('#ccnumber').addClass('valid');
                    }else{
                        $('#ccnumber').removeClass('valid');
                        $('#ccnumber').addClass('invalid');
                        $("body,html").scrollTo("#ccnumber");
                        return false;
                    }
                } else {
                    $('#ccnumber').removeClass('valid');
                    $('#ccnumber').addClass('invalid');
                    $("body,html").scrollTo("#ccnumber");

                    return false;
                }


                if ($("#fields_cc_month").val() !== "") {
                    $('#exp_month').removeClass('invalid');
                    $('#exp_month').addClass('valid');
                } else {
                    $('#exp_month').removeClass('valid');
                    $('#exp_month').addClass('invalid');

                    return false;
                }

                if ($("#fields_cc_year").val() !== "")  {
                    $('#exp_year').removeClass('invalid');
                    $('#exp_year').addClass('valid');
                }else {
                    $('#exp_year').removeClass('valid');
                    $('#exp_year').addClass('invalid');
                    return false;
                }

                if ($("#cvv").val() != "") {
                    var cvv_len = $("#cvv").val().length;
                    if( cvv_len>=3 && cvv_len<=4) {
                        $('#cvv').removeClass('invalid');
                        $('#cvv').addClass('valid');
                    } else{
                        $('#cvv').removeClass('valid');
                        $('#cvv').addClass('invalid');
                        $("body,html").scrollTo("#cvv");

                        return false;
                    }
                }else {
                    $('#cvv').removeClass('valid');
                    $('#cvv').addClass('invalid');
                    $("body,html").scrollTo("#cvv");
                    return false;
                }


                if (!$("input").hasClass("invalid")) {
                    if(window.upsell_clicked==false) {


                        var model2= $("#error_handler_overlay");
                        $(".loader:first").fadeIn();
                        $("#model_content").text("Please do not refresh or press the button while we submit your order");
                        $("#model_headline").text("Processing Order...");
                        model2.fadeIn();



                        $("body,html").scrollTo(model2,{offset:-50});

                        var form_stripe = $("#opt_in_form");
                        if(window.upsell_clicked ==false){
                            window.upsell_clicked = true;

                            Stripe.card.createToken(form_stripe, stripeResponseHandler);
                        }
                    }
                }
                else{
                    var firsterror = $(".invalid:first");
                    $("body,html").scrollTo(firsterror,{offset:-10});
                    window.upsell_clicked = false;
                }




            });
        });
