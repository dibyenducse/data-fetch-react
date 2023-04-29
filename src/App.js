import { useEffect, useState } from 'react';
import './App.css';

export default function Quote() {
    const [quote, setQuote] = useState(null);
    

    useEffect(() => {
        const fetchWeather = async () => {
            
                const response = await fetch('https://api.adviceslip.com/advice')
                const data = await response.json();
                const advice = data.slip.advice;
                setQuote(advice);
                console.log(advice)
          
        }
            fetchWeather();

        }, []);

    return (
        <>
        <div>Get Api Data</div>
            <div>{quote}</div>
        </>
    )
}