<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName">Weeklyzine</span>
      </div>
    </section>

    <section id="weeklyzine-main-body">
      <div class="weeklyzine-box">
        <RouterLink :to="`/weeklyzine/${item.id}`" v-for="item in items" :key="item.id">
          <figure>
            <img :src="item.titleImage" alt="" />
            <figcaption>{{ item.title }}</figcaption>
            <p class="tags">{{ item.tags }}</p>
          </figure>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    title: 'Weeklyzine #1',
    tags: '@gyeon',
    titleImage: '/assets/img/gallery/ex-img-1.jpg'
  },
  {
    id: 2,
    title: 'Weeklyzine #2',
    tags: '@samwork',
    titleImage: '/assets/img/gallery/ex-img-2.jpg'
  },
  {
    id: 3,
    title: 'Weeklyzine #3',
    tags: '@bibl2',
    titleImage: '/assets/img/gallery/ex-img-3.jpg'
  },
  {
    id: 4,
    title: 'Weeklyzine #4',
    tags: '@ben',
    titleImage: '/assets/img/gallery/ex-img-4.jpg'
  },
  {
    id: 5,
    title: 'Weeklyzine #5',
    tags: '@yamin',
    titleImage: '/assets/img/gallery/ex-img-5.jpg'
  },
  {
    id: 6,
    title: 'Weeklyzine #6',
    tags: '@yamin',
    titleImage: '/assets/img/gallery/ex-img-5.jpg'
  }
])
</script>
<style></style>
