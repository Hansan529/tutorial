"use client";

import React, { useState } from "react";
import NavBar from "../components/page";

type Props = {};

export default function ttest({}: Props) {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <NavBar />
      <p>테스트</p>
    </>
  );
}
