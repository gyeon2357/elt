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
          <p>{{ project.subtitle }}&nbsp;</p>
          <p>{{ project.description }}&nbsp;</p>
        </div>

        <div class="single-project-image-box">
          <img :src="project.mainImg" class="lazy" />
        </div>

        <div class="single-project-title-desc">
          {{ project?.publishedDate?.substring(0, 4)
          }}<span>{{ project.tags.map((k) => '#' + k).join(', ') }}</span>
          <!-- <p style="margin-top: 24px" v-html="project.description.split('\n').join('<br />')"></p> -->
        </div>
      </div>
      <div class="single-project-gallery-box">
        <Block
          v-for="(item, idx) in project.contents"
          :key="item.type + idx"
          :blockType="item.type"
          :data="item.data"
          align="left"
        />
      </div>
    </section>

    <section id="share-url">
      <div class="share-url-box">
        <figure>
          <img src="/assets/img/kakaotalk.svg" />
          <img src="/assets/img/twitter.svg" />
          <img src="/assets/img/facebook.svg" />
          <img src="/assets/img/share.svg" />
        </figure>
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
              <img :src="`https://resize.samworks.io/crop/320x240/webp/${article.mainImg}`" />

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
import { format } from 'date-fns'
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

const detailviewFcn = () => {
  $(function () {
    $('.project-head span')
      .text(function (index, currentText) {
        return currentText.toLowerCase()
      })
      .addClass('capitalize')
  })
}

const fetchArticleList = async (publishedDate) => {
  return $axios
    .get(
      `/contents?filter={"category": "project", "isActivated": true, "publishedDate": {"$lt" : "${publishedDate}"} }&limit=4&sort={"publishedDate": -1}`
    )
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
    project.publishedDate = l.publishedDate

    fetchArticleList(l.publishedDate).then((l) => {
      if (l.length === 4) {
        articleList.splice(0, 4)
        articleList.push(...l)
      } else
        fetchArticleList(format(new Date(), 'yyyy-MM-dd')).then((l) => {
          articleList.splice(0, 4)
          articleList.push(...l)
        })
    })
    detailviewFcn()
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
