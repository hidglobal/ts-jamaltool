
import { Text, Button, Group, Card,Grid, Badge, Center} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import {  IconFaceIdError, IconFaceId, IconUserCircle,IconAlertCircle } from '@tabler/icons-react';
import { useState,useEffect } from 'react';
import { Alert } from '@mantine/core';
let userList = [];

function ViewUsers(){
    const [usersList,setUsers] = useState([]);
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
    const fetch = async () => {
        await axios.post('https://api.bz9.net/users',{
        access_token:AccessToken?.replace(/(?:\\[rn]|[\r\n]+)+/g, ""),
        hostname:hostname,
        tenant:tenant,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    ).then(function(response){
       userList = response.data;
        //console.log(userList);
      console.log(userList.map((user,id)=><div username={user.userName} key={user.id}></div>))
        setUsers(userList);
        
        notifications.update({
            id: 'load-data',
            color: 'green',
            title: 'Success!',
            message: "Users fetched successfully.",
            icon: <IconFaceId size="1rem" />,
            autoClose: 2000,
           }); 
    }).catch(function(error){
    
        if (error.response) {
         // The request was made and the server responded with a status code
         // that falls out of the range of 2xx
         //document.getElementById("status").innerHTML = JSON.stringify(error.response.data);
         //document.getElementById("status").innerHTML = JSON.stringify(error.response.status);
    
        // document.getElementById("status").innerHTML = error.response.headers;
        } else if (error.request) {
         // The request was made but no response was received
         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
         // http.ClientRequest in node.js
         notifications.update({
           id: 'load-data',
           color: 'red',
           title: 'Error!',
           message: "The request was made but no response was received",
           icon: <IconFaceIdError size="1rem" />,
           autoClose: 2000,
          }); 
         //document.getElementById("status").innerHTML = JSON.stringify(error.request);
        } else {
         // Something happened in setting up the request that triggered an Error
        //document.getElementById("status").innerHTML ='Error: '+ JSON.stringify(error.message);
        //document.getElementById("status").innerHTML = "Error!";
        notifications.update({
         id: 'load-data',
         color: 'red',
         title: 'Error!',
         message: "Something happened in setting up the request that triggered an Error!",
         icon: <IconFaceIdError size="1rem" />,
         autoClose: 2000,
        }); 
       }
       
       
     });
    }; 
              
     useEffect(() => {
        
     }, []);
     if(AccessToken==null){
      var AlertMsg = <Center>
         <Card>
       <Alert icon={<IconAlertCircle size="1rem" />} title="Authentication" color="orange">
       Please authenticate to HID API endpoint on <a href="/authentication">this link</a>.
       </Alert>
         </Card>
       </Center>
       }else{
       var AlertMsg = '';
       }
    return (
<div>
<div id="alertmsg">{AlertMsg}</div>
<br/>

<Grid grow gutter="sm">
                {usersList.map((user,id)=>  <Grid.Col span={4}><Card shadow="sm" padding="lg" radius="md" withBorder key={id}><IconUserCircle /><Group position="apart" spacing="xs">{user.displayName}<Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>ID:{user.id}</Badge></Group><Badge>{user.title}</Badge><br/>{user.userName}</Card></Grid.Col>)}
                </Grid>
                <br/>
                <Center>
            <Button onClick={()=>{
   
   notifications.show({
    id: 'load-data',
    loading: true,
    title: 'Users',
    message: 'Loading Users..',
    autoClose: false,
    withCloseButton: false,
  });
fetch();

 }}>Load users</Button>
</Center>

            </div>
      );
}


export default ViewUsers;
