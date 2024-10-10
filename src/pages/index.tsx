import Page from "@/components/Layout/Page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page className="flex items-center justify-center">
      <section className="flex flex-col gap-y-5">
        <p className="lg:text-6xl font-bold text-4xl md:text-5xl bg-gradient-to-br from-primary to-secondary inline-block text-transparent bg-clip-text">
          <span className="dark:text-white text-black">This is</span> NextJS
          Starter Template
        </p>
        <p className="lg:text-2xl text-lg md:text-xl flex items-center gap-x-2.5">
          🚀 Powered by{" "}
          <Link href={"https://deviniter.vercel.app/"} target="_blank">
            <Image
              src="/logos/FullLogo.png"
              alt="DevIniter Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-10 w-auto"
            />
          </Link>
        </p>
        <div className="flex items-center gap-x-2.5 mt-32">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-auto"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g clip-path="url(#clip0)">
                {" "}
                <path
                  d="M11.2141 0.00645944C11.1625 0.0111515 10.9982 0.0275738 10.8504 0.039304C7.44164 0.346635 4.24868 2.18593 2.22639 5.01291C1.10029 6.58476 0.380059 8.36775 0.107918 10.2563C0.0117302 10.9156 0 11.1103 0 12.0041C0 12.898 0.0117302 13.0927 0.107918 13.7519C0.760117 18.2587 3.96716 22.0452 8.31672 23.4481C9.0956 23.6991 9.91672 23.8704 10.8504 23.9736C11.2141 24.0135 12.7859 24.0135 13.1496 23.9736C14.7613 23.7953 16.1267 23.3965 17.4733 22.7091C17.6798 22.6035 17.7196 22.5754 17.6915 22.5519C17.6727 22.5378 16.793 21.3578 15.7372 19.9314L13.8182 17.339L11.4135 13.7801C10.0903 11.8235 9.00176 10.2235 8.99238 10.2235C8.98299 10.2211 8.97361 11.8024 8.96891 13.7331C8.96188 17.1138 8.95953 17.2499 8.9173 17.3296C8.85631 17.4446 8.80938 17.4915 8.71085 17.5431C8.63578 17.5807 8.57009 17.5877 8.21584 17.5877H7.80997L7.70205 17.5197C7.63167 17.4751 7.58006 17.4164 7.54487 17.3484L7.4956 17.2428L7.50029 12.539L7.50733 7.83285L7.58006 7.74136C7.6176 7.69209 7.69736 7.62875 7.75367 7.59825C7.84985 7.55133 7.88739 7.54664 8.29325 7.54664C8.77185 7.54664 8.85161 7.5654 8.97595 7.70147C9.01114 7.73901 10.3132 9.7003 11.871 12.0628C13.4287 14.4252 15.5589 17.651 16.6053 19.2346L18.5056 22.1132L18.6018 22.0499C19.4534 21.4962 20.3543 20.7079 21.0674 19.8868C22.5853 18.1437 23.5636 16.0182 23.8921 13.7519C23.9883 13.0927 24 12.898 24 12.0041C24 11.1103 23.9883 10.9156 23.8921 10.2563C23.2399 5.74957 20.0328 1.96306 15.6833 0.560125C14.9161 0.311445 14.0997 0.140184 13.1848 0.036958C12.9595 0.0134976 11.4088 -0.0123089 11.2141 0.00645944ZM16.1267 7.26511C16.2393 7.32142 16.3308 7.42933 16.3636 7.54194C16.3824 7.60294 16.3871 8.90734 16.3824 11.8469L16.3754 16.0651L15.6317 14.9249L14.8856 13.7848V10.7185C14.8856 8.73608 14.895 7.62171 14.9091 7.56775C14.9466 7.43637 15.0287 7.33315 15.1413 7.27215C15.2375 7.22288 15.2727 7.21819 15.6411 7.21819C15.9883 7.21819 16.0493 7.22288 16.1267 7.26511Z"
                  fill="#000000"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="h-12 w-auto"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_tailwind</title>
              <path
                d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
                fill="#44a8b3"
              ></path>
            </g>
          </svg>
          <Image
            src="/logos/lucide.jpg"
            alt="Lucide Icon Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-12 w-auto"
          />
          <Image
            src="/logos/Shadcn.png"
            alt="Shadcn Icon Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-12 w-auto"
          />
          <svg
            viewBox="0 0 32 32"
            className="h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>file_type_light_prisma</title>
              <path
                d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z"
                fill="#0c344b"
              ></path>
            </g>
          </svg>
        </div>
      </section>
    </Page>
  );
}
