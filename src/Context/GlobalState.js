import React, { createContext, useEffect, useReducer, useState } from "react";
import { AppReducer } from "./AppReducer";
import axios from "axios";
import ActionType from "./globalActionType";

const url = "http://localhost:3001/api/v1";
const initialState = {
  items: [],
  categories: [],
};
export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const [request, setRequest] = useState({
    id: "",
    name: "",
    id_type: "",
    price: "",
    isUpdate: false,
  });

  // GET_ITEMS
  const getItems = () => {
    axios
      .get(`${url}/items`)
      .then((res) => {
        dispatch({
          type: ActionType.GET_ITEMS,
          payload: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  };

  // GET_CATEGORIES
  const getCategories = () => {
    axios.get(`${url}/items/type`).then((res) => {
      dispatch({
        type: ActionType.GET_CATEGORIES,
        payload: res.data.data,
      });
    });
  };

  // POST_ITEM
  const postItem = () => {
    axios
      .post(
        `${url}/items`,
        {
          name: request.name,
          id_type: request.id_type,
          price: request.price,
        },
        config
      )
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch({
            type: ActionType.POST_ITEM,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  // POST_CATEGORY
  const postCategory = () => {
    axios
      .post(`${url}/items/type`, { name: request.name }, config)
      .then((res) => {
        if (res.data.message === "Success") {
          dispatch({
            type: ActionType.POST_CATEGORY,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  // HANDLE UPDATE
  const handleUpdate = (data) => {
    console.log(data);
    setRequest({
      id: data.id,
      name: data.name,
      price: data.price,
      isUpdate: true,
    });
  };

  // HANDLE PUT
  const putItem = () => {
    axios
      .put(
        `${url}/items/${request.id}`,
        {
          id: request.id,
          name: request.name,
          id_type: request.id_type,
          price: request.price,
        },
        config
      )
      .then((res) => {
        dispatch({
          type: ActionType.PUT_ITEM,
        });
      })
      .catch((err) => console.log(err.message));
  };

  const putCategory = () => {
    axios
      .put(
        `${url}/items/type/${request.id}`,
        { id: request.id, name: request.name },
        config
      )
      .then((res) => {
        dispatch({
          type: ActionType.PUT_CATEGORY,
        });
      })
      .catch((err) => console.log(err.message));
  };

  // HANDLE_SUBMIT
  const submitItem = (event) => {
    event.preventDefault();
    if (request.isUpdate) {
      putItem();
      getItems();
      setRequest({
        name: "",
        id_type: "",
        price: "",
        isUpdate: false,
      });
    } else {
      postItem();
      getItems();
      setRequest({
        name: "",
        id_type: "",
        price: "",
      });
    }
  };

  const submitCategory = (event) => {
    event.preventDefault();
    if (request.isUpdate) {
      putCategory();
      getCategories();
      setRequest({
        name: "",
        isUpdate: false,
      });
    } else {
      postCategory();
      getCategories();
      setRequest({
        name: "",
      });
    }
  };

  // DELETE_ITEM
  const deleteItem = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .delete(`${url}/items/${id}`, config)
      .then((res) => {
        getItems();
      })
      .catch((err) => console.log(err));
  };

  // DELETE_CATEGORY
  const deleteCategory = (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .delete(`${url}/items/type/${id}`, config)
      .then((res) => {
        getCategories();
      })
      .catch((err) => console.log(err));
  };

  // HANDLE ON_CHANGE
  const handleOnChange = (event) => {
    setRequest((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // HANDLE SUBMIT

  // const submitCategory = (event) => {
  // event.preventDefault();
  // if (data.isUpdate) {
  //   putData();
  // } else {
  //   postData();
  // }
  // };

  // HANDLE EDIT
  // const editCategory = (id) => {
  //   setData({
  //     isUpdate: true,
  //   });
  // };
  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        request,
        getItems,
        getCategories,
        handleOnChange,
        submitItem,
        submitCategory,
        deleteItem,
        deleteCategory,
        handleUpdate,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
