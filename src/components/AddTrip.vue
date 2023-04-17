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
                    <input class="input" type="text" placeholder="Trip's Name" v-model="trip.name" />
                </div>
            </div>
        </section>
        <div class="columns">
            <div class="column">
                <section class="px-6">
                    <div class="field" v-for="(day, index) in trip.days" :key="index">
                        <label class="label">Day: {{ dateformat(day.date) }}</label>
                        <Datepicker disabledTime="true" v-model="day.date"></Datepicker>
                        <div class="field" v-for="(activity, index) in day.activities" :key="index">
                            <label class="label">Activity: {{ activity.name }}</label>
                            <div class="control mt-3">
                                <input class="input" v-model="activity.name" type="text" placeholder="Activity's Name" />
                            </div>
                            <div class="control">
                                <VueDatePicker v-model="activity.time" time-picker disable-time-range-validation range
                                    placeholder="Select Time" />
                            </div>
                            <div class="control mt-3">
                                <textarea class="textarea" v-model="activity.note" placeholder="Note"></textarea>
                            </div>
                        </div>
                        <Button class="button" @click="addActivity(index)">Add Activity</Button>
                    </div>
                </section>
                <section class="px-6">
                    <Button class="button" @click="addDay()">Add day</Button>
                </section>
                <div class="field is-grouped mt-6 ml-6">
                    <div class="control">
                        <button class="button is-primary" @click="set()">Submit</button>
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
// import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Datepicker from 'vuejs3-datepicker';

export default {
    components: {
        // VueDatePicker, 
        Datepicker
    },
    created() {
        const data = JSON.parse(localStorage.getItem("trip"))
        if (data) {
            this.tripList = data
        }
    },
    data() {
        return {
            tripList: [],
            trip: { name: "", days: [] }
        };
    },
    methods: {
        set() {
            var d = this.tripList.filter((data) => {
                return data.name == this.trip.name
            })
            if (d.length) {
                alert("Trip Name is Already Use")
            }
            else if (this.trip.name == "") {
                alert("Not set Trip Name Yet")
            }
            else {
                this.tripList.push(this.trip)
                localStorage.setItem("trip", JSON.stringify(this.tripList));
                this.$router.push({ path: "/" })
            }
        },
        addDay() {
            this.trip.days.push({
                date: "",
                activities: []
            })
        },
        addActivity(index) {
            this.trip.days[index].activities.push({
                "time": "",
                "name": "",
                "note": ""
            })
        },
        dateformat(date) {
            var d = new Date(date)
            if (date) {
                return d.toDateString()
            }
            return ""
        }
    }
}
</script>