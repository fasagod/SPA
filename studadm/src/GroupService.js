import axios from 'axios';



const url = 'http://localhost:5000/api/groups/';

class GroupService{
    //get
    static getGroups(){
    return new Promise(async (resolve, reject) =>{
        try {
            const res= await axios.get(url);
            const data = res.data;
            resolve(
                data.map(group => ({
                    ...group
                }))
            );
        } catch (error) {
            reject(error);
        }
    })  
    }
    //create
    static insertGroup(direction, type, course){
        
        return axios.post(url, {
            direction, 
            type, 
            course
        })
    }

    //del   
    static deleteGroup(id){
        return axios.delete(`${url}${id}`);
    }
    //upd
    static updateGroup(id,direction, type, course){
        return axios.put(`${url}${id}`,{
            direction, 
            type, 
            course
        })
    }
}

export default GroupService;