'use client'

import { useEffect, useState } from "react";

export default function List() {
    let product = [['tomatoes', 40], ['pasta', 20], ['coconut', 150]];
    let [num, setNum] = useState([0, 0, 0]);
    useEffect(() => {
      console.log(num)
    })
    return (
      <div>
        <h2>Products</h2>
        {product.map((e, i)=> {
          return (<div className="food" key={i}>
            <img src={`/food${i}.png`} alt={`food${i} 식품 이미지`}/>
            <h4>{e[0]} ${e[1]}</h4>
            <button onClick={() => {
              let cloneNum = [...num] //배열 복사용 spread oprt
              cloneNum[i]-=1; //배열의 특정 인덱스 값에 연산처리
              setNum(cloneNum) //재렌더링을 위한 비교실행
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