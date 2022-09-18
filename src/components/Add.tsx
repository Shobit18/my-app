// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function Add() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e:any) => {
        setDesc(e.target.value)
    }

    const handleSubmit = () => {
        console.log({ title, desc })

        const _blogs = localStorage.getItem('blogs') && (localStorage.getItem('blogs') || "[]").length > 0 ? JSON.parse(localStorage.getItem('blogs') || "[]") : []

        localStorage.setItem('blogs', JSON.stringify([..._blogs, { title, desc }]))

        navigate('/')
    }

    return (
        <>
            <h1> ADD BLOG </h1>
            <input value={title} onChange={(e) => handleTitleChange(e)} /> <br />
            <input value={desc} onChange={(e) => handleDescChange(e)}  />   <br />
            <button onClick={handleSubmit}  > SUBMIT </button>
        </>
    )
}

export default Add