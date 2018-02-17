(function($){

    function currentMediaQuery(){
        var w = $(document).width();
        return w <= 480 ? 'mobile' : '';
    }

    function simHeight(){
        $('.sim-height-container').each(function(){
            var $elements = $('.sim-height', this);
            var maxHeight = 0;
            var columns = $(this).data(currentMediaQuery()+'-columns');

            $elements.height('auto').each(function(i){
                if($(this).height() > maxHeight){
                    maxHeight = $(this).height();
                }

                if(columns != undefined && (i+1) % columns == 0){
                    $elements.slice( i-columns+1, i+1).height(maxHeight);
                    maxHeight = 0;
                }
            });
            if(maxHeight > 0){
                $elements.height(maxHeight);
            }
        });
    }

    var modalSpeed = 300;

    function modalShow(el){
        $('body').addClass('modal-visible');
        $(el).fadeIn(modalSpeed);
        checkModalHeight();
        $(el).find('.modal-content').css('transform', 'translateY(100px)').animate({transform: "translateY(0)"}, modalSpeed, function(){$(this).parent().addClass('opened')});
    }

    function modalHide(){
        $('body').removeClass('modal-visible');
        $('.modal:visible').fadeOut(modalSpeed).find('.modal-content').animate({transform: "translateY(100px)"}, modalSpeed).parent().removeClass('opened');
    }

    function checkModalHeight(){
        $('.modal-content').each(function(){
            if($(window).height() - $(this).height() - 100 < 0){
                $(this).parent().addClass('full-height');
            } else {
                $(this).parent().removeClass('full-height');
            }
        });
    }
    $(window).load(simHeight);

    $(window).resize(checkModalHeight);

    $(document).ready(function(){

        new Swiper('.products-swiper-container', {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: false,
            spaceBetween: 20,
            grabCursor: true,
            slidesPerView: 2,
        });

        var swiperProducts = new Swiper('.product-full-swiper-container', {
            effect: 'coverflow',
            coverflow: {slideShadows : false},
            spaceBetween: 30,
            breakpoints: {
                9999: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                640: {
                    slidesPerView: 1
                }
            }
        });

        $('.product-modal').on('click', function(){    
            var el = '#modal-products-full';
            var $slide = $('.swiper-slide[data-href="'+$(this).attr('href')+'"]', $(el));

            if($slide.length){
                modalShow(el);
                swiperProducts.update(true);
                swiperProducts.slideTo($slide.index(), 0);
                return false;
            }    
        });

        $('.modal-link').on('click', function(){
            var el = $(this).attr('href');
            if($(el).length > 0){
                modalShow(el);
                return false;
            }
        });

        $('.modal').on('click', function(e){
            if($(e.target).is('.modal, .modal-close')){
                modalHide();
            }
        });

        if($('.footer-menu .active').length){
            $('.footer-bg .circle').eq($('.footer-menu .active').index()).addClass('active');
        }

        $('.spoiler').click(function(){
            var $this = $(this).hide();
            $($(this).attr('href')).fadeIn(300, function(){$this.remove();});
            return false;
        });

        var $menuWrapper = $('header .menu-wrapper');
        var $menuToggleLink = $('.menu-toggle');

        $(window).resize(function(){
            $menuWrapper.height($(window).height());
            simHeight();
        }).resize();

        $menuToggleLink.click(function(){
            $menuToggleLink.toggleClass('open');
            $menuWrapper.fadeToggle(200);
            return false;
        });

        $('a', $menuWrapper).click(function(){
            $('span', $menuToggleLink).text($(this).text());
            $menuWrapper.hide();
            $menuToggleLink.removeClass('open');
        });

        $(document).click(function(e){
            if(!$(e.target).closest($menuWrapper).length){
                $menuWrapper.fadeOut(200);
                $menuToggleLink.removeClass('open');
            }
        });

        $('.open-modal').on('click', function(){
            var modal = $('#modal-products-full')
        });
        

    });
})(jQuery)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpe1xuXG4gICAgZnVuY3Rpb24gY3VycmVudE1lZGlhUXVlcnkoKXtcbiAgICAgICAgdmFyIHcgPSAkKGRvY3VtZW50KS53aWR0aCgpO1xuICAgICAgICByZXR1cm4gdyA8PSA0ODAgPyAnbW9iaWxlJyA6ICcnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNpbUhlaWdodCgpe1xuICAgICAgICAkKCcuc2ltLWhlaWdodC1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgJGVsZW1lbnRzID0gJCgnLnNpbS1oZWlnaHQnLCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSAkKHRoaXMpLmRhdGEoY3VycmVudE1lZGlhUXVlcnkoKSsnLWNvbHVtbnMnKTtcblxuICAgICAgICAgICAgJGVsZW1lbnRzLmhlaWdodCgnYXV0bycpLmVhY2goZnVuY3Rpb24oaSl7XG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5oZWlnaHQoKSA+IG1heEhlaWdodCl7XG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoY29sdW1ucyAhPSB1bmRlZmluZWQgJiYgKGkrMSkgJSBjb2x1bW5zID09IDApe1xuICAgICAgICAgICAgICAgICAgICAkZWxlbWVudHMuc2xpY2UoIGktY29sdW1ucysxLCBpKzEpLmhlaWdodChtYXhIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYobWF4SGVpZ2h0ID4gMCl7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnRzLmhlaWdodChtYXhIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgbW9kYWxTcGVlZCA9IDMwMDtcblxuICAgIGZ1bmN0aW9uIG1vZGFsU2hvdyhlbCl7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbW9kYWwtdmlzaWJsZScpO1xuICAgICAgICAkKGVsKS5mYWRlSW4obW9kYWxTcGVlZCk7XG4gICAgICAgIGNoZWNrTW9kYWxIZWlnaHQoKTtcbiAgICAgICAgJChlbCkuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVZKDEwMHB4KScpLmFuaW1hdGUoe3RyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDApXCJ9LCBtb2RhbFNwZWVkLCBmdW5jdGlvbigpeyQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ29wZW5lZCcpfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW9kYWxIaWRlKCl7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbW9kYWwtdmlzaWJsZScpO1xuICAgICAgICAkKCcubW9kYWw6dmlzaWJsZScpLmZhZGVPdXQobW9kYWxTcGVlZCkuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hbmltYXRlKHt0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgxMDBweClcIn0sIG1vZGFsU3BlZWQpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja01vZGFsSGVpZ2h0KCl7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLmhlaWdodCgpIC0gJCh0aGlzKS5oZWlnaHQoKSAtIDEwMCA8IDApe1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Z1bGwtaGVpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAkKHdpbmRvdykubG9hZChzaW1IZWlnaHQpO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShjaGVja01vZGFsSGVpZ2h0KTtcblxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgbmV3IFN3aXBlcignLnByb2R1Y3RzLXN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgICAgICBzY3JvbGxiYXI6ICcuc3dpcGVyLXNjcm9sbGJhcicsXG4gICAgICAgICAgICBzY3JvbGxiYXJIaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICBncmFiQ3Vyc29yOiB0cnVlLFxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHN3aXBlclByb2R1Y3RzID0gbmV3IFN3aXBlcignLnByb2R1Y3QtZnVsbC1zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICAgICAgZWZmZWN0OiAnY292ZXJmbG93JyxcbiAgICAgICAgICAgIGNvdmVyZmxvdzoge3NsaWRlU2hhZG93cyA6IGZhbHNlfSxcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDk5OTk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcucHJvZHVjdC1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7ICAgIFxuICAgICAgICAgICAgdmFyIGVsID0gJyNtb2RhbC1wcm9kdWN0cy1mdWxsJztcbiAgICAgICAgICAgIHZhciAkc2xpZGUgPSAkKCcuc3dpcGVyLXNsaWRlW2RhdGEtaHJlZj1cIicrJCh0aGlzKS5hdHRyKCdocmVmJykrJ1wiXScsICQoZWwpKTtcblxuICAgICAgICAgICAgaWYoJHNsaWRlLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgbW9kYWxTaG93KGVsKTtcbiAgICAgICAgICAgICAgICBzd2lwZXJQcm9kdWN0cy51cGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgc3dpcGVyUHJvZHVjdHMuc2xpZGVUbygkc2xpZGUuaW5kZXgoKSwgMCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLm1vZGFsLWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZigkKGVsKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBtb2RhbFNob3coZWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLm1vZGFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZigkKGUudGFyZ2V0KS5pcygnLm1vZGFsLCAubW9kYWwtY2xvc2UnKSl7XG4gICAgICAgICAgICAgICAgbW9kYWxIaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCQoJy5mb290ZXItbWVudSAuYWN0aXZlJykubGVuZ3RoKXtcbiAgICAgICAgICAgICQoJy5mb290ZXItYmcgLmNpcmNsZScpLmVxKCQoJy5mb290ZXItbWVudSAuYWN0aXZlJykuaW5kZXgoKSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLnNwb2lsZXInKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCQodGhpcykuYXR0cignaHJlZicpKS5mYWRlSW4oMzAwLCBmdW5jdGlvbigpeyR0aGlzLnJlbW92ZSgpO30pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgJG1lbnVXcmFwcGVyID0gJCgnaGVhZGVyIC5tZW51LXdyYXBwZXInKTtcbiAgICAgICAgdmFyICRtZW51VG9nZ2xlTGluayA9ICQoJy5tZW51LXRvZ2dsZScpO1xuXG4gICAgICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRtZW51V3JhcHBlci5oZWlnaHQoJCh3aW5kb3cpLmhlaWdodCgpKTtcbiAgICAgICAgICAgIHNpbUhlaWdodCgpO1xuICAgICAgICB9KS5yZXNpemUoKTtcblxuICAgICAgICAkbWVudVRvZ2dsZUxpbmsuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICRtZW51VG9nZ2xlTGluay50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgJG1lbnVXcmFwcGVyLmZhZGVUb2dnbGUoMjAwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnYScsICRtZW51V3JhcHBlcikuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJ3NwYW4nLCAkbWVudVRvZ2dsZUxpbmspLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xuICAgICAgICAgICAgJG1lbnVXcmFwcGVyLmhpZGUoKTtcbiAgICAgICAgICAgICRtZW51VG9nZ2xlTGluay5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlmKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCRtZW51V3JhcHBlcikubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAkbWVudVdyYXBwZXIuZmFkZU91dCgyMDApO1xuICAgICAgICAgICAgICAgICRtZW51VG9nZ2xlTGluay5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcub3Blbi1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbW9kYWwgPSAkKCcjbW9kYWwtcHJvZHVjdHMtZnVsbCcpXG4gICAgICAgIH0pO1xuICAgICAgICBcblxuICAgIH0pO1xufSkoalF1ZXJ5KSJdLCJmaWxlIjoiYWxsLmpzIn0=
