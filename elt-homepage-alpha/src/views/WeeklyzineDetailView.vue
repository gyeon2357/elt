<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="single-project-head">
      <div class="project-head">
        <span>Weeklyzine</span>
      </div>
    </section>

    <section id="single-project-body">
      <div class="single-project-title-box">
        <div class="single-project-title-head">
          <p>{{ item.title }}, {{ item.tags }}</p>
        </div>

        <div class="single-project-title-desc">
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div class="single-project-gallery-box">
        <div class="single-project-gallery">
          <figure>
            <img :src="item.titleImage" />
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { ref } from 'vue'

const item = ref({
  id: 1,
  description: 'Order The Cheesecake Factory today!',
  title: 'Weeklyzine #1',
  tags: '@gyeon',
  titleImage: '/assets/img/gallery/ex-img-1.jpg'
})
</script>
<style></style>
