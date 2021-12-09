import React,{useState} from 'react'


export const Landingpage = (props) => {
    console.log(props.userData)
    const [user, setUser] =useState([props.userData]);

    return (
        <div>
            
            
           return { user.map((
                         postDetail, index) => {
                             return(
                                 <div className="scroll">
                                        <div>
                                        <p className="memberinfohead">Member Information</p>
                                        <p className="pipe">Effective Date &nbsp;{postDetail.effectivedate} &#124; Subscriber&nbsp;{postDetail.subscriber} &#124; Group Number&nbsp;{postDetail.groupnumber}</p>
                                        </div>
                                        <div>
                                        <p style={{marginLeft:300, marginTop:-5}}>{postDetail.name}</p>
                                        <p style={{marginLeft:300, marginTop:-5, fontSize:10}}><span style={{paddingRight:29}}>username</span> {postDetail.username}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}><span style={{paddingRight:24}}>Member ID</span> {postDetail.memberid}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10,}}><span style={{paddingRight:16}}>MID Number</span> {postDetail.MID}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}>Member Type   &nbsp;&nbsp;&nbsp;&nbsp; {postDetail.MemberType}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}><span style={{paddingRight:55}}>SSN</span>  {postDetail.ssn}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}><span style={{paddingRight:18}}>Date of Birth</span>  {postDetail.dob}</p><br/>
                                        </div>
                                        <div>
                                        <p style={{marginLeft:700, marginTop: -130, fontSize:10}}><span style={{paddingRight:35}}>Email</span> {postDetail.email}</p><br/>
                                        <p style={{marginLeft:700, marginTop:-28, fontSize:10}}><span style={{paddingRight:24}}>Address</span> {postDetail.address}</p><br/>
                                        <p style={{marginLeft:700, marginTop:-28, fontSize:10,}}><span style={{paddingRight:42}}>City</span> {postDetail.city}</p><br/>
                                        <p style={{marginLeft:700, marginTop:-28, fontSize:10}}><span style={{paddingRight:38}}>State </span> {postDetail.state}</p><br/>
                                        <p style={{marginLeft:700, marginTop:-28, fontSize:10}}><span style={{paddingRight:15}}>Zip/Postal</span>  {postDetail.postal}</p><br/>
                                        <p style={{marginLeft:700, marginTop:-28, fontSize:10}}><span style={{paddingRight:18}}>Plan Type</span>  {postDetail.plantype}</p><br/>
                                        </div>
                                        <div>
                                        <p style={{marginLeft:1070, marginTop: -130, fontSize:10}}><span style={{paddingRight:40}}>Failed Login</span> {postDetail.failedlogin}</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-28, fontSize:10}}><span style={{paddingRight:24}}>last Failed Login</span> {postDetail.lastfailedlogin}</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-28, fontSize:10,}}><span style={{paddingRight:42}}>failed Login Count</span> {postDetail.failedlogincount}</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-28, fontSize:10}}><span style={{paddingRight:38}}>Time of Lock </span> {postDetail.timeoflock}</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-28, fontSize:10}}><span style={{paddingRight:40}}>Locked Limit</span>  {postDetail.lockedlimit}</p><br/>
                                        </div>
                                        <div>
                                        <p className="secondblock">Usernames and Passwords</p><br/>
                                        <p style={{marginLeft:300, marginTop:-30, fontSize:10,fontWeight:'bold'}}>username</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}>{postDetail.usname}</p><br/>
                                        <p style={{marginLeft:370, marginTop:-60, fontSize:10,fontWeight:'bold'}}>Password Changed</p><br/>
                                        <p style={{marginLeft:370, marginTop:-28, fontSize:10}}>{postDetail.passwordch}</p><br/>
                                        <p style={{marginLeft:470, marginTop:-63, fontSize:10,fontWeight:'bold'}}>Password Strength</p><br/>
                                        <p style={{marginLeft:470, marginTop:-28, fontSize:10}}>{postDetail.passwordstrength}</p><br/>
                                        </div>
                                        <div>
                                        <p className="secondblockright">Access Control</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-32, fontSize:10,fontWeight:'bold'}}>Access Status</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-28, fontSize:10}}>{postDetail.activestatus}</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-62, fontSize:10,fontWeight:'bold'}}>Email Status</p><br/>
                                        <p style={{marginLeft:1070, marginTop:-28, fontSize:10}}>{postDetail.emailstatus}</p><br/>
                                        </div>
                                        <div>
                                        <p className="thirdblock">Tickets</p><br/>
                                        <p style={{marginLeft:300, marginTop:-32, fontSize:10,fontWeight:'bold'}}>Date</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}>{postDetail.ticketdate}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-20, fontSize:10}}>{postDetail.ticketdate1}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-20, fontSize:10}}>{postDetail.ticketdate2}</p><br/>
                                        <p style={{marginLeft:370, marginTop:-114, fontSize:10,fontWeight:'bold'}}>Event</p><br/>
                                        <p style={{marginLeft:370, marginRight: 800, marginTop:-28, fontSize:10}}>{postDetail.eventcontent}</p><br/>
                                        <p style={{marginLeft:370, marginRight: 800, marginTop:-28, fontSize:10}}>{postDetail.eventcontent1}</p><br/>
                                        <p style={{marginLeft:370, marginRight: 800, marginTop:-28, fontSize:10}}>{postDetail.eventcontent2}</p><br/>
                                        <p style={{marginLeft:620, marginTop:-138, fontSize:10,fontWeight:'bold'}}>Category</p><br/>
                                        <p style={{marginLeft:620, marginTop:-26, fontSize:10}}>{postDetail.category}</p><br/>
                                        <p style={{marginLeft:620, marginTop:-15, fontSize:10}}>{postDetail.category1}</p><br/>
                                        <p style={{marginLeft:620, marginTop:-15, fontSize:10}}>{postDetail.category2}</p><br/>
                                        </div>
                                        <div>
                                        <p className="thirdblockright">Notes</p><br/>
                                        <p style={{marginLeft:900, marginTop:-38, fontSize:10,fontWeight:'bold'}}>Date</p><br/>
                                        <p style={{marginLeft:900, marginTop:-28, fontSize:10}}>{postDetail.notesdate}</p><br/>
                                        <p style={{marginLeft:900, marginTop:-12, fontSize:10}}>{postDetail.notesdate1}</p><br/>
                                        <p style={{marginLeft:900, marginTop:-10, fontSize:10}}>{postDetail.notesdate2}</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-125, fontSize:10,fontWeight:'bold'}}>By</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-28, fontSize:10}}>{postDetail.notesby}</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-14, fontSize:10}}>{postDetail.notesby1}</p><br/>
                                        <p style={{marginLeft:1000, marginTop:-11, fontSize:10}}>{postDetail.notesby2}</p><br/>
                                        <p style={{marginLeft:1100, marginTop:-129, fontSize:10,fontWeight:'bold'}}>Notes</p><br/>
                                        <p style={{marginLeft:1050,marginRight: 135, marginTop:-28, fontSize:10}}>{postDetail.notesnot}</p><br/>
                                        <p style={{marginLeft:1050,marginRight: 135, marginTop:-28, fontSize:10}}>{postDetail.notesnot1}</p><br/>
                                        <p style={{marginLeft:1050,marginRight: 135, marginTop:-23, fontSize:10}}>{postDetail.notesnot2}</p><br/>
                                        </div>
                                        <div>
                                        <p className="fourthblockright">Member Activity Log</p><br/>  
                                        <p style={{marginLeft:300, marginTop:-32, fontSize:10,fontWeight:'bold'}}>Event Timestamp</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}> {postDetail.timestamp}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}> {postDetail.timestamp1}</p><br/>
                                        <p style={{marginLeft:300, marginTop:-28, fontSize:10}}> {postDetail.timestamp2}</p><br/>
                                        <p style={{marginLeft:600, marginTop:-94, fontSize:10,fontWeight:'bold'}}>Event Description</p><br/>
                                        <p style={{marginLeft:600, marginTop:-28, fontSize:10}}> {postDetail.eventdescription}</p><br/>
                                        <p style={{marginLeft:600, marginTop:-28, fontSize:10}}> {postDetail.eventdescription1}</p><br/>
                                        <p style={{marginLeft:600, marginTop:-28, fontSize:10}}> {postDetail.eventdescription2}</p><br/>
                                        <p style={{marginLeft:900, marginTop:-100, fontSize:10,fontWeight:'bold'}}>IP Address</p><br/>
                                        <p style={{marginLeft:900, marginTop:-28, fontSize:10}}> {postDetail.ip}</p><br/>
                                        <p style={{marginLeft:900, marginTop:-28, fontSize:10}}> {postDetail.ip1}</p><br/>
                                        <p style={{marginLeft:900, marginTop:-28, fontSize:10}}> {postDetail.ip2}</p><br/>
                                        <p style={{marginLeft:1050, marginTop:-96, fontSize:10,fontWeight:'bold'}}>Source App/Portal</p><br/>
                                        <p style={{marginLeft:1050, marginTop:-28, fontSize:10}}> {postDetail.portal}</p><br/>
                                        <p style={{marginLeft:1050, marginTop:-28, fontSize:10}}> {postDetail.portal1}</p><br/>
                                        <p style={{marginLeft:1050, marginTop:-28, fontSize:10}}> {postDetail.portal2}</p><br/>
                                        </div>

                                    </div>
                                );
                         })
                         }

           
                       
        
        
        
    
    
        
        
        
        </div>
    )
}
export default Landingpage;