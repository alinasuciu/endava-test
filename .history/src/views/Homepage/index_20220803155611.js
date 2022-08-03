import React from 'react'
import Button from '../../components/Button'
import { getProductById } from "../../service"

export default function Homepage() {
    const getProduct = (id) => {
        getProductById(id).then(response => {
            console.log(response);
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