import React, { useState } from 'react';


const ToppingList = (props) => {
  const [count, setCnt] = useState(0);
  const [checkedToppings, setCheckedToppings] = useState([]);
  const [mySet, setMySet] = useState(new Set());
  const {toppings, onSetMyTopping} = props; 
  
  const handleChange = e => {
    if(e.target.checked && mySet.size >=3){
      alert("돼~지같은 놈");
      return;
    }
    const reset = new Set(mySet);
    e.target.checked ? reset.add(e.target.value) : reset.delete(e.target.value);
    setMySet(reset);
    onSetMyTopping(reset);

    // e.target.checked ? setMySet(checkedToppings => new Set(checkedToppings.add(e.target.value))) : setMySet(checkedToppings => {checkedToppings.delete(e.target.value); return new Set(checkedToppings);});
    // if(e.target.checked && count !== 3){
    //   setCheckedToppings([...checkedToppings, e.target.value]) 
    //   setCnt(count+1);
    //   return;
    // }
    // if(count === 3){
    //   e.target.checked = false;
    //   setCnt(3);
    //   alert("Can't add more toppings;");
    // }
    // console.log([...checkedToppings, e.target.value]);
    // count < 4 ? setCheckedToppings([...checkedToppings, e.target.value]) : checkedToppings.filter(ct => ct = !e.target.value);
  }
  
  return toppings.length === 0? <h1>No toppings</h1> : 
  <>
    <h3>maximum toppings = 3</h3>
    <ul>
      {toppings.map((t,i) => <li key={i}><label><input type='checkbox' name='topping' value={t} onChange={handleChange} checked={mySet.has(t)}/>{t}</label></li>)}
    </ul>
  </>
}
    
const Multiple = () => {
  const toppings = ["Bacon", "Peperoni", "PineApple", "Cheese", "SweetPotato", "Potato", "Shrimp", "Bulgogi", "jang"];
  const [myTopping, setMyTopping] = useState(new Set());
  return (
    <form onSubmit={e => {
      e.preventDefault();
      if(myTopping.size === 0){
        alert("select 1 toppings as minimum");
        return;
      }
      alert(`선택한 토핑은 ${Array.from(myTopping).join(" , ")}`);
    }}>
      <p> 토핑을 고르세요. </p>
      <ToppingList toppings={toppings} myTopping={myTopping} onSetMyTopping={setMyTopping}/>
      <button>Order</button>
    </form>
  );
}

export default Multiple;
