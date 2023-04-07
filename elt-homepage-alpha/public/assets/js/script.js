  $(function () {
        // loader
        setTimeout(function () {
          $('#header').animate({ opacity: 1 })
        }, 100)
        $('#loader').fadeOut(700)

        //preload

        const preloadimages = ['/assets/img/full-logo-letter.svg']

        const preload = (preloadimages) => {
          preloadimages.forEach((image) => {
            const img = new Image()
            img.src = image
          })
        }

        preload(preloadimages)

        // header scrollTop
        $(function () {
          var lastScrollTop = 0,
            delta = 15
          $(window).scroll(function (event) {
            var st = $(this).scrollTop()

            if (Math.abs(lastScrollTop - st) <= delta) return
            if (st > lastScrollTop && lastScrollTop > 0) {
              $('#header').css('top', '-4rem')
            } else {
              $('#header').css('top', '0')
            }
            lastScrollTop = st
          })
        })
      })

      //header link-color
      $(function () {
        $('.header-col')
          .find('a')
          .click(function () {
            $('.header-col a').css('opacity', '1')
            $(this).not('h1 a').css('opacity', '0.5')
          })
      })

      //scroll-to-top
      $(function () {
        $('#scroll-to-top').click(function () {
          $('html, body').animate({ scrollTop: 0 }, 'slow')
          return false
        })

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
          $('#scroll-to-top').css({ display: 'none' })
        }

        window.onscroll = function () {
          scrollFunction()
          switchFunction()
        }

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('#scroll-to-top').css('display', 'block')
          } else {
            $('#scroll-to-top').css('display', 'none')
          }
        }

        function switchFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.switch').css('display', 'block')
          } else {
            $('.switch').css('display', 'none')
          }
        }
      })

      // mobile-menu toggle, scroll-toggle
      $(function () {
        $('body')
          .find('a')
          .click(function () {
            $("input:checkbox[id='menu__toggle']").prop('checked', false)
          })

        $("input:checkbox[id='menu__toggle']").on('change', function () {
          if ($(this).is(':checked')) {
            $('body').css('overflow', 'hidden')
            $('#scroll-to-top').css('display', 'none')
            $('#header').css('top', '0')
          } else {
            $('body').css('overflow', 'scroll')
            $('#scroll-to-top').css('display', 'block')
            $('#header').css('top', '-4rem')
          }
        })

        $('body')
          .find('a')
          .click(function () {
            $('body').css('overflow', 'scroll')
          })
      })

      // lazy-loading

      // document.addEventListener('DOMContentLoaded', function () {
      //   var lazyloadImages

      //   if ('IntersectionObserver' in window) {
      //     lazyloadImages = document.querySelectorAll('.lazy')
      //     var imageObserver = new IntersectionObserver(function (entries, observer) {
      //       entries.forEach(function (entry) {
      //         if (entry.isIntersecting) {
      //           var image = entry.target
      //           image.classList.add('lazy')

      //           setTimeout(function () {
      //             image.classList.remove('lazy')
      //           }, 1)
      //           imageObserver.unobserve(image)
      //         }
      //       })
      //     })

      //     lazyloadImages.forEach(function (image) {
      //       imageObserver.observe(image)
      //     })
      //   } else {
      //     var lazyloadThrottleTimeout
      //     lazyloadImages = document.querySelectorAll('.lazy')

      //     function lazyload() {
      //       if (lazyloadThrottleTimeout) {
      //         clearTimeout(lazyloadThrottleTimeout)
      //       }

      //       lazyloadThrottleTimeout = setTimeout(function () {
      //         var scrollTop = window.pageYOffset
      //         lazyloadImages.forEach(function (img) {
      //           if (img.offsetTop < window.innerHeight + scrollTop) {
      //             img.src = img.dataset.src
      //             img.classList.remove('lazy')
      //           }
      //         })
      //         if (lazyloadImages.length == 0) {
      //           document.removeEventListener('scroll', lazyload)
      //           window.removeEventListener('resize', lazyload)
      //           window.removeEventListener('orientationChange', lazyload)
      //         }
      //       }, 20)
      //     }

      //     document.addEventListener('scroll', lazyload)
      //     window.addEventListener('resize', lazyload)
      //     window.addEventListener('orientationChange', lazyload)
      //   }
      // })