<template>

    <a href="#card-first" class="button">
        <img src="../assets/icon/arrow_left.svg">
    </a>

</template>

<script>
export default {
    name: 'ButtonScrollLeft'
}
</script>

<style scoped>

    .button {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }

    img {
        transition: all 200ms ease-in-out;
    }

    .button:hover img {
        transform: scale(1.1);
    }

</style>