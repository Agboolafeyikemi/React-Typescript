import { useState, useRef, useEffect } from "react";

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const users = [
    { name: "Max", age: 20 },
    { name: "Feyikemi", age: 33 },
    { name: "Paul", age: 40 },
  ];
  const findUser = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    console.log("foundUser", foundUser);
    setUser(foundUser);
  };

  return (
    <div>
      USER SEARCH{" "}
      {/* <input value={name} onChange={(e) => setName(e.target.value)} /> */}
      <input ref={inputRef} />
      <button onClick={findUser}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
