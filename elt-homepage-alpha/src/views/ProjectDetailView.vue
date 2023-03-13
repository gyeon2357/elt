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
          <p>{{ project.tags }}</p>
          <p>{{ project.subtitle }}</p>
        </div>

        <div class="single-project-image-box">
          <img :src="project.titleImage + route.params.id + '.jpg'" />
        </div>

        <div class="single-project-title-desc">
          <pre>{{ project.description }}</pre>
        </div>
      </div>
      <div class="single-project-gallery-box">
        <div class="single-project-gallery">
          <!-- <figure> -->
          <img src="/assets/img/gallery/ex-img-1.jpg" />
          <img src="/assets/img/gallery/ex-img-2.jpg" />
          <!-- </figure>
          <figure> -->
          <img src="/assets/img/gallery/ex-img-4.jpg" />
          <img src="/assets/img/gallery/ex-img-5.jpg" />
          <!-- </figure>
          <figure> -->
          <img src="/assets/img/gallery/ex-img-1.jpg" />
          <img src="/assets/img/gallery/ex-img-2.jpg" />
          <img src="/assets/img/gallery/ex-img-2.jpg" />
          <!-- </figure> -->
        </div>
      </div>
    </section>

    <section id="another-project">
      <div class="another-project-title-box">
        <p>You may also like</p>
      </div>

      <div class="another-project-gallery-box">
        <div class="another-project-gallery">
          <RouterLink to="/project/1">
            <figure>
              <img src="/assets/img/gallery/ex-img-1.jpg" />
              <figcaption>ELT Graphic</figcaption>
            </figure>
          </RouterLink>
          <RouterLink to="/project/2">
            <figure>
              <img src="/assets/img/gallery/ex-img-2.jpg" />
              <figcaption>ELT Graphic</figcaption>
            </figure>
          </RouterLink>
          <RouterLink to="/project/3">
            <figure>
              <img src="/assets/img/gallery/ex-img-3.jpg" />
              <figcaption>ELT Graphic</figcaption>
            </figure>
          </RouterLink>
          <RouterLink to="/project/4">
            <figure>
              <img src="/assets/img/gallery/ex-img-4.jpg" />
              <figcaption>ELT Graphic</figcaption>
            </figure>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Arena Homme+ November 2022 Oh Yeongsu',
      subtitle: '2022, Seoul',
      tags: 'Graphic, Editorial, CI, Book',
      titleImage: '/assets/img/gallery/ex-img-',
      description: `다이어트 요리 전문가 @nice_nemo 김지영의 레시피북
Diet Cooking Expert @nemo. Kim Jiyoung's Recipe Book.
Client. 동아일보사
Work. Book Design, 2019.`
    })
  }
})
const route = useRoute()

console.log(route.params.id)
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
