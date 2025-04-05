
import './App.css'
import ToDo from './todo'; 
import Actor from'./actor';
import Singer from './Singer';

function App() {

  const actors=['bappa raj', 'omor sunny', 'salman shah']

  const Singer=[
    {id:1, name:'Dr. Mahfuz', age:68},
    {id:2, name:'Tahsan', age:45},
    {id:3, name:'shuvo Deb', age:57}
  ]

  // const time=50;
  return (
    <>

      <h1>React Core Concepts</h1>

    {
      Singer.map(singer=><Singer key={singer} singer={singer}></Singer>)
    }

      {
        actors.map(actor=>
          <Actor actor={actor}></Actor>)
      }




      {/* <ToDo task="learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise React" isDone={false}></ToDo>
      <ToDo task="Take a shower" isDone={false}></ToDo> */}

      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumdar" tech='js'></Developer>
      <Developer name="rajon" tech='python'></Developer>
      <Player name="tamim" runs='5000'></Player>
      <Salami event='roja eid' amount='20'></Salami>
      <Salami event='Graduation'></Salami> */}
    </>
  
  )
}

function Salami({event,amount=0}){
  return(
    <div className='salami'>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}


function Player(name,runs){
  
  return(
    <div className='student'>
      <h3>Name:{name} </h3>
      <p>Runs:{runs} </p>

    </div>
  )
}

// const {name,tech}={name: 'Mozumdar', tech: 'js'}

function Developer(props){
  console.log(props)
  return(
    <div style={{
      border:'2px solid green',
      borderRadius:'20px'
    }}>
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>
        Name:
      </p>
      <p>Department:</p>
    </div>
  )
}

function Pet(){
  return(
    <p>Cat</p>
  )
}

function Person(){
  const age=17;
  const name='jolil';
  const personStyle={
    color:'red',
    textAlign:'right'
  }

  return (
    <p id='' title='tooltip' style={personStyle}> I am a person: {name} {age}</p>
  )
}

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
      <p>Playing an losing</p>
    </div>
  )
}

export default App
