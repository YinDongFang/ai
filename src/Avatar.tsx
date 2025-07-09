import Assistant from "./assistant.svg";
import User from "./user.svg";
import Api from "./api.svg";

export const Avatar = {
  Assistant: function AssistantAvatar() {
    return <img className="w-full h-full bg-[#95bdd6]" src={Assistant} alt="assistant" />;
  },
  User: function UserAvatar() {
    return <img className="w-full h-full" src={User} alt="user" />;
  },
  Api: function ApiAvatar() {
    return <img className="w-full h-full" src={Api} alt="api" />;
  },
};
