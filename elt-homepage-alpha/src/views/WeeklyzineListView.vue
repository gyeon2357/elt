<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" class="head-setting">Weeklyzine</span>
      </div>
    </section>

    <section id="weeklyzine-main-body">
      <div class="weeklyzine-box">
        <RouterLink :to="`/weeklyzine/${item._id}`" v-for="item in projects" :key="item.id">
          <figure>
            <img :src="item.mainImg" alt="" class="lazy" />
            <figcaption>{{ item.title }}</figcaption>
            <p class="tags">{{ item.subtitle }}</p>
          </figure>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { inject, reactive } from 'vue'
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
  fetchArticleList({ filter: { category: 'weeklyzine' } }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)
  })
}

reload()
</script>
<style></style>
