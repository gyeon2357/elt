<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- <span class="flex-center">
    <canvas id="springydemo"></canvas>
  </span> -->
  <div id="content" data-namespace="home">
    <section id="intro">
      <div>
        <h2 id="intro-title">
          <p class="js-cursor-hover">
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

      <div>
        <div class="main-image-thumb">
          <div class="media-wrapper">
            <div class="plane main-image-plane main-main-image-plane main-gradient">
              <img
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
      <div>
        <div id="intro-desc">
          <div class="text-plane">
            Every.little.thing we does. And you know the things we does. graphic design lab.
            hannam-dong office&sup1; &#47; hangang-ro office&sup2; &gt; since 2012
          </div>
        </div>
      </div>
      <div>
        <div id="nav-desc">
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
  // intro-animation-springy
  // http://getspringy.com

  // var graph = new Springy.Graph()

  // var everylittlething = graph.newNode({
  //   image: { src: '/assets/img/logo.svg', width: 32, height: 32 },
  //   ondoubleclick: function () {
  //     console.log('Hello!')
  //   }
  // })
  // var graphic = graph.newNode({ label: 'ː Graphic' })

  // var editorial = graph.newNode({ label: '¶ Editorial' })
  // var app = graph.newNode({ label: '* App' })
  // var web = graph.newNode({ label: '/ Web' })

  // var album = graph.newNode({ label: 'ˇ Music' })
  // var poster = graph.newNode({ label: '℗ Poster' })
  // var movie = graph.newNode({ label: '+ Movie' })
  // var branding = graph.newNode({ label: '× Branding' })
  // var packages = graph.newNode({ label: '≈ Package' })
  // var brochure = graph.newNode({ label: '˛ Brochure' })
  // var magazine = graph.newNode({ label: 'º Magazine' })
  // var calendar = graph.newNode({ label: '~ Calendar' })
  // var book = graph.newNode({ label: 'Book' })
  // var ci = graph.newNode({ label: 'CI' })
  // var bi = graph.newNode({ label: 'BI' })
  // var illustration = graph.newNode({ label: 'Illustration' })
  // var art = graph.newNode({ label: 'Art' })
  // var character = graph.newNode({ label: 'Character' })

  // graph.newEdge(everylittlething, graphic, { color: '#515151', label: 'Foo bar' })
  // graph.newEdge(graphic, editorial, { color: '#515151' })
  // graph.newEdge(art, everylittlething, { color: '#515151' })

  // graph.newEdge(magazine, editorial, { color: '#515151' })
  // graph.newEdge(editorial, brochure, { color: '#515151' })
  // graph.newEdge(editorial, book, { color: '#515151' })
  // graph.newEdge(editorial, calendar, { color: '#515151' })

  // graph.newEdge(everylittlething, branding, { color: '#515151' })
  // graph.newEdge(branding, album, { color: '#515151' })
  // graph.newEdge(branding, packages, { color: '#515151' })

  // graph.newEdge(graphic, poster, { color: '#515151' })
  // graph.newEdge(graphic, web, { color: '#515151' })

  // graph.newEdge(graphic, illustration, { color: '#515151' })
  // graph.newEdge(character, illustration, { color: '#515151' })

  // graph.newEdge(web, app, { color: '#515151' })
  // graph.newEdge(movie, branding, { color: '#515151' })

  // graph.newEdge(bi, ci, { color: '#515151' })
  // graph.newEdge(branding, bi, { color: '#515151' })

  // $(function () {
  //   var springy = (window.springy = $('#springydemo').springy({
  //     graph: graph,
  //     nodeSelected: function (node) {
  //       console.log('Node selected: ' + JSON.stringify(node.data))
  //     }
  //   }))
  // })

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
    // line.style.mixBlendMode = 'difference';
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

  // skew effect
  gsap.fromTo(
    '#intro-title, #intro-desc',
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
      let skew = clamp(self.getVelocity() / -1000)
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

  // main-image animation
  gsap.utils.toArray('.main-image-thumb').forEach((el, index) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'center bottom',
        toggleActions: 'play none none reverse',
        markers: false
      }
    })

    tl.set(el, { transformOrigin: 'center center' }).fromTo(
      el,
      { opacity: 0, scale: 0.85, y: '+=25' },
      { opacity: 1, scale: 1, y: 0, duration: 0.75, immediateRender: false }
    )
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
