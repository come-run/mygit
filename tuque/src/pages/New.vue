<template>
    <div>
        <ProductForm :manufacturers="manufacturers" />
    </div>
</template>

<script>
    import ProductForm from '@/components/ProductForm.vue';
    export default {
        name: "New",
        components: { ProductForm },
        data () {
            return {
                manufacturers: '123456789'
            }
        }
    }
</script>

<style scoped>

</style>
