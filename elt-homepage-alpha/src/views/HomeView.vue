<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
// import '../../../assets/js/script.js'
</script>

<template>
  <div id="content" data-namespace="home">
    <section id="intro">
      <h2 id="intro-title">
        <span class="main-title-text text-plane scroll-trigger"
          >&#x2D0; graphic &para; editorial ◌ app &#176; web newmedia ―album ˝ music ℗ poster &#43;
          movie &times; brochure ≈ branding ˘ illustration &#42; art @every.little.thing</span
        >
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
