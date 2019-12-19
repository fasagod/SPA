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
    static insertStudent(direction, type, course){
        
        return axios.post(url, {
            name: req.body.name,
            avg: req.body.avg,
            typest: req.body.typest,
            age: req.body.age,
            academ: req.body.academ,
            student: req.body.student
        })
    }

    //del   
    static deleteStudent(id){
        return axios.delete(`${url}${id}`);
    }
    //upd
    static updateStudent(id,direction, type, course){
        return axios.put(`${url}${id}`,{
            name: req.body.name,
            avg: req.body.avg,
            typest: req.body.typest,
            age: req.body.age,
            academ: req.body.academ,
            student: req.body.student
        })
    }
}

export default StudentService;