import Head from "next/head"
import { useEffect, useState } from "react"

export default function CSR() {

    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <>
            <Head>
                <title>Test1</title>
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
            </Head>
            <div className="py-6 px-6">
                <h1 className="text-[48px]">HEADER</h1>
                {!data ? <div className="text-[30px] text-red-600">...Loading</div > : <div>{JSON.stringify(data)}</div>}
            </div>
        </>

    )
}
