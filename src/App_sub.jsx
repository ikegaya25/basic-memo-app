import './App.css';
import React,{useState} from "react";
import Button from './Button';

function App_sub() {

  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount((prev) => {
        return prev + 1;
    })
  }
  const onClickCountDouwn = () => {
    setCount((prev) => {
        return prev - 1;
    })
  }
  const onClickCount2UP = () => {
    setCount((prev) => {
        return prev + 2;
    })
  }



  return (
    <div className="App">
      <p>カウント：{count}</p>
      <Button 
        btn_click={onClickCountUp}
        btn_txt="1増やす" />
      <Button 
        btn_click={onClickCountDouwn}
        btn_txt="1減らす" />  
      <br />
      <Button 
        btn_click= {onClickCount2UP}
        btn_txt="2増やす" />        
    </div>

  );
}



export default App_sub;
