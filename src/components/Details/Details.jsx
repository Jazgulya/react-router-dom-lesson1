import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = ({getOneProduct, oneProduct}) => {
    const [loading, setLoading] = useState(true) // для показа загрузки 
    const params = useParams() // хук для добавления id, возвращает объект
    // console.log(params);
    useEffect(()=> {
        getOneProduct(params.id)
        setTimeout(()=> {
            setLoading(false)
        }, 2000) // чтобы увидеть загрузку
    }, [])
    if(loading) {
        return <Spinner animation="border" />
    }
    return (
        <div class="container">{oneProduct ? <div>
            <div>{oneProduct.title}</div>
            <div>{oneProduct.price}</div>
            <img src={oneProduct.image} alt="" />
        </div> : <Spinner animation="border" />}
        </div>
        
    );
};

export default Details;