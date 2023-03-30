<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="canvas" id="canvas-wrapper" aria-label="neumorphism"></div>
  <div id="content" data-namespace="home">
    <section id="intro">
      <h2 id="intro-title">
        <p>
          ː graphic ¶ editorial ◌ app ° web newmedia ― album ˝ music ℗ poster + movie × brochure ≈
          branding ˘ illustration * art @every.little.thing
        </p>
      </h2>

      <div data-scroll-container>
        <div data-scroll-section data-scroll-speed="4">
          <div class="main-image-thumb">
            <div class="media-wrapper">
              <div
                class="plane main-image-plane main-main-image-plane main-gradient not-scroll-trigger"
              >
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
        <div data-scroll-section data-scroll-speed="3">
          <div id="intro-desc">
            <div class="text-plane not-scroll-trigger">
              Every.little.thing we does. And you know the things we does. graphic design lab.
              hannam-dong office&sup1; &#47; hangang-ro office&sup2; &gt; since 2012
            </div>
          </div>
        </div>
      </div>

      <div id="nav-desc">
        <div class="nav-box">
          <RouterLink to="/about" class="text-plane text-plane-is-link not-scroll-trigger"
            >More About Us </RouterLink
          ><span>→</span>
        </div>
        <div class="nav-box">
          <RouterLink to="/project/gallery" class="text-plane text-plane-is-link not-scroll-trigger"
            >Explore the project </RouterLink
          ><span>→</span>
        </div>
      </div>
    </section>
    <section id="notice">
      <div id="notice-head">
        <RouterLink
          to="/notice/"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >Notice</RouterLink
        >
      </div>
      <div id="notice-desc">
        <RouterLink
          to="/notice"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >2023. 02. 28.<span>웹사이트 리뉴얼</span></RouterLink
        >
        <RouterLink
          to="/notice"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >2023. 02. 28.<span>웹사이트 리뉴얼</span></RouterLink
        >
      </div>
    </section>

    <!-- <div class="cookie-banner js-cookie-banner show"
style="background-color: rgb(237, 238, 238); color: rgb(33, 33, 33);">
<p>현재 거주 지역에 따라 달라지는 사본을 여기에 삽입하십시오.
<RouterLink class="consent-link" href="#">수락</RouterLink>
<RouterLink class="decline-link" href="#">거부</RouterLink>
</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6458 -2604 16 16" class="close-btn">
<g id="Group_1479" data-name="Group 1479" transform="translate(-8281.367 -3556.368)">
<rect id="Rectangle_6401" data-name="Rectangle 6401" class="stroke" width="1.968" height="20.66"
transform="translate(1823.367 953.759) rotate(-45)" style="fill: rgb(33, 33, 33);"></rect>
<rect id="Rectangle_6402" data-name="Rectangle 6402" class="stroke" width="1.968" height="20.66"
transform="translate(1824.758 968.368) rotate(-135)" style="fill: rgb(33, 33, 33);"></rect>
</g>
</svg>
</div> -->
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
      let skew = clamp(self.getVelocity() / -400)
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
