<template>
    <div>
        <div class="admin-new">
            <div class="container">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <ul class="admin-menu">
                        <li>
                            <router-link to="/admin">View Products</router-link>
                        </li>
                        <li>
                            <router-link to="/admin/new">View New</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'Edit',params: {id: 456123}}">View Edit</router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Admin",
        data () {
            return {
            }
        }
    }
</script>

<style scoped>

</style>
