<template>
  <header id="header">
    <h1 id="header-left"
        class="header-col">
      <RouterLink to="/"
                  id="home-link"
                  class="header-plane main-title-text"
                  title="Back to home" />
    </h1>

    <div id="header-center"
         class="header-col">
      <div class="header-menu">
        <span>Project</span>
        <span>&lpar;</span>
        <RouterLink to="/project/list/"
                    id="list-link"
                    class="header-plane header-link main-title-text">List</RouterLink>
        <span>&#124;</span>
        <RouterLink to="/project/gallery/"
                    id="gallery-link"
                    class="header-plane header-link main-title-text">Gallery</RouterLink>
        <span>&rpar;</span>
        <RouterLink to="/weeklyzine/"
                    id="weeklyzine-link"
                    class="header-plane header-link main-title-text">Weeklyzine</RouterLink>
      </div>
    </div>

    <div id="header-right"
         class="header-col">
      <RouterLink to="/notice/"
                  id="about-link"
                  class="header-plane header-link main-title-text">Notice</RouterLink>
      <span>|</span>
      <RouterLink to="/about/"
                  id="about-link"
                  class="header-plane header-link main-title-text">About</RouterLink>
    </div>

    <div class="mobile-menu">
      <input id="menu__toggle"
             type="checkbox" />
      <label class="menu__btn"
             for="menu__toggle">
        <span></span>
      </label>

      <ol class="menu__box">
        <div class="header-col header-center">
          <span>Project:</span>

          <div class="mobile__project">
            <RouterLink to="/project/list/"
                        id="list-link"
                        class="header-plane header-link main-title-text"><img class="mobile__icon__1"
                   src="/assets/img/icon-list.svg" />List&nbsp;view&nbsp;</RouterLink>
          </div>
          <div class="mobile__project">
            <RouterLink to="/project/gallery/"
                        id="gallery-link"
                        class="header-plane header-link main-title-text"><img class="mobile__icon__2"
                   src="/assets/img/icon-gallery.svg" />Gallery&nbsp;view&nbsp;</RouterLink>
          </div>
        </div>

        <div class="header-col header-center">
          <RouterLink to="/weeklyzine/"
                      id="weeklyzine-link"
                      class="header-plane header-link main-title-text">Weeklyzine</RouterLink>
        </div>

        <div id=""
             class="header-col header-right">
          <RouterLink to="/notice/"
                      id="about-link"
                      class="header-plane header-link main-title-text">Notice</RouterLink>

          <RouterLink to="/about/"
                      id="about-link"
                      class="header-plane header-link main-title-text">About</RouterLink>
        </div>
      </ol>
    </div>

    <button id="scroll-to-top"
            class="main-title-text text-plane">
      <!-- <img id="scroll" fetchpriority="high" src="/assets/img/backtotop.svg" /> -->
      <p id="scroll">top</p>
    </button>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header-menu {
  max-width: 980px;
  margin: 0 auto;
}
</style>
