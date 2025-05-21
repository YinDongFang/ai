import Assistant from "./assistant.svg";
import User from "./user.svg";

export const Avatar = {
  Assistant: function AssistantAvatar() {
    return <img className="w-full h-full bg-[#95bdd6]" src={Assistant} alt="assistant" />;
  },
  User: function UserAvatar() {
    return <img className="w-full h-full" src={User} alt="user" />;
  },
};
