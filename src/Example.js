import React, { useState, useEffect } from "react";
import { UserProfile } from "./UserProfile";
import { UserContext } from "./UserContext";
function Example() {
  const [count, setCount] = useState(0); // sử dụng useState để thay đổi giá trị biến count
  // hàm useState này được dùng trong function component của react để thay cho việc thay đổi
  // giá trị của state trong constructor khi sử dụng class component

  useEffect(() => {
    console.log("Component đã được render!");
  }, []); // useEffect dùng để thực hiện các hành động side effect như là gọi api
  // giá trị array sau cùng được dùng là điều kiện để gọi lại hàm useEffect, nếu [] rỗng thì chỉ gọi đến useEffect một lần đầu
  // nếu không có [] rỗng thì useEffect sẽ luôn được gọi mỗi khi có giá trị trong component thay đổi
  // hàm này có thể ứng dụng trong việc sử dụng gọi api

  const user = [
    {
      name: "tom",
      age: 1,
    },
    {
      name: "jerry",
      age: 2,
    },
  ];

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* pass a value for the context that already created */}
      {/* sử dụng hàm component context ở đây để pass dữ liệu vào trong component con UserProfile thay
      vì phải pass dữ liệu vào trong component cha là Example */}
      <UserContext.Provider value={user}>
        <UserProfile />
      </UserContext.Provider>
      <br />
    </div>
  );
}

export default Example;
