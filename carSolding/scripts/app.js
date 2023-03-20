const app = Vue.createApp({
    data() {
        return {
            showContainer: true,
            books: [{
                    title: 'the last kingdom',
                    author: 'me',
                    age: 20,
                    url: 'image/4.jpg',
                    isfev: true,
                },
                {
                    title: 'the last samoran',
                    author: 'me',
                    age: 24,
                    url: 'image/5.jpg',
                    isfev: false,
                },
                {
                    title: 'the dragon and the wasp',
                    author: 'me again',
                    age: 300,
                    url: 'image/6.jpg',
                    isfev: true,
                }
            ],
        }
    },
    computed: {
        filterBooks() {
            return this.books.filter((book) => book.isfev)
        },
        anotherFilterBooks() {
            return this.books.filter((book) => !book.isfev)
        }
    },
    methods: {
        IncreaseAge() {
            this.age++
        },
        decreaseAge() {
            this.age--
        },
        changeTitle(title) {
            this.title = title
        },
        togleContainer() {
            this.showContainer = !this.showContainer
        },
        handleEvent(e) {
            console.log(e)

        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
    },
})

app.mount("#app")