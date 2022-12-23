import React from "react";
// create new React context
// khởi tạo một context component mới với giá trị users là một mảng các giá trị người dùng
// mảng này sẽ được sử dụng để pass xuống component con
const users = [
  {
    name: "Duong",
    age: 21,
  },
  {
    name: "Huy",
    age: 21,
  },
];

// const users = [];

// tạo một React Context với hàm React.createContext()
export const UserContext = React.createContext(users);
