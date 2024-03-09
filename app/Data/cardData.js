import { IoIosPeople } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdBasket } from "react-icons/io";
import { IoBagCheck } from "react-icons/io5";





export const Data = [{
    card_icon : <IoIosPeople fontSize={30} />,
    card_title: "People",
    card_desc: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.",
    btn_cont: "connect"
},
{
    card_icon : <FaLocationDot />,
    card_title: "Location",
    card_desc: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.",
    btn_cont: "Meet up"
},
{
    card_icon : <IoMdBasket />,
    card_title: "Product",
    card_desc: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.",
    btn_cont: "Get It"
},
{
    card_icon : <IoBagCheck />,
    card_title: "Program",
    card_desc: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.",
    btn_cont: "Attend"
}]