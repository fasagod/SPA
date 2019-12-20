import axios from 'axios';


const url = 'http://localhost:5000/api/students/';

class StudentService{
    //get
    static getStudents(){
    return new Promise(async (resolve, reject) =>{
        try {
            const res= await axios.get(url);
            const data = res.data;
            resolve(
                data.map(student => ({
                    ...student
                }))
            );
        } catch (error) {
            reject(error);
        }
    })  
    }
    //create
    static insertStudent(name, avg, typest,age,academ,group){
        
        return axios.post(url, {
            name,
            avg,
            typest,
            age,
            academ,
            group
        })
    }

    //del   
    static deleteStudent(id){
        return axios.delete(`${url}${id}`);
    }
    //upd
    static updateStudent(id,name, avg, typest,age,academ,group){
        return axios.put(`${url}${id}`,{
            name,
            avg,
            typest,
            age,
            academ,
            group
        })
    }
}

export default StudentService;