<template>
  <div class="history">
    <div class="history__title title text-aling-right">
      History
    </div>
    <div class="history__content">
      <div class="history__author">
        <img v-bind:src="authorPhoto">
      </div>
      <div class="history__text">
        <div class="history__about-author">
          <h3>{{ titles.author }}</h3>
          <ul class="history__about-author">
            <li v-for="(item, index) in lists.aboutAuthor" v-bind:key="index" v-html="item"></li>
          </ul>
        </div>
        <div class="history__version mx-auto">
          <h3>{{ titles.versions }}</h3>
          <ul>
            <li v-for="(item, index) in lists.versions" v-bind:key="index" v-html="item"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data: function() {
    return {
      titles: {
        author: 'The Founder — Evan You',
        versions: 'Versions',
      },
      lists: {
        aboutAuthor: [
          "Previously worked as Creative Developer at <span class='bold'>Google</span>",
          "Core Dev at <span class='bold'>Meteor</span>",
          "From 2016 full-time dev at <span class='bold'>Vue js</span> Framework",
        ],
        versions: [
          "Started in <span class='bold'>late 2013</span>",
          "Feb. 2014 (v0.6) <span class='bold'>First release</span>",
          "<span class='bold'>v1.0.0</span> Oct. 2015",
          "<span class='bold'>Latest release</span> v2.5.16",
        ]
      },
      authorPhoto: 'https://avatars3.githubusercontent.com/u/499550?s=400&v=4',
    }
  }
}
</script>


<style lang="scss" scoped>
  .history {

    &__content {
      flex-grow: 1;
      margin-left: 30px;
    }

    &__author {
      margin-bottom: 20px;

      img {
        max-width: 200px;
      }
    }

    &__text {
      display: flex;
      height: 100%;
      justify-content: space-between;
    }

    li > span {
      padding-left: 5px;
    }
  }
</style>
