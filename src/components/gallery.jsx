
export default function GridGallery({images}) {
    return (
        <div >
           {images && images.map((imageUrl)=> <img src={imageUrl}/>)}
        </div>

    );
}

