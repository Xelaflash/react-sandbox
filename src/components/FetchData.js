import { getDefaultNormalizer } from "@testing-library/dom";
import React, { useState, useEffect } from "react";

export default function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //!! first technique (the one in React Docs https://reactjs.org/docs/faq-ajax.html) ==> Using built in fetch.
  useEffect(() => {
    fetch("https://api.github.com/users/Xelaflash")
      .then(res => res.json())
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
          setLoading(true);
          setError(error);
        }
      )
  }, [])



  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   setLoading(true);
  //   const response = await fetch("https://api.github.com/users/Xelaflash")
  //   const data = await response.json();
  //   setTimeout(() => {
  //     setLoading(false);
  //     setData(data);
  //   }, 1000);
  // }



  if (loading) return <div> ⚙️ Loading...</div>
  if (error) return <div>💥 oh shoot! there is an Error: {error.message}</div>
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
