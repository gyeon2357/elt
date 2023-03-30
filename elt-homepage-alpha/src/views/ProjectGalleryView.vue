<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" class="head-setting">Gallery</span>
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
        <RouterLink
          :to="'/project/' + project._id"
          v-for="(project, idx) in projects"
          :key="idx + 'g'"
        >
          <figure>
            <img :src="project.mainImg" :alt="project.title" />
            <figcaption>{{ project.title }}</figcaption>
            <p class="tags">{{ project.tags.map((k) => '#' + k).join(' ') }}</p>
          </figure>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, inject, reactive } from 'vue'
import { RouterLink } from 'vue-router'

const projects = reactive([])
const $axios = inject('$axios')
const fetchArticleList = async (query) => {
  const qs = (obj) => {
    const str = []
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(JSON.stringify(obj[p])))
      }
    }
    return str.join('&')
  }
  const qq = qs(query)
  return $axios.get('/contents?' + qq).then(({ data }) => data)
}
const reload = async () => {
  fetchArticleList({ filter: { category: 'project' } }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)
  })
}

reload()
</script>
<style></style>
