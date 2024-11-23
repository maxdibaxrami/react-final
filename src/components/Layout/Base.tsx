import { Avatar, FixedLayout, IconButton, Title, Tabbar } from "@telegram-apps/telegram-ui"
import { useState } from "react"
import { ProfileIcon, ChatIcon, RandomChatIcon, ExploreIcon, Notfication } from "../Icon"

const BaseLayout = ({children}:any) => {
    const [currentTab, setCurrentTab] = useState(tabs[1].id)
    return <div>
          <FixedLayout  vertical="top" >
            <div className="container-topbar">
              <Avatar
                acronym="vdf"
                size={40}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
                />

                <Title
                    level="3"
                    plain
                    weight="3"
                >
                    Moll Moll
                </Title>
                
                <IconButton
                    mode="bezeled"
                    size="s"
                >
                    <Notfication style={{height:"25px", width:"25px"}}/>
                </IconButton>
            </div>
          </FixedLayout>
          <div style={{overflow:"scroll", maxHeight:"100%"}}>
            {children}
          </div>
          <FixedLayout vertical="bottom">
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