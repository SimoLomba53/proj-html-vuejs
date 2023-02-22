const { createApp } = Vue

createApp({
    data() {
        return {
            headerelement: [
                {
                    plan: "Courses",
                },

                {
                    plan: "Zoom",
                },

                {
                    plan: "Pages",
                },

                {
                    plan: "Bundles",
                },

                {
                    plan: "Course Formats",
                },

                {
                    plan: "Add Course",
                },

                {
                    plan: "Demos",
                },
            ]
        }
    }
}).mount('#app')