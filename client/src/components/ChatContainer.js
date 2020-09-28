import React from "react";
import { ChatCarts } from "./ChatCarts";

export const ChatContainer = () => {
  return (
    <div>
      <ChatCarts name="Mbah Enow" msg1="Hello there! May I ask a favor?" img="https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"/>
      <ChatCarts name="Ea Tipene" style="#efefef" flag="1" msg1="Hello dear Ea!" msg2="Sorry for the inconviences. I am..." img="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/117764802/original/c15bb90e2e2e873c6415005bc3b7a64e68c867ad/make-your-own-memoji.png"/>
      <ChatCarts name="Vicente de la Cruz" msg1="Hello dear Ea!" msg2="Sorry for the inconviences. I am..." img="https://pbs.twimg.com/media/DnYQCXOX4AIzY6D.jpg"/>
      <div class="hr-sect">Expired Chats</div>
      <ChatCarts name="Vicente de la Cruz" msg1="Hello dear Ea!" msg2="Sorry for the inconviences. I am..." img="https://pbs.twimg.com/media/DnYQCXOX4AIzY6D.jpg"/>
      <ChatCarts name="Vicente de la Cruz" msg1="Hello dear Ea!" msg2="Sorry for the inconviences. I am..." img="https://pbs.twimg.com/media/DnYQCXOX4AIzY6D.jpg"/>
      <ChatCarts name="Vicente de la Cruz" msg1="Hello dear Ea!" msg2="Sorry for the inconviences. I am..." img="https://pbs.twimg.com/media/DnYQCXOX4AIzY6D.jpg"/>
    </div>
  );
};
