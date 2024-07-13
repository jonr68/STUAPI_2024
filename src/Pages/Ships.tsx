import { useEffect, useState } from "react";
import Spacecrafts from "../Spacecrafts";

const Ships = () => {
  const [data, setData] = useState<Spacecrafts>();

  const loadData = async () => {

    while (!data) {
      console.log("data: " + data);
      
    try {
      const randID = Math.round(Math.random() * 1000000) + 1;
      const url = "https://stapi.co/api/v2/rest/spacecraft?uid=SRMA0000"+randID;
      console.log(randID);
      console.log(url);
      const res = await fetch(url)
      const info = await res.json();

      if (!res.ok) {
        console.log("Problem");
        return;
      }
      console.log(info.spacecraft);

      setData(info.spacecraft);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);

  };

  return (
    <>
      <button onClick={loadData}>Load Data</button>
      <div>
        <h1>
        {data?.name}
        </h1>
        <h2>
        {data?.registry}
        </h2>
      </div>

      {/* <div>
        {data?.map((data, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  {data.name} | {data.registry} {" "}
                </li>
              </ul>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Ships;
