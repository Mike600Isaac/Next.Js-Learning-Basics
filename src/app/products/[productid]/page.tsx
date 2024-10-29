// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Metadata } from "next";

//The important part is to generate a function for metadata 
type Props = {
    params: {
        productid: string
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout( () => {
            resolve(`iPhone ${params.productid}`)
        })
    })
    return {
        title: `product ${title}`
    }
}

export default function DynamicRoute( {
    params
}: Props) {
    return <h1>Details about product {params.productid}!</h1>
}