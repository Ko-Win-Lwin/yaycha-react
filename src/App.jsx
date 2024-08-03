import React, { useState } from 'react'
import List from './components/List.component';
import Item from './components/Item.component';

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello World!", name: "Win Lwin" },
    { id: 2, content: "React is fun.", name: "Kyi Khant" },
    { id: 3, content: "Yay, interesting", name: "Zin Bo Khine" }
  ]);

  const remove = id => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h1>Yaycha</h1>
      <List>
        {
          data.map(item => <Item key={item.id} item={item} remove={remove} />)
        }
      </List>
    </div >
  );
}
