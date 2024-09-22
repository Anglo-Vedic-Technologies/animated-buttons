import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Download() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [uploadStyles, setUploadStyles] = useState<{
    top: number;
    opacity: number;
  }>({ top: 12, opacity: 1 });
  const [uploadingStyles, setUploadingStyles] = useState<{
    top: number;
    opacity: number;
  }>({ top: 56, opacity: 0 });
  const [uploadedStyles, setUploadedStyles] = useState<{
    top: number;
    opacity: number;
  }>({ top: 56, opacity: 0 });
  const [upIcon, setUpIcon] = useState<{ height: number }>({
    height: 24,
  });
  const [uploadAnimation, setUploadAnimation] = useState({
    progress: 0,
    opacity: 0,
    path: "",
  });
  const [checkAnimation, setCheckAnimation] = useState({
    left: 0,
    right: 0,
  });

  function onClick() {
    buttonRef.current?.setAttribute("disabled", "true");
    setUploadStyles({ top: 0, opacity: 0 });
    setUpIcon({ height: 0 });
    setUploadingStyles({ top: 12, opacity: 1 });
    uploadFile();
  }

  async function uploadFile() {
    await new Promise<void>((resolve) => {
      let progress = 0;
      const intervalId = setInterval(() => {
        progress += 10;
        setUploadAnimation((curr) => {
          let opacity;
          if (curr.progress == 0) {
            opacity = 1;
          }
          return {
            progress: curr.progress + 10,
            opacity: opacity || curr.opacity,
            path: getPath(curr.progress + 10),
          };
        });
        if (progress === 100) {
          clearInterval(intervalId);
          resolve();
        }
      }, 500);
    });
    setUploadingStyles({ top: 0, opacity: 0 });
    setUploadedStyles({ top: 12, opacity: 1 });
    setCheckAnimation({ left: 10, right: 0 });
    setTimeout(() => {
      setCheckAnimation((curr) => ({ ...curr, right: 25 }));
    }, 400);
  }

  return (
    <button
      className=" text-[#e9f5db] bg-[#027bce] relative rounded-full py-3 w-40 cursor-pointer h-12 font-lato"
      ref={buttonRef}
      onClick={onClick}
    >
      <motion.div
        className="absolute left-6 top-3"
        animate={uploadStyles}
        transition={{ duration: 0.7 }}
      >
        Upload
      </motion.div>
      <motion.div
        className="absolute left-6 top-full opacity-0"
        animate={uploadingStyles}
        transition={{ duration: 0.7 }}
      >
        Uploading
      </motion.div>
      <motion.div
        className="absolute left-6 top-full opacity-0"
        animate={uploadedStyles}
        transition={{ duration: 0.7 }}
      >
        Uploaded
      </motion.div>
      <div className="w-12 absolute right-0 top-0 h-full rounded-full  bg-[#00487c]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 absolute top-3 left-3 z-10"
          animate={upIcon}
          transition={{ duration: 0.7 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </motion.svg>
        <svg
          className="absolute top-0 left-0 w-full h-full transition-all duration-700"
          style={{ opacity: uploadAnimation.opacity }}
        >
          <path
            d={uploadAnimation.path}
            fill="#0496ff"
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute left-0 top-0 w-full h-full rounded-full">
          <motion.div
            className="absolute w-0 h-0 border-t-2 rotate-45 top-6 left-3 origin-left"
            animate={{ width: checkAnimation.left }}
            transition={{
              duration: 0.4,
            }}
          />
          <motion.div
            className="absolute w-0 h-0 border-t-2 -rotate-45 top-[31.07px] left-[19.07px] origin-left"
            animate={{ width: checkAnimation.right }}
            transition={{
              duration: 0.4,
            }}
          />
        </div>
      </div>
    </button>
  );
}

function getPath(progress: number) {
  if (progress === 100) {
    return `M 24,0 A 24 24 0 1 0 24.01,0`;
  }
  const angle = ((90 - (180 / 100) * progress) * 2 * Math.PI) / 360;
  const x = 24 - 24 * Math.cos(angle);
  const dx = x + 48 * Math.cos(angle);
  const y = 24 + 24 * Math.sin(angle);
  const path = `M ${x},${y} A 24 24 0 ${progress > 50 ? 1 : 0} 0 ${dx},${y}`;
  return path;
}
