interface ExperienceInfo {
  position: string;
  company: string;
  dateRange: string;
  descriptions: string[];
}

const experienceInfoList: ExperienceInfo[] = [
  {
    position: "C++ Teacher",
    company: "DC Coding Association",
    dateRange: "Sep. 2022 - Mar. 2023",
    descriptions: [
      "Prepared course outline and taught weekly classes about C++",
      "Taught without anyone else assisting, managed class of around 10+ students",
      "Created, assigned, and marked take home assignments to strengthen student learning",
      "Applied project-based learning for the focus of the course",
    ],
  },
  {
    position: "Arduino Workshop Instructor",
    company: "DC Coding Association",
    dateRange: "May 2024",
    descriptions: [
      "Created project-based workshop teaching basics of electronics and Arduino",
      "Worked together with two other instructors to teach students",
      "Taught groups of 8-12 students",
      "Taught students of various ages (6-13)",
      "Taught both programming and electronic wiring",
    ],
  },
  {
    position: "Science / Programming Teacher",
    company: "BC Children and Youth Connection Society",
    dateRange: "Sep. 2022 - Present",
    descriptions: [
      "Prepared and taught weekly classes based on BC Science 8 curriculum",
      "Prepared and taught weekly classes based on self-created curriculum on various programming languages (C++/ Java)",
      "Taught students from various ages (8-16)",
      "Taught class of around 10+ students",
      "Explored many methods of teaching, slideshow, teach with examples, project based learning",
    ],
  },
];

function Experience(props: ExperienceInfo) {
  return (
    <div className="text-center p-8">
      <h2 className="text-3xl font-black">{props.position}</h2>
      <div className="text-1xl font-light">{props.company}</div>
      <br />
      <div>
        {props.descriptions.map((a, i) => (
          <div key={i}>{a}</div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <div id="experience" className="bg-gradient-to-b from-bg2 to-bg1 pt-8">
      <h1 className="text-center text-6xl font-light">Experience</h1>
      {/* <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-[1px] bg-white"></div> */}
      {experienceInfoList.map((info, i) => (
        <Experience key={i} {...info} />
      ))}
    </div>
  );
}
