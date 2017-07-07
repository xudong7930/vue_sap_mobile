<template>
    <div class="home_index">
        <h1>hello, vue js</h1>
    </div>
</template>

<script>
export default {
    name: 'home_index',
    created () {
        document.title = 'your are in home_index';

        var url = 'http://api.mallmg.com/api/v1/index/categorys2'
        this.$http.get(url)
            .then((response) => {
                console.info(response.data);
            })
            .catch((error) => {
                console.info(error);
            })
    }
}
</script>

<style scoped>

</style>
