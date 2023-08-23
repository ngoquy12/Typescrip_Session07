import { useState } from "react";
import Children_Comp from "./Children_Comp";

export default function Parent_Comp() {
  const [name, setName] = useState("David");

  const user = {
    name: "Nguyễn Văn A",
    age: 21,
    address: "Hà Nội",
  };

  const listUser = [
    {
      user_id: 1,
      user_name: "Khải",
      age: 18,
    },
    {
      user_id: 2,
      user_name: "Quý",
      age: 19,
    },
    {
      user_id: 3,
      user_name: "Tuyến",
      age: 26,
    },
  ];
  // Function thay doi state
  const handleChangeName = (newUser: string) => {
    setName(newUser);
  };

  return (
    <div>
      <h1>Username of Parent Comp: {name}</h1>
      <Children_Comp
        name={name}
        handleChangeName={handleChangeName}
        user={user}
        listUser={listUser}
      />
      <button className="btn btn-warning" onClick={() => setName("Linda")}>
        Change State
      </button>
    </div>
  );
}
