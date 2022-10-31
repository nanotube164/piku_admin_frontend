import React, {PropsWithRef, SyntheticEvent, useEffect, useState} from 'react';
import {Navigate, Route} from "react-router-dom";
import Wrapper from "./layout/Wrapper";

const ProductsEdit = (props: PropsWithRef<any>) => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [redirect,setRedirect] = useState(false);


    useEffect(()=>{
        (
            async () => {
                const response = await fetch(`http://localhost:8000/api/products/${props.match.params.id}`)

                const product = await response.json();

                setTitle(product.title);
                setImage(product.image);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        // console.log(title, image);

        await fetch(`http://localhost:8000/api/products/${props.match.params.id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                image,
            })
        });

        setRedirect(true);

    }

    if(redirect){
        return <Route path="/products" element={<Navigate replace to={"product"}/>}></Route>
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title"
                           defaultValue={title}
                           onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <label>Image</label>
                    <input type="text" className="form-control" name="image"
                           defaultValue={image}
                           onChange={e => setImage(e.target.value)}></input>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default ProductsEdit;