<template>
  <div class="block">
    <template v-if="blockType === 'paragraph'">
      <p class="post-paragraph" v-html="data.text" :style="`text-align: ${align}`"></p>
    </template>
    <template v-if="blockType === 'list'">
      <ul class="post-paragraph" :style="`text-align: ${align}`">
        <li v-for="item in data.items" v-html="item" :key="item"></li>
      </ul>
    </template>
    <template v-if="blockType === 'header'">
      <div :class="[`post-heading-${data.level} `]">
        <span
          class="desc"
          v-if="data.text.split(/\|/).length > 1"
          v-html="data.text.split(/\|/)[0]"
        ></span>
        <span class="text" v-html="data.text.split(/\|/).pop()"></span>
      </div>
    </template>
    <template v-if="blockType === 'embed'">
      <div :class="[`video-block`]">
        <div class=""></div>
        <iframe
          style="width: 100%"
          height="400"
          frameborder="0"
          allowfullscreen
          :src="data.embed"
        ></iframe>
        <small>{{ data.caption }}</small>
      </div>
    </template>
    <template v-if="blockType === 'image'">
      <figure>
        <div :class="`post-img-center`">
          <img
            v-lazy="`https://resize.samworks.io/crop/1200/webp/${data.file.url}`"
            :alt="data.caption"
            :class="{ stretched: data.stretched }"
          />
        </div>
        <!-- <v-img :src="data.file.url" contain max-height="530" max-width="840"></v-img> -->
        <figcaption v-if="data.caption.length > 0">
          <span v-html="data.caption"></span>
        </figcaption>
      </figure>
    </template>
    <template v-if="blockType === 'delimiter'">
      <br />
      <!-- <hr /> -->
      <!-- <div class="delimiter"></div> -->
    </template>
    <template v-if="blockType === 'quote'">
      <blockquote class="sidekick text-center">
        <span class="d-block" v-html="trans(data.text)"></span>
        <cite>{{ data.caption }}</cite>
      </blockquote>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Block',
  props: {
    align: {
      type: String,
      default: 'left'
    },
    blockType: {
      type: String,
      default: 'paragraph'
    },
    data: {
      type: Object,
      default: () => ({
        text: '아무말'
      })
    }
  },
  methods: {
    trans(text) {
      return text.replace(/&nbsp;/g, '<br />')
    }
  }
}
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center !important;
}
ul {
  margin-bottom: 0.7rem;
  margin-left: 1rem;
}
li {
  list-style: disc;
  margin-bottom: 8px;
}
// @import '@/scss/variables.scss';
.block {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.heading {
  margin-top: 0px;
}

.video-block {
  width: 85%;
  margin: auto;
  text-align: center;
}
.embed-tool__url {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 250px;
  color: #7b7e89;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

figure {
  width: 100%;
  div {
    width: 100%;
  }
}

figcaption {
  font-size: 0.75rem;
  font-weight: 400;
  display: block;
  margin: 0.25rem 0 .375rem 0;
  text-align: left;
}
.desc {
  font-weight: 400;
}
/* editor용 style */
@mixin center-align {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@mixin left-align {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

@mixin horizontal-divider($width) {
  &:before {
    content: '';
    width: $width;
    border-top: 1px solid;
    margin-right: 24px;
  }

  &:after {
    content: '';
    width: $width;
    border-top: 1px solid;
    margin-left: 24px;
  }
}

.delimiter::before {
  display: inline-block;
  content: '* * *';
  font-size: 30px;
  line-height: 1.5;
  height: 30px;
  letter-spacing: 0.2em;
}
.delimiter {
  line-height: 1.5;
  width: 100%;
  text-align: center;
}

hr {
  @include center-align;
  border: none;
  border-bottom: 1px solid;
  width: 40%;
  height: 20px;
  // margin-top: 20px;
  // margin-bottom: 20px;
}
.white--text hr {
  border-color: white !important;
}

.post-date-divider {
  @include center-align;

  // @include font-and-weight('AktivGrotesk', 700);
  font-size: 0.875rem;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 19px;
  @include horizontal-divider(50%);
}

.post-dot-divider {
  @include center-align;

  height: 12px;
  margin-top: 48px;
  margin-bottom: 36px;

  &:before {
    content: '';
    width: 12px;
    height: 12px;
    background-color: #ffffff;
    border-radius: 50%;
  }
}

.post-heading-1 {
  @include center-align;

  font-weight: 900;
  font-size: 2.375rem;
  line-height: 1.5;
}

.post-heading-2 {
  @include center-align;

  font-weight: 200;
  font-size: 1.375rem;
  line-height: 1.5;
  margin-top: 44px;
  margin-bottom: 16px;
}

.post-heading-3 {
  @include center-align;
  @include horizontal-divider(5%);
  margin-top: 0px;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.5;
  // margin-bottom: 40px;
}

.post-heading-4 {
  // @include left-align;
  // margin-top: -12px;
  font-weight: 600;
  // font-family: 'SpoqaBold', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  .desc {
    font-weight: 300;
  }
  .desc:after {
    content: '|';
    margin-right: 8px;
    margin-left: 6px;
  }
}

.post-heading-5 {
  // @include left-align;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: -12px;
}

.post-heading-6 {
  // @include left-align;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  font-weight: 600;
  margin-bottom: -12px;
}

.post-img-center {
  @include center-align;
  // width: 100%;
  // margin-bottom: 40px;

  img {
    max-width: 100%;
    max-height: 1200px;
    height: auto;
    object-fit: cover;
  }
  img.stretched {
    width: 100%;
    max-height: initial;
    // border-top: 5px solid red;
    // min-width: 920px !important;
  }
}

.book-img {
  float: left;
  width: 30%;

  img {
    max-width: 100%;
    height: auto;
  }
}

.book-paragraph {
  float: right;
  width: 70%;
  white-space: pre-wrap;
}

@media screen and (max-width: 1024px) {
  .post-date-divider {
    line-height: 1.5;
  }

  .post-heading-1 {
    font-size: 1.75rem;
    line-height: 1.5;
  }
}

@media screen and (max-width: 600px) {
  .book-img {
    img {
      max-height: 250px;
    }
  }

  .post-img-center {
    img {
      max-height: 350px;
    }
  }
  .post-heading-1 {
    font-size: 2.375rem;
    line-height: 1.5;
  }

  .post-heading-2 {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .post-heading-3 {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .post-heading-4 {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  .post-heading-5 {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .post-paragraph {
    font-size: 0.875rem;
    line-height: 1.5;
  }
}

.h2-style {
  margin-top: 8px;
  // @include font-and-weight('AktivGrotesk', 700);
  font-size: 1.3125rem;
  line-height: 1.5;
}

.h5-style {
  // @include font-and-weight('AktivGrotesk', 700);
  font-size: 1rem;
  line-height: 1.5;
}

blockquote {
  padding: 0 15%;
  position: relative;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: MaruBuri-Regular;
  font-size: 1rem;
  // text-indent: 1.6em;
  line-height: 1.5;
}
blockquote:before {
  position: absolute;
  top: -20px;
  left: 49%;
  content: '“';
  font-size: 4rem;
  font-family: 'AktivGrotesk', sans-serif;
  color: #bcbcbc;
}
blockquote:after {
  position: absolute;
  content: '”';
  font-size: 4rem;
  font-family: 'AktivGrotesk', sans-serif;
  color: #bcbcbc;
  bottom: -60px;
  left: 49%;
}

// .sidekick {
//   position: relative;
//   margin-top: 8px;
//   margin-bottom: 16px;
//   // border-left: 6px solid black;
//   font-size: 1em;
//   line-height: 1.5;
//   font-weight: 500;
//   color: #868e96;
// }
// .sidekick:before,
// .sidekick:after {
//   font-family: Calibri;
//   color: #039be5;
//   font-size: 34px;
// }
.sidekick cite {
  display: block;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 16px;
  // transform: translate(-30px, 14px);
}
// .sidekick cite:before {
//   content: ' \2015 ';
// }
</style>
