import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetterBox"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur, quasi esse quia minima fugiat ad assumenda. Soluta,
            ipsam reprehenderit. Modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            maiores odio beatae sapiente tenetur quia accusantium suscipit
            voluptas voluptates quam!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            laudantium placeat ratione modi alias perspiciatis aliquam repellat
            quos cumque libero?
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Ouality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            quasi dolore. Dolores mollitia quibusdam beatae.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            quasi dolore. Dolores mollitia quibusdam beatae.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
            quasi dolore. Dolores mollitia quibusdam beatae.
          </p>
        </div>
      </div>

      <NewsLetter/>
    </div>
  );
};

export default About;
