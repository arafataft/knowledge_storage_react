import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleCard = ({infoCard,handleSpentTime,handleBookmark}) => {
    const {authorImage,coverImage,Author_name,Blog_title,readTime,published,tag}=infoCard;

    return (
        <div>
            <div className='info-card card mb-3'>
                    <div className="cover-image">
                        <img src={coverImage} className='img-fluid rounded-top' alt="" />
                    </div>

                    <div className='d-flex justify-content-between p-2'>
                        <div className="d-flex">
                            <div style={{
                                width: '50px',
                                borderRadius: '50px !important',
                                height: '70px'

                            }} >
                                <img className='rounded-circle img-fluid px-1' src={authorImage} alt="" />
                            </div>
                            <div className="">
                                <h6>{Author_name}</h6>
                                <p className='text-muted'>{published}</p>
                            </div>
                        </div>
                        <div className='d-flex text-muted'>
                            <p><span>{readTime}</span> min read</p>
                            {/* Bookmark Button  */}
                            <div className='px-1'><button className='btn btn-light btn-sm' onClick={()=>handleBookmark(Blog_title)}><FontAwesomeIcon icon={faBookmark} /></button></div>
                        </div>

                        
                    </div>

                    <div className='px-2'>
                        <h3>{Blog_title}</h3>
                        <p className='text-muted'>{tag}</p>
                        {/* mark as read button  */}
                        <button onClick={()=>handleSpentTime(readTime)} className="btn btn-link">Mark as read</button>
                    </div>
                    

                </div>
        </div>
    );
};

export default SingleCard;