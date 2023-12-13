<template>
    <!-- <ul> -->
    <transition-group tag="ul" name="fade" mode="out-in">
        <li v-for="(produto, index) in carrinho" :key="produto.nome">
            <p>{{ produto.nome }}</p>
            <p>R$ {{ produto.preco }}</p>
            <button @click="remover(index)">Remover</button>
        </li>
    </transition-group>
    <!-- </ul> -->
</template>

<script lang="ts">
export default {
    data() {
        return {
            carrinho: [
                {
                    nome: 'Notebook',
                    preco: 2399
                },
                {
                    nome: 'Smartphone',
                    preco: 1399
                }
            ]
        }
    },
    methods: {
        remover(index: number) {
            this.carrinho.splice(index, 1)
        }
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translate3d(-20px, 0, 0);
}
</style>
