import React from 'react'

function Test(props) {
  const data = ['Tiếng gọi nơi hoang dã', 'abc']
  return (
    <div>
      <ul>
        {data.map(item => (
          <li>Cuốn sách {item} có không</li>
        ))}
      </ul>
    </div>
  )
}

export default Test
