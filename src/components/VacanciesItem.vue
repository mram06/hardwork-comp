<template>
  <div class="item">
    <div class="row">
      <div class="item__about">
        <div class="item__img">
          <img :src="itemObj.imgSrc" alt="" />
        </div>
        <div>
          <router-link :to="{ name: 'vacancy', params: { id: itemObj.id }, props: itemObj }"
            ><h3>{{ itemObj.title }}</h3></router-link
          >
          <div class="item__company">
            <div class="item__company-title">
              {{ itemObj.company }}
              <img v-if="itemObj.verified" src="@/assets/img/icons/verified.svg" />
            </div>
            <div class="item__company-city">
              <font-awesome-icon :icon="['fas', 'location-dot']" style="color: #000000" />
              {{ itemObj.city }}
            </div>
          </div>
        </div>
      </div>
      <h3 class="item__salary">$ {{ itemObj.salary }}</h3>
    </div>
    <div class="row item__bottom">
      <div class="item__info">
        <div class="item__info-date">{{ date.day }}-{{ date.month }}-{{ date.year }}</div>
        <div class="item__info-views">
          <img src="@/assets/img/icons/views.svg" /> {{ itemObj.views }}
        </div>
        <div class="item__info-responds">
          <img src="@/assets/img/icons/responds.svg" /> {{ itemObj.responds }}
        </div>
      </div>
      <div class="item__actions">
        <div class="item__actions-save">
          <font-awesome-icon class="fa-lg" :icon="['far', 'heart']" style="color: #000000" />
        </div>
        <button>{{ $t('buttons.respond') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  itemObj: {
    type: Object,
    default: () => ({}),
    required: true
  }
})

const date = computed(() => {
  const date = new Date(props.itemObj.date.seconds * 1000)
  return {
    day: (date.getDate() + 1).toString().padStart(2, '0'),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    year: date.getFullYear()
  }
})
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
}
.item {
  border-radius: 20px;
  background: #e1e1e1;
  min-height: 193px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  &__company-title {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  &__company-city {
  }

  &__salary {
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
}
@media only screen and (max-width: 760px) {
  .item {
    padding: 10px;
    &__bottom {
      flex-direction: column;
      gap: 20px;
    }
    &__actions {
      align-self: flex-end;
    }
  }
}
@media only screen and (max-width: 480px) {
  .item {
    &__about {
      gap: 10px;
    }
  }
}
</style>
