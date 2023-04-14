<template>
    <div class="container is-widescreen">
        <section class="hero">
            <div class="hero-body">
                <p class="title">Create a new Trip</p>
            </div>
        </section>
        <section class="px-6">
            <div class="field mt-3">
                <label class="label">Name of Trip</label>
                <div class="control">
                    <input class="input" type="text" placeholder="input Trip's Name" v-model="TripName" />
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column">
                <section class="px-6">
                    <div class="field" v-for="(day, index) in addDays" :key="index">
                        <label class="label">Add day</label>
                        <VueDatePicker v-model="date"></VueDatePicker>
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
                        <Button class="button" v-model="addActivity" @click="addActivity = true">Add more Activity</Button>
                    </div>

                    <div class="field" v-if="addActivity == true" >
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
                    
                </section>
                <section class="px-6">
                    <Button class="button" v-model="addDays" @click="addDays++">Add day</Button>
                </section>
                <div class="field is-grouped mt-6 ml-6">
                        <div class="control">
                            <button class="button is-primary">Submit</button>
                        </div>
                        <div class="control">
                            <button @click="$router.go(-1)" class="button is-warning is-light">Cancel</button>
                        </div>
                    </div>
            </div>
            
        </div>

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
            TripName: '',
            addActivity: false,
            addDay: false,
            addDays: 0
        };
    }
}
</script>