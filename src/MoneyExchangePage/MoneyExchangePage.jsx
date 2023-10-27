import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Gallery from '../Gallery/Gallery';
import { AppContext } from '../shared/AppContext';





export default function MoneyExchangePage () {
    const [current, setCurrent] = useState('EUR');

    const [rates, setRates] = useState([]);

        const getRates = async () => {
            const {data} = await axios(`https://api.vatcomply.com/rates?base=${current}`);
            setRates(data.rates)
        };
        useEffect(()=>{
            getRates();
    }, [current]);
    
    return <div>
    <AppContext.Provider value={{ current, setCurrent }}>
        <Gallery data={rates}/>
    </AppContext.Provider>

    </div>
}