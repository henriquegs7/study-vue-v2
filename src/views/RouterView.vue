<template>
    <div class="router">
        <h1>This is an Router page</h1>
        <button @click="navegarCursos">HOME</button>
        <nav>
            <RouterLink to="/router/aulas">Aulas</RouterLink>
            <RouterLink to="/router/descricao">Descriçao</RouterLink>
            <RouterLink to="/router/fetch">Fetch</RouterLink>
        </nav>

        <transition mode="out-in">
            <router-view :key="router"></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    props: ['router'],
    methods: {
        navegarCursos() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
    transform: translate3d(-20px, 0, 0);
    opacity: 0;
}
@media (min-width: 1024px) {
    .router {
        height: 100vh;
        display: flex;
        align-items: center;
        margin-top: 100px;
        flex-direction: column;
    }

    nav {
        width: 200px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
