<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>
<script>
    export default {
        name: 'app',
    }
</script>
<style>
    .fade-enter{opacity:0.1}
    .fade-enter-active{transition:opacity 0.2s ease}
    .fade-leave-active{transition:opacity 0.2s ease;opacity:0}
</style>