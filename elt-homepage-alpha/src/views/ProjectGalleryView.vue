<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" class="head-setting">Gallery</span>
      </div>
    </section>

    <section id="galleryview-body">
      <div class="img-gallery-box">
        <RouterLink
          :to="'/project/' + project._id"
          v-for="(project, idx) in projects"
          :key="idx + 'g'"
        >
          <figure>
            <img
              :src="`https://resize.samworks.io/crop/450/webp/${project.mainImg}`"
              :alt="project.title"
              class="lazy"
            />
            <figcaption>{{ project.title }}</figcaption>
            <p class="tags">{{ project.tags.map((k) => '#' + k).join(' ') }}</p>
          </figure>
        </RouterLink>
      </div>
    </section>

    <div class="switch">
      <RouterLink to="/project/gallery" class="switch__button--current">
        <img src="/assets/img/icon-gallery.svg" />
      </RouterLink>
      <RouterLink to="/project/list">
        <img src="/assets/img/icon-list.svg" />
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { ref, inject, reactive } from 'vue'
import { RouterLink } from 'vue-router'

const projects = reactive([])
const $axios = inject('$axios')

const galleryviewFcn = () => {
  $(function () {
    // hover-effect
    $('a, button').hover(
      function () {
        $('line').addClass('line-animate')
      },
      function () {
        $('line').removeClass('line-animate')
      }
    )
    //text-transform
    $('.img-gallery-box figcaption')
      .text(function (index, currentText) {
        return currentText.toLowerCase()
      })
      .addClass('capitalize')
  })
}

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
  const qq = qs({...query, limit: 500})
  return $axios.get('/contents?' + qq).then(({ data }) => data)
}
const reload = async () => {
  fetchArticleList({
    filter: { category: 'project', isActivated: true },
    sort: { publishedDate: -1 }
  }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)

    galleryviewFcn()
  })
}

reload()
</script>
<style></style>
