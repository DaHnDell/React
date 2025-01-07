import React, { useState } from 'react';
const regexp4Name = new RegExp(/[^0-9]/g);
const regexp4Req = new RegExp(/[A-Z]/g);
const MyForm = () => {
  
  const [name, setName] = useState(''); 
  const [req, setReq] = useState('');
  const [fruit, setFruit] = useState('');
  const [file, setFile] = useState([]); // 렌더링 통제를 통해서 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(name);
    fruit === '' ?  alert('plz select fruits') : alert('selected fruits : ' +  fruit);
    !fruit && alert('plz select fruits');
  }
  
  const handleChange = (e) => {
    switch(e.target.id){
      case 'name' :
        setName(e.target.value.replace(regexp4Name, ''));
        break;
      
      case 'req' :
        setReq(e.target.value.replace(regexp4Req, ''));
        // setReq(e.target.value.toLowerCase());
        break;
        
      case 'fruit' :
        console.log(e.target.value);
        setFruit(e.target.value);
        break;
      case 'file' :
        console.log(Array.from(e.target.files).map(file => file.name));
        setFile(Array.from(e.target.files).map(file => file.name));
        break;
    }
            // document.getElementById('input') = e.target.value.toUpperCase();
            // e.target.value = e.target.value.toUpperCase();
  }

  const FileInput = <input type='file' id='file' name='file' multiple onChange={handleChange}/>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input type='text' name='name' onChange={handleChange} id='name' value={name}/>
        </label>
          <p> Requested </p>
          <textarea onChange={handleChange} id='req' value={req}></textarea>
        <label htmlFor='fruit'> Select Fruits </label>
        <select id='fruit' onChange={handleChange} value={fruit}>
          <option value=''>Select Fruits</option>
          <option value={'apple'}>APPLE</option>
          <option value={'banana'}>BANANA</option>
          <option value={'grape'}>GRAPE</option>
          <option value={'watermelon'}>WATERMELON</option>
        </select>
        <hr/>
        {/* 파일 업로드 후 value값 변경 불가 >> 조건부 렌더링을 통해 컴포넌트 재 로드 할 경우  {<FileInput/>} */}
        <input type='file' id='file' name='file' multiple onChange={handleChange}/>
        <p>uploaded file</p>
        <ul>
          {file.map(file => <li key={file}>{file}</li>)}
        </ul>
        <hr/>
        <button> submit </button>
      </form>
    </div>
  );
}

export default MyForm;
