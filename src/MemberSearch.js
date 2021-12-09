import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import logo from './logo.png'
import membersearchicon from './membersearchicon.png'
import Data from './MemberSearch.json'
import { useNavigate } from 'react-router-dom'

export const MemberSearch = () => {

    const navigation = useNavigate();
    const[search, setSearch] = useState('');
    const [number, setNumber] = useState('');
    const [memberid, setMemberid] = useState('');
    const [userN, setUserN] = useState('');
    const [terms, setTerms] = useState('');
    const [terms1, setTerms1] = useState('');
    const [searchb, setSearchb] = useState('');
    const [selection, setSelection] = useState('default');
    const [ShowGroupError, setShowGroupError] = useState(false);
    const [ShowMemberError,setShowMemberError] = useState(false);
    const {state} = useLocation();

   //selection
   useEffect(()=>{
       console.log(selection);
   }

   )
   const handlerSelect = e =>{
     setSelection(e.target.value);  
     console.log(selection);

   }


   //group number
   const handleChangeGroupNumber = e =>{
    setNumber(e.target.value); 
    
   }
   //member id
   const handleChangeMemberId = e =>{
    setMemberid(e.target.value);   
   }
   // search button
   const onsearch = e =>{
            e.preventDefault();
            Data.forEach(element => {
                //console.log(element.groupno);
                if(element.groupno === number && element.memberid === memberid){
                    navigation('/Landingpage')
                }
                else if(element.groupno !== number && element.memberid === memberid){
                    setShowGroupError(true)
                }
                else if(element.groupno === number && element.memberid !== memberid){
                    setShowMemberError(true) 
                }
                
                
                
            });
   }
    
    const sideMenu = [
        {name0:"BAM 2.0", value: "li0", id:0 },
        {name1:"Member Search", value: "li1", id:1 },
        {name2:"Member Dashboard", value: "li2", id:2 },
        {name3:"Activity Log", value: "li3", id:3 },
        {name4:"Audit Log", value: "li4", id:4 },
        {name5:"Access Control", value: "li5", id:5 },
        {name6:"Username and Password", value: "li6", id:6 },
        {name7:"Notes", value: "li7", id:7 },
        {name8:"Emulate Member", value: "li7", id:7 },
        {name9:"Reinstate Member", value: "li7", id:7 },
        {name10:"Mobile Site", value: "li7", id:7 }
    ];

    return (
     <div className="container">
           
                    <div className="bamlogo">
                    <img src={logo} alt="logo" height="10%" width="10%"  />
                    </div>
                    {/* Search icon*/}
        <div className="article">
           
                    <div className="membersearchicon">
                      <img src={membersearchicon} alt="logo" height="10%" width="8%"  />
                    </div>
                    <div className="bammessage">
                       <h2>Find a Member</h2>
                       <p className="membermessage">Hello, {state}. Please use the fields below to <br/>find a subscription Member.</p>
                    </div>
            
           
            <div className="memberblock"> 
           
                <form className="form">
                    <div className="memsearch1">
                        <p className="division">&#x0002A;Division</p>
                        <select  className="select" value={selection}  onChange={handlerSelect}>
                           <option value="default">Choose a Division</option>
                           <option value="Washington">Washington</option>
                           <option value="Texas">Texas</option>
                           <option value="New York">New York</option>
                           <option value="Los Angeles">Los Angeles</option>
                           <option value="Las Vegas">Las Vegas</option>
                           <option value="Austin">Austin</option>
                        </select><br/>
                    </div> 
                    <div className="flexi">
                        <div className="groupn">
                            <p className="groupnumber">Group Number</p>
                            <input type="text" placeholder="01-2345609" value={number} onChange={handleChangeGroupNumber} size="25"/>
                            
                        {ShowGroupError  && <p className="errormessage">Group Number not found</p>}
                        </div> 
                        <div className="memberid">
                            <p className="memberidtext">Member ID</p>
                            <input type="text" placeholder="Joe"  value={memberid} onChange={handleChangeMemberId} size="25"/>
                            {ShowMemberError  && <p className="errormessage">Member Id not found</p>}
                        </div> 
                    </div>
                    
                    <div>
                        <hr className="memberhrline"/>
                           <p className="or">Or</p>
                        <hr className="memberhrline1"/>
                    </div>
                    <div className="usern">  
                        <label for="username">username</label><br/><input type="text" value={userN} size="35"/>   
                    </div> 
                    <div className="federal">
                        <input type="checkbox" value={terms} />
                        <label for="checkbox">I am a federal employee</label>
                    </div>
                    <div className="dependents">
                        <input type="checkbox" value={terms1} />
                        <label for="checkbox">Search Dependents</label>
                    </div>
                       <div >
                            <button type="button"  onClick={onsearch} className="searchbu" disabled={selection ==='default'}>search</button>
                        </div>
                    
                     
                </form>
            </div>
         
            {/* side menu */}
            <div className="sideNavMenu">
             { sideMenu.map((list)=> {
                 return(
                   <div className="sideNavMenuItem">
                       <p>{list.name0}</p>
                       <p className="msear">{list.name1}</p>
                       <p>{list.name2}</p>
                       <p>{list.name3}</p>
                       <p>{list.name4}</p>
                       <p>{list.name5}</p>
                       <p>{list.name6}</p>
                       <p>{list.name7}</p>
                       <p>{list.name8}</p>
                       <p>{list.name9}</p>
                       <p>{list.name10}</p>

                   </div>
                 )      
                 
             }) }
            </div>
            </div>  

      </div>
    )
            
}
export default MemberSearch