<template>
    <div class="container is-widescreen">
        <section class="hero">
            <div class="hero-body">
                <p class="title">Edit your Trip : Trip's Name</p>
            </div>
        </section>
        <!-- <section class="px-6">
            <div class="field mt-3">
                <label class="label">Name of Trip</label>
                <div class="control">
                    <input class="input" type="text" placeholder="input Trip's Name" />
                </div>
            </div>
        </section> -->
        <section class="px-6">

            
            <div class="field">
                <label class="label">Add day</label>
                <VueDatePicker v-model="date"></VueDatePicker>
            </div>

            <div class="field">
                <label class="label">Add activity</label>
                <div class="control">
                    <input class="input" type="text" placeholder="input Activity's Time" />
                    
                </div>
                <div class="control mt-3">
                    
                    <input class="input" type="text" placeholder="input Activity's Name" />
                    
                </div>
                <div class="control mt-3">
                    
                    <textarea class="textarea" placeholder="input Activity's Note"></textarea>
                </div>
            </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
                <div class="control">
                    <button @click="$router.go(-1)" class="button is-warning is-light">Cancel</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  }
}
</script>