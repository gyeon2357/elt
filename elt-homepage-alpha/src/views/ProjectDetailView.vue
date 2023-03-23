<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="single-project-head">
      <div class="project-head">
        <span>{{ project.title }}</span>
      </div>
    </section>

    <section id="single-project-body">
      <div class="single-project-title-box">
        <div class="single-project-title-head">
          <p>{{ project.tags.join(', ') }}</p>
          <p>{{ project.subtitle }}</p>
        </div>

        <div class="single-project-image-box">
          <img :src="project.mainImg" />
        </div>

        <div class="single-project-title-desc">
          <pre>{{ project.description }}</pre>
        </div>
      </div>
      <div class="single-project-gallery-box" style="max-width: 1440px; margin: auto">
        <Block
          v-for="(item, idx) in project.contents"
          :key="item.type + idx"
          :blockType="item.type"
          :data="item.data"
          align="center"
        />
      </div>
    </section>

    <section id="another-project">
      <div class="another-project-title-box">
        <p>You may also like</p>
      </div>

      <div class="another-project-gallery-box">
        <div class="another-project-gallery">
          <RouterLink
            :to="'/project/' + article._id"
            v-for="article in articleList"
            :key="article._id"
          >
            <figure>
              <img :src="article.mainImg" />
              <figcaption>{{ article.title }}</figcaption>
            </figure>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import Block from '../components/Block.vue'
import { reactive, watch, inject } from 'vue'
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

const articleList = reactive([])

const fetchArticleList = async (id) => {
  return $axios
    .get('/contents?filter={"category": "project"}&limit=4&sort={"createdAt": -1}')
    .then(({ data }) => data)
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

  fetchArticleList().then((l) => {
    articleList.splice(0, 4)
    articleList.push(...l)
  })
}

reload()
watch(
  () => route.params.id,
  async (id) => {
    if (!id) return
    else {
      console.log('id => ', id)
      reload()
      // const a = await fetchArticle(id)
      // console.log('article => ', a)
      // Object.assign(article, a)
      // e.value++
    }
  }
)
</script>

<style scope>
pre {
  white-space: pre-wrap;
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-family: 'Pretendard Variable';
}
</style>
