<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="listview-head">
      <div class="list-filters">
        <button
          class="work-filters_toggler || form_select-wrapper"
          data-work-filters="toggler"
          aria-expanded="false"
          aria-controls="work-filters-content"
        >
          <span
            data-work-filters="toggler-open-label"
            class="work-filters_toggler_open-label || form_select"
          >
            <span><img src="/assets/img/select.svg" /></span>
            <div class="filter-text">
              <span data-work-filters="currentCategoryName" style="">All projects </span>
            </div>
            <div class="sup-box">
              <sup data-work-filters="currentCategoryQty" style="">{{ projects.length }}</sup>
            </div>
          </span>
          <span
            data-work-filters="toggler-close-label"
            class="work-filters_toggler_close-label -hidden"
            style="display: none"
          >
            Close
          </span>
        </button>
      </div>
    </section>

    <section id="listview-body">
      <div id="index">
        <RouterLink
          :key="idx + 'p'"
          v-for="(project, idx) in projects"
          class="list-box"
          to="/project/1"
        >
          <p>{{ project.title }}</p>
          <div class="list-image">
            <img :src="project.titleImage" />
          </div>
          <span>{{ project.category }}</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const projects = ref([
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    title: 'Arena Homme+ November 2022 Oh Yeongsu',
    category: 'Graphic',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  }
])
</script>

<style></style>
