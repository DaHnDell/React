const title = "타이틀";
const content = "content";
const memberEmail = "email";

const obj = {title:"1234", content:"abcd"};
obj.title = title;
obj['memberEmail'] = memberEmail;
console.log(obj);

const e = {};
e.target = {};
e.target.name = "title";
e.target.value = "작성한 제목";

// const name = e.target.name;
const {name, value} = e.target;
console.log(name, value);

obj[name] = value;
obj = {...obj, [name] : value=""}
console.log(obj[name]);
