import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddtoBookmark, handleMarkAsRead}) => {
    const {id, title, cover, author ,author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className=' mb-16 space-y-4'>
            <img className='w-10/12 mb-6' src={cover} alt={`Cover image for ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                    <img className='w-1/3' src={author_img} alt="" />
                    <div className='ml-4'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddtoBookmark(blog)}
                     className='ml-2 text-xl text-red-600' ><FaBookmark /></button>
                </div>
                        
            </div>

            <div>
                <h2 className='text-4xl'>{title}</h2>
                  
                <p className='flex gap-3'>
                 { 
                    hashtags.map(hash =>
                    <span><a href="">#{hash}</a></span>)
                 }
                </p>
                <button 
                onClick={() => handleMarkAsRead(id, reading_time)}
                 className='text-purple-700 font-bold underline'>Mark As Read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;