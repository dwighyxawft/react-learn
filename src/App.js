import styles from './App.module.css';

function App() {
  const age = 16;
  const isGreen = true;
  const names = [
    {name: "williams", age: 24, email:"williams@gmail.com"},
    {name: "ola", age: 27, email:"ola@gmail.com"},
    {name: "grace", age: 22, email:"grace@gmail.com"},
    {name: "bukky", age: 24, email:"bukky@gmail.com"},
    {name: "myo", age: 25, email:"moyo@gmail.com"}
  ];
  return (
    <div className={styles.App}>
        <User name="xawft" age={24} mail="dwighyxawft@gmail.com"/>
        <User name="ola" age={27} mail="olaman@gmail.com"/>
        <User name="uncle" age={24} mail="unclenccf@gmail.com"/>
        { age >17 ? <h1>Over age</h1> : <h1>under age</h1> }
        <Job salary={90000} position="Senior SDE" company="Amazon"/>
        <Job salary={12000} position="Junior SDE" company="Google"/>
        <Job salary={10000} position="Project Manager" company="Netflix"/>
        <h1 className={styles.name}>Timilehin</h1>
        <h1 style={{ color: isGreen ? "green" : "red"}}>xawft academy is loading...</h1>
        { isGreen && <button>BUTTON IS GREEN</button> }
        {
          names.map((name, key) => {
            return <User name={name.name} age={name.age} mail={name.email} />
          })
        }
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p><strong>{props.mail}</strong></p>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h5>{props.company}</h5>
      <strong>{props.position}</strong>
      <p>{props.salary}</p>
    </div>
  )
}

export default App;
