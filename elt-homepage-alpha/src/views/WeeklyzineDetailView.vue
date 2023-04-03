<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="single-project-head">
      <div class="project-head">
        <span>Weeklyzine</span>
      </div>
    </section>

    <section id="single-project-body">
      <div class="single-project-title-box">
        <div class="single-project-title-head">
          <p>{{ project.title }}, {{ project.subtitle }}</p>
        </div>

        <div class="single-project-title-desc">
          <p>{{ project.description }}</p>
        </div>
      </div>

      <div class="single-project-gallery-box">
        <div class="single-project-gallery">
          <figure>
            <img :src="project.mainImg" class="lazy"/>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
// import Block from '../components/Block.vue'
import { reactive, inject } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const project = reactive({
  title: 'Arena Homme+ November 2022 Oh Yeongsu',
  subtitle: '2022, Seoul',
  tags: ['Graphic', 'Editorial', 'CI', 'Book'],
  mainImg: '/assets/img/gallery/ex-img-',
  description: `다이어트 요리 전문가 @nice_nemo 김지영의 레시피북
Diet Cooking Expert @nemo. Kim Jiyoung's Recipe Book.
Client. 동아일보사
Work. Book Design, 2019.`
})
const route = useRoute()
const $axios = inject('$axios')
const fetchArticle = async (id) => {
  return $axios.get('/contents/' + id).then(({ data }) => data)
}
const reload = async () => {
  fetchArticle(route.params.id).then((l) => {
    project.title = l.title
    project.subtitle = l.subtitle
    project.tags = l.tags
    project.description = l.description
    project.mainImg = l.mainImg
    project.contents = l.contents
  })
}

reload()
</script>
<style></style>
