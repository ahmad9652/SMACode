import axios from 'axios';
export const apiClient = {
    get(){

    },
    async post(URL, data){
        try {
            const response = await axios.post(URL,data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    put(){
        
    },
    remove(){

    }
}