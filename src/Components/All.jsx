import React from 'react'

const All = ({data}) => {
  return (
    <div className='container'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {
          data.map((value,idx)=>(
            <div className='col' key={idx}>
              <div className='card h-100'>
                <img src={value.img} className='card-img-top' alt='image'/>
                <div className='card-body'>
                  <h5 className='card-title'>{value.content}</h5>
                  <p className='card-text'>{value.content2}<span className='read-more'><strong>Read More</strong></span></p>
                </div>
                <div className='card-footer'>
                  <small className='text-body-secondary'>{value.date}</small>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default All