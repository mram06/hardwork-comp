<template>
  <div class="item">
    <div class="row">
      <div class="item__about">
        <div class="item__img">
          <img :src="itemObj.imgSrc" alt="" />
        </div>
        <div>
          <h3>{{ itemObj.title }}</h3>
          <div class="item__company">
            <div class="item__company-title">{{ itemObj.company }}</div>
            <div class="item__company-city">{{ itemObj.city }}</div>
          </div>
        </div>
      </div>
      <h3 class="item__salary">$ {{ itemObj.salary }}</h3>
    </div>
    <div class="row">
      <div class="item__info">
        <div class="item__info-date">
          {{ date.getDate() }}-{{ (date.getMonth() + 1).toString().padStart(2, '0') }}-{{
            date.getFullYear()
          }}
        </div>
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
        <button>Відгукнутися</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemObj: {
    type: Object,
    default: () => ({}),
    required: true
  }
})

const date = new Date(props.itemObj.date.seconds * 1000)
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
    margin: 12px 0 0 0;
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
</style>
