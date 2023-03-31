<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div id="content" data-namespace="home">
    <section id="intro">
      <div class="container" data-scroll-container>
        <h2 id="intro-title">
          <p>
            ː graphic ¶ editorial ◌ app ° web newmedia ― album ˝ music ℗ poster + movie × brochure ≈
            branding ˘ illustration * art @every‧little‧thing
          </p>
        </h2>

        <div data-scroll data-scroll-speed="1">
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
        <div data-scroll data-scroll-speed="4">
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
        <RouterLink to="/notice" class="out main-title-text text-plane text-plane-is-link"
          >2023. 02. 28.<span>웹사이트 리뉴얼</span></RouterLink
        >
        <RouterLink to="/notice" class="out main-title-text text-plane text-plane-is-link"
          >2023. 02. 28.<span>웹사이트 리뉴얼</span></RouterLink
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

  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter('#intro-title p', 'skewY', 'deg'), // fast
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
  gsap.set('#intro-title p', {
    transformOrigin: 'center center',
    force3D: true
  })
}
$(document).ready(effect)
export default {
  name: 'HomeView',
  mounted() {
    effect()
  }
}
</script>
