import axios from 'axios';

export default {
    getEvents: function () {
        return axios.get("/api/eventtables");
    },
    saveEvent: function (eventData) {
        return axios.post("/api/eventtables", eventData)
    },
    signUp: function (signUpData) {
        return axios.post('/api/usertables', signUpData)
    },
    logIn: function (loginData) {
        return axios.post('/api/login', loginData)
    },
    getFamilyCodes: function () {
        return axios.get("/api/familycodes");
    }
}

//step 4