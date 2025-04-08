import { FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiFastapi,
  SiRabbitmq,
  SiRsocket,
} from "react-icons/si";

export const NextjsBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-black text-white text-xs font-medium shadow-md">
    <SiNextdotjs className="text-white" />
    Next.js
  </div>
);

export const TailwindBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-cyan-500 text-white text-xs font-medium shadow-md">
    <SiTailwindcss className="text-white" />
    Tailwind CSS
  </div>
);

export const FirebaseBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-yellow-400 text-white text-xs font-medium shadow-md">
    <SiFirebase className="text-white" />
    Firebase
  </div>
);

export const TypescriptBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-blue-600 text-white text-xs font-medium shadow-md">
    <SiTypescript className="text-white" />
    Typescript
  </div>
);

export const WebSocketBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-600 text-white text-xs font-medium shadow-md">
    <SiRsocket className="text-white" />
    WebSocket
  </div>
);

export const RabbitMQBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-orange-500 text-white text-xs font-medium shadow-md">
    <SiRabbitmq className="text-white" />
    RabbitMQ
  </div>
);

export const NodejsBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-700 text-white text-xs font-medium shadow-md">
    <FaNodeJs className="text-white" />
    Node.js
  </div>
);

export const FastAPIBadge = () => (
  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-indigo-600 text-white text-xs font-medium shadow-md">
    <SiFastapi className="text-white" />
    Python FastAPI
  </div>
);
