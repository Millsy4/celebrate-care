import axios from 'axios';

export default {
    getEvents: function() {
        return axios.get("/api/eventtables");
    },
    saveEvent: function(eventData) {
        return axios.post("/api/eventtables", eventData)
    }
}