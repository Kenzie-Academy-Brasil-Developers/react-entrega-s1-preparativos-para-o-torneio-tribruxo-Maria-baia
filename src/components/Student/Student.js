import {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import './Student.css'

function Student(){
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch("https://hp-api.herokuapp.com/api/characters/students")
        .then((response) => response.json())
        .then((response) => setStudents(response))
        .catch((err) => console.log(err))
    },[])

    function randomStudents(students) {
        let temporaryValue = 0, randomIndex = 0, studentsParticipants = []
        for(let i=0; i<students.length; i++){
          randomIndex = Math.floor(Math.random() * i)
          temporaryValue = students[i]
          students[i] = students[randomIndex]
          students[randomIndex] = temporaryValue
        }
        if(students.length > 0){
            studentsParticipants.push(students[0])
            for(let i=0; i<students.length; i++){
                for(let j=0; j<studentsParticipants.length; j++){
                    if(studentsParticipants[j].house === students[i].house){
                        break
                    }else{
                        if(studentsParticipants.length > 1 && studentsParticipants[1].house === students[i].house){
                            break
                        }else{
                            studentsParticipants.push(students[i])
                            break
                        }
                    }
                }
                if(studentsParticipants.length > 2){
                    return studentsParticipants
                }
            }
        }
        return students
    }

    return(
        <div className='App-header'>
        <div className='allStudents'>
            {randomStudents(students)
            .map((student, index) => (
                <Cards key={index} studentImage={student.image} studentName={student.name}
                studentHouse={student.house} />
            ))}
        </div>
        </div>
    )
}

export default Student