// mouse effect

let svgns = 'http://www.w3.org/2000/svg'
let root = document.querySelector('svg')
let ease = 0.7

let pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

window.addEventListener('mousemove', (event) => {
  pointer.x = event.clientX
  pointer.y = event.clientY
})

let leader = (prop) => {
  return prop === 'x' ? pointer.x : pointer.y
}

let total = 50
for (let i = 0; i < total; i++) {
  leader = createLine(leader, i)
}

function createLine(leader, i) {
  let line = document.createElementNS(svgns, 'line')

  root.appendChild(line)

  gsap.set(line, { x: -1500, y: -750 })

  let pos = gsap.getProperty(line)

  gsap.to(line, {
    duration: 10000,
    x: '+=150',
    y: '+=10',
    repeat: -1,
    ease: 'expo.inOut',
    modifiers: {
      x: () => {
        let posX = pos('x')
        let leaderX = leader('x')
        let x = posX + (leaderX - posX) * ease
        line.setAttribute('x2', leaderX - x)
        return x
      },
      y: () => {
        let posY = pos('y')
        let leaderY = leader('y')
        let y = posY + (leaderY - posY) * ease
        line.setAttribute('y2', leaderY - y)
        return y
      }
    }
  })

  return pos
}

$(function () {
  //hover

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
      $('.header-col a').css('filter', 'none', '-webkit-filter', 'none', '-moz-filter', 'none')
      $(this)
        .not('h1 a')
        .css(
          'filter',
          'invert(64%) sepia(82%) saturate(2019%) hue-rotate(60deg) brightness(119%) contrast(122%)',
          '-webkit-filter',
          'invert(64%) sepia(82%) saturate(2019%) hue-rotate(60deg) brightness(119%) contrast(122%)',
          '-moz-filter',
          'invert(64%) sepia(82%) saturate(2019%) hue-rotate(60deg) brightness(119%) contrast(122%)'
        )
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
