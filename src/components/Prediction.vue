<template>
    <v-container fluid>
        <v-row>By clicking the button below, you can generate predictions with the test-dataset within this example.</v-row>
        <v-row align="center">
            <v-col cols="12" class="text-center">
                <v-btn color="#a563d1"
                       class="ranking-btn"
                       large
                >Generate predictions</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Prediction"
    }
</script>

<style scoped>

</style>