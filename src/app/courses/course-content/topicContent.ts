export type TextBlock = {
  type: "text";
  content: string;
};

export type ParagraphBlock = {
  type: "paragraph";
  text: string;
};

export type HeadingBlock = {
  type: "heading";
  text: string;
};

export type ListBlock = {
  type: "list";
  title?: string;
  items: string[];
};

export type ImageGridItem = {
  src: string;
  alt: string;
  label: string;
};

export type ImageGridBlock = {
  type: "imageGrid";
  title?: string;
  items: ImageGridItem[];
};

export type TableBlock = {
  type: "table";
  title?: string;
  columns: string[];
  rows: string[][];
};

export type ImageBlock = {
  type: "image";
  title?: string;
  src: string;
  alt: string;
  caption?: string;
};

export type VideoBlock = {
  type: "video";
  videoId: string;
  title?: string;
  caption?: string;
};

export type CalloutBlock = {
  type: "callout";
  text: string;
  tone?: "info" | "success" | "warning";
};

export type TrueFalseQuestion = {
  id: number;
  type: "true-false";
  points: number;
  question: string;
  options: string[];
};

export type MultipleChoiceQuestion = {
  id: number;
  type: "multiple-choice";
  points: number;
  question: string;
  options: string[];
};

export type ReorderQuestion = {
  id: number;
  type: "reorder";
  points: number;
  question: string;
  options: string[];
};

export type MatchQuestion = {
  id: number;
  type: "match";
  points: number;
  question: string;
  instruction?: string;
  terms: string[];
  definitions: string[];
};

export type QuizBlock = {
  type: "quiz";
  title: string;
  timeLimit?: string;
  totalQuestions?: number;
  questions: QuizQuestion[];
};

export type TopicContentBySection = {
  [section: string]: {
    [topic: string]: TopicContent;
  };
};

export type TopicContent = {
  intro?: string;
  blocks: TopicContentBlock[];
};

export type QuizQuestion =
  | TrueFalseQuestion
  | MultipleChoiceQuestion
  | ReorderQuestion
  | MatchQuestion;

export type TopicContentBlock =
  | TextBlock
  | ParagraphBlock
  | HeadingBlock
  | ListBlock
  | ImageGridBlock
  | TableBlock
  | ImageBlock
  | VideoBlock
  | CalloutBlock
  | QuizBlock;
export const topicContentBySection: Record<
  string,
  Record<string, TopicContent>
> = {
  "introduction-to-robotics": {
    "What is Robotics?": {
      intro:
        "Robotics is one of the most exciting fields of technology combining mechanics, electronics, and programming.",
      blocks: [
        {
          type: "heading",
          text: "What is Robotics?",
        },
        {
          type: "paragraph",
          text: "Robotics is a branch of technology that involves designing, building, and programming robots. Robots are machines that can perform tasks automatically by following instructions.",
        },
        {
          type: "paragraph",
          text: "Robotics combines mechanical engineering (building the body), electronics (connecting components), and programming (giving instructions).",
        },
        {
          type: "image",
          title: "Basic Robot Structure",
          src: "/courses/robotics/robot-basic-structure.webp",
          alt: "Basic robot parts diagram",
          caption:
            "Most robots contain sensors, a controller, motors, and a power source.",
        },
        {
          type: "list",
          title: "Robotics combines:",
          items: [
            "Mechanical design (robot body)",
            "Electronics (circuits and wiring)",
            "Programming (robot instructions)",
            "Problem solving skills",
          ],
        },
        {
          type: "video",
          videoId: "szgVUfyX8JM",
          title: "Introduction to Robotics for Beginners",
        },
        {
          type: "callout",
          text: "Robots do not think like humans. They only follow instructions given by programmers.",
          tone: "info",
        },
      ],
    },
    "Where Robots Are Used": {
      blocks: [
        {
          type: "heading",
          text: "Where Robots Are Used",
        },
        {
          type: "paragraph",
          text: "Robots are used in many industries because they can work faster, more accurately, and sometimes safer than humans.",
        },
        {
          type: "imageGrid",
          title: "Common Robot Applications",
          items: [
            {
              src: "/courses/robotics/factory-robot.webp",
              alt: "Industrial robot",
              label: "Factory robots",
            },
            {
              src: "/courses/robotics/medical-robot.webp",
              alt: "Medical robot",
              label: "Medical robots",
            },
            {
              src: "/courses/robotics/space-robot.webp",
              alt: "Space robot",
              label: "Space robots",
            },
            {
              src: "/courses/robotics/home-robot.webp",
              alt: "Home robot",
              label: "Home robots",
            },
          ],
        },
        {
          type: "list",
          title: "Examples of robot usage:",
          items: [
            "Manufacturing cars",
            "Performing surgeries",
            "Cleaning homes",
            "Exploring space",
            "Delivering packages",
          ],
        },
        {
          type: "callout",
          text: "Robots are especially useful in dangerous environments where humans cannot safely work.",
          tone: "info",
        },
      ],
    },
    "Robot vs Machine": {
      blocks: [
        {
          type: "heading",
          text: "Robot vs Machine",
        },
        {
          type: "paragraph",
          text: "All robots are machines, but not all machines are robots. A robot must be programmable and able to sense its environment.",
        },
        {
          type: "table",
          title: "Robot vs Machine Comparison",
          columns: ["Feature", "Robot", "Machine"],
          rows: [
            ["Programmable", "Yes", "Usually No"],
            ["Sensors", "Yes", "Not always"],
            ["Decision making", "Basic logic", "No"],
            ["Example", "Delivery robot", "Bicycle"],
          ],
        },
        {
          type: "callout",
          text: "A washing machine is a machine. A robot vacuum is a robot because it senses and decides movement.",
          tone: "info",
        },
      ],
    },
    "Why Learn Robotics": {
      blocks: [
        {
          type: "heading",
          text: "Why Learn Robotics",
        },
        {
          type: "paragraph",
          text: "Learning robotics helps students develop problem solving, logical thinking, and engineering skills.",
        },
        {
          type: "list",
          title: "Skills you develop:",
          items: [
            "Problem solving",
            "Logical thinking",
            "Creativity",
            "Programming skills",
            "Engineering design",
            "Teamwork",
          ],
        },
        {
          type: "callout",
          text: "Robotics is one of the fastest growing career fields in the world.",
          tone: "success",
        },
      ],
    },
    "Key Vocabulary": {
      blocks: [
        {
          type: "heading",
          text: "Key Vocabulary",
        },
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Robot", "Programmable machine"],
            ["Sensor", "Device that detects environment"],
            ["Actuator", "Device that creates movement"],
            ["Controller", "Robot brain"],
            ["Algorithm", "Step by step instructions"],
          ],
        },
      ],
    },
    "Activity: Robot or Not": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Robot or Not",
        },
        {
          type: "callout",
          text: "Decide if each example is a robot or just a machine.",
          tone: "success",
        },
        {
          type: "list",
          title: "Classify these:",
          items: [
            "ATM Machine",
            "Robot Vacuum",
            "Traffic Light",
            "Drone",
            "Remote Control Car",
          ],
        },
      ],
    },
    "Quiz: Introduction to Robotics": {
      blocks: [
        {
          type: "quiz",
          title: "Introduction to Robotics Quiz",
          totalQuestions: 5,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "What is robotics?",
              options: [
                "Study of plants",
                "Building and programming robots",
                "Cooking science",
                "Weather study",
              ],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "All machines are robots.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "Which is a robot?",
              options: ["Bicycle", "Robot vacuum", "Book", "Chair"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Robot brain is called:",
              options: ["Sensor", "Controller", "Wire", "Frame"],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Robots can work in dangerous places.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "Main Parts of a Robot": {
      blocks: [
        {
          type: "heading",
          text: "Main Parts of a Robot",
        },
        {
          type: "paragraph",
          text: "Every robot is made from several important parts that work together.",
        },
        {
          type: "image",
          title: "Robot Components",
          src: "/courses/robotics/robot-components.webp",
          alt: "Robot components diagram",
          caption: "Basic robot architecture",
        },
        {
          type: "list",
          title: "Main robot parts:",
          items: [
            "Structure/frame",
            "Controller",
            "Sensors",
            "Actuators",
            "Power supply",
          ],
        },
        {
          type: "callout",
          text: "If one part fails the robot may stop working.",
          tone: "warning",
        },
      ],
    },
    "Robot Structure and Frame": {
      blocks: [
        {
          type: "heading",
          text: "Robot Structure and Frame",
        },
        {
          type: "paragraph",
          text: "The structure is the physical body of the robot. It holds all components together and protects sensitive electronics.",
        },
        {
          type: "image",
          title: "Robot Chassis Example",
          src: "/courses/robotics/robot-chassis.webp",
          alt: "Robot chassis frame",
          caption: "The chassis acts as the skeleton of the robot.",
        },
        {
          type: "list",
          title: "Good robot structure should be:",
          items: ["Strong", "Lightweight", "Stable", "Easy to assemble", "Durable"],
        },
        {
          type: "callout",
          text: "A weak structure can cause sensors to misread and motors to fail.",
          tone: "warning",
        },
      ],
    },
    "Controller – The Robot Brain": {
      blocks: [
        {
          type: "heading",
          text: "Controller – The Robot Brain",
        },
        {
          type: "paragraph",
          text: "The controller is like the brain of the robot. It processes sensor data and sends commands.",
        },
        {
          type: "image",
          title: "Robot Controller Board",
          src: "/courses/robotics/controller-board.webp",
          alt: "Robot controller",
        },
        {
          type: "list",
          title: "Controller responsibilities:",
          items: [
            "Reading sensors",
            "Making decisions",
            "Sending motor commands",
            "Running programs",
          ],
        },
      ],
    },
    "Sensors and Actuators": {
      blocks: [
        {
          type: "heading",
          text: "Sensors and Actuators",
        },
        {
          type: "table",
          columns: ["Component", "Purpose"],
          rows: [
            ["Sensor", "Detect environment"],
            ["Actuator", "Create movement"],
            ["Motor", "Rotation"],
            ["Servo", "Precise movement"],
          ],
        },
        {
          type: "imageGrid",
          title: "Examples",
          items: [
            {
              src: "/courses/robotics/ir-sensor.webp",
              alt: "IR sensor",
              label: "IR Sensor",
            },
            {
              src: "/courses/robotics/ultrasonic.webp",
              alt: "Ultrasonic sensor",
              label: "Distance sensor",
            },
            {
              src: "/courses/robotics/servo.webp",
              alt: "Servo motor",
              label: "Servo motor",
            },
          ],
        },
      ],
    },
    "Powering a Robot": {
      blocks: [
        {
          type: "heading",
          text: "Powering a Robot",
        },
        {
          type: "paragraph",
          text: "Robots need power to operate motors, controllers, and sensors. Most educational robots use batteries.",
        },
        {
          type: "imageGrid",
          title: "Common Power Sources",
          items: [
            {
              src: "/courses/robotics/battery-pack.webp",
              alt: "Battery pack",
              label: "Battery pack",
            },
            {
              src: "/courses/robotics/usb-power.webp",
              alt: "USB power",
              label: "USB power",
            },
            {
              src: "/courses/robotics/power-bank.webp",
              alt: "Power bank",
              label: "Power bank",
            },
          ],
        },
        {
          type: "list",
          title: "Power considerations:",
          items: [
            "Voltage requirements",
            "Battery capacity",
            "Rechargeability",
            "Safety",
          ],
        },
      ],
    },
    "Key Vocabulary (Parts of a Robot)": {
      blocks: [
        {
          type: "heading",
          text: "Key Vocabulary",
        },
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Chassis", "Robot frame"],
            ["Controller", "Robot brain"],
            ["Power Supply", "Energy source"],
            ["Actuator", "Movement device"],
            ["Circuit", "Electrical connection"],
          ],
        },
      ],
    },
    "Activity: Label the Robot": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Label the Robot",
        },
        {
          type: "callout",
          text: "Identify each part of a robot diagram and label its function.",
          tone: "success",
        },
        {
          type: "list",
          title: "Label these parts:",
          items: ["Controller", "Motor", "Sensor", "Battery", "Frame"],
        },
      ],
    },
    "Quiz: Parts of a Robot": {
      blocks: [
        {
          type: "quiz",
          title: "Parts of a Robot Quiz",
          totalQuestions: 5,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "What is the robot brain?",
              options: ["Motor", "Controller", "Wheel", "Wire"],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Sensors create movement.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "What provides robot power?",
              options: ["Battery", "Sensor", "Frame", "Code"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Robot body is called:",
              options: ["Controller", "Chassis", "Sensor", "Program"],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Motors are actuators.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "Understanding Robot Inputs": {
      blocks: [
        {
          type: "heading",
          text: "Understanding Robot Inputs",
        },
        {
          type: "paragraph",
          text: "Inputs are signals robots receive from sensors. These signals help robots understand their environment.",
        },
        {
          type: "image",
          title: "Robot Input Flow",
          src: "/courses/robotics/input-diagram.webp",
          alt: "Robot sensor input diagram",
        },
        {
          type: "list",
          title: "Examples of inputs:",
          items: [
            "Distance detection",
            "Light detection",
            "Touch detection",
            "Sound detection",
          ],
        },
        {
          type: "callout",
          text: "Without inputs robots cannot react to the world.",
          tone: "info",
        },
      ],
    },
    "Understanding Robot Outputs": {
      blocks: [
        {
          type: "heading",
          text: "Understanding Robot Outputs",
        },
        {
          type: "paragraph",
          text: "Outputs are actions robots perform after processing inputs.",
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Moving wheels",
            "Turning LEDs on",
            "Making sounds",
            "Moving arms",
          ],
        },
        {
          type: "imageGrid",
          title: "Output Devices",
          items: [
            {
              src: "/courses/robotics/robot-wheel.webp",
              alt: "Robot wheel",
              label: "Wheel movement",
            },
            {
              src: "/courses/robotics/robot-led.webp",
              alt: "Robot LED",
              label: "LED output",
            },
            {
              src: "/courses/robotics/buzzer.webp",
              alt: "Robot buzzer",
              label: "Sound output",
            },
          ],
        },
      ],
    },
    "Input → Process → Output Cycle": {
      blocks: [
        {
          type: "heading",
          text: "Input → Process → Output Cycle",
        },
        {
          type: "paragraph",
          text: "All robots follow a simple cycle: take input, process it, and produce output.",
        },
        {
          type: "table",
          columns: ["Step", "Description"],
          rows: [
            ["Input", "Sensor reads data"],
            ["Process", "Controller decides"],
            ["Output", "Robot acts"],
          ],
        },
        {
          type: "image",
          title: "Robot Decision Cycle",
          src: "/courses/robotics/ipo-cycle.webp",
          alt: "Input process output cycle",
        },
        {
          type: "callout",
          text: "This cycle runs continuously while the robot operates.",
          tone: "info",
        },
      ],
    },
    "Real World Examples": {
      blocks: [
        {
          type: "heading",
          text: "Real World Examples",
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Line robot detects line -> adjusts direction",
            "Vacuum detects obstacle -> turns",
            "Automatic door detects person -> opens",
          ],
        },
      ],
    },
    "Key Vocabulary (Inputs and Outputs)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Input", "Sensor signal"],
            ["Output", "Robot action"],
            ["Process", "Decision step"],
            ["Signal", "Information sent"],
          ],
        },
      ],
    },
    "Activity: Human Robot Game": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Human Robot Game",
        },
        {
          type: "callout",
          text: "One student acts as robot. Another gives instructions.",
          tone: "success",
        },
        {
          type: "list",
          title: "Rules:",
          items: [
            "Only simple commands allowed",
            "Robot must follow exact instructions",
            "Observe mistakes",
            "Improve algorithm",
          ],
        },
      ],
    },
    "Quiz: Inputs and Outputs": {
      blocks: [
        {
          type: "quiz",
          title: "Inputs and Outputs Quiz",
          totalQuestions: 5,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Robot inputs come from:",
              options: ["Motors", "Sensors", "Wheels", "Frame"],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Outputs are robot actions.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "Processing happens in:",
              options: ["Controller", "Wheel", "Battery", "Wire"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Which is output?",
              options: [
                "Distance reading",
                "Motor movement",
                "Sensor value",
                "Temperature",
              ],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Robots only run IPO once.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "Why Robots Need Sensors": {
      blocks: [
        {
          type: "heading",
          text: "Why Robots Need Sensors",
        },
        {
          type: "paragraph",
          text: "Sensors allow robots to understand their environment and react intelligently.",
        },
        {
          type: "list",
          title: "Without sensors robots cannot:",
          items: [
            "Avoid obstacles",
            "Follow lines",
            "Detect objects",
            "Measure distance",
          ],
        },
      ],
    },
    "Common Types of Sensors": {
      blocks: [
        {
          type: "heading",
          text: "Common Types of Sensors",
        },
        {
          type: "imageGrid",
          title: "Sensor Types",
          items: [
            {
              src: "/courses/robotics/ir-sensor.webp",
              alt: "IR sensor",
              label: "IR Sensor",
            },
            {
              src: "/courses/robotics/ultrasonic.webp",
              alt: "Ultrasonic",
              label: "Distance Sensor",
            },
            {
              src: "/courses/robotics/light-sensor.webp",
              alt: "Light sensor",
              label: "Light Sensor",
            },
            {
              src: "/courses/robotics/touch-sensor.webp",
              alt: "Touch sensor",
              label: "Touch Sensor",
            },
          ],
        },
        {
          type: "table",
          columns: ["Sensor", "Use"],
          rows: [
            ["IR", "Line detection"],
            ["Ultrasonic", "Distance"],
            ["Light", "Brightness"],
            ["Touch", "Contact"],
          ],
        },
      ],
    },
    "Choosing the Right Sensor": {
      blocks: [
        {
          type: "heading",
          text: "Choosing the Right Sensor",
        },
        {
          type: "paragraph",
          text: "Different tasks require different sensors.",
        },
        {
          type: "list",
          title: "Examples:",
          items: [
            "Distance -> Ultrasonic",
            "Line tracking -> IR",
            "Touch detection -> Button",
            "Brightness -> Light sensor",
          ],
        },
      ],
    },
    "Sensor Accuracy": {
      blocks: [
        {
          type: "heading",
          text: "Sensor Accuracy",
        },
        {
          type: "paragraph",
          text: "Sensors are not perfect. Environmental factors affect readings.",
        },
        {
          type: "list",
          title: "Factors affecting sensors:",
          items: ["Lighting", "Dust", "Surface color", "Noise"],
        },
        {
          type: "callout",
          text: "Always test robots in real conditions.",
          tone: "warning",
        },
      ],
    },
    "Key Vocabulary (Sensors)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Accuracy", "Correctness"],
            ["Range", "Detection distance"],
            ["Calibration", "Adjustment"],
            ["Detection", "Sensing"],
          ],
        },
      ],
    },
    "Activity: Guess the Sensor": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Guess the Sensor",
        },
        {
          type: "callout",
          text: "Teacher describes robot problem. Students pick correct sensor.",
          tone: "success",
        },
      ],
    },
    "Quiz: Sensors in Robotics": {
      blocks: [
        {
          type: "quiz",
          title: "Sensors Quiz",
          totalQuestions: 5,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Which sensor measures distance?",
              options: ["Servo", "Ultrasonic", "Wheel", "Battery"],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Sensors provide inputs.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "Line robots use:",
              options: ["IR", "Speaker", "LED", "Frame"],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question: "Sensors are always perfect.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "Touch detection uses:",
              options: ["Button", "Motor", "Wheel", "Wire"],
            },
          ],
        },
      ],
    },
    "How Robots Move": {
      blocks: [
        {
          type: "heading",
          text: "How Robots Move",
        },
        {
          type: "paragraph",
          text: "Robots move by turning motors that spin wheels, gears, or joints. The controller decides when and how long each motor runs.",
        },
        {
          type: "image",
          title: "Robot Drive System",
          src: "/courses/robotics/robot-drive-system.webp",
          alt: "Robot drive system diagram",
        },
        {
          type: "list",
          title: "Movement needs:",
          items: [
            "A motor to create motion",
            "A power source",
            "A controller to send signals",
            "A structure to transfer force",
          ],
        },
        {
          type: "callout",
          text: "Robots move only when their motors receive power and instructions.",
          tone: "info",
        },
      ],
    },
    "Types of Robot Movement": {
      blocks: [
        {
          type: "heading",
          text: "Types of Robot Movement",
        },
        {
          type: "paragraph",
          text: "Robots can roll, walk, slide, or rotate depending on their design.",
        },
        {
          type: "imageGrid",
          title: "Movement Types",
          items: [
            {
              src: "/courses/robotics/movement-wheels.webp",
              alt: "Wheeled robot",
              label: "Rolling (wheels)",
            },
            {
              src: "/courses/robotics/movement-legs.webp",
              alt: "Legged robot",
              label: "Walking (legs)",
            },
            {
              src: "/courses/robotics/movement-tracks.webp",
              alt: "Tracked robot",
              label: "Tracks",
            },
            {
              src: "/courses/robotics/movement-arm.webp",
              alt: "Robotic arm",
              label: "Rotating arms",
            },
          ],
        },
        {
          type: "callout",
          text: "Movement type depends on terrain, task, and stability needs.",
          tone: "info",
        },
      ],
    },
    "DC Motors": {
      blocks: [
        {
          type: "heading",
          text: "DC Motors",
        },
        {
          type: "paragraph",
          text: "DC motors spin continuously when powered. Speed and direction can be controlled by changing voltage and polarity.",
        },
        {
          type: "table",
          title: "DC Motor Basics",
          columns: ["Feature", "Description"],
          rows: [
            ["Rotation", "Continuous"],
            ["Speed Control", "Voltage / PWM"],
            ["Direction", "Change polarity"],
            ["Use", "Wheels, fans"],
          ],
        },
        {
          type: "callout",
          text: "DC motors are fast but do not move to a precise angle.",
          tone: "info",
        },
      ],
    },
    "Servo Motors": {
      blocks: [
        {
          type: "heading",
          text: "Servo Motors",
        },
        {
          type: "paragraph",
          text: "Servo motors rotate to a specific angle, making them perfect for arms, grippers, and precise movements.",
        },
        {
          type: "table",
          title: "Servo Basics",
          columns: ["Feature", "Description"],
          rows: [
            ["Rotation", "Limited angle (e.g. 0 deg-180 deg)"],
            ["Control", "Signal with target angle"],
            ["Precision", "High"],
            ["Use", "Arms, steering"],
          ],
        },
        {
          type: "callout",
          text: "Servos trade speed for precision control.",
          tone: "info",
        },
      ],
    },
    "Controlling Speed and Direction": {
      blocks: [
        {
          type: "heading",
          text: "Controlling Speed and Direction",
        },
        {
          type: "paragraph",
          text: "Controllers use signals to change how fast motors spin and which way they turn.",
        },
        {
          type: "list",
          title: "Speed control methods:",
          items: [
            "Voltage level (more voltage = more speed)",
            "PWM signal (on/off pulses)",
            "Gear ratios (trade speed for torque)",
          ],
        },
        {
          type: "list",
          title: "Direction control:",
          items: ["Swap motor wires", "Use H-bridge driver", "Reverse signal"],
        },
        {
          type: "callout",
          text: "Faster is not always better--control and stability matter.",
          tone: "warning",
        },
      ],
    },
    "Key Vocabulary (Motors)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Torque", "Twisting force"],
            ["RPM", "Rotations per minute"],
            ["PWM", "Pulse width modulation"],
            ["Gear ratio", "Speed vs power balance"],
          ],
        },
      ],
    },
    "Activity: Movement Planner": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Movement Planner",
        },
        {
          type: "callout",
          text: "Plan how a robot should move through a simple path using steps.",
          tone: "success",
        },
        {
          type: "list",
          title: "Plan steps for:",
          items: [
            "Start at A and reach B",
            "Avoid one obstacle",
            "Stop at the finish line",
            "Use at least one turn",
          ],
        },
        {
          type: "paragraph",
          text: "Write the movement plan as short commands like: forward 2, turn right, forward 1.",
        },
      ],
    },
    "Quiz: Motors and Movement": {
      blocks: [
        {
          type: "quiz",
          title: "Motors and Movement Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Which motor is best for precise angle control?",
              options: ["DC motor", "Servo motor", "Battery", "Sensor"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question: "What does RPM measure?",
              options: ["Speed", "Voltage", "Distance", "Weight"],
            },
            {
              id: 3,
              type: "true-false",
              points: 1,
              question: "Higher voltage always means better control.",
              options: ["True", "False"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "PWM is used to control:",
              options: ["Speed", "Light color", "Robot height", "Battery size"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "A gear ratio can help:",
              options: [
                "Increase torque",
                "Add sensors",
                "Reduce weight",
                "Change code",
              ],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question: "Servo motors rotate continuously.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "What is an Algorithm?": {
      blocks: [
        {
          type: "heading",
          text: "What is an Algorithm?",
        },
        {
          type: "paragraph",
          text: "An algorithm is a clear, ordered set of steps used to solve a problem or complete a task.",
        },
        {
          type: "list",
          title: "Every good algorithm is:",
          items: ["Clear", "In the correct order", "Repeatable", "Testable"],
        },
        {
          type: "callout",
          text: "Robots follow algorithms exactly--missing steps cause errors.",
          tone: "info",
        },
      ],
    },
    "Why Order Matters": {
      blocks: [
        {
          type: "heading",
          text: "Why Order Matters",
        },
        {
          type: "paragraph",
          text: "Changing the order of steps can break a program. Robots need precise order to act correctly.",
        },
        {
          type: "table",
          title: "Order Example",
          columns: ["Step Order", "Result"],
          rows: [
            ["Open door -> Walk through", "Success"],
            ["Walk through -> Open door", "Failure"],
          ],
        },
      ],
    },
    "Robot Decision Making": {
      blocks: [
        {
          type: "heading",
          text: "Robot Decision Making",
        },
        {
          type: "paragraph",
          text: "Robots use conditions to decide what to do next based on sensor input.",
        },
        {
          type: "list",
          title: "Decision examples:",
          items: [
            "If obstacle detected, stop",
            "If line detected, move forward",
            "If battery low, return to base",
          ],
        },
        {
          type: "callout",
          text: "Decisions are made using if/else logic.",
          tone: "info",
        },
      ],
    },
    "Algorithms in Daily Life": {
      blocks: [
        {
          type: "heading",
          text: "Algorithms in Daily Life",
        },
        {
          type: "list",
          title: "Common examples:",
          items: [
            "Brushing teeth steps",
            "Crossing the road safely",
            "Making a sandwich",
            "Cleaning your room",
          ],
        },
        {
          type: "callout",
          text: "If you can describe a process, you can write an algorithm.",
          tone: "success",
        },
      ],
    },
    "Key Vocabulary (Algorithms)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Algorithm", "Step-by-step instructions"],
            ["Condition", "A rule that must be true or false"],
            ["Loop", "Repeat steps"],
            ["Flowchart", "Visual plan of steps"],
          ],
        },
      ],
    },
    "Activity: Write a Robot Algorithm": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Write a Robot Algorithm",
        },
        {
          type: "callout",
          text: "Write an algorithm for a robot to deliver a package to a door.",
          tone: "success",
        },
        {
          type: "list",
          title: "Include:",
          items: [
            "Start position",
            "At least one decision",
            "At least one repeat step",
            "A stop condition",
          ],
        },
        {
          type: "paragraph",
          text: "Example decision: If door is closed, ring bell.",
        },
      ],
    },
    "Quiz: Algorithms": {
      blocks: [
        {
          type: "quiz",
          title: "Algorithms Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "An algorithm is:",
              options: [
                "A robot part",
                "A set of ordered steps",
                "A sensor",
                "A power source",
              ],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Order of steps does not matter.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "Which is a decision statement?",
              options: [
                "Move forward",
                "If obstacle then turn",
                "Stop",
                "Start",
              ],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Loops are used to:",
              options: [
                "Repeat steps",
                "Add sensors",
                "Charge batteries",
                "Measure distance",
              ],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "Which is the correct order?",
              options: [
                "Pick up item -> Find item",
                "Find item -> Pick up item",
                "Drop item -> Find item",
                "Stop -> Start",
              ],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question: "Algorithms can be tested and improved.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "Physical Safety Rules": {
      blocks: [
        {
          type: "heading",
          text: "Physical Safety Rules",
        },
        {
          type: "paragraph",
          text: "Robots have moving parts. Staying safe protects people and equipment.",
        },
        {
          type: "list",
          title: "Always remember:",
          items: [
            "Keep fingers away from gears and wheels",
            "Tie back long hair",
            "Do not run around active robots",
            "Turn off power before adjustments",
          ],
        },
        {
          type: "callout",
          text: "Safety comes before speed or performance.",
          tone: "warning",
        },
      ],
    },
    "Electrical Safety": {
      blocks: [
        {
          type: "heading",
          text: "Electrical Safety",
        },
        {
          type: "paragraph",
          text: "Robots use electricity. Incorrect wiring can damage parts or cause heat.",
        },
        {
          type: "list",
          title: "Electrical safety tips:",
          items: [
            "Check polarity before connecting",
            "Never touch wires with wet hands",
            "Use the correct battery type",
            "Unplug before changing circuits",
          ],
        },
        {
          type: "callout",
          text: "If a part is hot or smells burnt, stop the robot immediately.",
          tone: "warning",
        },
      ],
    },
    "Responsible Robotics Use": {
      blocks: [
        {
          type: "heading",
          text: "Responsible Robotics Use",
        },
        {
          type: "paragraph",
          text: "Robots should be used to help people, not to harm or cheat.",
        },
        {
          type: "list",
          title: "Be responsible by:",
          items: [
            "Respecting privacy",
            "Following rules and permissions",
            "Using robots to solve real problems",
            "Working safely with teammates",
          ],
        },
        {
          type: "callout",
          text: "Good robotics teams value safety, honesty, and teamwork.",
          tone: "success",
        },
      ],
    },
    "Teamwork in Robotics": {
      blocks: [
        {
          type: "heading",
          text: "Teamwork in Robotics",
        },
        {
          type: "paragraph",
          text: "Robotics projects are easier and more fun when everyone shares ideas, roles, and feedback.",
        },
        {
          type: "list",
          title: "Good teamwork looks like:",
          items: [
            "Sharing tasks fairly",
            "Listening to each other",
            "Testing together",
            "Helping fix problems",
          ],
        },
        {
          type: "callout",
          text: "Strong teams build better robots and learn faster.",
          tone: "success",
        },
      ],
    },
    "Key Vocabulary (Safety)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Hazard", "A possible source of harm"],
            ["Insulation", "Material that prevents shocks"],
            ["Polarity", "Positive and negative direction"],
            ["Procedure", "Safe step-by-step method"],
          ],
        },
      ],
    },
    "Activity: Safe or Unsafe": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Safe or Unsafe",
        },
        {
          type: "callout",
          text: "Look at each situation and decide if it is safe or unsafe.",
          tone: "success",
        },
        {
          type: "list",
          title: "Decide for each:",
          items: [
            "Testing a robot with loose wires",
            "Turning off power before changes",
            "Holding a robot near spinning wheels",
            "Keeping workspace clean",
          ],
        },
      ],
    },
    "Quiz: Robotics Safety": {
      blocks: [
        {
          type: "quiz",
          title: "Robotics Safety Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "What should you do before adjusting wiring?",
              options: [
                "Increase speed",
                "Turn off power",
                "Shake the robot",
                "Ignore it",
              ],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Loose hair can be a hazard near moving parts.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "Which is responsible robotics use?",
              options: [
                "Using robots to spy",
                "Sharing data without permission",
                "Solving a real problem safely",
                "Ignoring rules",
              ],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "A hot component means:",
              options: [
                "Keep running",
                "Stop and check",
                "Add more voltage",
                "Remove sensors",
              ],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Polarity matters when connecting power.",
              options: ["True", "False"],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question: "Which action is unsafe?",
              options: [
                "Using correct batteries",
                "Testing in a clear area",
                "Touching circuits with wet hands",
                "Labeling wires",
              ],
            },
          ],
        },
      ],
    },
    "Planning a Robot Program": {
      blocks: [
        {
          type: "heading",
          text: "Planning a Robot Program",
        },
        {
          type: "paragraph",
          text: "Before coding, plan what the robot should do and how it should respond to the environment.",
        },
        {
          type: "list",
          title: "Good plans include:",
          items: [
            "Goal of the robot",
            "Inputs it will use",
            "Decisions it must make",
            "Steps in order",
          ],
        },
        {
          type: "callout",
          text: "Planning reduces mistakes and makes programming faster.",
          tone: "info",
        },
      ],
    },
    "Basic Program Flow": {
      blocks: [
        {
          type: "heading",
          text: "Basic Program Flow",
        },
        {
          type: "paragraph",
          text: "Programs follow a flow: start, read inputs, decide, act, and repeat.",
        },
        {
          type: "table",
          title: "Flow Steps",
          columns: ["Step", "Example"],
          rows: [
            ["Start", "Power on robot"],
            ["Input", "Read distance sensor"],
            ["Decision", "Is path clear?"],
            ["Action", "Move forward"],
            ["Repeat", "Loop again"],
          ],
        },
      ],
    },
    "Example Robot Logic": {
      blocks: [
        {
          type: "heading",
          text: "Example Robot Logic",
        },
        {
          type: "paragraph",
          text: "Here is a simple logic plan for a robot that follows a line and stops at an obstacle.",
        },
        {
          type: "list",
          title: "Logic outline:",
          items: [
            "Start motors",
            "If line detected, keep moving",
            "If line lost, adjust left/right",
            "If obstacle detected, stop",
          ],
        },
        {
          type: "callout",
          text: "Even simple robots need clear decision rules.",
          tone: "info",
        },
      ],
    },
    "Testing and Debugging": {
      blocks: [
        {
          type: "heading",
          text: "Testing and Debugging",
        },
        {
          type: "paragraph",
          text: "Testing checks if the robot behaves as expected. Debugging fixes mistakes in logic or wiring.",
        },
        {
          type: "list",
          title: "Debug tips:",
          items: [
            "Test one part at a time",
            "Check sensor readings",
            "Slow the robot down to observe",
            "Write down problems and fixes",
          ],
        },
        {
          type: "callout",
          text: "Mistakes are normal in robotics. Debugging is part of learning.",
          tone: "success",
        },
      ],
    },
    "Key Vocabulary (Robot Programming)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Program", "Instructions for the robot"],
            ["Flow", "Order of steps"],
            ["Debug", "Find and fix errors"],
            ["Loop", "Repeat steps"],
          ],
        },
      ],
    },
    "Activity: Plan a Robot Program": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Plan a Robot Program",
        },
        {
          type: "callout",
          text: "Design a plan for a robot that delivers a small object to a table.",
          tone: "success",
        },
        {
          type: "list",
          title: "Include in your plan:",
          items: [
            "Start position",
            "Path to the table",
            "A sensor check",
            "Stop condition",
          ],
        },
      ],
    },
    "Quiz: Robot Programming": {
      blocks: [
        {
          type: "quiz",
          title: "Robot Programming Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "What should you do before coding a robot?",
              options: [
                "Add sensors",
                "Plan the steps",
                "Paint the robot",
                "Remove wheels",
              ],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question: "Which is part of program flow?",
              options: ["Start", "Eat", "Sleep", "Color"],
            },
            {
              id: 3,
              type: "true-false",
              points: 1,
              question: "Debugging means improving the design.",
              options: ["True", "False"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "What helps you observe robot behavior?",
              options: [
                "Speeding up",
                "Slowing down",
                "Removing sensors",
                "Skipping tests",
              ],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "A loop is used to:",
              options: ["Repeat steps", "Charge batteries", "Add weight", "Move wires"],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question: "Testing one part at a time can reduce errors.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "What is a Line Following Robot": {
      blocks: [
        {
          type: "heading",
          text: "What is a Line Following Robot",
        },
        {
          type: "paragraph",
          text: "A line following robot uses sensors to detect a line on the floor and automatically stay on that path.",
        },
        {
          type: "image",
          title: "Line Following Robot",
          src: "/courses/robotics/line-following-robot.webp",
          alt: "Robot following a line on the floor",
        },
        {
          type: "callout",
          text: "Line following is a classic beginner robotics project.",
          tone: "info",
        },
      ],
    },
    "How Line Following Works": {
      blocks: [
        {
          type: "heading",
          text: "How Line Following Works",
        },
        {
          type: "paragraph",
          text: "Sensors detect light and dark areas. The controller adjusts motor speeds to stay on the line.",
        },
        {
          type: "table",
          title: "Simple Logic",
          columns: ["Sensor Reading", "Action"],
          rows: [
            ["Line under left sensor", "Turn left"],
            ["Line under right sensor", "Turn right"],
            ["Line centered", "Move forward"],
          ],
        },
      ],
    },
    "Why Line Following is Important": {
      blocks: [
        {
          type: "heading",
          text: "Why Line Following is Important",
        },
        {
          type: "paragraph",
          text: "Line following teaches sensor control, decision making, and tuning movement.",
        },
        {
          type: "list",
          title: "Skills practiced:",
          items: [
            "Sensor calibration",
            "Motor control",
            "Algorithm design",
            "Testing and improvement",
          ],
        },
      ],
    },
    "Improving Robot Performance": {
      blocks: [
        {
          type: "heading",
          text: "Improving Robot Performance",
        },
        {
          type: "paragraph",
          text: "Small changes can make a robot follow lines more smoothly and quickly.",
        },
        {
          type: "list",
          title: "Improve by:",
          items: [
            "Adjusting sensor height",
            "Reducing speed on sharp turns",
            "Tuning thresholds",
            "Keeping wheels clean",
          ],
        },
        {
          type: "callout",
          text: "Performance improves through testing and careful tuning.",
          tone: "success",
        },
      ],
    },
    "Key Vocabulary (Line Following)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Threshold", "Sensor value that separates line and floor"],
            ["Calibration", "Adjust sensors for accuracy"],
            ["Track", "Path the robot follows"],
            ["Tuning", "Small adjustments for better results"],
          ],
        },
      ],
    },
    "Activity: Design a Robot Track": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Design a Robot Track",
        },
        {
          type: "callout",
          text: "Draw a track with curves and intersections for a line following robot.",
          tone: "success",
        },
        {
          type: "list",
          title: "Your track should include:",
          items: [
            "At least two turns",
            "One long straight path",
            "One tricky corner",
          ],
        },
      ],
    },
    "Quiz: Line Following Robots": {
      blocks: [
        {
          type: "quiz",
          title: "Line Following Robots Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Line following robots use:",
              options: ["IR sensors", "Speakers", "Cameras only", "Batteries"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question: "If the line is under the left sensor, the robot should:",
              options: ["Turn left", "Turn right", "Stop", "Spin in place"],
            },
            {
              id: 3,
              type: "true-false",
              points: 1,
              question: "Calibration helps sensors detect the line accurately.",
              options: ["True", "False"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Which change can improve tracking?",
              options: [
                "Dirty wheels",
                "Better threshold tuning",
                "Less testing",
                "Random turns",
              ],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "Why reduce speed on sharp turns?",
              options: [
                "To avoid overshoot",
                "To save battery only",
                "To use fewer sensors",
                "To stop learning",
              ],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question: "Line following is a good project for learning control.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "What is Obstacle Avoidance": {
      blocks: [
        {
          type: "heading",
          text: "What is Obstacle Avoidance",
        },
        {
          type: "paragraph",
          text: "Obstacle avoidance lets a robot detect objects in its path and choose a safer route.",
        },
        {
          type: "image",
          title: "Obstacle Avoidance",
          src: "/courses/robotics/obstacle-avoidance.webp",
          alt: "Robot avoiding obstacles",
        },
        {
          type: "callout",
          text: "Avoiding collisions protects robots and people.",
          tone: "info",
        },
      ],
    },
    "How Obstacle Avoidance Works": {
      blocks: [
        {
          type: "heading",
          text: "How Obstacle Avoidance Works",
        },
        {
          type: "paragraph",
          text: "Distance sensors measure how close objects are. The controller decides to stop, turn, or reroute.",
        },
        {
          type: "table",
          title: "Simple Logic",
          columns: ["Distance", "Action"],
          rows: [
            ["Far", "Move forward"],
            ["Near", "Slow down"],
            ["Too close", "Stop or turn"],
          ],
        },
      ],
    },
    "Why Obstacle Avoidance Matters": {
      blocks: [
        {
          type: "heading",
          text: "Why Obstacle Avoidance Matters",
        },
        {
          type: "paragraph",
          text: "Robots that avoid obstacles can work safely around people and in unpredictable environments.",
        },
        {
          type: "list",
          title: "Real uses:",
          items: [
            "Home cleaning robots",
            "Warehouse delivery robots",
            "Hospital transport robots",
          ],
        },
      ],
    },
    "Testing Robot Behavior": {
      blocks: [
        {
          type: "heading",
          text: "Testing Robot Behavior",
        },
        {
          type: "paragraph",
          text: "Testing checks whether the robot responds correctly at different distances and angles.",
        },
        {
          type: "list",
          title: "Test ideas:",
          items: [
            "Approach obstacles at different speeds",
            "Change object size and shape",
            "Test in bright and dark conditions",
            "Measure reaction time",
          ],
        },
        {
          type: "callout",
          text: "Good testing prevents crashes.",
          tone: "warning",
        },
      ],
    },
    "Key Vocabulary (Obstacle Avoidance)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Obstacle", "Something in the robot path"],
            ["Range", "How far a sensor can detect"],
            ["Reaction time", "Time to respond"],
            ["Collision", "Crash with an object"],
          ],
        },
      ],
    },
    "Activity: Classroom Obstacle Challenge": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Classroom Obstacle Challenge",
        },
        {
          type: "callout",
          text: "Set up a safe obstacle course and plan how a robot should navigate it.",
          tone: "success",
        },
        {
          type: "list",
          title: "Include:",
          items: ["At least three obstacles", "A narrow path", "A finish zone"],
        },
      ],
    },
    "Quiz: Obstacle Avoidance": {
      blocks: [
        {
          type: "quiz",
          title: "Obstacle Avoidance Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Which sensor is commonly used for obstacle distance?",
              options: ["Ultrasonic", "LED", "Speaker", "Motor"],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Obstacle avoidance helps prevent crashes.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "If an object is very close, the robot should:",
              options: ["Speed up", "Stop or turn", "Turn off sensors", "Ignore it"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Which test helps evaluate reaction time?",
              options: [
                "Approach at different speeds",
                "Paint the robot",
                "Remove a wheel",
                "Hide the sensor",
              ],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Lighting can affect distance sensors.",
              options: ["True", "False"],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question: "A collision is:",
              options: ["A safe stop", "A crash", "A signal", "A battery type"],
            },
          ],
        },
      ],
    },
    "Starting With a Problem": {
      blocks: [
        {
          type: "heading",
          text: "Starting With a Problem",
        },
        {
          type: "paragraph",
          text: "Great robot ideas start with a real problem that needs a solution.",
        },
        {
          type: "list",
          title: "Good problems are:",
          items: ["Specific", "Helpful to users", "Possible to test", "Safe to build"],
        },
        {
          type: "callout",
          text: "Design thinking starts by understanding the problem.",
          tone: "info",
        },
      ],
    },
    "Imagine Plan Build Improve": {
      blocks: [
        {
          type: "heading",
          text: "Imagine Plan Build Improve",
        },
        {
          type: "paragraph",
          text: "Design thinking follows a loop: imagine solutions, plan, build, and improve based on feedback.",
        },
        {
          type: "table",
          title: "Design Cycle",
          columns: ["Stage", "Goal"],
          rows: [
            ["Imagine", "Brainstorm ideas"],
            ["Plan", "Choose best idea"],
            ["Build", "Create prototype"],
            ["Improve", "Test and refine"],
          ],
        },
      ],
    },
    "Thinking About the User": {
      blocks: [
        {
          type: "heading",
          text: "Thinking About the User",
        },
        {
          type: "paragraph",
          text: "Robots should be designed for the people who will use them.",
        },
        {
          type: "list",
          title: "Ask questions like:",
          items: [
            "Who will use the robot?",
            "What do they need most?",
            "What could confuse or annoy them?",
            "How can the robot be safer?",
          ],
        },
      ],
    },
    "Presenting Robot Ideas": {
      blocks: [
        {
          type: "heading",
          text: "Presenting Robot Ideas",
        },
        {
          type: "paragraph",
          text: "Sharing ideas helps teams get feedback and improve designs.",
        },
        {
          type: "list",
          title: "A good presentation includes:",
          items: [
            "Problem statement",
            "Solution sketch",
            "How it works",
            "Benefits to users",
          ],
        },
      ],
    },
    "Key Vocabulary (Design Thinking)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Prototype", "Early model to test"],
            ["User", "Person who benefits"],
            ["Feedback", "Comments used to improve"],
            ["Iterate", "Improve step by step"],
          ],
        },
      ],
    },
    "Activity: Invent a Robot": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Invent a Robot",
        },
        {
          type: "callout",
          text: "Invent a robot that solves a classroom or home problem.",
          tone: "success",
        },
        {
          type: "list",
          title: "Include:",
          items: [
            "Problem you want to solve",
            "Robot features",
            "Sensors and motors needed",
            "How it helps users",
          ],
        },
      ],
    },
    "Quiz: Design Thinking": {
      blocks: [
        {
          type: "quiz",
          title: "Design Thinking Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "Design thinking starts with:",
              options: ["A problem", "A motor", "A battery", "A random idea"],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "Feedback helps improve a design.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "A prototype is:",
              options: ["Final product", "Early model", "Sensor type", "Battery type"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "Which is part of the design cycle?",
              options: ["Imagine", "Sleep", "Charge", "Paint"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "Thinking about the user means:",
              options: [
                "Ignoring their needs",
                "Building for yourself only",
                "Designing for real people",
                "Avoiding feedback",
              ],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question: "Presentations can help improve robot ideas.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    "Capstone Project Goal": {
      blocks: [
        {
          type: "heading",
          text: "Capstone Project Goal",
        },
        {
          type: "paragraph",
          text: "The capstone project is your chance to combine everything you've learned to build a full robot solution.",
        },
        {
          type: "callout",
          text: "Your capstone should show skills from sensors, motors, logic, and safety.",
          tone: "info",
        },
      ],
    },
    "Choosing a Robot Idea": {
      blocks: [
        {
          type: "heading",
          text: "Choosing a Robot Idea",
        },
        {
          type: "paragraph",
          text: "Pick a project that is useful, safe, and possible with available parts.",
        },
        {
          type: "list",
          title: "Good project ideas are:",
          items: [
            "Simple enough to finish on time",
            "Interesting to demonstrate",
            "Helpful to a user",
            "Safe to build",
          ],
        },
      ],
    },
    "Project Requirements": {
      blocks: [
        {
          type: "heading",
          text: "Project Requirements",
        },
        {
          type: "list",
          title: "Your capstone must include:",
          items: [
            "At least one sensor",
            "At least one motor",
            "A clear program flow",
            "A safety checklist",
          ],
        },
        {
          type: "callout",
          text: "Define success criteria before building.",
          tone: "info",
        },
      ],
    },
    "Showcase Preparation": {
      blocks: [
        {
          type: "heading",
          text: "Showcase Preparation",
        },
        {
          type: "paragraph",
          text: "Prepare a short demo and explanation so others understand your robot.",
        },
        {
          type: "list",
          title: "Showcase checklist:",
          items: [
            "Explain the problem",
            "Show how the robot works",
            "Demonstrate safety features",
            "Share improvements you would make",
          ],
        },
      ],
    },
    "Key Vocabulary (Capstone)": {
      blocks: [
        {
          type: "table",
          columns: ["Term", "Meaning"],
          rows: [
            ["Capstone", "Final project"],
            ["Criteria", "Rules for success"],
            ["Demo", "Short demonstration"],
            ["Iteration", "Improvement cycle"],
          ],
        },
      ],
    },
    "Activity: Build and Present": {
      blocks: [
        {
          type: "heading",
          text: "Activity: Build and Present",
        },
        {
          type: "callout",
          text: "Build your robot, test it, and present to the class.",
          tone: "success",
        },
        {
          type: "list",
          title: "Presentation must include:",
          items: [
            "Problem and solution",
            "How sensors and motors are used",
            "Demo of behavior",
            "Safety steps followed",
          ],
        },
      ],
    },
    "Quiz: Capstone Project": {
      blocks: [
        {
          type: "quiz",
          title: "Capstone Project Quiz",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "multiple-choice",
              points: 1,
              question: "The capstone project should:",
              options: [
                "Ignore safety rules",
                "Use what you've learned",
                "Only be about art",
                "Skip testing",
              ],
            },
            {
              id: 2,
              type: "true-false",
              points: 1,
              question: "A capstone should include sensors and motors.",
              options: ["True", "False"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "What helps decide if the project is successful?",
              options: ["Criteria", "Color", "Speed only", "Noise"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question: "A demo is:",
              options: ["A short demonstration", "A motor type", "A sensor", "A wire"],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question: "Showcase preparation helps others understand your robot.",
              options: ["True", "False"],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question: "Iteration means:",
              options: [
                "Improving step by step",
                "Stopping early",
                "Removing sensors",
                "Skipping feedback",
              ],
            },
          ],
        },
      ],
    },
  },

  python: {
    "Introduction to Coding": {
      blocks: [
        {
          type: "heading",
          text: "What is Coding?",
        },
        {
          type: "paragraph",
          text: "Have you ever wondered how your favorite apps, games, or websites work? Behind every digital experience is a set of instructions written by a human — and that's exactly what coding is!",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/what-is-coding.webp",
          alt: "A kid sitting at a computer with colorful code on the screen and a lightbulb above their head representing ideas",
        },
        {
          type: "callout",
          text: "Coding (also called programming) is the process of writing instructions that a computer can understand and execute to perform a specific task.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Why Do Computers Need Code?",
        },
        {
          type: "paragraph",
          text: "Computers are incredibly fast and powerful — but they are not smart on their own. They can only do exactly what they are told. A programmer's job is to give the computer clear, precise instructions in a language it can understand.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/computer-needs-code.webp",
          alt: "Diagram showing a human giving instructions to a computer which then performs tasks like playing music, showing a website, and running a game",
        },
        {
          type: "heading",
          text: "What is a Programming Language?",
        },
        {
          type: "paragraph",
          text: "Just like humans use different languages to communicate (English, Urdu, French), we use programming languages to communicate with computers. There are hundreds of programming languages, each designed for different purposes.",
        },
        {
          type: "imageGrid",
          title: "Popular Programming Languages",
          items: [
            {
              src: "/courses/introduction-to-python/lang-python.webp",
              alt: "Python programming language logo",
              label: "Python",
            },
            {
              src: "/courses/introduction-to-python/lang-javascript.webp",
              alt: "JavaScript programming language logo",
              label: "JavaScript",
            },
            {
              src: "/courses/introduction-to-python/lang-java.webp",
              alt: "Java programming language logo",
              label: "Java",
            },
            {
              src: "/courses/introduction-to-python/lang-cpp.webp",
              alt: "C++ programming language logo",
              label: "C++",
            },
          ],
        },
        {
          type: "heading",
          text: "What Can You Build with Code?",
        },
        {
          type: "imageGrid",
          title: "Things You Can Build",
          items: [
            {
              src: "/courses/introduction-to-python/build-website.webp",
              alt: "A colorful website displayed on a laptop screen",
              label: "Websites",
            },
            {
              src: "/courses/introduction-to-python/build-game.webp",
              alt: "A fun video game running on a screen with colorful characters",
              label: "Video Games",
            },
            {
              src: "/courses/introduction-to-python/build-robot.webp",
              alt: "A small robot with blinking lights controlled by a program",
              label: "Robots",
            },
            {
              src: "/courses/introduction-to-python/build-ai.webp",
              alt: "An AI assistant icon with a brain and circuit patterns representing artificial intelligence",
              label: "AI & Apps",
            },
          ],
        },
        {
          type: "callout",
          text: "Learning to code is one of the most valuable skills of the 21st century. It teaches you to think logically, solve problems creatively, and build things that can impact the world!",
          tone: "success",
        },
      ],
    },

    "Introduction to Python": {
      blocks: [
        {
          type: "heading",
          text: "What is Python?",
        },
        {
          type: "paragraph",
          text: "Python is one of the most popular and beginner-friendly programming languages in the world. It was created by Guido van Rossum and first released in 1991. Python is known for its clean, readable syntax that looks almost like plain English.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/python-logo-banner.webp",
          alt: "The Python programming language logo with two intertwined snakes in blue and yellow on a white background",
        },
        {
          type: "callout",
          text: "Python is named after the British comedy group 'Monty Python' — not the snake! Guido van Rossum was a fan and wanted a name that was short and fun.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Why Learn Python?",
        },
        {
          type: "imageGrid",
          title: "Python is Used Everywhere",
          items: [
            {
              src: "/courses/introduction-to-python/python-use-ai.webp",
              alt: "An AI brain with neural network connections representing Python's use in artificial intelligence",
              label: "Artificial Intelligence",
            },
            {
              src: "/courses/introduction-to-python/python-use-web.webp",
              alt: "A web browser showing a website built with Python frameworks",
              label: "Web Development",
            },
            {
              src: "/courses/introduction-to-python/python-use-data.webp",
              alt: "A colorful data chart and graphs representing Python's use in data science",
              label: "Data Science",
            },
            {
              src: "/courses/introduction-to-python/python-use-robotics.webp",
              alt: "A robot arm controlled by Python code",
              label: "Robotics",
            },
          ],
        },
        {
          type: "heading",
          text: "Python in PictoBlox",
        },
        {
          type: "paragraph",
          text: "In this course, we will write Python code using PictoBlox — the same platform you may have used for block coding. PictoBlox allows you to switch from blocks to Python, making it easy to transition from visual coding to real text-based programming.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/pictoblox-python-mode.webp",
          alt: "PictoBlox interface showing the Python coding environment with a code editor on the left and the Stage on the right",
        },
        {
          type: "heading",
          text: "Your First Python Program",
        },
        {
          type: "paragraph",
          text: "The classic first program in any language is one that prints a message on the screen. In Python, this is done with the print() function.",
        },
        {
          type: "text",
          content: 'print("Hello, World!")',
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/hello-world-output.webp",
          alt: "Python console output showing Hello World printed in green text on a dark terminal background",
        },
        {
          type: "paragraph",
          text: "When you run this code, Python will display the message Hello, World! on the screen. Simple, right? That's the beauty of Python — it takes just one line to get started!",
        },
        {
          type: "heading",
          text: "Python Syntax Rules",
        },
        {
          type: "table",
          title: "Basic Python Syntax Rules",
          columns: ["Rule", "Example", "Notes"],
          rows: [
            [
              "Text strings must be in quotes",
              'print("Hello")',
              "Use single or double quotes",
            ],
            [
              "Python is case-sensitive",
              "print vs Print",
              "print() works, Print() does not",
            ],
            [
              "Indentation matters",
              "code inside blocks must be indented",
              "Use 4 spaces or 1 tab",
            ],
            [
              "Comments start with #",
              "# This is a comment",
              "Comments are ignored by Python",
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/python-indentation-diagram.webp",
          alt: "Diagram comparing correct and incorrect Python indentation with green checkmarks and red crosses showing how indentation defines code blocks",
        },
        {
          type: "callout",
          text: "Unlike some other languages, Python does not use curly braces {} to group code. Instead, it uses indentation (spaces at the start of a line). Getting your indentation right is very important in Python!",
          tone: "warning",
        },
      ],
    },

    "Activity: Introduce Yourself with Tobi": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will write our first real Python program in PictoBlox! We will use Python code to make Tobi the bear introduce himself on the Stage using speech bubbles.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/tobi-introduce-setup.webp",
          alt: "PictoBlox Python mode showing Tobi the bear on the Stage and an empty Python code editor ready to type",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Python as the coding environment.",
            "Make sure the Tobi sprite is on the Stage.",
          ],
        },
        {
          type: "heading",
          text: "Understanding the say() Function",
        },
        {
          type: "paragraph",
          text: "In PictoBlox Python mode, sprites have built-in functions. The say() function makes a sprite display a message in a speech bubble, just like the 'Say () for () seconds' block in block coding.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/say-function-comparison.webp",
          alt: "Side by side comparison showing the Say block in block coding on the left and tobi.say() Python code on the right with an arrow between them",
        },
        {
          type: "table",
          title: "Sprite Speech Functions",
          columns: ["Function", "What it Does", "Example"],
          rows: [
            [
              "say(message, duration)",
              "Makes the sprite say a message for a number of seconds",
              'tobi.say("Hello!", 2)',
            ],
            [
              "print(message)",
              "Prints a message to the output console",
              'print("Hello, World!")',
            ],
          ],
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "paragraph",
          text: "Now let's write the Python script to make Tobi introduce himself. Type the following code in the Python editor:",
        },
        {
          type: "text",
          content:
            'tobi.say("Hi! My name is Tobi.", 2)\ntobi.say("I am a bear who loves coding!", 2)\ntobi.say("Welcome to Python programming!", 2)',
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the Run button (green flag) to execute the code.",
            "Watch Tobi display each message one after another on the Stage.",
            "Each message stays on screen for 2 seconds before the next one appears.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/tobi-introduce-result.webp",
          alt: "PictoBlox stage showing Tobi the bear with a speech bubble saying Hi My name is Tobi",
        },
        {
          type: "heading",
          text: "Challenge",
        },
        {
          type: "paragraph",
          text: "Modify the script to make Tobi introduce YOU instead! Change the messages so Tobi says your name, your age, and your favorite hobby.",
        },
        {
          type: "callout",
          text: "Save your file with the name Introduce Yourself before moving on!",
          tone: "success",
        },
      ],
    },

    Conclusion: {
      blocks: [
        {
          type: "callout",
          text: "Great work completing this lesson! Let's quickly recap what you've learned before moving on.",
          tone: "success",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/lesson1-recap-banner.webp",
          alt: "Tobi the bear standing next to a chalkboard with Lesson 1 Complete written on it and a gold star sticker",
        },
        {
          type: "heading",
          text: "What We Covered",
        },
        {
          type: "list",
          items: [
            "What coding is and why computers need instructions",
            "What Python is and why it is a great language to learn",
            "How to use PictoBlox in Python mode",
            "How to write and run a basic Python program using print() and say()",
          ],
        },
        {
          type: "heading",
          text: "Key Takeaways",
        },
        {
          type: "table",
          title: "Lesson Summary",
          columns: ["Concept", "Key Point"],
          rows: [
            ["Coding", "Writing instructions for a computer to follow"],
            ["Python", "A beginner-friendly, widely-used programming language"],
            ["print()", "Displays a message in the console"],
            ["say()", "Makes a sprite display a speech bubble in PictoBlox"],
            ["Syntax", "The rules of how Python code must be written"],
          ],
        },
        {
          type: "paragraph",
          text: "In the next lesson, we will explore how to bring sprites to life using animations — all written in Python!",
        },
      ],
    },

    "Quiz 1: Python Introduction": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 1: Python Introduction",
          timeLimit: "10 minutes",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question: "Python is named after the snake.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which function is used to display a message in the Python console?",
              options: ["say()", "display()", "print()", "show()"],
            },
            {
              id: 3,
              type: "true-false",
              points: 1,
              question:
                "In Python, indentation is important and affects how the code runs.",
              options: ["True", "False"],
            },
            {
              id: 4,
              type: "multiple-choice",
              points: 1,
              question:
                "Which of the following is the correct way to write a comment in Python?",
              options: [
                "// This is a comment",
                "/* This is a comment */",
                "# This is a comment",
                "-- This is a comment",
              ],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "Who created the Python programming language?",
              options: [
                "Bill Gates",
                "Guido van Rossum",
                "Linus Torvalds",
                "James Gosling",
              ],
            },
            {
              id: 6,
              type: "reorder",
              points: 2,
              question:
                "Arrange these steps in the correct order to run a Python program in PictoBlox:",
              options: [
                "Click the Run button",
                "Open PictoBlox and create a New File",
                "Select Python as the coding environment",
                "Type your Python code in the editor",
              ],
            },
          ],
        },
      ],
    },

    "Backdrop & Costumes": {
      blocks: [
        {
          type: "heading",
          text: "Backdrops and Costumes in Python Mode",
        },
        {
          type: "paragraph",
          text: "Just like in block coding, Python mode in PictoBlox allows you to control backdrops and costumes using code. Instead of dragging blocks, you write Python functions to change how the Stage and sprites look.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/backdrop-costume-overview.webp",
          alt: "PictoBlox interface showing the Backdrops tab on the left with multiple backdrop thumbnails and the Costumes tab showing multiple Tobi costume frames",
        },
        {
          type: "heading",
          text: "Controlling Backdrops with Python",
        },
        {
          type: "paragraph",
          text: "The Stage object in PictoBlox has functions to switch between backdrops. You can change the backdrop by name or switch to the next one in sequence.",
        },
        {
          type: "table",
          title: "Backdrop Functions in Python",
          columns: ["Function", "What it Does", "Example"],
          rows: [
            [
              "stage.switch_backdrop(name)",
              "Switches the Stage to a specific backdrop by name",
              'stage.switch_backdrop("Forest")',
            ],
            [
              "stage.next_backdrop()",
              "Switches to the next backdrop in the list",
              "stage.next_backdrop()",
            ],
            [
              "stage.backdrop_name()",
              "Returns the name of the current backdrop",
              "print(stage.backdrop_name())",
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/backdrop-switch-demo.webp",
          alt: "Two PictoBlox stages side by side — the left shows a plain white backdrop and the right shows a Forest backdrop after running stage.switch_backdrop",
        },
        {
          type: "heading",
          text: "Controlling Costumes with Python",
        },
        {
          type: "paragraph",
          text: "Sprites also have functions to switch between their costumes. This is the key to creating animations in Python!",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/costumes-strip.webp",
          alt: "A horizontal strip showing four Tobi costumes in sequence — Tobi, Tobi Walking 1, Tobi Walking 2, and Tobi mouth open — illustrating costume frames",
        },
        {
          type: "table",
          title: "Costume Functions in Python",
          columns: ["Function", "What it Does", "Example"],
          rows: [
            [
              "sprite.switch_costume(name)",
              "Switches the sprite to a specific costume by name",
              'tobi.switch_costume("Tobi Walking 1")',
            ],
            [
              "sprite.next_costume()",
              "Switches to the next costume in the list",
              "tobi.next_costume()",
            ],
            [
              "sprite.costume_name()",
              "Returns the name of the current costume",
              "print(tobi.costume_name())",
            ],
          ],
        },
        {
          type: "callout",
          text: "Costume and backdrop names are case-sensitive in Python. Make sure the name you use in your code matches exactly with the name shown in the Costumes or Backdrops tab!",
          tone: "warning",
        },
        {
          type: "heading",
          text: "Example: Changing the Backdrop",
        },
        {
          type: "text",
          content:
            '# Switch to the Forest backdrop\nstage.switch_backdrop("Forest")\n\n# Print the current backdrop name\nprint(stage.backdrop_name())',
        },
      ],
    },

    "Functions to Control Sprites": {
      blocks: [
        {
          type: "heading",
          text: "Controlling Sprites with Python",
        },
        {
          type: "paragraph",
          text: "In PictoBlox Python mode, every sprite is an object with a set of built-in functions you can call in your code. These functions let you move, rotate, resize, show, hide, and animate your sprites — all through Python!",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/sprite-control-overview.webp",
          alt: "Diagram of the Tobi sprite with labeled arrows pointing to different properties — position (x, y), direction, size, and visibility",
        },
        {
          type: "heading",
          text: "Motion Functions",
        },
        {
          type: "table",
          title: "Sprite Motion Functions",
          columns: ["Function", "What it Does", "Example"],
          rows: [
            [
              "sprite.move(steps)",
              "Moves the sprite forward by a number of steps",
              "tobi.move(10)",
            ],
            [
              "sprite.go_to(x, y)",
              "Moves the sprite to a specific position",
              "tobi.go_to(0, -100)",
            ],
            [
              "sprite.set_x(value)",
              "Sets the sprite's X position",
              "tobi.set_x(50)",
            ],
            [
              "sprite.set_y(value)",
              "Sets the sprite's Y position",
              "tobi.set_y(-50)",
            ],
            [
              "sprite.change_x(value)",
              "Changes the sprite's X position by a value",
              "tobi.change_x(10)",
            ],
            [
              "sprite.change_y(value)",
              "Changes the sprite's Y position by a value",
              "tobi.change_y(10)",
            ],
            [
              "sprite.point_in_direction(angle)",
              "Points the sprite in a direction",
              "tobi.point_in_direction(90)",
            ],
            [
              "sprite.turn_right(degrees)",
              "Rotates the sprite clockwise",
              "tobi.turn_right(15)",
            ],
            [
              "sprite.turn_left(degrees)",
              "Rotates the sprite counter-clockwise",
              "tobi.turn_left(15)",
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/stage-coordinate-grid.webp",
          alt: "PictoBlox Stage coordinate grid showing x-axis from -240 to 240 and y-axis from -180 to 180 with the center marked as 0,0 and Tobi placed at various positions",
        },
        {
          type: "heading",
          text: "Appearance Functions",
        },
        {
          type: "table",
          title: "Sprite Appearance Functions",
          columns: ["Function", "What it Does", "Example"],
          rows: [
            ["sprite.show()", "Makes the sprite visible", "tobi.show()"],
            ["sprite.hide()", "Hides the sprite", "tobi.hide()"],
            [
              "sprite.set_size(percent)",
              "Sets the sprite's size as a percentage",
              "tobi.set_size(50)",
            ],
            [
              "sprite.change_size(value)",
              "Changes the sprite's size by a value",
              "tobi.change_size(10)",
            ],
            [
              "sprite.say(message, duration)",
              "Shows a speech bubble for a duration",
              'tobi.say("Hello!", 2)',
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/sprite-size-comparison.webp",
          alt: "Three versions of the Tobi sprite side by side at 30%, 60%, and 100% size to illustrate the set_size function",
        },
        {
          type: "heading",
          text: "Timing Functions",
        },
        {
          type: "paragraph",
          text: "To create smooth animations and delays between actions, Python provides the time module with a sleep() function.",
        },
        {
          type: "text",
          content:
            "import time\n\ntobi.move(10)\ntime.sleep(0.5)  # Wait 0.5 seconds\ntobi.move(10)",
        },
        {
          type: "callout",
          text: "Always import the time module at the top of your script before using time.sleep(). Forgetting to import it will cause an error!",
          tone: "warning",
        },
      ],
    },

    "Activity: Tobi Walking Animation": {
      blocks: [
        {
          type: "paragraph",
          text: "Now let's put it all together! In this activity, we will use Python code to animate Tobi walking across the Stage by switching between costumes and moving him step by step.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/tobi-walking-preview.webp",
          alt: "Tobi the bear shown in three positions across the Stage from left to right illustrating the walking animation path",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Python as the coding environment.",
            "Make sure Tobi is on the Stage and has at least two walking costumes (Tobi Walking 1 and Tobi Walking 2).",
            "Set a backdrop of your choice — the Forest backdrop works great!",
          ],
        },
        {
          type: "heading",
          text: "How the Animation Works",
        },
        {
          type: "paragraph",
          text: "An animation is created by rapidly switching between costumes while moving the sprite. We will use a loop to repeat the costume switch and movement many times, creating the illusion that Tobi is walking.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/animation-frames-diagram.webp",
          alt: "Diagram showing four animation frames — Tobi Walking 1, move, Tobi Walking 2, move — with arrows looping back to demonstrate how rapid switching creates animation",
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "paragraph",
          text: "Type the following Python code in the editor:",
        },
        {
          type: "text",
          content:
            'import time\n\n# Set starting position\ntobi.go_to(-180, -80)\ntobi.point_in_direction(90)\ntobi.set_size(60)\n\n# Walking animation loop\nfor i in range(30):\n    tobi.switch_costume("Tobi Walking 1")\n    tobi.move(8)\n    time.sleep(0.1)\n    tobi.switch_costume("Tobi Walking 2")\n    tobi.move(8)\n    time.sleep(0.1)',
        },
        {
          type: "heading",
          text: "Understanding the Code",
        },
        {
          type: "table",
          title: "Code Breakdown",
          columns: ["Line", "What it Does"],
          rows: [
            [
              "import time",
              "Imports the time module so we can use time.sleep()",
            ],
            [
              "tobi.go_to(-180, -80)",
              "Positions Tobi at the left side of the Stage",
            ],
            ["tobi.point_in_direction(90)", "Makes Tobi face right"],
            ["tobi.set_size(60)", "Sets Tobi's size to 60%"],
            ["for i in range(30)", "Repeats the loop 30 times"],
            [
              'tobi.switch_costume("Tobi Walking 1")',
              "Switches to the first walking costume",
            ],
            ["tobi.move(8)", "Moves Tobi 8 steps forward"],
            ["time.sleep(0.1)", "Waits 0.1 seconds before the next step"],
          ],
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the Run button to execute the code.",
            "Watch Tobi walk smoothly across the Stage!",
            "Try changing the range(30) value to make Tobi walk further or shorter.",
            "Try changing time.sleep(0.1) to make the animation faster or slower.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/tobi-walking-python.webp",
          alt: "PictoBlox stage showing Tobi mid-walk in the forest backdrop with Python code visible in the editor",
        },
        {
          type: "callout",
          text: "Save your file with the name Tobi Walking Animation before moving on!",
          tone: "success",
        },
      ],
    },

    "Quiz 2: Animation with Python": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 2: Animation with Python",
          timeLimit: "10 minutes",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "In PictoBlox Python mode, sprite.next_costume() switches the sprite to the previous costume.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which Python module must be imported to use time.sleep()?",
              options: ["math", "random", "time", "os"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "Which function moves a sprite to a specific X and Y position on the Stage?",
              options: [
                "sprite.move(steps)",
                "sprite.go_to(x, y)",
                "sprite.set_x(value)",
                "sprite.change_x(value)",
              ],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "Costume names used in switch_costume() are case-sensitive.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "What does time.sleep(0.5) do in a Python script?",
              options: [
                "Speeds up the program by 0.5x",
                "Pauses the program for 0.5 seconds",
                "Repeats the next line 0.5 times",
                "Skips the next 0.5 lines of code",
              ],
            },
            {
              id: 6,
              type: "match",
              points: 2,
              question: "Match each function with its correct description.",
              terms: [
                "sprite.show()",
                "sprite.hide()",
                "sprite.set_size(50)",
                "sprite.point_in_direction(90)",
              ],
              definitions: [
                "Makes the sprite visible on the Stage",
                "Hides the sprite from the Stage",
                "Sets the sprite's size to 50%",
                "Points the sprite to face right",
              ],
            },
          ],
        },
      ],
    },

    "Algorithm Basics": {
      blocks: [
        {
          type: "heading",
          text: "What is an Algorithm?",
        },
        {
          type: "paragraph",
          text: "Before writing any code, a good programmer thinks about the steps needed to solve a problem. This ordered set of steps is called an algorithm.",
        },
        {
          type: "callout",
          text: "An algorithm is a step-by-step set of instructions designed to solve a problem or complete a task. Every program is essentially an algorithm written in a programming language.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/algorithm-concept.webp",
          alt: "Illustration showing a problem on the left, an arrow pointing to a numbered list of steps in the middle labeled algorithm, and the solution on the right",
        },
        {
          type: "heading",
          text: "Properties of a Good Algorithm",
        },
        {
          type: "list",
          items: [
            "Input — it takes zero or more inputs",
            "Output — it produces at least one result",
            "Definiteness — every step is clear and unambiguous",
            "Finiteness — it terminates after a finite number of steps",
            "Effectiveness — every step is simple enough to be carried out",
          ],
        },
        {
          type: "heading",
          text: "A Real-Life Algorithm Example",
        },
        {
          type: "paragraph",
          text: "Making a cup of tea is an algorithm! Here's how it looks as a step-by-step process:",
        },
        {
          type: "imageGrid",
          title: "Making Tea — Step by Step",
          items: [
            {
              src: "/courses/introduction-to-python/tea-step-boil.webp",
              alt: "A kettle with steam coming out representing boiling water",
              label: "1. Boil Water",
            },
            {
              src: "/courses/introduction-to-python/tea-step-bag.webp",
              alt: "A tea bag being placed into an empty cup",
              label: "2. Add Tea Bag",
            },
            {
              src: "/courses/introduction-to-python/tea-step-pour.webp",
              alt: "Hot water being poured from a kettle into a cup with a tea bag",
              label: "3. Pour Water",
            },
            {
              src: "/courses/introduction-to-python/tea-step-serve.webp",
              alt: "A finished cup of tea with steam on a saucer ready to be served",
              label: "4. Serve",
            },
          ],
        },
        {
          type: "heading",
          text: "Algorithms in Programming",
        },
        {
          type: "paragraph",
          text: "In programming, algorithms are expressed as code. Before writing code, it is always a good idea to plan your algorithm in plain language or as a flowchart. This makes coding much easier and helps avoid mistakes.",
        },
        {
          type: "table",
          title: "Algorithm vs Code",
          columns: ["Algorithm Step", "Python Code"],
          rows: [
            ["Get the user's name", 'name = input("Enter your name: ")'],
            ["Display a greeting", 'print("Hello, " + name)'],
            ["Ask for the user's age", 'age = int(input("Enter your age: "))'],
            ["Check if old enough to vote", "if age >= 18:"],
            ["Display result", '    print("You can vote!")'],
          ],
        },
        {
          type: "callout",
          text: "A well-planned algorithm makes writing code much faster and less error-prone. Always plan before you code!",
          tone: "info",
        },
      ],
    },

    "Flowchart and Symbols": {
      blocks: [
        {
          type: "heading",
          text: "What is a Flowchart?",
        },
        {
          type: "paragraph",
          text: "A flowchart is a visual diagram that represents an algorithm using shapes and arrows. It shows the flow of steps and decisions in a program, making it easy to understand the logic before writing any code.",
        },
        {
          type: "callout",
          text: "Flowcharts are a universal tool used by programmers, engineers, and business analysts to visualize processes and logic before implementation.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Flowchart Symbols",
        },
        {
          type: "imageGrid",
          title: "Standard Flowchart Symbols",
          items: [
            {
              src: "/courses/introduction-to-python/flowchart-terminal.webp",
              alt: "A rounded rectangle oval shape labeled Terminal representing the start or end of a flowchart",
              label: "Terminal (Start/End)",
            },
            {
              src: "/courses/introduction-to-python/flowchart-process.webp",
              alt: "A rectangle shape labeled Process representing an action or calculation step",
              label: "Process",
            },
            {
              src: "/courses/introduction-to-python/flowchart-decision.webp",
              alt: "A diamond shape labeled Decision with Yes and No branches coming out of it",
              label: "Decision",
            },
            {
              src: "/courses/introduction-to-python/flowchart-io.webp",
              alt: "A parallelogram shape labeled Input or Output representing data entering or leaving the program",
              label: "Input / Output",
            },
          ],
        },
        {
          type: "table",
          title: "Standard Flowchart Symbols",
          columns: ["Symbol", "Shape", "Meaning"],
          rows: [
            [
              "Terminal",
              "Rounded rectangle (oval)",
              "Marks the Start or End of the flowchart",
            ],
            [
              "Process",
              "Rectangle",
              "Represents an action or instruction (e.g. calculate, assign)",
            ],
            [
              "Decision",
              "Diamond",
              "Represents a yes/no or true/false question",
            ],
            [
              "Input/Output",
              "Parallelogram",
              "Represents data input (e.g. user types) or output (e.g. display result)",
            ],
            [
              "Arrow/Flow Line",
              "Arrow",
              "Shows the direction of flow between steps",
            ],
          ],
        },
        {
          type: "heading",
          text: "Example: Flowchart for Checking a Number",
        },
        {
          type: "paragraph",
          text: "Let's draw a flowchart for a program that checks whether a number entered by the user is positive, negative, or zero.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/flowchart-number-check.webp",
          alt: "Flowchart diagram showing the logic for checking whether a number is positive, negative, or zero with decision diamonds and process rectangles",
        },
        {
          type: "heading",
          text: "Flowchart to Python Code",
        },
        {
          type: "paragraph",
          text: "Once a flowchart is ready, translating it to Python code becomes straightforward. Each flowchart symbol maps directly to a Python construct:",
        },
        {
          type: "table",
          title: "Flowchart to Python Mapping",
          columns: ["Flowchart Symbol", "Python Equivalent"],
          rows: [
            ["Terminal (Start/End)", "Beginning or end of the script"],
            ["Input/Output", "input() or print()"],
            ["Process", "Variable assignment or calculation"],
            ["Decision", "if / elif / else statement"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/flowchart-to-code.webp",
          alt: "Side by side view of a simple flowchart on the left and its equivalent Python code on the right with colored arrows connecting each symbol to its corresponding code line",
        },
        {
          type: "callout",
          text: "Always draw a flowchart before writing complex programs. It saves time and helps you spot logical errors before they become code bugs!",
          tone: "info",
        },
      ],
    },

    "Activity 1: Profit & Loss": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will design an algorithm and flowchart first, then write a Python program that calculates whether a transaction results in a profit, a loss, or breaks even.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/profit-loss-banner.webp",
          alt: "Illustration showing a shopkeeper with price tags, a green arrow going up for profit and a red arrow going down for loss",
        },
        {
          type: "heading",
          text: "Understanding Profit & Loss",
        },
        {
          type: "table",
          title: "Profit & Loss Formulas",
          columns: ["Condition", "Formula"],
          rows: [
            [
              "Profit",
              "Selling Price > Cost Price → Profit = Selling Price - Cost Price",
            ],
            [
              "Loss",
              "Selling Price < Cost Price → Loss = Cost Price - Selling Price",
            ],
            ["Break Even", "Selling Price = Cost Price → No profit, no loss"],
          ],
        },
        {
          type: "heading",
          text: "Algorithm",
        },
        {
          type: "list",
          items: [
            "START",
            "INPUT: Ask the user for the Cost Price (CP)",
            "INPUT: Ask the user for the Selling Price (SP)",
            "DECISION: Is SP greater than CP?",
            "YES → Calculate Profit = SP - CP, OUTPUT: Print profit amount",
            "NO → DECISION: Is SP less than CP?",
            "YES → Calculate Loss = CP - SP, OUTPUT: Print loss amount",
            "NO → OUTPUT: Print 'Break Even — no profit or loss'",
            "END",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/profit-loss-flowchart.webp",
          alt: "Flowchart for the profit and loss calculator showing start, two input boxes for CP and SP, a diamond decision for SP greater than CP, branches to profit calculation and another decision for SP less than CP, then loss calculation or break even output, and end",
        },
        {
          type: "heading",
          text: "Writing the Python Code",
        },
        {
          type: "text",
          content:
            '# Profit and Loss Calculator\n\ncp = float(input("Enter the Cost Price: "))\nsp = float(input("Enter the Selling Price: "))\n\nif sp > cp:\n    profit = sp - cp\n    print("Profit: " + str(profit))\nelif sp < cp:\n    loss = cp - sp\n    print("Loss: " + str(loss))\nelse:\n    print("Break Even — no profit or loss")',
        },
        {
          type: "heading",
          text: "Understanding the Code",
        },
        {
          type: "table",
          title: "Code Breakdown",
          columns: ["Line", "What it Does"],
          rows: [
            ["float(input(...))", "Gets a decimal number from the user"],
            [
              "if sp > cp",
              "Checks if selling price is greater than cost price",
            ],
            ["profit = sp - cp", "Calculates the profit amount"],
            [
              "elif sp < cp",
              "Checks if selling price is less than cost price (only if first condition was false)",
            ],
            ["loss = cp - sp", "Calculates the loss amount"],
            ["else", "Runs if neither condition was true — break even case"],
            [
              "str(profit)",
              "Converts the number to a string so it can be joined with text",
            ],
          ],
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run the program and enter CP = 500, SP = 700 → Should print Profit: 200.0",
            "Run again with CP = 800, SP = 600 → Should print Loss: 200.0",
            "Run again with CP = 500, SP = 500 → Should print Break Even",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/profit-loss-output.webp",
          alt: "Python console output showing three test runs of the profit and loss calculator with profit, loss, and break even results",
        },
        {
          type: "callout",
          text: "Save your file with the name Profit and Loss Calculator before moving on!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Eligible to Vote": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will write a Python program that checks whether a person is eligible to vote based on their age. In most countries, the minimum voting age is 18.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/voting-banner.webp",
          alt: "Illustration of a ballot box with a checkmark and a person next to an age 18 sign representing voting eligibility",
        },
        {
          type: "heading",
          text: "Algorithm",
        },
        {
          type: "list",
          items: [
            "START",
            "INPUT: Ask the user for their name",
            "INPUT: Ask the user for their age",
            "DECISION: Is age >= 18?",
            "YES → OUTPUT: Print that the person is eligible to vote",
            "NO → OUTPUT: Print that the person is not eligible and how many years remain",
            "END",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/voting-flowchart.webp",
          alt: "Flowchart for the voting eligibility checker showing start, input boxes for name and age, a diamond decision for age >= 18, a yes branch to eligible message and a no branch to not eligible message with years remaining, then end",
        },
        {
          type: "heading",
          text: "Writing the Python Code",
        },
        {
          type: "text",
          content:
            '# Voting Eligibility Checker\n\nname = input("Enter your name: ")\nage = int(input("Enter your age: "))\n\nif age >= 18:\n    print(name + ", you are eligible to vote!")\nelse:\n    years_left = 18 - age\n    print(name + ", you are not eligible to vote yet.")\n    print("You need to wait " + str(years_left) + " more year(s).")',
        },
        {
          type: "heading",
          text: "Understanding the Code",
        },
        {
          type: "table",
          title: "Code Breakdown",
          columns: ["Line", "What it Does"],
          rows: [
            ["name = input(...)", "Stores the user's name as a string"],
            ["age = int(input(...))", "Stores the user's age as an integer"],
            ["if age >= 18", "Checks if the age is 18 or more"],
            [
              "years_left = 18 - age",
              "Calculates how many years until the person can vote",
            ],
            ["str(years_left)", "Converts the number to a string for printing"],
          ],
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with name = Sara, age = 20 → Should print Sara, you are eligible to vote!",
            "Run with name = Ali, age = 15 → Should print Ali, you are not eligible to vote yet. You need to wait 3 more year(s).",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/voting-output.webp",
          alt: "Python console showing two test runs — one where Sara aged 20 is eligible and one where Ali aged 15 is not eligible with years remaining shown",
        },
        {
          type: "callout",
          text: "Save your file with the name Voting Eligibility Checker before moving on!",
          tone: "success",
        },
      ],
    },

    "Quiz 3: Algorithm & Flowchart": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 3: Algorithm & Flowchart",
          timeLimit: "10 minutes",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "An algorithm must always terminate after a finite number of steps.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which flowchart symbol represents a decision (yes/no question)?",
              options: ["Rectangle", "Oval", "Diamond", "Parallelogram"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "Which Python construct corresponds to a Decision symbol in a flowchart?",
              options: ["for loop", "print()", "if / elif / else", "input()"],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "A parallelogram in a flowchart represents an Input or Output operation.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question:
                "If the Selling Price is less than the Cost Price, what is the result?",
              options: ["Profit", "Break Even", "Loss", "No result"],
            },
            {
              id: 6,
              type: "match",
              points: 2,
              question: "Match each flowchart symbol to its meaning.",
              terms: ["Oval", "Rectangle", "Diamond", "Parallelogram"],
              definitions: [
                "Start or End of the flowchart",
                "A process or action",
                "A yes/no decision",
                "Input or Output operation",
              ],
            },
          ],
        },
      ],
    },

    "Variables Basics": {
      blocks: [
        {
          type: "heading",
          text: "What is a Variable?",
        },
        {
          type: "paragraph",
          text: "A variable is like a labeled box where you can store a value. The label is the variable's name, and the value inside can change as the program runs — that's why it's called a variable!",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/variable-box-analogy.webp",
          alt: "Three illustrated boxes labeled name, age, and score with the values Tobi, 10, and 95 written inside each box respectively",
        },
        {
          type: "callout",
          text: "In Python, you create a variable by writing its name, followed by = and the value you want to store. This is called variable assignment.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Creating Variables in Python",
        },
        {
          type: "text",
          content:
            '# Creating variables\nname = "Tobi"\nage = 10\nheight = 1.2\nis_student = True\n\n# Printing variables\nprint(name)\nprint(age)',
        },
        {
          type: "heading",
          text: "Variable Naming Rules",
        },
        {
          type: "table",
          title: "Python Variable Naming Rules",
          columns: ["Rule", "Valid Example", "Invalid Example"],
          rows: [
            [
              "Must start with a letter or underscore",
              "name, _count",
              "1name, #score",
            ],
            [
              "Can contain letters, numbers, underscores",
              "score_1, player2",
              "score-1, player 2",
            ],
            ["Cannot be a Python keyword", "my_list, total", "for, if, while"],
            ["Case-sensitive", "Score and score are different", "—"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/variable-naming-examples.webp",
          alt: "List of variable names with green checkmarks next to valid names like player_score and red crosses next to invalid names like 1score and my-variable",
        },
        {
          type: "heading",
          text: "Updating Variables",
        },
        {
          type: "paragraph",
          text: "Variables can be updated at any point in your program. The old value is replaced with the new one.",
        },
        {
          type: "text",
          content:
            "score = 0\nprint(score)  # Output: 0\n\nscore = 10\nprint(score)  # Output: 10\n\nscore = score + 5\nprint(score)  # Output: 15",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/variable-update-diagram.webp",
          alt: "Diagram of a box labeled score showing its value changing from 0 to 10 to 15 with arrows and assignment statements between each step",
        },
        {
          type: "callout",
          text: "In Python, you do not need to declare the type of a variable. Python automatically figures out the type based on the value you assign. This is called dynamic typing.",
          tone: "info",
        },
      ],
    },

    "Data Types in Python": {
      blocks: [
        {
          type: "heading",
          text: "What are Data Types?",
        },
        {
          type: "paragraph",
          text: "Every value in Python has a data type that tells Python what kind of data it is and what operations can be performed on it. Understanding data types is essential for writing correct programs.",
        },
        {
          type: "imageGrid",
          title: "The 4 Core Data Types",
          items: [
            {
              src: "/courses/introduction-to-python/dtype-int.webp",
              alt: "The number 42 displayed in bold representing the integer data type",
              label: "int — Whole Numbers",
            },
            {
              src: "/courses/introduction-to-python/dtype-float.webp",
              alt: "The number 3.14 displayed representing the float decimal data type",
              label: "float — Decimals",
            },
            {
              src: "/courses/introduction-to-python/dtype-str.webp",
              alt: "The word Hello in quotation marks representing the string text data type",
              label: "str — Text",
            },
            {
              src: "/courses/introduction-to-python/dtype-bool.webp",
              alt: "True and False labels with a toggle switch representing the boolean data type",
              label: "bool — True / False",
            },
          ],
        },
        {
          type: "table",
          title: "Python Data Types",
          columns: ["Data Type", "Keyword", "Example", "Description"],
          rows: [
            [
              "Integer",
              "int",
              "age = 15",
              "Whole numbers, positive or negative",
            ],
            ["Float", "float", "height = 1.75", "Decimal numbers"],
            ["String", "str", 'name = "Tobi"', "Text — always in quotes"],
            [
              "Boolean",
              "bool",
              "is_student = True",
              "True or False values only",
            ],
          ],
        },
        {
          type: "heading",
          text: "Checking Data Types",
        },
        {
          type: "paragraph",
          text: "You can check the data type of any variable using the type() function.",
        },
        {
          type: "text",
          content:
            "name = \"Tobi\"\nage = 15\nheight = 1.75\nis_student = True\n\nprint(type(name))       # <class 'str'>\nprint(type(age))        # <class 'int'>\nprint(type(height))     # <class 'float'>\nprint(type(is_student)) # <class 'bool')",
        },
        {
          type: "heading",
          text: "Type Conversion",
        },
        {
          type: "paragraph",
          text: "Sometimes you need to convert a value from one data type to another. This is called type conversion or type casting.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/type-conversion-diagram.webp",
          alt: "Diagram showing arrows between data types — a string 25 being converted to integer 25 and float 25.0, with the int(), float(), and str() function labels on the arrows",
        },
        {
          type: "table",
          title: "Type Conversion Functions",
          columns: ["Function", "Converts To", "Example"],
          rows: [
            ["int()", "Integer", 'int("15") → 15'],
            ["float()", "Float", 'float("3.14") → 3.14'],
            ["str()", "String", 'str(100) → "100"'],
            ["bool()", "Boolean", "bool(0) → False"],
          ],
        },
        {
          type: "callout",
          text: "When getting input from a user with input(), Python always returns a string. If you need a number, you must convert it using int() or float()!",
          tone: "warning",
        },
      ],
    },

    "Arithmetic Operators": {
      blocks: [
        {
          type: "heading",
          text: "Arithmetic Operators in Python",
        },
        {
          type: "paragraph",
          text: "Python supports all standard mathematical operations through arithmetic operators. These allow you to perform calculations on numbers and variables in your programs.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/arithmetic-operators-banner.webp",
          alt: "Colorful icons of the plus, minus, multiply, divide, and percent symbols arranged in a row on a bright background",
        },
        {
          type: "table",
          title: "Python Arithmetic Operators",
          columns: ["Operator", "Symbol", "Example", "Result"],
          rows: [
            ["Addition", "+", "5 + 3", "8"],
            ["Subtraction", "-", "9 - 4", "5"],
            ["Multiplication", "*", "6 * 3", "18"],
            ["Division", "/", "10 / 3", "3.3333..."],
            ["Floor Division", "//", "10 // 3", "3"],
            ["Modulo", "%", "10 % 3", "1"],
            ["Exponentiation", "**", "2 ** 4", "16"],
          ],
        },
        {
          type: "heading",
          text: "Order of Operations",
        },
        {
          type: "paragraph",
          text: "Python follows the standard mathematical order of operations — often remembered as PEMDAS (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction).",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/pemdas-diagram.webp",
          alt: "PEMDAS pyramid diagram showing the order of operations from top to bottom — Parentheses, Exponents, Multiplication and Division, Addition and Subtraction",
        },
        {
          type: "text",
          content:
            "# Order of operations example\nresult = 2 + 3 * 4      # result = 14 (not 20)\nresult = (2 + 3) * 4    # result = 20\nresult = 2 ** 3 + 1     # result = 9",
        },
        {
          type: "heading",
          text: "Augmented Assignment Operators",
        },
        {
          type: "paragraph",
          text: "Python also has shorthand operators that combine arithmetic with assignment:",
        },
        {
          type: "table",
          title: "Augmented Assignment Operators",
          columns: ["Operator", "Example", "Equivalent To"],
          rows: [
            ["+=", "x += 5", "x = x + 5"],
            ["-=", "x -= 3", "x = x - 3"],
            ["*=", "x *= 2", "x = x * 2"],
            ["/=", "x /= 4", "x = x / 4"],
            ["**=", "x **= 2", "x = x ** 2"],
          ],
        },
        {
          type: "callout",
          text: "The difference between / and //: regular division (/) always returns a float, while floor division (//) returns the whole number part only, discarding the remainder.",
          tone: "info",
        },
      ],
    },

    "Activity 1: Addition Bot": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build an Addition Bot — a Python program that asks the user for two numbers and displays their sum, along with a friendly message from Tobi!",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/addition-bot-banner.webp",
          alt: "Tobi the bear wearing a robot helmet standing next to large plus and equals signs with the label Addition Bot",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Python as the coding environment.",
            "Make sure the Tobi sprite is on the Stage.",
          ],
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            '# Addition Bot\n\ntobi.say("Hi! I am the Addition Bot!", 2)\ntobi.say("Give me two numbers and I will add them for you!", 2)\n\nnum1 = float(input("Enter the first number: "))\nnum2 = float(input("Enter the second number: "))\n\nresult = num1 + num2\n\ntobi.say("The sum of " + str(num1) + " and " + str(num2) + " is " + str(result), 3)',
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click Run to start the program.",
            "Enter the first number in the input box and press Enter.",
            "Enter the second number and press Enter.",
            "Watch Tobi announce the result!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/addition-bot-result.webp",
          alt: "PictoBlox stage showing Tobi saying the sum of two numbers entered by the user",
        },
        {
          type: "heading",
          text: "Challenge",
        },
        {
          type: "paragraph",
          text: "Extend the Addition Bot to also display the difference, product, and quotient of the two numbers — making it a full arithmetic bot!",
        },
        {
          type: "callout",
          text: "Save your file with the name Addition Bot before moving on!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Area Calculator": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build an Area Calculator that can compute the area of three different shapes — a square, a rectangle, and a circle — based on the user's choice.",
        },
        {
          type: "imageGrid",
          title: "Shapes and Their Area Formulas",
          items: [
            {
              src: "/courses/introduction-to-python/shape-square.webp",
              alt: "A blue square with a label showing Area = side x side",
              label: "Square: side²",
            },
            {
              src: "/courses/introduction-to-python/shape-rectangle.webp",
              alt: "A green rectangle with a label showing Area = length x width",
              label: "Rectangle: l × w",
            },
            {
              src: "/courses/introduction-to-python/shape-circle.webp",
              alt: "An orange circle with a label showing Area = pi x radius squared",
              label: "Circle: π × r²",
            },
          ],
        },
        {
          type: "table",
          title: "Area Formulas",
          columns: ["Shape", "Formula", "Variables"],
          rows: [
            ["Square", "Area = side × side", "side"],
            ["Rectangle", "Area = length × width", "length, width"],
            ["Circle", "Area = π × radius²", "radius (use math.pi for π)"],
          ],
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            '# Area Calculator\nimport math\n\nprint("Area Calculator")\nprint("1. Square")\nprint("2. Rectangle")\nprint("3. Circle")\n\nchoice = int(input("Choose a shape (1/2/3): "))\n\nif choice == 1:\n    side = float(input("Enter the side length: "))\n    area = side ** 2\n    print("Area of the square: " + str(area))\n\nelif choice == 2:\n    length = float(input("Enter the length: "))\n    width = float(input("Enter the width: "))\n    area = length * width\n    print("Area of the rectangle: " + str(area))\n\nelif choice == 3:\n    radius = float(input("Enter the radius: "))\n    area = math.pi * radius ** 2\n    print("Area of the circle: " + str(round(area, 2)))\n\nelse:\n    print("Invalid choice. Please enter 1, 2, or 3.")',
        },
        {
          type: "heading",
          text: "Understanding the Code",
        },
        {
          type: "table",
          title: "Code Breakdown",
          columns: ["Line", "What it Does"],
          rows: [
            ["import math", "Imports the math module to access math.pi"],
            [
              "choice = int(input(...))",
              "Gets the user's shape choice as an integer",
            ],
            ["side ** 2", "Calculates the square of the side length"],
            ["math.pi", "The value of π (approximately 3.14159)"],
            ["round(area, 2)", "Rounds the result to 2 decimal places"],
          ],
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with choice = 1, side = 5 → Area should be 25.0",
            "Run with choice = 2, length = 6, width = 4 → Area should be 24.0",
            "Run with choice = 3, radius = 7 → Area should be approximately 153.94",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/area-calculator-output.webp",
          alt: "Python console showing three test runs of the area calculator — one for square, one for rectangle, and one for circle with correct results printed",
        },
        {
          type: "callout",
          text: "Save your file with the name Area Calculator before moving on!",
          tone: "success",
        },
      ],
    },

    "Quiz 4: Variables and Arithmetic Operators": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 4: Variables and Arithmetic Operators",
          timeLimit: "10 minutes",
          totalQuestions: 7,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question: "In Python, variable names can start with a number.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question: "What does the // operator do in Python?",
              options: [
                "Regular division returning a float",
                "Floor division returning only the whole number",
                "Modulo returning the remainder",
                "Exponentiation",
              ],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "What is the result of 2 ** 3 in Python?",
              options: ["6", "8", "9", "5"],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "The input() function in Python always returns a string.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question:
                'Which of the following correctly converts the string "25" to an integer in Python?',
              options: [
                'string("25")',
                'int("25")',
                'integer("25")',
                'convert("25")',
              ],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question: "What is the result of 10 % 3 in Python?",
              options: ["3", "0", "1", "3.33"],
            },
            {
              id: 7,
              type: "match",
              points: 2,
              question: "Match each Python data type with its correct example.",
              terms: ["int", "float", "str", "bool"],
              definitions: [
                "age = 15",
                "height = 1.75",
                'name = "Tobi"',
                "is_student = True",
              ],
            },
          ],
        },
      ],
    },

    "Mathematical Functions in Python": {
      blocks: [
        {
          type: "heading",
          text: "The Math Module",
        },
        {
          type: "paragraph",
          text: "Python comes with a built-in math module that provides a wide range of mathematical functions. To use it, you first need to import it at the top of your script.",
        },
        {
          type: "text",
          content: "import math",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/math-module-banner.webp",
          alt: "A toolbox labeled math module with mathematical symbols like square root, pi, and factorial spilling out of it",
        },
        {
          type: "heading",
          text: "Common Math Functions",
        },
        {
          type: "table",
          title: "Python Math Module Functions",
          columns: ["Function", "Description", "Example", "Result"],
          rows: [
            ["math.sqrt(x)", "Square root of x", "math.sqrt(25)", "5.0"],
            [
              "math.pow(x, y)",
              "x raised to the power y",
              "math.pow(2, 3)",
              "8.0",
            ],
            [
              "math.floor(x)",
              "Rounds down to nearest integer",
              "math.floor(3.9)",
              "3",
            ],
            [
              "math.ceil(x)",
              "Rounds up to nearest integer",
              "math.ceil(3.1)",
              "4",
            ],
            ["abs(x)", "Absolute value of x", "abs(-7)", "7"],
            ["math.pi", "The value of π", "math.pi", "3.14159..."],
            ["math.log(x)", "Natural logarithm of x", "math.log(1)", "0.0"],
            ["math.factorial(x)", "Factorial of x", "math.factorial(5)", "120"],
          ],
        },
        {
          type: "imageGrid",
          title: "Visualizing Math Functions",
          items: [
            {
              src: "/courses/introduction-to-python/math-sqrt-visual.webp",
              alt: "A square with side 5 and area 25 labeled to illustrate square root — sqrt(25) = 5",
              label: "sqrt() — Square Root",
            },
            {
              src: "/courses/introduction-to-python/math-floor-ceil-visual.webp",
              alt: "A number line showing 3.7 between 3 and 4 with floor pointing to 3 and ceil pointing to 4",
              label: "floor() and ceil()",
            },
            {
              src: "/courses/introduction-to-python/math-pi-visual.webp",
              alt: "A circle with radius labeled r and the pi symbol showing the circumference formula",
              label: "math.pi — π",
            },
            {
              src: "/courses/introduction-to-python/math-factorial-visual.webp",
              alt: "The calculation 5 factorial = 5 x 4 x 3 x 2 x 1 = 120 written out step by step",
              label: "factorial()",
            },
          ],
        },
        {
          type: "heading",
          text: "Using Math Functions",
        },
        {
          type: "text",
          content:
            "import math\n\n# Square root\nprint(math.sqrt(144))    # 12.0\n\n# Power\nprint(math.pow(3, 4))    # 81.0\n\n# Rounding\nprint(math.floor(7.8))   # 7\nprint(math.ceil(7.2))    # 8\n\n# Circle area\nradius = 5\narea = math.pi * math.pow(radius, 2)\nprint(round(area, 2))    # 78.54",
        },
        {
          type: "callout",
          text: "Remember to import math before using any math module functions. You can also import specific functions using: from math import sqrt, pi",
          tone: "info",
        },
      ],
    },

    "Built-In Functions": {
      blocks: [
        {
          type: "heading",
          text: "What are Built-in Functions?",
        },
        {
          type: "paragraph",
          text: "Python comes with a set of built-in functions that are always available — no import needed. These functions handle common tasks like getting input, printing output, converting data types, and working with collections.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/builtin-functions-banner.webp",
          alt: "A dashboard panel with labeled buttons for print, input, len, type, range, max, min, and round representing Python's built-in functions",
        },
        {
          type: "heading",
          text: "Commonly Used Built-in Functions",
        },
        {
          type: "table",
          title: "Python Built-in Functions",
          columns: ["Function", "Description", "Example"],
          rows: [
            ["print()", "Displays output to the console", 'print("Hello")'],
            [
              "input()",
              "Gets text input from the user",
              'name = input("Your name: ")',
            ],
            ["int()", "Converts a value to an integer", 'int("25")'],
            ["float()", "Converts a value to a float", 'float("3.14")'],
            ["str()", "Converts a value to a string", "str(100)"],
            ["len()", "Returns the length of a string or list", 'len("Hello")'],
            ["type()", "Returns the data type of a value", "type(42)"],
            [
              "round()",
              "Rounds a number to given decimal places",
              "round(3.14159, 2)",
            ],
            ["abs()", "Returns the absolute value", "abs(-10)"],
            ["max()", "Returns the largest value", "max(3, 7, 2)"],
            ["min()", "Returns the smallest value", "min(3, 7, 2)"],
            ["range()", "Generates a sequence of numbers", "range(1, 10)"],
          ],
        },
        {
          type: "heading",
          text: "Examples",
        },
        {
          type: "text",
          content:
            '# len() - string length\nname = "PictoBlox"\nprint(len(name))         # 9\n\n# max() and min()\nprint(max(10, 5, 8))     # 10\nprint(min(10, 5, 8))     # 5\n\n# round()\nprint(round(3.14159, 2)) # 3.14\n\n# abs()\nprint(abs(-42))          # 42',
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/builtin-functions-output.webp",
          alt: "Python console output showing the results of len, max, min, round, and abs built-in function calls",
        },
        {
          type: "callout",
          text: "Built-in functions are the backbone of Python programming. Mastering them will make your code shorter, cleaner, and more efficient!",
          tone: "info",
        },
      ],
    },

    "User Defined Functions": {
      blocks: [
        {
          type: "heading",
          text: "What is a User-Defined Function?",
        },
        {
          type: "paragraph",
          text: "As your programs grow larger, you will find yourself writing the same code over and over. User-defined functions let you group a block of code under a name, then call it whenever you need it — avoiding repetition and making your code organized and reusable.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/function-concept.webp",
          alt: "Illustration of a machine with an input slot on the left, a process box in the middle labeled function, and an output slot on the right — showing how functions take input and return output",
        },
        {
          type: "callout",
          text: "A user-defined function is a reusable block of code that you define yourself using the def keyword. You call the function by its name whenever you need it to run.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Defining a Function",
        },
        {
          type: "text",
          content:
            '# Basic function with no parameters\ndef greet():\n    print("Hello! Welcome to Python.")\n\n# Call the function\ngreet()',
        },
        {
          type: "heading",
          text: "Functions with Parameters",
        },
        {
          type: "paragraph",
          text: "Functions can accept inputs called parameters. This makes them flexible and reusable with different values.",
        },
        {
          type: "text",
          content:
            '# Function with parameters\ndef greet(name):\n    print("Hello, " + name + "!")\n\n# Call with different arguments\ngreet("Tobi")\ngreet("Sara")',
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/function-parameters-diagram.webp",
          alt: "Diagram showing the greet function with name as the parameter going in and Hello Tobi and Hello Sara as outputs when called with different arguments",
        },
        {
          type: "heading",
          text: "Functions with Return Values",
        },
        {
          type: "paragraph",
          text: "Functions can also compute a value and send it back to the caller using the return keyword.",
        },
        {
          type: "text",
          content:
            "# Function that returns a value\ndef add(a, b):\n    result = a + b\n    return result\n\n# Use the returned value\nsum = add(5, 3)\nprint(sum)  # 8",
        },
        {
          type: "table",
          title: "Parts of a Function",
          columns: ["Part", "Description", "Example"],
          rows: [
            [
              "def keyword",
              "Declares the start of a function",
              "def my_function():",
            ],
            [
              "Function name",
              "The name used to call the function",
              "def calculate_area():",
            ],
            ["Parameters", "Inputs the function accepts", "def greet(name):"],
            [
              "Function body",
              "The indented code that runs",
              '    print("Hello")',
            ],
            [
              "return statement",
              "Sends a value back to the caller",
              "return result",
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/function-anatomy.webp",
          alt: "An annotated Python function definition with colored labels pointing to the def keyword, function name, parameters, body, and return statement",
        },
        {
          type: "callout",
          text: "Always define a function before calling it in your script. Python reads code from top to bottom — if you call a function before it is defined, you will get an error!",
          tone: "warning",
        },
      ],
    },

    "Activity 1: Properties of a Cube": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will use user-defined functions to calculate the properties of a cube — its volume, surface area, and the length of its face diagonal. This is a great example of how functions make code clean and reusable.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/cube-3d.webp",
          alt: "A 3D illustration of a cube with labeled sides showing the edge length, and arrows indicating volume, surface area, and face diagonal",
        },
        {
          type: "table",
          title: "Cube Property Formulas",
          columns: ["Property", "Formula"],
          rows: [
            ["Volume", "V = side³"],
            ["Surface Area", "SA = 6 × side²"],
            ["Face Diagonal", "d = side × √2"],
          ],
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            'import math\n\n# Function to calculate volume\ndef cube_volume(side):\n    return side ** 3\n\n# Function to calculate surface area\ndef cube_surface_area(side):\n    return 6 * side ** 2\n\n# Function to calculate face diagonal\ndef cube_face_diagonal(side):\n    return side * math.sqrt(2)\n\n# Main program\nside = float(input("Enter the side length of the cube: "))\n\nvolume = cube_volume(side)\nsurface_area = cube_surface_area(side)\ndiagonal = cube_face_diagonal(side)\n\nprint("Volume: " + str(volume))\nprint("Surface Area: " + str(surface_area))\nprint("Face Diagonal: " + str(round(diagonal, 2)))',
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with side = 4 → Volume: 64.0, Surface Area: 96.0, Face Diagonal: 5.66",
            "Run with side = 3 → Volume: 27.0, Surface Area: 54.0, Face Diagonal: 4.24",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/cube-properties-output.webp",
          alt: "Python console showing the output of the cube properties calculator with volume, surface area, and face diagonal printed for two test runs",
        },
        {
          type: "callout",
          text: "Notice how clean the main program looks! Each formula is neatly wrapped in its own function. If you need to use any of these formulas again elsewhere, you can just call the function.",
          tone: "info",
        },
        {
          type: "callout",
          text: "Save your file with the name Cube Properties before moving on!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Loan Interest Calculator": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build a Loan Interest Calculator using user-defined functions. The program will calculate both Simple Interest and Compound Interest based on user input.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/loan-calculator-banner.webp",
          alt: "Illustration of a bank building with coins, a calculator, and a percentage sign representing a loan interest calculator",
        },
        {
          type: "table",
          title: "Interest Formulas",
          columns: ["Type", "Formula", "Variables"],
          rows: [
            [
              "Simple Interest",
              "SI = (Principal × Rate × Time) / 100",
              "P = Principal, R = Rate %, T = Time in years",
            ],
            [
              "Compound Interest",
              "CI = P × (1 + R/100)^T - P",
              "P = Principal, R = Rate %, T = Time in years",
            ],
            ["Total Amount (SI)", "Amount = Principal + SI", "—"],
            ["Total Amount (CI)", "Amount = P × (1 + R/100)^T", "—"],
          ],
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            '# Loan Interest Calculator\n\ndef simple_interest(principal, rate, time):\n    si = (principal * rate * time) / 100\n    return si\n\ndef compound_interest(principal, rate, time):\n    amount = principal * ((1 + rate / 100) ** time)\n    ci = amount - principal\n    return ci\n\n# Get inputs\nprincipal = float(input("Enter the principal amount: "))\nrate = float(input("Enter the interest rate (%): "))\ntime = float(input("Enter the time period (years): "))\n\n# Calculate\nsi = simple_interest(principal, rate, time)\nci = compound_interest(principal, rate, time)\n\n# Display results\nprint("--- Results ---")\nprint("Simple Interest: " + str(round(si, 2)))\nprint("Total Amount (SI): " + str(round(principal + si, 2)))\nprint("Compound Interest: " + str(round(ci, 2)))\nprint("Total Amount (CI): " + str(round(principal + ci, 2)))',
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with Principal = 10000, Rate = 5, Time = 3",
            "Simple Interest should be 1500.0, Total: 11500.0",
            "Compound Interest should be approximately 1576.25, Total: 11576.25",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/loan-calculator-output.webp",
          alt: "Python console showing the results of the loan interest calculator with simple interest and compound interest results displayed side by side",
        },
        {
          type: "callout",
          text: "Save your file with the name Loan Interest Calculator before moving on!",
          tone: "success",
        },
      ],
    },

    "Quiz 5: Functions in Python": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 5: Functions in Python",
          timeLimit: "10 minutes",
          totalQuestions: 7,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "Built-in Python functions like print() and input() require an import statement to use.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question: "Which keyword is used to define a function in Python?",
              options: ["function", "define", "def", "func"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question: "What does math.sqrt(64) return?",
              options: ["6.0", "8.0", "32.0", "4.0"],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question: "A function must always have a return statement.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question: "What is the correct formula for Simple Interest?",
              options: [
                "SI = P + R + T",
                "SI = (P × R × T) / 100",
                "SI = P × (1 + R/100)^T",
                "SI = P × R / T",
              ],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question:
                "Which built-in function returns the largest value among given arguments?",
              options: ["largest()", "top()", "max()", "high()"],
            },
            {
              id: 7,
              type: "reorder",
              points: 2,
              question:
                "Arrange the following parts of a function definition in the correct order:",
              options: [
                "return result",
                "def calculate(a, b):",
                "result = a + b",
                "Call the function: calculate(5, 3)",
              ],
            },
          ],
        },
      ],
    },

    "Control Flow Structure": {
      blocks: [
        {
          type: "heading",
          text: "What is Control Flow?",
        },
        {
          type: "paragraph",
          text: "By default, Python executes code line by line from top to bottom. Control flow structures allow you to change this order — making your program skip certain lines, repeat others, or choose between different paths based on conditions.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/control-flow-concept.webp",
          alt: "A road with a fork showing two paths — one labeled True leading to one block of code and one labeled False leading to another block — representing how control flow works",
        },
        {
          type: "table",
          title: "Control Flow Structures in Python",
          columns: ["Structure", "Keyword(s)", "Purpose"],
          rows: [
            [
              "Conditional",
              "if, elif, else",
              "Execute code only when a condition is met",
            ],
            ["Loop (count)", "for", "Repeat code a fixed number of times"],
            [
              "Loop (condition)",
              "while",
              "Repeat code while a condition is true",
            ],
            ["Break", "break", "Exit a loop early"],
            [
              "Continue",
              "continue",
              "Skip the current iteration and move to the next",
            ],
          ],
        },
        {
          type: "heading",
          text: "The if Statement",
        },
        {
          type: "text",
          content:
            '# Basic if statement\nscore = 75\n\nif score >= 50:\n    print("You passed!")',
        },
        {
          type: "heading",
          text: "The if-elif-else Statement",
        },
        {
          type: "text",
          content:
            'temperature = 35\n\nif temperature > 40:\n    print("It is extremely hot!")\nelif temperature > 30:\n    print("It is hot.")\nelif temperature > 20:\n    print("It is warm.")\nelse:\n    print("It is cool.")',
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/if-elif-else-flowchart.webp",
          alt: "Flowchart showing the if-elif-else decision structure with temperature checks — four diamonds for each condition with arrows leading to the correct print statement",
        },
        {
          type: "callout",
          text: "Python uses indentation (4 spaces) to define code blocks inside control flow structures. Every line inside an if, elif, or else block must be indented consistently.",
          tone: "warning",
        },
        {
          type: "heading",
          text: "Comparison Operators",
        },
        {
          type: "table",
          title: "Python Comparison Operators",
          columns: ["Operator", "Meaning", "Example", "Result"],
          rows: [
            ["==", "Equal to", "5 == 5", "True"],
            ["!=", "Not equal to", "5 != 3", "True"],
            [">", "Greater than", "7 > 4", "True"],
            ["<", "Less than", "3 < 6", "True"],
            [">=", "Greater than or equal to", "5 >= 5", "True"],
            ["<=", "Less than or equal to", "4 <= 7", "True"],
          ],
        },
      ],
    },

    "Activity 1: Grade Calculator": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build a Grade Calculator in Python. The program will ask for a student's score and use conditional statements to determine and display their letter grade.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/grade-calculator-banner.webp",
          alt: "Illustration of a report card with letter grades A, B, C, D, F written in colorful letters next to score ranges",
        },
        {
          type: "table",
          title: "Grading Criteria",
          columns: ["Score Range", "Grade"],
          rows: [
            ["90 and above", "A"],
            ["80 – 89", "B"],
            ["70 – 79", "C"],
            ["60 – 69", "D"],
            ["Below 60", "F"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/grade-flowchart.webp",
          alt: "Flowchart showing the grade calculation logic with nested if-elif-else decisions checking score ranges from 90 down to 60 and assigning letter grades A through F",
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            '# Grade Calculator\n\ndef get_grade(score):\n    if score >= 90:\n        return "A"\n    elif score >= 80:\n        return "B"\n    elif score >= 70:\n        return "C"\n    elif score >= 60:\n        return "D"\n    else:\n        return "F"\n\n# Main program\nname = input("Enter student name: ")\nscore = float(input("Enter score: "))\n\nif score < 0 or score > 100:\n    print("Invalid score. Please enter a value between 0 and 100.")\nelse:\n    grade = get_grade(score)\n    print(name + " scored " + str(score) + " and received Grade: " + grade)',
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with name = Ali, score = 92 → Grade: A",
            "Run with name = Sara, score = 76 → Grade: C",
            "Run with name = Zara, score = 55 → Grade: F",
            "Run with score = 105 → Should display invalid score message",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/grade-calculator-output.webp",
          alt: "Python console showing four test runs of the grade calculator displaying the correct grade for each student name and score input",
        },
        {
          type: "callout",
          text: "Save your file with the name Grade Calculator before moving on!",
          tone: "success",
        },
      ],
    },

    "Logical Operators": {
      blocks: [
        {
          type: "heading",
          text: "What are Logical Operators?",
        },
        {
          type: "paragraph",
          text: "Logical operators allow you to combine multiple conditions into a single expression. They are essential for writing complex conditional statements in Python.",
        },
        {
          type: "imageGrid",
          title: "The Three Logical Operators",
          items: [
            {
              src: "/courses/introduction-to-python/logical-and.webp",
              alt: "Two green checkmarks side by side with the word AND between them — both must be true",
              label: "AND — Both must be True",
            },
            {
              src: "/courses/introduction-to-python/logical-or.webp",
              alt: "One green checkmark and one red cross with the word OR between them — at least one must be true",
              label: "OR — At least one True",
            },
            {
              src: "/courses/introduction-to-python/logical-not.webp",
              alt: "A True label with a flip arrow pointing to False representing the NOT operator that inverts a boolean value",
              label: "NOT — Flips the value",
            },
          ],
        },
        {
          type: "table",
          title: "Python Logical Operators",
          columns: ["Operator", "Description", "Example", "Result"],
          rows: [
            [
              "and",
              "True only if BOTH conditions are true",
              "5 > 3 and 8 > 6",
              "True",
            ],
            [
              "or",
              "True if AT LEAST ONE condition is true",
              "5 > 3 or 2 > 8",
              "True",
            ],
            ["not", "Flips the Boolean value", "not (5 > 3)", "False"],
          ],
        },
        {
          type: "heading",
          text: "Truth Tables",
        },
        {
          type: "table",
          title: "AND Truth Table",
          columns: ["A", "B", "A and B"],
          rows: [
            ["True", "True", "True"],
            ["True", "False", "False"],
            ["False", "True", "False"],
            ["False", "False", "False"],
          ],
        },
        {
          type: "table",
          title: "OR Truth Table",
          columns: ["A", "B", "A or B"],
          rows: [
            ["True", "True", "True"],
            ["True", "False", "True"],
            ["False", "True", "True"],
            ["False", "False", "False"],
          ],
        },
        {
          type: "heading",
          text: "Using Logical Operators in Python",
        },
        {
          type: "text",
          content:
            'age = 20\nhas_id = True\n\n# AND — both must be true\nif age >= 18 and has_id:\n    print("Access granted.")\n\n# OR — at least one must be true\nif age >= 18 or has_id:\n    print("Partial access.")\n\n# NOT — flip the condition\nif not has_id:\n    print("Please show your ID.")',
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/logical-operators-real-world.webp",
          alt: "Three illustrated scenarios — a door with two locks for AND, a door with one lock for OR, and a no-entry sign being reversed for NOT — showing real-world analogies for logical operators",
        },
        {
          type: "callout",
          text: "Logical operators are evaluated after comparison operators. Python evaluates not first, then and, then or — just like PEMDAS for arithmetic!",
          tone: "info",
        },
      ],
    },

    "Activity 2: Is it a Triangle?": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will write a Python program that checks whether three given side lengths can form a valid triangle, and if so, what type of triangle it is.",
        },
        {
          type: "imageGrid",
          title: "Types of Triangles",
          items: [
            {
              src: "/courses/introduction-to-python/triangle-equilateral.webp",
              alt: "An equilateral triangle with all three sides labeled with the same length value showing all sides are equal",
              label: "Equilateral — all sides equal",
            },
            {
              src: "/courses/introduction-to-python/triangle-isosceles.webp",
              alt: "An isosceles triangle with two sides labeled with the same length and one different length",
              label: "Isosceles — two sides equal",
            },
            {
              src: "/courses/introduction-to-python/triangle-scalene.webp",
              alt: "A scalene triangle with all three sides labeled with different length values",
              label: "Scalene — all sides different",
            },
          ],
        },
        {
          type: "heading",
          text: "Triangle Rules",
        },
        {
          type: "table",
          title: "Triangle Validity and Types",
          columns: ["Rule / Type", "Condition"],
          rows: [
            [
              "Valid Triangle",
              "The sum of any two sides must be greater than the third side",
            ],
            ["Equilateral", "All three sides are equal (a == b == c)"],
            ["Isosceles", "Exactly two sides are equal"],
            ["Scalene", "All three sides are different"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/triangle-inequality-diagram.webp",
          alt: "Diagram showing the triangle inequality rule — two examples, one valid triangle where a+b is greater than c and one invalid where a+b is less than c with a red cross",
        },
        {
          type: "heading",
          text: "Writing the Script",
        },
        {
          type: "text",
          content:
            '# Triangle Checker\n\ndef is_valid_triangle(a, b, c):\n    return (a + b > c) and (b + c > a) and (a + c > b)\n\ndef triangle_type(a, b, c):\n    if a == b == c:\n        return "Equilateral"\n    elif a == b or b == c or a == c:\n        return "Isosceles"\n    else:\n        return "Scalene"\n\n# Main program\na = float(input("Enter side a: "))\nb = float(input("Enter side b: "))\nc = float(input("Enter side c: "))\n\nif is_valid_triangle(a, b, c):\n    t_type = triangle_type(a, b, c)\n    print("Valid triangle! Type: " + t_type)\nelse:\n    print("These sides do NOT form a valid triangle.")',
        },
        {
          type: "heading",
          text: "Testing the Program",
        },
        {
          type: "list",
          items: [
            "Run with a=5, b=5, c=5 → Valid triangle! Type: Equilateral",
            "Run with a=5, b=5, c=8 → Valid triangle! Type: Isosceles",
            "Run with a=3, b=4, c=5 → Valid triangle! Type: Scalene",
            "Run with a=1, b=2, c=10 → These sides do NOT form a valid triangle.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/triangle-checker-output.webp",
          alt: "Python console showing four test runs of the triangle checker with correct valid or invalid results and triangle types printed",
        },
        {
          type: "callout",
          text: "Notice how the and operator is used in is_valid_triangle() to check all three triangle inequality conditions in one line!",
          tone: "info",
        },
        {
          type: "callout",
          text: "Save your file with the name Triangle Checker before moving on!",
          tone: "success",
        },
      ],
    },

    "Conclusion (Lesson 6)": {
      blocks: [
        {
          type: "callout",
          text: "Excellent work completing Lesson 6! You have now mastered one of the most important concepts in programming — conditional statements and logical operators.",
          tone: "success",
        },
        {
          type: "image",
          src: "/courses/introduction-to-python/lesson6-recap-banner.webp",
          alt: "Tobi the bear holding a trophy with Lesson 6 Complete written on a banner behind him and colorful confetti falling",
        },
        {
          type: "heading",
          text: "What We Covered",
        },
        {
          type: "list",
          items: [
            "Control flow structures and how Python executes code conditionally",
            "Comparison operators and how they evaluate to True or False",
            "The if, elif, and else statements for decision-making",
            "Logical operators: and, or, and not",
            "Combining conditions to write complex decision logic",
          ],
        },
        {
          type: "heading",
          text: "Key Takeaways",
        },
        {
          type: "table",
          title: "Lesson Summary",
          columns: ["Concept", "Key Point"],
          rows: [
            ["if statement", "Executes code only when condition is True"],
            [
              "elif",
              "Checks an additional condition if the previous one was False",
            ],
            ["else", "Runs when no previous condition was True"],
            ["and", "Both conditions must be True"],
            ["or", "At least one condition must be True"],
            ["not", "Flips a Boolean value"],
          ],
        },
        {
          type: "paragraph",
          text: "With conditionals and logical operators in your toolkit, you can now write Python programs that make real decisions. Keep practicing — the more you code, the more natural these concepts will become!",
        },
      ],
    },
  },
  "for-kids": {
    "Traffic Signal": {
      blocks: [
        {
          type: "text",
          content:
            "Have you ever wondered how traffic signals function? The traffic signals have 4 states:",
        },
        {
          type: "list",
          title: "How does Traffic Signal Work?",
          items: [
            "No Lights",
            "Red Light – STOP",
            "Yellow Light – LOOK",
            "Green Light – GO",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/traffic-signal.jpg",
          alt: "A traffic signal showing red yellow and green lights",
        },
        {
          type: "text",
          content:
            "The lights cycle through green, yellow, and red at regular intervals to control road intersections' traffic flow.",
        },
        {
          type: "image",
          src: "/courses/for-kids/traffic-signal.gif",
          alt: "Traffic signal switching lights",
        },
        {
          type: "text",
          content:
            "The traffic signals work in sync to prevent accidents and help to avoid congestion on the roads.",
        },
        {
          type: "image",
          src: "/courses/for-kids/traffic-signal-group.gif",
          alt: "Traffic signal group at an intersection",
        },
        {
          type: "heading",
          text: "Behind the Scenes",
        },
        {
          type: "text",
          content:
            "How lines of code running in the background drive the traffic lights. The code changes the traffic signals to show different colors at regular intervals.",
        },
        {
          type: "image",
          src: "/courses/for-kids/signal-code.png",
          alt: "Block coding script in PictoBlox showing how traffic signal colors are changed at regular intervals",
        },
        {
          type: "text",
          content:
            "Sometimes it is even smarter, where the code detects congestion based on sensors and maximizes efficiency by only functioning when traffic is present.",
        },
        {
          type: "text",
          content:
            "Most of us knowingly or unknowingly engage with programming, be it inside our homes or outside. Coding, in the modern world, can be seen on the streets, at the schools, at the local grocery stores, etc. Some of the practical examples of coding in the real world are:",
        },
        {
          type: "list",
          title: "Application of Coding",
          items: [
            "Interaction with bar code scanners at shopping store",
            "Automatic control of traffic using traffic lights",
            "Booking movie, bus, train, flight tickets online",
            "Printers",
            "Computer software we use like web browser, Word, etc.",
            "Video games and animations for entertainment",
          ],
        },
        { type: "heading", text: "What is a Program?" },
        {
          type: "text",
          content:
            "A program is a set of instructions that a computer follows to complete a task. The computer receives the information, handles it, utilizes it, and then gives an output based on it by following a program.",
        },
        {
          type: "image",
          src: "/courses/for-kids/computer-asking.png",
          alt: "Cartoon illustration of a computer monitor with a confused face and question marks asking how to do it",
        },
        {
          type: "image",
          src: "/courses/for-kids/boy-answering.png",
          alt: "Cartoon illustration of a boy saying I will tell you now, representing a programmer giving instructions",
        },
        {
          type: "text",
          content:
            "According to Linda Liukas, a Finnish computer programmer, children's writer, and programming instructor, programming consists of three parts:",
        },
        {
          type: "list",
          title: "Steps in Coding",
          items: [
            "Planning the program",
            "Writing the program in a programming language into a code",
            "Testing and debugging the program",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/flow-chart.png",
          alt: "Flowchart diagram showing the three steps of coding: Planning, Writing, and Testing and Debugging",
        },
        {
          type: "text",
          content:
            "The second part is what everybody generally considers programming. Only this part requires coding skills; the first and third parts require additional skills like problem-solving, and decomposition (the ability to break down bigger problems into smaller, manageable tasks).",
        },
      ],
    },
    "Programming Analogy": {
      blocks: [
        { type: "heading", text: "Getting Dressed" },
        {
          type: "text",
          content:
            "On days that you have to go to school, your mother and father are behind you in the morning, asking you to wake up, while you keep saying '5 more minutes!' until you realize it is late and you don't have time to take bath. So, you decide to just wash your face, brush your teeth, and get dressed.",
        },
        {
          type: "text",
          content:
            "To get dressed, you follow a particular sequence of steps, like the one given below:",
        },
        {
          type: "list",
          items: ["Take off the pajamas"],
        },
        {
          type: "image",
          src: "/courses/for-kids/pajama.png",
          alt: "Cartoon boy wearing casual red shirt and brown pants before getting dressed for school",
        },
        {
          type: "list",
          items: [
            "Take off the undergarments from the previous day",
            "Wear a fresh pair of undergarments",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/pajama2.png",
          alt: "Cartoon boy wearing a fresh pair of undergarments after removing previous day's clothes",
        },
        {
          type: "list",
          items: [
            "Put on the school uniform",
            "Wear accessories such as the belt, tie, and ID card",
            "Wear socks",
            "Wear shoes",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/pajama3.png",
          alt: "Cartoon boy fully dressed in school uniform with white shirt and blue pants",
        },
        {
          type: "text",
          content:
            "Here, as you can see, you followed a set of instructions to complete a task, which is getting dressed (though hastily, and without taking a bath!).",
        },
        {
          type: "text",
          content:
            "Now, you know that you need to follow the order; you won't wear a fresh pair of undergarments before taking off the previous ones, nor would you put on the uniform first and then wear undergarments (unless you're Clark Kent!).",
        },
        {
          type: "text",
          content:
            "Similarly, you must write the program in a particular order so that the computer does the task given to it correctly, and we get the result that we expect.",
        },
      ],
    },
    "PictoBlox App Introduction": {
      blocks: [
        {
          type: "heading",
          text: "PictoBlox – Your Perfect Programming Partner",
        },
        {
          type: "video",
          videoId: "https://youtu.be/BmqFn2_yN_4",
        },
        {
          type: "text",
          content:
            "PictoBlox is a graphical programming software based on Scratch blocks and is the ideal companion for setting the first step into the world of programming.",
        },
        {
          type: "text",
          content:
            "Its user-friendly interface and drag-and-drop functionality eliminate the need to memorize syntax and rules that make traditional programming languages difficult. As a result, you can focus more on cracking the problem at hand and improving your critical thinking, logical reasoning, and problem-solving skills rather than getting demotivated by the inevitable complications of syntax-based coding. It helps budding programmers learn how to write a program in a fun, educational, and easy way using blocks.",
        },
        {
          type: "text",
          content:
            "To begin your programming journey with PictoBlox, you need to first, well, install it. Follow our instructions given below carefully and you'll be well on your way!",
        },
        {
          type: "list",
          title: "Installing the Software – Windows Installer (.exe)",
          items: [
            "STEP 1: Download the PictoBlox Installer (.exe) for Windows 7 and above (Release Notes). Use Windows Installer 64-bit or Windows Installer 32-bit.",
            "STEP 2: Run the .exe file.",
            "STEP 3: Some of the devices give a warning popup. You don't have to worry, this software is harmless. Click on More info and then click on Run anyway.",
            "STEP 4: Rest of the installation is straightforward; you can follow the popup and check on the option appropriate for your need.",
            "Your software is now installed!",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/installing-pictoblox.gif",
          alt: "PictoBlox Setup window showing Choose Installation Options screen asking who the application should be installed for",
        },
        {
          type: "list",
          title: "Installing the Software – macOS Installer",
          items: [
            "STEP 1: Download the PictoBlox installer (.dmg).",
            "STEP 2: Run the .dmg file.",
          ],
        },
        {
          type: "list",
          title: "Installing the Software – Mobile App Installer",
          items: [
            "STEP 1: Open Google Play Store on your Smartphone and search for PictoBlox or visit the link to head over to the Google Play Store. You can even scan the QR Code from your Smartphone to head to the PictoBlox App.",
            "STEP 2: Install the PictoBlox App.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/app-qr-code.png",
          alt: "QR code to download the PictoBlox mobile app from the Google Play Store",
        },
        {
          type: "text",
          content:
            "In case you are working in Linux, you can download the PictoBlox from here.",
        },
      ],
    },
    "PictoBlox Interface": {
      blocks: [
        { type: "video", videoId: "https://youtu.be/wB7ONAcT55I" },
        {
          type: "text",
          content:
            "Now that you have PictoBlox installed on your desktop, let's take you on a tour around it!",
        },
        {
          type: "image",
          src: "/courses/for-kids/overview.png",
          alt: "An overview of the pictoblox app explaining its working",
        },
        { type: "heading", text: "Stage" },
        {
          type: "text",
          content:
            "The stage is a background or a backdrop for your Scratch projects (the programs you'll create). It is a white background in the top right corner; you will see a bear standing there. His name is Tobi and he is what is called a sprite (we'll see in a moment what it is). The Stage is where the sprite moves, draws, and interacts with other sprites and/or hardware. It has its own set of scripts, images, and sounds.",
        },
        {
          type: "image",
          src: "/courses/for-kids/stage.jpg",
          alt: "PictoBlox Stage showing Tobi the bear sprite on a colorful outdoor background with Sprites and Backdrops panels below",
        },
        { type: "heading", text: "Sprite" },
        {
          type: "text",
          content:
            "A Sprite is an object or a character that performs different actions in the projects. It understands and obeys the instructions that you'll give them in your projects. It can move and can be moved to any place on the stage; you can try by clicking on them and moving them around.",
        },
        {
          type: "image",
          src: "/courses/for-kids/sprite.png",
          alt: "Various example sprites available in PictoBlox including a rocket, monster, and arrow character",
        },
        {
          type: "list",
          title: "Stage Palette",
          items: [
            "You can choose an image from the backdrop library.",
            "You can paint a new stage; you can import an image.",
            "You can click a picture using your computer's or laptop's camera.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/stage-palette.png",
          alt: "PictoBlox Stage Palette panel showing backdrop options including choose from library, paint, import, and camera",
        },
        { type: "heading", text: "Blocks" },
        {
          type: "text",
          content:
            "Block is the jigsaw puzzle pieces that fit into each other. They are predefined commands used to create programs by simply dragging and dropping them one below one another in the scripting area.",
        },
        {
          type: "image",
          src: "/courses/for-kids/blocks.png",
          alt: "Examples of PictoBlox coding blocks in blue and orange colors representing different commands",
        },
        { type: "heading", text: "Block Palette" },
        {
          type: "text",
          content:
            "The block palette is under the Code tab. It consists of different palettes such as Motion, Sound, and Control. Each palette has different blocks that perform functions specified by the palette name. E.g., the blocks in the Motion palette will control the motion of the sprite and the blocks in the Control palette will control the working of the script depending on specific conditions.",
        },
        { type: "heading", text: "Script" },
        {
          type: "text",
          content:
            "A script is a program or a code in PictoBlox/Scratch lingo. It is a set of blocks that are arranged below one another in a specific order to perform a task or a series of tasks. The scripting area is where you will create your scripts.",
        },
        {
          type: "image",
          src: "/courses/for-kids/script.png",
          alt: "Example of a PictoBlox script showing a sequence of coding blocks arranged in order in the scripting area",
        },
      ],
    },
    "Activity: Make Tobi Walk": {
      blocks: [
        { type: "heading", text: "Let's Code" },
        {
          type: "list",
          title: "Follow the steps below:",
          items: [
            "Create a New file in PictoBlox.",
            "If you are working on Windows, macOS, or Linux:",
            "Open PictoBlox and create a new file",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/new-file.png",
          alt: "PictoBlox interface showing the File menu open to create a new file",
        },
        {
          type: "list",
          items: ["Select the coding environment as Block Coding."],
        },
        {
          type: "image",
          src: "/courses/for-kids/select-enviornment.png",
          alt: "PictoBlox Select your Coding Environment dialog showing Block Coding and Python Coding options",
        },
        {
          type: "list",
          items: [
            "Follow the step if you are working on Android or iPhone:",
            "Open PictoBlox App and select My Space Tab from the home screen",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/home-screen.jpg",
          alt: "PictoBlox App home screen showing My Space Tab to create a new file on mobile",
        },
        {
          type: "list",
          items: ["Click on + sign to create a new file."],
        },
        {
          type: "image",
          src: "/courses/for-kids/my-space.jpg",
          alt: "PictoBlox stage showing Tobi the bear sprite added to the project with the scripting area visible",
        },
        {
          type: "list",
          items: ["A new file should be created like this"],
        },
        {
          type: "image",
          src: "/courses/for-kids/blank-file.jpg",
          alt: "PictoBlox scripting area showing the when flag clicked hat block added from the Events palette",
        },
        {
          type: "list",
          items: [
            "Open the Events palette and drag and drop the when flag clicked block into the scripting area. The when flag clicked block is a special type of block called hat block. It is used to start a script. Using this particular hat block you can run the script by clicking on the green flag above the stage.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/block-code.gif",
          alt: "PictoBlox scripting area showing the forever block from the Control palette added below the when flag clicked block",
        },
        {
          type: "list",
          items: [
            "Next, open the Control palette and drag and drop the forever block below the when flag clicked block.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/forever-block.png",
          alt: "PictoBlox scripting area showing the move 10 steps block from the Motion palette added inside the forever block",
        },
        {
          type: "list",
          items: [
            "This block is used when you want a set of blocks to keep running until the script is stopped manually.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/block-code2.gif",
          alt: "PictoBlox scripting area showing the wait 0.1 seconds block from the Control palette added below the move steps block",
        },
        {
          type: "list",
          items: [
            "Then, open the Motion palette and drag and drop the move () steps block inside the forever block.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/steps-block.png",
          alt: "PictoBlox scripting area showing the if on edge bounce block from the Motion palette added inside the forever block",
        },
        {
          type: "list",
          items: [
            "This block is used to move the sprite by a specified number of steps. In our case, it is 10.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/move-steps.png",
          alt: "PictoBlox scripting area showing the set rotation style left-right block added below the when flag clicked block",
        },
        {
          type: "list",
          items: [
            "Next, open the Control palette and drag and drop the wait () seconds block below the move () steps block and change the delay value to 0.1 seconds. The wait block is used to pause/delay the script execution by the specified time.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/wait-block.png",
          alt: "PictoBlox completed script showing all blocks assembled: when flag clicked, set rotation style, forever loop with move steps, wait, and if on edge bounce",
        },
        {
          type: "list",
          items: [
            "Run the script by clicking the green flag. What just happened? Where did Tobi go?! As it seems, he went out of the frame. Let's fix this so that Tobi doesn't wander off again.",
            "Open the Motion palette and drag and drop the if on edge, bounce block inside the forever block.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/bounce-block.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: [
            "This block detects whether the sprite has touched the edge of the stage or not and changes the direction if it has.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/if-on-edge-bounce-block.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: [
            "Run the script by clicking the green flag. What is happening to Tobi now? Is he upside-down? To stop this, you must change the rotation style.",
            "Go to the Motion palette and drag and drop the set rotation style () block below the when flag clicked block and select left-right from the drop-down.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/set-rotation.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: [
            "The script is now complete! Run it by clicking the green flag.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/complete-code.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: [
            "Yay! You've just completed your first script! Pat yourself on the back.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/preview.gif",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        { type: "heading", text: "Saving The Program" },
        {
          type: "list",
          items: ["To save the program, click on File > Save As."],
        },
        {
          type: "image",
          src: "/courses/for-kids/save.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: [
            "A window will popup. Choose the location as Desktop or any other relevant folder. Name the file Tobi Walking.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/saving-location.png",
          alt: "PictoBlox stage showing Tobi the bear walking back and forth on a green outdoor background after running the completed script",
        },
        {
          type: "list",
          items: ["Click on Save."],
        },
      ],
    },
    "Quiz 1: Introduction to PictoBlox": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 1: Introduction to PictoBlox",
          timeLimit: "00:08:59",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "There is always only one way to write a program for a given problem.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "match",
              points: 5,
              question: "Match the following:",
              instruction: "Sort elements",
              terms: ["Script", "Stage", "Backdrop", "Sprite", "Blocks"],
              definitions: [
                "Puzzle piece shapes used to write scripts",
                "The area where the sprite performs actions based on the script",
                "An object that performs actions based on the script",
                "A stack of blocks interlocked with one another in a specific order to perform a task",
                "Possible backgrounds of the stage",
              ],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "Which block palette is used to control a sprite's movement?",
              options: ["Looks", "Motion", "Operators", "Event"],
            },
            {
              id: 4,
              type: "reorder",
              points: 2,
              question:
                "Rearrange the following three steps of programming in the order in which they should be carried out:",
              options: [
                "Testing and debugging the program",
                "Writing the program in a programming language into code",
                "Planning the program",
              ],
            },
            {
              id: 5,
              type: "true-false",
              points: 1,
              question:
                "Pin authentication for ATM card transactions is an example of programming.",
              options: ["False", "True"],
            },
            {
              id: 6,
              type: "true-false",
              points: 1,
              question:
                "A program is a set of instructions that a computer follows to complete a task.",
              options: ["True", "False"],
            },
          ],
        },
      ],
    },
    Backdrops: {
      blocks: [
        {
          type: "heading",
          text: "What Is a Backdrop? test test test",
        },
        {
          type: "paragraph",
          text: "As of now, the Stage looks quite plain and simple, doesn't it? What can we possibly do to make it more lively? Come in: backdrops!",
        },
        {
          type: "paragraph",
          text: "A backdrop is one of the many frames, or backgrounds, that a Stage can have. The Stage can change its look to any of its backdrops.",
        },
        {
          type: "image",
          src: "/courses/for-kids/backdrop-selection.png",
          alt: "PictoBlox Choose a Backdrop screen showing various backdrop options like Arctic, Baseball, Beach, Bedroom, Blue Sky, Boardwalk, and Canyon",
        },
        {
          type: "heading",
          text: "Choosing a Backdrop",
        },
        {
          type: "paragraph",
          text: "You can choose a backdrop from:",
        },
        {
          type: "list",
          items: [
            "the backdrop library",
            "uploading a file from the computer",
            "creating one using the paint editor",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/backdrop-selection2.png",
          alt: "Choose a Backdrop button and backdrop options menu in PictoBlox",
        },
        {
          type: "paragraph",
          text: "Follow the steps:",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select the coding environment as Block Coding.",
            "Click Choose the Backdrop and select any backdrop you want. We're choosing the Forest backdrop (to make Tobi feel at home).",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/backdrop-final-setup.png",
          alt: "Tobi the bear character standing in a forest backdrop inside PictoBlox",
        },
      ],
    },
    Costumes: {
      blocks: [
        {
          type: "heading",
          text: "What are Costumes?",
        },
        {
          type: "callout",
          text: 'A costume is one out of possibly many "frames" or alternate appearances of a sprite. Sprites can change their look to any of its costumes. Every sprite has at least one costume.',
          tone: "info",
        },
        {
          type: "paragraph",
          text: "One of the most common uses of costumes is to make an animation for a game. You can use a number of costumes to create one single animation.",
        },
        {
          type: "paragraph",
          text: "The costumes available for the sprite are shown in the Costume tab, next to the Code tab in the extreme left.",
        },
        {
          type: "image",
          src: "/courses/for-kids/costume-tab.png",
          alt: "PictoBlox Costumes tab showing Tobi sprite with multiple costume frames including Tobi, Tobi walking 1, Tobi walking 2, and Tobi mouth open in the paint editor",
        },
        {
          type: "heading",
          text: "How to Create Costumes?",
        },
        {
          type: "paragraph",
          text: "There are four ways of getting a costume for a sprite or stage.",
        },
        {
          type: "list",
          items: [
            "From the costume library",
            "Drawing one yourself using the inbuilt paint editor",
            "Getting an image or multiple images from your desktop",
            "Taking an image using a webcam",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/choose-costume.png",
          alt: "Choose a Costume button and costume options menu in PictoBlox",
        },
      ],
    },
    "Activity: Making an Animation in PictoBlox": {
      blocks: [
        {
          type: "video",
          videoId: "https://youtu.be/wB7ONAcT55I",
          title: "Getting Started with PictoBlox",
        },
        {
          type: "paragraph",
          text: "Animations are created, when a set of images changes quickly and repetitively creating a sense of motion.",
        },
        {
          type: "image",
          src: "/courses/for-kids/sprite-walking.gif",
          alt: "Tobi the bear sprite standing in a forest backdrop in PictoBlox",
        },
        {
          type: "paragraph",
          text: "In this activity, we will make Tobi walk.",
        },
        {
          type: "list",
          items: [
            "We will continue the script from the Backdrop topic.",
            "Create the Tobi Walking script made in lesson 1.",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/walking-block-code.png",
          alt: "Block coding script with set rotation style, forever loop, move steps, and if on edge bounce blocks",
        },
        {
          type: "text",
          content:
            "You can make more than one scripts run simultaneously in one program.",
        },
        {
          type: "image",
          src: "/courses/for-kids/multiple-scripts.png",
          alt: "PictoBlox stage showing multiple block coding scripts running simultaneously with Tobi walking in the forest",
        },
        {
          type: "paragraph",
          text: "To change a sprite's costume, PictoBlox has the switch costume to () block available in the Looks tab.",
        },
        {
          type: "image",
          src: "/courses/for-kids/switch-costume-block.png",
          alt: "Switch costume to Tobi block in PictoBlox",
        },
        {
          type: "paragraph",
          text: "To make a walking animation of Tobi switch between the following two costumes Tobi:",
        },
        {
          type: "list",
          items: ["Tobi Walking 1", "Tobi Walking 2"],
        },
        {
          type: "paragraph",
          text: "Make the script shown below. You will find the blocks used in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked - Event",
            "Forever - Control",
            "Switch costume to () - Looks",
            "Wait () seconds - Control",
          ],
        },
        {
          type: "image",
          src: "/courses/for-kids/change-costume-script.png",
          alt: "Block coding script showing forever loop with switch costume to Tobi Walking 1, wait 0.2 seconds, switch costume to Tobi Walking 2, wait 0.2 seconds",
        },
        {
          type: "paragraph",
          text: "Click the green flag to start the animation.",
        },
        {
          type: "image",
          src: "/courses/for-kids/sprite-walking.gif",
          alt: "Tobi the bear walking in the forest backdrop in PictoBlox after running the animation script",
        },
        {
          type: "list",
          items: [
            "If you think that Tobi is changing costumes slowly, then you can change the speed by changing the delay. Try changing it to 0.1, 0.2 & 0.3 seconds. Which of the above values do you find most appropriate?",
            "To make Tobi walk from one end of the Stage to the other, make the script you made in the previous lesson.",
          ],
        },
        {
          type: "text",
          content:
            "Congratulations on making your first animation! It was fun, wasn't it? Now, let's get on with the course. Save the file with the name Animating Tobi.",
        },
      ],
    },
    "Quiz 2: Backdrops, Costumes, and Animation": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 2: Backdrops, Costumes, and Animation",
          timeLimit: "10 minutes",
          totalQuestions: 6,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "A backdrop is one of the many frames, or backgrounds, that a Stage can have.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which tab in PictoBlox shows the costumes available for a sprite?",
              options: ["Code", "Sounds", "Costumes", "Backdrops"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "Which of the following is NOT a way to add a backdrop in PictoBlox?",
              options: [
                "From the backdrop library",
                "Uploading a file from the computer",
                "Creating one using the paint editor",
                "Downloading it from the internet automatically",
              ],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "Every sprite in PictoBlox must have at least one costume.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question:
                "Which block is used to change a sprite's costume in PictoBlox?",
              options: [
                "Change look to ()",
                "Switch costume to ()",
                "Set costume ()",
                "Next backdrop",
              ],
            },
            {
              id: 6,
              type: "reorder",
              points: 2,
              question:
                "Arrange the following steps in the correct order to create a walking animation in PictoBlox:",
              options: [
                "Click the green flag to start the animation",
                "Add the 'When flag clicked' block",
                "Add a 'Forever' loop",
                "Add 'Switch costume to Tobi Walking 1', wait, then 'Switch costume to Tobi Walking 2'",
              ],
            },
          ],
        },
      ],
    },
    "Shapes & Pen Extension": {
      blocks: [
        {
          type: "heading",
          text: "What is the Pen Extension?",
        },
        {
          type: "paragraph",
          text: "PictoBlox has a special set of blocks called the Pen Extension. These blocks allow a sprite to draw on the Stage as it moves — just like holding a pen to paper!",
        },
        {
          type: "callout",
          text: "The Pen Extension is not available by default. You need to add it by clicking the Extension button at the bottom left of the Code tab.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/pen-extension-blocks.webp",
          alt: "Pen extension blocks panel in PictoBlox showing blocks like pen down, pen up, set pen color, set pen size, and erase all",
          caption: "The Pen Extension blocks in PictoBlox",
        },
        {
          type: "heading",
          text: "Key Pen Blocks",
        },
        {
          type: "table",
          title: "Pen Extension Blocks",
          columns: ["Block", "Palette", "What it Does"],
          rows: [
            ["Pen Down", "Pen", "Starts drawing as the sprite moves"],
            ["Pen Up", "Pen", "Stops drawing"],
            ["Erase All", "Pen", "Clears all drawings from the Stage"],
            ["Set Pen Color to ()", "Pen", "Changes the color of the pen"],
            [
              "Set Pen Size to ()",
              "Pen",
              "Changes the thickness of the pen line",
            ],
            ["Stamp", "Pen", "Stamps the sprite's image onto the Stage"],
          ],
        },
        {
          type: "heading",
          text: "Drawing Shapes",
        },
        {
          type: "paragraph",
          text: "By combining Pen blocks with Motion blocks, you can draw shapes on the Stage. The key idea is that a sprite moves in straight lines and turns at angles to form the sides and corners of a shape.",
        },
        {
          type: "callout",
          text: "To draw a closed shape, the total turning angle of the sprite must add up to 360°.",
          tone: "info",
        },
        {
          type: "table",
          title: "Shapes and Their Properties",
          columns: ["Shape", "Number of Sides", "Turning Angle"],
          rows: [
            ["Triangle", "3", "120°"],
            ["Square", "4", "90°"],
            ["Pentagon", "5", "72°"],
            ["Hexagon", "6", "60°"],
            ["Circle (approx.)", "360", "1°"],
          ],
        },
        {
          type: "heading",
          text: "Activity: Drawing a Square",
        },
        {
          type: "paragraph",
          text: "Let's draw a square using the Pen Extension. A square has 4 equal sides and 4 corners, each turning 90°.",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Add the Pen Extension from the Extensions menu.",
            "Place the sprite at the center of the Stage using the 'Go to x: 0 y: 0' block.",
            "Add the 'Erase All' block to clear any previous drawings.",
            "Add the 'Pen Down' block to start drawing.",
            "Use a 'Repeat 4' loop containing 'Move 100 steps' and 'Turn 90 degrees' to draw the square.",
            "Add the 'Pen Up' block at the end to stop drawing.",
            "Click the green flag to run the script and see your square!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/draw-square-script.webp",
          alt: "Block coding script in PictoBlox showing when flag clicked, erase all, go to x 0 y 0, pen down, repeat 4 with move 100 steps and turn 90 degrees, then pen up",
          caption: "Script to draw a square using the Pen Extension",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/square-drawn-stage.webp",
          alt: "A white square drawn on the PictoBlox stage by the sprite using the pen extension",
          caption: "A square drawn on the Stage using the Pen Extension",
        },
        {
          type: "callout",
          text: "Try changing the number of sides and the turning angle to draw different shapes like a triangle or hexagon!",
          tone: "success",
        },
      ],
    },
    "Activity 1: Draw a Square": {
      blocks: [
        {
          type: "paragraph",
          text: "Now that you know about the Pen Extension and how shapes work, it's time to put that knowledge into action! In this activity, we will use PictoBlox to draw a square on the Stage.",
        },
        {
          type: "callout",
          text: "A square has 4 equal sides and 4 corners. At each corner, the sprite turns 90°. Since 4 × 90° = 360°, the sprite completes a full turn and the shape closes perfectly.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Add the Pen Extension by clicking the Extensions button at the bottom left of the Code tab.",
            "Hide the default sprite or move it out of the way so it doesn't obstruct the drawing.",
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Follow the steps below to build the script that draws a square. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Erase All — Pen",
            "Go to x: (0) y: (0) — Motion",
            "Pen Down — Pen",
            "Repeat (4) — Control",
            "Move (100) steps — Motion",
            "Turn (90) degrees — Motion",
            "Pen Up — Pen",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/draw-square-script.webp",
          alt: "Block coding script showing when flag clicked, erase all, go to x 0 y 0, pen down, repeat 4 loop containing move 100 steps and turn 90 degrees, then pen up",
          caption: "Complete script to draw a square in PictoBlox",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to run the script.",
            "Watch the sprite draw a square on the Stage!",
            "If you want to redraw, simply click the green flag again — the Erase All block will clear the previous drawing first.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/square-drawn-stage.webp",
          alt: "A square drawn on the PictoBlox stage using the pen extension",
          caption: "The square drawn on the Stage after running the script",
        },
        {
          type: "heading",
          text: "Customizing Your Square",
        },
        {
          type: "paragraph",
          text: "Try experimenting with the following to make your square more interesting:",
        },
        {
          type: "list",
          items: [
            "Change the pen color using the 'Set Pen Color to ()' block.",
            "Change the pen size using the 'Set Pen Size to ()' block to make the lines thicker or thinner.",
            "Change the step count (e.g. 150 steps) to make a bigger or smaller square.",
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Draw a Square before moving on to the next activity!",
          tone: "success",
        },
      ],
    },
    "Activity 2: Draw a Triangle": {
      blocks: [
        {
          type: "paragraph",
          text: "Great job drawing a square! Now let's take it a step further and draw a triangle. A triangle has 3 sides and 3 corners — and just like the square, we can draw it using the Pen Extension and a simple loop.",
        },
        {
          type: "callout",
          text: "A triangle has 3 equal sides and 3 corners. At each corner, the sprite turns 120°. Since 3 × 120° = 360°, the sprite completes a full turn and the shape closes perfectly.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Make sure the Pen Extension is added. If not, click the Extensions button at the bottom left of the Code tab to add it.",
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Follow the steps below to build the script that draws a triangle. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Erase All — Pen",
            "Go to x: (0) y: (0) — Motion",
            "Pen Down — Pen",
            "Repeat (3) — Control",
            "Move (100) steps — Motion",
            "Turn (120) degrees — Motion",
            "Pen Up — Pen",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/draw-triangle-script.webp",
          alt: "Block coding script showing when flag clicked, erase all, go to x 0 y 0, pen down, repeat 3 loop containing move 100 steps and turn 120 degrees, then pen up",
          caption: "Complete script to draw a triangle in PictoBlox",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to run the script.",
            "Watch the sprite draw a triangle on the Stage!",
            "Click the green flag again at any time to redraw — the Erase All block will clear the previous drawing first.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/triangle-drawn-stage.webp",
          alt: "A triangle drawn on the PictoBlox stage using the pen extension",
          caption: "The triangle drawn on the Stage after running the script",
        },
        {
          type: "heading",
          text: "Comparing Square vs Triangle",
        },
        {
          type: "table",
          title: "Square vs Triangle",
          columns: ["Property", "Square", "Triangle"],
          rows: [
            ["Number of Sides", "4", "3"],
            ["Turning Angle", "90°", "120°"],
            ["Repeat Count", "4", "3"],
            ["Total Turn", "360°", "360°"],
          ],
        },
        {
          type: "callout",
          text: "Notice that no matter the shape, the total turning angle always adds up to 360°. This is the secret to drawing any regular polygon!",
          tone: "info",
        },
        {
          type: "heading",
          text: "Customizing Your Triangle",
        },
        {
          type: "list",
          items: [
            "Change the pen color using the 'Set Pen Color to ()' block to make a colorful triangle.",
            "Change the pen size using the 'Set Pen Size to ()' block to make the lines thicker or thinner.",
            "Try changing the step count to make a bigger or smaller triangle.",
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Draw a Triangle before moving on!",
          tone: "success",
        },
      ],
    },
    "Quiz 3: Drawing Shapes": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 3: Drawing Shapes",
          timeLimit: "10 minutes",
          totalQuestions: 7,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "The Pen Extension is available by default in PictoBlox without needing to add it manually.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which block is used to start drawing on the Stage in PictoBlox?",
              options: ["Pen Up", "Stamp", "Pen Down", "Erase All"],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "How many times does the sprite turn when drawing a square, and at what angle?",
              options: [
                "3 times at 120°",
                "4 times at 90°",
                "6 times at 60°",
                "4 times at 120°",
              ],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "The total turning angle when drawing any closed regular polygon always adds up to 360°.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question:
                "What is the correct turning angle for each corner when drawing a triangle?",
              options: ["90°", "60°", "120°", "180°"],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question: "Which block clears all drawings from the Stage?",
              options: ["Pen Up", "Reset Stage", "Clear All", "Erase All"],
            },
            {
              id: 7,
              type: "reorder",
              points: 2,
              question:
                "Arrange the following blocks in the correct order to draw a triangle in PictoBlox:",
              options: [
                "Pen Up",
                "When flag clicked",
                "Erase All",
                "Pen Down",
                "Repeat 3: Move 100 steps, Turn 120 degrees",
              ],
            },
          ],
        },
      ],
    },
    "Variables in PictoBlox": {
      blocks: [
        {
          type: "heading",
          text: "What is a Variable?",
        },
        {
          type: "paragraph",
          text: "Imagine you are keeping score in a game. Every time a player scores a point, the score increases. You need somewhere to store that score — and that's exactly what a variable does!",
        },
        {
          type: "callout",
          text: "A variable is a container that stores a value. That value can change as the program runs — hence the name 'variable'.",
          tone: "info",
        },
        {
          type: "paragraph",
          text: "In PictoBlox, variables are used to store numbers, text, or other data that your program needs to remember and use while it is running.",
        },
        {
          type: "heading",
          text: "Creating a Variable",
        },
        {
          type: "paragraph",
          text: "Follow the steps below to create a variable in PictoBlox:",
        },
        {
          type: "list",
          items: [
            "Click on the Variables palette in the Code tab.",
            "Click the Make a Variable button.",
            "Type a name for your variable in the dialog box (e.g. Score).",
            "Choose whether the variable is for all sprites or just the current sprite.",
            "Click OK — your variable is now ready to use!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/create-variable-dialog.webp",
          alt: "PictoBlox dialog box for creating a new variable with a text field for the variable name and options for all sprites or this sprite only",
          caption: "Creating a new variable in PictoBlox",
        },
        {
          type: "heading",
          text: "Variable Blocks",
        },
        {
          type: "paragraph",
          text: "Once a variable is created, a set of blocks becomes available in the Variables palette to work with it:",
        },
        {
          type: "table",
          title: "Variable Blocks in PictoBlox",
          columns: ["Block", "What it Does"],
          rows: [
            ["Set (variable) to ()", "Sets the variable to a specific value"],
            [
              "Change (variable) by ()",
              "Increases or decreases the variable's value by a given amount",
            ],
            [
              "Show variable (variable)",
              "Displays the variable's value on the Stage",
            ],
            ["Hide variable (variable)", "Hides the variable from the Stage"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/variable-blocks.webp",
          alt: "Variables palette in PictoBlox showing blocks like set Score to 0, change Score by 1, show variable Score, and hide variable Score",
          caption: "Variable blocks available in the Variables palette",
        },
        {
          type: "heading",
          text: "For All Sprites vs This Sprite Only",
        },
        {
          type: "paragraph",
          text: "When creating a variable, you are asked to choose its scope — meaning which sprites can access and use it.",
        },
        {
          type: "table",
          title: "Variable Scope",
          columns: ["Scope", "Who Can Access It", "When to Use It"],
          rows: [
            [
              "For all sprites",
              "Every sprite in the project",
              "When multiple sprites need to share the same value, e.g. a game score",
            ],
            [
              "For this sprite only",
              "Only the sprite it was created for",
              "When the value is specific to one sprite, e.g. a sprite's own health",
            ],
          ],
        },
        {
          type: "heading",
          text: "Example: Score Counter",
        },
        {
          type: "paragraph",
          text: "Let's look at a simple example. We will create a Score variable that starts at 0 and increases by 1 every time the sprite is clicked.",
        },
        {
          type: "list",
          items: [
            "Create a variable called Score.",
            "Add a 'When flag clicked' block and connect 'Set Score to 0' to reset the score at the start.",
            "Add a 'When this sprite clicked' block and connect 'Change Score by 1' so the score increases each time the sprite is clicked.",
            "Use 'Show variable Score' to display the score on the Stage.",
            "Click the green flag and then click the sprite to see the score go up!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/score-counter-script.webp",
          alt: "Two block coding scripts in PictoBlox — one with when flag clicked and set Score to 0, another with when this sprite clicked and change Score by 1",
          caption: "Script for a simple score counter using a variable",
        },
        {
          type: "callout",
          text: "Variables make your programs dynamic and interactive. Without them, your program would always behave the same way every time it runs!",
          tone: "success",
        },
      ],
    },
    "Activity 1: Tracking a Sprite's Position Using Variables": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will use variables to track and display a sprite's position on the Stage in real time. As the sprite moves around, the variables will update automatically to show its current X and Y coordinates.",
        },
        {
          type: "callout",
          text: "Every point on the Stage has an X coordinate (horizontal position) and a Y coordinate (vertical position). The center of the Stage is at x: 0, y: 0.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Choose any sprite you like — we will use Tobi for this activity.",
          ],
        },
        {
          type: "heading",
          text: "Creating the Variables",
        },
        {
          type: "list",
          items: [
            "Go to the Variables palette and click Make a Variable.",
            "Create a variable called X Position.",
            "Create another variable called Y Position.",
            "Make sure both variables are set to For all sprites.",
            "Enable Show variable for both so they are visible on the Stage.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/xy-variables-stage.webp",
          alt: "PictoBlox stage showing two variable displays — X Position and Y Position — in the top left corner",
          caption: "X Position and Y Position variables displayed on the Stage",
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Now let's build the script that continuously updates the variables to reflect the sprite's current position. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Forever — Control",
            "Set (X Position) to () — Variables",
            "Set (Y Position) to () — Variables",
            "x position — Motion (used inside the Set block)",
            "y position — Motion (used inside the Set block)",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/track-position-script.webp",
          alt: "Block coding script showing when flag clicked, forever loop containing set X Position to x position and set Y Position to y position",
          caption:
            "Script to continuously track and update the sprite's X and Y position",
        },
        {
          type: "heading",
          text: "Making the Sprite Move",
        },
        {
          type: "paragraph",
          text: "To see the variables change in real time, let's make the sprite move using the arrow keys. Add a second script to control the sprite's movement:",
        },
        {
          type: "list",
          items: [
            "When right arrow key pressed — change x by 10",
            "When left arrow key pressed — change x by -10",
            "When up arrow key pressed — change y by 10",
            "When down arrow key pressed — change y by -10",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/arrow-key-movement-script.webp",
          alt: "Four block coding scripts each triggered by an arrow key press — right adds 10 to x, left subtracts 10 from x, up adds 10 to y, down subtracts 10 from y",
          caption: "Scripts to move the sprite using arrow keys",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the program.",
            "Use the arrow keys to move the sprite around the Stage.",
            "Watch the X Position and Y Position variables update in real time as the sprite moves!",
            "Notice how X increases when moving right and decreases when moving left, while Y increases when moving up and decreases when moving down.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/position-tracking-result.webp",
          alt: "PictoBlox stage showing Tobi the bear moved to a position with X Position and Y Position variables showing updated coordinate values",
          caption:
            "Variables updating in real time as Tobi moves around the Stage",
        },
        {
          type: "table",
          title: "Understanding the Stage Coordinates",
          columns: ["Direction", "Effect on X", "Effect on Y"],
          rows: [
            ["Move Right", "Increases", "No change"],
            ["Move Left", "Decreases", "No change"],
            ["Move Up", "No change", "Increases"],
            ["Move Down", "No change", "Decreases"],
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Tracking Position before moving on to the next activity!",
          tone: "success",
        },
      ],
    },
    "Activity 2: Saving User Inputs in Variables": {
      blocks: [
        {
          type: "paragraph",
          text: "In the previous activity, we used variables to track a sprite's position automatically. In this activity, we will take it a step further — we will ask the user for input and save their response in a variable. This makes our programs interactive and personalized!",
        },
        {
          type: "callout",
          text: "PictoBlox can ask the user a question and wait for them to type an answer. The answer is temporarily stored in a special block called 'answer', which we can then save into a variable.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Choose any sprite you like — we will use Tobi for this activity.",
          ],
        },
        {
          type: "heading",
          text: "Creating the Variables",
        },
        {
          type: "list",
          items: [
            "Go to the Variables palette and click Make a Variable.",
            "Create a variable called Name.",
            "Create another variable called Age.",
            "Make sure both variables are set to For all sprites.",
          ],
        },
        {
          type: "heading",
          text: "The Ask Block",
        },
        {
          type: "paragraph",
          text: "The 'Ask () and wait' block is found in the Sensing palette. When this block runs, a text input box appears at the bottom of the Stage, and the program pauses until the user types an answer and presses Enter.",
        },
        {
          type: "table",
          title: "Key Blocks for This Activity",
          columns: ["Block", "Palette", "What it Does"],
          rows: [
            [
              "Ask () and wait",
              "Sensing",
              "Displays a question and waits for the user to type an answer",
            ],
            [
              "Answer",
              "Sensing",
              "Stores the most recent answer typed by the user",
            ],
            [
              "Set (variable) to ()",
              "Variables",
              "Saves the answer into a variable",
            ],
            [
              "Say () for () seconds",
              "Looks",
              "Makes the sprite display a message in a speech bubble",
            ],
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Now let's build the script that asks the user for their name and age, saves both into variables, and has Tobi greet them. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Ask (What is your name?) and wait — Sensing",
            "Set (Name) to (answer) — Variables",
            "Ask (How old are you?) and wait — Sensing",
            "Set (Age) to (answer) — Variables",
            "Say (join (Hello ) (join (Name) (! Great to meet you!))) for (3) seconds — Looks & Operators",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/user-input-script.webp",
          alt: "Block coding script showing when flag clicked, ask What is your name and wait, set Name to answer, ask How old are you and wait, set Age to answer, then say a joined greeting message for 3 seconds",
          caption:
            "Script to ask the user for their name and age and save the responses in variables",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the program.",
            "A question box will appear at the bottom of the Stage — type your name and press Enter.",
            "The next question will appear — type your age and press Enter.",
            "Watch Tobi greet you by name using the values stored in the variables!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/user-input-result.webp",
          alt: "PictoBlox stage showing Tobi the bear with a speech bubble greeting the user by name, with Name and Age variable values displayed on the Stage",
          caption:
            "Tobi greeting the user using the values saved in the Name and Age variables",
        },
        {
          type: "callout",
          text: "The 'answer' block only holds the most recent response. That's why we save it into a variable immediately after each 'Ask and wait' block — so we don't lose it!",
          tone: "warning",
        },
        {
          type: "heading",
          text: "Challenge",
        },
        {
          type: "paragraph",
          text: "Try extending the script to ask the user one more question — such as their favorite color or their favorite animal — and have Tobi respond with a fun message using their answer!",
        },
        {
          type: "callout",
          text: "Save your file with the name Saving User Inputs before moving on to the next activity!",
          tone: "success",
        },
      ],
    },
    "Quiz 4: Variables - The Multitaskers": {
      blocks: [
        {
          type: "quiz",
          title: "Quiz 4: Variables - The Multitaskers",
          timeLimit: "10 minutes",
          totalQuestions: 7,
          questions: [
            {
              id: 1,
              type: "true-false",
              points: 1,
              question:
                "A variable in PictoBlox can only store numbers, not text.",
              options: ["True", "False"],
            },
            {
              id: 2,
              type: "multiple-choice",
              points: 1,
              question:
                "Which block is used to increase a variable's value by a specific amount?",
              options: [
                "Set (variable) to ()",
                "Change (variable) by ()",
                "Show variable (variable)",
                "Reset (variable)",
              ],
            },
            {
              id: 3,
              type: "multiple-choice",
              points: 1,
              question:
                "Where is the 'Ask () and wait' block found in PictoBlox?",
              options: ["Variables", "Operators", "Sensing", "Control"],
            },
            {
              id: 4,
              type: "true-false",
              points: 1,
              question:
                "The 'answer' block stores all previous answers typed by the user throughout the program.",
              options: ["True", "False"],
            },
            {
              id: 5,
              type: "multiple-choice",
              points: 1,
              question:
                "When creating a variable in PictoBlox, which scope should you choose if multiple sprites need to share the same value?",
              options: [
                "This sprite only",
                "For all sprites",
                "Global scope",
                "Local scope",
              ],
            },
            {
              id: 6,
              type: "multiple-choice",
              points: 1,
              question:
                "What is the coordinate of the center of the Stage in PictoBlox?",
              options: [
                "x: 100, y: 100",
                "x: 0, y: 100",
                "x: 0, y: 0",
                "x: 100, y: 0",
              ],
            },
            {
              id: 7,
              type: "match",
              points: 2,
              question:
                "Match each variable block with its correct description.",
              instruction: "Drag each block name to its matching description.",
              terms: [
                "Set (variable) to ()",
                "Change (variable) by ()",
                "Show variable (variable)",
                "Hide variable (variable)",
              ],
              definitions: [
                "Assigns a specific value to the variable",
                "Adds or subtracts a value from the variable",
                "Makes the variable visible on the Stage",
                "Removes the variable display from the Stage",
              ],
            },
          ],
        },
      ],
    },
    "Arithmetic Operators": {
      blocks: [
        {
          type: "heading",
          text: "What are Arithmetic Operators?",
        },
        {
          type: "paragraph",
          text: "In everyday life, we use math all the time — counting scores, measuring distances, splitting things equally. In programming, we do the same using arithmetic operators. These are special symbols that tell the computer to perform a mathematical operation on two values.",
        },
        {
          type: "callout",
          text: "An arithmetic operator is a symbol that performs a mathematical calculation between two values, called operands.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Arithmetic Operators in PictoBlox",
        },
        {
          type: "paragraph",
          text: "PictoBlox provides all the basic arithmetic operators in the Operators palette. Each operator block takes two inputs and returns a result.",
        },
        {
          type: "table",
          title: "Arithmetic Operators in PictoBlox",
          columns: ["Operator", "Symbol", "Example", "Result"],
          rows: [
            ["Addition", "+", "5 + 3", "8"],
            ["Subtraction", "-", "9 - 4", "5"],
            ["Multiplication", "*", "6 * 3", "18"],
            ["Division", "/", "10 / 2", "5"],
            ["Modulo", "mod", "10 mod 3", "1"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/arithmetic-operator-blocks.webp",
          alt: "PictoBlox Operators palette showing arithmetic blocks for addition, subtraction, multiplication, division, and modulo",
        },
        {
          type: "heading",
          text: "The Modulo Operator",
        },
        {
          type: "paragraph",
          text: "The modulo operator might be new to you! It returns the remainder after dividing one number by another. For example, 10 mod 3 = 1, because 10 divided by 3 is 3 with a remainder of 1.",
        },
        {
          type: "callout",
          text: "The modulo operator is very useful in programming — for example, to check if a number is even or odd. If a number mod 2 = 0, it is even. If it equals 1, it is odd.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Using Arithmetic Operators with Variables",
        },
        {
          type: "paragraph",
          text: "Arithmetic operators become really powerful when combined with variables. You can perform calculations on variable values and store the result back into a variable.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/arithmetic-with-variables.webp",
          alt: "Block coding script showing set Result to the sum of variable A and variable B using an addition operator block",
        },
        {
          type: "callout",
          text: "Operator blocks can be nested inside each other to perform complex calculations. For example, you can place an addition block inside a multiplication block!",
          tone: "info",
        },
      ],
    },

    "Activity 1: Making an Addition Calculator": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build a simple addition calculator in PictoBlox. The program will ask the user to enter two numbers, add them together, and display the result using a sprite.",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Choose any sprite — we will use Tobi for this activity.",
          ],
        },
        {
          type: "heading",
          text: "Creating the Variables",
        },
        {
          type: "list",
          items: [
            "Go to the Variables palette and click Make a Variable.",
            "Create a variable called Number1.",
            "Create another variable called Number2.",
            "Create a third variable called Result.",
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Now let's build the script. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Ask (Enter the first number:) and wait — Sensing",
            "Set (Number1) to (answer) — Variables",
            "Ask (Enter the second number:) and wait — Sensing",
            "Set (Number2) to (answer) — Variables",
            "Set (Result) to (Number1 + Number2) — Variables & Operators",
            "Say (join (The answer is: ) (Result)) for (3) seconds — Looks & Operators",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/addition-calculator-script.webp",
          alt: "Block coding script in PictoBlox showing when flag clicked, two ask and wait blocks saving answers to Number1 and Number2, set Result to Number1 + Number2, and say the result",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the program.",
            "Enter the first number when prompted and press Enter.",
            "Enter the second number when prompted and press Enter.",
            "Watch Tobi display the sum of the two numbers in a speech bubble!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/addition-calculator-result.webp",
          alt: "PictoBlox stage showing Tobi with a speech bubble displaying the result of the addition, with Number1, Number2, and Result variables visible",
        },
        {
          type: "heading",
          text: "Challenge",
        },
        {
          type: "paragraph",
          text: "Try extending the calculator to support all four operations — addition, subtraction, multiplication, and division. You could ask the user which operation they want to perform, then carry it out!",
        },
        {
          type: "callout",
          text: "Save your file with the name Addition Calculator before moving on to the next activity!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Drawing a Shape by Inputting Values": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will combine what we know about the Pen Extension, variables, and arithmetic operators to draw a shape based on values entered by the user. The user will decide how many sides the shape has and how long each side should be!",
        },
        {
          type: "callout",
          text: "Remember: to draw any regular polygon, the turning angle = 360 ÷ number of sides. We can calculate this automatically using the division operator!",
          tone: "info",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Add the Pen Extension from the Extensions menu.",
          ],
        },
        {
          type: "heading",
          text: "Creating the Variables",
        },
        {
          type: "list",
          items: [
            "Create a variable called Sides to store the number of sides.",
            "Create a variable called Length to store the length of each side.",
            "Create a variable called Angle to store the calculated turning angle.",
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "Now let's build the script. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Erase All — Pen",
            "Go to x: (0) y: (0) — Motion",
            "Ask (How many sides?) and wait — Sensing",
            "Set (Sides) to (answer) — Variables",
            "Ask (How long should each side be?) and wait — Sensing",
            "Set (Length) to (answer) — Variables",
            "Set (Angle) to (360 / Sides) — Variables & Operators",
            "Pen Down — Pen",
            "Repeat (Sides): Move (Length) steps, Turn (Angle) degrees — Control & Motion",
            "Pen Up — Pen",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/dynamic-shape-script.webp",
          alt: "Block coding script showing when flag clicked, erase all, go to x 0 y 0, ask for sides and length, calculate angle as 360 divided by sides, pen down, repeat Sides times moving Length steps and turning Angle degrees, then pen up",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the program.",
            "Enter the number of sides when prompted (e.g. 6 for a hexagon).",
            "Enter the length of each side (e.g. 100).",
            "Watch PictoBlox draw your custom shape on the Stage!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/dynamic-shape-result.webp",
          alt: "PictoBlox stage showing a hexagon drawn based on user inputs of 6 sides and 100 step length",
        },
        {
          type: "table",
          title: "Try These Shapes!",
          columns: ["Shape", "Sides", "Length", "Turning Angle"],
          rows: [
            ["Triangle", "3", "100", "120°"],
            ["Square", "4", "100", "90°"],
            ["Pentagon", "5", "100", "72°"],
            ["Hexagon", "6", "100", "60°"],
            ["Octagon", "8", "100", "45°"],
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Dynamic Shape before moving on to the next lesson!",
          tone: "success",
        },
      ],
    },

    "Relational Operators": {
      blocks: [
        {
          type: "heading",
          text: "What are Relational Operators?",
        },
        {
          type: "paragraph",
          text: "In real life, we make decisions based on comparisons all the time — 'Is it raining? Then take an umbrella.' In programming, we make comparisons using relational operators. These operators compare two values and return either true or false.",
        },
        {
          type: "callout",
          text: "A relational operator compares two values and returns a Boolean result — either true or false. These are also called comparison operators.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Relational Operators in PictoBlox",
        },
        {
          type: "paragraph",
          text: "PictoBlox provides relational operator blocks in the Operators palette. They are represented as hexagonal blocks because they return a true/false value.",
        },
        {
          type: "table",
          title: "Relational Operators in PictoBlox",
          columns: ["Operator", "Symbol", "Example", "Result"],
          rows: [
            ["Greater than", ">", "8 > 5", "true"],
            ["Less than", "<", "3 < 7", "true"],
            ["Equal to", "=", "4 = 4", "true"],
            ["Not equal to", "≠", "5 ≠ 3", "true"],
            ["Greater than or equal to", "≥", "5 ≥ 5", "true"],
            ["Less than or equal to", "≤", "3 ≤ 6", "true"],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/relational-operator-blocks.webp",
          alt: "PictoBlox Operators palette showing relational operator blocks including greater than, less than, and equal to",
        },
        {
          type: "heading",
          text: "Boolean Values",
        },
        {
          type: "paragraph",
          text: "Relational operators always return a Boolean value. A Boolean can only be one of two things: true or false. These values are the foundation of decision-making in programming.",
        },
        {
          type: "callout",
          text: "Boolean values are named after mathematician George Boole, who developed the algebra of logic. Every condition in programming ultimately reduces to true or false.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Using Relational Operators with Variables",
        },
        {
          type: "paragraph",
          text: "Relational operators are most useful when comparing variables. For example, you can check if a player's score is greater than 10, or if a sprite's x position is less than 0.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/relational-with-variables.webp",
          alt: "Block coding example showing a relational operator block comparing variable Score to 10 using greater than operator",
        },
      ],
    },

    "If () Then Block": {
      blocks: [
        {
          type: "heading",
          text: "Making Decisions in Code",
        },
        {
          type: "paragraph",
          text: "Programs become truly powerful when they can make decisions. The If () Then block allows your program to execute a set of blocks only when a certain condition is true — just like saying 'If it is raining, then take an umbrella.'",
        },
        {
          type: "callout",
          text: "The If () Then block checks a condition. If the condition is true, the blocks inside it run. If the condition is false, those blocks are skipped entirely.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/if-then-block.webp",
          alt: "PictoBlox If () Then block from the Control palette with an empty condition slot and space for blocks inside",
        },
        {
          type: "heading",
          text: "Structure of the If () Then Block",
        },
        {
          type: "paragraph",
          text: "The If () Then block has two parts: the condition slot (where you place a relational or Boolean operator block) and the body (where you place the blocks to run if the condition is true).",
        },
        {
          type: "table",
          title: "Parts of the If () Then Block",
          columns: ["Part", "Description"],
          rows: [
            [
              "Condition",
              "A Boolean expression that is either true or false — usually a relational operator block",
            ],
            ["Body", "The blocks that run only if the condition is true"],
          ],
        },
        {
          type: "heading",
          text: "Example: Checking a Score",
        },
        {
          type: "paragraph",
          text: "Let's look at a simple example. We will check if the player's score is greater than 10, and if so, have Tobi say 'You are doing great!'",
        },
        {
          type: "list",
          items: [
            "Create a variable called Score and set it to a value.",
            "Add an If () Then block from the Control palette.",
            "Place the condition (Score > 10) inside the condition slot.",
            "Inside the body, add a Say () for () seconds block with the message 'You are doing great!'",
            "Click the green flag — Tobi will only speak if the Score is greater than 10.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/if-then-example-script.webp",
          alt: "Block coding script showing when flag clicked, set Score to 15, if Score greater than 10 then say You are doing great for 2 seconds",
        },
        {
          type: "callout",
          text: "The If () Then block only runs its body when the condition is true. If the condition is false, the program simply moves on to the next block without doing anything.",
          tone: "info",
        },
      ],
    },

    "If () Then Else Block": {
      blocks: [
        {
          type: "heading",
          text: "What is the If () Then Else Block?",
        },
        {
          type: "paragraph",
          text: "The If () Then block is great, but what if you want your program to do something different when the condition is false? That's where the If () Then Else block comes in. It handles both cases — when the condition is true and when it is false.",
        },
        {
          type: "callout",
          text: "The If () Then Else block checks a condition. If the condition is true, the first set of blocks runs. If the condition is false, the second set of blocks (the 'else' part) runs instead.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/if-then-else-block.webp",
          alt: "PictoBlox If () Then Else block from the Control palette showing two sections — one for when condition is true and one for when it is false",
        },
        {
          type: "heading",
          text: "If () Then vs If () Then Else",
        },
        {
          type: "table",
          title: "Comparing the Two Blocks",
          columns: [
            "Block",
            "When Condition is True",
            "When Condition is False",
          ],
          rows: [
            [
              "If () Then",
              "Runs the body blocks",
              "Skips everything, moves on",
            ],
            [
              "If () Then Else",
              "Runs the 'then' blocks",
              "Runs the 'else' blocks instead",
            ],
          ],
        },
        {
          type: "heading",
          text: "Example: Pass or Fail",
        },
        {
          type: "paragraph",
          text: "Let's build a script that asks the user for a score, then tells them whether they passed or failed. A score of 50 or above is a pass.",
        },
        {
          type: "list",
          items: [
            "Ask the user 'What is your score?' and save the answer to a variable called Score.",
            "Add an If () Then Else block.",
            "Set the condition to (Score ≥ 50).",
            "In the 'then' section, add Say (Congratulations! You passed!) for 3 seconds.",
            "In the 'else' section, add Say (Sorry, you failed. Try again!) for 3 seconds.",
            "Click the green flag and enter a score to test both outcomes.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/if-then-else-script.webp",
          alt: "Block coding script showing when flag clicked, ask for score, set Score to answer, if Score >= 50 then say Congratulations You passed else say Sorry you failed",
        },
        {
          type: "callout",
          text: "If () Then Else blocks can also be nested inside each other to handle multiple conditions. This is how programs make complex decisions!",
          tone: "info",
        },
      ],
    },

    "AND, OR, and NOT Operators": {
      blocks: [
        {
          type: "heading",
          text: "What are Logical Operators?",
        },
        {
          type: "paragraph",
          text: "Sometimes a single condition is not enough to make a decision. What if you want to check two conditions at once? Or what if you want to do something only when a condition is NOT true? That's where logical operators come in!",
        },
        {
          type: "callout",
          text: "Logical operators combine or modify Boolean (true/false) values to create more complex conditions. PictoBlox supports three logical operators: AND, OR, and NOT.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/logical-operator-blocks.webp",
          alt: "PictoBlox Operators palette showing AND, OR, and NOT operator blocks",
        },
        {
          type: "heading",
          text: "The AND Operator",
        },
        {
          type: "paragraph",
          text: "The AND operator returns true only when both conditions are true. If either condition is false, the result is false.",
        },
        {
          type: "table",
          title: "AND Truth Table",
          columns: ["Condition A", "Condition B", "A AND B"],
          rows: [
            ["true", "true", "true"],
            ["true", "false", "false"],
            ["false", "true", "false"],
            ["false", "false", "false"],
          ],
        },
        {
          type: "heading",
          text: "The OR Operator",
        },
        {
          type: "paragraph",
          text: "The OR operator returns true when at least one of the conditions is true. It only returns false when both conditions are false.",
        },
        {
          type: "table",
          title: "OR Truth Table",
          columns: ["Condition A", "Condition B", "A OR B"],
          rows: [
            ["true", "true", "true"],
            ["true", "false", "true"],
            ["false", "true", "true"],
            ["false", "false", "false"],
          ],
        },
        {
          type: "heading",
          text: "The NOT Operator",
        },
        {
          type: "paragraph",
          text: "The NOT operator flips a Boolean value. If the condition is true, NOT makes it false. If it is false, NOT makes it true.",
        },
        {
          type: "table",
          title: "NOT Truth Table",
          columns: ["Condition A", "NOT A"],
          rows: [
            ["true", "false"],
            ["false", "true"],
          ],
        },
        {
          type: "heading",
          text: "Real-World Analogies",
        },
        {
          type: "table",
          title: "Logical Operators in Real Life",
          columns: ["Operator", "Real-Life Example"],
          rows: [
            [
              "AND",
              "I will go to the park if it is sunny AND I have finished my homework.",
            ],
            ["OR", "I will have juice OR water with my lunch."],
            ["NOT", "I will go outside if it is NOT raining."],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/logical-operators-example.webp",
          alt: "Block coding example showing an If block with an AND condition combining two relational operator blocks",
        },
      ],
    },

    "Activity: Calculating the Grades": {
      blocks: [
        {
          type: "paragraph",
          text: "In this activity, we will build a grade calculator in PictoBlox. The program will ask the user for their score, then use logical operators and conditional statements to determine and display their grade.",
        },
        {
          type: "table",
          title: "Grading Criteria",
          columns: ["Score Range", "Grade"],
          rows: [
            ["90 and above", "A"],
            ["80 to 89", "B"],
            ["70 to 79", "C"],
            ["60 to 69", "D"],
            ["Below 60", "F"],
          ],
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Choose any sprite — we will use Tobi for this activity.",
            "Create a variable called Score.",
          ],
        },
        {
          type: "heading",
          text: "Building the Script",
        },
        {
          type: "paragraph",
          text: "We will use nested If () Then Else blocks combined with AND operators to check the score range. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Ask (Enter your score:) and wait — Sensing",
            "Set (Score) to (answer) — Variables",
            "If (Score ≥ 90) Then: Say (Grade: A) for 3 seconds — Control, Operators, Looks",
            "Else If (Score ≥ 80 AND Score < 90) Then: Say (Grade: B) for 3 seconds",
            "Else If (Score ≥ 70 AND Score < 80) Then: Say (Grade: C) for 3 seconds",
            "Else If (Score ≥ 60 AND Score < 70) Then: Say (Grade: D) for 3 seconds",
            "Else: Say (Grade: F) for 3 seconds",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/grade-calculator-script.webp",
          alt: "Block coding script in PictoBlox with nested if-then-else blocks checking score ranges using AND operators to determine the letter grade",
        },
        {
          type: "heading",
          text: "Running the Script",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the program.",
            "Enter a score when prompted and press Enter.",
            "Watch Tobi display the corresponding grade!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/grade-calculator-result.webp",
          alt: "PictoBlox stage showing Tobi with a speech bubble displaying Grade: B after the user entered a score of 85",
        },
        {
          type: "callout",
          text: "Save your file with the name Grade Calculator before moving on to the assignment!",
          tone: "success",
        },
      ],
    },

    "Assignment: Advanced Calculator": {
      blocks: [
        {
          type: "heading",
          text: "Build an Advanced Calculator!",
        },
        {
          type: "paragraph",
          text: "Now it's time to put everything you've learned about arithmetic operators, variables, conditional statements, and logical operators together. Your challenge is to build an advanced calculator in PictoBlox!",
        },
        {
          type: "heading",
          text: "What Your Calculator Should Do",
        },
        {
          type: "list",
          items: [
            "Ask the user to enter two numbers.",
            "Ask the user which operation they want to perform: Addition, Subtraction, Multiplication, or Division.",
            "Perform the selected operation on the two numbers.",
            "Display the result using the sprite.",
            "Handle the special case where the user tries to divide by zero — display an error message instead of crashing!",
          ],
        },
        {
          type: "callout",
          text: "Dividing by zero is undefined in mathematics and will cause errors in programs. Use an If () Then Else block to check if the second number is 0 before dividing!",
          tone: "warning",
        },
        {
          type: "heading",
          text: "Hints",
        },
        {
          type: "list",
          items: [
            "Use the 'Ask () and wait' block to get inputs from the user.",
            "Save the user's chosen operation in a variable called Operation.",
            "Use If () Then Else blocks to check which operation was selected and perform it.",
            "Use an AND or relational operator to detect division by zero.",
            "Use the join () () block in the Operators palette to combine text and numbers in your result message.",
          ],
        },
        {
          type: "table",
          title: "Variables to Create",
          columns: ["Variable Name", "Purpose"],
          rows: [
            ["Number1", "Stores the first number entered by the user"],
            ["Number2", "Stores the second number entered by the user"],
            ["Operation", "Stores the chosen operation (e.g. 1 for Addition)"],
            ["Result", "Stores the calculated result"],
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Advanced Calculator.",
          tone: "success",
        },
      ],
    },

    "Introduction to Loops": {
      blocks: [
        {
          type: "heading",
          text: "What is a Loop?",
        },
        {
          type: "paragraph",
          text: "Imagine you had to write 'I will not run in the hallway' 100 times. That would take forever! In programming, when we need to repeat an action multiple times, we use loops instead of writing the same blocks over and over.",
        },
        {
          type: "callout",
          text: "A loop is a programming structure that repeats a set of instructions either a specific number of times or until a certain condition is met.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Why Do We Use Loops?",
        },
        {
          type: "list",
          items: [
            "To avoid writing the same code repeatedly.",
            "To perform a task a specific number of times.",
            "To keep a program running until something happens.",
            "To process each item in a list or sequence.",
          ],
        },
        {
          type: "heading",
          text: "Types of Loops in PictoBlox",
        },
        {
          type: "table",
          title: "Types of Loops in PictoBlox",
          columns: ["Loop", "Found In", "When to Use It"],
          rows: [
            [
              "Forever",
              "Control",
              "When you want something to repeat indefinitely",
            ],
            [
              "Repeat (n)",
              "Control",
              "When you want to repeat exactly n times",
            ],
            [
              "Repeat Until (condition)",
              "Control",
              "When you want to repeat until a condition becomes true",
            ],
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/loop-blocks-overview.webp",
          alt: "PictoBlox Control palette showing Forever, Repeat, and Repeat Until loop blocks",
        },
        {
          type: "heading",
          text: "The Forever Loop",
        },
        {
          type: "paragraph",
          text: "The Forever loop repeats its contents indefinitely until the program is stopped. It is commonly used for things that should always be running, like checking for key presses or keeping a sprite moving.",
        },
        {
          type: "heading",
          text: "The Repeat (n) Loop",
        },
        {
          type: "paragraph",
          text: "The Repeat (n) loop runs its contents a fixed number of times. When we drew shapes earlier, we used Repeat 4 to draw a square and Repeat 3 to draw a triangle.",
        },
        {
          type: "callout",
          text: "Loops are one of the most fundamental and powerful concepts in programming. Almost every real program uses loops in some form!",
          tone: "info",
        },
      ],
    },

    "While Loop": {
      blocks: [
        {
          type: "heading",
          text: "What is a While Loop?",
        },
        {
          type: "paragraph",
          text: "A While loop repeats a set of instructions for as long as a condition remains true. As soon as the condition becomes false, the loop stops. In PictoBlox, this is represented by the Repeat Until block — which keeps repeating until the condition becomes true.",
        },
        {
          type: "callout",
          text: "In PictoBlox, the 'Repeat Until ()' block works like a While loop. It repeats its contents until the given condition becomes true — meaning it runs while the condition is false.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/repeat-until-block.webp",
          alt: "PictoBlox Repeat Until block from the Control palette with an empty condition slot and space for blocks inside",
        },
        {
          type: "heading",
          text: "How the While Loop Works",
        },
        {
          type: "list",
          items: [
            "The condition is checked before each repetition.",
            "If the condition is false, the blocks inside the loop run.",
            "After running, the condition is checked again.",
            "This continues until the condition becomes true, at which point the loop stops.",
          ],
        },
        {
          type: "heading",
          text: "Example: Counting Up to 10",
        },
        {
          type: "paragraph",
          text: "Let's use a Repeat Until loop to count from 1 to 10. We'll use a variable called Counter that starts at 0 and increases by 1 each time the loop runs.",
        },
        {
          type: "list",
          items: [
            "Create a variable called Counter.",
            "Add a 'When flag clicked' block.",
            "Set Counter to 0.",
            "Add a 'Repeat Until (Counter = 10)' block.",
            "Inside the loop, add 'Change Counter by 1' and 'Say (Counter) for 0.5 seconds'.",
            "Click the green flag and watch the sprite count from 1 to 10!",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/while-loop-count-script.webp",
          alt: "Block coding script showing when flag clicked, set Counter to 0, repeat until Counter equals 10, change Counter by 1 and say Counter for 0.5 seconds",
        },
        {
          type: "callout",
          text: "Be careful with While loops! If the condition never becomes true, the loop will run forever and your program will get stuck. This is called an infinite loop.",
          tone: "warning",
        },
      ],
    },

    "For Loop": {
      blocks: [
        {
          type: "heading",
          text: "What is a For Loop?",
        },
        {
          type: "paragraph",
          text: "A For loop is used when you know exactly how many times you want to repeat something. Unlike a While loop that depends on a condition, a For loop counts through a range of numbers automatically.",
        },
        {
          type: "callout",
          text: "In PictoBlox, the Repeat (n) block acts as a For loop. It repeats its contents exactly n times, automatically keeping count for you.",
          tone: "info",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/repeat-n-block.webp",
          alt: "PictoBlox Repeat block with a number input slot and space for blocks inside the loop body",
        },
        {
          type: "heading",
          text: "For Loop vs While Loop",
        },
        {
          type: "table",
          title: "For Loop vs While Loop",
          columns: [
            "Feature",
            "For Loop (Repeat n)",
            "While Loop (Repeat Until)",
          ],
          rows: [
            [
              "Number of repetitions",
              "Fixed and known in advance",
              "Unknown — depends on a condition",
            ],
            ["Controlled by", "A counter", "A condition"],
            [
              "Risk of infinite loop",
              "No — stops after n times",
              "Yes — if condition never becomes true",
            ],
            [
              "Best used for",
              "Drawing shapes, repeating animations",
              "Waiting for user input, game loops",
            ],
          ],
        },
        {
          type: "heading",
          text: "Example: Drawing Multiple Squares",
        },
        {
          type: "paragraph",
          text: "Let's use a For loop to draw 5 squares on the Stage, each rotated slightly from the last to create a pattern.",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and add the Pen Extension.",
            "Add a 'When flag clicked' block, then 'Erase All' and 'Go to x:0 y:0'.",
            "Add a 'Repeat 5' loop.",
            "Inside the outer loop, add a 'Repeat 4' loop with 'Move 100 steps' and 'Turn 90 degrees' to draw a square.",
            "After the inner loop, add a 'Turn 30 degrees' block to rotate before drawing the next square.",
            "Add 'Pen Down' before and 'Pen Up' after.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/nested-loop-squares-script.webp",
          alt: "Block coding script showing a repeat 5 outer loop containing a repeat 4 inner loop for drawing a square, followed by turn 30 degrees",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/nested-loop-squares-result.webp",
          alt: "PictoBlox stage showing a star-like pattern made of 5 overlapping squares each rotated 30 degrees",
        },
        {
          type: "callout",
          text: "Loops can be nested inside each other! An outer loop can contain an inner loop, and the inner loop will complete all its repetitions for each single repetition of the outer loop.",
          tone: "info",
        },
      ],
    },

    "Activity 1: Giving Beetle its Moves": {
      blocks: [
        {
          type: "paragraph",
          text: "Welcome to the Beetle in a Maze project! Over the next two activities, we will program a beetle sprite to navigate through a maze. In this first activity, we will set up the maze and give the beetle its movement controls.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/beetle-maze-preview.webp",
          alt: "PictoBlox stage showing a maze backdrop with a beetle sprite at the starting position",
        },
        {
          type: "heading",
          text: "Setting Up",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Add a maze backdrop from the backdrop library or draw one using the paint editor.",
            "Add a Beetle sprite (or any bug-like sprite) from the sprite library.",
            "Position the beetle at the entrance of the maze.",
          ],
        },
        {
          type: "heading",
          text: "Programming the Movement",
        },
        {
          type: "paragraph",
          text: "We will control the beetle using the arrow keys. Each key press will move the beetle a small number of steps in the corresponding direction. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When (right arrow) key pressed — Events: Point in direction 90, Move 5 steps",
            "When (left arrow) key pressed — Events: Point in direction -90, Move 5 steps",
            "When (up arrow) key pressed — Events: Point in direction 0, Move 5 steps",
            "When (down arrow) key pressed — Events: Point in direction 180, Move 5 steps",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/beetle-movement-script.webp",
          alt: "Four block coding scripts each triggered by an arrow key — each points the beetle in the correct direction and moves it 5 steps",
        },
        {
          type: "heading",
          text: "Setting the Starting Position",
        },
        {
          type: "list",
          items: [
            "Add a 'When flag clicked' block.",
            "Connect a 'Go to x: () y: ()' block with the coordinates of the maze entrance.",
            "Add a 'Point in direction 90' block to ensure the beetle starts facing right.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/beetle-start-script.webp",
          alt: "Block coding script showing when flag clicked, go to starting coordinates, and point in direction 90",
        },
        {
          type: "heading",
          text: "Testing the Movement",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start.",
            "Use the arrow keys to move the beetle around.",
            "Make sure the beetle moves smoothly in all four directions.",
            "Try navigating through the maze manually!",
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Beetle in a Maze before moving on to Activity 2!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Sensing the Environment": {
      blocks: [
        {
          type: "paragraph",
          text: "The beetle can now move — but it can walk right through the maze walls! In this activity, we will use sensing blocks to detect when the beetle touches the walls and stop it from passing through them. We will also detect when the beetle reaches the exit!",
        },
        {
          type: "heading",
          text: "Sensing Blocks in PictoBlox",
        },
        {
          type: "paragraph",
          text: "The Sensing palette in PictoBlox contains blocks that allow sprites to detect their environment — including touching other sprites, colors, or the edges of the Stage.",
        },
        {
          type: "table",
          title: "Key Sensing Blocks",
          columns: ["Block", "What it Detects"],
          rows: [
            [
              "Touching (sprite)?",
              "Whether the sprite is touching another specific sprite",
            ],
            [
              "Touching color ()?",
              "Whether the sprite is touching a specific color on the Stage",
            ],
            [
              "Color () touching ()?",
              "Whether a color on the sprite is touching another color on the Stage",
            ],
            [
              "Distance to (sprite)",
              "The distance between the sprite and another sprite",
            ],
          ],
        },
        {
          type: "heading",
          text: "Detecting Wall Collisions",
        },
        {
          type: "paragraph",
          text: "We will use the 'Touching color?' block to detect when the beetle touches the wall color of the maze. When it does, we will move it back to prevent it from passing through.",
        },
        {
          type: "list",
          items: [
            "Identify the wall color of your maze (e.g. black or dark blue).",
            "Add a 'When flag clicked' block with a Forever loop.",
            "Inside the loop, add an 'If (touching color [wall color]?) Then' block.",
            "Inside the If block, add a 'Move -5 steps' block to push the beetle back.",
            "This will prevent the beetle from passing through walls.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/beetle-wall-collision-script.webp",
          alt: "Block coding script showing when flag clicked, forever loop with if touching color black then move -5 steps",
        },
        {
          type: "heading",
          text: "Detecting the Exit",
        },
        {
          type: "paragraph",
          text: "Now let's detect when the beetle reaches the exit. We will mark the exit with a distinct color (e.g. green) and use the 'Touching color?' block to detect it.",
        },
        {
          type: "list",
          items: [
            "Color the exit of the maze with a distinct color (e.g. green).",
            "Inside the Forever loop, add another 'If (touching color [exit color]?) Then' block.",
            "Inside it, add a 'Say (You made it! Well done!) for 3 seconds' block.",
            "Optionally, add a 'Stop all' block to end the program when the exit is reached.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/beetle-exit-detection-script.webp",
          alt: "Block coding script showing if touching color green then say You made it Well done for 3 seconds then stop all",
        },
        {
          type: "heading",
          text: "Running the Game",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start.",
            "Use the arrow keys to navigate the beetle through the maze.",
            "Try to reach the exit without touching the walls.",
            "The beetle will be pushed back if it touches a wall, and it will celebrate when it reaches the exit!",
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Beetle in a Maze — Final. You have built your first game with collision detection!",
          tone: "success",
        },
      ],
    },

    "Activity 1: Setting Up the Stage": {
      blocks: [
        {
          type: "paragraph",
          text: "Get ready for an exciting project — we are going to build a Space Battle Game! Over the next few activities, we will create a game where a rocketship battles ghosts in space. In this first activity, we will set up the Stage with a space backdrop and add our main sprites.",
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/space-battle-preview.webp",
          alt: "PictoBlox stage showing a space backdrop with a rocketship sprite at the bottom and ghost sprites floating around",
        },
        {
          type: "heading",
          text: "Setting Up the Backdrop",
        },
        {
          type: "list",
          items: [
            "Open PictoBlox and create a New File.",
            "Select Block Coding as the coding environment.",
            "Click the Stage and go to the Backdrops tab.",
            "Choose a space-themed backdrop from the backdrop library (e.g. Stars or Space).",
            "Your Stage should now look like outer space!",
          ],
        },
        {
          type: "heading",
          text: "Adding the Sprites",
        },
        {
          type: "list",
          items: [
            "Delete the default sprite.",
            "Add a Rocketship sprite from the sprite library — this will be the player's ship.",
            "Add a Ghost sprite from the sprite library — this will be the enemy.",
            "Position the rocketship at the bottom center of the Stage.",
            "Position the ghost somewhere in the upper half of the Stage.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/space-stage-setup.webp",
          alt: "PictoBlox stage showing a dark space backdrop with a rocketship at the bottom and a ghost sprite near the top",
        },
        {
          type: "heading",
          text: "Setting Up the Score",
        },
        {
          type: "list",
          items: [
            "Go to the Variables palette and create a variable called Score.",
            "Create another variable called Lives.",
            "Add a 'When flag clicked' script to the Stage that sets Score to 0 and Lives to 3.",
            "Make sure both variables are visible on the Stage.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/space-game-init-script.webp",
          alt: "Block coding script on the Stage showing when flag clicked, set Score to 0, set Lives to 3",
        },
        {
          type: "heading",
          text: "Resizing the Sprites",
        },
        {
          type: "list",
          items: [
            "Select the Rocketship sprite and set its size to around 50% using the size field below the Stage.",
            "Select the Ghost sprite and set its size to around 60%.",
            "Make sure both sprites look proportional on the Stage.",
          ],
        },
        {
          type: "callout",
          text: "Save your file with the name Space Battle Game before moving on to Activity 2!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Rocketship Controls": {
      blocks: [
        {
          type: "paragraph",
          text: "The Stage is set up — now it's time to bring the rocketship to life! In this activity, we will program the rocketship to move left and right based on arrow key input, and keep it within the bounds of the Stage.",
        },
        {
          type: "heading",
          text: "Planning the Controls",
        },
        {
          type: "paragraph",
          text: "In most space shooter games, the player's ship moves horizontally across the bottom of the screen. We will control the rocketship using the left and right arrow keys.",
        },
        {
          type: "table",
          title: "Rocketship Controls",
          columns: ["Key", "Action"],
          rows: [
            ["Right Arrow", "Move rocketship to the right"],
            ["Left Arrow", "Move rocketship to the left"],
          ],
        },
        {
          type: "heading",
          text: "Building the Movement Script",
        },
        {
          type: "paragraph",
          text: "Select the Rocketship sprite and build the following script. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked — Events",
            "Go to x: (0) y: (-150) — Motion (positions the ship at the bottom center)",
            "Forever — Control",
            "If (right arrow key pressed?) Then: Change x by 10 — Sensing, Control, Motion",
            "If (left arrow key pressed?) Then: Change x by -10 — Sensing, Control, Motion",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/rocketship-movement-script.webp",
          alt: "Block coding script for the rocketship showing when flag clicked, go to x 0 y -150, forever loop with if right arrow pressed change x by 10 and if left arrow pressed change x by -10",
        },
        {
          type: "heading",
          text: "Keeping the Rocketship on Screen",
        },
        {
          type: "paragraph",
          text: "Without boundaries, the rocketship can fly off the screen. Let's add conditions to keep it within the Stage.",
        },
        {
          type: "list",
          items: [
            "Inside the Forever loop, add an 'If (x position > 220) Then: Set x to 220' block.",
            "Add another 'If (x position < -220) Then: Set x to -220' block.",
            "This will stop the rocketship from moving beyond the left and right edges of the Stage.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/rocketship-boundary-script.webp",
          alt: "Additional blocks inside the forever loop checking if x position exceeds 220 or -220 and resetting it to stay within bounds",
        },
        {
          type: "heading",
          text: "Testing the Controls",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start.",
            "Use the left and right arrow keys to move the rocketship.",
            "Make sure it stays within the Stage boundaries.",
            "The rocketship should not be able to fly off the left or right edge of the screen.",
          ],
        },
        {
          type: "callout",
          text: "Save your file before moving on to the next lesson where we will add shooting mechanics and the ghost enemy!",
          tone: "success",
        },
      ],
    },

    "Activity 1: Shooting Bullets": {
      blocks: [
        {
          type: "paragraph",
          text: "The rocketship can move — now it needs to fight back! In this activity, we will add a bullet sprite and program it to shoot upward from the rocketship when the spacebar is pressed.",
        },
        {
          type: "heading",
          text: "Adding the Bullet Sprite",
        },
        {
          type: "list",
          items: [
            "Open your Space Battle Game file from the previous lesson.",
            "Add a new sprite for the bullet — you can draw a small circle or use a small ball sprite from the library.",
            "Resize the bullet to about 20% so it looks like a small projectile.",
            "Hide the bullet at the start by adding a 'Hide' block in its initialization script.",
          ],
        },
        {
          type: "heading",
          text: "Programming the Bullet",
        },
        {
          type: "paragraph",
          text: "The bullet should appear at the rocketship's position when the spacebar is pressed, then fly upward until it hits the top of the Stage or an enemy. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked: Hide the bullet — Events, Looks",
            "When (space) key pressed: Go to (Rocketship), Show, point in direction 0 — Events, Motion, Looks",
            "Repeat Until (touching edge? OR touching Ghost?): Move 15 steps — Control, Motion, Sensing",
            "Hide the bullet after the loop ends — Looks",
            "If touching Ghost?: Change Score by 1 — Sensing, Variables",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/bullet-script.webp",
          alt: "Block coding script for the bullet showing when space pressed, go to rocketship position, show, point up, repeat until touching edge or ghost moving 15 steps, then hide, and if touching ghost change score by 1",
        },
        {
          type: "heading",
          text: "Handling Multiple Bullets",
        },
        {
          type: "paragraph",
          text: "Because each bullet follows the same script, the player can only have one bullet on screen at a time. This is fine for now — it adds a challenge to the game!",
        },
        {
          type: "callout",
          text: "In more advanced games, cloning is used to create multiple bullets at once. For now, one bullet at a time keeps the game balanced and simple.",
          tone: "info",
        },
        {
          type: "heading",
          text: "Testing the Shooting",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the game.",
            "Move the rocketship using the arrow keys.",
            "Press the spacebar to shoot a bullet.",
            "Watch the bullet fly upward from the rocketship!",
            "Try to aim at the ghost and hit it to earn points.",
          ],
        },
        {
          type: "callout",
          text: "Save your file before moving on to the final activity — programming the ghost enemy!",
          tone: "success",
        },
      ],
    },

    "Activity 2: Ghost Controls": {
      blocks: [
        {
          type: "paragraph",
          text: "This is the final activity of the Space Battle Game! We will now program the ghost enemy to move around the Stage unpredictably and detect when it is hit by a bullet or when it reaches the rocketship. Let the battle begin!",
        },
        {
          type: "heading",
          text: "Planning the Ghost Behavior",
        },
        {
          type: "table",
          title: "Ghost Behavior",
          columns: ["Event", "Action"],
          rows: [
            [
              "Game starts",
              "Ghost appears at a random position and moves around",
            ],
            [
              "Hit by bullet",
              "Ghost hides, Score increases by 1, Ghost reappears at a new random position",
            ],
            [
              "Reaches rocketship",
              "Lives decreases by 1, Ghost reappears at a new random position",
            ],
            [
              "Lives reach 0",
              "Game over — display a message and stop all scripts",
            ],
          ],
        },
        {
          type: "heading",
          text: "Programming the Ghost Movement",
        },
        {
          type: "paragraph",
          text: "Select the Ghost sprite and build the following script. You will find the blocks in the mentioned palettes:",
        },
        {
          type: "list",
          items: [
            "When flag clicked: Go to a random position, Show, point in random direction — Events, Motion, Looks",
            "Forever: Move 3 steps, If on edge bounce — Control, Motion",
            "Every few seconds: Turn a random number of degrees to change direction unpredictably",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/ghost-movement-script.webp",
          alt: "Block coding script for the ghost showing when flag clicked, go to random position, forever loop with move 3 steps and if on edge bounce, and periodic random turns",
        },
        {
          type: "heading",
          text: "Detecting Bullet Hit",
        },
        {
          type: "list",
          items: [
            "Inside the Forever loop, add an 'If (touching Bullet?) Then' block.",
            "Inside it: Hide the ghost, wait 1 second, go to a random position, Show.",
          ],
        },
        {
          type: "heading",
          text: "Detecting Rocketship Collision",
        },
        {
          type: "list",
          items: [
            "Inside the Forever loop, add an 'If (touching Rocketship?) Then' block.",
            "Inside it: Change Lives by -1, go to a random position.",
            "Add an 'If (Lives = 0) Then' block: Say (Game Over!) for 3 seconds, Stop all.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/ghost-collision-script.webp",
          alt: "Block coding scripts showing ghost detecting bullet hit and rocketship collision, handling score, lives, game over condition",
        },
        {
          type: "heading",
          text: "Testing the Complete Game",
        },
        {
          type: "list",
          items: [
            "Click the green flag to start the Space Battle Game.",
            "Move the rocketship with the left and right arrow keys.",
            "Press the spacebar to shoot bullets at the ghost.",
            "Avoid letting the ghost reach your rocketship — you only have 3 lives!",
            "Try to score as many points as possible before losing all your lives.",
          ],
        },
        {
          type: "image",
          src: "/courses/introduction-to-programming-for-kids/space-battle-gameplay.webp",
          alt: "PictoBlox stage showing the Space Battle Game in action with the rocketship at the bottom, a bullet flying upward, the ghost moving around, and Score and Lives variables displayed",
        },
        {
          type: "callout",
          text: "Congratulations! You have built a complete Space Battle Game from scratch using everything you have learned — variables, conditionals, loops, sensing, and more. Save your file as Space Battle Game — Final!",
          tone: "success",
        },
      ],
    },
  },
  "creators-kits": {
    "Topic 1: What's Inside the Kit?": {
      blocks: [
        {
          type: "text",
          content:
            "The Creator’s Kit includes various components such as Quarky mount, IR sensors, battery, high-speed motors, servos, fasteners, wheels, spanner, screwdriver, practice objects with stickers, and more.",
        },
        {
          type: "image",
          title: "Electronic Components",
          src: "/courses/creators-kits/electrical.png",
          alt: "Electrical Parts",
        },
        {
          type: "image",
          title: "Construction Parts",
          src: "/courses/creators-kits/parts.png",
          alt: "Consrtuction Parts",
        },
        {
          type: "image",
          title: "Mechanical Components, Accessories, Fasteners and Tools",
          src: "/courses/creators-kits/mechanical.png",
          alt: "Mechanical parts",
        },
      ],
    },
    "Topic 2: Build Your Own Custom Robot": {
      blocks: [
        {
          type: "text",
          content:
            "The Creator's Kit is a powerful upgrade for your robots. It enables you to create a wide range of mechanisms, from basics to intricate designs, helping you to build agile, precision-driven robots that are prepared for any challenges.",
        },
        {
          type: "text",
          content:
            "Further in this course, we have given some examples of various mechanisms and robots that can be made using the Creator's Kit.",
        },
        {
          type: "image",
          title: "Example Robot Built with the Creator's Kit",
          src: "/courses/creators-kits/custom-robot.png",
          alt: "A four-wheeled rover robot with a robotic arm attachment built using the Creator's Kit",
        },
      ],
    },
    "Topic 1: Quarky Assembly": {
      blocks: [
        {
          type: "text",
          content:
            "For flexibility in assembling the Quarky Board with other construction parts, use the Quarky mount. It is compatible with various links and plates.",
        },
        {
          type: "image",
          title: "Components Overview",
          src: "/courses/creators-kits/mount.png",
          alt: "Quarky Mount - a golden perforated wooden mounting plate",
          caption: "Quarky Mount",
        },
        {
          type: "image",
          src: "/courses/creators-kits/board.png",
          alt: "Quarky Board - a black motherboard plate",
          caption: "Quarky Board",
        },
        {
          type: "image",
          src: "/courses/creators-kits/assembly.png",
          alt: "Quarky Mount Board Assembly - an assembly made with mounting and motherboard plates",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            [
              "Quarky Board* (not included in the kit)",
              "Electronic Component",
              "1",
            ],
            ["M2.5 Standoff M-F (12mm)", "Accessory", "4"],
            ["Quarky Mount", "Wooden Part", "1"],
            ["M2.5 Bolt (6mm)", "Fastener", "4"],
            ["M2.5 Nut", "Fastener", "4"],
          ],
        },
        {
          type: "text",
          content:
            "Note: Quarky Board is NOT included in the kit. It is available in the Quarky Explorer, Innovator, and Ultimate Kits.",
        },
        {
          type: "image",
          title: "Assembly Diagram",
          src: "/courses/creators-kits/assembly.gif",
          alt: "Exploded view diagram showing how the Quarky Board attaches to the Quarky Mount using M2.5 standoffs, bolts, and nuts",
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "Mount the M2.5 standoffs (12mm) with the Quarky Board using M2.5 bolts.",
            "Align the Quarky Mount with the M2.5 standoffs (12mm), then secure it with M2.5 nuts.",
          ],
        },
        {
          type: "text",
          content:
            "Your Quarky board is now ready to be mounted on your robot!",
        },
        {
          type: "list",
          title: "Open Resources",
          items: [
            "Programming Quarky with Block Coding in PictoBlox",
            "Programming Quarky with Python in PictoBlox",
          ],
        },
      ],
    },
    "Topic 2: Expansion Board Assembly": {
      blocks: [
        {
          type: "image",
          src: "/courses/creators-kits/expansion-board.png",
          alt: "Labeled diagram of the Quarky Expansion Board showing all ports and components including GPIO Port, Power Switch, Sensor/Ultrasound Ports, 4D Stepper Motors, External Power Connector, Power Output, IR Transmit Ports, ZI Motor Ports, Reserved Motor Connector Ports, and ZI Port",
        },
        {
          type: "text",
          content:
            "The Expansion Board does not come with a dedicated wooden mount, but the four corner holes of the Expansion Boards can be used to mount it to other wooden parts directly or with the help of angle pieces (to attach at a 90° angle).",
        },
        {
          type: "image",
          src: "/courses/creators-kits/expansion-board2.png",
          alt: "Expansion Board mounted directly flat onto a large golden perforated wooden plate",
        },
        {
          type: "image",
          src: "/courses/creators-kits/expansion-board3.png",
          alt: "Expansion Board mounted vertically at 90° onto a wooden plate using angle pieces",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Quarky Expansion Board", "Electronic Component", "1"],
            ["M3 Bolt (8mm)", "Fastener", "4"],
            ["Plate 4-7 (or larger)", "Wooden Part", "1"],
            ["M3 Nut", "Fastener", "4"],
            ["Angle Piece", "Accessory", "2"],
            ["M3 Washer", "Fastener", "2"],
          ],
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "The Expansion Board is compatible with the holes in wooden parts; it can be inserted directly or with angle pieces and washers.",
            "First, attach the Angle Pieces to the Expansion Board using M3 Bolt (8mm) and M3 Nuts. Ensure you use an M3 Washer between the M3 Bolt (8mm) and the elliptical part of the Angle Pieces.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/assembly-expansion-board.gif",
          alt: "Exploded view showing how to attach the Angle Pieces to the Expansion Board using M3 bolts, nuts, and washers",
        },
        {
          type: "list",
          items: [
            "Your Expansion Board is ready to be mounted at a 90° angle to any surface of the wooden parts.",
            "Below is the diagram illustrating the connection for the 8-pin and 3-pin connectors used to connect your Quarky to the Expansion Board.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/wiring-assembly.png",
          alt: "View showing how to attach the wiring works",
        },
        {
          type: "text",
          content:
            "Note: Always use the 8-pin and 3-pin connectors to connect the Quarky Board to the Expansion board.",
        },
        {
          type: "list",
          title: "Open Resources",
          items: ["Coding with Quarky Expansion board"],
        },
      ],
    },
    "Topic 3: Servo Assembly": {
      blocks: [
        {
          type: "text",
          content:
            "The 180° Geek servos are designed for mechanism such as pick-and-place systems and grippers. These servos must be mounted in a position that is either perpendicular or parallel to the base of the your robot.",
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-mount.png",
          alt: "180° Servo Mount - a golden perforated wooden mounting plate with central cutout",
          caption: "180° Servo Mount",
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-motor.png",
          alt: "180° Geek Servo - a white servo motor",
          caption: "180° Geek Servo",
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-assembly.png",
          alt: "Servo Assembly - an illustration of the connected servo assembly",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            [
              "Plate 7-11 (any other plate larger than 180° Servo Mount will also work)",
              "Wooden Part",
              "1",
            ],
            ["M3 Bolt (8mm)", "Fastener", "8"],
            ["M3 Spacer F-F (20mm)", "Fastener", "4"],
            ["Servo Strip (1-5)", "Wooden Part", "1"],
            ["180° Servo Mount", "Fastener", "1"],
            ["180° Servo Motor", "Electronic Component", "1"],
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-assembly.gif",
          alt: "Exploded view diagram showing how the 180° Servo Motor, Servo Mount, spacers, and base plate are assembled together using M3 bolts",
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "Place the 180° Servo Mount on the top of the 180° Servo Motor.",
            "Attach M3 Spacers (20mm) to the four corners of the 180° Servo Mount using M3 Bolts (8mm).",
            "Attach a wooden plate (the same or larger size as the 180° Servo Mount) to the other end of the M3 Spacers (20mm) using M3 Bolts (8mm).",
            "The assembly of the 180° Servo Motor is ready to be assembled with other mechanisms of your robot.",
          ],
        },
        {
          type: "list",
          title: "Open Resources",
          items: [
            "Calibration of Servo Motors using Block Coding",
            "Calibration of Servo Motors using Python",
            "Servo Sweep",
            "Setting the Servo Angle",
          ],
        },
      ],
    },
    "Topic 4: Motor Assembly": {
      blocks: [
        {
          type: "text",
          content:
            "A mounting plate is provided with dedicated holes for the motor brackets of the High Speed Motors.",
        },
        {
          type: "image",
          src: "/courses/creators-kits/motor-mount.png",
          alt: "Motor Mount - a golden perforated wooden plate with 'Motor' label and dedicated bracket holes",
          caption: "Motor Mount",
        },
        {
          type: "image",
          src: "/courses/creators-kits/high-speed-motor.png",
          alt: "High Speed Motor - a silver motor that spins at high speeds",
          caption: "High Speed Motor",
        },
        {
          type: "image",
          src: "/courses/creators-kits/motor-assembly.png",
          alt: "Motor Assembly - a view of a complete assembly containing a mounting plate, high speed motor and a wheel",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Motor Mount", "Wooden Part", "1"],
            ["M2 Bolt (16mm)", "Fastener", "2"],
            ["High-Speed Motor", "Electronic Part", "1"],
            ["Motor Bracket (with M2 nuts included)", "Accessory", "1"],
            ["Wheel", "Accessory", "1"],
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/motor-assembly.gif",
          alt: "Exploded view diagram showing how the High Speed Motor, Motor Bracket, Motor Mount, and Wheel are assembled together using M2 bolts",
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "Insert the High-speed motor into the Motor bracket.",
            "Align the holes of the Motor Mount (wooden plate) with the bracket holes and insert M2 bolts (16mm) through them.",
            "Insert the inner part of the Wheel onto the shaft of the motor.",
            "Follow the same steps for the assembly of the other three sets of wheels and motors.",
            "Your Motor Mount Assembly is now ready to be attached to your robot.",
          ],
        },
        {
          type: "list",
          title: "Open Resources",
          items: ["Controlling the motors using Quarky"],
        },
      ],
    },
    "Topic 5: IR Sensor Assembly": {
      blocks: [
        {
          type: "image",
          src: "/courses/creators-kits/ir-sensor-assembly.png",
          alt: "IR Sensor mounted underneath a golden perforated wooden plate using ring spacers",
        },

        {
          type: "text",
          content:
            "The IR sensor has a few components on its top surface that might come in the way of its assembly with your robot. To prevent this, use the ring spacers positioned above the mounting hole on the IR sensor. This will ensure there is enough space for connecting the jumper wires.",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["IR Sensor", "Electronic Part", "1"],
            ["M3 Bolt (20mm)", "Fastener", "1"],
            ["Ring Spacer (2.5mm thickness)", "Wooden Part", "1"],
            ["Ring Spacer (4mm thickness)", "Wooden Part", "1"],
            ["M3 Nut", "Fastener", "1"],
          ],
        },
        {
          type: "image",
          title: "Assembly Diagrams",
          src: "/courses/creators-kits/ir-sensor-assembly.gif",
          alt: "Exploded view showing IR sensors, ring spacers, wooden plate, and M3 bolts assembly from above",
        },
        {
          type: "image",
          src: "/courses/creators-kits/ir-sensor-assembly2.gif",
          alt: "Exploded view showing IR sensors, wooden plate, and M3 bolts assembly from above",
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "Place and align two ring spacers on the mounting hole of the IR sensor.",
            "Align the above combination with the preferred place of your robot.",
            "Insert M3 Bolt (20mm) through all.",
            "Attach the M3 Nut and tighten it.",
          ],
        },
        {
          type: "image",
          title: "Placement of the IR Sensors",
          src: "/courses/creators-kits/ir-sensor-placement.png",
          alt: "Diagram showing the recommended placement of two IR sensors on the underside of a robot for line following",
        },
        {
          type: "text",
          content:
            "The distance between the two IR sensors should be greater than the thickness of the black line.",
        },
        {
          type: "list",
          title: "Open Resources",
          items: [
            "Calibrating IR Sensor",
            "Basic Line Following using 2 IR sensors",
            "Advanced Line Following using 3 IR sensors",
          ],
        },
      ],
    },
    "Topic 6: Micro Servo Assembly": {
      blocks: [
        {
          type: "text",
          content:
            "There are various types of Micro servos available in the market. The Creator's Kit comes with a mounting plate and a shaft for these of micro servos, which will help you to assemble them with Creator's Kit's parts.",
        },
        {
          type: "text",
          content:
            "Below are examples of some commonly available Micro servos:",
        },
        {
          type: "image",
          src: "/courses/creators-kits/micro-servo.png",
          alt: "A blue and white micro servo motor with plastic attachments",
        },
        {
          type: "image",
          src: "/courses/creators-kits/micro-servo2.png",
          alt: "A black and pink micro servo motor with plastic attachments",
        },
        {
          type: "text",
          content:
            "Below are the images of the Metal Servo Mount (for Micro Servos) and the Metal Servo shaft included in the kit. The wooden shaft is compatible with all variations of Micro Servo plastic parts.",
        },
        {
          type: "image",
          title: "Kit Components",
          src: "/courses/creators-kits/metal-servo-strip.png",
          alt: "Metal Servo Shaft - a golden wooden arm-shaped piece with holes for attaching to servo",
        },
        {
          type: "image",
          src: "/courses/creators-kits/metal-servo-mount.png",
          alt: "Metal Servo Mount - a golden wooden piece with holes for attaching to servo",
        },
        {
          type: "table",
          title: "Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Micro Servo Strip 1-5 (wooden shaft)", "Wooden Part", "1"],
            ["Metal Servo Mount (for Micro Servo)", "Wooden Part", "1"],
            ["Micro Servo* (not included in the kit)", "Electronic Part", "1"],
            [
              "Micro Servo Plastic Parts (not included in the kit)",
              "Accessory",
              "1",
            ],
            ["M2 Bolt (16mm)", "Fastener", "2"],
            ["M2 Nut", "Fastener", "2"],
          ],
        },
        {
          type: "text",
          content:
            "Note: The Micro servo and its plastic parts are NOT included in the kit. They are easily available online and at local stores.",
        },
        {
          type: "image",
          title: "Assembly Diagram",
          src: "/courses/creators-kits/micro-servo-assembly.gif",
          alt: "Exploded view showing how the Metal Servo Mount, Micro Servo, wooden shaft, and M2 bolts and nuts are assembled together",
        },
        {
          type: "list",
          title: "Assembly Steps",
          items: [
            "Place the Metal Servo Mount on top of the Micro Servo so that the two mounting holes of the Micro Servo align with the holes of the Metal Servo Mount.",
            "Insert M2 Bolts (16mm) and M2 Nuts in both the mounting holes.",
            "Attach the wooden shaft to the plastic part of the Micro servo using M2 screws (These M2 screws are included with the set of Micro Servo, they are NOT included in Creator's Kit).",
            "Attach the combined part of the wooden shaft and plastic part to the shaft of the Micro Servo.",
            "Insert the M2 Screw into the shaft of the Micro servo. (This M2 screw comes with the set of Micro Servo, it is NOT included in Creator's Kit.)",
            "Your Micro servo with its shaft is ready to be calibrated and combined with other mechanical components.",
          ],
        },
      ],
    },
    "Topic 1: Basic Linkage Mechanisms": {
      blocks: [
        {
          type: "text",
          content:
            "A link is defined as a member or a combination of members within a mechanism that connects other members while allowing relative motion between them. A link can consist of one or more rigid bodies.",
        },
        {
          type: "text",
          content: "Below are some examples of basic linkage mechanisms:",
        },
        {
          type: "image",
          title: "Corner Linkage Mechanism",
          src: "/courses/creators-kits/corner-linkage.gif",
          alt: "Corner Linkage Mechanism - three golden wooden strips connected at a central pivot point forming a Y or corner shape",
        },
        {
          type: "image",
          title: "Cross Linkage Mechanism",
          src: "/courses/creators-kits/cross-linkage.gif",
          alt: "Cross Linkage Mechanism - two golden wooden strips crossed and connected at a central pivot point forming an X shape",
        },
        {
          type: "image",
          title: "Parallel Linkage Mechanism",
          src: "/courses/creators-kits/parallel-linkage.gif",
          alt: "Parallel Linkage Mechanism - four golden wooden strips connected at corner pivot points forming a rectangular frame",
        },
      ],
    },
    "Topic 2: Assembly of Basic Linkage Mechanisms": {
      blocks: [
        {
          type: "text",
          content:
            "The Creator's Kit has various links in multiple sizes and quantities. These links can be connected using fasteners. Custom mechanisms can be created which need an axial motion from one point to another.",
        },
        {
          type: "text",
          content:
            "In these types of mechanisms, a lock nut is preferred more than a regular nut. A lock nut, also known as a self-locking nut, is a type of fastener that resists loosening when subjected to vibration or torque.",
        },
        {
          type: "image",
          src: "/courses/creators-kits/lock-nut.png",
          alt: "M3 Lock Nut - a hexagonal metal nut with a nylon insert for self-locking",
          caption: "M3 Lock Nut",
        },
        {
          type: "image",
          src: "/courses/creators-kits/lock-nut2.png",
          alt: "M3 Lock Nut assembled into a wooden linkage strip showing how it connects two links",
          caption: "M3 Lock Nut in Linkages",
        },
        {
          type: "text",
          content:
            "Screw the M3 lock nut onto a bolt connecting two links in the same manner as a regular nut, as illustrated in the image above. Points A and B should NOT wobble and must rotate smoothly about the axis.",
        },
        {
          type: "text",
          content: "Below given is the assembly of basic linkage mechanisms:",
        },
        {
          type: "image",
          title: "Corner Linkage Mechanism",
          src: "/courses/creators-kits/corner-linkage.gif",
          alt: "Corner Linkage Mechanism assembled from two golden wooden strips connected at a pivot point forming an angled shape",
        },
        {
          type: "table",
          title: "Corner Linkage – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Strip (1-9)", "Wooden Part", "2"],
            ["M3 Bolt (12mm)", "Fastener", "1"],
            ["M3 Lock Nut", "Fastener", "1"],
          ],
        },
        {
          type: "image",
          title: "Assembly Steps",
          src: "/courses/creators-kits/corner-linkage-assembly.gif",
          alt: "Exploded view of Corner Linkage Mechanism showing M3 bolt and M3 lock nut assembly through two wooden strips",
        },
        {
          type: "list",
          title: "Corner Linkage – Assembly Steps",
          items: [
            "Take two strips (wooden parts) and align the end holes of each strip.",
            "Insert M3 Bolt (12mm) and M3 Lock Nut at the other end.",
            "Tighten the M3 Lock Nut and it will give you a joint for rotational motion.",
          ],
        },
        {
          type: "image",
          title: "Cross Linkage Mechanism",
          src: "/courses/creators-kits/cross-linkage.gif",
          alt: "Cross Linkage Mechanism assembled from two golden wooden strips crossing at a central pivot point forming an X shape",
        },
        {
          type: "table",
          title: "Cross Linkage – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Strip (1-9)", "Wooden Part", "2"],
            ["M3 Bolt (12mm)", "Fastener", "1"],
            ["M3 Lock Nut", "Fastener", "1"],
          ],
        },
        {
          type: "image",
          title: "Assembly Steps",
          src: "/courses/creators-kits/cross-linkage-assembly.gif",
          alt: "Exploded view of Cross Linkage Mechanism showing M3 bolt and M3 lock nut assembly through two crossing wooden strips",
        },
        {
          type: "list",
          title: "Cross Linkage – Assembly Steps",
          items: [
            "Take two strips (wooden parts) and align the center holes of each strip.",
            "Insert M3 Bolt (12mm) and M3 Lock Nut at the other end.",
            "Tighten the M3 Lock Nut and it will give you a joint for rotational motion. Use the middle of the strips.",
          ],
        },
        {
          type: "image",
          title: "Parallel Linkage Mechanism",
          src: "/courses/creators-kits/parallel-linkage.gif",
          alt: "Parallel Linkage Mechanism assembled from four golden wooden strips connected at corner pivot points forming a rectangular frame",
        },
        {
          type: "table",
          title: "Parallel Linkage – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["Strip (1-9)", "Wooden Part", "2"],
            ["Strip (1-5)", "Wooden Part", "2"],
            ["M3 Bolt (12mm)", "Fastener", "4"],
            ["M3 Lock Nut", "Fastener", "4"],
          ],
        },
        {
          type: "image",
          title: "Assembly Steps",
          src: "/courses/creators-kits/parallel-linkage-assembly.gif",
          alt: "Exploded view of Parallel Linkage Mechanism showing M3 bolts and M3 lock nuts assembly through four wooden strips at corners",
        },
        {
          type: "list",
          title: "Parallel Linkage – Assembly Steps",
          items: [
            "Take two strips (1-9) and two strips (1-5) and align the same size strips parallelly.",
            "Insert M3 Bolt (12mm) and M3 Lock Nut at the four corners.",
            "Tighten the M3 Lock Nuts.",
            "This will give you a rhombus shape with a parallel linkage movement.",
          ],
        },
      ],
    },
    "Topic 3: Advanced Mechanisms": {
      blocks: [
        {
          type: "text",
          content:
            "Here are a few examples of mechanisms that can help understand the usages of various components from the Creator's Kit and how they can be used to develop custom mechanisms for your robot.",
        },

        {
          type: "text",
          content:
            "The Pick and place mechanism is commonly used for tasks that involve picking an object from one location and placing it in another.",
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism2.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "table",
          title: "Pick and Place – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["180° Servo Motor", "Electronic Component", "1"],
            ["180° Servo Mount", "Wooden Part", "1"],
            ["Servo Strip (1-5)", "Wooden Part", "1"],
            ["Plate (7-11)", "Wooden Part", "1"],
            ["Plate (4-7)", "Wooden Part", "1"],
            ["M3 Spacer F-F (20mm)", "Fastener", "3"],
            ["M3 Spacer F-F (15mm)", "Fastener", "2"],
            ["M3 Bolt (8mm)", "Fastener", "14"],
            ["M3 Bolt (12mm)", "Fastener", "3"],
            ["M3 Nut", "Fastener", "6"],
            ["M3 Lock Nut", "Fastener", "5"],
            ["C-Strip (1-4)", "Wooden Part", "2"],
            ["Strip (1-9)", "Wooden Part", "2"],
            ["Strip (1-5)", "Wooden Part", "1"],
            ["Strip (1-3)", "Wooden Part", "1"],
            ["Strip (1-2)", "Wooden Part", "1"],
          ],
        },
        {
          type: "list",
          title: "Pick and Place – Assembly Steps",
          items: [
            "Assemble the 180° Servo Mount vertically onto a Plate (7-11) using Angle Pieces, M3 Bolts (12mm), and M3 Nuts. Insert the 180° Servo Motor into the 180° Servo Mount. The base of the Pick and Place Mechanism is ready.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism-assembly.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "list",
          items: [
            "Attach a Strip (1-5) halfway to the centre of a Plate (7-4) using M3 Bolts (12mm) and M3 Nuts. Attach the top corner holes of the 180° Servo Mount to the middle holes of the Plate (7-4) using M3 Standoff (20mm). Then insert one more M3 Standoff (20mm) along with a Ring spacer (4mm) and M3 Bolt (12mm).",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism-assembly2.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "list",
          items: [
            "Now, the second part of this assembly will be to make the parallel linkage. Take a Servo Strip (1-5) and extend its length using Strip (1-2) and Strip (1-3).",
            "Attach two Strips (1-9) at a 90° angle. Then attach the extended Servo strip to the 6th hole from the top of the vertically attached Strip (1-9).",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism-assembly3.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "list",
          items: [
            "To make the hook part of the Pick and Place mechanism, you can use the C-Strip.",
            "Attach one C-strip to the 2nd hole from the bottom of the vertically attached Strip (1-9). Insert one more C-strip and two M3 Standoff (15mm) using M3 Bolts (12mm) and M3 Lock Nut.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism-assembly4.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "list",
          items: [
            "Attach the assembly of hook and parallel linkages to the base with the Servo Mount assembly using a Ring spacer (4mm) and M3 Bolt (12mm).",
            "The Pick and Place mechanism is ready to be assembled with your robot.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/pick-and-place-mechanism-assembly5.gif",
          alt: "Pick and Place Mechanism assembled using servo motor, servo mount, linkage strips, C-strips, and wooden plates",
        },
        {
          type: "heading",
          text: "The Gripper mechanism",
        },
        {
          type: "text",
          content:
            "The Gripper mechanism is generally used for activities that include changing the placement of objects from one place to another.",
        },
        {
          type: "image",
          title: "Gripper Mechanism",
          src: "/courses/creators-kits/gripper-mechanism.gif",
          alt: "Gripper Mechanism assembled using two servo motors, curved strips, 45° strips, and a base plate",
        },
        {
          type: "table",
          title: "Gripper – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["180° Servo Motor", "Electronic Component", "2"],
            ["180° Servo Mount", "Wooden Part", "2"],
            ["Plate (7-11)", "Wooden Part", "1"],
            ["M3 Bolt (8mm)", "Fastener", "24"],
            ["M3 Bolt (12mm)", "Fastener", "10"],
            ["M3 Nut", "Fastener", "10"],
            ["M3 Spacer F-F (20mm)", "Fastener", "8"],
            ["M3 Spacer F-F (15mm)", "Fastener", "4"],
            ["Servo Strip (1-4)", "Wooden Part", "1"],
            ["Servo Strip (1-5)", "Wooden Part", "1"],
            ["Curved Strip (1-5)", "Wooden Part", "4"],
            ["45° Strip (3-2)", "Wooden Part", "2"],
            ["Strip (1-5)", "Wooden Part", "2"],
          ],
        },
        {
          type: "list",
          title: "Gripper – Assembly Steps",
          items: [
            "Assemble the 180° Servo Motors side by side in the opposite direction on a 7-11 Plate using Servo Mounts, M3 Standoffs (20mm), and M3 Bolts (8mm).",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/gripper-mechanism-assembly.gif",
          alt: "Gripper Mechanism assembled using two servo motors, curved strips, 45° strips, and a base plate",
        },
        {
          type: "list",
          items: [
            " The base of your Gripper Mechanism is ready.",
            "The next part to make will be the Gripper Arms. The Gripper Arms is a pair of two arms; almost all the parts used for making them are the same except for the Servo Strips.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/gripper-mechanism-assembly2.gif",
          alt: "Gripper Mechanism assembled using two servo motors, curved strips, 45° strips, and a base plate",
        },
        {
          type: "list",
          items: [
            "To make the Claw, it is preferable to use the Curved strips. In this mechanism, we have used four Curved Strips (1-5).",
            "Attach M3 Standoffs (15mm) between two curved strips to give them a sufficient height to grab objects.",
            "Use 45° Strips to get a broader angle for the gripper and attach them to the Strip (1-5) using M3 Bolts (12mm) and M3 Nuts.",
            "Attach the assembly of curved strips with the 45° Strips using M3 Bolts (12mm) and M3 Nuts.",
            "Since the 180° Servo Motors are opposite to each other, their shafts do not align. For this, we have provided two sizes of Servo Strips: Servo Strip (1-3) and Servo Strip (1-5).",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-strip.jpg",
          alt: "Parts for Gripper Mechanism",
        },
        {
          type: "list",
          items: [
            "Keep the end holes of Servo Strip (1-3) and Servo Strip (1-5) in one line and attach a Strip (1-5) using two of its holes using M3 Bolts (12mm) and M3 Nuts.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/gripper-mechanism-assembly3.gif",
          alt: "Gripper Mechanism assembled using two servo motors, curved strips, 45° strips, and a base plate",
        },
        {
          type: "list",
          items: [
            "Now, insert the Gripper Arms into the shafts of the servos as shown.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/gripper-mechanism-assembly4.gif",
          alt: "Gripper Mechanism assembled using two servo motors, curved strips, 45° strips, and a base plate",
        },
        {
          type: "list",
          items: [
            "The Gripper Mechanism is ready to be assembled with your robot.",
          ],
        },
        {
          type: "text",
          content:
            "The scissor mechanism is a mechanical linkage system used to create vertical motion or extension. It consists of a series of interconnected, folding supports that resemble the shape of a pair of scissors. The scissor mechanism is widely employed in various applications, including scissor lifts, folding tables, adjustable height platforms, and automotive jacks.",
        },
        {
          type: "text",
          content:
            "The above-shown scissor mechanism can be made using 'linkage cross joints' and 'linkage corner joints'. 180° Servo Motors can be added at the rear end which will control the motion of the mechanism with their respective shafts.",
        },
        {
          type: "image",
          title: "Scissor Mechanism",
          src: "/courses/creators-kits/scissor-mechanism-with-servos.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "table",
          title: "Scissor Mechanism – Parts Used",
          columns: ["Item Name", "Type", "Qty"],
          rows: [
            ["180° Servo Motor", "Electronic Component", "2"],
            ["180° Servo Mount", "Wooden Part", "2"],
            ["Plate (7-11)", "Wooden Part", "1"],
            ["Strip (1-13)", "Wooden Part", "7"],
            ["Strip (1-3)", "Wooden Part", "4"],
            ["45° Strip (3-2)", "Wooden Part", "4"],
            ["M3 Bolt (8mm)", "Fastener", "16"],
            ["M3 Bolt (12mm)", "Fastener", "17"],
            ["M3 Bolt (16mm)", "Fastener", "4"],
            ["M3 Lock Nut", "Fastener", "9"],
            ["M3 Nut", "Fastener", "12"],
            ["M3 Standoff (20mm)", "Accessory", "8"],
            ["M3 Standoff (15mm)", "Accessory", "1"],
          ],
        },
        {
          type: "list",
          title: "Scissor Mechanism – Assembly Steps",
          items: [
            "Place the 180° Servo Mounts side by side in the same direction. Connect them at the 2nd and 4th holes, with two Strip (1-3) on top and two Strip (1-3) at bottom.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-mechanism-with-servos-assembly.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "image",
          src: "/courses/creators-kits/mounting-plates-for-scissor-mechanism.png",
          alt: "A Mount for Servos",
        },

        {
          type: "list",
          items: [
            "Assemble the 180° Servo Motors side by side in the opposite direction on a Plate (7-11) using the assembly of Servo Mounts, M3 Standoffs (20mm), and M3 Bolts (8mm).",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-mechanism-with-servos-assembly2.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "image",
          src: "/courses/creators-kits/servo-mount-for-scissor-mechanism.png",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },

        {
          type: "list",
          items: [
            "Attach two 45° Strip (3-2) to each of the Servo Strips (1-3) using M3 Bolts (12mm) and M3 Nuts. Ensure that the fasteners are inverted. The extended arm with servo shafts is ready.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-mechanism-with-servos-assembly3.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "list",
          items: [
            "Next for the main scissor mechanism linkages, take six Strips (1-13) and connect them at their endpoints and midpoints in a zig-zag pattern using parallel linkages at equal distances.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-linkage.png",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "list",
          items: [
            "Insert M3 Bolts (12mm) and M3 Lock Nuts at the intersections. The M3 Lock Nuts will help with the movement of the linkages without getting loose.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-linkage-assembly.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "list",
          items: [
            "Attach two 45° Strips (3-2) to one end of the linkages. (You can attach your custom gripper or claw there.)",
            "Attach the last holes of the linkages to the extended shafts of the 180° Servo Motors.",
          ],
        },
        {
          type: "image",
          src: "/courses/creators-kits/scissor-mechanism-with-servos-assembly4.gif",
          alt: "Scissor Mechanism assembled using crossed wooden linkage strips, servo motors, and a base plate showing extended scissor linkage",
        },
        {
          type: "list",
          items: [
            "Slide in a Strip (1-13) into the space between Servo Mounts. This Strip (1-13) will be used as the axis for this assembly and will work as the sliding joint for the scissor mechanism.",
            "Insert an M3 Standoff (15mm) in the middle of the linkage cross joint and the first hole of the sliding Strip (1-13). Use M3 Bolts (12mm) at both ends to connect the M3 Standoff (15mm).",
          ],
        },
        {
          type: "list",
          title: "More Open Resources",
          items: [
            "Machine Learning Environment: Image Classifier",
            "Exploring Quarky Sensors",
          ],
        },
      ],
    },
  },
  "financial-literacy": {
    "Needs vs Wants": {
      intro:
        "Learn how to tell the difference between essentials and extras so you can make smarter spending choices.",
      blocks: [
        { type: "heading", text: "Needs vs Wants" },
        {
          type: "paragraph",
          text: "Needs are things you must have to live safely and stay healthy, like food, water, and shelter. Wants are extras that are fun but not required, like toys or treats.",
        },
        {
          type: "list",
          title: "Quick check",
          items: [
            "Ask: Can I live safely without it?",
            "Decide if it helps health, safety, or learning",
            "Label it as a need or a want",
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: "Needs come first, then wants—this keeps your money goals on track.",
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Earning Money": {
      intro:
        "Money is earned by providing value or helping with tasks, which teaches responsibility and planning.",
      blocks: [
        { type: "heading", text: "Earning Money" },
        {
          type: "paragraph",
          text: "People earn money by doing work that helps others. Kids can earn by helping at home, completing chores, or doing small neighborhood tasks with permission.",
        },
        {
          type: "list",
          title: "Ways to earn",
          items: [
            "Do agreed-on chores or extra tasks",
            "Help organize or clean shared spaces",
            "Offer a simple service like pet care or watering plants",
          ],
        },
        {
          type: "callout",
          tone: "success",
          text: "Earning money is about effort and responsibility, not just the amount.",
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Saving Goals": {
      intro:
        "A saving goal gives your money a purpose and helps you practice patience.",
      blocks: [
        { type: "heading", text: "Saving Goals" },
        {
          type: "paragraph",
          text: "Set a clear goal, decide how much it costs, and choose a time frame. Then save a little each week until you reach it.",
        },
        {
          type: "list",
          title: "Goal steps",
          items: [
            "Pick something meaningful",
            "Set a target amount",
            "Track progress each week",
          ],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Simple Budget Plan": {
      intro:
        "A budget is a simple plan for how you will use your money each time you earn it.",
      blocks: [
        { type: "heading", text: "Simple Budget Plan" },
        {
          type: "paragraph",
          text: "Try a three-part split: spend some now, save some for later, and set a small amount aside to give.",
        },
        {
          type: "list",
          title: "Starter split",
          items: [
            "Spend: 50%",
            "Save: 40%",
            "Give: 10%",
          ],
        },
        {
          type: "callout",
          tone: "info",
          text: "Your budget can change as your goals change.",
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Price Tags & Value": {
      intro:
        "Price tells you the cost, but value tells you how useful something will be.",
      blocks: [
        { type: "heading", text: "Price Tags & Value" },
        {
          type: "paragraph",
          text: "Two items can cost the same but last different lengths of time. Value means considering quality, durability, and how often you will use it.",
        },
        {
          type: "list",
          title: "Value check",
          items: [
            "How long will it last?",
            "How often will I use it?",
            "Does it help me learn or grow?",
          ],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Comparing Options": {
      intro:
        "Comparing choices helps you pick the best fit for your goals and budget.",
      blocks: [
        { type: "heading", text: "Comparing Options" },
        {
          type: "paragraph",
          text: "Look at price, quality, and features. Sometimes a slightly higher price gives better value over time.",
        },
        {
          type: "list",
          title: "Compare with care",
          items: [
            "Price vs quality",
            "Needs covered",
            "Reviews or recommendations",
          ],
        },
        {
          type: "callout",
          tone: "success",
          text: "Taking a pause before buying saves money and regrets.",
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Money Safety": {
      intro:
        "Protecting your money and personal information keeps you safe online and offline.",
      blocks: [
        { type: "heading", text: "Money Safety" },
        {
          type: "paragraph",
          text: "Never share passwords, PINs, or personal information. Keep cash in a safe place and ask an adult before buying online.",
        },
        {
          type: "list",
          title: "Safety rules",
          items: [
            "Use strong passwords",
            "Ask before online purchases",
            "Keep money in a secure spot",
          ],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Giving Back": {
      intro:
        "Giving helps your community and teaches gratitude.",
      blocks: [
        { type: "heading", text: "Giving Back" },
        {
          type: "paragraph",
          text: "You can give time, skills, or money to help others. Even a small amount makes a difference.",
        },
        {
          type: "list",
          title: "Ways to give",
          items: [
            "Donate to a cause you care about",
            "Volunteer time or help a neighbor",
            "Share supplies you no longer use",
          ],
        },
        {
          type: "callout",
          tone: "success",
          text: "Giving is part of a balanced money plan.",
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Savings vs Checking": {
      intro:
        "Banks offer different types of accounts. Savings is for goals, while checking is for everyday spending.",
      blocks: [
        { type: "heading", text: "Savings vs Checking" },
        {
          type: "paragraph",
          text: "Savings accounts grow money slowly and are used for goals. Checking accounts are for money you plan to spend soon.",
        },
        {
          type: "list",
          title: "Quick compare",
          items: ["Savings = goals", "Checking = daily use", "Both keep money safe"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "How Banks Help": {
      intro:
        "Banks keep money secure, help you track it, and make spending safer.",
      blocks: [
        { type: "heading", text: "How Banks Help" },
        {
          type: "paragraph",
          text: "Banks store your money, show balances, and let you use cards or apps instead of carrying cash.",
        },
        {
          type: "list",
          title: "Bank benefits",
          items: ["Safety", "Tracking money", "Easy payments"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Unit Price & Deals": {
      intro:
        "A unit price helps you compare value by showing cost per item or per size.",
      blocks: [
        { type: "heading", text: "Unit Price & Deals" },
        {
          type: "paragraph",
          text: "Sometimes the bigger package costs more but is cheaper per unit. Unit prices help you spot the best deal.",
        },
        {
          type: "list",
          title: "Deal check",
          items: ["Compare unit prices", "Read the label", "Buy only what you need"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Advertising Tricks": {
      intro:
        "Ads are designed to make products look exciting, but they do not always show the full picture.",
      blocks: [
        { type: "heading", text: "Advertising Tricks" },
        {
          type: "paragraph",
          text: "Bright colors, limited-time deals, and catchy phrases can push you to buy quickly. Pause and think first.",
        },
        {
          type: "list",
          title: "Pause before buying",
          items: ["Is it a need or want?", "Do I have a goal?", "Can I wait 24 hours?"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Borrowing Basics": {
      intro:
        "Borrowing means you use money now and promise to pay it back later.",
      blocks: [
        { type: "heading", text: "Borrowing Basics" },
        {
          type: "paragraph",
          text: "Borrowing can help with big needs, but it also means you owe money. Always understand the rules before borrowing.",
        },
        {
          type: "list",
          title: "Borrowing reminders",
          items: ["Borrow for needs", "Know the payback plan", "Ask a trusted adult"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Paying Back": {
      intro:
        "Paying back on time builds trust and keeps costs low.",
      blocks: [
        { type: "heading", text: "Paying Back" },
        {
          type: "paragraph",
          text: "When you borrow, you need a plan to repay. Late payments can add extra costs.",
        },
        {
          type: "list",
          title: "Smart payback",
          items: ["Pay on time", "Track what you owe", "Borrow only what you can repay"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Short vs Long Term Goals": {
      intro:
        "Short-term goals are things you can reach soon. Long-term goals take more time and planning.",
      blocks: [
        { type: "heading", text: "Short vs Long Term Goals" },
        {
          type: "paragraph",
          text: "A short-term goal might be a book next month. A long-term goal might be a bike next year.",
        },
        {
          type: "list",
          title: "Goal types",
          items: ["Short-term = weeks or months", "Long-term = many months or years"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-01.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Create a Money Plan": {
      intro:
        "A money plan connects your budget, savings, and goals into one simple guide.",
      blocks: [
        { type: "heading", text: "Create a Money Plan" },
        {
          type: "paragraph",
          text: "List your goals, decide how much to save each week, and check your progress.",
        },
        {
          type: "list",
          title: "Plan steps",
          items: ["Set goals", "Choose a budget split", "Track weekly progress"],
        },
      
        {
          type: "paragraph",
          text: "This connects money choices to real-life situations like saving for goals and planning weekly spending.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/financial-02.svg",
          alt: "financial-literacy lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
  },
  "gen-ai": {
    "What Is Generative AI?": {
      intro:
        "Generative AI creates new content like text, images, or music based on patterns it has learned.",
      blocks: [
        { type: "heading", text: "What Is Generative AI?" },
        {
          type: "paragraph",
          text: "These tools can help you brainstorm ideas, draft stories, and explore creativity. They do not think like humans, but they can be helpful assistants.",
        },
        {
          type: "list",
          title: "What it can create",
          items: ["Stories", "Illustration ideas", "Sound or music concepts"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "How Models Learn": {
      intro:
        "AI models learn by finding patterns in large examples of text, images, or data.",
      blocks: [
        { type: "heading", text: "How Models Learn" },
        {
          type: "paragraph",
          text: "During training, the model practices predicting what comes next. Over time, it becomes better at recognizing patterns and generating outputs.",
        },
        {
          type: "list",
          title: "Learning loop",
          items: [
            "See many examples",
            "Predict what comes next",
            "Adjust to improve accuracy",
          ],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Prompt Ingredients": {
      intro:
        "Great prompts include a clear task, the style you want, and important details.",
      blocks: [
        { type: "heading", text: "Prompt Ingredients" },
        {
          type: "paragraph",
          text: "Think of prompts as instructions. When you add context and constraints, you guide the AI to give better results.",
        },
        {
          type: "list",
          title: "Prompt recipe",
          items: [
            "Role or audience",
            "Task and goal",
            "Style, length, or format",
          ],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Iterate & Refine": {
      intro:
        "Your first result is just a draft—refine it with better instructions.",
      blocks: [
        { type: "heading", text: "Iterate & Refine" },
        {
          type: "paragraph",
          text: "Review the output, highlight what needs improvement, and try again with clearer details or examples.",
        },
        {
          type: "list",
          title: "Refinement steps",
          items: ["Ask for changes", "Add missing details", "Try a new style"],
        },
        {
          type: "callout",
          tone: "info",
          text: "Iteration turns average ideas into excellent work.",
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Story Co-Pilot": {
      intro:
        "Use AI to brainstorm plots, characters, and story twists while keeping your voice.",
      blocks: [
        { type: "heading", text: "Story Co-Pilot" },
        {
          type: "paragraph",
          text: "Start with a simple idea, then ask the AI to suggest settings or conflicts. You choose what to keep and what to change.",
        },
        {
          type: "list",
          title: "Try this flow",
          items: ["Idea seed", "Character sketch", "Plot twist options"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Image Idea Boards": {
      intro:
        "Image boards help you collect visual ideas for a project or presentation.",
      blocks: [
        { type: "heading", text: "Image Idea Boards" },
        {
          type: "paragraph",
          text: "Describe the mood, colors, and style you want. Then gather images that match that feeling to guide your project.",
        },
        {
          type: "list",
          title: "Board checklist",
          items: ["Colors", "Textures", "Mood or theme"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Safety and Ethics": {
      intro:
        "Responsible AI means being honest, careful, and fair with the content you create.",
      blocks: [
        { type: "heading", text: "Safety and Ethics" },
        {
          type: "paragraph",
          text: "AI can make mistakes or reflect bias. Always check facts, avoid harmful content, and respect privacy.",
        },
        {
          type: "list",
          title: "Use AI responsibly",
          items: ["Check facts", "Avoid personal data", "Give credit when needed"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Human-in-the-Loop": {
      intro:
        "Humans stay in control by reviewing and improving AI outputs.",
      blocks: [
        { type: "heading", text: "Human-in-the-Loop" },
        {
          type: "paragraph",
          text: "You are the editor, not the AI. Your judgment and creativity make the final work strong and trustworthy.",
        },
        {
          type: "list",
          title: "Your role",
          items: ["Review accuracy", "Improve tone", "Make final decisions"],
        },
        {
          type: "callout",
          tone: "success",
          text: "AI assists, but your choices define the final result.",
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Verify AI Output": {
      intro:
        "AI can make mistakes. Verification helps you trust what you use.",
      blocks: [
        { type: "heading", text: "Verify AI Output" },
        {
          type: "paragraph",
          text: "Check facts, numbers, and names against reliable sources. Do not accept answers without evidence.",
        },
        {
          type: "list",
          title: "Verification steps",
          items: ["Look for sources", "Cross-check key facts", "Fix errors"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Credible Sources": {
      intro:
        "A credible source is accurate, up to date, and trustworthy.",
      blocks: [
        { type: "heading", text: "Credible Sources" },
        {
          type: "paragraph",
          text: "Use official sites, textbooks, and trusted organizations. Avoid copying unverified claims.",
        },
        {
          type: "list",
          title: "Source checklist",
          items: ["Author or organization is known", "Date is recent", "Evidence is provided"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Bias in Data": {
      intro:
        "AI learns from data, so biased data can lead to unfair results.",
      blocks: [
        { type: "heading", text: "Bias in Data" },
        {
          type: "paragraph",
          text: "If the training data is incomplete or unfair, the model can repeat those problems.",
        },
        {
          type: "list",
          title: "Spotting bias",
          items: ["Missing groups", "Unfair language", "One-sided examples"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Fair Prompts": {
      intro:
        "Prompts should be respectful and inclusive.",
      blocks: [
        { type: "heading", text: "Fair Prompts" },
        {
          type: "paragraph",
          text: "Avoid stereotypes. Use neutral and clear wording that treats people fairly.",
        },
        {
          type: "list",
          title: "Prompt tips",
          items: ["Use neutral language", "Avoid assumptions", "Check for fairness"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "AI as Helper": {
      intro:
        "AI works best as a helper that supports your creativity and effort.",
      blocks: [
        { type: "heading", text: "AI as Helper" },
        {
          type: "paragraph",
          text: "Use AI to brainstorm and organize ideas. You make the final choices and add your voice.",
        },
        {
          type: "list",
          title: "Best uses",
          items: ["Idea starters", "Outlines", "Polishing drafts"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Documenting Use": {
      intro:
        "Being transparent about AI use builds trust and good habits.",
      blocks: [
        { type: "heading", text: "Documenting Use" },
        {
          type: "paragraph",
          text: "Write a short note describing how AI helped and what you changed.",
        },
        {
          type: "list",
          title: "Simple note",
          items: ["What AI suggested", "What you edited", "What you created yourself"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Create with Constraints": {
      intro:
        "Constraints help you focus and produce better creative work.",
      blocks: [
        { type: "heading", text: "Create with Constraints" },
        {
          type: "paragraph",
          text: "Pick a theme, a word limit, or a style. Then use AI to help brainstorm within those limits.",
        },
        {
          type: "list",
          title: "Try limits",
          items: ["One theme", "Five sentences", "Three key facts"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-01.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
    "Present & Reflect": {
      intro:
        "Presenting your work and reflecting helps you improve next time.",
      blocks: [
        { type: "heading", text: "Present & Reflect" },
        {
          type: "paragraph",
          text: "Share your final project, describe your process, and note what you would change.",
        },
        {
          type: "list",
          title: "Reflection questions",
          items: ["What went well?", "What was hard?", "What would you improve?"],
        },
      
        {
          type: "paragraph",
          text: "This section explains the idea using simple, kid-friendly steps and encourages responsible, thoughtful use.",
        },
        {
          type: "image",
          title: "Visual recap",
          src: "/courses/generated/gen-ai-02.svg",
          alt: "gen-ai lesson visual",
          caption: "Quick visual summary to reinforce the topic.",
        }
      ],
    },
  },
  math: {
    "Place Value Power": {
      intro:
        "Place value explains how digit positions change a number's size and meaning.",
      blocks: [
        { type: "heading", text: "Place Value Power" },
        {
          type: "paragraph",
          text: "In the number 4,532, each digit has a different value based on its position. This helps you read, compare, and build numbers quickly.",
        },
        {
          type: "list",
          title: "Remember",
          items: ["Ones, tens, hundreds", "Thousands and beyond", "Digits shift by 10x"],
        },
      ],
    },
    "Mental Math Tricks": {
      intro:
        "Mental math lets you solve problems quickly without a calculator.",
      blocks: [
        { type: "heading", text: "Mental Math Tricks" },
        {
          type: "paragraph",
          text: "Use friendly numbers, break problems into parts, and round then adjust to make calculations easier.",
        },
        {
          type: "list",
          title: "Quick tricks",
          items: ["Make tens", "Double and halve", "Round then adjust"],
        },
      ],
    },
    "Patterns Everywhere": {
      intro:
        "Patterns help you predict what comes next and find rules in numbers.",
      blocks: [
        { type: "heading", text: "Patterns Everywhere" },
        {
          type: "paragraph",
          text: "Look for changes that repeat: add 2, subtract 5, or multiply by 3. Patterns appear in music, art, and nature too.",
        },
        {
          type: "list",
          title: "Pattern hunt",
          items: ["Identify the rule", "Test the next step", "Create your own"],
        },
      ],
    },
    "Variables as Boxes": {
      intro:
        "Variables are like boxes that hold numbers you don't know yet.",
      blocks: [
        { type: "heading", text: "Variables as Boxes" },
        {
          type: "paragraph",
          text: "If x + 3 = 10, then x is the number that makes the equation true. Variables help you describe patterns and solve puzzles.",
        },
        {
          type: "list",
          title: "Variable tips",
          items: ["Use a symbol", "Solve step by step", "Check your answer"],
        },
      ],
    },
    "Shapes and Angles": {
      intro:
        "Geometry describes the shapes and angles that make up the world around us.",
      blocks: [
        { type: "heading", text: "Shapes and Angles" },
        {
          type: "paragraph",
          text: "Triangles, squares, and circles have special properties. Angles tell you how wide a corner opens.",
        },
        {
          type: "list",
          title: "Angle basics",
          items: ["Right angle = 90°", "Acute < 90°", "Obtuse > 90°"],
        },
      ],
    },
    "Area & Perimeter": {
      intro:
        "Perimeter is the distance around a shape, and area is the space inside it.",
      blocks: [
        { type: "heading", text: "Area & Perimeter" },
        {
          type: "paragraph",
          text: "Find perimeter by adding all sides. Find area for rectangles by multiplying length × width.",
        },
        {
          type: "list",
          title: "Remember",
          items: ["Perimeter = around", "Area = inside", "Use square units for area"],
        },
      ],
    },
    "Reading Charts": {
      intro:
        "Charts and graphs turn numbers into pictures you can understand quickly.",
      blocks: [
        { type: "heading", text: "Reading Charts" },
        {
          type: "paragraph",
          text: "Look at the title, labels, and scale. Then compare heights or lengths to find the biggest and smallest values.",
        },
        {
          type: "list",
          title: "Chart checklist",
          items: ["Title and labels", "Scale or key", "Compare categories"],
        },
      ],
    },
    "Chance & Probability": {
      intro:
        "Probability describes how likely something is to happen.",
      blocks: [
        { type: "heading", text: "Chance & Probability" },
        {
          type: "paragraph",
          text: "Some outcomes are impossible, some are certain, and most are in between. Use fractions or percents to show chance.",
        },
        {
          type: "list",
          title: "Quick scale",
          items: ["0% = impossible", "50% = equally likely", "100% = certain"],
        },
      ],
    },
    "Fraction Parts": {
      intro:
        "Fractions show parts of a whole, like 1 out of 4 slices.",
      blocks: [
        { type: "heading", text: "Fraction Parts" },
        {
          type: "paragraph",
          text: "The top number is the numerator and the bottom number is the denominator. Together they show how many parts you have out of the total.",
        },
        {
          type: "list",
          title: "Fraction facts",
          items: ["Denominator = total parts", "Numerator = parts you have", "Equal parts matter"],
        },
      ],
    },
    "Equivalent Fractions": {
      intro:
        "Equivalent fractions represent the same amount, even if the numbers look different.",
      blocks: [
        { type: "heading", text: "Equivalent Fractions" },
        {
          type: "paragraph",
          text: "You can multiply or divide the numerator and denominator by the same number to make a new fraction that is equal.",
        },
        {
          type: "list",
          title: "Quick example",
          items: ["1/2 = 2/4 = 4/8", "Multiply top and bottom equally"],
        },
      ],
    },
    "Decimal Place": {
      intro:
        "Decimals show parts of a whole using place value.",
      blocks: [
        { type: "heading", text: "Decimal Place" },
        {
          type: "paragraph",
          text: "The first place after the decimal is tenths, then hundredths. This helps you read money and measurements.",
        },
        {
          type: "list",
          title: "Place value",
          items: ["Tenths = 0.1", "Hundredths = 0.01", "Thousandths = 0.001"],
        },
      ],
    },
    "Money Math": {
      intro:
        "Money math uses decimals to add, subtract, and compare prices.",
      blocks: [
        { type: "heading", text: "Money Math" },
        {
          type: "paragraph",
          text: "Line up decimals when adding or subtracting. This keeps the place values correct.",
        },
        {
          type: "list",
          title: "Money tips",
          items: ["Line up decimal points", "Check for reasonableness", "Estimate first"],
        },
      ],
    },
    "Problem Solving Steps": {
      intro:
        "Multi-step problems are easier when you follow a clear plan.",
      blocks: [
        { type: "heading", text: "Problem Solving Steps" },
        {
          type: "paragraph",
          text: "Read carefully, underline important numbers, choose operations, then solve and check.",
        },
        {
          type: "list",
          title: "Solve it",
          items: ["Understand the question", "Plan the steps", "Check the answer"],
        },
      ],
    },
    "Estimation Checks": {
      intro:
        "Estimation helps you see if your answer makes sense.",
      blocks: [
        { type: "heading", text: "Estimation Checks" },
        {
          type: "paragraph",
          text: "Round numbers to make quick estimates, then compare with your final answer.",
        },
        {
          type: "list",
          title: "Estimate quickly",
          items: ["Round to easy numbers", "Do mental math", "Compare to final answer"],
        },
      ],
    },
    "Perimeter Projects": {
      intro:
        "Perimeter shows the distance around a shape, like a garden fence.",
      blocks: [
        { type: "heading", text: "Perimeter Projects" },
        {
          type: "paragraph",
          text: "Measure each side and add them up. This helps with real-world projects like framing or fencing.",
        },
        {
          type: "list",
          title: "Measure it",
          items: ["Add all sides", "Use correct units", "Double-check measurements"],
        },
      ],
    },
    "Symmetry & Transformations": {
      intro:
        "Symmetry means a shape can be split into matching halves.",
      blocks: [
        { type: "heading", text: "Symmetry & Transformations" },
        {
          type: "paragraph",
          text: "Transformations like flips, slides, and turns move shapes without changing their size.",
        },
        {
          type: "list",
          title: "Transformations",
          items: ["Reflection", "Translation", "Rotation"],
        },
      ],
    },
  },
  english: {
    "Story Elements": {
      intro:
        "Great stories have a setting, characters, a problem, and a solution.",
      blocks: [
        { type: "heading", text: "Story Elements" },
        {
          type: "paragraph",
          text: "When you know the building blocks, you can understand stories faster and write your own with confidence.",
        },
        {
          type: "list",
          title: "Core elements",
          items: ["Setting", "Characters", "Plot", "Theme"],
        },
      ],
    },
    "Character & Setting": {
      intro:
        "Characters and setting make a story feel real and memorable.",
      blocks: [
        { type: "heading", text: "Character & Setting" },
        {
          type: "paragraph",
          text: "Describe what characters want, what they fear, and where the story happens to build a vivid world.",
        },
        {
          type: "list",
          title: "Add depth",
          items: ["Goals and obstacles", "Time and place", "Sights and sounds"],
        },
      ],
    },
    "Strong Sentences": {
      intro:
        "Strong sentences are clear, specific, and varied in length.",
      blocks: [
        { type: "heading", text: "Strong Sentences" },
        {
          type: "paragraph",
          text: "Use action verbs, avoid extra words, and mix short and long sentences for better rhythm.",
        },
        {
          type: "list",
          title: "Sentence tips",
          items: ["Use active verbs", "Be specific", "Vary sentence length"],
        },
      ],
    },
    "Descriptive Details": {
      intro:
        "Descriptions help readers see, hear, and feel the story.",
      blocks: [
        { type: "heading", text: "Descriptive Details" },
        {
          type: "paragraph",
          text: "Show, don't tell. Use sensory words that paint a clear picture in the reader's mind.",
        },
        {
          type: "list",
          title: "Use the senses",
          items: ["Sight", "Sound", "Smell", "Touch"],
        },
      ],
    },
    "Voice and Clarity": {
      intro:
        "Your voice is how you sound when you speak or write.",
      blocks: [
        { type: "heading", text: "Voice and Clarity" },
        {
          type: "paragraph",
          text: "Speak at a steady pace, use clear words, and keep your main point simple so listeners can follow you.",
        },
        {
          type: "list",
          title: "Clarity checklist",
          items: ["Slow down", "Use simple words", "Repeat key points"],
        },
      ],
    },
    "Persuasive Techniques": {
      intro:
        "Persuasion uses reasons and evidence to help others see your point of view.",
      blocks: [
        { type: "heading", text: "Persuasive Techniques" },
        {
          type: "paragraph",
          text: "Use facts, examples, and a clear call-to-action. A strong argument is polite and logical.",
        },
        {
          type: "list",
          title: "Persuasion tools",
          items: ["Facts and examples", "Emotional appeal", "Clear conclusion"],
        },
      ],
    },
    "Fact vs Opinion": {
      intro:
        "Facts can be proven, while opinions are personal beliefs.",
      blocks: [
        { type: "heading", text: "Fact vs Opinion" },
        {
          type: "paragraph",
          text: "Reading carefully helps you spot what is true, what is believed, and what needs more evidence.",
        },
        {
          type: "list",
          title: "Spot the difference",
          items: ["Facts are verifiable", "Opinions use feelings", "Look for sources"],
        },
      ],
    },
    "Digital Etiquette": {
      intro:
        "Being kind and respectful online is part of good communication.",
      blocks: [
        { type: "heading", text: "Digital Etiquette" },
        {
          type: "paragraph",
          text: "Use polite language, avoid sharing private information, and think before you post or comment.",
        },
        {
          type: "list",
          title: "Online manners",
          items: ["Be respectful", "Protect privacy", "Give helpful feedback"],
        },
      ],
    },
    "Main Idea & Details": {
      intro:
        "The main idea is what the text is mostly about, and details support it.",
      blocks: [
        { type: "heading", text: "Main Idea & Details" },
        {
          type: "paragraph",
          text: "Look for repeated words, topic sentences, and key facts to identify the main idea.",
        },
        {
          type: "list",
          title: "Find the main idea",
          items: ["Read the title", "Check the first and last sentences", "Notice repeated ideas"],
        },
      ],
    },
    "Inference & Evidence": {
      intro:
        "Inference is a smart guess based on clues in the text.",
      blocks: [
        { type: "heading", text: "Inference & Evidence" },
        {
          type: "paragraph",
          text: "Use evidence from the story to support what you think. Good readers explain why.",
        },
        {
          type: "list",
          title: "Inference steps",
          items: ["Find clues", "Use background knowledge", "Explain your reasoning"],
        },
      ],
    },
    "Word Parts": {
      intro:
        "Word parts like prefixes and suffixes help you unlock meaning.",
      blocks: [
        { type: "heading", text: "Word Parts" },
        {
          type: "paragraph",
          text: "Common prefixes like re- or un- and suffixes like -ful or -less can change a word's meaning.",
        },
        {
          type: "list",
          title: "Common parts",
          items: ["Prefix: re- means again", "Suffix: -ful means full of", "Suffix: -less means without"],
        },
      ],
    },
    "Context Clues": {
      intro:
        "Context clues are hints in a sentence that help you figure out a word.",
      blocks: [
        { type: "heading", text: "Context Clues" },
        {
          type: "paragraph",
          text: "Look at nearby words, examples, or explanations to guess the meaning.",
        },
        {
          type: "list",
          title: "Clue types",
          items: ["Definition clues", "Example clues", "Contrast clues"],
        },
      ],
    },
    "Planning & Drafting": {
      intro:
        "Planning helps you organize ideas before you write.",
      blocks: [
        { type: "heading", text: "Planning & Drafting" },
        {
          type: "paragraph",
          text: "Use a simple outline, then write a first draft without worrying about perfection.",
        },
        {
          type: "list",
          title: "Drafting tips",
          items: ["Start with a plan", "Write freely", "Save edits for later"],
        },
      ],
    },
    "Revising & Editing": {
      intro:
        "Revising improves ideas. Editing fixes grammar and spelling.",
      blocks: [
        { type: "heading", text: "Revising & Editing" },
        {
          type: "paragraph",
          text: "Revising changes content or structure. Editing checks punctuation, spelling, and clarity.",
        },
        {
          type: "list",
          title: "Polish it",
          items: ["Add or remove details", "Fix grammar mistakes", "Read aloud"],
        },
      ],
    },
    "Poetry Forms": {
      intro:
        "Poetry uses rhythm and structure to express ideas.",
      blocks: [
        { type: "heading", text: "Poetry Forms" },
        {
          type: "paragraph",
          text: "Poems can be rhyming or free verse. Some poems follow special patterns like haiku or limerick.",
        },
        {
          type: "list",
          title: "Common forms",
          items: ["Haiku", "Free verse", "Rhyming couplets"],
        },
      ],
    },
    "Figurative Language": {
      intro:
        "Figurative language paints pictures with words.",
      blocks: [
        { type: "heading", text: "Figurative Language" },
        {
          type: "paragraph",
          text: "Similes and metaphors compare things to create strong images and feelings.",
        },
        {
          type: "list",
          title: "Examples",
          items: ["Simile: as brave as a lion", "Metaphor: time is a river"],
        },
      ],
    },
  },
  science: {
    "Science Questions": {
      intro:
        "Science begins with curiosity and questions about how the world works.",
      blocks: [
        { type: "heading", text: "Science Questions" },
        {
          type: "paragraph",
          text: "A good science question is specific and testable. It leads to experiments or observations.",
        },
        {
          type: "list",
          title: "Question starters",
          items: ["What happens if…?", "How does ___ change ___?", "Why does ___ happen?"],
        },
      ],
    },
    "Observation Skills": {
      intro:
        "Careful observation helps scientists notice patterns and details.",
      blocks: [
        { type: "heading", text: "Observation Skills" },
        {
          type: "paragraph",
          text: "Use your senses and tools like rulers or magnifiers to collect accurate information.",
        },
        {
          type: "list",
          title: "Observe like a scientist",
          items: ["Look closely", "Measure carefully", "Record what you see"],
        },
      ],
    },
    "Weather Systems": {
      intro:
        "Weather is the daily condition of the atmosphere around us.",
      blocks: [
        { type: "heading", text: "Weather Systems" },
        {
          type: "paragraph",
          text: "Weather includes temperature, wind, and precipitation. Clouds and pressure help us predict changes.",
        },
        {
          type: "list",
          title: "Key parts",
          items: ["Temperature", "Wind", "Precipitation"],
        },
      ],
    },
    "Our Solar System": {
      intro:
        "Our solar system includes the Sun, planets, moons, and smaller objects.",
      blocks: [
        { type: "heading", text: "Our Solar System" },
        {
          type: "paragraph",
          text: "Planets orbit the Sun, and each has unique features. The Sun provides light and energy for life on Earth.",
        },
        {
          type: "list",
          title: "Planet facts",
          items: ["Inner vs outer planets", "Moons and rings", "Orbit paths"],
        },
      ],
    },
    "Cells and Life": {
      intro:
        "Cells are the smallest building blocks of living things.",
      blocks: [
        { type: "heading", text: "Cells and Life" },
        {
          type: "paragraph",
          text: "Some organisms are made of one cell, while others have trillions. Each cell has parts that do important jobs.",
        },
        {
          type: "list",
          title: "Cell basics",
          items: ["Cell membrane", "Nucleus", "Energy makers"],
        },
      ],
    },
    "Ecosystems": {
      intro:
        "Ecosystems are communities of living things and their environment.",
      blocks: [
        { type: "heading", text: "Ecosystems" },
        {
          type: "paragraph",
          text: "Plants, animals, and microorganisms depend on each other for food, shelter, and balance.",
        },
        {
          type: "list",
          title: "Ecosystem parts",
          items: ["Producers", "Consumers", "Decomposers"],
        },
      ],
    },
    "Forces & Motion": {
      intro:
        "Forces change how objects move.",
      blocks: [
        { type: "heading", text: "Forces & Motion" },
        {
          type: "paragraph",
          text: "Pushes and pulls can start, stop, or change the direction of motion. Friction and gravity are forces we see every day.",
        },
        {
          type: "list",
          title: "Common forces",
          items: ["Gravity", "Friction", "Magnetism"],
        },
      ],
    },
    "States of Matter": {
      intro:
        "Matter can be solid, liquid, or gas depending on temperature and energy.",
      blocks: [
        { type: "heading", text: "States of Matter" },
        {
          type: "paragraph",
          text: "Heating and cooling change how particles move, which changes the state of matter.",
        },
        {
          type: "list",
          title: "State changes",
          items: ["Melting", "Freezing", "Evaporation"],
        },
      ],
    },
    "Forms of Energy": {
      intro:
        "Energy comes in many forms like light, sound, and motion.",
      blocks: [
        { type: "heading", text: "Forms of Energy" },
        {
          type: "paragraph",
          text: "You can see, hear, or feel energy. Examples include sunlight, heat, and moving objects.",
        },
        {
          type: "list",
          title: "Energy types",
          items: ["Light", "Heat", "Sound", "Motion"],
        },
      ],
    },
    "Energy Transfer": {
      intro:
        "Energy moves from one place to another.",
      blocks: [
        { type: "heading", text: "Energy Transfer" },
        {
          type: "paragraph",
          text: "Energy can transfer by heating, moving, or through light. It does not disappear, it changes form.",
        },
        {
          type: "list",
          title: "Transfer ideas",
          items: ["Heat moves to cooler areas", "Motion transfers energy", "Light carries energy"],
        },
      ],
    },
    "Water Cycle": {
      intro:
        "The water cycle describes how water moves on Earth.",
      blocks: [
        { type: "heading", text: "Water Cycle" },
        {
          type: "paragraph",
          text: "Water evaporates, forms clouds through condensation, and returns as precipitation.",
        },
        {
          type: "list",
          title: "Cycle steps",
          items: ["Evaporation", "Condensation", "Precipitation", "Collection"],
        },
      ],
    },
    "Landforms": {
      intro:
        "Landforms are natural features on Earth like mountains and valleys.",
      blocks: [
        { type: "heading", text: "Landforms" },
        {
          type: "paragraph",
          text: "Wind, water, and time shape the land. Erosion and weathering change landforms slowly.",
        },
        {
          type: "list",
          title: "Examples",
          items: ["Mountains", "Valleys", "Plains", "Canyons"],
        },
      ],
    },
    "Define a Problem": {
      intro:
        "Engineering starts by defining a clear problem to solve.",
      blocks: [
        { type: "heading", text: "Define a Problem" },
        {
          type: "paragraph",
          text: "Good problem statements say who needs help, what the goal is, and any limits.",
        },
        {
          type: "list",
          title: "Problem frame",
          items: ["Who is it for?", "What needs to happen?", "What limits exist?"],
        },
      ],
    },
    "Test & Improve": {
      intro:
        "Testing shows what works and what needs changes.",
      blocks: [
        { type: "heading", text: "Test & Improve" },
        {
          type: "paragraph",
          text: "Build a model, test it, and improve the design based on results.",
        },
        {
          type: "list",
          title: "Improve cycle",
          items: ["Build", "Test", "Refine", "Repeat"],
        },
      ],
    },
    "Moon Phases": {
      intro:
        "The Moon looks different as it orbits Earth.",
      blocks: [
        { type: "heading", text: "Moon Phases" },
        {
          type: "paragraph",
          text: "Phases happen because we see different parts of the lit side of the Moon.",
        },
        {
          type: "list",
          title: "Common phases",
          items: ["New moon", "First quarter", "Full moon", "Last quarter"],
        },
      ],
    },
    "Seasons & Shadows": {
      intro:
        "Seasons and shadows change because Earth is tilted as it orbits the Sun.",
      blocks: [
        { type: "heading", text: "Seasons & Shadows" },
        {
          type: "paragraph",
          text: "When your hemisphere tilts toward the Sun, you get more daylight and warmer weather.",
        },
        {
          type: "list",
          title: "Key ideas",
          items: ["Earth tilt causes seasons", "Sun angle changes shadow length", "Daylight varies across the year"],
        },
      ],
    },
  },
  diy: {
    "Design Thinking": {
      intro:
        "Design thinking is a process for solving problems creatively.",
      blocks: [
        { type: "heading", text: "Design Thinking" },
        {
          type: "paragraph",
          text: "You start by understanding the problem, then brainstorm ideas, build a prototype, and test it to improve.",
        },
        {
          type: "list",
          title: "Design steps",
          items: ["Understand", "Imagine", "Build", "Improve"],
        },
      ],
    },
    "Tool Safety": {
      intro:
        "Safe tools mean safe makers.",
      blocks: [
        { type: "heading", text: "Tool Safety" },
        {
          type: "paragraph",
          text: "Use protective gear, keep your workspace tidy, and ask for help when using new tools.",
        },
        {
          type: "list",
          title: "Safety checklist",
          items: ["Wear goggles", "Keep fingers clear", "Clean up after use"],
        },
      ],
    },
    "Measuring & Cutting": {
      intro:
        "Accurate measurements help your projects fit and function.",
      blocks: [
        { type: "heading", text: "Measuring & Cutting" },
        {
          type: "paragraph",
          text: "Measure twice, cut once. Mark lines clearly and keep tools steady to get clean edges.",
        },
        {
          type: "list",
          title: "Precision tips",
          items: ["Use a ruler", "Mark lightly", "Cut slowly"],
        },
      ],
    },
    "Fasteners & Joints": {
      intro:
        "Fasteners and joints hold your project together securely.",
      blocks: [
        { type: "heading", text: "Fasteners & Joints" },
        {
          type: "paragraph",
          text: "Choose screws, glue, or tabs depending on the materials. Strong joints make your build durable.",
        },
        {
          type: "list",
          title: "Common options",
          items: ["Glue", "Screws", "Tabs and slots"],
        },
      ],
    },
    "Simple Circuits": {
      intro:
        "A circuit is a complete loop that lets electricity flow.",
      blocks: [
        { type: "heading", text: "Simple Circuits" },
        {
          type: "paragraph",
          text: "You need a power source, wires, and a component like a bulb or buzzer. If the loop is broken, the circuit stops.",
        },
        {
          type: "list",
          title: "Circuit parts",
          items: ["Battery", "Wires", "Load (LED or motor)"],
        },
      ],
    },
    "LED Projects": {
      intro:
        "LEDs are tiny lights that are easy to use in beginner projects.",
      blocks: [
        { type: "heading", text: "LED Projects" },
        {
          type: "paragraph",
          text: "Remember that LEDs have a positive and negative side. Connect them correctly to light them up.",
        },
        {
          type: "list",
          title: "LED tips",
          items: ["Long leg is positive", "Use a resistor", "Test before final build"],
        },
      ],
    },
    "Polish & Improve": {
      intro:
        "Good makers improve their projects after testing.",
      blocks: [
        { type: "heading", text: "Polish & Improve" },
        {
          type: "paragraph",
          text: "Check what works, fix what doesn't, and make the design stronger or easier to use.",
        },
        {
          type: "list",
          title: "Improve it",
          items: ["Test with users", "Fix weak points", "Simplify steps"],
        },
      ],
    },
    "Write a Build Guide": {
      intro:
        "A build guide helps others recreate your project.",
      blocks: [
        { type: "heading", text: "Write a Build Guide" },
        {
          type: "paragraph",
          text: "List materials, show steps clearly, and include tips you learned along the way.",
        },
        {
          type: "list",
          title: "Guide essentials",
          items: ["Materials list", "Step-by-step photos", "Troubleshooting tips"],
        },
      ],
    },
    "Cardboard Engineering": {
      intro:
        "Cardboard is strong, light, and great for prototypes.",
      blocks: [
        { type: "heading", text: "Cardboard Engineering" },
        {
          type: "paragraph",
          text: "Score fold lines, use tabs, and layer pieces for strength.",
        },
        {
          type: "list",
          title: "Build tips",
          items: ["Score before folding", "Use tabs and slots", "Reinforce weak points"],
        },
      ],
    },
    "Upcycling Ideas": {
      intro:
        "Upcycling turns old items into new projects.",
      blocks: [
        { type: "heading", text: "Upcycling Ideas" },
        {
          type: "paragraph",
          text: "Reusing materials saves money and reduces waste. Think about new uses for bottles, boxes, and fabric.",
        },
        {
          type: "list",
          title: "Try this",
          items: ["Bottle planters", "Box organizers", "Fabric patchwork"],
        },
      ],
    },
    "Simple Machines": {
      intro:
        "Simple machines make work easier by changing force or direction.",
      blocks: [
        { type: "heading", text: "Simple Machines" },
        {
          type: "paragraph",
          text: "Levers, pulleys, and wheels are common simple machines used in everyday tools.",
        },
        {
          type: "list",
          title: "Types",
          items: ["Lever", "Pulley", "Wheel and axle", "Inclined plane"],
        },
      ],
    },
    "Moving Parts": {
      intro:
        "Moving parts add motion to your builds.",
      blocks: [
        { type: "heading", text: "Moving Parts" },
        {
          type: "paragraph",
          text: "Use joints, axles, and linkages to create motion like spinning, sliding, or lifting.",
        },
        {
          type: "list",
          title: "Motion ideas",
          items: ["Spin a wheel", "Slide a panel", "Lift a lever"],
        },
      ],
    },
    "Paper Prototypes": {
      intro:
        "Paper prototypes help you test ideas quickly and cheaply.",
      blocks: [
        { type: "heading", text: "Paper Prototypes" },
        {
          type: "paragraph",
          text: "Sketch and cut paper models to test size, shape, and flow before building with stronger materials.",
        },
        {
          type: "list",
          title: "Prototype steps",
          items: ["Sketch", "Cut and fold", "Test and revise"],
        },
      ],
    },
    "Test and Iterate": {
      intro:
        "Iteration means you improve your project through repeated testing.",
      blocks: [
        { type: "heading", text: "Test and Iterate" },
        {
          type: "paragraph",
          text: "Try your build, spot what fails, and redesign. Each cycle makes it better.",
        },
        {
          type: "list",
          title: "Iteration loop",
          items: ["Test", "Find issues", "Improve", "Test again"],
        },
      ],
    },
    "Roles & Collaboration": {
      intro:
        "Team projects work best when everyone has a role.",
      blocks: [
        { type: "heading", text: "Roles & Collaboration" },
        {
          type: "paragraph",
          text: "Assign roles like designer, builder, tester, and presenter to stay organized.",
        },
        {
          type: "list",
          title: "Common roles",
          items: ["Designer", "Builder", "Tester", "Presenter"],
        },
      ],
    },
    "Present Your Build": {
      intro:
        "Presentations show your idea, process, and results.",
      blocks: [
        { type: "heading", text: "Present Your Build" },
        {
          type: "paragraph",
          text: "Explain the problem, show how your design works, and share what you learned.",
        },
        {
          type: "list",
          title: "Presentation checklist",
          items: ["Problem and goal", "How it works", "What you would improve"],
        },
      ],
    },
  },
};
