import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [products, setProduct] = useState([])
  const [filterProducts, setfilterProducts] = useState([])
  const [isfilter, setIsfilter] = useState("all")
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return (res.json())
      })
      .then((data) => {
        setProduct(data)
        setfilterProducts(data)
      })
  }, [])
  useEffect(() => {
    const list = []

    for (const p of products) {
      if (isfilter == "all") {
        setfilterProducts(products)
        console.log(products)
      }
      else {
        if (p.price < 100) {
          console.log("p", p.price)
          list.push(p)
          setfilterProducts(list)
        }

      }

    }
    console.log(filterProducts)
  }, [isfilter])

  function filterPrice() {
    if (isfilter == "all") {
      setIsfilter("cheap")
    } else {
      setIsfilter("all")
    }



  }

  return (
    <div className="App">
      <button onClick={filterPrice}></button>
      <div className='layout'>
        {filterProducts.map((item) => {
          return (
            <Link to={`detail/${item.id}`}>
              <div className='card' key={item.id}>
                <img src={item.image}></img>
                <div className='detail'>
                  <p>{item.title}</p>
                  {item.price}

                </div>
              </div></Link>

          )
        })}
      </div>



    </div>
  );
}


export default App;
