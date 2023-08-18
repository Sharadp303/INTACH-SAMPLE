import React from "react";
import "./content.css"

const contentImages=[{title:'Architectural Heritage',url:'./Images/Content/architectural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/art-material-heritage1.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/craft-community-heritage.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/cultural-affair.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/documentation-centre1.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/heritage-academy.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/heritage-education-communication.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/intangible-cultural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/listing-cell.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/natural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'./Images/Content/P1030270-219x128.jpg'} ,
                    {title:'Architectural Heritage',url:'./Images/Content/P1030386-219x128.jpg'}           
                    ]
                    
const Content=()=>{
    return (
        <>
        <div className="content">
            <div className="content-container">   
                {
                    contentImages.map((ele,indx)=>{
                        return(
                            <>
                            <div className="inside-container">

                            <h2>{ele.title}</h2>
                            <a  className="content-link" href="www.google.com">
                            <img src={ele.url} alt="content" />
                            <h5> READ MORE...</h5>
                            </a>
                            <hr />
                            </div>
                            
                            </>
                        )
                    })
                }
           
            </div>
           
        </div>
        </>
    );
}
export default Content;
