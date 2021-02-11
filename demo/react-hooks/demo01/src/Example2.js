import React, { useState } from 'react';

function Example2() {
  const [name, setName] = useState('fuuka')
  const [sex, setSex] = useState('女')
  const [age, setAge] = useState('18')
  return (
    <div>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
      <p>性别：{sex}</p>
    </div>
  )
}

export default Example2