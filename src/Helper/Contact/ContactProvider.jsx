import Context from "./index";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContactApi } from "../../api";

const ContactProvider = (props) => {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [tempId, setTempId] = useState(0);
  const [historyClass, setHistoryClass] = useState(false);

  const getUsers = async () => {
    try {
      await axios.get(`${ContactApi}`).then((resp) => {
        setUsers(resp.data);
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const createUser = (data1, imgUrl) => {
    const userTemp = {
      id: users.length + 1,
      avatar: imgUrl,
      name: data1.name,
      surname: data1.surname,
      email: data1.email,
      mobile: data1.phone,
    };
    setUsers((pre) => [...pre, userTemp]);
  };

  const editUser = (data) => {
    let updatedUser = users.map((item) => (item.id === tempId ? data : item));
    setUsers(updatedUser);
  };

  const deletedUser = (id) => {
    let deleteUser = users.filter((data) => data.id !== id);
    setUsers(deleteUser);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        users,
        data,
        historyClass,
        setHistoryClass,
        createUser: createUser,
        editUser: editUser,
        deletedUser: deletedUser,
        setTempId: setTempId,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContactProvider;
