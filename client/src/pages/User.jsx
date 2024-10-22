import { Await, defer, useLoaderData } from "react-router-dom"
import { getPosts } from "../api/posts"
import { getTodos } from "../api/todos"
import { getUser } from "../api/users"
import { PostCard, PostCardSkeleton } from "../components/PostCard"
import { TodoItem } from "../components/TodoItem"
import { Suspense } from "react"
import { Skeleton, SkeletonList } from "../components/Skeleton"

function User() {
  const { userPromise, postsPromise, todosPromise } = useLoaderData()

  return (
    <>
      <Suspense fallback={<UserFallback />}>
        <Await resolve={userPromise}>
          {(user) => (
            <>
              <h1 className="page-title">{user.name}</h1>
              <div className="page-subtitle">{user.email}</div>
              <div>
                <b>Company:</b> {user.company.name}
              </div>
              <div>
                <b>Website:</b> {user.website}
              </div>
              <div>
                <b>Address:</b> {user.address.street} {user.address.suite}{" "}
                {user.address.city} {user.address.zipcode}
              </div>
            </>
          )}
        </Await>
      </Suspense>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        <Suspense
          fallback={
            <SkeletonList count={3}>
              <PostCardSkeleton />
            </SkeletonList>
          }
        >
          <Await resolve={postsPromise}>
            {(posts) =>
              posts.map((post) => <PostCard key={post.id} {...post} />)
            }
          </Await>
        </Suspense>
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        <Suspense
          fallback={
            <SkeletonList count={10}>
              <li>
                <Skeleton short />
              </li>
            </SkeletonList>
          }
        >
          <Await resolve={todosPromise}>
            {(todos) =>
              todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
            }
          </Await>
        </Suspense>
      </ul>
    </>
  )
}

function UserFallback() {
  return (
    <>
      <Skeleton short />
      <div className="page-subtitle">
        <Skeleton short />
      </div>
      <div>
        <b>Company:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Website:</b> <Skeleton short inline />
      </div>
      <div>
        <b>Address:</b> <Skeleton short inline />
      </div>
    </>
  )
}

function loader({ request: { signal }, params: { userId } }) {
  const posts = getPosts({ signal, params: { userId } })
  const todos = getTodos({ signal, params: { userId } })
  const user = getUser(userId, { signal })

  return defer({ postsPromise: posts, todosPromise: todos, userPromise: user })
}

export const userRoute = {
  loader,
  element: <User />,
}
