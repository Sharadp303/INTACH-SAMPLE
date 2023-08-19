import React from "react";
import { motion } from "framer-motion";
import "./sidecontent.css";
const SideContent = () => {
  return (
    <>
      <div className="sidecontent-container">
        <motion.p
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: "2", delay: "1" }}
        >
          <img src="./Images/new-animated.png" alt="new" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam
          assum tenetur natus, aliquid mollitia quasi molestiae facilis
          corrupti. Aspernatur quibusdam quod optio voluptatibus adipisci!
        </motion.p>
        <h3>Featured Video</h3>

        <iframe
          src="https://www.youtube.com/embed/S4wKoTXyl3k"
          title="Hello1"
          width={250}
          height={150}
        ></iframe>
        <motion.p
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: "2", delay: "1" }}
        >
          <img src="./Images/new-animated.png" alt="new" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aperiam
          assum tenetur natus, aliquid mollitia quasi molestiae facilis
          corrupti. Aspernatur quibusdam quod optio voluptatibus adipisci!
        </motion.p>
      </div>
    </>
  );
};
export default SideContent;
