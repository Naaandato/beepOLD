import {Message} from "../models/message";
import {USER_LIST} from "./users";

const userList = USER_LIST;

const messageList: Message[] = [
  { user: userList[0], date: new Date() , lastMessage: 'Heyyyyyyyy'},
  { user: userList[1], date: new Date() , lastMessage: 'Yeeeeeeep'},
  { user: userList[2], date: new Date() , lastMessage: 'Yoooooooo'},
  { user: userList[3], date: new Date() , lastMessage: 'Yiiiiiii'},
];

export const MESSAGE_LIST = messageList;
