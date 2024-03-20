import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container">
      <div
        className="py-8 grid"
        style={{
          gridTemplateColumns: "minmax(0, 7fr) minmax(0, 3fr) ",
          columnGap: "15px",
        }}
      >
        <div className="bg-white border-[1px] border-[#d4dbe0] text-black  pt-[40px] px-[30px] pb-[20px]">
          <h2 className="text-4xl font-semibold mb-4">
            Allow search engines to index my WordPress site
          </h2>
          <p className="text-base mb-6">
            For your WordPress website to appear in search results in Google and
            Bing, you must first allow these search engines to crawl and index
            your site. Follow the steps below to ensure that search engines can
            index the pages on your site
          </p>
          <ol>
            <li className="my-3">
              1.&nbsp;
              <Link href="#" className="underline text-[#09757a]  ">
                Sign in to WordPress.
              </Link>
            </li>
            <li className="my-3">
              2. Select&nbsp;<strong>Settings</strong> and then&nbsp;
              <strong>Reading.</strong>
            </li>
            <li className="my-3">
              3. Make sure&nbsp;
              <strong>Discourage search engines from indexing this site</strong>
              &nbsp;is&nbsp;<i>not selected.</i>
              <ul className="pl-[40px] list-disc">
                <li className="my-3">
                  If this option is selected, clear the checkbox and then
                  select&nbsp;
                  <strong>Save Changes.</strong>
                  <div className="bg-[#D3C1F7] my-4 p-4 flex gap-1">
                    <span>
                      <Image
                        src='data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.258a9.75 9.75 0 1 0 9.75 9.75A9.761 9.761 0 0 0 12 2.257zm0 18a8.25 8.25 0 1 1 8.25-8.25 8.26 8.26 0 0 1-8.25 8.25z"/><path d="M12 11.258a.75.75 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0v-5a.75.75 0 0 0-.75-.75zm-.003-4.125a1.125 1.125 0 1 0 .003 0z"/></svg>'
                        alt="img"
                        height={32}
                        width={32}
                      />
                    </span>
                    <span>
                      <p>
                        <strong>Note:</strong> After enabling indexing, it might
                        take a few days to a few weeks for search engines to
                        crawl and rank your site. Also, you can
                        <Link
                          href="#"
                          className="underline text-[#09757a] ml-[4px] "
                        >
                          ask Google to recrawl your site.
                        </Link>
                      </p>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          </ol>
          <h2 className="text-3xl font-semibold mt-[32px] mb-[16px] ">
            More info
          </h2>
          <ul>
            <li className="my-3">
              <Link href="#" className="underline text-[#09757a]  ">
                Improve Google indexing
              </Link>
            </li>
            <li className="my-3">
              <Link href="#" className="underline text-[#09757a]  ">
                Create a sitemap in WordPress
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="bg-white border-[1px] border-[#d4dbe0] text-black  p-[20px] mb-5">
            <h3 className="text-[28px] font-semibold mb-3">
              Share this article
            </h3>
            <div>
              <ul className="flex items-center ">
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <CiMail size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaFacebook size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaLinkedin size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <RiTwitterXLine size={30} color="#09757A" />
                  </Link>
                </li>
                <li className="p-[10px] hover:bg-[#D7EFEF] transition-all">
                  <Link href="#">
                    <FaPinterestP size={30} color="#09757A" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white border-[1px] border-[#d4dbe0] text-black  pt-[40px] px-[30px] pb-[20px]">
            <h2 className="text-[32px] font-semibold pb-[16px]">
              Related articles
            </h2>
            <div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer"
                >
                  Allow indexing of all pages in WordPress
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer"
                >
                  Sign in to WordPress
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer"
                >
                  Secure my website
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0] border-b-[1px]">
                <Link
                  href="#"
                  className="text-xl font-medium text-[#111]  cursor-pointer"
                >
                  Add categories to my WordPress site
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-between items-center py-[20px] px-[8px] hover:underline border-[#d4dbe0]">
                <Link
                  href="#"
                  className="text-xl ffont-medium text-[#111]  cursor-pointer"
                >
                  Add tags to my WordPress site
                </Link>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M9 19.4L7.6 18l6-6-6-6L9 4.6l7.4 7.4L9 19.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
