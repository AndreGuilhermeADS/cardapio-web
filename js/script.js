$(document).ready(function () {
   
    $('.filter-btn').on('click', function(){

        let type = $(this).attr('id');
        let boxes = $('.menu-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'appetizer-btn'){
            eachBoxes('appetizer', boxes)
        }else if(type == 'principal-btn'){
            eachBoxes('principal', boxes)
        }else if(type == 'snacks-btn'){
            eachBoxes('snacks', boxes)
        }else if(type == 'desserts-btn'){
            eachBoxes('desserts', boxes)
        }else {
            eachBoxes('drinks',boxes)
        }

    });

    function eachBoxes(type, boxes){
        $(boxes).each(function(){
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        });
    }
});