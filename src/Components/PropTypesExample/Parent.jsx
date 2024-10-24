import Child from "./Child";

function Parent() {
  return (
    <Child name="Bhuv" age={33} address={{ street: "Hi", city: "city" }}>
      Hi I am Bhuv
    </Child>
  );
}

export default Parent;
