<template>
    <v-container fluid>
    <div class="upload-comp">
        <div class="descr-text row">
            <span>Upload the data you want to learn with the given model below and submit it to save it in the database so you could choose it from the list below.</span>
        </div>
        <vue-dropzone :options="dropzoneOptions" :useCustomSlot=true duplicateCheck=true id="dropzone" ref="uploadDropzone">
            <div class="dropzone-custom-content">
                <h3 class="dropzone-custom-title"><v-icon x-large>mdi-upload</v-icon></h3>
                <div class="subtitle">Upload your testdata.</div>
            </div>
        </vue-dropzone>
        <div class="descr-text row">
            <span>
                <v-icon small class="text-icon">mdi-alert-circle-outline</v-icon>
                You can delete uploaded files by clicking on them.
            </span>
        </div>
        <div class="text-center">
            <v-btn large color="success">Submit</v-btn>
        </div>
    </div>
    </v-container>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
    name: "TestingUpload",
    components: {
        vueDropzone: vue2Dropzone
    },
    data: function () {
        return {
            dropzoneOptions: {
                url: 'https://httpbin.org/post',
                thumbnailWidth: 200,
                thumbnailHeight: 100,
                maxFilesize: 0.5,
                addRemoveLinks: true,
            }
        }
    }
};
</script>

<style scoped>
    .text-icon {
        margin-top: -0.3rem;
    }
    .descr-text {
        margin: 10px 0;
    }
    .dropzone-custom-title {
        font-size: 1rem;
        color: whitesmoke;
    }
    #dropzone {
        border-radius: 3px;
        background-color: #a563d1;
        color: whitesmoke;
        font-size: 0.9rem;
        transition: 1s ease-in-out;
        border: none;
        max-width: 370px;
        margin: 0 auto;
    }
    #dropzone:hover {
        background-color: #b387d1;
    }
</style>
