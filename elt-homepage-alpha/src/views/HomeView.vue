<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="content" data-namespace="home">
    <section id="intro">
      <div class="container" data-scroll-container>
        <div data-scroll data-scroll-speed="1">
          <h2 id="intro-title">
            <p>
              <span id="graphic">
                ː graphic&nbsp;<img class="tooltip1" src="/assets/img/elt-bg-bk.jpg"
              /></span>

              <span id="editorial"
                >¶ editorial&nbsp;<img class="tooltip2" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="application"
                >≈ app&nbsp;<img class="tooltip3" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="web"
                >° web&nbsp;<img class="tooltip4" src="/assets/img/elt-bg-bk.jpg"
              /></span>

              <span id="newmedia">
                newmedia&nbsp;<img class="tooltip5" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="music"
                >ˇ music&nbsp;<img class="tooltip6" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="album"
                >— album&nbsp;<img class="tooltip7" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="poster">
                ℗ poster&nbsp;<img class="tooltip8" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="movie"
                >+ movie&nbsp;<img class="tooltip9" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="branding"
                >˘ branding&nbsp;<img class="tooltip10" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="brochure"
                >× brochure&nbsp;<img class="tooltip11" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="illustration"
                >illustration&nbsp;<img class="tooltip12" src="/assets/img/elt-bg-bk.jpg"
              /></span>
              <span id="art"
                >* art ˝&nbsp;<img class="tooltip13" src="/assets/img/elt-bg-bk.jpg"
              /></span>

              <span id="everylittlething"
                >@every.little.thing <img class="line" src="/assets/img/logo-line.svg" /><img
                  class="tooltip14"
                  src="/assets/img/elt-bg.jpg"
              /></span>
            </p>
          </h2>
        </div>

        <div data-scroll data-scroll-speed="1">
          <div class="main-image-thumb">
            <div class="media-wrapper">
              <div class="plane main-image-plane main-main-image-plane main-gradient">
                <img
                  class="lazy"
                  src="/assets/img/elt-bg-bk.jpg"
                  width="1600"
                  height="900"
                  alt="everylittlething"
                  crossorigin=""
                />
              </div>
            </div>
          </div>
        </div>
        <div data-scroll data-scroll-speed="1">
          <div id="intro-desc">
            <div class="text-plane">
              Every.little.thing we does. And you know the things we does. graphic design lab.
              hannam-dong office&sup1; &#47; hangang-ro office&sup2; &gt; since 2012
            </div>
          </div>
        </div>
      </div>

      <div id="nav-desc" data-scroll data-scroll-speed="3">
        <div class="nav-box">
          <RouterLink to="/about" class="text-plane text-plane-is-link">More About Us </RouterLink
          ><span>→</span>
        </div>
        <div class="nav-box">
          <RouterLink to="/project/list" class="text-plane text-plane-is-link"
            >Explore the project </RouterLink
          ><span>→</span>
        </div>
      </div>
    </section>

    <section id="notice">
      <div id="notice-head">
        <RouterLink to="/notice/" class="out main-title-text text-plane text-plane-is-link"
          >Notice</RouterLink
        >
      </div>
      <div id="notice-desc">
        <RouterLink
          v-for="notice in notices"
          :to="`/notice/${notice._id}`"
          class="out main-title-text text-plane text-plane-is-link"
          :key="notice.id"
          >{{ notice.publishedDate }}<span>{{ notice.title }}</span></RouterLink
        >
      </div>
    </section>
  </div>
</template>

<script>

const scrollFcn = () => {

var scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getSpeed: true,
  getDirection: true
})

gsap.registerPlugin(ScrollTrigger)

scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy('.container', {
  scrollTop(value) {
    return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
})

ScrollTrigger.create({
  trigger: '.media-wrapper',
  scroller: '.container',
  start: 'top+=30% 50%',
  end: 'bottom-=40% 50%',
  animation: gsap.to('.media-wrapper', { backgroundSize: '120%' }),
  scrub: 2
  // markers: true
})

ScrollTrigger.addEventListener('refresh', () => scroller.update())
  ScrollTrigger.refresh()

console.log('scroll start!')
}

const effect = () => {
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

  // skew example

  gsap.fromTo(
    '#intro-title p, .main-image-thumb, #intro-desc',
    {
      y: 100,
      opacity: 0
    },
    {
      delay: 0.9,
      duration: 1.125,
      y: 0,
      opacity: 1,
      ease: 'power2.easeOut',
      stagger: {
        from: 'start',
        amount: 0.25
      }
    }
  )

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter('#intro-title', 'skewY', 'deg'), // fast
    clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -500)
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: 'power3',
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew)
        })
      }
    }
  })

  gsap.set('#intro-title', {
    transformOrigin: 'center center',
    force3D: true
  })

  //intro-title-mouseover-toggle

  // const div1 = document.querySelector('#graphic')
  // const hover1 = document.querySelector('.tooltip1')
  // div1.addEventListener('mouseenter', () => (hover1.style.opacity = 1))
  // div1.addEventListener('mouseleave', () => (hover1.style.opacity = 0))

  // const div2 = document.querySelector('#editorial')
  // const hover2 = document.querySelector('.tooltip2')
  // div2.addEventListener('mouseenter', () => (hover2.style.opacity = 1))
  // div2.addEventListener('mouseleave', () => (hover2.style.opacity = 0))

  // const div3 = document.querySelector('#application')
  // const hover3 = document.querySelector('.tooltip3')
  // div3.addEventListener('mouseenter', () => (hover3.style.opacity = 1))
  // div3.addEventListener('mouseleave', () => (hover3.style.opacity = 0))

  // const div4 = document.querySelector('#web')
  // const hover4 = document.querySelector('.tooltip4')
  // div4.addEventListener('mouseenter', () => (hover4.style.opacity = 1))
  // div4.addEventListener('mouseleave', () => (hover4.style.opacity = 0))

  // const div5 = document.querySelector('#newmedia')
  // const hover5 = document.querySelector('.tooltip5')
  // div5.addEventListener('mouseenter', () => (hover5.style.opacity = 1))
  // div5.addEventListener('mouseleave', () => (hover5.style.opacity = 0))

  // const div6 = document.querySelector('#music')
  // const hover6 = document.querySelector('.tooltip6')
  // div6.addEventListener('mouseenter', () => (hover6.style.opacity = 1))
  // div6.addEventListener('mouseleave', () => (hover6.style.opacity = 0))

  // const div7 = document.querySelector('#album')
  // const hover7 = document.querySelector('.tooltip7')
  // div7.addEventListener('mouseenter', () => (hover7.style.opacity = 1))
  // div7.addEventListener('mouseleave', () => (hover7.style.opacity = 0))

  // const div8 = document.querySelector('#poster')
  // const hover8 = document.querySelector('.tooltip8')
  // div8.addEventListener('mouseenter', () => (hover8.style.opacity = 1))
  // div8.addEventListener('mouseleave', () => (hover8.style.opacity = 0))

  // const div9 = document.querySelector('#movie')
  // const hover9 = document.querySelector('.tooltip9')
  // div9.addEventListener('mouseenter', () => (hover9.style.opacity = 1))
  // div9.addEventListener('mouseleave', () => (hover9.style.opacity = 0))

  // const div10 = document.querySelector('#branding')
  // const hover10 = document.querySelector('.tooltip10')
  // div10.addEventListener('mouseenter', () => (hover10.style.opacity = 1))
  // div10.addEventListener('mouseleave', () => (hover10.style.opacity = 0))

  // const div11 = document.querySelector('#brochure')
  // const hover11 = document.querySelector('.tooltip11')
  // div11.addEventListener('mouseenter', () => (hover11.style.opacity = 1))
  // div11.addEventListener('mouseleave', () => (hover11.style.opacity = 0))

  // const div12 = document.querySelector('#illustration')
  // const hover12 = document.querySelector('.tooltip12')
  // div12.addEventListener('mouseenter', () => (hover12.style.opacity = 1))
  // div12.addEventListener('mouseleave', () => (hover12.style.opacity = 0))

  // const div13 = document.querySelector('#art')
  // const hover13 = document.querySelector('.tooltip13')
  // div13.addEventListener('mouseenter', () => (hover13.style.opacity = 1))
  // div13.addEventListener('mouseleave', () => (hover13.style.opacity = 0))

  // const div14 = document.querySelector('#everylittlething')
  // const hover14 = document.querySelector('.tooltip14')
  // div14.addEventListener('mouseenter', () => (hover14.style.opacity = 1))
  // div14.addEventListener('mouseleave', () => (hover14.style.opacity = 0))
  scrollFcn()
}

$(document).ready(effect)
export default {
  name: 'HomeView',
  data: () => ({
    notices: []
  }),
  inject: ['$axios'],
  methods: {
    async fetchArticleList(query) {
      const qs = (obj) => {
        const str = []
        for (const p in obj) {
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(JSON.stringify(obj[p])))
          }
        }
        return str.join('&')
      }
      const qq = qs(query)

      return this.$axios.get('/contents?' + qq).then(({ data }) => data)
    },
    async reload() {
      this.fetchArticleList({
        filter: { category: 'notice' },
        sort: { publishedDate: -1 },
        limit: 2
      }).then((l) => {
        this.notices = l
      })
    }
  },
  mounted() {
    this.reload()
    effect()
  }
}
</script>
