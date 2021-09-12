import './Cards.css'

function Cards({key, studentImage, studentName, studentHouse}){
    let gryffindor = true
    let slytherin = true
    let hufflepuff = true
    if(studentHouse === 'Slytherin'){
        gryffindor = false
        hufflepuff = false
    }else if(studentHouse === 'Hufflepuff'){
        gryffindor = false
        slytherin = false
    }else if(studentHouse === 'Ravenclaw'){
        gryffindor = false
        slytherin = false
        hufflepuff = false
    }
    return(
        <div key={key} className='card'>
            <img src={studentImage} className={gryffindor ? 'red': slytherin ? 'green' : hufflepuff ? 'yellow' : 'blue'}/>
            <h1>{studentName}</h1>
            <p className={gryffindor ? 'red_p': slytherin ? 'green_p' : hufflepuff ? 'yellow_p' : 'blue_p'}>{studentHouse}</p>
        </div>
    )
}

export default Cards