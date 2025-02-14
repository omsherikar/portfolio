import { motion } from "framer-motion";

function FirstMeeting() {
  return (
    <motion.div 
      className="section"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>Our First Meeting ✨</h1>
      <p>That magical day when our eyes met for the first time, and the universe conspired to bring us together. ❤️</p>
    </motion.div>
  );
}

export default FirstMeeting;
