type User = {
  // Dữ liệu dạng nguyên thủy
  name: string;
  // Dữ liệu dạng function
  handleChangeName: (newName: string) => void;
  // Dữ liệu dạng Object
  user: {
    name: string;
    age: number;
    address: string;
  };
  // Dữ liệu dạng mảng
  listUser: {
    user_id: number;
    user_name: string;
    age: number;
  }[];
};

export default function Children_Comp(props: User) {
  const { handleChangeName } = props;

  // Function change props
  const handeChangeProps = () => {
    handleChangeName("Ronando");
  };

  return (
    <>
      <h2>UserName of Children_Comp: {props.name}</h2>
      <ul>
        <li>Name: {props.user.name}</li>
        <li>Age: {props.user.age}</li>
        <li>Address: {props.user.address}</li>
      </ul>
      <button onClick={handeChangeProps} className="btn btn-primary mr-2">
        Change Props
      </button>
    </>
  );
}
