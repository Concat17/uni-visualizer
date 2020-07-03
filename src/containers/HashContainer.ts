import React, { useState } from "react"
import { createContainer } from "unstated-next"

export const HashContainer = createContainer(() => {
    const columnCount = 13;
    const hashFunction = (val: number) => val % columnCount; 

    const [hash, setHash] = useState(initHash());

    function initHash() {
        const hash: number[][] = []; 
        for(let i = 0; i < columnCount; i++){
            hash.push([]);
        } 
        return hash;
    }

    function insertInHash(value: number){
        const ind = hashFunction(value);
        const newHash = [];
        for(let i = 0; i < columnCount; i++){
            const arr = [];
            for (let j = 0; j < hash[i].length; j++){
                arr.push(hash[i][j])
            }
            if(i === ind) arr.push(value)
            newHash.push(arr);
        }
        setHash(newHash);
    }

    return {hash, insertInHash}
})