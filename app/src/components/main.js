import video from "../img/test1.MOV";
import video1 from "../img/test2.MOV";
import video2 from "../img/test3.MOV";
import imageMain from "../img/f1Team.png";
import "../index.css";

const Main = () => (
  <main className="h-full text-white font-bold">
    {/* Main Landing Content */}
    <div>
      <p className="text-white text-7xl font-bold text-center mb-14 mt-20 font-faster">
        Welcome to F1 Cuts!
      </p>
      <img
        src={imageMain}
        alt="two men in a formula 1 racecar"
        className="w-3/4 mx-auto"
      />
      <p className="text-white text-2xl font-bold text-center m-20 w-1/2 mx-auto">
        Welcome to F1Cuts, your one-stop-shop for high-quality video editing
        services. Our team of experienced editors is dedicated to delivering
        stunning, engaging, and impactful videos that tell your story in the
        most captivating way possible.
      </p>
    </div>
    {/* Row 1 */}
    <div className="grid grid-cols-2 grid-rows-1 justify-items-center h-1/2 items-center  m-7 my-20">
      <video
        class="video"
        src={video}
        controls="autoplay"
        className=" border-white border-4"
      />
      <p className="w-3/4 text-justify align-middle ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et
        magnis dis parturient montes nascetur. Et malesuada fames ac turpis.
        Dolor sit amet consectetur adipiscing elit duis. Mi sit amet mauris
        commodo quis imperdiet.
      </p>
    </div>
    {/* Row 2 */}
    <div className="grid grid-cols-2 grid-rows-1 justify-items-center h-1/2 items-center m-7 my-10">
      <p className="w-3/4 text-justify">
        Whether you're creating a corporate video, a music video, a social media
        ad, or anything in between, F1Cuts has the skills and expertise to bring
        your vision to life. With a focus on innovation and creativity, we use
        the latest technology and techniques to enhance the quality of your
        video and make it stand out from the crowd.
      </p>
      <video
        class="video"
        src={video1}
        controls="autoplay"
        className=" border-white border-4"
      />
    </div>
    {/* Row 3 */}
    <div className="grid grid-cols-2 grid-rows-1 justify-items-center h-1/2 items-center m-7">
      <video
        class="video"
        src={video2}
        controls="autoplay"
        className=" border-white border-4"
      />

      <p className="w-3/4 text-justify">
        At F1Cuts, we understand that every client is unique, which is why we
        take the time to understand your needs and preferences, and work closely
        with you to create a video that meets your specific requirements. We're
        passionate about what we do, and it shows in the quality of our work.
      </p>
    </div>
    {/* Row 4 */}
    <div className="grid grid-cols-1 grid-rows-1 justify-items-center h-1/2 items-center">
      <p className="w-3/4 text-justify text-2xl">
        So if you're looking for a video editing agency that puts your needs
        first and delivers exceptional results, look no further than F1Cuts.
        <br></br>
        <br></br>
        Contact us today to start your video editing project and take your
        content to the next level.
      </p>
    </div>
  </main>
);

export default Main;
