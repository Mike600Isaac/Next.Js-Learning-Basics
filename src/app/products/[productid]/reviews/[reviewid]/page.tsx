import { Metadata } from "next";

type Props = {
    params: {
        productid: string,
        reviewid: string,
    }
}

export const genereateMetadata = async ( {params}: Props): Metadata => {
    const title = await new Promise( resolve => {
        setTimeout( () => {
            resolve(`iPhone ${params.productid}`)
        })
    })
    return {
        title: `Review ${params.reviewid} for product ${params.productid}`,
    }
}

export default function DynamicReviews( {params
}: Props) {
    return <h1>Review {params.reviewid} for product {params.productid}</h1>
}