import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { getProductById } from "../../service"
import useApiError from '../../common/hooks'
export default function Homepage() {
    const [product, setProduct] = useEffect();

    const getProduct = (id) => {
        getProductById(id).then(response => {
            setProduct(response.data.product)
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