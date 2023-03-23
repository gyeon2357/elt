<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" style="">Notice</span>
        <span data-work-filters="currentCategoryName" style="">공지사항</span>
      </div>
    </section>
    <section id="notice-main-body">
      <div id="index">
        <RouterLink
          class="list-box"
          :to="`/notice/${item._id}`"
          v-for="item in projects"
          :key="item._id"
        >
          <p>{{ item.title }}</p>
          <span>{{ item.date }}</span>
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
  fetchArticleList({ filter: { category: 'notice' } }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)
  })
}

reload()
</script>

<style></style>
