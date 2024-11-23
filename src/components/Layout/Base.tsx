import { FixedLayout, Tabbar } from "@telegram-apps/telegram-ui"
import { useState } from "react"
import { ProfileIcon, ChatIcon, RandomChatIcon, ExploreIcon } from "../Icon"

const BaseLayout = ({children}:any) => {
    const [currentTab, setCurrentTab] = useState(tabs[1].id)
    return <div>
          <FixedLayout vertical="top" style={{padding: 16}}>
            
            
          </FixedLayout>
          <div style={{overflow:"scroll", height:"100%"}}>
            {children}
          </div>
          <FixedLayout vertical="bottom" style={{padding: 16}}>
           <Tabbar>
        {tabs.map(({
            id,
            text,
            Icon
        }) => <Tabbar.Item key={id} text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
                {Icon}
          </Tabbar.Item>)}
      </Tabbar>

           
          </FixedLayout>
        </div>
}

export default BaseLayout


const tabs = [
    {
        id:1,
        text:"Explore",
        Icon:<ExploreIcon style={{height:"35px", width:"35px"}}/>
    },
    {
        id:2,
        text:"Random Chat",
        Icon:<RandomChatIcon style={{height:"35px", width:"35px"}}/>
    },
    {
        id:3,
        text:"Chat",
        Icon:<ChatIcon style={{height:"35px", width:"35px"}}/>
    },
    {
        id:4,
        text:"Profile",
        Icon:<ProfileIcon style={{height:"35px", width:"35px"}}/>
    },
]