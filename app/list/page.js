'use client'

import { useState } from "react";

export default function List() {
    let product = [['tomatoes', 40], ['pasta', 20], ['coconut', 150]];
    let [num, setNum] = useState([0, 0, 0]);

    return (
      <div>
        <h2>Products</h2>
        {product.map((e, i)=> {
          return (<div className="food" key={i}>
            <img src={`/food${i}.png`} alt={`food${i} 식품 이미지`}/>
            <h4>{e[0]} ${e[1]}</h4>
            <button onClick={() => {
              let cloneNum = [...num]
              cloneNum[i]-=1;
              setNum(cloneNum)
            }}> - </button>
            <span> {num[i]} </span>
            <button onClick={() => {
              let cloneNum = [...num]
              cloneNum[i]+=1;
              setNum(cloneNum)
            }}> + </button>
          </div>)
        })}
      </div>
    )
  }