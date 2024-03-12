import React from "react";
import { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/surajvastrakar")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github User Name : {data?.login}
        <img
          src={data?.avatar_url}
          alt="Git picture"
          width={300}
          className="mx-auto my-5"
        />
      </div>
    </div>
  );
};

export default Github;
