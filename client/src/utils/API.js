import axios from 'axios';

export default {
    getEvents: function() {
        return axios.get("/api/eventtable");
    },
    saveEvent: function(eventData) {
        return axios.post("/api/eventtable", eventData)
    }
}