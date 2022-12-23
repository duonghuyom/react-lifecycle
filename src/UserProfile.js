import { useContext } from "react";
import { UserContext } from "./UserContext";

export function UserProfile() {
  // khai báo biến users sử dụng hàm useContext
  const users = useContext(UserContext);
  return (
    <div>
      {/* map các giá trị trong users để in ra  */}
      {users.map((user) => (
        <li>
          I am {user.name} and my age is {user.age}
        </li>
      ))}
    </div>
  );
}
