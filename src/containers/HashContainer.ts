import React, { useState } from "react";
import { createContainer } from "unstated-next";

export const HashContainer = createContainer(() => {
  const columnCount = 2;
  const hashFunction = (val: number) => val % columnCount;

  const [hash, setHash] = useState(initHash());
  const [history, setHistory] = useState<Array<[string, number]>>([]);

  function initHash() {
    const hash: number[][] = [];
    for (let i = 0; i < columnCount; i++) {
      hash.push([]);
    }
    return hash;
  }

  function insertInHash(value: number) {
    const ind = hashFunction(value);
    const newHash = [];
    for (let i = 0; i < columnCount; i++) {
      const arr = [];
      for (let j = 0; j < hash[i].length; j++) {
        arr.push(hash[i][j]);
      }
      if (i === ind) arr.unshift(value);
      newHash.push(arr);
    }
    setHash(newHash);
    console.log(newHash);
  }

  function deleteFromHash(value: number) {
    const ind = hashFunction(value);
    const newHash = [];
    let isDeleted = false;
    for (let i = 0; i < columnCount; i++) {
      const arr = [];
      for (let j = 0; j < hash[i].length; j++) {
        if (!isDeleted && hash[i][j] === value) {
          isDeleted = true;
          continue;
        }
        arr.push(hash[i][j]);
      }

      newHash.push(arr);
    }
    console.log(newHash);
    setHash(newHash);
  }

  return {
    hash,
    insertInHash,
    deleteFromHash,
    columnCount,
    history,
    setHistory,
  };
});
