import { useId, useState } from "react";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const id = useId();

  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input
        type="email"
        name="email"
        id={`${id}-email`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor={`${id}-name`}>Name</label>
      <input
        type="text"
        name="name"
        id={`${id}-name`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
