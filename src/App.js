import React from "react";
import {MantineProvider,AppShell,Navbar,Text,Footer,MediaQuery,Button,Burger,Header,useMantineTheme, Box, Paper } from '@mantine/core';
import { useState } from 'react';
import { Group,ActionIcon,Grid} from '@mantine/core';
import { IconSun, IconMoonStars,IconBrandGithubFilled } from '@tabler/icons-react';
import './css/App.css'
import Navlinks from "./components/Nav.jsx";
import { Outlet } from "react-router-dom";
import { Notifications } from '@mantine/notifications';

export default function App() {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    //let colorSession = sessionStorage.setItem('themeColor');
    const [color,setColor] = useState(localStorage.getItem('themeColor'));
    if(color === null){
      setColor('dark');
    }
    function toggleColorScheme(){
          if(color==='light'){
            setColor('dark');
            localStorage.setItem('themeColor', 'dark');
          }else{
            setColor('light');
            localStorage.setItem('themeColor','light');
          }
    }
    return (
     
    <MantineProvider theme={{colorScheme: color}} withGlobalStyles withNormalizeCSS>
                <Notifications limit={4}/>

     <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Navlinks></Navlinks>
        </Navbar>
      }
      
      header={
        <Header height={{ base: 50, md: 70 }} p="md" style={{padding:'0rem'}}>
          <div style={{ alignItems: 'center', height: '100%' }}>
          <Group sx={{ height: '100%' }} px={30} position="apart">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            

       <svg className={color === 'dark' ? 'dark' : 'light'} xmlns="http://www.w3.org/2000/svg" width="75" height="31">
        <path d="M71.124.17H3.894C2 .17.495 1.68.495 3.587v23.848c0 1.906 1.504 3.418 3.398 3.418h67.23c1.895 0 3.395-1.512 3.395-3.418V3.587C74.6 1.68 73.02.17 71.124.17zm-42.027 23.2h-7.902v-6.758h-5.293v6.758h-7.9V7.642H15.9v6.754h5.293V7.642h7.902V23.38zm12.164 0h-7.898V7.642h7.898V23.38zm16.906.078h-12.88V7.642h12.88c4.504 0 8.6 3.418 8.6 7.95 0 4.45-4.105 7.867-8.6 7.867zM52.7 8.902V21.86c3.242 0 5.137.555 5.137-6.437 0-7.074-2.2-6.52-5.137-6.52zm0 0"></path>
      </svg>

            <Group >
	<Button component="a" size="xs" variant="light" target="_blank" href="https://github.com/hidglobal/ts-jamaltool">
<IconBrandGithubFilled></IconBrandGithubFilled>
</Button>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {color === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
      </ActionIcon>
    </Group>
  </Group>
           
          </div>
      

        </Header>
      }
    >
       <Outlet />
    <Footer><Paper>© 2024 HID Global Corporation, part of ASSA ABLOY. All trademarks are owned by HID Global Corporation, ASSA ABLOY and/or their respective owners and may not be used without permission. All rights reserved. <br/>Open source project, developed by Mohamed Jamal | <a href="https://raw.githubusercontent.com/hidglobal/ts-jamaltool/main/License">License</a> | <a href="https://github.com/hidglobal/ts-jamaltool" target="_blank">Github Repo</a></Paper> </Footer>
    </AppShell>
        </MantineProvider>
      
      );
};
