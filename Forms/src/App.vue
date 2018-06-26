<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <full-name v-model="fullNameObj"></full-name>
                    <input type="email" v-model="mail" placeholder="Mail" >
                    <input type="password" v-model="password" placeholder="Password" >
                    <div>Store Data?</div>
                    <input type="radio" value="yes" v-model="storeDate" placeholder="Yes" >
                    <input type="radio" value="no" v-model="storeDate" placeholder="No" >
                    <button @click.prevent="submitted">Submit</button>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeDate }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fullName from './FullName.vue'
    export default {       
        data () {
            return {
                isSubmitted: false,
                fullNameObj: {
                  firstName: '',
                  lastName: ''
                },
                mail: '',
                password: '',
                storeDate: false
            }
        },
        methods: {
            submitted () {
                this.isSubmitted = true
            }
        },
        computed: {
            fullName() {
                return this.fullNameObj.firstName + ' ' + this.fullNameObj.lastName 
            }
        },
        components: {
           fullName 
        }
    }
</script>

<style>
</style>
