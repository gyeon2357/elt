<template>
  <footer id="footer">
    <div id="footer-contact-credits">
      <div class="footer-col">
        <a class="out main-title-text text-plane text-plane-is-link footer-title">Social</a>
        <a
          href="https://www.instagram.com/everylittlething_graphic/"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link"
          >Instagram</a
        >
        <a
          href="https://www.facebook.com/e.littlething/"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link"
          >Facebook</a
        >
        <a
          href="https://www.behance.net/everylittlething"
          target="_blank"
          class="out main-title-text text-plane text-plane-is-link"
          >Behance</a
        >
      </div>

      <div class="footer-col">
        <a class="out main-title-text text-plane text-plane-is-link footer-title">Contact</a>
        <a
          href="mailto:design@everylittlething.co.kr?subject=문의하기"
          class="out main-title-text text-plane text-plane-is-link"
          >design@everylittlething.co.kr</a
        >
        <a
          href="mailto:graphic@everylittlething.co.kr?subject=문의하기"
          class="out main-title-text text-plane text-plane-is-link"
          >graphic@everylittlething.co.kr</a
        >
        <span class="out main-title-text text-plane">Copyright © everylittlething</span>
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

<style scoped>
#footer {
  position: relative;
  height: 8rem;

  font-family: var(--display-font);
  letter-spacing: 0.00125rem;
  padding: 80px calc(var(--gutter-size) * 2) var(--gutter-size) calc(var(--gutter-size) * 2);
  z-index: 1;
}

#footer-contact-credits {
  margin: 0 calc(var(--gutter-size) * -0.5);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8.33%, auto));
  row-gap: 1rem;
  position: relative;
  z-index: 2;
}

.footer-col {
  padding: 0 0.5rem;
  font-size: 1rem;
  line-height: 1.4;
}

.footer-col a {
  cursor: pointer;
}

.footer-col:nth-child(1) {
  grid-column: 1 / span 7;
  grid-row: 1;
}

.footer-col:nth-child(2) {
  grid-column: 8 / span 7;
  grid-row: 1;
}

.footer-col a:first-child {
  font-weight: 700;
  border-bottom: 1px solid var(--primary-color-10);
  margin-bottom: 0.75rem;

  cursor: inherit;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.footer-col a:not(:first-child) {
  width: fit-content;
}

.footer-col a:first-child:hover {
  color: inherit;
  text-decoration: none;
}

.footer-col span {
  padding-top: 1.25rem;
  font-style: italic;
  font-size: 0.625rem;
  letter-spacing: 0.0125rem;

  margin-bottom: 1rem;
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

@media screen and (orientation: portrait), (max-width: 699px) {
  #footer {
    height: 18rem;
    padding: calc(var(--height-space) / 2) 1.125rem var(--gutter-size) 1.125rem;
    margin-bottom: 0;
  }

  #footer-contact-credits {
    display: block !important;
    margin: 0 !important;
    padding-bottom: 1rem;
  }

  .footer-col {
    font-size: 1rem;
    line-height: 1.5;
    margin: calc(var(--height-space) * 0.25) 0;
    padding: 0 !important;
  }

  .footer-col .fonts-credits:first-of-type {
    margin: 0 0 calc(var(--height-space) * 0.25) 0;
  }

  .footer-end-col {
    display: block;
  }

  .fonts-credits .text-plane,
  .footer-end-col .text-plane,
  #scroll-to-top {
    margin: -0.5em;
    padding: 0.5em;
  }

  .footer-end-col .text-plane.text-plane-has-link {
    display: block;
    margin: -0.5em -0.5em calc(var(--height-space) * 0.25 - 0.5em) -0.5em;
  }

  #footer-title {
    font-size: 4.875rem;
    margin: 0 -1em;
    flex-wrap: wrap;
  }

  #footer-title .main-title-text {
    padding: 0.25em;
    margin: -0.25em;
  }

  #footer-title .main-title-text:first-of-type {
    padding: 0.25em 0.75em 0.25em 0.25em;
  }

  #footer-title .main-title-text:last-child {
    padding: 0.25em;
  }

  #footer-title .main-title-text:last-of-type {
    flex-basis: 100%;
  }

  .footer-col span {
    font-size: 0.875rem;
    padding-top: 1rem;
  }
}
</style>

