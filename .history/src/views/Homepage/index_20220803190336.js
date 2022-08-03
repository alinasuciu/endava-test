import React, { useState } from 'react'
import Button from '../../components/Button'
import { getProductById } from "../../service"
import { useApiError } from '../../common/hooks'

export default function Homepage() {
    const { addError } = useApiError();
    const [product, setProduct] = useState({});

    const getProduct = (id) => {
        getProductById(id).then(response => {
            setProduct(response)
        }).catch(error => {
            addError(error);
        })
    }
    return (
        <div>
            <Button type="button" onClick={() => getProduct(1)}>Product1</Button>
            <Button type="button" onClick={() => getProduct(2)}>Product2</Button>
            <Button type="button" onClick={() => getProduct(3)}>Product3</Button>
        </div>
    )
}