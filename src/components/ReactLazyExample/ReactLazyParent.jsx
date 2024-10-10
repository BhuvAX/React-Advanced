import React, { lazy, Suspense, useState } from "react";
//import NewComment from './NewComment'
// import Comments from './Comments'
const Comments = lazy(() => wait(1000).then(() => import("./Comments")));
const NewComment = lazy(() => wait(5000).then(() => import("./NewComment")));

export default function ReactLazyParent() {
  const [viewComments, setViewComments] = useState(false);
  const isLoggedIn = true;

  return (
    <>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        voluptatibus obcaecati, itaque culpa, quibusdam voluptatem est similique
        vitae sequi odio consectetur nisi sint dolorum sit?
      </article>
      {viewComments ? (
        <Suspense fallback="Loading">
          {isLoggedIn && <NewComment />}
          <Suspense fallback="Loading">
            <Comments />
          </Suspense>
        </Suspense>
      ) : (
        <button onClick={() => setViewComments(true)}>View Comments </button>
      )}
    </>
  );
}

function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
