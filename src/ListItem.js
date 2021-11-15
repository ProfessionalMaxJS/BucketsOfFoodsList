<<<<<<< HEAD
function ListItem({user, rname, address, FavDish, Price, image, comment}){
    console.log(rname)
    return(
        <div>
            <h1>{rname}</h1>
=======
function ListItem({user, Rname, address, FavDish, Price, image, comment}){
    return(
        <div>
            <h1>{Rname}</h1>
>>>>>>> e333567bff331c13123cb1bce02a874feb0eab7b
            <h4>{address}</h4>
            <p>Submitted by: {user}</p>
            <h2>What you must try when you make it there: {FavDish}</h2>
            <img src={image} alt="featured restaurant or dish" />
            <h3>{Price}</h3>
            <p>Why {`${user}`} thinks you must try this food before you die: <br/>{comment}</p>

        </div>
    )
}

export default ListItem;