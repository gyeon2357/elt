<template>
  <footer id="footer">
    <div id="footer-contact-credits">
      <div class="footer-col">
        <a class="out main-title-text text-plane text-plane-is-link not-scroll-trigger">Social</a>
        <a
          href="https://www.instagram.com/everylittlething_graphic/"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >Instagram</a
        >
        <a
          href="https://www.facebook.com/e.littlething/"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >Facebook</a
        >
        <a
          href="https://www.behance.net/everylittlething"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >Behance</a
        >
      </div>

      <div class="footer-col">
        <a class="out main-title-text text-plane text-plane-is-link not-scroll-trigger">Contact</a>
        <a
          to="mailto:design@everylittlething.co.kr"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >design@everylittlething.co.kr</a
        >
        <a
          to="mailto:graphic@everylittlething.co.kr"
          class="out main-title-text text-plane text-plane-is-link not-scroll-trigger"
          >graphic@everylittlething.co.kr</a
        >
        <span class="out main-title-text text-plane not-scroll-trigger"
          >Copyright © every.little.thing</span
        >
      </div>
  
    </div>
  </footer>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isCurrentAboutPage = computed(() => route.path.startsWith('/about'))
console.log(isCurrentAboutPage.value)
</script>

<style>
#footer {
  padding: calc(var(--height-space) * 0.5) calc(var(--gutter-size) * 1.5) var(--gutter-size)
    calc(var(--gutter-size) * 1.5);
  margin-bottom: 1rem;
}

#footer-contact-credits {
  margin: 0 calc(var(--gutter-size) * -0.5);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12.5%, auto));
  row-gap: 1rem;
  position: relative;
  z-index: 2;
}

.footer-col {
  padding: 0 calc(var(--gutter-size) * 0.5);
  font-size: 0.875rem;
  line-height: 1.68;
}

.footer-col:nth-child(1) {
  grid-column: 1 / span 6;
  grid-row: 1;
}

.footer-col:nth-child(2) {
  grid-column: 7 / span 2;
  grid-row: 1;
}

.footer-col a:first-child {
  font-weight: 700;
  border-bottom: 1px solid var(--primary-color-10);
  margin-bottom: 0.75rem;

  cursor: inherit;
}

.footer-col a:first-child:hover {
  text-decoration: none;
}

.footer-col span {
  padding-top: 1.25rem;
  font-size: 0.625rem;
  opacity: 0.5;
}

#footer-contact-credits figure {
  grid-column: 1 / span 8;
  grid-row: 2;
  height: 50vh;
  filter: saturate(0);
}

#footer-contact-credits figure img {
  border-radius: 0;
  object-fit: fill;
}

.footer-end-col {
  flex-direction: row;
  align-items: flex-end;
}

.contact-links-list a.main-title-text {
  display: inline-block;
}

#footer-title {
  font-family: var(--display-font);
  font-weight: 700;
  line-height: 1.2;

  margin: calc(var(--height-space) * 0.25) -2em 0 -2em;
  padding: 0 1em;
  text-align: center;

  font-weight: normal;
  font-size: 3rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
}

#footer-title .main-title-text {
  margin: -0.1em;
  padding: 0.1em 0.5em 0.1em 0.1em;
}

#footer-title .main-title-text:last-child {
  padding: 0.1em;
}
</style>
