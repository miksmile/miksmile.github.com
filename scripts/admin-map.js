(function($){

    var bedsWrapper = $('.beds-wrapper');

    $('.beach-header .buttons a').click(function(e){
        e.preventDefault();

        $(this).toggleClass('active');
        $('.buttons a').not(this).removeClass('active');

        if($(this).hasClass('filter-button')){
            $('.filters').fadeToggle(300).toggleClass('visible');
        }

        if($(this).hasClass('edit-button')){
            $('.toggle-filter').removeClass('active');

            if($(this).hasClass('active')){
                bedsWrapper.removeClass('filtered').addClass('editable').find('div').removeClass('visible');
            } else {
                clearMap();
            }
            
            
        }
    });

    $(document).click(function(e){
        if(!$(e.target).closest('.filters, .filter-button').length ){
            $('.filters').fadeOut(300).removeClass('visible');
            $('.filter-button').removeClass('active');
            //bedsWrapper.removeClass('filtered').find('div').removeClass('visible');
        }
    });

    function toggleFilter(selector, visible){
        bedsWrapper.find('div').removeClass('visible');
        if(visible){
            bedsWrapper.addClass('filtered').find(selector).addClass('visible');
        } else {
            bedsWrapper.removeClass('filtered').find('div').removeClass('checked plus');
        }
    }

    function clearMap(){
        bedsWrapper
            .removeClass('editable filtered creating-checkin')
            .find('div').removeClass('checked plus');
        $('.toggle-filter, .edit-button').removeClass('active');
        $('.button-close:visible').click();
    }

    $('.toggle-filter').click(function(e){
        e.preventDefault();
        bedsWrapper.removeClass('editable');
        $('.toggle-filter').toggleClass('active').not(this).removeClass('active');
        toggleFilter($(this).data('selector'), $(this).hasClass('active'));
    });


    // Free Sunbed Checkin 1 step
    $(document).delegate('.editable:not(.creating-checkin) .status-available', 'click', function(){
        if($(this).hasClass('checked')) return;
        toggleFilter(this, true);
        $(this).addClass('checked');
        $('#create-checkin').toggleModal();
        return false;
    });

    //Free Sunbed Checkin 2 step
    $('.button-create-checkin').click(function(){
        bedsWrapper.addClass('creating-checkin');
        var ids = [];
        bedsWrapper.find('.checkin').each(function(){
            var id = $(this).data('checkin-id');
            if(ids.indexOf(id) < 0) {
                $(this).addClass('plus');
                ids.push(id);
            }            
        })
    });
    $(document).delegate('.creating-checkin .beds-row > .status-available:not(.checked), .creating-checkin .checkin', 'click', function(){
        bedsWrapper
            .removeClass('creating-checkin')
            .find('div').removeClass('plus checked');
        $('#checkin-created').css('visibility', 'visible').addClass('visible');
    });

    // Map Checkin Details popup
    $(document).delegate('.beds-wrapper:not(.creating-checkin) .checkin', 'click', function(e){
        e.preventDefault();
        if($(this).hasClass('active')) return;
        $('.checkin').removeClass('active');
        bedsWrapper.addClass('filtered');
        bedsWrapper.find("[data-checkin-id="+$(this).data('checkin-id')+"]").addClass('visible active');
        $('.checkin-modal').toggleModal();
    });



    $('.admin-modal-close').click(function(){
        bedsWrapper.removeClass('filtered').find('div');
        $('.checkin').removeClass('active visible');
        if($(this).hasClass('button-close')){
            bedsWrapper.find('div').removeClass('checked');
        }
    });


})(jQuery)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhZG1pbi1tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xuXG4gICAgdmFyIGJlZHNXcmFwcGVyID0gJCgnLmJlZHMtd3JhcHBlcicpO1xuXG4gICAgJCgnLmJlYWNoLWhlYWRlciAuYnV0dG9ucyBhJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmJ1dHRvbnMgYScpLm5vdCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnZmlsdGVyLWJ1dHRvbicpKXtcbiAgICAgICAgICAgICQoJy5maWx0ZXJzJykuZmFkZVRvZ2dsZSgzMDApLnRvZ2dsZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdlZGl0LWJ1dHRvbicpKXtcbiAgICAgICAgICAgICQoJy50b2dnbGUtZmlsdGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICAgICAgYmVkc1dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2ZpbHRlcmVkJykuYWRkQ2xhc3MoJ2VkaXRhYmxlJykuZmluZCgnZGl2JykucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xlYXJNYXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZighJChlLnRhcmdldCkuY2xvc2VzdCgnLmZpbHRlcnMsIC5maWx0ZXItYnV0dG9uJykubGVuZ3RoICl7XG4gICAgICAgICAgICAkKCcuZmlsdGVycycpLmZhZGVPdXQoMzAwKS5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgJCgnLmZpbHRlci1idXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAvL2JlZHNXcmFwcGVyLnJlbW92ZUNsYXNzKCdmaWx0ZXJlZCcpLmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUZpbHRlcihzZWxlY3RvciwgdmlzaWJsZSl7XG4gICAgICAgIGJlZHNXcmFwcGVyLmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgIGlmKHZpc2libGUpe1xuICAgICAgICAgICAgYmVkc1dyYXBwZXIuYWRkQ2xhc3MoJ2ZpbHRlcmVkJykuZmluZChzZWxlY3RvcikuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJlZHNXcmFwcGVyLnJlbW92ZUNsYXNzKCdmaWx0ZXJlZCcpLmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCdjaGVja2VkIHBsdXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTWFwKCl7XG4gICAgICAgIGJlZHNXcmFwcGVyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2VkaXRhYmxlIGZpbHRlcmVkIGNyZWF0aW5nLWNoZWNraW4nKVxuICAgICAgICAgICAgLmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCdjaGVja2VkIHBsdXMnKTtcbiAgICAgICAgJCgnLnRvZ2dsZS1maWx0ZXIsIC5lZGl0LWJ1dHRvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmJ1dHRvbi1jbG9zZTp2aXNpYmxlJykuY2xpY2soKTtcbiAgICB9XG5cbiAgICAkKCcudG9nZ2xlLWZpbHRlcicpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJlZHNXcmFwcGVyLnJlbW92ZUNsYXNzKCdlZGl0YWJsZScpO1xuICAgICAgICAkKCcudG9nZ2xlLWZpbHRlcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5ub3QodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0b2dnbGVGaWx0ZXIoJCh0aGlzKS5kYXRhKCdzZWxlY3RvcicpLCAkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSk7XG4gICAgfSk7XG5cblxuICAgIC8vIEZyZWUgU3VuYmVkIENoZWNraW4gMSBzdGVwXG4gICAgJChkb2N1bWVudCkuZGVsZWdhdGUoJy5lZGl0YWJsZTpub3QoLmNyZWF0aW5nLWNoZWNraW4pIC5zdGF0dXMtYXZhaWxhYmxlJywgJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnY2hlY2tlZCcpKSByZXR1cm47XG4gICAgICAgIHRvZ2dsZUZpbHRlcih0aGlzLCB0cnVlKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICAkKCcjY3JlYXRlLWNoZWNraW4nKS50b2dnbGVNb2RhbCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAvL0ZyZWUgU3VuYmVkIENoZWNraW4gMiBzdGVwXG4gICAgJCgnLmJ1dHRvbi1jcmVhdGUtY2hlY2tpbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGJlZHNXcmFwcGVyLmFkZENsYXNzKCdjcmVhdGluZy1jaGVja2luJyk7XG4gICAgICAgIHZhciBpZHMgPSBbXTtcbiAgICAgICAgYmVkc1dyYXBwZXIuZmluZCgnLmNoZWNraW4nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2NoZWNraW4taWQnKTtcbiAgICAgICAgICAgIGlmKGlkcy5pbmRleE9mKGlkKSA8IDApIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwbHVzJyk7XG4gICAgICAgICAgICAgICAgaWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLmRlbGVnYXRlKCcuY3JlYXRpbmctY2hlY2tpbiAuYmVkcy1yb3cgPiAuc3RhdHVzLWF2YWlsYWJsZTpub3QoLmNoZWNrZWQpLCAuY3JlYXRpbmctY2hlY2tpbiAuY2hlY2tpbicsICdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGJlZHNXcmFwcGVyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NyZWF0aW5nLWNoZWNraW4nKVxuICAgICAgICAgICAgLmZpbmQoJ2RpdicpLnJlbW92ZUNsYXNzKCdwbHVzIGNoZWNrZWQnKTtcbiAgICAgICAgJCgnI2NoZWNraW4tY3JlYXRlZCcpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICB9KTtcblxuICAgIC8vIE1hcCBDaGVja2luIERldGFpbHMgcG9wdXBcbiAgICAkKGRvY3VtZW50KS5kZWxlZ2F0ZSgnLmJlZHMtd3JhcHBlcjpub3QoLmNyZWF0aW5nLWNoZWNraW4pIC5jaGVja2luJywgJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgJCgnLmNoZWNraW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGJlZHNXcmFwcGVyLmFkZENsYXNzKCdmaWx0ZXJlZCcpO1xuICAgICAgICBiZWRzV3JhcHBlci5maW5kKFwiW2RhdGEtY2hlY2tpbi1pZD1cIiskKHRoaXMpLmRhdGEoJ2NoZWNraW4taWQnKStcIl1cIikuYWRkQ2xhc3MoJ3Zpc2libGUgYWN0aXZlJyk7XG4gICAgICAgICQoJy5jaGVja2luLW1vZGFsJykudG9nZ2xlTW9kYWwoKTtcbiAgICB9KTtcblxuXG5cbiAgICAkKCcuYWRtaW4tbW9kYWwtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBiZWRzV3JhcHBlci5yZW1vdmVDbGFzcygnZmlsdGVyZWQnKS5maW5kKCdkaXYnKTtcbiAgICAgICAgJCgnLmNoZWNraW4nKS5yZW1vdmVDbGFzcygnYWN0aXZlIHZpc2libGUnKTtcbiAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYnV0dG9uLWNsb3NlJykpe1xuICAgICAgICAgICAgYmVkc1dyYXBwZXIuZmluZCgnZGl2JykucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbn0pKGpRdWVyeSkiXSwiZmlsZSI6ImFkbWluLW1hcC5qcyJ9
