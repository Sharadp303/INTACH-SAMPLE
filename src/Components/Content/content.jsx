import React from "react";
import "./content.css"

const contentImages=[{title:'Architectural Heritage',url:'http://www.intach.org/images/architectural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/art-material-heritage.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/craft-community-heritage.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/cultural-affair.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/documentation-centre.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/heritage-academy.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/heritage-education-communication.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/intangible-cultural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/listing-cell.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/natural-heritage.jpg'},
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/P1030270-219x128.jpg'} ,
                    {title:'Architectural Heritage',url:'http://www.intach.org/images/P1030386-219x128.jpg'}           
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
