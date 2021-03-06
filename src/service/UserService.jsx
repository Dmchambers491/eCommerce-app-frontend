import { useState, useEffect } from 'react';
import axios from 'axios';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {

  const getAllUsers = 'http://localhost:8080/api/users/';
  let url = null;

  switch (searchMethod) {
    case 'getAllUsers': url = getAllUsers;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + response.data);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createUser(user) {
  return axios.post('http://localhost:8080/api/add/user', user);
}

export function validateUser(email, password) {
  return axios.get('http://localhost:8080/api/users/login/email/' + email + '/password/' + password);
}

export function deleteUser(userId) {
  return axios.delete('http://localhost:8080/api/delete/user/' + userId);
}