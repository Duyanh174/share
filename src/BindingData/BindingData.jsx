import React from 'react'

const BindingData = () => {
    const tong = (a, b) => a + b;
    const objectA = {
      ten: "abbc",
      tuoi: 21,
    };
    const isLogin = true 
    const isShowMessage =  true
  return (
    <div className="App">
      {isLogin ? (
        <div>
          <button>đăng nhập</button>
        </div>
      ) : ( 
        <div><button>đăng xuất</button></div>
      )}

      {isShowMessage && (
        <p>hello react</p>
      )}
      <div>{tong(1, 2)}</div>
      <div>{objectA.ten}</div>
      <div>{objectA.tuoi }</div>
    </div>
  )
}

export default BindingData
