import './Cards.css'

function Cards({key, studentImage, studentName, studentHouse}){
    return(
        <div key={key} className='card'>
            <img src={studentImage} className={studentHouse.toLowerCase()}/>
            <h1>{studentName}</h1>
            <p className={studentHouse}>{studentHouse}</p>
        </div>
    )
}

export default Cards