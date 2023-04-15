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
            <div class="content" v-for="(trip, index) in listTrips" :key="index">
                <p class="title">
                    {{ trip.name }}
                </p>
                <div class="columns">
                    <div class="column">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <div class="field" v-for="(day, index) in trip.days" :key="index">
                                        <label class="label">&emsp; Day : {{ day.date }}</label>
                                        <div class="field" v-for="(activity, index) in day.activities" :key="index">
                                            <label class="label">&emsp;&emsp; -{{ activity.time }} {{ activity.name
                                            }}</label>
                                            <label class="label"> </label>
                                            <label class="label">&emsp;&emsp;&emsp; Note: {{ activity.note }}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
export default {
    name: "app",
    data() {
        return {
            listTrips: [{
                "name": "Taifhoon Trip",
                "days": [
                    {
                        "date": "2023-04-15",
                        "activities": [
                            {
                                "time": "10:00",
                                "name": "play water",
                                "note": "eiei"
                            },
                            {
                                "time": "14:00",
                                "name": "up mountain",
                                "note": "eiki"
                            }
                        ]
                    },
                    {
                        "date": "2023-04-16",
                        "activities": [
                            {
                                "time": "09:00",
                                "name": "Activity Name",
                                "note": "Activity Note"
                            }
                        ]
                    }
                ]
            }]
        }
    },
    mounted() {
        // if (localStorage.getItem('trip') !== null) {
        //     this.listTrip = JSON.parse(localStorage.getItem("trip"))
        // }
        // else {
        //     this.listTrip = []
        //     localStorage.setItem("trip", JSON.stringify(this.listTrip))
        // }
    },
    unmounted() {
        // localStorage.setItem("trip", JSON.stringify(this.listTrip));
    },
    methods: {
        // test() {
        //     // localStorage.setItem("trip", JSON.stringify(this.listTrip));
        //     this.listTrip.push({
        //         name: "New",
        //         day: [
        //             {
        //                 id: 1,
        //                 location: "123"
        //             }
        //         ]
        //     })
        // },
        // edit() {
        //     this.$router.push({ path: "/updatetrip" })
        // },
        // add() {
        //     this.$router.push({ path: "/addtrip" })
        // },
        // delete() {
        //     this.listTrip.map(() => {

        //     })
        // }
    }
}
</script>