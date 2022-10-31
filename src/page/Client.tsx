import React, {useEffect, useState} from 'react';
import {Product} from "../interfaces/product";
// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import Landing from "./layout/Landing";

const Client = () => {
    const [products, setProducts] = useState([] as Product[]);
    useEffect(() => {
        (
            async () => {
                // 從 admin server 取得所有產品
                const response = await fetch(`http://localhost:8000/api/products`);
                const data = await response.json();
                setProducts(data);
                // window.alert(data[0]["id"])
            }
        )();
    }, []);
    const like = async (id: number) => {
        await fetch(`http://localhost:8001/api/products/${id}/piku`, {
            method: `POST`,
            headers: {'Content-Type': 'application/json'}
        });
        setProducts(products.map(
            (p: Product) => {
                if (p.id === id) {
                    p.likes++;
                }
                return p;
            }
        ))
    }
    return (
        <div className='client'>
            {/*<Header/>*/}
            <Landing>
                <main>
                    {/*<section className="py-5 text-center container">*/}
                    {/*    <div className="row py-lg-5">*/}
                    {/*        <div className="col-lg-6 col-md-8 mx-auto">*/}
                    {/*            <h1 className="fw-light">Album example</h1>*/}
                    {/*            <p className="lead text-muted">Something short and leading about the collection below—its*/}
                    {/*                contents, the creator, etc. Make it short and sweet, but not too short so folks don’t*/}
                    {/*                simply skip over it entirely.</p>*/}
                    {/*            <p>*/}
                    {/*                <a href="#" className="btn btn-primary my-2">Main call to action</a>*/}
                    {/*                <a href="#" className="btn btn-secondary my-2">Secondary action</a>*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    <div className="album py-5 bg-light">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {products.map(
                                    (p: Product) => {
                                        return (
                                            <div className="col-md-4" key={p.id}>
                                                <div className="card mb-4 shadow-sm">
                                                    <img src={p.image} height="180"/>
                                                    <div className="card-body">
                                                        <p className="card-text">{p.title}</p>
                                                        <div
                                                            className="d-flex justify-content-between align-items-center">
                                                            <div className="btn-group">
                                                                <button type="button"
                                                                        className="btn btn-sm btn-outline-secondary"
                                                                        onClick={() => like(p.id)}
                                                                >
                                                                    Piku
                                                                </button>
                                                            </div>
                                                            <small className="text-muted">{p.likes} pikus</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </main>
                {/*<Footer/>*/}
            </Landing>
        </div>
    );
};

export default Client;