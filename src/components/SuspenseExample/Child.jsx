import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Child({ cutoff }) {
  const { data } = useQuery({
    queryKey: ["data", { cutoff }],
    queryFn: () => getData(cutoff),
    retry: false,
    suspense: true,
  });

  useEffect(() => {
    console.log("Render");
  });

  return (
    <ul>
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getData(cutoff) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ITEMS.filter((item) => item >= cutoff));
    }, 1000);
  });
}
