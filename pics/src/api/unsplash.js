import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID piJMUxv7ZBYgHlp6ifLOf3Lnix8yajEj19PbHaU-jzY'
    }
});



