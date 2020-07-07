$(function() {

    let filter = $("[data-filter]");

    filter.on("click", function() {
        
        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {

                let workCat = $(this).data('cat');
                
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
    
            });
        };

    });


    /* slider */
    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        dotsClass: 'dots-style',
        autoplay: true
      });

});




