<template>
    <div class="class">
        <h1>This is an Class page</h1>
        <h1>{{ aulas }}</h1>

        <nav>
            <RouterLink :to="{ name: 'javaScript' }">JavaScript</RouterLink>
            <RouterLink :to="{ name: 'node' }">Node.js</RouterLink>
            <RouterLink :to="{ name: 'next' }">Next.js</RouterLink>
        </nav>

        <transition mode="out-in">
            <router-view :key="aulas"></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    props: ['aulas'],
    created() {
        console.log('Esse componente foi criado!')
    },
    beforeRouteEnter(to, from, next) {
        // Antes de entrar no router, não tem acesso ao this
        console.log('beforeRouteEnter')
        console.log(to)
        console.log(from)
        next()
    },
    beforeRouteUpdate(to, from, next): any {
        console.log('route atualizado!')
        console.log(to)
        console.log(from)
        next()
    },
    beforeRouteLeave(to, from, next) {
        // Antes de sair do router
        // next("/") é possível passar outros caminhos para o next()
        console.log('beforeRouteLeave')
        console.log(to)
        console.log(from)

        const comfirmar = confirm('você deseaja sair?')
        if (comfirmar) {
            next()
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
    .class {
        display: flex;
        align-items: center;
        margin-top: 100px;
        flex-direction: column;
    }
}
</style>
