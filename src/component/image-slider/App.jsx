import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


const ImageSlider=({url ,limit =5})=>{

    const [loading , setLoading] = useState(false)
    const [imgaes,setImages] = useState([])
    const [errorMess,setErrorMess] = useState("")

    async function fetching(getUrl){
        try{
            setLoading(true)
            let result = await fetch(`${getUrl}?page=1&limit=${limit}`)
            let data =await result.json();
            setImages(data)
            setLoading(false)


        }catch(e){
            setErrorMess(e.message)
        }


    }
    console.log(imgaes,imgaes.length)

    useEffect(()=>{
        if(url !== "") fetching(url) ;
    },[url])


    if(loading){
        return <p>loading please wait</p>
    }

    if(errorMess !==""){
        return <p>error on fetching data</p>
    }


    return(
        <>
        <div className="container" style={{width:'400px',display:"flex"}}>
            <button>
                <MdArrowBackIos />
            </button>
       {
           imgaes && imgaes.length ? imgaes.map((item,index)=>(
               <img style={{width:"100%"}} src={item.download_url} alt="" />
            )):null
        }

        <button><MdArrowForwardIos /></button>
        </div>
        </>
    )
}

export default ImageSlider;