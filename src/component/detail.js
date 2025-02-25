import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setProduct(data)
            })


    }, [id])
    if (!product) return <p>Loading...</p>;

    return (
        <div>
            {product.title}
        </div>
    )
}
export default Detail