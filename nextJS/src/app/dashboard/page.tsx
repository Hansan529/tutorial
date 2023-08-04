'use client';

import React, { useState } from 'react';

type Props = {};

export default function test({}: Props) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>테스트</p>
    </>
  );
}
