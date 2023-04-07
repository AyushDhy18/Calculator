import React, { useState } from 'react'
import Button from './Button'
function Calculator() {
  const [num, UpdateNum] = useState("");
  const [num1, UpdateNum1] = useState(0);
  const [num2, UpdateNum2] = useState("");
  const [operator, UpdateOperator] = useState("");
  const [solution, UpdateSolution] = useState("");

  Number(num2)
  Number(num1)


  const numHandler = (event) => {
    operator == "" && num1 != 0 ? UpdateNum1(num1 + event.target.value) :
      operator == "" && num1 == 0 ? UpdateNum1(event.target.value) :
        operator != "" && num2 != 0 ? UpdateNum2(num2 + event.target.value) :
          operator != "" && num2 == 0 ? UpdateNum2(event.target.value) : 4, UpdateSolution("")
  }
  // const num2Handler = (event) => { UpdateNum2(num + event.target.value) }
  const operatorHandler = () => { UpdateOperator(event.target.value) }
  const g = (event) => { UpdateNum(num + event.target.value) }
  // const solve = () => { operator == "-" ? return (num1 - num2) }

  const sum = parseFloat(num1) + parseFloat(num2);

  const equalto = (event) => { operator == "-" ? UpdateSolution(num1 - num2) : operator == "x" ? UpdateSolution(num1 * num2) : operator == "/" ? UpdateSolution(num1 / num2) : operator == "+" ? UpdateSolution(sum) : operator == "%" ? UpdateSolution((num1 / 100) * num2) : UpdateSolution(0), UpdateNum1(""), UpdateNum2(""), UpdateOperator("") }
  // Prevent num1 and num2 from concatinating 
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 m-5 border border-zinc-900 shadow-inner shadow-zinc-800 rounded-md">

        <form>
          <input readOnly className="w-96 bg-black p-2 shadow shadow-emerald-200 text-3xl text-emerald-500 text-right" value={num1 + operator + num2 + solution} />

        </form>

        <div className="flex justify-end w-96 p-3"></div>

        <div className="mt-3">

          <div>
            <Button onClick={(e) => { UpdateNum1(0), UpdateNum2(""), UpdateOperator(""), UpdateSolution("") }} >C</Button>
            <span className="w-20 m-16 py-4 px-6 invisible">8</span>

            <Button onClick={operatorHandler}>/</Button>
          </div>

          <div>
            <Button onClick={numHandler}>7</Button>
            <Button onClick={numHandler}>8</Button>
            <Button onClick={numHandler}>9</Button>
            <Button onClick={operatorHandler}>x</Button>
          </div>

          <div>
            <Button onClick={numHandler}>4</Button>
            <Button onClick={numHandler}>5</Button>
            <Button onClick={numHandler}>6</Button>
            <Button onClick={operatorHandler}>-</Button>
          </div>

          <div>
            <Button onClick={numHandler}>1</Button>
            <Button onClick={numHandler}>2</Button>
            <Button onClick={numHandler}>3</Button>
            <Button onClick={operatorHandler}>+</Button>
          </div>

          <div>
            <Button onClick={numHandler}>.</Button>
            <Button onClick={numHandler}>0</Button>
            <Button onClick={operatorHandler}>%</Button>
            <Button onClick={equalto}>=</Button>
          </div>

        </div>


      </div>
    </div>
  )
}
export default Calculator
