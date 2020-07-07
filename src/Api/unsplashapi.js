//HOvnJG8B0km2N7g4aEmFrq7zQisQL6ajJX66TZbR8z8
import axios from "axios";



 const api = axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID HOvnJG8B0km2N7g4aEmFrq7zQisQL6ajJX66TZbR8z8'
    },
})

export default api;