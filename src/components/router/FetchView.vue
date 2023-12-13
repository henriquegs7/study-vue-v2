<template>
    <div class="fetch">
        <h2>Ações</h2>
        <router-link to="/router/fetch/aapl">Apple</router-link>
        <router-link to="/router/fetch/fb">Facebook</router-link>

        <transition mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .fetch {
        display: flex;
        align-items: center;
        margin-top: 100px;
        flex-direction: column;
    }
}
</style>
