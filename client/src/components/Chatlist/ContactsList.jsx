import { reducerCases } from "@/context/constants";
import { useStateProvider } from "@/context/StateContext";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import ChatListItem from "./ChatListItem";

function ContactsList() {
  const [allContacts, setAllContacts] = useState([])
  const [searchTerm,setSearchTerm] = useState("")
  const [searchContacts,setSearchContacts] = useState([])
  const [{ }, dispatch] = useStateProvider();

  useEffect(()=>{
    if(searchTerm.length){
      const filteredData = {}
      Object.keys(allContacts).forEach((key)=>{
        filteredData[key]= allContacts[key].filter((obj)=>
        obj.name.toLowerCase().includes(searchTerm.toLowerCase()))
      })
      setSearchContacts(filteredData)
    }else{
      setSearchContacts(allContacts)
    }
  },[searchTerm])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users }
        } = await axios.get(GET_ALL_CONTACTS)
        setAllContacts(users)
        setSearchContacts(users)
      } catch (err) {
        console.log(err)
      }
    }
    getContacts();
  }, [])
  return (
    <div className="h-full flex flex-col">
      <div className="h-24 flex items-end px-3 py-4">
        <div className="flex items-center gap-12 text-greenishblue">
          <BiArrowBack
            className="cursor-pointer text-xl"
            onClick={() =>
              dispatch({ type: reducerCases.SET_ALL_CONTACTS_PAGE })
            }
          />
          <span>New Chat</span>
        </div>
      </div>
      <div className="h-full flex-auto overflow-auto custom-scrollbar">

      
      <div className="bg-greenishblue flex py-3 pl-5 items-center gap-3 h-14">
        <div className="bg-panelbackground flex items-center gap-5 px-3 py-1 rounded-lg flex-grow mr-5">
          <div>
            <BiSearchAlt2 className="text-greenishblue cursor-pointer text-l" />
          </div>
          <div>
            <input type="text"
              placeholder="Search Contacts"
              className="bg-transparent text-sm focus:outline-none text-black w-full"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
        {
          Object.entries(searchContacts).map(([initialLetter, userList])=>{
            return ( userList.length>0 &&
              (<div key={Date.now() + initialLetter}>
                <div className="text-greenishblue pl-10 py-5">{initialLetter}</div>
                {
                  userList.map(contact=>{
                    return (<ChatListItem
                      data={contact}
                      isContactPage={true}
                      key={contact.id}
                    />)
                  })
                }
              </div>)
            )
          })
        }
        </div>
    </div>
  );
}

export default ContactsList;
