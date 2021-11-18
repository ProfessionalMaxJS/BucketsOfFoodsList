import styled from "styled-components"

function ListItem({id, user, rName, address, favDish, price, image, comment}){

    return(
        <StyledListItem>
        <div>
            <h1>{rName}</h1>
            <h4>{address}</h4>
            <p>Submitted by: {user}</p>
            <h2>What you must try when you make it there: {favDish}</h2>
            <img src={image} alt="featured restaurant or dish" style={{width:200}} />
            <h3>{price}</h3>
            <p>Why {`${user}`} thinks you must try this food before you die: <br/>{comment}</p>
        </div>
       </StyledListItem>
    )
}

export default ListItem;

const StyledListItem = styled.div`
background-color: #326B9D;
margin: 10px;



}
}`

