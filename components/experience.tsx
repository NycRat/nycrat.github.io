import Page from "@/components/page";

interface ExperienceInfo {
  position: string;
  company: string;
  dateRange: string;
  descriptions: string[];
}

const experienceInfoList: ExperienceInfo[] = [
  {
    position: "Teacher",
    company: "",
    dateRange: "",
    descriptions: [],
  },
  {
    position: "Teacher",
    company: "",
    dateRange: "",
    descriptions: [],
  },
  {
    position: "Teacher",
    company: "",
    dateRange: "",
    descriptions: [],
  },
];

export default function ExperienceSection() {
  return (
    <Page className="bg-gradient-to-b from-bg2 to-bg1" id="experience">
      {/* <h1 className="text-center text-6xl font-bold">Experience</h1> */}
      <div className="grid grid-cols-3">
        {experienceInfoList.map((info, i) => (
          <Experience key={i} {...info} />
        ))}
      </div>
    </Page>
  );
}

function Experience(props: ExperienceInfo) {
  return <div>{props.position}</div>;
}
