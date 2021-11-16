
function ListItem({user, rname, address, favDish, price, image, comment}){

    return(
        <div>
            <h1>{rname}</h1>
            <h4>{address}</h4>
            <p>Submitted by: {user}</p>
            <h2>What you must try when you make it there: {favDish}</h2>
            <img src={image} alt="featured restaurant or dish" />
            <h3>{price}</h3>
            <p>Why {`${user}`} thinks you must try this food before you die: <br/>{comment}</p>

        </div>
    )
}

export default ListItem;