import React, {useEffect, useState} from 'react';

// beggining of key to identify what project it belongs to
const UNIQUEID = 'grip';
export default function useLocalStorage(key, dataStored){
    // key to fetch from local storage
 const uniqueIDKey = UNIQUEID + key
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(uniqueIDKey)
        if (jsonValue !== null){
            return JSON.parse(jsonValue)
        }
        if(typeof uniqueIDKey === "function"){
            return dataStored
        }else {return dataStored }
    })

    useEffect(()=>{
localStorage.setItem(uniqueIDKey,JSON.stringify(value))
    },[uniqueIDKey,value])
    return [value,setValue]
}