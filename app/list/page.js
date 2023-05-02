
export default function List() {
    let product = [['tomatoes', 40], ['pasta', 20], ['coconut', 150]];

    return (
      <div>
        <h2>Products</h2>
        {product.map((e, i)=> {
          return (<div className="food" key={i}>
            <img src={`/food${i}.png`} alt={`food${i} 식품 이미지`}/>
            <h4>{e[0]} ${e[1]}</h4>
          </div>)
        })}
      </div>
    )
  }