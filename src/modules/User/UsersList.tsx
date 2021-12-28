import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserForm } from "./UserForm";
import { getUserList, deleteUser } from "../../store/user/UserActions";
import { CustomModal, Table } from "../../components";

const headerRows = [
  {
    id: "name",
    label: "Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
  },
  {
    id: "username",
    label: "Username",
    type: "text",
  },
  {
    id: "website",
    label: "Website",
    type: "text",
  },
  {
    id: "edit",
    label: "",
    type: "icon",
  },
  {
    id: "delete",
    label: "",
    type: "icon",
  },
];
export const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  //   const state = useSelector((state: RootState) => state);
  const { users, loading } = useSelector(({ user }: RootState) => user);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    dispatch(getUserList());
  }, []);
  const handleDelete = (id: string) => {
    dispatch(deleteUser(users.filter((user) => user.id !== id)));
  };
  const handleEdit = (id: string) => {
    setUserId(id);
    setModalIsOpen(true);
  };
  return (
    <div style={{ margin: "20px 30px" }}>
      <h1>Users List</h1>

      <Table
        headerRows={headerRows}
        rows={users}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <CustomModal
        modalIsOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      >
        <UserForm id={userId} setModalIsOpen={setModalIsOpen} />
      </CustomModal>
    </div>
  );
};
