có 2 loại component:

- class component: (staceful) (life cycle)

- function component: (staceless)

JSX : java script XML ( viết html trong javascript)

_----RENDER CONDITION----------_

render condition :render có điều kiện

Mọi event trong react đều trả về một tham số event

////////////////////////////////////////////////////////////////

_----RENDER WITH MAP----------_

KHI SỬ DỤNG .map bắt buộc phải có thuộc tính là key ở thẻ bao bọc ngoài cùng và giá trị của key là duy nhất
hạn chế sử dung index làm giá trị của thuôc tính key, chỉ sử dụng khi mảng tĩnh

nếu không có key thì performent sẽ không được tối ưu vì khi re render React sẽ thay đổi toàn bộ vì react sẽ không biết đối tượng nào bị thay đổi, còn nếu có key thì react sẽ chỉ re render lại đúng key cảu đối tượng đó

////////////////////////////////////////////////////////////////

_------STATE----------_

State: tất cả những gì trên giao điện muốn thay đổi đều phải đưa vào state, chỉ có state mưới làm cho giao diện được thay đổi khi thay đổi giá trị. Trong React chỉ khi thay đổi giá trị của state thì component mới được Rerender lại và sau khi được rerender thì giao diện mới được update lại

Để tạo 1 State trong React Function Component gọi hàm (hooks) useState

bản chất của useState là một hàm, trong react bất cứ hàm nào bắt đầu bằng use thì thực chất là hook

useState trả vè một mảng gồm 2 phần tử :

- Phần tử thứ 0 State
- Phần tử thứ 1: một hàm setState => thay đổi giá trị của state

Khi state đựo thay đổi bằng hàm setState => component sẽ được re render lại cới giá trị state mới => UI được update

Tham số truền vào khi gọi hook useState gọi laf giá trị mặc định ban đầu cảu state khi component được rneder lalanf đầu tiên

chỉ nên nênthay đổi giá trị cảu state thông qua hàm setState

trong 1 component có thể tạo được không giới hạn số lượng state

tham số của useState có thể là 1 function => giá trị trả về của function này là giá trọ mặc định của state
=> function này chỉ được gọi duy nhất 1 lần khi component render lần đầu tiên

_------PROPS----------_

Giống như State Props thay đổi => component đưuocj re render lại

không thể thay đổi giá trị của props

_------SET UP REDUX----------_

ctrl + i để quick export

B1: Tạo folder store

B2: store => index.js và rootReducer.js

B3: index.js => tạo 1 store từ createStore

B4: rootReducer: tạo rootReducer => từ hàm combinereducer

B5: vào index.js trong root => lấy Provider từ react-redux và bọ lại toàn bộ component App

Khi giá trị của store thay đổi thì component nào đang lấy giá trị đó về sẽ bị re render lại

EX:

<!-- const DemoRedux = () => {
  // lấy gái trị từ store redux (initialState)

  const { number, age, name } = useSelector((state) => state.demoRedux)
  console.log('demoRedux: ', number, age, name);

  // thay đổi giá trị trên store Redux
  // Dùng dispatch để gửi lên store 1 action
  // action là 1 object gồm 2 thuộc tính:
  // + type: string (HẰNG SỐ) ex: "abc"
  // + payload: number, string, boolean , obj, array, function, undefinded, null

  const dispatch = useDispatch()

  return (
    <div>
      <h2 className='container mt-5'>Demo Redux (old)</h2>
      <p>Number : {number}</p>
      <div className="mt-3">
        <button className='btn btn-success me-3' onClick={() => {
          dispatch({
            type: "INCREASE_NUMBER",
            payload: 1
          })
        }}   >+ Number</button>
        <button className='btn btn-danger' onClick={() => {
          dispatch({
            type: "DECREASE_NUMBER",
            payload: -1
          })
        }}  >- Number</button>
      </div>
    </div>
   ) -->

-------REDUX TOOLKIT----------
B1: const store từ hàm configureStore (configureStore nhận vào 1 object)

export const store = configureStore({
reducer: rootReducer,
devTools: true, // extention redux devtools
})
