<template>
  <div class="container">

    <TheHeader title="Маршуртлар" secondaryTitle="Машиналар" cars/>

    <section class="content">

      <div class="content__sidebar">

        <div class="content__sidebar-inner">
          <div class="card" v-for="(item, index) in routes" :key="index">
            <Accordion>
              <AccordionItem>
                <template slot="accordion-trigger">

                  <div class="card__header">
                    <div class="card__header-photo"
                         :class="{disabled : item.isDisabled}"
                    >
                      <!-- add disabled class in order to make disabled photo-->
                      <span>1</span>
                    </div>

                    <div class="card__header-content">
                      <h5 class="text-lg font-bold">{{ item.title }}</h5>
                      <h6 class="text-base">{{ item.subtitle }}</h6>
                    </div>

                    <div class="card__header-angle">
                      <img src="/assets/icons/angle-down.svg" alt="">
                    </div>

                  </div>

                </template>

                <template slot="accordion-content">

                  <div class="card__content">
                    <div class="card__content-top">
                      <div class="card__content-wrap">
                        <div class="card__content-list">
                          <div class="card__content-icon">
                            <img src="/assets/icons/dot.svg" alt="">
                          </div>

                          <div class="card__content-text">
                            {{ item.from }}
                          </div>
                        </div>

                        <div class="card__content-list">
                          <div class="card__content-icon">
                            <img src="/assets/icons/location-blue.svg" alt="">
                          </div>

                          <div class="card__content-text">
                            {{ item.to }}
                          </div>
                        </div>
                      </div>

                      <div class="card__content-status"
                           :class="{passive : !item.status}"
                      >
                        {{ item.status ? 'Active' : 'Passive' }}
                      </div>
                    </div>
                    <hr class="w-full my-2" style="border-color: #F1F0F0;">

                    <div class="card__content-bottom justify-between">
                      <h6 class="text-base mr-5">{{ item.distance }}</h6>
                      <h5 class="text-lg font-bold">{{ item.speed }}</h5>
                    </div>
                  </div>

                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>


      </div>

      <div class="content__main cars__container">

        <div class="cars">
          <div class="cars__inner">
            <div class="cars__wrap">
              <div class="cars__item" v-for="(car, idx) in cars" :key="idx">
                <div class="cars__item-photo"
                     :class="{active : car.isActive}"
                >

                  <img :src="car.driverPhoto" alt="">
                </div>

                <div class="cars__item-content">
                  <div class="cars__item-header mb-5">
                    <h4 class="text-xl font-bold mb-1">
                      {{ car.driver }}
                    </h4>
                    <h5 class="text-base">
                      {{ car.routes }}
                    </h5>
                  </div>

                  <div class="cars__item-details mb-5">
                    <div class="cars__item-details-column">
                      <div class="cars__item-details-list">
                        <div class="cars__item-icon">
                          <img src="/assets/icons/phone.svg" alt="">
                        </div>

                        <h5 class="cars__item-text">
                          {{ car.phone }}
                        </h5>
                      </div>
                      <div class="cars__item-details-list">
                        <div class="cars__item-icon">
                          <img src="/assets/icons/license.svg" alt="">
                        </div>

                        <h5 class="cars__item-text">
                          {{ car.license }}
                        </h5>
                      </div>
                    </div>
                    <div class="cars__item-details-column">
                      <div class="cars__item-details-list">
                        <div class="cars__item-icon">
                          <img src="/assets/icons/passenger-capacity.svg" alt="">
                        </div>

                        <h5 class="cars__item-text">
                          Йўловчи сиғими: {{ car.passengerCapacity }}
                        </h5>
                      </div>
                      <div class="cars__item-details-list">
                        <div class="cars__item-icon">
                          <img src="/assets/icons/number-of-passengers.svg" alt="">
                        </div>

                        <h5 class="cars__item-text">
                          Йўловчилар сони: {{ car.numberOfPassengers }}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div class="cars__item-bottom">
                    <div class="cars__item-bottom-wrap">
                      <div class="cars__item-bottom-left">
                        <h4 class="text-lg font-bold"> {{ car.carModel }} </h4>
                        <h4 class="text-lg font-bold"> {{ car.carNumber }} </h4>
                      </div>
                      <div class="cars__item-bottom-right">
                        <div class="cars__item-details-list">
                          <div class="cars__item-icon">
                            <img src="/assets/icons/clock.svg" alt="">
                          </div>

                          <h5 class="cars__item-text">
                            {{ car.timeStart }}
                          </h5>
                        </div>

                        <div class="cars__item-details-list">
                          <div class="cars__item-icon">
                            <img src="/assets/icons/clock-red.svg" alt="">
                          </div>

                          <h5 class="cars__item-text">
                            {{ car.timeEnd }}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="cars__item-bottom-actions">
                      <div class="cars__item-status"
                           :class="{passive : !car.status}"
                      >
                        {{ car.status ? 'Active' : 'Passive' }}
                      </div>

                      <AppButton theme="main" height="40">
                        <img src="/assets/icons/message.svg" alt="">
                      </AppButton>

                    </div>


                  </div>

                </div>

              </div>
            </div>
          </div>
          <div class="cars__bottom">
            <div class="cars__bottom-column">
              <div class="cars__bottom-column-inner">

                <div class="location__details">
                  <div class="location__details-item">
                    <b>Шаҳар:</b> Тошкент
                  </div>
                  <div class="location__details-item">
                    <b>Туман:</b> Чилонзор тумани
                  </div>
                  <div class="location__details-item">
                    <b>Маҳалла:</b> Бешқўрғон
                  </div>
                  <div class="location__details-item">
                    <b>Кўча:</b>Оқ йўл, 341 А
                  </div>
                </div>

              </div>
            </div>
            <div class="cars__bottom-column">
              <div class="map">
                <div style="position:relative;overflow:hidden;"><a
                    href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                    style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a
                    href="https://yandex.uz/maps/10335/tashkent/?ll=69.278621%2C41.319143&utm_medium=mapframe&utm_source=maps&z=14"
                    style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — транспорт,
                  навигация, поиск мест</a>
                  <iframe src="https://yandex.uz/map-widget/v1/-/CCUyIETgtC" width="100%" height="370px"
                          frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
import TheHeader from "../components/layouts/TheHeader";
import Accordion from "../components/Shared-components/Accordion";
import AccordionItem from "../components/Shared-components/AccordionItem";
import AppButton from "../components/Shared-components/AppButton";

export default {
  name: "RoutesCars",
  components: {AppButton, AccordionItem, Accordion, TheHeader},
  data() {
    return {

      routes: new Array(20).fill({
        title: "Тошкент-Бухоро",
        subtitle: "Тошкент-Бухоро",
        from: "Тошкент",
        to: "Бухоро",
        distance: "Оралиқ масофа",
        speed: "580км/560км",
        status: true,
        isDisabled: false
      }),
      cars: new Array(6).fill({
        driver: "Эргашев Нозим",
        routes: "Тошкент-Бухоро",
        driverPhoto: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        phone: "998 94 443 12 13",
        license: "№234 11.01.2019",
        passengerCapacity: "4",
        numberOfPassengers: "3",
        carModel: "Нексия",
        carNumber: "A 239 LFA",
        timeStart: "16:20",
        timeEnd: "21:20",
        isActive: true,
        status: true
      }),
    }
  }
}
</script>

<style scoped lang="scss">

.cars {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;

  &__container {
    padding-left: 35px;
    max-height: calc(100vh - 130px);
  }

  &__inner {
    border-radius: 16px;
    height: calc(50% - 42px);
    background: white;
    overflow: hidden;
  }

  &__wrap {
    width: 100%;
    height: 100%;
    padding: 15px 20px;
    overflow: auto;

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-secondary);
    }

  }

  &__item {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid var(--color-border);

    &:first-child {
    }

    &:last-child {
      border-bottom: none;
    }

    &-photo {
      width: 48px;
      min-width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;

      &.active {
        filter: drop-shadow(6px 6px 6px rgba(148, 197, 39, 0.6));
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

      }
    }

    &-content {
      flex: 1 1 auto;

    }

    &-details {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      grid-gap: 0 80px;

      &-list {
        display: flex;
        align-items: center;
        margin-bottom: 7px;

        .cars__item-icon {
          margin-right: 10px;
        }

      }
    }

    &-bottom {
      width: 100%;
      display: flex;
      justify-content: space-between;

      &-wrap {
        flex: 1 1 auto;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 10px 80px;
      }

      &-left {
        display: flex;
        align-items: center;
        min-width: 150px;

      }

      &-right {
        display: flex;

        .cars__item-details-list {
          margin-right: 40px;
        }

      }

      &-actions {
        display: flex;
        align-items: center;
      }

    }

    &-status {
      display: inline-flex;
      color: white;
      padding: 8px 20px;
      background-color: var(--color-secondary);
      border-radius: 8px;
      margin-right: 10px;
    }

  }

  &__bottom {
    width: 100%;
    height: calc(50% - 42px);
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;

    &-column {
      border-radius: 16px;
      overflow: auto;
      background-color: white;
    }
  }

}

.location__details {
  padding: 20px;

  &-item {
    position: relative;
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 20px;

    &::before {
      content: '';
      position: absolute;
      width: 10px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 10px;
      background-color: var(--color-main);
      border-radius: 50%;
      overflow: hidden;
    }


    b {
      font-weight: bold;
    }
  }
}

@media (max-width: 1540px) {
  .cars__container {
    padding-left: 10px;
  }
}

@media (max-width: 1240px) {
  .cars__bottom {
    grid-template-columns: 1fr 1.5fr;
  }
}

@media (max-width: 768px) {

  .cars {
    height: unset;
  }

  .cars__container {
    max-height: unset;
    padding: 0;
  }

  .cars__inner {
    max-height: 400px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 15px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #D5E0FE;
    }

    &::-webkit-scrollbar-thumb {
      position: relative;
      border-radius: 8px;
      background: var(--color-secondary);
      //background-image: url("/assets/icons/scrollbar.svg")!important;

    }

  }

  .cars__bottom {
    max-height: 700px;
    height: unset;
  }

  .cars__bottom {
    grid-template-columns: 1fr;
  }
}


@media (max-width: 500px) {
  .cars__item-bottom {
    flex-wrap: wrap;
    grid-gap: 20px;
  }

  .cars__item-bottom-right {
    img {
      min-width: 14px;
    }
  }

  .cars__item-text {
    font-size: 12px;
  }
}


</style>