$('.show-all').click(function(){
    var context = $(this).data('context');
    $(context+'> :nth-child(n+4)').fadeToggle(300);
    addReadMoreButtons();
    $(this).toggleClass('expanded');
    return false;
});

function addReadMoreButtons(){
    $('.more-container').each(function(){

        var container = $(this);
        var content = $('.more-content', this);
        var wrapper = $('.more-wrapper', this);

        if(!wrapper.data('default-height')){
            wrapper.data('default-height', wrapper.height())
        }
        minHeight = wrapper.data('default-height');
        
        
        if(content.height() > minHeight){

            var button = $(this).find('button');
            if(button.length){
                button.show();
            } else {
                button = $("<button/>", {class: "read-more"})
                    .append("<span class='more'>Read More</span>")
                    .append("<span class='less'>Read Less</span>")
                    .append("<svg><use xlink:href='#arrow'></use></svg>")
                    .appendTo( this );

                button.click(function(){
                    container.toggleClass('expand');
                    wrapper.animate({height: container.hasClass('expand')?content.height():minHeight}, function(){
                        if(container.hasClass('expand')){
                            wrapper.css('height', 'auto');
                        }
                    });
                    return false;
                });
            }

        } else{
             $(this).find('button').hide();
        }
    });
};

$(window).on('load resize', addReadMoreButtons);
$.fn.toggleModal = function(){

    if(this.toggleClass('open').hasClass('open')){
        this.show().stop().animate({opacity:1, transform: 'translateY(0)'}, 300);
    } else {
        this.stop().animate({opacity:0, transform: 'translateY(50px)'}, 300, function(){
            $(this).hide();
        });
    }
}

$('.admin-modal-link').click(function(){
    $($(this).attr('href')).toggleModal();
});

$('.admin-modal-close').click(function(){
    $(this).closest('.admin-modal').toggleModal();
});

$('.modal-notification-close').click(function(){
    var modal = $(this).closest('.modal-notification');
    modal.removeClass('visible');
    setTimeout(function(){
        modal.css('visibility', 'hidden');
    }, 300)
    return false;
});
;(function(){
    $('.admin-gallery-grid').sortable({
        handle: '.handle',
        animation: 500,
        scroll: false
    });
    var $checkboxes = $('.admin-form input[type=checkbox]');
    var $delateButton = $('.button-delete'); 
    $('.js-select').click(function(){
        var $elements = $('header .js-select, .form-actions > *, .js-select-actions');
        switch($(this).data('action')){
            case 'all':
                $checkboxes.prop('checked', true).change();
                break;
            case 'unselect':
                $checkboxes.prop('checked', false).change();
                break;
            case 'cancel':
                $checkboxes.prop('checked', false).parent().hide();
                $elements.toggle();
                $(window).resize();
                break;
            case 'select':
                $checkboxes.parent().show();
                $delateButton.hide();
                $elements.toggle();
                $(window).resize();
                break;
        }
        return false;
    });
    $checkboxes.change(function(){
        var total = $checkboxes.parent().find(':checked').length;
        if(total){
            $delateButton.show().find('span').text(total);
        } else {
            $delateButton.hide();
        }
    });
})()
;(function(){
    $('.form-item').click(function(e){
        var input = $('.form-text input', $(this));
        if(input.length && e.target.tagName != 'INPUT'){
            var tmp = input.val();
            input.focus().val('');
            input.val(tmp);
        }
    });

    $(".admin-form").validate({
        highlight: function(element, errorClass, validClass) {
          $(element).parents(".form-item").addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).parents(".error").removeClass(errorClass);
        }
    });

    $(".upload-image-field").change(function(){
        var context = $(this).closest('.upload-image');
        var imageWrapper = $('.preview-image-wrapper', context);
        var button = $('.button span', context);
        if(this.files.length){
            var file = this.files[0];
            if(/\.(gif|jpe?g|png)$/i.test(file.name)){
                var reader = new FileReader();

                reader.addEventListener("load",function(event) {
                    var loadedFile = event.target;
                    imageWrapper.html($('<img>',{src: loadedFile.result})).fadeIn(300);
                    button.text('Change Icon');
                });

                reader.readAsDataURL(file);
            }
        } else {
            imageWrapper.fadeOut(300);
            button.text('Upload Icon');
        }
    });

    $('.form-items-time input').timepicker({timeFormat: 'g:i A', showInputs: false});
    $('.form-item-date input').datepicker({format: 'MM yyyy', startDate: 'now'});

    $(window).resize(function(){
        $('.admin-form .wrapper').css('paddingBottom', $('.form-actions').height()+44);
    }).resize();

    $('.admin-form').on( 'change keyup paste cut', 'textarea', function (){
        $(this).height(0).height(this.scrollHeight);
    }).find( 'textarea' ).change();

    //admin/company-profile-socials.html
    
    $('.socials-edit input').each(function(){
        var $input = $(this);
        var $clear = $input.closest('.row').find('.remove');
        $clear.click(function(){ $input.val(''); $clear.hide() });
        $input.val() && $clear.show();
        $input.keyup(function(e){ $input.val() ? $clear.show() : $clear.hide() });
    })


    //invite manager
    
    $('.access-type input').change(function(){
        $('.access-type-description').hide();
        $('#'+$(this).attr('id')+'-description').show();
    });

    //rules
    
    $('.rules').sortable({
        animation: 300, 
        handle: '.handle',
        scroll: true,
        onEnd: function(e){
            $('.rules li').each(function(i){
                $('.position span', this).text(i+1);
            });
        }
    });

})()
$(document).on('click', '.menu-languages .remove', function(){
    var $label = $(this).parent();
    var $checkbox = $('.menu-languages.other input[value="'+$label.data('language')+'"]');
    $checkbox.removeAttr('checked').parent().show();
    $label.parent().remove();
});

$('.menu-languages .add').bind('click', function(){
    var $row = $(this).parent().parent();
    var $newRow = $row.clone();
    $row.hide();

    var language = $('input', $row).attr('checked', 'checked').attr('value');
    $('.row-action', $newRow).removeClass('add').addClass('remove');
    $('.label', $newRow).data('language', language);
    $('input', $newRow).remove();
    $newRow.appendTo('.menu-languages.selected');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVhZC1tb3JlLmpzIiwiY29tcG9uZW50cy9tb2RhbC5qcyIsImNvbXBvbmVudHMvYWRtaW4vZ2FsbGVyeS5qcyIsImNvbXBvbmVudHMvYWRtaW4vZm9ybXMuanMiLCJjb21wb25lbnRzL2FkbWluL2xhbmd1YWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhZG1pbi1hbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCcuc2hvdy1hbGwnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIHZhciBjb250ZXh0ID0gJCh0aGlzKS5kYXRhKCdjb250ZXh0Jyk7XG4gICAgJChjb250ZXh0Kyc+IDpudGgtY2hpbGQobis0KScpLmZhZGVUb2dnbGUoMzAwKTtcbiAgICBhZGRSZWFkTW9yZUJ1dHRvbnMoKTtcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5mdW5jdGlvbiBhZGRSZWFkTW9yZUJ1dHRvbnMoKXtcbiAgICAkKCcubW9yZS1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICAgIHZhciBjb250ZW50ID0gJCgnLm1vcmUtY29udGVudCcsIHRoaXMpO1xuICAgICAgICB2YXIgd3JhcHBlciA9ICQoJy5tb3JlLXdyYXBwZXInLCB0aGlzKTtcblxuICAgICAgICBpZighd3JhcHBlci5kYXRhKCdkZWZhdWx0LWhlaWdodCcpKXtcbiAgICAgICAgICAgIHdyYXBwZXIuZGF0YSgnZGVmYXVsdC1oZWlnaHQnLCB3cmFwcGVyLmhlaWdodCgpKVxuICAgICAgICB9XG4gICAgICAgIG1pbkhlaWdodCA9IHdyYXBwZXIuZGF0YSgnZGVmYXVsdC1oZWlnaHQnKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZihjb250ZW50LmhlaWdodCgpID4gbWluSGVpZ2h0KXtcblxuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcykuZmluZCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpZihidXR0b24ubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICBidXR0b24uc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidXR0b24gPSAkKFwiPGJ1dHRvbi8+XCIsIHtjbGFzczogXCJyZWFkLW1vcmVcIn0pXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCI8c3BhbiBjbGFzcz0nbW9yZSc+UmVhZCBNb3JlPC9zcGFuPlwiKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwiPHNwYW4gY2xhc3M9J2xlc3MnPlJlYWQgTGVzczwvc3Bhbj5cIilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcIjxzdmc+PHVzZSB4bGluazpocmVmPScjYXJyb3cnPjwvdXNlPjwvc3ZnPlwiKVxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oIHRoaXMgKTtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudG9nZ2xlQ2xhc3MoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFuaW1hdGUoe2hlaWdodDogY29udGFpbmVyLmhhc0NsYXNzKCdleHBhbmQnKT9jb250ZW50LmhlaWdodCgpOm1pbkhlaWdodH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb250YWluZXIuaGFzQ2xhc3MoJ2V4cGFuZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBhZGRSZWFkTW9yZUJ1dHRvbnMpOyIsIiQuZm4udG9nZ2xlTW9kYWwgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYodGhpcy50b2dnbGVDbGFzcygnb3BlbicpLmhhc0NsYXNzKCdvcGVuJykpe1xuICAgICAgICB0aGlzLnNob3coKS5zdG9wKCkuYW5pbWF0ZSh7b3BhY2l0eToxLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ30sIDMwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9wKCkuYW5pbWF0ZSh7b3BhY2l0eTowLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDUwcHgpJ30sIDMwMCwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiQoJy5hZG1pbi1tb2RhbC1saW5rJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAkKCQodGhpcykuYXR0cignaHJlZicpKS50b2dnbGVNb2RhbCgpO1xufSk7XG5cbiQoJy5hZG1pbi1tb2RhbC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJCh0aGlzKS5jbG9zZXN0KCcuYWRtaW4tbW9kYWwnKS50b2dnbGVNb2RhbCgpO1xufSk7XG5cbiQoJy5tb2RhbC1ub3RpZmljYXRpb24tY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgIHZhciBtb2RhbCA9ICQodGhpcykuY2xvc2VzdCgnLm1vZGFsLW5vdGlmaWNhdGlvbicpO1xuICAgIG1vZGFsLnJlbW92ZUNsYXNzKCd2aXNpYmxlJyk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBtb2RhbC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgfSwgMzAwKVxuICAgIHJldHVybiBmYWxzZTtcbn0pOyIsIjsoZnVuY3Rpb24oKXtcbiAgICAkKCcuYWRtaW4tZ2FsbGVyeS1ncmlkJykuc29ydGFibGUoe1xuICAgICAgICBoYW5kbGU6ICcuaGFuZGxlJyxcbiAgICAgICAgYW5pbWF0aW9uOiA1MDAsXG4gICAgICAgIHNjcm9sbDogZmFsc2VcbiAgICB9KTtcbiAgICB2YXIgJGNoZWNrYm94ZXMgPSAkKCcuYWRtaW4tZm9ybSBpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgIHZhciAkZGVsYXRlQnV0dG9uID0gJCgnLmJ1dHRvbi1kZWxldGUnKTsgXG4gICAgJCgnLmpzLXNlbGVjdCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciAkZWxlbWVudHMgPSAkKCdoZWFkZXIgLmpzLXNlbGVjdCwgLmZvcm0tYWN0aW9ucyA+ICosIC5qcy1zZWxlY3QtYWN0aW9ucycpO1xuICAgICAgICBzd2l0Y2goJCh0aGlzKS5kYXRhKCdhY3Rpb24nKSl7XG4gICAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgICAgICAgICRjaGVja2JveGVzLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5jaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Vuc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAkY2hlY2tib3hlcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgICAgICAkY2hlY2tib3hlcy5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnBhcmVudCgpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkZWxlbWVudHMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICAkY2hlY2tib3hlcy5wYXJlbnQoKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJGRlbGF0ZUJ1dHRvbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnRzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJGNoZWNrYm94ZXMuY2hhbmdlKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0b3RhbCA9ICRjaGVja2JveGVzLnBhcmVudCgpLmZpbmQoJzpjaGVja2VkJykubGVuZ3RoO1xuICAgICAgICBpZih0b3RhbCl7XG4gICAgICAgICAgICAkZGVsYXRlQnV0dG9uLnNob3coKS5maW5kKCdzcGFuJykudGV4dCh0b3RhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZGVsYXRlQnV0dG9uLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKSIsIjsoZnVuY3Rpb24oKXtcbiAgICAkKCcuZm9ybS1pdGVtJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgIHZhciBpbnB1dCA9ICQoJy5mb3JtLXRleHQgaW5wdXQnLCAkKHRoaXMpKTtcbiAgICAgICAgaWYoaW5wdXQubGVuZ3RoICYmIGUudGFyZ2V0LnRhZ05hbWUgIT0gJ0lOUFVUJyl7XG4gICAgICAgICAgICB2YXIgdG1wID0gaW5wdXQudmFsKCk7XG4gICAgICAgICAgICBpbnB1dC5mb2N1cygpLnZhbCgnJyk7XG4gICAgICAgICAgICBpbnB1dC52YWwodG1wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5hZG1pbi1mb3JtXCIpLnZhbGlkYXRlKHtcbiAgICAgICAgaGlnaGxpZ2h0OiBmdW5jdGlvbihlbGVtZW50LCBlcnJvckNsYXNzLCB2YWxpZENsYXNzKSB7XG4gICAgICAgICAgJChlbGVtZW50KS5wYXJlbnRzKFwiLmZvcm0taXRlbVwiKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5oaWdobGlnaHQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGVycm9yQ2xhc3MsIHZhbGlkQ2xhc3MpIHtcbiAgICAgICAgICAkKGVsZW1lbnQpLnBhcmVudHMoXCIuZXJyb3JcIikucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIudXBsb2FkLWltYWdlLWZpZWxkXCIpLmNoYW5nZShmdW5jdGlvbigpe1xuICAgICAgICB2YXIgY29udGV4dCA9ICQodGhpcykuY2xvc2VzdCgnLnVwbG9hZC1pbWFnZScpO1xuICAgICAgICB2YXIgaW1hZ2VXcmFwcGVyID0gJCgnLnByZXZpZXctaW1hZ2Utd3JhcHBlcicsIGNvbnRleHQpO1xuICAgICAgICB2YXIgYnV0dG9uID0gJCgnLmJ1dHRvbiBzcGFuJywgY29udGV4dCk7XG4gICAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHZhciBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgICAgIGlmKC9cXC4oZ2lmfGpwZT9nfHBuZykkL2kudGVzdChmaWxlLm5hbWUpKXtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2FkZWRGaWxlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVdyYXBwZXIuaHRtbCgkKCc8aW1nPicse3NyYzogbG9hZGVkRmlsZS5yZXN1bHR9KSkuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0KCdDaGFuZ2UgSWNvbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWFnZVdyYXBwZXIuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgYnV0dG9uLnRleHQoJ1VwbG9hZCBJY29uJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJy5mb3JtLWl0ZW1zLXRpbWUgaW5wdXQnKS50aW1lcGlja2VyKHt0aW1lRm9ybWF0OiAnZzppIEEnLCBzaG93SW5wdXRzOiBmYWxzZX0pO1xuICAgICQoJy5mb3JtLWl0ZW0tZGF0ZSBpbnB1dCcpLmRhdGVwaWNrZXIoe2Zvcm1hdDogJ01NIHl5eXknLCBzdGFydERhdGU6ICdub3cnfSk7XG5cbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5hZG1pbi1mb3JtIC53cmFwcGVyJykuY3NzKCdwYWRkaW5nQm90dG9tJywgJCgnLmZvcm0tYWN0aW9ucycpLmhlaWdodCgpKzQ0KTtcbiAgICB9KS5yZXNpemUoKTtcblxuICAgICQoJy5hZG1pbi1mb3JtJykub24oICdjaGFuZ2Uga2V5dXAgcGFzdGUgY3V0JywgJ3RleHRhcmVhJywgZnVuY3Rpb24gKCl7XG4gICAgICAgICQodGhpcykuaGVpZ2h0KDApLmhlaWdodCh0aGlzLnNjcm9sbEhlaWdodCk7XG4gICAgfSkuZmluZCggJ3RleHRhcmVhJyApLmNoYW5nZSgpO1xuXG4gICAgLy9hZG1pbi9jb21wYW55LXByb2ZpbGUtc29jaWFscy5odG1sXG4gICAgXG4gICAgJCgnLnNvY2lhbHMtZWRpdCBpbnB1dCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgIHZhciAkY2xlYXIgPSAkaW5wdXQuY2xvc2VzdCgnLnJvdycpLmZpbmQoJy5yZW1vdmUnKTtcbiAgICAgICAgJGNsZWFyLmNsaWNrKGZ1bmN0aW9uKCl7ICRpbnB1dC52YWwoJycpOyAkY2xlYXIuaGlkZSgpIH0pO1xuICAgICAgICAkaW5wdXQudmFsKCkgJiYgJGNsZWFyLnNob3coKTtcbiAgICAgICAgJGlucHV0LmtleXVwKGZ1bmN0aW9uKGUpeyAkaW5wdXQudmFsKCkgPyAkY2xlYXIuc2hvdygpIDogJGNsZWFyLmhpZGUoKSB9KTtcbiAgICB9KVxuXG5cbiAgICAvL2ludml0ZSBtYW5hZ2VyXG4gICAgXG4gICAgJCgnLmFjY2Vzcy10eXBlIGlucHV0JykuY2hhbmdlKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5hY2Nlc3MtdHlwZS1kZXNjcmlwdGlvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnIycrJCh0aGlzKS5hdHRyKCdpZCcpKyctZGVzY3JpcHRpb24nKS5zaG93KCk7XG4gICAgfSk7XG5cbiAgICAvL3J1bGVzXG4gICAgXG4gICAgJCgnLnJ1bGVzJykuc29ydGFibGUoe1xuICAgICAgICBhbmltYXRpb246IDMwMCwgXG4gICAgICAgIGhhbmRsZTogJy5oYW5kbGUnLFxuICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgIG9uRW5kOiBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICQoJy5ydWxlcyBsaScpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICAgICAgJCgnLnBvc2l0aW9uIHNwYW4nLCB0aGlzKS50ZXh0KGkrMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KSgpIiwiJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5tZW51LWxhbmd1YWdlcyAucmVtb3ZlJywgZnVuY3Rpb24oKXtcbiAgICB2YXIgJGxhYmVsID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICB2YXIgJGNoZWNrYm94ID0gJCgnLm1lbnUtbGFuZ3VhZ2VzLm90aGVyIGlucHV0W3ZhbHVlPVwiJyskbGFiZWwuZGF0YSgnbGFuZ3VhZ2UnKSsnXCJdJyk7XG4gICAgJGNoZWNrYm94LnJlbW92ZUF0dHIoJ2NoZWNrZWQnKS5wYXJlbnQoKS5zaG93KCk7XG4gICAgJGxhYmVsLnBhcmVudCgpLnJlbW92ZSgpO1xufSk7XG5cbiQoJy5tZW51LWxhbmd1YWdlcyAuYWRkJykuYmluZCgnY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIHZhciAkcm93ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKTtcbiAgICB2YXIgJG5ld1JvdyA9ICRyb3cuY2xvbmUoKTtcbiAgICAkcm93LmhpZGUoKTtcblxuICAgIHZhciBsYW5ndWFnZSA9ICQoJ2lucHV0JywgJHJvdykuYXR0cignY2hlY2tlZCcsICdjaGVja2VkJykuYXR0cigndmFsdWUnKTtcbiAgICAkKCcucm93LWFjdGlvbicsICRuZXdSb3cpLnJlbW92ZUNsYXNzKCdhZGQnKS5hZGRDbGFzcygncmVtb3ZlJyk7XG4gICAgJCgnLmxhYmVsJywgJG5ld1JvdykuZGF0YSgnbGFuZ3VhZ2UnLCBsYW5ndWFnZSk7XG4gICAgJCgnaW5wdXQnLCAkbmV3Um93KS5yZW1vdmUoKTtcbiAgICAkbmV3Um93LmFwcGVuZFRvKCcubWVudS1sYW5ndWFnZXMuc2VsZWN0ZWQnKTtcbn0pOyJdfQ==
