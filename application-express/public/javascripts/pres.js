var R = "";
var ident = $('#presentationID').text(); 

    var ajaxObject = {
        type: "GET",
        url: "/presentation/" + ident,
        error: function(error) {
            if (error) {
                console.log("Erreur");
            }
        },
        success: function(response) {
		R = '<div id="tiny-pres" class="white-popup" >'+response+'</div>';
		$('#saveEditor').html('<div id="tiny-pres" class="white-popup" >'+response+'</div>');
          console.log($('#test-popup').html());
        }
    };
    
    $.ajax(ajaxObject);
     
    $('.open-popup-link').magnificPopup({
		type:'inline',
		callbacks:{
			beforeOpen: function() {
                $('.white-popup').removeAttr('id');
			    $('.white-popup').attr('id', 'test-popup');
            },
		    close: function(){
			    $('#saveEditor').html("");
			    $('#saveEditor').html(R);
				$('.white-popup').removeAttr('id');
				$('.white-popup').attr('id', 'tiny-pres');
			}
		}
	});


			 
