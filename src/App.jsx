import { useState } from 'react'
import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Results from './components/Results.jsx';

function App() {
  const [userInput, setuserInput] = useState(
        {
            initialInvestment: 10000,
            annualInvestment: 1200,
            expectedReturn: 6,
            duration: 10
        }
    );
    const inputIsValid = userInput.duration >= 1;
    function handleChanged(inputIdentififier, newValue) {
        setuserInput(prevInput => {
            return {
                ...prevInput,
                [inputIdentififier]: +newValue
            };
        })
    }
  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange = {handleChanged}/>
    {!inputIsValid && (<p className='center'>Please enter a duration greater then Zero.</p>)}
    {inputIsValid &&     <Results input={userInput}/>
}
    </>
    // <h1>React Investment Calculator</h1>
  )
}

export default App
