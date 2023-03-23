<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" style="">Notice</span>
        <span data-work-filters="currentCategoryName" style="">{{ project.title }}</span>
      </div>
    </section>

    <section id="notice-main-body">
      <div class="notice-box">
        <div class="main-info">
          <div class="main-info-box">
            <figure>
              <img :src="project.mainImg" style="width: 100%" />
            </figure>
          </div>
          <div class="main-info-box">
            <Block
              v-for="(item, idx) in (project?.contents || []).filter(
                (item) => !(item.type === 'image' && item.data.file.url === project.mainImg)
              )"
              :key="item.type + idx"
              :blockType="item.type"
              :data="item.data"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import Block from '../components/Block.vue'
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
