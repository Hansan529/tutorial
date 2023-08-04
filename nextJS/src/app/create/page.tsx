'use client';

import { useState } from 'react';

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: HTMLFormElement;
}

export default function Page() {
  const [input, setInput] = useState({
    title: '',
    body: '',
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(input);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // fetch
  };
  const onChange = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title / 타이틀"
          onChange={handleChange}
        />
      </p>
      <p>
        <textarea
          name="body"
          cols={30}
          rows={10}
          placeholder="body / 본문"
          onChange={handleChange}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="create / 생성" onChange={handleChange} />
      </p>
    </form>
  );
}
