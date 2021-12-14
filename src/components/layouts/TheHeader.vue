<template>
  <header class="header">

    <div class="header__left header__details">

      <h3 class="header__title">
        {{ title }}
      </h3>

      <div class="header__search">
        <AppButton theme="main"
                   sides="10"
                   height="40"
                   font-size="16"
                   @click="searchActive = !searchActive"
        >
          <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
        </AppButton>
        <transition name="ease-out">
          <div class="header__search-wrap"
               v-if="searchActive"
          >
            <div class="header__search-wrap-inner">
              <div class="header__search-wrap-container">
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link active">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
                <div class="header__search-item">
                  <router-link to="#!" class="header__search-link">Тошкент-Бухоро</router-link>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="header__settings">
        <AppButton theme="main" sides="15" height="40" font-size="16">
          <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
        </AppButton>
      </div>

    </div>

    <div class="header__right">

      <div class="header__right-inner">

        <div class="header__details" v-if="cars">
          <h3 class="header__title">
            {{ secondaryTitle }}
          </h3>

          <div class="header__search">
            <AppButton theme="main" sides="10" height="40" font-size="16">
              <img src="/assets/icons/search.svg" style="width: 20px;" alt="">
            </AppButton>
          </div>

          <div class="header__settings">
            <AppButton theme="main" sides="15" height="40" font-size="16">
              <img src="/assets/icons/settings-2.svg" style="width: 20px;" alt="">
            </AppButton>
          </div>
        </div>

        <div class="header__date">
          Жума, 12 ноябр 2021
        </div>

        <div class="header__logo">
          <img src="/assets/icons/logo.svg" alt="">
        </div>
      </div>

    </div>

  </header>
</template>

<script>
import AppButton from "../Shared-components/AppButton";

export default {
  name: "TheHeader",
  components: {AppButton},
  props: {
    title: {
      type: String,
      default: ""
    },
    secondaryTitle: {
      type: String,
      default: ""
    },

    cars: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchActive: false
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  &__details {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    grid-gap: 20px;
    margin-right: 60px;
  }

  &__left {
    max-width: 340px;
    width: 100%;

  }

  &__right {
    max-width: calc(100% - 400px);
    width: 100%;

    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }

  &__title {
    color: var(--color-secondary);
    font-size: 30px;
    font-weight: 600;
  }

  &__date {
    color: white;
    background-color: var(--color-secondary);
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 8px;
    margin-left: auto;
  }

  &__logo {
    max-width: 58px;
    width: 100%;
    margin-left: 96px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__search {
    position: relative;

    &-wrap {
      position: absolute;
      z-index: 10;
      top: calc(100% + 10px);
      width: 220px;

      &-container {
        max-height: 150px;
        height: 100%;
        overflow: auto;
        padding: 10px 15px;

        /* width */
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #fff;
          border-radius: 16px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: var(--color-secondary);
          border-radius: 16px;
        }
      }

      &-inner {
        border: 1px solid var(--color-secondary);
        background-color: var(--color-bg);
        border-radius: 16px;
        overflow: hidden;
      }
    }

    &-item {


      &:last-child {
        .header__search-link {
          border-bottom: none;
        }
      }
    }

    &-link {
      display: flex;
      align-items: center;
      padding: 6px 0;
      font-size: 16px;
      line-height: normal;
      color: #6D6D6D;
      border-bottom: 1px solid #80808052;

      &.active {
        color: var(--color-secondary);
      }

      &:hover {
        color: var(--color-secondary);
      }
    }

  }
}

</style>