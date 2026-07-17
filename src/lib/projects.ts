import havenCover from '../assets/project-media/sf/haven-cover.png';
import sfMap from '../assets/project-media/sf/sf-map.mov';
import sfChat from '../assets/project-media/sf/sf-chat.mov';
import piqueCover from '../assets/project-media/pique/pique-cover.png';
import aiStyling from '../assets/project-media/pique/ai-styling.mp4';
import canvasEditor from '../assets/project-media/pique/canvas-editor-pique.mp4';
import imgStorage from '../assets/project-media/pique/image-storage-pique.mp4';
import piquePosts from '../assets/project-media/pique/posts-pique.mp4';
import lcCover from '../assets/project-media/lc/lc-cover.png';
import lcForm from '../assets/project-media/lc/lc-form.png';
import lcResult from '../assets/project-media/lc/lc-result.png';
import foundCover from '../assets/project-media/found/found-cover.png';
import foundApp from '../assets/project-media/found/found-app.png';

export type ProjectPlatform = "web" | "mobile" | "desktop" | "other";

export type ProjectFeature = {
  /** Optional subheading for this feature. */
  heading?: string;
  body: string[];
  /** Image or video URL. Use .mp4/.webm for video. */
  media?: string;
  mediaType?: "image" | "video";
  mediaCaption?: string;
  /** Side the media sits on when shown next to text. Defaults to "left". */
  mediaSide?: "left" | "right";
  /** Override the media frame aspect ratio. Defaults to the project's platform. */
  mediaAspect?: "mobile" | "web" | "desktop" | "square";
};

export type ProjectSection = {
  heading: string;
  body: string[];
  image?: string;
  imageCaption?: string;
  /** Optional list of features rendered as media + text rows under this section. */
  features?: ProjectFeature[];
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  blurb: string;
  /** Form factor — drives default feature media dimensions (mobile = iPhone-ish, etc.). */
  platform?: ProjectPlatform;
  /** Intro paragraphs shown at the top of the detail page. */
  description: string[];
  /** Main cover image (also used on the projects card). */
  image: string;
  stack: string[];
  link?: string;
  githubRepo?: string;
  /** Optional extra sections rendered after the intro — each can include a subheader, paragraphs, and an image. */
  sections?: ProjectSection[];
  /** Optional gallery of additional images shown at the bottom of the detail page. */
  gallery?: { src: string; caption?: string }[];
};

// Replace `image` URLs with your own (drop files in src/assets and import them).
export const projects: Project[] = [
  {
    id: "shelter-flow",
    title: "ShelterFlow",
    tag: "Mobile App",
    year: "2026",
    githubRepo: "https://github.com/gracematsuoka/claude-hackathon",
    blurb:
      "An AI-powered shelter finder that helps unhoused people get matched to the right support fast.",
    description: [
      "ShelterFlow helps people facing homelessness quickly find the right shelter or support option based on their needs.",
      "The app combines an AI chatbot that gathers key details like age, gender, and language with a live map of nearby shelters and availability so users can move from intake to action faster.",
    ],
    image: havenCover,
    stack: ["TypeScript", "Next.js", "Express.js", "Expo", "Mapbox", "Google Places", "OpenAI", "Bland.ai"],
    sections: [
      {
        heading: "The problem",
        body: [
          "My teammates Scott and Ezra met an unhoused man from Cameroon who only spoke French. After buying him dinner and a toothbrush, they used Google Translate to determine his needs. However, they had to call four different homeless shelters to find a place for the man to stay.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "When someone reaches out to ShelterFlow, the AI chatbot collects the details needed to understand their situation and match them to the most appropriate shelter or service.",
          "From there, the app shows a map of nearby shelters with live availability so the user or advocate can quickly choose the best next step.",
        ],
        features: [
          {
            heading: "AI call dispatch",
            body: [
              "The chatbot takes in details such as age, gender, and language, then uses that context to narrow down the best shelter match for the user's needs. Bland.ai is then used to dispatch phone calls to shelters to check for availablility and necessary details.",
            ],
            media: sfChat,
            mediaType: "video",
            mediaSide: "right",
            mediaAspect: "mobile"
          },
          {
            heading: "Nearby shelter map",
            body: [
              "A map view surfaces shelters near the user and highlights availability, making it easier to compare options and find an open beds quickly. The data is pulled from any recent data from calls to the shelters.",
            ],
            media: sfMap,
            mediaType: "video",
            mediaSide: "left",
            mediaAspect: "mobile"
          },
        ],
      },
    ],
  },
  {
    id: "pique",
    title: "Pique",
    tag: "Web Application",
    year: "2025",
    blurb:
      "A social media and creative application for users who want to digitize their closet, share their creativity with others, or seek inspiration.",
    description: [
      "I built this application to create a social media platform specifically for those who love fashion or want to seek styling help and to challenge myself to build a full-stack project from the ground up with a hybrid architecture between a Dockerized Flask microservice for AI image processing and a MERN tech stack for the core plateform",
    ],
    githubRepo: "https://github.com/gracematsuoka/PIQUE",
    image: piqueCover,
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Python Microservice (Flask)"],
    sections: [
      {
        heading: "The problem",
        body: [
          "The idea stemmed from constantly wasting time standing in front of my closet and not being able to choose an outfit. I wanted to build a website that would allow me to visualize my outfits online, receive styling help, and browse various outfit ideas.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Each workspace generates a symmetric key on the client. Documents are encrypted before they leave the browser, and the relay server only stores opaque blobs.",
        ],
        features: [
          {
            heading: "AI styling",
            body: [
              "Integrated generative AI styling, translating user prompts and wardrobe data into realistic outfit mockups with interactive outfit results allowing users to see outfit metadata right away.",
            ],
            media: aiStyling,
            mediaType: "video",
            mediaSide: "left",
            mediaAspect: "desktop"
          },
          {
            heading: "Image processing and storage",
            body: [
              "• AI-powered image processing microservice (Rembg),", "• Implemented Jimp to detect and remove excess 'white-space' from images", "• Integrated Cloudflare Images for secure, performant image storage", "• Database of pre-processed images to easily add to closet/wishlist", "• Item organization with dynamic tagging and filtering system",
            ],
            media: imgStorage,
            mediaType: "video",
            mediaSide: "right",
            mediaAspect: "desktop"
          },
          {
            heading: "Canvas editor",
            body: [
              "Interactive canvas editor for users to create outfits using Fabric.js.",
            ],
            media: canvasEditor,
            mediaType: "video",
            mediaSide: "left",
            mediaAspect: "desktop"
          },
          {
            heading: "Dynamic posts and saving",
            body: [
              "View outfit item metadata by clicking the item. User interaction with liking and saving posts to boards.",
            ],
            media: piquePosts,
            mediaType: "video",
            mediaSide: "right",
            mediaAspect: "desktop"
          },
        ],
      },
    ],
  },
  {
    id: "lifecrash",
    title: "LifeCrash",
    tag: "Prediction Tool",
    year: "2025",
    blurb:
      'Using real user data to predict your next "life crash".',
    description: [
      "LifeCrash uses a Random Forest Model to process past data sets regarding people's different life choices (education, career, etc.) with their life outcomes.",
    ],
    githubRepo: "https://github.com/gracematsuoka/LifeCrash",
    image: lcCover,
    stack: ["Python"],
    sections: [
      {
        heading: "The problem",
        body: [
          'Most people will experience burnout or a "life crash" at least once in their life, LifeCrash uses real-time data to predict when a "life crash" might happen based off of their current lifestyle.',
        ],
        features: [
          {
            heading: "Data collection",
            body: [
              "A user fills out a form, answering questions about their current lifestyle from education background to fitness levels.",
            ],
            media: lcForm,
            mediaType: "image",
            mediaSide: "left",
            mediaAspect: "desktop"
          },
          {
            heading: "Accurate predication",
            body: [
              "The tool displays the user's predicted age at which they will experience burnout and the intensity of it. AI-generated steps to take to prevent their crisis are also listed to help the user avoid a crash.",
            ],
            media: lcResult,
            mediaType: "image",
            mediaSide: "right",
            mediaAspect: "desktop"
          },
        ],
      },
    ],
  },
  {
    id: "found",
    title: "Found",
    tag: "Mobile App",
    year: "2024",
    githubRepo: "https://github.com/Scott-Fukuda/Found-Backend-App",
    blurb:
      "A virtual lost and found, allowing users to securely find and post items that have been misplaced.",
    description: [
      "This app was created for a hackathon where I contributed as a backend developer. Through this project we wanted to address a real problem that we have experienced on campus.",
    ],
    image: foundCover,
    stack: ["Python"],
    sections: [
      {
        heading: "The problem",
        body: [
          "Everyday students lose items on campus and it can take time for items to reach the campus lost and found and for students to find which lost and found has their item. Found makes retrieving and finding misplaced items easy and secure.",
        ],
        features: [
          {
            heading: "Virtual lost and found",
            body: [
              "Users fill out a form for items they've found, filling out information such as images, location, description, and contact information. When a user loses an item they will first breifly describe the lost item such as the color and location and a list of relevant items will be returned, ensuring users only access items that are relevant to them.",
            ],
            media: foundApp,
            mediaType: "image",
            mediaSide: "left",
            mediaAspect: "mobile"
          },
        ],
      },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
