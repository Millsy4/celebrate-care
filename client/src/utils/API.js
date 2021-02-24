import axios from 'axios';

export default {
    getEvents: function () {
        return axios.get("/api/eventtables");
    },
    saveEvent: function (eventData) {
        return axios.post("/api/eventtables", eventData)
    },
    signUp: function (signUpData) {
        return axios.post('/api/signup', signUpData)
    }
}

//step 4