<template>

    <a class="button">
        <img src="../assets/icon/arrow_right.svg">
    </a>

</template>

<script>
export default {
    name: 'ButtonScrollRight'
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