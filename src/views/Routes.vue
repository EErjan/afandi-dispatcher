<template>
    <div class="container">

        <TheHeader title="Маршуртлар"/>

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
                                            <h5 class="text-lg md:text-base font-bold">{{ item.title }}</h5>
                                            <h6 class="text-base md:text-tiny">{{ item.subtitle }}</h6>
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

                                            <div class="card__content-status md:text-tiny"
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
        name: "Routes",
        components: {AccordionItem, Accordion, TheHeader},
        data() {
            return {
                routes: [
                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: true
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: false,
                        isDisabled: true
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: true
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: false,
                        isDisabled: true
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },

                    {
                        title: "Тошкент-Бухоро",
                        subtitle: "Тошкент-Бухоро",
                        from: "Тошкент",
                        to: "Бухоро",
                        distance: "Оралиқ масофа",
                        speed: "580км/560км",
                        status: true,
                        isDisabled: false
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">


</style>