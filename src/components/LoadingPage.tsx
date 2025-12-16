import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingPageProps {
  onComplete: () => void;
}

const LoadingPage = ({ onComplete }: LoadingPageProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowWelcome(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (showWelcome) {
      setTimeout(() => {
        setShowPortfolio(true);
        setTimeout(() => onComplete(), 1000);
      }, 2500);
    }
  }, [showWelcome, onComplete]);

  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const welcomeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    },
    exit: { 
      opacity: 0, 
      y: -50
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-gray-900 to-black"
      initial="visible"
      animate={showPortfolio ? "exit" : "visible"}
      variants={loadingVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gray-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {!showWelcome ? (
        <div className="text-center z-10">
          {/* Loading Spinner */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-gray-400 border-r-gray-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-b-gray-300 border-l-gray-600 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border-4 border-transparent border-t-gray-200 border-r-gray-700 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div
            className="text-gray-200 text-xl font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Loading Portfolio...
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-64 h-2 mx-auto bg-gray-800 rounded-full overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 256 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          {/* Percentage */}
          <motion.div
            className="text-gray-400 text-sm mt-4 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {loadingProgress}%
          </motion.div>
        </div>
      ) : (
        <motion.div
          className="text-center z-10"
          variants={welcomeVariants}
          initial="hidden"
          animate={showPortfolio ? "exit" : "visible"}
        >
          {/* Welcome Message */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            to my digital world
          </motion.p>

          {/* Animated Dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-gray-600/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-gray-600/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-gray-600/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-gray-600/50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      />
    </motion.div>
  );
};

export default LoadingPage;