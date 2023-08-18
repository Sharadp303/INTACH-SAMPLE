import React from 'react';
import './sidecontent.css'
const SideContent=()=>{
    return(
        <>
        <div className="sidecontent-container">
          
          <p><img src="./Images/new-animated.png" alt="new" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam assum tenetur natus, aliquid mollitia quasi molestiae facilis corrupti. Aspernatur quibusdam quod optio voluptatibus adipisci!</p>
          <h3>Featured Video</h3>
         
          <iframe src="https://www.youtube.com/embed/S4wKoTXyl3k" title="Hello1" width={250} height={150}></iframe>
          <p><img src="./Images/new-animated.png" alt="new" />Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam assum tenetur natus, aliquid mollitia quasi molestiae facilis corrupti. Aspernatur quibusdam quod optio voluptatibus adipisci!</p>
          
          </div>
        </>
    )

}
export default SideContent;