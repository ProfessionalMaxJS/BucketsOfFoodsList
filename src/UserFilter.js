function UserFilter({lists,setSelectedUser}){
    function handleClick(e){
       setSelectedUser(e.target.innerText)
    }
    const userList = lists.map((list) => <button onClick={handleClick}>{list.user}</button>)
 return( 

    userList
 )
}
export default UserFilter;