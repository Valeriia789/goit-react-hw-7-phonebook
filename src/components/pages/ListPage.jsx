// import { Outlet, useNavigate } from "react-router-dom";

// import { useFetchContactsQuery } from "redux/contactsSlice";
// import { ContactsList } from "components/ContactList/ContactsList";

// export const ListPage = () => {
//   const navigate = useNavigate()
//   const {data: contacts, error, isLoading} = useFetchContactsQuery();
  
//   return (
//   <div>
//     <button type="button" onClick={() => navigate('/create')}>Add new contact</button>

//     {error && (<p>Ooooops, something went wrong</p>)}

//     {isLoading ? (<b>Loading...</b>) : (<ContactsList contacts={contacts}/>)}
//     <Outlet/>
//   </div>
//   )
// }