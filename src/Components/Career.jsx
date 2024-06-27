
const Career = ({data}) => {
  return <div className='container'>
  <div className="row row-cols-1 row-cols-md-3 g-4">

    {
    data.map((value,idx)=>{
        return value.type==="Career"? (<div className="col" key= {idx}>
        <div className="card h-100">
          <img src={value.img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{value.content}</h5>
            <p className="card-text">{value.content2}<span className="read-more"><strong>Read more</strong></span></p>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">{value.date}</small>
          </div>
        </div>
      </div>
        ):""
    })
}
  </div>
</div>
}

export default Career