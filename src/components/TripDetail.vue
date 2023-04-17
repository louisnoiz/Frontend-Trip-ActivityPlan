<template>
    <div class="container is-widescreen">
        <!-- <section class="hero">
            <div class="hero-body">
                <p class="title">
                    Trip's Name
                </p>

            </div>

        </section> -->
        <section class="section">
            <div class="content">
                <p class="title">
                    Trip: {{ trip.name }}
                </p>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <div class="field" v-for="(day, index) in trip.days" :key="index">
                                        <label class="label">&emsp; Day : {{ dateformat(day.date) }}</label>
                                        <div class="field" v-for="(activity, index) in day.activities" :key="index">
                                            <label class="label">&emsp;&emsp;&emsp;- Activity: {{ activity.name }}</label>
                                            <label class="label" v-if="activity.time">&emsp;&emsp;&emsp;&emsp;Time: {{
                                                timeformat(activity.time[0]) }} - {{ timeformat(activity.time[1]) }}
                                            </label>
                                            <label class="label"> </label>
                                            <label class="label">&emsp;&emsp;&emsp;&emsp;Note: {{ activity.note }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="control">
                <button @click="$router.go(-1)" class="button is-info">Back</button>
            </div>
        </section>

    </div>
</template>
  
<script>
export default {
    name: "app",
    data() {
        return {
            trip: {}
        }
    },
    mounted() {
        const data = JSON.parse(localStorage.getItem("trip"))
        let name = this.$route.params.name
        this.trip = data.filter((trip) => {
            return trip.name == name
        })[0]
    },
    methods: {
        dateformat(date) {
            var d = new Date(date)
            if (date) {
                return d.toDateString()
            }
            return ""
        },
        timeformat(obj) {
            console.log(obj);
            const dateObj = new Date();
            dateObj.setHours(obj.hours);
            dateObj.setMinutes(obj.minutes);
            dateObj.setSeconds(obj.seconds);
            const formattedTime = dateObj.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
            return formattedTime;
        }
    }
}
</script>