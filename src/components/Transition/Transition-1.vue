<template>
    <div>
        <button @click="ativo = !ativo">Ativar</button>
        <transition name="fade">
            <h1 v-show="ativo">Serviços</h1>
        </transition>

        <!-- Custom Classes -->
        <!-- <transition name="fade" enter-class="aparecer" enter-active-class="animar" leave-active-class="esconder">
            <h1 v-show="ativo">Serviços</h1>
        </transition> -->

        <!-- Hooks -->
        <transition name="fade" @before-enter="beforeEnter" @enter="enter">
            <h1 v-show="ativo">Serviços</h1>
        </transition>

        <!-- Appear -->
        <transition appear name="fade">
            <h1>Serviços appear</h1>
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            ativo: false
        }
    },
    methods: {
        beforeEnter(elemento: any) {
            console.log('Elemento entrando')
            console.log(elemento)
        },
        enter(elemento: any) {
            console.log('Elemento entrou')
            console.log(elemento)
        }
    }
}
</script>

<style>
/* 
  v-enter (adicionada antes do elemento ser inserido)
  v-enter-active (adicionada durante a animação)
  v-enter-to (adicionada assim que a animação termina)
  v-leave (adicionada assim que o elemento começa a sair)
  v-leave-active (adicionada enquanto o elemento está saindo)
  v-leave-to (adicionada quando o elemento saiu)
  
  São classes adicionadas pelos vue.
  O nome inicial (v) depende do atributo name
  */

.fade-enter-active,
.fade-leave-active {
    transition: opacity 5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
