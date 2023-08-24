<template>
  <div id="content"
       class="head-padding"
       data-namespace="home">

    <!-- <loading :active="isLoading"
             :is-full-page="true"
             :can-cancel="true"
             loader="dots"
             :height="10"
             :width="10"
             color="#44ff00"></loading> -->
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
          <img :src="project.mainImg"
               class="lazy" />
        </div>

        <div class="single-project-title-desc">
          {{ project?.publishedDate?.substring(0, 4)
          }}<span>{{ project.tags.map((k) => '#' + k).join(', ') }}</span>
          <!-- <p style="margin-top: 24px" v-html="project.description.split('\n').join('<br />')"></p> -->
        </div>
      </div>
      <div class="single-project-gallery-box"
           :key="bodyKey">
        <Block v-for="(item, idx) in project.contents"
               :key="item.type + idx + bodyKey"
               :blockType="item.type"
               :data="item.data"
               align="left" />
      </div>
    </section>

    <section id="share-url">
      <div class="share-url-box">
        <figure>
          <!-- <img src="/assets/img/kakaotalk.svg" /> -->

          <a target="_blank"
             :href="buildTwitterButton()"><img src="/assets/img/twitter.svg" /></a>
          <div style="display: inline-block"
               class="fb-share-button"
               :data-href="url"
               data-layout="button"
               data-size="large">
            <a target="_blank"
               href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Feverylittlething.co.kr%2F&amp;src=sdkpreparse"
               class="fb-xfbml-parse-ignore"><img src="/assets/img/facebook.svg" /></a>
          </div>
          <img src="/assets/img/share.svg"
               @click="copyUrl(url)" />
        </figure>
      </div>
    </section>

    <section id="another-project">
      <div class="another-project-title-box">
        <p>You may also like</p>
      </div>

      <div class="another-project-gallery-box">
        <div class="another-project-gallery">
          <RouterLink :to="'/project/' + article._id"
                      v-for="article in articleList"
                      :key="article._id">
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
// import 'https://platform.twitter.com/widgets.js'
import Block from '../components/Block.vue'
import { format } from 'date-fns'
import { reactive, watch, inject, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
// Import the method.
import { useLoading } from 'vue3-loading-overlay';
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const isLoading = ref(false)
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
const url = ref('')
const route = useRoute()
const $axios = inject('$axios')
const fetchArticle = async (id) => {
  return $axios.get('/contents/' + id).then(({ data }) => data)
}

const copyUrl = (text) => {
  navigator.clipboard.writeText(text).then(() => alert('주소가 복사되었습니다 - ' + text))
}
const buildTwitterButton = () => {
  const text = project.title
  const hashtags = (project?.tags || []).join(',')
  return `http://twitter.com/share?lang=ko&text=${text}&url=${url.value}&hashtags=${hashtags}`
  // text=text goes here&url=http://url goes here&hashtags=hashtag1,hashtag2,hashtag3
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

const bodyKey = ref(0)

const loader = useLoading();

const fetchArticleList = async (publishedDate) => {
  return $axios
    .get(
      `/contents?filter={"category": "project", "isActivated": true, "publishedDate": {"$lt" : "${publishedDate}"} }&limit=4&sort={"publishedDate": -1}`
    )
    .then(({ data }) => data)
}
const reload = async () => {

  console.log(loader)
  url.value = window.location.href
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
      setTimeout(loader.hide, 1000);
    })
    detailviewFcn()
    // twttr.widgets.load()
  })
}

reload()
watch(
  () => route.params.id,
  async (id) => {
    if (!id) return
    else {
      console.log('id => ', id)
      loader.show({
        // Optional parameters
        container: null,
        canCancel: true,
        color: '#44ff00',
        width: 88,
        height: 88,
        loader: 'dots'

      });
      // simulate AJAX
      bodyKey.value++
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
