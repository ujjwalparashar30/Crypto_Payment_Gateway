import { quotes } from "../assets";

const ServiceCard = ({ color, title, icon, content }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center bg-gold-500`}>
    <i className={`${icon} text-white`}></i>
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {content}
      </p>
    </div>
  </div>
);

const FeedbackCard = ({ content, name, title, icon }) => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex flex-wrap justify-between md:p-20 py-12 px-4">
        <div className="flex flex-wrap justify-center items-center">
            <ServiceCard
                color="bg-[#2952E3]"
                title = {title}
                // icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
                content= {content}
                icon = {icon}
                className="w-full md:w-1/2 p-2"
            />
        </div>
    </div>
</div>

);


export default FeedbackCard;
