<template>
  <header id="header">
    <h1 id="header-left" class="header-col">
      <RouterLink
        to="/"
        id="home-link"
        class="header-plane main-title-text not-scroll-trigger"
        title="Back to home"
      />
    </h1>

    <div id="header-center" class="header-col">
      <span>Project</span>
      <span>&lpar;</span>
      <RouterLink
        to="/project/list/"
        id="list-link"
        class="header-plane header-link main-title-text not-scroll-trigger"
        >List</RouterLink
      >
      <span>|</span>
      <RouterLink
        to="/project/gallery/"
        id="gallery-link"
        class="header-plane header-link main-title-text not-scroll-trigger"
        >Gallery</RouterLink
      >
      <span>&rpar;</span>
    </div>

    <div id="header-center" class="header-col">
      <RouterLink
        to="/weeklyzine/"
        id="weeklyzine-link"
        class="header-plane header-link main-title-text not-scroll-trigger"
        >Weeklyzine</RouterLink
      >
    </div>

    <div id="header-right" class="header-col">
      <RouterLink
        to="/notice/"
        id="about-link"
        class="header-plane header-link main-title-text not-scroll-trigger"
        >Notice</RouterLink
      >
      <span>|</span>
      <RouterLink
        to="/about/"
        id="about-link"
        class="header-plane header-link main-title-text not-scroll-trigger"
        >About</RouterLink
      >
    </div>

    <div class="mobile-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ol class="menu__box">
        <div id="header-center" class="header-col">
          <span>Project:</span>

          <div class="mobile__project">
            <RouterLink
              to="/project/list/"
              id="list-link"
              class="header-plane header-link main-title-text not-scroll-trigger"
              >List&nbsp;view&nbsp;</RouterLink
            >
            <p class="arrow">←</p>
          </div>
          <div class="mobile__project">
            <RouterLink
              to="/project/gallery/"
              id="gallery-link"
              class="header-plane header-link main-title-text not-scroll-trigger"
              >Gallery&nbsp;view&nbsp;</RouterLink
            >
            <p class="arrow">←</p>
          </div>
        </div>

        <div id="header-center" class="header-col">
          <RouterLink
            to="/weeklyzine/"
            id="weeklyzine-link"
            class="header-plane header-link main-title-text not-scroll-trigger"
            >Weeklyzine</RouterLink
          >
        </div>

        <div id="header-right" class="header-col">
          <RouterLink
            to="/notice/"
            id="about-link"
            class="header-plane header-link main-title-text not-scroll-trigger"
            >Notice</RouterLink
          >

          <RouterLink
            to="/about/"
            id="about-link"
            class="header-plane header-link main-title-text not-scroll-trigger"
            >About</RouterLink
          >
        </div>
      </ol>
    </div>

    <button id="scroll-to-top" class="main-title-text text-plane not-scroll-trigger">
      <img src="/assets/img/backtotop.svg" />
    </button>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
watch(useRoute(), () => {
  document.querySelector('#menu__toggle').checked = false
  scrollToTop()
})
</script>

<style scoped></style>
