export type LessonItem = {
  title: string;
  topics: string[];
};

export type SidebarCourseItem = {
  title: string;
  href: string;
  lessons: LessonItem[];
};

export const courseContentLinks: SidebarCourseItem[] = [
  {
    title: "Quarky Creator's Kit Course",
    lessons: [
      {
        title: "Lesson 1: Introduction",
        topics: ["What's Inside the Kit?", "Build Your Own Custom Robot"],
      },
      {
        title: "Lesson 2: Basics",
        topics: [
          "Quarky Assembly",
          "Expansion Board Assembly",
          "Servo Assembly",
          "Motor Assembly",
          "IR Sensor Assembly",
          "Micro Servo Assembly",
        ],
      },
      {
        title: "Lesson 3: Mechanism Construction",
        topics: [
          "Basic Linkage Mechanisms",
          "Assembly of Basic Linkage Mechanisms",
          "Advanced Mechanisms",
        ],
      },
    ],
    href: "/courses/course-content/creators-kits",
  },
  {
    title: "Introduction to Programming",
    lessons: [
      {
        title: "Lesson 1: Introduction",
        topics: [
          "Traffic Signal",
          "Programming Analogy",
          "PictoBlox App Introduction",
          "PictoBlox Interface",
          "Activity: Make Tobi Walk",
          "Quiz 1: Introduction to PictoBlox",
        ],
      },
      {
        title: "Lesson 2: Backdrops, Costumes, and Animation",
        topics: [
          "Backdrops",
          "Costumes",
          "Activity: Making an Animation in PictoBlox",
          "Quiz 2: Backdrops, Costumes, and Animation",
        ],
      },
      {
        title: "Lesson 3: Drawing Shapes",
        topics: [
          "Shapes & Pen Extension",
          "Activity 1: Draw a Square",
          "Activity 2: Draw a Triangle",
          "Quiz 3: Drawing Shapes",
        ],
      },
      {
        title: "Lesson 4: Variables",
        topics: [
          "Variables in PictoBlox",
          "Activity 1: Tracking a Sprite's Position Using Variables",
          "Activity 2: Saving User Inputs in Variables",
          "Quiz 4: Variables - The Multitaskers",
        ],
      },
      {
        title: "Lesson 5: Arithmetic Operators",
        topics: [
          "Arithmetic Operators",
          "Activity 1: Making an Addition Calculator",
          "Activity 2: Drawing a Shape by Inputting Values",
        ],
      },
      {
        title: "Lesson 6: Conditional Statements",
        topics: [
          "Relational Operators",
          "If () Then Block",
          "If () Then Else Block",
        ],
      },
      {
        title: "Lesson 7: Logical Operators",
        topics: [
          "AND, OR, and NOT Operators",
          "Activity: Calculating the Grades",
          "Assignment: Advanced Calculator",
        ],
      },
      {
        title: "Lesson 8: Loops",
        topics: ["Introduction to Loops", "While Loop", "For Loop"],
      },
      {
        title: "Lesson 9: Beetle in a Maze",
        topics: [
          "Activity 1: Giving Beetle its Moves",
          "Activity 2: Sensing the Environment",
        ],
      },
      {
        title: "Lesson 10: Space Battle Game",
        topics: [
          "Activity 1: Setting Up the Stage",
          "Activity 2: Rocketship Controls",
        ],
      },
      {
        title: "Lesson 11: Space Battle Game (Part 2)",
        topics: ["Activity 1: Shooting Bullets", "Activity 2: Ghost Controls"],
      },
    ],
    href: "/courses/course-content/for-kids",
  },
  {
    title: "Introduction to Python",
    lessons: [
      {
        title: "Lesson 1: Python Introduction",
        topics: [
          "Introduction to Coding",
          "Introduction to Python",
          "Activity: Introduce Yourself with Tobi",
          "Conclusion",
          "Quiz 1: Python Introduction",
        ],
      },
      {
        title: "Lesson 2: Animations",
        topics: [
          "Backdrop & Costumes",
          "Functions to Control Sprites",
          "Activity: Tobi Walking Animation",
          "Conclusion",
          "Quiz 2: Animation with Python",
        ],
      },
      {
        title: "Lesson 3: Algorithms",
        topics: [
          "Algorithm Basics",
          "Flowchart and Symbols",
          "Activity 1: Profit & Loss",
          "Activity 2: Eligible to Vote",
          "Conclusion",
          "Quiz 3: Algorithm & Flowchart",
        ],
      },
      {
        title: "Lesson 4: Variables and Data Types",
        topics: [
          "Variables Basics",
          "Data Types in Python",
          "Arithmetic Operators",
          "Activity 1: Addition Bot",
          "Activity 2: Area Calculator",
          "Conclusion",
          "Quiz 4: Variables and Arithmetic Operators",
        ],
      },
      {
        title: "Lesson 5: Functions in Python",
        topics: [
          "Mathematical Functions in Python",
          "Built-In Functions",
          "User Defined Functions",
          "Activity 1: Properties of a Cube",
          "Activity 2: Loan Interest Calculator",
          "Conclusion",
          "Quiz 5: Functions in Python",
        ],
      },
      {
        title: "Lesson 6: Conditional Statements",
        topics: [
          "Control Flow Structure",
          "Activity 1: Grade Calculator",
          "Logical Operators",
          "Activity 2: Is it a Triangle?",
          "Conclusion (Lesson 6)",
        ],
      },
    ],
    href: "/courses/course-content/python",
  },
  {
    title: "Smart Money Foundations",
    lessons: [
      {
        title: "Lesson 1: Money Basics",
        topics: ["Needs vs Wants", "Earning Money"],
      },
      {
        title: "Lesson 2: Saving & Budgeting",
        topics: ["Saving Goals", "Simple Budget Plan"],
      },
      {
        title: "Lesson 3: Smart Spending",
        topics: ["Price Tags & Value", "Comparing Options"],
      },
      {
        title: "Lesson 4: Money Safety & Giving",
        topics: ["Money Safety", "Giving Back"],
      },
      {
        title: "Lesson 5: Banking Basics",
        topics: ["Savings vs Checking", "How Banks Help"],
      },
      {
        title: "Lesson 6: Smart Shopping",
        topics: ["Unit Price & Deals", "Advertising Tricks"],
      },
      {
        title: "Lesson 7: Credit & Debt",
        topics: ["Borrowing Basics", "Paying Back"],
      },
      {
        title: "Lesson 8: Money Plans",
        topics: ["Short vs Long Term Goals", "Create a Money Plan"],
      },
    ],
    href: "/courses/course-content/financial-literacy",
  },
  {
    title: "Gen AI for Creators",
    lessons: [
      {
        title: "Lesson 1: AI Foundations",
        topics: ["What Is Generative AI?", "How Models Learn"],
      },
      {
        title: "Lesson 2: Prompting Basics",
        topics: ["Prompt Ingredients", "Iterate & Refine"],
      },
      {
        title: "Lesson 3: Creative Projects",
        topics: ["Story Co-Pilot", "Image Idea Boards"],
      },
      {
        title: "Lesson 4: Responsible AI",
        topics: ["Safety and Ethics", "Human-in-the-Loop"],
      },
      {
        title: "Lesson 5: Fact Checking",
        topics: ["Verify AI Output", "Credible Sources"],
      },
      {
        title: "Lesson 6: Bias & Fairness",
        topics: ["Bias in Data", "Fair Prompts"],
      },
      {
        title: "Lesson 7: Collaboration",
        topics: ["AI as Helper", "Documenting Use"],
      },
      {
        title: "Lesson 8: Creator Project",
        topics: ["Create with Constraints", "Present & Reflect"],
      },
    ],
    href: "/courses/course-content/gen-ai",
  },
  {
    title: "Math Adventures: Patterns & Problem Solving",
    lessons: [
      {
        title: "Lesson 1: Number Sense",
        topics: ["Place Value Power", "Mental Math Tricks"],
      },
      {
        title: "Lesson 2: Patterns & Algebra",
        topics: ["Patterns Everywhere", "Variables as Boxes"],
      },
      {
        title: "Lesson 3: Geometry & Measurement",
        topics: ["Shapes and Angles", "Area & Perimeter"],
      },
      {
        title: "Lesson 4: Data & Probability",
        topics: ["Reading Charts", "Chance & Probability"],
      },
      {
        title: "Lesson 5: Fractions",
        topics: ["Fraction Parts", "Equivalent Fractions"],
      },
      {
        title: "Lesson 6: Decimals & Money",
        topics: ["Decimal Place", "Money Math"],
      },
      {
        title: "Lesson 7: Multi-Step Problems",
        topics: ["Problem Solving Steps", "Estimation Checks"],
      },
      {
        title: "Lesson 8: Geometry in Real Life",
        topics: ["Perimeter Projects", "Symmetry & Transformations"],
      },
    ],
    href: "/courses/course-content/math",
  },
  {
    title: "Creative Writing & Communication",
    lessons: [
      {
        title: "Lesson 1: Reading Like a Writer",
        topics: ["Story Elements", "Character & Setting"],
      },
      {
        title: "Lesson 2: Writing Skills",
        topics: ["Strong Sentences", "Descriptive Details"],
      },
      {
        title: "Lesson 3: Speaking & Presenting",
        topics: ["Voice and Clarity", "Persuasive Techniques"],
      },
      {
        title: "Lesson 4: Media Literacy",
        topics: ["Fact vs Opinion", "Digital Etiquette"],
      },
      {
        title: "Lesson 5: Reading Strategies",
        topics: ["Main Idea & Details", "Inference & Evidence"],
      },
      {
        title: "Lesson 6: Vocabulary",
        topics: ["Word Parts", "Context Clues"],
      },
      {
        title: "Lesson 7: Writing Process",
        topics: ["Planning & Drafting", "Revising & Editing"],
      },
      {
        title: "Lesson 8: Poetry & Voice",
        topics: ["Poetry Forms", "Figurative Language"],
      },
    ],
    href: "/courses/course-content/english",
  },
  {
    title: "Exploring Science Lab",
    lessons: [
      {
        title: "Lesson 1: Scientific Thinking",
        topics: ["Science Questions", "Observation Skills"],
      },
      {
        title: "Lesson 2: Earth & Space",
        topics: ["Weather Systems", "Our Solar System"],
      },
      {
        title: "Lesson 3: Life Science",
        topics: ["Cells and Life", "Ecosystems"],
      },
      {
        title: "Lesson 4: Physical Science",
        topics: ["Forces & Motion", "States of Matter"],
      },
      {
        title: "Lesson 5: Energy",
        topics: ["Forms of Energy", "Energy Transfer"],
      },
      {
        title: "Lesson 6: Earth Systems",
        topics: ["Water Cycle", "Landforms"],
      },
      {
        title: "Lesson 7: Engineering Design",
        topics: ["Define a Problem", "Test & Improve"],
      },
      {
        title: "Lesson 8: Space Patterns",
        topics: ["Moon Phases", "Seasons & Shadows"],
      },
    ],
    href: "/courses/course-content/science",
  },
  {
    title: "DIY Makers Lab",
    lessons: [
      {
        title: "Lesson 1: Maker Mindset",
        topics: ["Design Thinking", "Tool Safety"],
      },
      {
        title: "Lesson 2: Build Basics",
        topics: ["Measuring & Cutting", "Fasteners & Joints"],
      },
      {
        title: "Lesson 3: Electronics for Makers",
        topics: ["Simple Circuits", "LED Projects"],
      },
      {
        title: "Lesson 4: Showcase",
        topics: ["Polish & Improve", "Write a Build Guide"],
      },
      {
        title: "Lesson 5: Materials",
        topics: ["Cardboard Engineering", "Upcycling Ideas"],
      },
      {
        title: "Lesson 6: Mechanisms",
        topics: ["Simple Machines", "Moving Parts"],
      },
      {
        title: "Lesson 7: Prototyping",
        topics: ["Paper Prototypes", "Test and Iterate"],
      },
      {
        title: "Lesson 8: Team Projects",
        topics: ["Roles & Collaboration", "Present Your Build"],
      },
    ],
    href: "/courses/course-content/diy",
  },
  {
    title: "Introduction to Robotics",
    lessons: [
      {
        title: "Lesson 1: Introduction to Robotics",
        topics: [
          "What is Robotics?",
          "Where Robots Are Used",
          "Robot vs Machine",
          "Why Learn Robotics",
          "Key Vocabulary",
          "Activity: Robot or Not",
          "Quiz: Introduction to Robotics",
        ],
      },
      {
        title: "Lesson 2: Parts of a Robot",
        topics: [
          "Main Parts of a Robot",
          "Robot Structure and Frame",
          "Controller – The Robot Brain",
          "Sensors and Actuators",
          "Powering a Robot",
          "Key Vocabulary (Parts of a Robot)",
          "Activity: Label the Robot",
          "Quiz: Parts of a Robot",
        ],
      },
      {
        title: "Lesson 3: Inputs and Outputs",
        topics: [
          "Understanding Robot Inputs",
          "Understanding Robot Outputs",
          "Input → Process → Output Cycle",
          "Real World Examples",
          "Key Vocabulary (Inputs and Outputs)",
          "Activity: Human Robot Game",
          "Quiz: Inputs and Outputs",
        ],
      },
      {
        title: "Lesson 4: Sensors in Robotics",
        topics: [
          "Why Robots Need Sensors",
          "Common Types of Sensors",
          "Choosing the Right Sensor",
          "Sensor Accuracy",
          "Key Vocabulary (Sensors)",
          "Activity: Guess the Sensor",
          "Quiz: Sensors in Robotics",
        ],
      },
      {
        title: "Lesson 5: Motors and Movement",
        topics: [
          "How Robots Move",
          "Types of Robot Movement",
          "DC Motors",
          "Servo Motors",
          "Controlling Speed and Direction",
          "Key Vocabulary (Motors)",
          "Activity: Movement Planner",
          "Quiz: Motors and Movement",
        ],
      },
      {
        title: "Lesson 6: Robot Instructions and Algorithms",
        topics: [
          "What is an Algorithm?",
          "Why Order Matters",
          "Robot Decision Making",
          "Algorithms in Daily Life",
          "Key Vocabulary (Algorithms)",
          "Activity: Write a Robot Algorithm",
          "Quiz: Algorithms",
        ],
      },
      {
        title: "Lesson 7: Safety and Responsible Robotics",
        topics: [
          "Physical Safety Rules",
          "Electrical Safety",
          "Responsible Robotics Use",
          "Teamwork in Robotics",
          "Key Vocabulary (Safety)",
          "Activity: Safe or Unsafe",
          "Quiz: Robotics Safety",
        ],
      },
      {
        title: "Lesson 8: Programming a Simple Robot",
        topics: [
          "Planning a Robot Program",
          "Basic Program Flow",
          "Example Robot Logic",
          "Testing and Debugging",
          "Key Vocabulary (Robot Programming)",
          "Activity: Plan a Robot Program",
          "Quiz: Robot Programming",
        ],
      },
      {
        title: "Lesson 9: Line Following Robots",
        topics: [
          "What is a Line Following Robot",
          "How Line Following Works",
          "Why Line Following is Important",
          "Improving Robot Performance",
          "Key Vocabulary (Line Following)",
          "Activity: Design a Robot Track",
          "Quiz: Line Following Robots",
        ],
      },
      {
        title: "Lesson 10: Obstacle Avoiding Robots",
        topics: [
          "What is Obstacle Avoidance",
          "How Obstacle Avoidance Works",
          "Why Obstacle Avoidance Matters",
          "Testing Robot Behavior",
          "Key Vocabulary (Obstacle Avoidance)",
          "Activity: Classroom Obstacle Challenge",
          "Quiz: Obstacle Avoidance",
        ],
      },
      {
        title: "Lesson 11: Robot Design Thinking",
        topics: [
          "Starting With a Problem",
          "Imagine Plan Build Improve",
          "Thinking About the User",
          "Presenting Robot Ideas",
          "Key Vocabulary (Design Thinking)",
          "Activity: Invent a Robot",
          "Quiz: Design Thinking",
        ],
      },
      {
        title: "Lesson 12: Capstone Project",
        topics: [
          "Capstone Project Goal",
          "Choosing a Robot Idea",
          "Project Requirements",
          "Showcase Preparation",
          "Key Vocabulary (Capstone)",
          "Activity: Build and Present",
          "Quiz: Capstone Project",
        ],
      },
    ],
    href: "/courses/course-content/introduction-to-robotics",
  },
];

export function getCourseByPath(pathname: string) {
  const normalizedPath = pathname.replace(/\/$/, "");
  return courseContentLinks.find((course) => {
    const normalizedHref = course.href.replace(/\/$/, "");
    return (
      normalizedPath === normalizedHref ||
      normalizedPath.startsWith(`${normalizedHref}/`)
    );
  });
}

export function getCourseBySection(section: string) {
  const href = `/courses/course-content/${section}`;
  return courseContentLinks.find((course) => course.href === href);
}
