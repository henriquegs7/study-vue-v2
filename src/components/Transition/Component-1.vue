<template>
    <div>
        <button @click="estoque++">Adicionar Estoque</button>
        <button @click="estoque--">Deletar Estoque</button>
        <transition name="fade" mode="out-in">
            <p v-if="estoque >= 5" key="estoque">{{ estoque }} Itens em estoque</p>
            <p v-else-if="estoque >= 1 && estoque < 5" key="acabando">
                {{ estoque }} Itens quase acabando
            </p>
            <p v-else key="esgotado">Itens fora de estoque</p>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            estoque: 0
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
