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
          :to="'/project/' + project._id"
        >
          <p>{{ project.title }}</p>
          <div class="list-image">
            <img :src="project.mainImg" />
          </div>
          <span>{{ project.publishedDate.substring(0, 4) }}</span>
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
  fetchArticleList({ filter: { category: 'project' } }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)
  })
}

reload()
</script>

<style></style>
