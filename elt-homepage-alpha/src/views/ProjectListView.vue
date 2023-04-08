<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="listview-head">
      <div class="list-filters">
        <button class="work-filters-button || form_select-wrapper">
          <span data-work-filters="toggler-open-label" class="work-filters || form_select">
            <div class="filter-icon"><img src="/assets/img/select_on.png" /></div>
            <div class="filter-text">
              <span data-work-filters="currentCategoryName" class="all-project">All projects </span>
            </div>
            <div class="sup-box">
              <sup data-work-filters="currentCategoryQty" style="">{{ projects.length }}</sup>
            </div>
          </span>
        </button>
        <div id="filters-box" style="display: none">
          <p id="filters">
            <span>Editorial</span><span>Graphic</span><span>Branding</span><span>Poster</span
            ><span>Package</span><span>Calendar</span><span>Album</span><span>Book</span
            ><span>CI</span><span>BI</span><span>App</span><span>Website</span><span>Brochure</span
            ><span>Illustration</span><span>Art</span><span>Magazine</span><span>character</span>
          </p>
        </div>
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
            <img
              :src="`https://resize.samworks.io/crop/100x100/webp/${project.mainImg}`"
              class="lazy"
            />
          </div>
          <span>{{ project.publishedDate.substring(0, 4) }}</span>
        </RouterLink>
      </div>
    </section>
    <div class="switch">
      <RouterLink to="/project/gallery">
        <img src="/assets/img/icon-gallery.svg" />
      </RouterLink>
      <RouterLink to="/project/list" class="switch__button--current">
        <img src="/assets/img/icon-list.svg" />
      </RouterLink>
    </div>
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
  fetchArticleList({
    filter: { category: 'project', isActivated: true },
    sort: { publishedDate: -1 }
  }).then((l) => {
    projects.splice(0, projects.length)
    projects.push(...l)
  })
}

const listviewFcn = () => {
  $(function () {
    // var links = document.getElementsByClassName('list-box')
    // for (var i = 0; i < links.length; i++) {
    //   links[i].innerHTML = links[i].innerHTML.toLowerCase()
    // }

    $('.work-filters-button').click(function () {
      $('.filter-icon')
        .find('img')
        .attr('src', function (index, attr) {
          if (attr.match('_on')) {
            return attr.replace('_on.png', '_off.png')
          } else {
            return attr.replace('_off.png', '_on.png')
          }
        })

      $('.sup-box').toggle()
      $('.work-filters-button')
        .find('span.all-project')
        .text(function (index, text) {
          return text == 'Close' ? 'All projects' : 'Close'
        })

      $('#filters-box').fadeToggle()

      return false
    })
  })
}

listviewFcn()
reload()
</script>

<style>
.work-filters {
  color: inherit;
}
</style>
