import { GetServerSideProps, Metadata } from "next"
import Head from "next/head"

interface Props {
    data: []
}

export const metadata: Metadata = {
    title: 'shopping now',
    description: 'test seo'
}

export default function SSR(Props: Props) {
    const data = Props.data
    return (
        <>
            <Head>
                <title>Test</title>
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


export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=5')
    const data = await res.json()
    return { props: { data } }
}
