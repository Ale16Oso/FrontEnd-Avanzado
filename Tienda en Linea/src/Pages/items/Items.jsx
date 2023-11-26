import { useEffect, useState} from 'react'

export default function Items() {

    const [items, setItems] = useState([])

    useEffect (() => {
        fetch('https://api-pelis-back.onrender.com/celulares')
        .then (res => res.json())
        .then(data => setItems(data.celulares))
}, [])

  return (
    <section className='items-container'>
    <div className='items'>
        {items.map (item => (
            <div key={item.title} className='item'>
                <img src={item.image} />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
             </div>
       ))
}

    </div>
    </section>
  )
}
