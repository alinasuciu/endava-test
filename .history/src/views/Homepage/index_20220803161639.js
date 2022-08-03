import React, { useState } from 'react'
import Button from '../../components/Button'
import { getProductById } from "../../service"
import useApiError from '../../common/hooks'

export default function Homepage() {
    const { addError } = useApiError();
    const [product, setProduct] = useState();
    console.log(product)

    const getProduct = (id) => {
        getProductById(id).then(response => {
            setProduct(response.data.product)
        }).catch(error => {
            addError(`LOAD_DATA_ERROR: ${error}`, error.response.status);
        })
    }
    return (
        <div>
            <Button type="button" onClick={() => getProduct(1)}>Product1</Button>
            <Button type="button" onClick={() => getProduct(2)}>Product1</Button>
            <Button type="button" onClick={() => getProduct(3)}>Product1</Button>
        </div>
    )
}