<template>
  <main-master-page>
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__body">
          <bread-crumbs />
        </div>
      </div>
    </div>

    <div v-if="vacancy" class="vacancy">
      <div class="container">
        <div class="vacancy__body">
          <div class="vacancy__info">
            <div v-if="date" class="vacancy__info-date">
              {{ date.day }}-{{ date.month }}-{{ date.year }}
            </div>
            <div class="vacancy__info-views">
              <img src="@/assets/img/icons/views.svg" /> {{ vacancy.views }}
            </div>
            <div class="vacancy__info-responds">
              <img src="@/assets/img/icons/responds.svg" /> {{ vacancy.responds }}
            </div>
          </div>

          <div class="row">
            <div class="vacancy__about">
              <div class="vacancy__img">
                <img :src="vacancy.imgSrc" alt="" />
              </div>
              <div>
                <h3>{{ vacancy.title }}</h3>
                <div class="vacancy__company">
                  <div class="vacancy__company-title">
                    {{ vacancy.company }}
                    <img v-if="vacancy.verified" src="@/assets/img/icons/verified.svg" />
                  </div>
                  <div class="vacancy__company-city">
                    <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #000000" />
                    {{ vacancy.city }}
                  </div>
                </div>
              </div>
            </div>
            <h3 class="vacancy__salary">$ {{ vacancy.salary }}</h3>
          </div>

          <div class="row">
            <div class="vacancy__tags">
              <div v-for="tag in vacancy.tags" :key="tag" class="vacancy__tags-tag">#{{ tag }}</div>
            </div>
            <div class="vacancy__actions">
              <div class="vacancy__actions-save">
                <font-awesome-icon class="fa-lg" :icon="['far', 'heart']" style="color: #000000" />
              </div>
              <button>Відгукнутися</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="vacancy" class="description">
      <div class="container">
        <div class="description__body">
          <div class="description__text">
            {{ vacancy.description }}
          </div>
          <div class="description__usermatch">
            <div class="description__usermatch-title">Збігається з профілем</div>
            <div class="description__usermatch-progress">
              <v-progress-circular
                color="primary"
                :model-value="userMatchValue"
                :size="150"
                :width="8"
                ><h2>{{ userMatchValue }}%</h2></v-progress-circular
              >
            </div>
            <div class="description__usermatch-text">
              <div>Відповідає вашим зарплатним очікуванням</div>
              <div>Frontend developer</div>
              <div>1 рік досвіду</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'

import { useRoute } from 'vue-router'
import { onBeforeMount, computed } from 'vue'
const route = useRoute()

import { useVacanciesStore } from '@/stores/vacancies'
import { ref } from 'vue'
const vacanciesStore = useVacanciesStore()
onBeforeMount(() => {
  vacanciesStore.loadItemById(route.params.id)
})

const vacancy = computed(() => vacanciesStore.getCurrentItem)

const date = computed(() => {
  if (vacanciesStore.getCurrentItem) {
    const date = new Date(vacanciesStore.getCurrentItem.date.seconds * 1000)
    return {
      day: (date.getDate() + 1).toString().padStart(2, '0'),
      month: (date.getMonth() + 1).toString().padStart(2, '0'),
      year: date.getFullYear()
    }
  }
  return null
})

const userMatchValue = ref(45)
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.vacancy {
  &__body {
    background: url('@/assets/img/background/background_blur.jpg') 0 0 / auto 100% no-repeat;
    height: 200px;
    margin: 20px 0 0 0;
    padding: 20px 123px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__about {
    display: flex;
    gap: 20px;
  }

  &__img {
    width: 64px;
    height: 64px;
    overflow: hidden;
    border-radius: 64px;
  }

  &__company {
    display: flex;
    gap: 30px;
    margin: 12px 0 0 0;
  }
  &__info {
    display: flex;
    align-items: center;
    gap: 24px;
    color: #747474;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 26px;
    &-save {
      cursor: pointer;
    }
  }
  &__tags {
    display: flex;
    align-items: center;
    gap: 8px;

    &-tag {
      height: 30px;
      color: white;
      background: #000;
      border-radius: 4px;
      padding: 4px;
      line-height: 150%;
    }
  }
}

.description {
  &__body {
    padding: 20px 123px;
    display: flex;
    gap: 30px;
  }

  &__text {
    max-width: 780px;
    line-height: 150%;
  }

  &__usermatch {
    min-width: 285px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    height: 378px;
    background-color: #e7e7e7;
    &-title {
      font-weight: 700;
      align-self: center;
    }

    &-progress {
      margin: 27px 0 0 0;
      align-self: center;
    }

    &-text {
      margin: 22px 0 0 0;
      :not(:last-child) {
        margin: 0 0 12px 0;
      }
      & div {
        line-height: 150%;
        padding: 0 0 0 30px;
        background: url('@/assets/img/icons/check.svg') 0 -3px no-repeat;
      }
    }
  }
}
@media only screen and (max-width: 980px) {
  .vacancy {
    &__body {
      padding: 20px;
    }
  }
  .description {
    &__body {
      padding: 20px;
    }
  }
}
@media only screen and (max-width: 760px) {
  .vacancy {
    &__body {
      min-height: 260px;
      gap: 10px;
    }
  }

  .description {
    &__body {
      flex-wrap: wrap;
    }
    &__usermatch {
      margin: 0 auto;
    }
  }
  .row {
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
