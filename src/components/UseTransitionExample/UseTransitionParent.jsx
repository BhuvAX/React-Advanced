import { useState, useTransition } from "react";
import Comments from "./Comments";
import Post from "./Post";
import Author from "./Author";
import "./styles.css";

export default function UseTransitionParent() {
  const [tab, setTab] = useState("Post");

  const [isPending, startTransition] = useTransition();

  function setOpenTab(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  return (
    <>
      <button onClick={() => setOpenTab("Post")}>View Post</button>
      <button onClick={() => setOpenTab("Comments")}>View Comments</button>
      <button onClick={() => setOpenTab("Author")}>View Author</button>
      {isPending && "Loading..."}

      {tab === "Post" ? (
        <Post />
      ) : tab === "Comments" ? (
        <Comments />
      ) : (
        <Author />
      )}
    </>
  );
}
