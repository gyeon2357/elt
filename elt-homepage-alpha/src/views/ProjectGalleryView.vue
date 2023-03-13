<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" style="">Gallery</span>
      </div>
    </section>

    <section id="galleryview-body">
      <div class="img-gallery-box">
        <!-- <button onclick="location.href='../../projects/arena-homme+-november-2022'"> -->
        <!-- <figure>
          <img src="/assets/img/gallery/ex-img-2.jpg" alt="Arena Homme+ Nov 2022 Oh Yeongsu" />
          <figcaption>Arena Homme+ Nov 2022 Oh Yeongsu</figcaption>
          <p class="tags">Editorial, Graphic</p>
        </figure> -->
        <!-- </button> -->
        <RouterLink to="/project/1" v-for="(project, idx) in projects" :key="idx + 'g'">
          <figure>
            <img :src="project.titleImage" :alt="project.title" />
            <figcaption>{{ project.title }}</figcaption>
            <p class="tags">{{ project.tags }}</p>
          </figure>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const projects = ref([
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    tags: 'Graphic, Editorial',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  }
])
</script>
<style></style>
