<template>
    <button @click="componenteAtivo = 'Transition1'">Transition 1</button>
    <button @click="componenteAtivo = 'Transition2'">Transition 2</button>

    <transition name="fade" mode="out-in">
        <keep-alive>
            <component :is="componenteAtivo"></component>
        </keep-alive>
    </transition>
</template>

<script lang="ts">
import Transition1 from './Transition-1.vue'
import Transition2 from './Transition-2.vue'

export default {
    name: 'app',
    components: { Transition1, Transition2 },
    data() {
        return {
            componenteAtivo: 'Transition1'
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
