"use client"
import {
    Brain,
    Cloud,
    Code2,
    Database,
    Layout,
    LucideTreePalm,
    MessageSquare,
    Server,
    SettingsIcon,
    Users,
    Wrench,
} from "lucide-react";
import {ScrollAnimation} from "@/components/ScrollAnimation";
import {
    AppwriteLogo,
    ExpressLogo,
    GitLogo,
    JavaScriptLogo,
    MongoDBLogo,
    MUILogo,
    NextjsLogo,
    NodeLogo,
    ReactLogo,
    RenderLogo,
    TailwindLogo,
    TypeOrmLogo,
    TypeScriptLogo,
    UploadthingLogo,
    VercelLogo,
} from "@/components/TechLogo";
import {SiJira, SiKoyeb, SiMysql, SiNestjs, SiPrisma, SiRailway, SiStrapi, SiSwagger, SiVite} from "react-icons/si";
import {BiLogoRedux, BiLogoSpringBoot} from "react-icons/bi";
import {DiDjango, DiPostgresql} from "react-icons/di";
import {IoLogoVue} from "react-icons/io5";
import {TbBrandNuxt} from "react-icons/tb";
import {CgCircleci, CgCPlusPlus, CgDesignmodo} from "react-icons/cg";
import {FaJava} from "react-icons/fa";
import {MdHtml, MdOutlineRollerShadesClosed} from "react-icons/md";
import {RiCodeSSlashFill} from "react-icons/ri";
import {AiFillTool} from "react-icons/ai";
import {BsTrello} from "react-icons/bs";
import {PiTreeStructure} from "react-icons/pi";
import {GiCircleClaws} from "react-icons/gi";

const skills = [
    {
        category: "Top Skill",
        icon: <Code2 className="w-6 h-6"/>,
        items: [
            {name: "TypeScript", icon: <TypeScriptLogo/>},
            {name: "React.js", icon: <ReactLogo className="w-4 h-4"/>},
            {name: "Next.js", icon: <NextjsLogo className="w-4 h-4"/>},
            {name: "SpringBoot", icon: <BiLogoSpringBoot/>},
            {name: "Nest.Js", icon: <SiNestjs/>},
        ],
    },
    {
        category: "Programming Languages",
        icon: <Code2 className="w-6 h-6"/>,
        items: [
            {name: "JavaScript", icon: <JavaScriptLogo/>},
            {name: "TypeScript", icon: <TypeScriptLogo/>},
            {name: "C++", icon: <CgCPlusPlus/>},
            {name: "JAVA", icon: <FaJava/>},
        ],
    },
    {
        category: "Front-End Development",
        icon: <Layout className="w-6 h-6"/>,
        items: [
            {name: "HTML", icon: <MdHtml/>},
            {name: "React.js", icon: <ReactLogo className="w-4 h-4"/>},
            {name: "Next.js", icon: <NextjsLogo className="w-4 h-4"/>},
            {name: "Vue.js", icon: <IoLogoVue className="w-4 h-4"/>},
            {name: "Nuxt.js", icon: <TbBrandNuxt className="w-4 h-4"/>}
        ],
    },
    {
        category: "Style & Design",
        icon: <CgDesignmodo className="w-6 h-6"/>,
        items: [
            {name: "CSS", icon: <RiCodeSSlashFill/>},
            {name: "Shadcn", icon: <MdOutlineRollerShadesClosed className="w-4 h-4"/>},
            {name: "MUI", icon: <MUILogo/>},
            {name: "Tailwind", icon: <TailwindLogo/>}
        ],
    },
    {
        category: "Back-End Development",
        icon: <Server className="w-6 h-6"/>,
        items: [
            {name: "Node.js", icon: <NodeLogo/>},
            {name: "Express.Js", icon: <ExpressLogo/>},
            {name: "Nest.Js", icon: <SiNestjs/>},
            {name: "SpringBoot", icon: <BiLogoSpringBoot/>},
            {name: "Django", icon: <DiDjango/>},
        ],
    },
    {
        category: "Databases & Cloud Storage",
        icon: <Database className="w-6 h-6"/>,
        items: [
            {name: "MongoDB", icon: <MongoDBLogo/>},
            {name: "Cloudinary", icon: <Cloud className="w-4 h-4"/>},
            {name: "Uploadthing", icon: <UploadthingLogo className="w-4 h-4"/>},
            {name: "Postgres", icon: <DiPostgresql/>},
            {name: "MySql", icon: <SiMysql className="w-4 h-4"/>},
        ],
    },
    {
        category: "Tools & third-Party Libraries",
        icon: <AiFillTool className="w-6 h-6"/>,
        items: [
            {name: "Vite", icon: <SiVite className="w-4 h-4"/>},
            {name: "Redux", icon: <BiLogoRedux className="w-4 h-4"/>},
            {name: "TanStack", icon: <LucideTreePalm className="w-4 h-4"/>},
            {name: "Clerk", icon: <CgCircleci className="w-4 h-4 "/>},
            {name: "Kinde", icon: <>K</>},
            {name: "Swagger", icon: <SiSwagger className="w-4 h-4"/>},
            {name: "Drawio", icon: <PiTreeStructure className="w-4 h-4 rotate-90"/>},
            {name: "Trello", icon: <BsTrello className="w-4 h-4"/>},
            {name: "Jira", icon: <SiJira className="w-4 h-4"/>}
        ],
    },
    {
        category: "Version Control & DevOps",
        icon: <GitLogo/>,
        items: [
            {name: "Git", icon: <GitLogo/>},
            {name: "GitHub", icon: <GitLogo/>},
            {name: "Vercel", icon: <VercelLogo/>},
            {name: "Render", icon: <RenderLogo/>},
            {name: "Railway", icon: <SiRailway/>},
            {name: "Koyeb", icon: <SiKoyeb/>},
        ],
    },
    {
        category: "Api Integration & Design & Backend platform",
        icon: <CgDesignmodo className="w-6 h-6"/>,
        items: [
            {name: "Strapi", icon: <SiStrapi/>},
            {name: "Appwrite", icon: <AppwriteLogo/>},
            {name: "Convex", icon: <GiCircleClaws/>},

        ],
    },
    {
        category: "ORM",
        icon: <SettingsIcon className="w-6 h-6"/>,
        items: [
            {name: "Prisma", icon: <SiPrisma className="w-4 h-4"/>},
            {name: "Typeorm", icon: <TypeOrmLogo/>},
        ],
    },
    {
        category: "Soft Skills",
        icon: <Brain className="w-6 h-6"/>,
        items: [
            {name: "Teamwork", icon: <Users className="w-4 h-4"/>},
            {name: "Communication", icon: <MessageSquare className="w-4 h-4"/>},
            {name: "Debugging", icon: <Wrench className="w-4 h-4"/>},
        ],
    },
];

const Skills = () => {
    return (
        <div className="h-full pt-20 px-4 max-w-6xl mx-auto pb-20 overflow-y-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup) => (
                    <ScrollAnimation key={skillGroup.category}>
                        <div
                            className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {skillGroup.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="text-gray-400 group-hover:text-white transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span
                                            className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
};

export default Skills;