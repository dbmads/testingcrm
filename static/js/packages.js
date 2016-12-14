 $(document).on("ready",function(){
                    $("button.button2").on("click",function(event){
                        event.preventDefault();

                        var button_id = $(this).attr('id');
						window.location = "https://theperfectwaisttrainer.com/order/"+button_id;
                        
                       
                    });
                }); 