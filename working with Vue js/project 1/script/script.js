const app = Vue.createApp({
    data() {
        return {
            firstName: 'natenael',
            lastName: 'haylemariam',
            email: 'natiman@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg' //this let  us get some randome user information for our test 
        }
    },
    methods: {
        async getUser() {
            let users = await fetch('https://randomuser.me/api/') //this will fetch some randome user from random user api then reutrn to the variable 
            let data = await users.json(); //this will parse the reurned result into json 
            this.firstName = data['results'][0].name.first //this will let us to access the returned results to manipulate the dom and have different information each time based on the result given
            this.lastName = data['results'][0].name.last
            this.email = data['results'][0].email
            this.gender = data['results'][0].gender
            this.picture = data['results'][0].picture.large
        },
        anotherUser() {
            this.firstName = 'natty man and natty boy'
            this.lastName = 'natty boy'
            this.email = 'nattyboy@gmail.com'
            this.gender = 'male'
            this.picture = 'image/hacker.jpg'
        }

    }

})

app.mount('#app')

const anonterApp = Vue.createApp({
    data() {
        return {
            firstName: 'natiman',
            lastName: 'haylemariam',
            email: 'natiman@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser2() {
            let AllUsers = await fetch('https://randomuser.me/api/')
            let user = await AllUsers.json();
            // console.log(AllUsers)
            this.firstName = user['results'][0].name.first
            this.lastName = user['results'][0].name.last
            this.email = user['results'][0].email
            this.gender = user['results'][0].gender
            this.picture = user['results'][0].picture.large
        }
    }
})
anonterApp.mount('.container')