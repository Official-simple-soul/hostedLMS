import { useEffect, useState } from "react";
import axios from "axios";
import { Ban, Filter } from "../../../assets";
import { v4 as uuidv4 } from "uuid";
import { BsThreeDotsVertical } from "react-icons/bs";
import Pagination from "../../../components/global/Pagination";
import More from "../../../components/admin/studentList/More";
import DropdownFilter from "../../../components/admin/studentList/DropdownFilter";
const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const tracks = [
    "All",
    "UI/UX",
    "Frontend",
    "Backend",
    "Android",
    "Project Management",
    "CAD",
    "Digital Marketing",
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [openmore, setMore] = useState(false);
  const [Id, setId] = useState(null);
  const [filter, setFilter] = useState("All");
  const [dropDownFilter, setDropDownFilter] = useState(false);
  const [updatedData, setUpdatedData] = useState(studentList);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = updatedData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* General Filter */
  const [allFilters, setAllFilter] = useState([]);

  const listAllFilters = (data) => {
    if (!allFilters.includes(data)) setAllFilter(data);
  };
  const FilterByAllData = () => {
    if (allFilters) {
      const newData = studentList.filter((eachData) => {
        return allFilters.every((key) => {
          return [
            eachData.track,
            eachData.gender,
            eachData.level,
            eachData.certificate,
          ].includes(key);
        });
      });
      setUpdatedData(newData);
    } else {
      setUpdatedData(studentList);
    }
  };
  const openMore = (id) => {
    setMore(!openmore);
    setId(id);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchList = async () => {
      const res = await axios.get("http://localhost:8000/students");
      setStudentList(res.data);
      setUpdatedData(res.data);
      setIsLoading(false);
    };
    fetchList();
  }, []);
  useEffect(() => {
    FilterByAllData();
  }, [allFilters]);
  /* filter */
  const FilterByTrack = (data) => {
    setFilter(data);
    const newData = studentList.filter((list) => {
      if (list.track == data) {
        return list;
      } else if (data == "All") {
        return studentList;
      }
    });
    setUpdatedData(newData);
  };
  /*const filterStudent = async (track) => {
    if(track == "All") {
      const res = await axios.get("http://localhost:8000/students"); 
      setStudentList(res.data);
    } else {
      const res = await axios.get(`http://localhost:8000/students?track=${track}`);
      setStudentList(res.data);
    } 
  } */
  /*const filterStudent = () => {
    studentList.filter((list) => {
      if (filter == "All") {
        console.log(list);
        return list;
      } else if (list.track == filter) {
        return list;
      }
    });
  }; */

  /* Checkbox */
  const [checkedList, setCheckedList] = useState([]);
  const [isParentChecked, setIsParentChecked] = useState(false);
  const changeCheckboxStatus = (e, id) => {
    const myUsers = [...studentList];
    const { checked } = e.target;
    let updatedList = [...checkedList];
    myUsers.map((user) => {
      if (id === "p1") {
        setIsParentChecked(checked);
        user.isChecked = checked;
        if (checked) {
          updatedList = myUsers;
        } else {
          updatedList = [];
        }
      } else {
        if (user.id === id) {
          user.isChecked = checked;
        }
        const isAllChildsChecked = myUsers.every(
          (user) => user.isChecked === true
        );
        if (isAllChildsChecked) {
          setIsParentChecked(checked);
          updatedList = myUsers;
        } else {
          setIsParentChecked(false);
          updatedList.splice(checkedList.indexOf(checkedList.value), id);
        }
        updatedList = myUsers.filter((data) => data.isChecked == true);
      }
      return user;
    });
    setStudentList([...myUsers]);
    setCheckedList(updatedList);
  };
  return (
    <div className="overflow-x-hidden mb-16">
      <div className="flex justify-between">
        <h3 className="text-2xl font-medium">Student</h3>
        <div className="flex">
          <div className="filter flex mr-5 justify-center items-center">
            <p className="mr-3 lg:flex hidden">Filter</p>
            <div>
              <button
                className="rounded-lg w-[160px] text-[#808080] py-2 pl-3 bg-white border border-black lg:flex hidden"
                onClick={() => setDropDownFilter(!dropDownFilter)}
              >
                Both, Student..
              </button>
              <img
                src={Filter}
                alt="filter"
                className="lg:hidden flex cursor-pointer text-3xl"
                onClick={() => setDropDownFilter(!dropDownFilter)}
              />
              {dropDownFilter && (
                <DropdownFilter
                  filter={listAllFilters}
                  FilterByAllData={FilterByAllData}
                />
              )}
            </div>
          </div>
          <button className="border border-[#0D6EFD] bg-transparent text-[#0D6EFD] flex justify-center items-center rounded-lg py-2 lg:px-3 px-2">
            <img src={Ban} alt="ban" />
            <p className="ml-2 lg:flex hidden">View Banned</p>
          </button>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="lg:w-full lg:overflow-x-hidden overflow-x-scroll">
          <div className="flex xl:w-4/6 lg:w-11/12 w-[900px] my-4 justify-between text-[#0D6EFD]">
            {tracks.map((data, index) => (
              <p
                key={index}
                className={`cursor-pointer ${
                  data == filter
                    ? "text-black border-b-2 border-black"
                    : "text-[#0D6EFD]"
                } `}
                onClick={() => FilterByTrack(data)}
              >
                {data}
              </p>
            ))}
          </div>
        </div>
        <p className="text-center my-6">
          Showing {currentPage * postsPerPage - 9} -{" "}
          {currentPage * postsPerPage} of {updatedData.length} students
        </p>
        <div className="my-3 lg:w-full lg:overflow-x-hidden overflow-x-scroll">
          <div className="bg-[#0D6EFD08]/5 lg:w-full w-[1200px] rounded-xl py-4 px-5">
            <div className="flex justify-between items-center text-[#0D6EFD]">
              <div className="flex w-1/6 justify-between">
                <div className="id flex items-center">
                  <input
                    type="checkbox"
                    className="border-[#0D6EFD] bg-transparent"
                    value="parent"
                    onChange={(e) => changeCheckboxStatus(e, "p1")}
                    checked={isParentChecked}
                  />
                  <p className="ml-4">ID</p>
                </div>
                <p className="">User</p>
              </div>
              <div className="flex w-1/2 justify-center">
                <p>Gender</p>
                <p className="ml-12">Track</p>
              </div>
              <div className="flex w-1/3 justify-between mr-12">
                <p>Stage</p>
                <p className="mx-5">Overall Grade</p>
                <p>Certificate</p>
              </div>
            </div>
          </div>
          <div className="lg:h-full lg:w-full w-[1200px] lg:max-h-full max-h-[80vh] lg:overflow-y-hidden overflow-y-scroll">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                {currentPosts &&
                  currentPosts.map((list) => (
                    <div
                      className={`bg-white flex rounded-xl my-5 py-4 px-5 lg:w-full w-[1200px] ${
                        list.isChecked && "border-x-[3px] border-blue-600"
                      }`}
                      key={list.id}
                    >
                      <div className="flex flex-1 justify-between items-center">
                        <div className="grid grid-cols-2 xl:w-1/5 lg:w-[25%] w-1/5 justify-between xl:gap-x-20 lg:gap-x-0 gap-x-20">
                          <div className="id flex items-center">
                            <input
                              type="checkbox"
                              className="border-[#0D6EFD] bg-transparent"
                              checked={list?.isChecked}
                              value="child"
                              onChange={(e) => changeCheckboxStatus(e, list.id)}
                            />
                            <p className="xl:ml-4 ml-2">{list.id}</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <img src={list.img} alt="images" />
                            <span>
                              <p className="xl:text-lg text-base font-semibold flex xl:whitespace-nowrap lg:whitespace-pre-wrap whitespace-nowrap">
                                {list.name}
                              </p>
                              <p className="text-xs">{list.level}</p>
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 xl:w-1/6 lg:w-[25%] w-1/6 justify-center">
                          <p>{list.gender}</p>
                          <p className="xl:ml-4 xl:whitespace-nowrap lg:whitespace-pre-wrap whitespace-nowrap">
                            {list.track}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 xl:w-4/12 w-[35%] justify-between mr-4">
                          <p className="pl-8">{list.stage}</p>
                          <p className="xl:mx-5 lg:mx-0 mx-5">{list.grade}</p>
                          <p
                            className={`${
                              list.certificate === "Uploaded"
                                ? "text-[#00BD56]"
                                : "text-red-500"
                            } text-center`}
                          >
                            {list.certificate}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <BsThreeDotsVertical
                          onClick={() => {
                            openMore(list.id);
                          }}
                        />
                      </div>
                      <div>
                        <More
                          studentId={uuidv4()}
                          setMore={setMore}
                          list={list}
                          openmore={openmore}
                          Id={Id}
                        />
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end justify-start w-full">
        <Pagination
          postsPerPage={postsPerPage}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          paginate={paginate}
          currentPage={currentPage}
          totalPosts={updatedData.length}
        />
      </div>
    </div>
  );
};
export default StudentList;
