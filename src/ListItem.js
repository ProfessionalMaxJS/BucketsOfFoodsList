import styled from "styled-components"

function ListItem({id, user, rName, address, favDish, price, image, comment}){

    return(
        <StyledListItem>
        <div>
            <h1>{rName}</h1>
            <h4>{address}</h4>
            <img src={image} alt="featured restaurant or dish" style={{width:200}} />
            <h2>Must Try: {favDish}</h2>
            <h3>{price}</h3>
            <p>Submitted by: {user}</p>
            <p>Why {`${user}`} thinks you must try this food before you die: <br/>{comment}</p>
        </div>
       </StyledListItem>
    )
}

export default ListItem;

const StyledListItem = styled.div`
background-color: rgba(50, 107, 157, 0.9);
margin: 10px;
border-radius: 20px;
font-family: monaco;
font-size: small;
padding: 10px;
color:#E3BB1C;

h1{
    font-weight: bold;
    font-size: medium;
}
}`

