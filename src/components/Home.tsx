// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit';

function Home() {
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const blogs  = localStorage.getItem('blogs') ||"";
        setBlogs(JSON.parse(blogs)); 
    }, [blogs])

    const handleDelete = (blogOutIndex: any) => {
        const _blogs = blogs.filter((blog:any, blogInIndex:any) => {
            if (blogInIndex !== blogOutIndex) {
                return blog
            }
        })
        console.log(_blogs)
        setBlogs(_blogs)
        localStorage.setItem('blogs', JSON.stringify(_blogs))
    }

    const handleEdit = (blogIndex:any) => {
        localStorage.setItem('editIndex', blogIndex)
        navigate('/edit')
    }



    return (
        <>
            <br />
            <button
                onClick={() => {
                    navigate('/add')
                }}
                // variant="contained" > ADD BLOG </button>
                 > ADD BLOG </button>
            <br />

            {
                blogs && blogs.length > 0 ?
                    blogs.map((blog:any, blogIndex:any) => {
                        return (
                            <div style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '200px'
                                }}>
                                    {blog?.title }</span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                    {blog?.desc}
                                </span>
                                <button style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(blogIndex)} >Edit</button>
                                <button style={{ color: 'red' }} onClick={() => handleDelete(blogIndex)} >Delete</button>
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
        </>
    )
}

export default Home
