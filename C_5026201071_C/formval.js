$(function(){
    var $registerForm = $("#form");
    $.validator.addMethod("nospace", function(value, element){
        return value == '' || value.trim().length != 0
    }, "Spaces not allowed!")

    if($registerForm.length){
        $registerForm.validate({
            rules:{
                book:{
                    required: true,
                    nospace: true
                },
                nobuku:{
                    required: true,
                    nospace: true
                },
                jenis:{
                    required: true
                },
                tanggal:{
                    required: true
                }
               
            },
            messages:{
                book:{
                    required:'This field cannot be empty &#9940;'
                },
                nobuku:{
                    required:'This field cannot be empty &#9940;'
                },
                jenis:{
                    required:'Please choose the options &#9940;'
                },
                tanggal:{
                    required:'Please enter the date &#9940;'
                }
            }
        })
    }
})