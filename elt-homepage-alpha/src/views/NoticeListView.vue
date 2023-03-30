<template>
  <div id="content" class="head-padding" data-namespace="home">
    <section id="content-head">
      <div class="content-head">
        <span data-work-filters="currentCategoryName" style="">Notice</span>
        <span data-work-filters="currentCategoryName" style="">작성일</span>
      </div>
    </section>
    <section id="notice-main-body">
      <div id="index">
        <RouterLink
          class="list-box"
          :to="`/notice/${item.id}`"
          v-for="item in items"
          :key="item.id"
        >
          <p>{{ item.title }}</p>
          <span>{{ item.date }}</span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const items = ref([
  {
    id: 1,
    title: '웹사이트 리뉴얼',
    date: '2023. 02. 27.'
  },
  {
    id: 2,
    title: '봄맞이 이벤트 공지',
    date: '2023. 01. 21.'
  },
  {
    id: 3,
    title: '한겨울 이벤트 공지',
    date: '2023. 01. 07.'
  },
  {
    id: 4,
    title: '추석 이벤트 공지',
    date: '2022. 09. 27.'
  },
  {
    id: 5,
    title: '바캉스 이벤트 공지',
    date: '2022. 08. 15.'
  },
  {
    id: 6,
    title: '호캉스 이벤트 공지',
    date: '2023. 02. 27.'
  },
  {
    id: 7,
    title: '봄맞이 이벤트 공지',
    date: '2023. 02. 27.'
  }
])
</script>

<style></style>
