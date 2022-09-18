// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Edit() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e:any) => {
        setDesc(e.target.value)
    }


    const handleEdit = () => {
        console.log({ title, desc, index: localStorage.getItem('editIndex') })
        let blogs = localStorage.getItem('blogs') && (localStorage.getItem('blogs')||"[]").length > 0 ? JSON.parse(localStorage.getItem('blogs') || "[]") : []

        const _blogs = blogs.map((blog:any, blogInIndex:any) => {
            if (blogInIndex == localStorage.getItem('editIndex')) {
                return { title, desc }
            } else {
                return blog
            }
        })
        console.log(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
        navigate('/')
    }

    return (
        <>
            <h1> Edit BLOG </h1>
            <input value={title} onChange={(e) => handleTitleChange(e)}  /> <br />
            <input value={desc} onChange={(e) => handleDescChange(e)}  />
            <button onClick={handleEdit} > SUBMIT </button>

        </>
    )
}

export default Edit