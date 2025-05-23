import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import './App.css'


const ImageSlider = ({ url, limit = 5 }) => {

    const [loading, setLoading] = useState(false)
    const [imgaes, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const [errorMess, setErrorMess] = useState("")

    async function fetching(getUrl) {
        try {
            setLoading(true)
            let result = await fetch(`${getUrl}?page=1&limit=${limit}`)
            let data = await result.json();
            setImages(data)
            setLoading(false)
        } catch (e) {
            setErrorMess(e.message)
        }
    }

    useEffect(() => {
        if (url !== "") fetching(url);
    }, [url])

    const handlePrevious = () => {
        console.log("pre")
        setCurrentImage(currentImage == 0 ? imgaes.length - 1 : currentImage - 1);
    }

    const handleNext = () => {
        console.log("next")
        setCurrentImage(currentImage == imgaes.length - 1 ? 0 : currentImage + 1);

    }

    if (loading) {
        return <p>loading please wait</p>
    }

    if (errorMess !== "") {
        return <p>error on fetching data</p>
    }


    return (
        <>
            <div className="container" style={{ width: '400px', display: "flex" }}>
                <button onClick={handlePrevious}>
                    <MdArrowBackIos />
                </button>
                {
                    imgaes && imgaes.length ? imgaes.map((item, index) => (
                        <img style={{ width: "100%" }} key={index} className={currentImage == index ? "active" : ""} src={item.download_url} alt="" />
                    )) : null
                }

                <span className="circle-indicator">
                    {
                        imgaes && imgaes.length ? imgaes.map((_,index) => (
                            <button key={index} className={currentImage==index ? "indicator active-indicator":"indicator"}  onClick={()=>setCurrentImage(index)}></button>
                        )) : null
                    }
                </span>
                <button onClick={handleNext}><MdArrowForwardIos /></button>

            </div>
        </>
    )
}

export default ImageSlider;