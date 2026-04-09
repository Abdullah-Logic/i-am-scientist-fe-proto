
import { BsPerson } from "react-icons/bs";
import { FaBook, FaRegClock } from "react-icons/fa";
interface Course {
  id: number;
  title: string;
  description: string;
  hours: string;
  lessons: string;
  students: string;
}
interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => (
  <div className="bg-[#5D3794] rounded-md p-2 md:p-6 mb-6 shadow-lg text-white w-full">
    <div className="flex justify-between items-center mb-2 2xl:mb-3">
      <button className="font-semibold shadow-xl text-sm font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2   px-2 md:px-6 text-white rounded-md  transform transition-all duration-500 ease-in-out hover:opacity-90 w-fit">
        {" "}
        Course
      </button>
    </div>
    <h3 className="text-2xl font-misri font-bold mb-1 2xl:mb-2">
      {course.title}
    </h3>
    <p className="text-base 2xl:text-lg font-medium font-popins mb-2 2xl:mb-4">
      {course.description}
    </p>
    <div className="flex items-center space-x-2 md:space-x-6 text-[10px] md:text-sm 2xl:text-lg font-jost font-semibold text-white">
      <span className=" flex items-center gap-2">
        <FaRegClock /> {course.hours}
      </span>
      <span className=" flex items-center gap-2">
        <FaBook /> {course.lessons}{" "}
      </span>
      <span className=" flex items-center gap-2">
        <BsPerson /> {course.students}{" "}
      </span>
    </div>
    <button className="font-semibold text-sm  shadow-xl font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2   px-2 md:px-6 text-white rounded-md mt-4 transform transition-all duration-500 ease-in-out hover:opacity-90 w-fit">
      {" "}
      Register Now
    </button>
  </div>
);

export default CourseCard;
