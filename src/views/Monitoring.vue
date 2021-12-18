<template>
    <div class="container">

        <TheHeader title="Мониторинг"/>

        <section class="content">

            <div class="content__sidebar monitoring__sidebar">

                <div class="content__sidebar-inner">
                    <div class="card" v-for="(item, index) in monitoring" :key="index">
                        <Accordion>
                            <AccordionItem>
                                <template slot="accordion-trigger">
                                    <div class="card__header">
                                        <div class="card__header-photo">
                                            <img :src="item.photo" alt="">
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
                                        <div class="card__content-wrap">
                                            <h5 class="text-large font-bold mb-4 ml-5">
                                                <span class="mr-2">{{ item.carModel }}</span>
                                                <span>{{ item.carNumber }}</span>
                                            </h5>
                                            <div class="mb-7">
                                                <div class="card__content-list">
                                                    <div class="card__content-icon">
                                                        <img src="/assets/icons/passenger-capacity.svg" alt="">
                                                    </div>

                                                    <h5 class="card__content-text text-base">
                                                        Йўловчи сиғими:{{ item.passengerCapacity }}
                                                    </h5>
                                                </div>
                                                <div class="card__content-list">
                                                    <div class="card__content-icon">
                                                        <img src="/assets/icons/number-of-passengers.svg" alt="">
                                                    </div>

                                                    <h5 class="card__content-text text-base">
                                                        Йўловчилар сони: {{ item.numberOfPassengers }}
                                                    </h5>
                                                </div>
                                            </div>

                                            <div class="timeline mb-3">

                                                <div class="timeline__item" v-for="(route, idx) in item.routes"
                                                     :key="idx">
                                                    <div class="timeline__item-icon">
                                                    </div>

                                                    <div class="timeline__item-content">
                                                        <h4>{{ route.title }} </h4>
                                                        <h5 class="flex flex-wrap">
                                                            <img src="/assets/icons/clock.svg" class="mr-3" alt="">
                                                            <span class="mr-3"> {{ route.time }} </span>
                                                            <span> {{ route.distance }} </span>
                                                        </h5>
                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                       <div class="flex justify-end">
                                           <div class="card__content-status"
                                                :class="{passive : !item.status}">
                                               {{ item.status ? 'Active' : 'Passive' }}
                                           </div>
                                       </div>
                                    </div>

                                </template>
                            </AccordionItem>
                        </Accordion>
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
    import Accordion from "../components/Shared-components/Accordion";
    import AccordionItem from "../components/Shared-components/AccordionItem";

    export default {
        name: "Monitoring",
        components: {AccordionItem, Accordion, TheHeader},
        data() {
            return {
                monitoring: [
                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        passengerCapacity: "4",
                        numberOfPassengers: "3",
                        status: true,
                        routes: [
                            {
                                title: "Тошкент",
                                time: "16:20",
                                distance: "580км"
                            },
                            {
                                title: "Жиззах",
                                time: "18:20",
                                distance: "310км"
                            },
                            {
                                title: "Жиззах2",
                                time: "18:20",
                                distance: "310км"
                            },
                            {
                                title: "Бухоро",
                                time: "21:20",
                                distance: ""
                            },
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .timeline {
        &__item {
            position: relative;
            padding-bottom: 20px;
            display: flex;

            &::before {
                content: '';
                position: absolute;
                left: 5px;
                top: 2px;
                width: 2px;
                height: 100%;
                background-color: #C4C4C4;
            }

            &:first-child {
                .timeline__item-icon {
                    width: 11px;
                    height: 11px;
                    border-radius: 50%;
                    background-color: var(--color-secondary);
                }

            }

            &:last-child {

                &::before {
                    display: none!important;
                    content: ''!important;
                }

                .timeline__item-content {
                    h4 {
                        color: var(--color-main);
                    }
                }
                .timeline__item-icon {
                    width: 11px;
                    height: 17px;
                    background-color: transparent;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url("/assets/icons/location-red.svg");

                }
            }

            &-icon {
                position: relative;
                z-index: 5;
                margin-right: 10px;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background-color: #A1CB44;
                margin-top: 2px;
            }

            &-content {
                h4 {
                    font-weight: 600;
                    font-size: 14px;
                }

            }

        }



    }

    .monitoring__sidebar {
        max-height: unset!important;
    }


</style>