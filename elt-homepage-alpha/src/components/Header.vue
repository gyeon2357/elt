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
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* header */

#header-center,
#header-right {
  display: block;
}

.mobile-menu {
  display: none;
}

#header {
  position: fixed;
  z-index: 4;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.333%, auto));

  justify-content: space-between;
  align-items: center;

  font-family: var(--display-font);
  font-weight: 500;

  padding: var(--gutter-size) 0;
  left: calc(var(--gutter-size) + 0.25rem);
  right: calc(var(--gutter-size) + 0.25rem);

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#home-link {
  content: url(/assets/img/logo.svg);
  width: 2.75rem;
}

#header a,
#header span {
  display: inline-block;
  padding: 0.25em 0.5em;
  margin: 0 -0.5em;
  text-decoration: none;
}

#header a::after {
  content: '';

  display: block;
  width: 100%;
  height: 2px;

  background-color: var(--secondary-color-50);
  transform: scaleX(0) translateY(-14px);
  transform-origin: top left;
  transition: transform 0.25s ease;
}

#header a:hover::after {
  transform: scaleX(1) translateY(-14px);
}

.header-col:nth-child(1) {
  grid-column: 1 / span 1;
  grid-row: 1;
}

.header-col:nth-child(2) {
  grid-column: 8 / span 3;
  grid-row: 1;
}

.header-col:nth-child(3) {
  grid-column: 10 / span 2;
  grid-row: 1;
}

.header-col:nth-child(4) {
  grid-column: 11 / span 3;
  grid-row: 1;
}

#header-left {
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
}

#header-center {
  text-align: left;
}

#header-center span,
#header-right span {
  padding: 0 0.75rem;
}

#header-right {
  text-align: right;
}
</style>
