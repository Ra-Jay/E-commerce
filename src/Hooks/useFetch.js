import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson);
        });
    }, [url])

    return data;
}
 
export default useFetch;