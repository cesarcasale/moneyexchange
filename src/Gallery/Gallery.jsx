import { useContext, useState } from "react";
import "./Gallery.css";
import { AppContext } from "../shared/AppContext";


export default function Gallery({data}){
    const {setCurrent} = useContext(AppContext)
    const [inputValue, setInputValue] = useState(1);
    let myInput = "";
    const handleInputChange = (e) => {
        myInput = e.target.value;
    };
    
    const handleButtonClick = () => {
        setInputValue(myInput);
    };    
    
    const handleClick = (valor) => {
        setCurrent(valor)
    };
    
    
const allRates = [];
for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
        const rate = data[key];
        const calc = rate*inputValue;
        const round = calc.toFixed(2);
        allRates.push(<div key={key} className="col-3 flexi">
            <div  className="c-card" >
            <button className="g-current-btn" onClick={()=> {handleClick(key)}}>
            <h2>{key}</h2>
            </button>
            <h3>{rate.toFixed(2)}</h3>
            <div>
            <h4>{round}</h4>
            </div>
            </div>
            </div>)
    }
}

    return <div className="container">
                    <div className="input-btn">
                        <input type="number"  onChange={handleInputChange} />
                        <button onClick={handleButtonClick}>Calc</button>
                    </div>
                <div className="row">
                    {allRates}
                </div>
                </div>
}