<template>
  <aside>
    <h2>Фільтри</h2>
    <div class="filter__category">
      <h3>Професія</h3>
      <div>
        <label v-for="job in professions" :key="job">
          <input type="checkbox" />
          {{ job }}
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Досвід роботи</h3>
      <div>
        <label>
          <input type="checkbox" value="0" />
          Без досвіду
        </label>
        <label>
          <input type="checkbox" value="1" />
          1 рік
        </label>
        <label>
          <input type="checkbox" value="2" />
          2 роки
        </label>
        <label>
          <input type="checkbox" value="3" />
          3 роки
        </label>
        <label>
          <input type="checkbox" value="5" />
          5 років
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Формат роботи</h3>
      <div>
        <label>
          <input type="checkbox" value="remote" />
          Віддалено
        </label>
        <label>
          <input type="checkbox" value="office" />
          Офіс
        </label>
        <label>
          <input type="checkbox" value="hybrid" />
          Гібридний
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Тип зайнятості</h3>
      <div>
        <label>
          <input type="checkbox" value="fulltime" />
          Повна зайнятість
        </label>
        <label>
          <input type="checkbox" value="parttime" />
          Неповна зайнятість
        </label>
        <label>
          <input type="checkbox" value="project" />
          Проєктна робота
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Мова</h3>
      <div>
        <label>
          <input type="checkbox" value="english" />
          Англійська
        </label>
        <label>
          <input type="checkbox" value="ukrainian" />
          Українська
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Місто</h3>
      <div>
        <label>
          <input type="checkbox" value="kyiv" />
          Київ
        </label>
        <label>
          <input type="checkbox" value="odesa" />
          Одеса
        </label>
        <label>
          <input type="checkbox" value="lviv" />
          Львів
        </label>
        <label>
          <input type="checkbox" value="zhytomyr" />
          Житомир
        </label>
        <label>
          <input type="checkbox" value="vinnytsia" />
          Вінниця
        </label>
      </div>
    </div>

    <div class="filter__category">
      <h3>Заробітна плата</h3>
      <div>
        <label>
          <input type="checkbox" value="to500" />
          До 500$
        </label>
        <label>
          <input type="checkbox" value="500to1000" />
          Від 500 до 1000$
        </label>
        <label>
          <input type="checkbox" value="1000to5000" />
          Від 1000 до 5000$
        </label>
        <label>
          <input type="checkbox" value="5000to10000" />
          Від 5000 до 10000$
        </label>
        <label>
          <input type="checkbox" value="more10000" />
          Більше 10000$
        </label>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { professions } from '@/constants/filter'
</script>

<style lang="scss" scoped>
h3 {
  margin: 0 0 20px 0;
}
label {
  display: block;
  margin: 13px 0 0 0;
  &:first-child {
    margin: 0;
  }
}
.filter__category {
  margin: 40px 0 0 0;
}
</style>
