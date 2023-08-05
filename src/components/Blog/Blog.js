import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';


import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';


function Blog() {

    const { theme } = useContext(ThemeContext);





    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{ backgroundColor: theme.secondary }}>
                    <div className="blog--header">
                        <h1 style={{ color: theme.primary }}>Fotos</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 4).reverse().map(blog => (
                                <SingleBlog
                                    theme={theme}
                                    title={blog.title}
                                    image={blog.image}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default Blog
