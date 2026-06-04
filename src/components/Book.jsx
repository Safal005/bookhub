function Book({ image, title = "Untitled Book" }) {
    const fallbackImage = "https://via.placeholder.com/150?text=No+Cover";

    return (
        <div className="Book">
            <img 
                src={image || fallbackImage} 
                alt={title} 
                className="Book-img" 
            />
            <h3 className="Book-title">{title}</h3>
        </div>
    );
}
export default Book