function Book({image,title}){
    return (
        <>
        <div className="Book">
        <img src={image}  className="Book-img" />
        <h3 className="Book-title">{title}</h3>
        </div>
        </>
    )
}
export default Book