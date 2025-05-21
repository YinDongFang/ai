import Assistant from "./assistant.svg";
import User from "./user.svg";

export const Avatar = {
  Assistant: function AssistantAvatar() {
    return <img src={Assistant} alt="assistant" />;
  },
  User: function UserAvatar() {
    return <img src={User} alt="user" />;
  },
};
