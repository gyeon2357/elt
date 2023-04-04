<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="content" data-namespace="home">
    <section id="intro">
      <div class="container" data-scroll-container>
        <div data-scroll data-scroll-speed="1">
          <h2 id="intro-title">
            <p class="move-box-1">
              <span class="title-effect-1"> ː graphic ¶ editorial ≈ app ° web</span>
            </p>
            <p class="move-box-2"><span class="title-effect-2"> newmedia ˇ music — album </span></p>
            <p><span> ℗ poster + movie </span></p>
            <p><span>˘ branding × brochure </span></p>
            <p><span>illustration * art ˝</span></p>
            <p>
              <span>@every‧little‧thing <img src="/assets/img/logo-line.svg" /></span>
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
              Every‧little‧thing we does. And you know the things we does. graphic design lab.
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
    '#intro-title p',
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
    skewSetter = gsap.quickSetter('#intro-title span', 'skewY', 'deg'), // fast
    clamp = gsap.utils.clamp(-20, 20) // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -700)
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

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set('#intro-title span', {
    transformOrigin: 'center center',
    force3D: true
  })
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
