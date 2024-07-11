import { useEffect, useState } from "react";
import Spacecrafts from "../Spacecrafts";

const Ships = () => {
  const [data, setData] = useState<Spacecrafts[]>();

  const loadData = async () => {
    try {
      const randID = Math.round(Math.random() * 1000000) + 1;
      const url = "https://stapi.co/api/v2/rest/spacecraftClass/search"; //"https://stapi.co/api/v2/rest/spacecraft/search?name=enterprise",
      console.log(randID);
      console.log(url);
      const res = await fetch(url, {
        method: "GET",
        body: JSON.stringify({ uid: randID.toString }),
      });
      const info = await res.json();

      if (!res.ok) {
        console.log("Problem");
        return;
      }
      // console.log(info.spacecrafts);

      setData(info.spacecrafts);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  return (
    <>
      <button onClick={loadData}>Load Data</button>
      <div>
        {data?.map((data, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  {data.registry} | {data.uid} | {data.name}{" "}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ships;
