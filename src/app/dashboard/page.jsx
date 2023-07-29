"use client";
// import { useEffect, useState } from "react";
import style from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
    // const [data, setData] = useState([]);
    // const [err, setErr] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(!isLoading);
    //         const res = await fetch(
    //             "https://jsonplaceholder.typicode.com/posts",
    //             {
    //                 cache: "no-store",
    //             }
    //         );
    //         if (!res.ok) {
    //             setErr(!err);
    //         }
    //         const data = await res.json();
    //         setData(data);
    //         setIsLoading(false);
    //     };
    //     getData();
    // }, []);

    const fetcher = (...arg) => fetch(...arg).then((res) => res.json());
    const { data, err, isLoading } = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    );

    return <div className={style.container}>Dashboard</div>;
};

export default Dashboard;
