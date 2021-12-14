<template>
  <div class="container">

    <TheHeader title="Манзиллар"/>

    <section class="content">

      <div class="content__sidebar">

        <div class="content__sidebar-inner addresses">
          <div class="card">
            <div class="card__item" v-for="(item, index) in routes" :key="index">
              <div class="card__header">
                <div class="card__header-photo"
                     :class="{active : item.isActive}"
                >
                  <!-- add disabled class in order to make disabled photo-->
                  <span>1</span>
                </div>

                <div class="card__header-content">
                  <h5 class="text-lg font-bold">{{ item.title }}</h5>
                  <h6 class="text-base">{{ item.subtitle }}</h6>
                </div>

              </div>
              <div class="card__content">
                <div class="card__content-top mb-2">
                  <div class="card__content-wrap">
                    <div class="card__content-list">
                      <div class="card__content-icon">
                        <img src="/assets/icons/coordinates.svg" alt="">
                      </div>

                      <div class="card__content-text">
                        {{ item.coordinates }}
                      </div>
                    </div>

                    <div class="card__content-list">
                      <div class="card__content-icon">
                        <img src="/assets/icons/location-blue.svg" alt="">
                      </div>

                      <div class="card__content-text">
                        {{ item.location }}
                      </div>
                    </div>
                  </div>

                  <div class="card__content-status"
                       :class="{passive : !item.status}"
                  >
                    {{ item.status ? 'Active' : 'Passive' }}
                  </div>
                </div>

                <div class="addresses">

                  <div class="addresses__item">
                    <div class="addresses__item-icon green"></div>

                    <div class="addresses__item-content">
                      <h4 class="text-lg mb-1"> {{ item.leftLocation.title }} </h4>
                      <h5 class="text-base">
                        <span class="text-tiny mr-5"> {{ item.leftLocation.name }} </span>
                        <span class="text-tiny font-bold"> {{ item.leftLocation.distance }} </span>
                      </h5>
                    </div>
                  </div>

                  <div class="addresses__item">
                    <div class="addresses__item-icon red"></div>

                    <div class="addresses__item-content">
                      <h4 class="text-lg mb-1"> {{ item.rightLocation.title }} </h4>
                      <h5 class="text-base">
                        <span class="text-tiny mr-5"> {{ item.rightLocation.name }} </span>
                        <span class="text-tiny font-bold"> {{ item.rightLocation.distance }} </span>
                      </h5>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>


      </div>

      <div class="content__main">
        <div class="map">
          <div style="position:relative;overflow:hidden;"><a
              href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
              style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a
              href="https://yandex.uz/maps/10335/tashkent/?ll=69.278621%2C41.319143&utm_medium=mapframe&utm_source=maps&z=14"
              style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — транспорт,
            навигация, поиск мест</a>
            <iframe src="https://yandex.uz/map-widget/v1/-/CCUyIETgtC" width="100%" height="800px"
                    frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import TheHeader from "../components/layouts/TheHeader";

export default {
  name: "Addresses",
  components: {TheHeader},
  data() {
    return {
      routes: [
        {
          title: "Тошкент",
          coordinates: "Тошкент-Бухоро",
          location: "Асосий",
          status: true,
          isActive: true,
          leftLocation: {
            title: "Чапдаги манзил",
            name: "Чиноз",
            distance: "10 км"
          },
          rightLocation: {
            title: "Ўнг манзил",
            name: "Чиноз",
            distance: "20 км"
          }
        },
        {
          title: "Тошкент",
          coordinates: "Тошкент-Бухоро",
          location: "Асосий",
          status: true,
          isActive: true,
          leftLocation: {
            title: "Чапдаги манзил",
            name: "Чиноз",
            distance: "10 км"
          },
          rightLocation: {
            title: "Ўнг манзил",
            name: "Чиноз",
            distance: "20 км"
          }
        },
        {
          title: "Тошкент",
          coordinates: "Тошкент-Бухоро",
          location: "Асосий",
          status: true,
          isActive: true,
          leftLocation: {
            title: "Чапдаги манзил",
            name: "Чиноз",
            distance: "10 км"
          },
          rightLocation: {
            title: "Ўнг манзил",
            name: "Чиноз",
            distance: "20 км"
          }
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">

.addresses {

  &__item {
    display: flex;
    width: 100%;
    margin-bottom: 13px;

    &:last-child {
      margin-bottom: 0;
    }

    &-icon {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #80D739;
      margin-right: 10px;
      margin-top: 6px;

      &.green {
        background-color: #80D739;
      }

      &.red {
        background-color: var(--color-main);
      }
    }

    &-content {
    }
  }

}

.addresses {

  .card {
    padding: 25px;
  }

  .card__header {
    padding: 0;
    margin: 25px 0 !important;
  }

  .card__content {
    padding: 0;
    margin: 25px 0 !important;
  }

  .card__item {
    border-bottom: 1px solid var(--color-border);

    &:first-child {
      .card__header {
        margin-top: 0 !important;
      }


    }

    &:last-child {
      border-bottom: none;

      .card__content {
        margin-bottom: 0 !important;
      }
    }

  }
}

</style>