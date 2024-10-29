"use client"; // The use of a client component is necessary..
import { useRouter } from "next/navigation"; // useRoute hooks

export default function PlaceOrder() {
    const router = useRouter(); // invoke the useRouter hooks

    const handleClick = () => {
        console.log("I got an order!")
        router.push("/drouts") // this enable us to navigate to the root router and can be edited!
    }

    return <>
        <h1>Product 1</h1>
        <button onClick={handleClick}>Place Order</button>
    </>
}