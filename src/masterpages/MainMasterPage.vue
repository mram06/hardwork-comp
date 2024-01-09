<template>
  <div class="wrapper">
    <header class="header">
      <div class="container">
        <div class="header__body">
          <div class="header__row">
            <div class="header__logo">
              <router-link to="/">HARD<span>WORK</span></router-link>
            </div>
            <nav class="header__menu">
              <ul>
                <router-link :to="{ name: 'vacancies' }"><li>Вакансії</li></router-link>
                <router-link :to="{ name: 'company' }"><li>Компанія</li></router-link>
                <router-link :to="{ name: 'analytics' }"><li>Аналітика</li></router-link>
                <router-link :to="{ name: 'media' }"><li>Медіа</li></router-link>
              </ul>
            </nav>
            <div class="header__tools">
              <div class="header__tools-search">
                <img src="@/assets/img/icons/search.svg" />
              </div>
              <div class="header__tools-login">
                <router-link :to="{ name: 'login' }">Увійти</router-link>
              </div>
              <router-link :to="{ name: 'signup' }"><button>Реєстрація</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="content"><slot></slot></main>
    <footer class="footer">
      <div class="container">
        <div class="footer__body">
          <div class="footer__row">
            <div class="footer__logo">
              <router-link to="/">HARD<span>WORK</span></router-link>
            </div>
            <div class="footer__info">
              <ul>
                <router-link to="#"><li>Про сервіс</li></router-link>
                <router-link to="#"><li>FAQ</li></router-link>
              </ul>
              <ul>
                <router-link to="#"><li>Умови користування</li></router-link>
                <router-link to="#"><li>Політика приватності</li></router-link>
              </ul>
            </div>
            <div class="footer__socials">
              <router-link to="#"><img src="@/assets/img/icons/facebook.svg" /></router-link>
              <router-link to="#"><img src="@/assets/img/icons/linkedin.svg" /></router-link>
              <router-link to="#"><img src="@/assets/img/icons/instagram.svg" /></router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  &__body {
    padding: 12px 123px;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 120%;
    vertical-align: middle;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    span {
      font-style: italic;
    }
  }

  &__menu {
    ul {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }

  &__tools {
    display: flex;
    align-items: center;
    gap: 24px;
    &-search {
      cursor: pointer;
    }
  }
}

.footer {
  &__body {
    background: #040404;
    vertical-align: middle;

    padding: 32px 123px;
    a {
      color: white;
    }
    li {
      font-size: 14px;
      line-height: 120%;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-family: 'Poppins', sans-serif;
    font-size: 37.5px;
    line-height: 120%;
    span {
      font-style: italic;
    }
  }

  &__info {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 392px;
    a:first-child li {
      margin: 0 0 8px 0;
    }
  }

  &__socials {
    display: flex;
    gap: 20px;
  }
}
</style>
