import { useEffect, useState } from "react";
import Spacecrafts from "../Spacecrafts";

// interface SpacecraftsrDisplayProps {
//   spacecrafts?: Spacecrafts;
// }

const Ships = () => {
  const [data, setData] = useState();
  // useEffect(() => {
  //   loadData();
  // });
  const loadData = async () => {
    try {
      const res = await fetch(
        "https://stapi.co/api/v2/rest/spacecraft/search?name=enterprise",
        { method: "POST" }
      );
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
        {data.map((data, index) => {
          return (
            <div key={index}>
              <h1> {data.uid}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Ships;
