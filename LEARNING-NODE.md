có 2 loại component:

- class component: (staceful) (life cycle)

- function component: (staceless)

JSX : java script XML ( viết html trong javascript)

*----RENDER CONDITION----------*

render condition :render có điều kiện

Mọi event trong react đều trả về một tham số event

////////////////////////////////////////////////////////////////

*----RENDER WITH MAP----------*

KHI SỬ DỤNG .map bắt buộc phải có thuộc tính là key ở thẻ bao bọc ngoài cùng và giá trị cảu key là duy nhất
hạn chế sử dung index làm giá trị của thuôc tính key, chỉ sử dụng khi mảng tĩnh 

nếu không có key thì performent sẽ không được tối ưu vì khi re render React sẽ thay đổi toàn bộ vì react sẽ không biết đối tượng nào bị thay đổi, còn nếu có key thì react sẽ chỉ re render lại đúng key cảu đối tượng đó 

////////////////////////////////////////////////////////////////

