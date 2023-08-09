import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


export interface FetchResponse <W>{
    count: number,
    results: W[]

}

const useData = <W>(endpoint: string, requestConfig? : AxiosRequestConfig, deps?: any[] ) =>{ 
    const [data, setData] = useState<W[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient
            .get<FetchResponse<W>>(endpoint, { signal: controller.signal , ...requestConfig})
            .then((res) => {
                setData(res.data.results); 
                setLoading(false)

                console.log("123", res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message); setLoading(false)
            })
        return () => controller.abort();
    }, deps ? [...deps] : [])
    return { data, error, isLoading }

}


export default useData;