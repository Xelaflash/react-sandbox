import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "react-fetch-hook";

export default function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //!! first technique (the one in React Docs https://reactjs.org/docs/faq-ajax.html) ==> Using built in fetch. NOT THE BEST OPTION
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Xelaflash")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setLoading(true);
  //         // setTimeout is just there to see the loading state
  //         setTimeout(() => {
  //           setData(result);
  //           setLoading(false);
  //         }, 1000);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         setLoading(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  //!! 2. Using axios lib
  // let token = localStorage.getItem("token");
  // axios.defaults.headers.common['Authorization'] = token;
  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/floppy33300")
  //     .then((response) => {
  //       setLoading(true);
  //       // handle success
  //       //!! with axios response is already a json object. data lies as value of data key. so need to set response.data.
  //       // console.log(response);
  //       // const result = response.json();
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       // handle error
  //       // console.log(error);
  //       setError(error);
  //     });
  // }, []);

  //!! 3. ASYNC/AWAIT with Fetch, need to verify error handling here
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch("https://api.github.com/users/Xelaflash")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoading(true);
          // setTimeout is just there to see the loading state
          setTimeout(() => {
            setData(result);
            setLoading(false);
          }, 1000);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          setError(error);
        }
      );
  }

  //!! 4. Custom react hook useFetch ==> looks the BEST
  // const { isLoading, error, data } = useFetch("https://api.github.com/users/Xelaflashxx");
  // console.log(error);

  if (loading) return <div> ⚙️ Loading...</div>;
  // use with react fetch hook
  // if (isLoading) return <div> ⚙️ Loading...</div>;
  if (error) return <div>💥 oh shoot! there is an Error: {error.message}</div>;
  return (
    <div>
      {data && (
        <div style={{ textAlign: "center" }}>
          <img src={data.avatar_url} alt="Avatar" height="100" />
          <p>Name: {data.name}</p>
          <p>Bio: {data.bio}</p>
          <p>Username: {data.login}</p>
          <p>Location: {data.location}</p>
          <p>Public Repos: {data.public_repos}</p>
        </div>
      )}
    </div>
  );
}
