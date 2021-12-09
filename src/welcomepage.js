import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import logo from './logo.png'
import searchicon from './searchicon.png'
import userprofilephoto from './userprofilephoto.png'
import membersearchicon from './membersearchicon.png'
import Data from './MemberSearch.json'
import searchfilter from './searchfilter.png'
import SearcFiltr  from './SearcFiltr'
import { useNavigate } from 'react-router-dom'
import Landingpage from './Landingpage'




const Welcomepage = () => {
    const [searchCount,setSearchCount] = useState(0);
    const [Showfilters, setShowfilters] = useState(false);
    const [isSearchF,setSearchF] = useState(false);
    const [changenavig, setChangenavig] = useState(false);
    const navigation = useNavigate();
    const [userData, setUserData]= useState([]);

    const data_copy=[];
   const {state} = useLocation();
   //serch Filter
   const searchF=()=>{
       setSearchF(true)
   }
  const handSearch = e=>{
      e.preventDefault();
    setShowfilters(true)
    
  }
//landing page
const ChangehandlerNavig = Obj =>{
    console.log(Obj)
    setUserData(Obj);
   // e.preventDefault();
    setChangenavig(true)
    

}

    // member searching  
    const[search, setSearch] = useState('');
    let searchName="";
    useEffect(() => {
        console.log(search);
        searchName= search;
        setSearchCount(Data.filter(MemberSearch => MemberSearch.name.toLowerCase().includes(searchName.toLowerCase())).length)
       console.log(search + "hiiiiii" + searchCount);
    })

    const OnSearchChange=(e)=>{

        setSearch(e);
        
    }
    
    const sideMenu = [
        {name:"BAM 2.0", value: "li1", id:1 },
        {name:"Member Dashboard", value: "li2", id:2 },
        {name:"Activity Log", value: "li3", id:3 },
        {name:"Audit Log", value: "li4", id:4 },
        {name:"Access Control", value: "li5", id:5 },
        {name:"Username and Password", value: "li6", id:6 },
        {name:"Notes", value: "li7", id:7 },
        {name:"Emulate Member", value: "li7", id:7 },
        {name:"Reinstate Member", value: "li7", id:7 },
        {name:"Mobile Site", value: "li7", id:7 }
    ];

   return (
    <div>

                <div className="bamlogo">
                <img src={logo} alt="logo" height="10%" width="10%"  />
                </div>
                {/* Nav block*/}

                <div className="memberblock"> 
                
                <hr className="hrline"/>
                
                            <div>
                    
                            {!changenavig && <form>
                                
                                    <div className="filr">
                                        <div className="searchfilter">
                                            <img src={searchfilter} alt="serchfilter" height="55%" width="5%" onClick={searchF}/>
                                        </div>
                                        <div className="memsearch">
                                            <input type="text"  placeholder="Member Search" value={search} onChange={  e=> OnSearchChange (e.target.value) }/>
                                            <button type="button" onClick={handSearch}>search</button>
                                        </div>  
                                    </div> 
                                         
                                </form>
                            }

                                
                            {!changenavig &&    <hr className="hrline01"/>
                             }  
                            {!changenavig &&   
                                <p className="accountname">Hi, {state}</p>
                                
                            }  
                            {!changenavig &&
                                <div className="userprofilephoto">
                                <img src={userprofilephoto} alt="userprofilephoto" height="25%" width="30%"  />
                                </div>
                            }
                                 
                                {isSearchF && <SearcFiltr/>}
                                {/* BAM Message and Member icon*/}
                                <div className="bammessagehead">
                                {!changenavig && 
                                <div className="membersearchicon">
                                    <img src={membersearchicon} alt="logo" height="10%" width="8%"  />
                                    </div>
                                }

                            { (searchCount !==0 || search == "" )&& !changenavig &&    <div className="bammessage">
                            <h3>Hello, {state}. <br/>Welcome to BAM 2.0 CSR.</h3>
                                <p className="message">People search for and choose a Memberto access their subscription<br/> information and activity with BAM 2.0</p>
                            </div>
                            }
                            { searchCount ===0 && search !== "" && !Showfilters && <div className="bammessage">
                            <h3 style={{color:'red'}}>No Members were found that<br/> match your search, "{search}."</h3>
                                <p className="message">People search for and choose a Memberto access their subscription<br/> information and activity with BAM 2.0</p>
                            </div>
                            }
                        </div>
                    
                </div>   
                {changenavig && <Landingpage userData={userData}/>}
            
            {/* member searching menu*/}
            <div>

            </div>
            {/* member searching */}
            
           {Showfilters && search !== "" && !changenavig && <div className="searchresults">
               
            { Data.filter(MemberSearch => MemberSearch.name.toLowerCase().includes(search.toLowerCase())).map(
                         MemberSearch => {
                             return <div style={{marginLeft:330}}>
                                    
                                    <a href="javascript:void(0)" onClick={()=>ChangehandlerNavig(MemberSearch)} value={MemberSearch.memberid}>{MemberSearch.name}</a>
                                   
                                   <div  style={{marginLeft:150, marginTop:-22}}>
                                      {MemberSearch.memberid}
                                   </div>
                                   <div  style={{marginLeft:270, marginTop:-22}}>
                                   {MemberSearch.GroupPlanName}
                                   </div>
                                   <div style={{marginLeft:420, marginTop:-22}}>
                                   {MemberSearch.MemberType}
                                   </div>
                                   <div style={{marginLeft:580, marginTop:-22}}>
                                   {MemberSearch.PlanType}
                                   </div>
                                   <div style={{marginLeft:780, marginTop:-22}}>
                                   {MemberSearch.EffectiveDate}
                                   </div>
                                 </div>
                              }

                          
                     ) }

                   
            </div>
            } 
            
            
        </div> 
            {/* side menu */}
            <div className="sideNavMenu">
             { sideMenu.map((list)=> {
                 return(
                   <div className="sideNavMenuItem">
                       <p>{list.name}</p>
                   </div>
                 )      
                 
             }) }
            </div>
            

    </div>
    )
}

export default Welcomepage
