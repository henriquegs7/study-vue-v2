<script lang="ts">
import Transition1 from '../components/Transition/Transition-1.vue'
import Transition2 from '../components/Transition/Transition-2.vue'
import Component1 from '../components/Transition/Component-1.vue'
import Component2 from '../components/Transition/Component-2.vue'
import List from '../components/Transition/List.vue'
import Move from '../components/Transition/Move.vue'

export default {
    name: 'app',
    components: { Transition1, Transition2, Component1, Component2, List, Move },
    data() {
        return {
            componenteAtivo: ''
        }
    }
}
</script>

<template>
    <div class="animations">
        <h1>This is an Animations page</h1>

        <div class="buttons">
            <button @click="componenteAtivo = 'Transition1'">Transition 1</button>
            <button @click="componenteAtivo = 'Transition2'">Transition 2</button>
            <button @click="componenteAtivo = 'Component1'">Component 1</button>
            <button @click="componenteAtivo = 'Component2'">Component 2</button>
            <button @click="componenteAtivo = 'List'">List</button>
            <button @click="componenteAtivo = 'Move'">Move</button>
        </div>

        <keep-alive>
            <component :is="componenteAtivo"></component>
        </keep-alive>
    </div>
</template>

<style scoped>
.animations {
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-top: 100px;
    width: 100%;
}

h1 {
    margin-bottom: 20px;
}

.buttons {
    margin-bottom: 50px;
}

button {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

button:hover {
    cursor: pointer;
    background-color: hsla(160, 100%, 37%, 0.2);
}

@media (min-width: 1024px) {
    .animations {
        min-height: 100vh;
    }
}
</style>
