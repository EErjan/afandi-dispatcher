<template>
    <div class="container">

        <TheHeader title="Ҳайдовчилар"/>

        <section class="content">

            <div class="content__sidebar">

                <div class="content__sidebar-inner">
                    <div class="card" v-for="(item, index) in routes" :key="index">
                        <Accordion>
                            <AccordionItem>
                                <template slot="accordion-trigger">

                                    <div class="card__header">
                                        <div class="card__header-photo"
                                             :class="{active : item.isActive}"
                                        >
                                            <!-- add disabled class in order to make disabled photo-->
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
                                        <div class="card__content-top">
                                            <div class="card__content-wrap">
                                                <div class="card__content-list">
                                                    <div class="card__content-icon">
                                                        <img src="/assets/icons/phone.svg" alt="">
                                                    </div>

                                                    <div class="card__content-text">
                                                        <a :href="`tel:${item.phone}`">
                                                            {{ item.phone }}
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="card__content-list">
                                                    <div class="card__content-icon">
                                                        <img src="/assets/icons/license.svg" alt="">
                                                    </div>

                                                    <div class="card__content-text">
                                                        {{ item.license }}
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
                                            <h6 class="text-base font-bold mr-5">{{ item.carModel}}</h6>
                                            <h5 class="text-lg font-bold">{{ item.carNumber }}</h5>
                                        </div>
                                    </div>

                                </template>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>


            </div>

            <div class="content__main">

                <div class="driver">
                    <div class="driver__column driver__info">
                        <div class="driver__column-inner">
                            <div class="driver__column-content">
                                <div class="driver__column-photo">
                                    <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                         alt="">
                                </div>
                                <h4 class="text-xl font-bold mb-1">
                                    Эргашев Нозим
                                </h4>
                                <h5 class="text-base">Ҳайдовчи</h5>
                            </div>

                            <AppButton theme="white" height="40" style="width: 100%" radius="16" weight="500">
                                Start a chat
                            </AppButton>


                        </div>

                    </div>
                    <div class="driver__column  driver__car-info">
                        <div class="driver__column-inner">
                            <div class="driver__column-content">
                                <h4 class="text-xl font-bold mb-1">
                                    <span class="mr-4">Нексия</span>
                                    <span>A 239 LFA</span>
                                </h4>

                                <div style="min-height: 30px;">
                                    <AppRating/>
                                </div>
                                <hr class="w-full my-2" style="border-color: #ffffff61;">

                                <h5 class="text-base font-medium mb-1"></h5>
                                <h5 class="flex justify-between py-1">
                                    <span class="text-base mr-2">Passengers</span>
                                    <span class="text-base">3 persons</span>
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div class="driver__column">
                        <div class="driver__column-inner">
                            <div class="driver__column-content">
                                <h4 class="text-xl font-bold mb-1">
                                    <span class="mr-4">Функция</span>
                                </h4>

                                <div style="min-height: 30px;">
                                </div>
                                <hr class="w-full my-2" style="border-color: #ffffff61;">

                                <h5 class="text-base font-medium mb-1"></h5>
                                <h5 class="flex justify-between py-1">
                                    <span class="text-base mr-2"></span>
                                    <span class="text-base"></span>
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div class="driver__column">
                        <div class="driver__column-inner">
                            <div class="driver__column-content">
                                <h4 class="text-xl font-bold mb-1">
                                    <span class="mr-4">Иш режими</span>
                                </h4>

                                <div style="min-height: 30px;">
                                </div>
                                <hr class="w-full my-2" style="border-color: #ffffff61;">

                                <h5 class="text-base font-medium mb-1"></h5>
                                <h5 class="flex justify-between py-1">
                                    <span class="text-base mr-2"></span>
                                    <span class="text-base"></span>
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div class="driver__column">
                        <div class="driver__column-inner">
                            <div class="driver__column-content">
                                <h4 class="text-xl font-bold mb-1">
                                    <span class="mr-4">Иш фаолияти</span>
                                </h4>

                                <div style="min-height: 30px;">
                                </div>
                                <hr class="w-full my-2" style="border-color: #ffffff61;">

                                <h5 class="text-base font-medium mb-1"></h5>
                                <h5 class="flex justify-between py-1">
                                    <span class="text-base mr-2"></span>
                                    <span class="text-base"></span>
                                </h5>

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
    import AppRating from "../components/Shared-components/AppRating";

    export default {
        name: "Routes",
        components: {AppRating, AppButton, AccordionItem, Accordion, TheHeader},
        data() {
            return {
                routes: [
                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        phone: "998 94 443 12 13",
                        license: "№234 11.01.2019",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        status: true,
                        isActive: true
                    },

                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1615208429553-d9982932ca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        phone: "998 94 443 12 13",
                        license: "№234 11.01.2019",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        status: true,
                        isActive: false
                    },

                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
                        phone: "998 94 443 12 13",
                        license: "№234 11.01.2019",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        status: true,
                        isActive: false
                    },

                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        phone: "998 94 443 12 13",
                        license: "№234 11.01.2019",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        status: true,
                        isActive: false
                    },

                    {
                        title: "Эргашев Нозим",
                        subtitle: "Тошкент-Бухоро",
                        photo: "https://images.unsplash.com/photo-1600603405959-6d623e92445c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        phone: "998 94 443 12 13",
                        license: "№234 11.01.2019",
                        carModel: "Нексия",
                        carNumber: "A 239 LFA",
                        status: true,
                        isActive: false
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    .driver {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 24px;
        padding: 0 20px;

        &__column {
            width: 100%;
            min-height: 310px;
            border-radius: 16px;
            background-color: var(--color-secondary);


            &-photo {
                width: 72px;
                height: 72px;
                border-radius: 50%;
                overflow: hidden;
                margin-bottom: 20px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            &-inner {
                display: flex;
                align-items: flex-start;
                justify-content: flex-end;
                flex-direction: column;
                height: 100%;
                width: 100%;
                padding: 16px;
            }

            &-content {
                color: white;
                width: 100%;
                min-height: 107px;

                h4, h5 {
                    color: white;
                }
            }


        }

        &__info {
            position: relative;

            .driver__column-inner {
                position: relative;
                z-index: 2;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 100%;
                width: 100%;
                padding: 16px;
            }

            .driver__column-content {
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 100%;
            }


            &::before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url("/assets/img/png/driver-info-bg.png");
                background-repeat: repeat;
            }
        }

        &__car-info {
            position: relative;

            &::before {
                content: '';
                position: absolute;
                z-index: 1;
                top: -20px;
                right: -5px;
                width: 110px;
                height: 120px;
                background-image: url("/assets/icons/driver-info-icon.svg");
                background-repeat: no-repeat;
                background-size: 100%;
            }
        }
    }

    @media (max-width: 1240px) {
        .driver {
            grid-gap: 15px;
            padding: 0;

            .a-btn {
                font-size: 14px;
                font-weight: 500;
            }
        }
    }

    @media (max-width: 991px) {
        .driver {
            padding: 0 20px;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 768px) {
        .driver {
            padding: 0;
        }
    }

    @media (max-width: 500px) {
        .driver {
            grid-template-columns: 1fr;
            padding: 0 20px;
        }
    }


</style>