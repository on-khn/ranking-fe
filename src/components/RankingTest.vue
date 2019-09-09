<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <span>Select a dataset from below to train it.</span>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12">
                <v-select
                    :items="testSets"
                    filled
                    label="Select dataset to be trained"
                    disabled
                    ></v-select>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" class="text-center">
                <v-btn color="#a563d1" class="ranking-btn"
                       large
                        v-on:click="this.train"
                        >Start training</v-btn>
            </v-col>
        </v-row>
        <v-row v-if="loading&&clicked" align="center">
            <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
            ></v-progress-circular>
        </v-row>
        <v-row v-if="!loading" align="center">
            Time spent: {{this.results}}
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "RankingTest",
        data: () => ({
            trainerUrl: "localhost:5000/train/training",
            testSets: [],
            results: null,
            loading: true,
            errored: false,
            clicked: false,
        }),
        mounted() {

        },
        methods: {
            train(){
                this.clicked = true;
                this.loading = true;
                axios
                    .get(this.trainerUrl)
                    .then(response => (this.results = response))
                    .catch(error => {
                        console.log(error);
                        this.errored = true;
                    })
                    .finally(this.loading = false, this.clicked = false)
            }
        }
    }
</script>

<style scoped>
    .ranking-btn {
        color: whitesmoke;
    }
</style>