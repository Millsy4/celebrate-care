import axios from 'axios';

export default {
    getEvents: function () {
        return axios.get("/api/eventtables");
    },
    getFamilyUpcomingEvents: function (familyCode, eventStatus) {
        return axios.get("/api/eventtables/" + familyCode + "/" + eventStatus)
    },
    getEventIdeas: function (eventStatus) {
        return axios.get("/api/eventtables/" + eventStatus)
    },
    editUpcomingEvents: function (familyCode, eventStatus, eventData) {
        return axios.put("/api/eventtables/" + familyCode + "/" + eventStatus, eventData)
    },
    editWishlistEvents: function (familyCode, eventData) {
        return axios.put("/api/eventtables/" + familyCode, eventData)
    },
    saveEvent: function (familycodeId, formObject) {
        return axios.post("/api/eventtables/" + familycodeId, formObject)
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