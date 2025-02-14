import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        For My Love, Shruti ❤️
      </motion.h1>
      <motion.img 
        src="/assets/images/heart.png" 
        alt="Heart" 
        className="w-40 heart-animation"
      />
      <Link to="/first-meeting" className="text-xl bg-loveRed px-4 py-2 rounded-lg mt-5">
        Begin Our Story 💖
      </Link>
    </div>
  );
}

export default Home;
