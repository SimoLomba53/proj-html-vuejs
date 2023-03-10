const { createApp } = Vue

createApp({
    data() {
        return {
            //ELEMENTI DEL HEADER
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
            ],

            //LINGUA DEL SITO
            currentlanguage: "English",


            //ELEMENTI DEL FOOTER
            footerelement: [
                {
                    location: "USA,California 20,First Avenue,California",
                    telephone: "+ 1 212 458 300 32 ",
                    fax: "+ 1 212 375 24 14 ",
                    mail: "info@masterstudy.com",
                    firsttext: "Our main target is to developing Yourself as a Leader",
                    firstdate: "--August 9,2018",
                    secondtext: "Those Other College Expenses You Aren't Thinking About",
                    seconddate: "--June 3,2015",
                },
            ],
            //ELEMENTI DELLE PAGES DEL FOOTER
            footerpagessection: [
                {
                    item: "Blog",
                },
                {
                    item: "Home",
                },
                {
                    item: "Shortcodes",
                },
                {
                    item: "Courses",
                },
                {
                    item: "Membership A.",
                },
                {
                    item: "Typography",
                },
            ],

        }
    }
}).mount('#app')