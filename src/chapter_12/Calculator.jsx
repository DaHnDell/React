import React, { useState } from 'react';

const regexp = new RegExp([/^0-9/]);

const scaleNames = {
  c : 'Celsius',
  f : 'Farenheit'
}

const TemperatureInput = (props) => {
  const handleChange = (e) => {
    props.onTemperatureChange(e.target.value);
  }
  return (
    <fieldset>
      <legend> 온도를 입력하십시요. (단위 : {scaleNames[props.scale]}): </legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  )
}

const BoillingVerdict = (props) => (props.celsius >= 100) ? <p> 물이 끓읍니다. </p> : <p> 물이 끓지 않읍니다. </p>
const toCelsius = (fahrenheit) => (fahrenheit - 32) *5 / 9 ;
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

const tryConvert = (temperature, convert) => {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Calculator = (props) => {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale('c');
  }
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale('f');
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
      <BoillingVerdict celsius={parseFloat(celsius)}/>
    </div>
  );
}

export default Calculator;