<template>
    <div class="layout-container">
        <header>
            <h1>ZR_UI</h1>
            <ul class="header-nav-container">
                <li>
                    <router-link to="/companion">指南</router-link>
                </li>
                <li>
                    <router-link to="/">组件</router-link>
                </li>
            </ul>
        </header>
        <section>
            <aside>
                <ul>
                    <li class="nav_link" v-for="child in routes[0].children" :key="child.path">
                        <router-link active-class="active-link" :to="child.path">{{ child.name }}</router-link>
                    </li>
                </ul>

            </aside>
            <main>
                <router-view></router-view>
            </main>
        </section>
    </div>
</template>
<script setup lang="ts">
import { routes } from '../router/index'

</script>
<style lang="scss" scoped>
.layout-container {
    max-width: 1200px;
    margin: 0 auto;

    header {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        height: 18vh;
        color: $main-color;
        border-bottom: 1px solid $main-color;

        h1 {
            height: 100px;
            line-height: 100px;
            letter-spacing: 1em;

        }

        .header-nav-container {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            align-items: center;


            li {
                margin: 0 20px;

                a {
                    color: $main-color;
                }
            }
        }
    }

    section {
        display: flex;

        >aside {
            height: 82vh;
            width: 100px;
            overflow: hidden;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 0px;
            }

            /* 滚动条滑块 */
            &::-webkit-scrollbar-thumb {
                height: 6px !important;
                border-radius: 10px;
                background-color: $primary;
                transition: background-color .3s;
            }

            &:hover {
                &::-webkit-scrollbar {
                    width: 4px;
                }
            }

            ul {
                li {
                    height: 50px;
                    line-height: 50px;

                    a {
                        display: block;
                        color: $main-shallow-color;
                        transition: all 0.7;

                        &:hover {
                            color: $main-color;
                        }
                    }


                }
            }
        }

        >main {
            box-sizing: border-box;
            height: 82vh;
            padding: 10px;
            flex: 1;
            overflow: hidden;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 0px;
            }

            /* 滚动条滑块 */
            &::-webkit-scrollbar-thumb {
                height: 6px !important;
                border-radius: 10px;
                background-color: $primary;
                transition: background-color .3s;
            }

            &:hover {
                &::-webkit-scrollbar {
                    width: 4px;
                }
            }
        }
    }
}

.active-link {
    color: $main-color !important;
    padding-left: 10px;
    animation: bordershow 0.3s ease;
    animation-fill-mode: forwards;
}

@keyframes bordershow {
    to {
        border-bottom: 1px solid $main-color;
        font-size: 18px;
    }
}
</style>