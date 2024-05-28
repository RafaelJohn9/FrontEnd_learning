import { motion } from "framer-motion";

const ContinuousParticle = () => {
  return (
    <motion.div
      className="particle bg-green-300 h-1 w-1 rounded-full"
      style={{
        position: "absolute",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        transform: "skewX(12deg) skewY(12deg)",
      }}
      animate={{
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
};

function Background() {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col bg-black overflow-hidden absolute inset-0 z-0">
      <div className="text-blue-500  w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-t from-[#0093db] to-black">
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>

          </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-r to-black from-[#0093db]"> 
          <div><ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>

       </div>
       <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-l to-black from-[#0093db]"> 
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>

       </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-r to-black from-[#0093db]"> 
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>

      </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-l to-black from-[#0093db]"> 
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div> 
         <div> <ContinuousParticle /></div>
         <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>

      </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-r to-black from-[#0093db]"> 
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>

      </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-l to-black from-[#0093db]"> 
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
          <div> <ContinuousParticle /></div>
        </div>
      <div className="text-blue-500 w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0 bg-gradient-to-r from-[#0093db] to-black"> 
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div> 
          <div> <ContinuousParticle /></div> 
      </div>
      <div className="text-blue-500 bg-gradient-to-t from-black to-[#0093db] w-full text-center h-32 transform -skew-y-12   -skew-x-12 m-0">
      <div> <ContinuousParticle /></div>
      <div> <ContinuousParticle /></div>
      <div> <ContinuousParticle /></div> 
      <div> <ContinuousParticle /></div> 
      <div> <ContinuousParticle /></div> 
      <div> <ContinuousParticle /></div> 
      </div>
    </div>
  );
}

export default Background;
