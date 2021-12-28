import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../store/user/UserActions";
import { Button, TextInput } from "../../components";

interface Props {
  id: string;
  setModalIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserForm = ({ id, setModalIsOpen }: Props) => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(({ user }: RootState) => user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [website, setWebSite] = useState("");

  useEffect(() => {
    const user = users.find((u) => u.id == id);
    console.log("user :>> ", user);
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setUserName(user.username || "");
      setWebSite(user.website || "");
    }
  }, [users]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "userName":
        setUserName(value);
        break;
      case "website":
        setWebSite(value);
        break;
    }
  };
  const handleClick = () => {
    if (name && email && username && website) {
      const index = users.findIndex((u) => u.id == id);
      users[index] = { ...users[index], name, email, username, website };
      dispatch(editUser(users));
      setModalIsOpen?.(false);
    }
  };
  return (
    <div style={{ padding: "10px 20px" }}>
      <TextInput
        label={"Name"}
        name={"name"}
        type="text"
        value={name}
        onChange={onChange}
      />
      <TextInput
        label={"Email"}
        name={"email"}
        type="text"
        value={email}
        onChange={onChange}
      />
      <TextInput
        label={"User Name"}
        name={"userName"}
        type="text"
        value={username}
        onChange={onChange}
      />
      <TextInput
        label={"Web site"}
        name={"website"}
        type="text"
        value={website}
        onChange={onChange}
      />
      <Button
        title={"Edit"}
        onClick={handleClick}
        styles={{ marginTop: "20px", width: "100px" }}
      />
    </div>
  );
};
