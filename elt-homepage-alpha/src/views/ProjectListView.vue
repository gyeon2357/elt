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
            <span @click="selectTag('all')">All</span>
            <span v-for="tag in Object.keys(tags)" :key="tag" @click="selectTag(tag)">{{
              tag
            }}</span>
          </p>
        </div>
      </div>
    </section>

    <section id="listview-body">
      <div id="index">
        <RouterLink
          @mouseover="over"
          @mouseleave="leave"
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
import { inject, reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const selectedTag = ref('')
const tags = ref({})
const _projects = []
const projects = reactive([])
const $axios = inject('$axios')
const over = (e) => {
  try {
    if (e.target.nodeName === 'A') {
      e.target.childNodes[1].style.display = 'block'
    } else {
      if (e?.target?.nextSibling) e.target.nextSibling.style.display = 'block'
    }
  } catch (error) {
    console.log(error)
  }
}
const leave = (e) => {
  if (e.target.nodeName === 'A') {
    e.target.childNodes[1].style.display = 'none'
  } else {
    if (e?.target?.nextSibling) e.target.nextSibling.style.display = 'none'
  }
}

// const hoverFcn = () => {
//   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
//     ? true
//     : false
//   console.log('HOVER ================')
//   if ($(window).width() >= 699 || isMobile == true) {
//     console.log('hover')
//     // list-view hover effect
//     $('.list-box').hover(
//       function () {
//         $(this).find('.list-image').css('display', 'block')
//       },
//       function () {
//         $(this).find('.list-image').css('display', 'none')
//       }
//     )
//   }
// }

const doFilter = (tag) => {
  $('.work-filters-button')
    .find('span.all-project')
    .text(tag === '' || tag === 'all' ? 'All Projects' : tag)
  return false
}
const listviewFcn = () => {
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

    //list-view text-transform
    $('.list-box p')
      .text(function (index, currentText) {
        return currentText.toLowerCase()
      })
      .addClass('capitalize')

    //list-view filters-button
    $('.work-filters-button').click(function () {
      console.log('selectedTag.value', selectedTag.value)
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
          console.log('text', text, selectedTag.value)

          return text == 'Close'
            ? selectedTag.value === ''
              ? 'All Projects'
              : selectedTag.value
            : 'Close'
        })

      $('#filters-box').fadeToggle()
      return false
    })
    // hoverFcn()
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
  const qq = qs(query)
  return $axios.get('/contents?' + qq).then(({ data }) => data)
}

const redirectTag = (tag) => {
  if (tag === 'all') {
    router.push('/project/list')
  } else {
    router.push(`/project/list?tag=${tag}`)
  }
}

const selectTag = (tag) => {
  router.push({ query: { tag } })
  projects.splice(0, projects.length)
  if (tag === 'all') {
    selectedTag.value = ''
    projects.push(..._projects)
  } else {
    selectedTag.value = tag
    const l = _projects.filter((p) => p.tags.includes(tag))
    projects.push(...l)
  }
  document.querySelector('.work-filters-button').click()
  // hoverFcn()
}

const reload = async () => {
  fetchArticleList({
    filter: { category: 'project', isActivated: true },
    sort: { publishedDate: -1 }
  }).then((l) => {
    _projects.push(...l)
    projects.splice(0, projects.length)
    projects.push(...l)

    const _tags = {}
    l.reduce((acc, cur) => {
      cur.tags.forEach((tag) => {
        if (acc[tag]?.length > 0) {
          acc[tag].push(cur._id)
        } else {
          acc[tag] = [cur._id]
        }
      })
      return acc
    }, _tags)
    tags.value = _tags

    listviewFcn()
    if (route.query?.tag) {
      selectTag(route.query.tag)
      doFilter(route.query.tag)
    } else {
      router.push({ query: { tag: 'all' } })
    }
  })
}

reload()
</script>

<script></script>
<style>
.work-filters {
  color: inherit;
}
</style>
