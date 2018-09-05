//
var g = {
    //
    init: function(navDom, locationNav) {
        //
        this.navFn(navDom);
        this.locationChoose(locationNav);
        //
        this.mobileNav();
    },
    //
    navFn: function(nav) {
        //
        if($(nav)) {
            $(nav).on('click', '.nav_link_item', function(e) {
                $(this).parent().find('.nav_link_item').removeClass('nav_active');
                $(this).addClass('nav_active');
            })

        } else {
            return;
        }
        $(document).on('click', function(e) {
            // because the span HTML in the navigation bar, so it need check the parents className
            if (!$(e.target).parents('.nav_active').hasClass('nav_active')) {

                $('.nav_link_item').removeClass('nav_active');
            }
        })
    },
    //
    locationChoose: function(locationNav) {
        $(locationNav).on('click', ' ul > li', function() {
            $(this).parent().find('.main_location_item').removeClass('location_selected');
            $(this).addClass('location_selected')
            // console.log(this);
        })
    },
    //
    mobileNav: function() {
        $('.m-nav-icon').click(function() {
            $(this).parent().parent().find('.nav_link').addClass('m-nav_link');
        })

        $('.m-nav_link_close').click(function() {
            if ($(this).parents('.nav_link').hasClass('m-nav_link')) {
                $(this).parents('.nav_link').removeClass('m-nav_link')
            }
        })
    }
    //
}
