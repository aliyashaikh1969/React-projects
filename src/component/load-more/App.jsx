import { useEffect, useState } from "react";
import './App.css'


const LoadMore = () => {
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [productList, setProductList] = useState([])
    const [disableButton,setDisableButton] = useState(false)


    async function fetchProduct() {
        setLoading(true)
        try {
            let response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count == 0 ? 0 : count * 20}`)
            let result = await response.json();

            if (result && result.products && result.products.length) {
                setProductList((pre)=>[...pre ,...result.products])
                setLoading(false)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchProduct()
        console.log(productList)
    }, [count])

    useEffect(()=>{
        if(productList && productList.length>100){
            setDisableButton(true)
        }
    })
        if (loading) {
        return <p>loading data please wait...</p>
    }


    return (
        <>
            <h1>LoadMore</h1>
            <div className="load-more">

                <div className="container">
                    {
                    productList.map((item, index) => (
                        <div className="product" key={index}>
                        <img src={item.images[0]} alt={item.title} />
                        <p>{item.title}</p>
                        </div>
                        ))
                        }

                </div>
                        
                        <button disabled={disableButton} onClick={()=>setCount(count +1)}>see more</button>
                        {
                            disableButton?<p>you have reached 100 limit</p>:""
                        }
            </div>
        </>
    )
}

export default LoadMore;