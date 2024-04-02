import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-y-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <p className="text-4xl font-bold">NextJS Starter Template</p>

      <div className="flex items-center gap-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="84"
          height="84"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1"
            x1="24"
            x2="24"
            y1="43.734"
            y2="4.266"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0a070a"></stop>
            <stop offset=".465" stopColor="#2b2b2b"></stop>
            <stop offset="1" stopColor="#4b4b4b"></stop>
          </linearGradient>
          <circle
            cx="24"
            cy="24"
            r="19.734"
            fill="url(#NRNx2IPDe7PJlJvrxOKgWa_MWiBjkuHeMVq_gr1)"
          ></circle>
          <rect
            width="3.023"
            height="15.996"
            x="15.992"
            y="16.027"
            fill="#fff"
          ></rect>
          <linearGradient
            id="NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2"
            x1="30.512"
            x2="30.512"
            y1="33.021"
            y2="18.431"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".377" stopColor="#fff" stopOpacity="0"></stop>
            <stop offset=".666" stopColor="#fff" stopOpacity=".3"></stop>
            <stop offset=".988" stopColor="#fff"></stop>
          </linearGradient>
          <rect
            width="2.953"
            height="14.59"
            x="29.035"
            y="15.957"
            fill="url(#NRNx2IPDe7PJlJvrxOKgWb_MWiBjkuHeMVq_gr2)"
          ></rect>
          <linearGradient
            id="NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3"
            x1="22.102"
            x2="36.661"
            y1="21.443"
            y2="40.529"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".296" stopColor="#fff"></stop>
            <stop offset=".521" stopColor="#fff" stopOpacity=".5"></stop>
            <stop offset=".838" stopColor="#fff" stopOpacity="0"></stop>
          </linearGradient>
          <polygon
            fill="url(#NRNx2IPDe7PJlJvrxOKgWc_MWiBjkuHeMVq_gr3)"
            points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
          ></polygon>
        </svg>
        <svg
          width="64"
          height="64"
          viewBox="0 0 314 314"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M283.336 0H30.6641C13.7288 0 0 13.7288 0 30.6641V283.336C0 300.271 13.7288 314 30.6641 314H283.336C300.271 314 314 300.271 314 283.336V30.6641C314 13.7288 300.271 0 283.336 0Z"
            fill="#3178C6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M194.373 249.866V280.567C199.364 283.126 205.266 285.044 212.081 286.323C218.896 287.603 226.078 288.242 233.629 288.242C240.988 288.242 247.978 287.539 254.601 286.131C261.223 284.724 267.031 282.406 272.022 279.175C277.012 275.946 280.964 271.724 283.875 266.511C286.786 261.298 288.242 254.855 288.242 247.179C288.242 241.614 287.411 236.738 285.747 232.548C284.083 228.359 281.684 224.633 278.548 221.371C275.413 218.109 271.654 215.183 267.27 212.592C262.887 210.002 257.944 207.555 252.441 205.253C248.41 203.59 244.795 201.975 241.595 200.408C238.396 198.84 235.677 197.242 233.437 195.611C231.197 193.98 229.47 192.253 228.254 190.43C227.039 188.607 226.43 186.544 226.43 184.241C226.43 182.131 226.974 180.228 228.062 178.533C229.15 176.838 230.686 175.383 232.669 174.168C234.653 172.953 237.084 172.009 239.963 171.337C242.843 170.666 246.042 170.33 249.562 170.33C252.121 170.33 254.825 170.522 257.672 170.906C260.519 171.289 263.383 171.881 266.263 172.68C269.142 173.48 271.941 174.488 274.661 175.703C277.38 176.918 279.892 178.325 282.195 179.924V151.238C277.524 149.447 272.421 148.12 266.887 147.256C261.352 146.393 255.001 145.961 247.834 145.961C240.539 145.961 233.629 146.745 227.102 148.312C220.576 149.879 214.833 152.325 209.873 155.651C204.914 158.977 200.996 163.214 198.116 168.363C195.237 173.512 193.797 179.668 193.797 186.832C193.797 195.978 196.436 203.782 201.716 210.242C206.994 216.702 215.008 222.17 225.759 226.648C229.982 228.375 233.917 230.069 237.564 231.733C241.211 233.396 244.363 235.123 247.018 236.914C249.674 238.704 251.769 240.655 253.305 242.766C254.841 244.876 255.609 247.275 255.609 249.962C255.609 251.945 255.129 253.783 254.169 255.478C253.209 257.173 251.753 258.644 249.802 259.891C247.85 261.139 245.419 262.114 242.507 262.817C239.595 263.521 236.189 263.873 232.285 263.873C225.63 263.873 219.04 262.706 212.513 260.371C205.986 258.037 199.939 254.535 194.373 249.866ZM142.76 174.222H182.145V149.027H72.3672V174.222H111.56V286.402H142.76V174.222Z"
            fill="white"
            className="size-16"
          />
        </svg>
        <svg
          width="64"
          height="38.29"
          viewBox="0 0 361 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.25 72C102.283 24 132.367 0 180.5 0C252.7 0 261.725 54 297.825 63C321.892 69 342.95 60 361 36C348.967 84 318.883 108 270.75 108C198.55 108 189.525 54 153.425 45C129.358 39 108.3 48 90.25 72ZM0 180C12.0333 132 42.1167 108 90.25 108C162.45 108 171.475 162 207.575 171C231.642 177 252.7 168 270.75 144C258.717 192 228.633 216 180.5 216C108.3 216 99.275 162 63.175 153C39.1083 147 18.05 156 0 180Z"
            fill="#44A8B3"
          />
        </svg>
        <Image
          src="https://avatars.githubusercontent.com/u/139895814?s=48&v=4"
          alt=""
          width={1000}
          height={1000}
          className="size-16 rounded-lg"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="64"
          height="64"
          viewBox="0 0 48 48"
        >
          <path
            fill="#4db6ac"
            d="M44.284,36.035L27.687,1.429c-0.855-1.783-3.337-1.93-4.397-0.26L4.886,30.177	c-0.397,0.625-0.385,1.426,0.029,2.04l9.271,13.738c0.575,0.852,1.634,1.237,2.623,0.953l25.942-7.458	C44.208,39.031,44.939,37.402,44.284,36.035z M40.618,37.279L18.8,43.388c-0.505,0.142-0.98-0.305-0.87-0.818l7.735-36.097	c0.139-0.65,1.023-0.755,1.311-0.157l14.265,29.621C41.489,36.481,41.194,37.118,40.618,37.279z"
          ></path>
        </svg>
      </div>
    </main>
  );
}
