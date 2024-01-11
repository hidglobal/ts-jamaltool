
import { Text,TextInput, Button,JsonInput, Card,Grid, Center} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconFaceIdError, IconFaceId } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';


function GetDevice(){
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
  const form9 = useForm({
    initialValues:{
  access_token:AccessToken,
  deviceID:'',
        },
});

const navigate = useNavigate();
if(AccessToken===null){
  
    setTimeout(()=>{
      navigate('/authentication')
    },2000);
  
return (
<>
<Center>

  <Card>
<Card.Section withBorder inheritPadding py="xs">
  <Text>Authentication</Text>
</Card.Section>
<Text>Authenticate with the API end point first, Please wait until we redirect you in seconds.</Text>
  </Card>
</Center>

</>

);
}else{

    return (
<div>
<Grid grow gutter="sm">
</Grid>
<Card>
<Center>
<h3>Get a device</h3>
</Center>
<TextInput label="Device ID" placeholder='Device ID' {...form9.getInputProps('deviceID')} />
<JsonInput
 label="Response"
 placeholder="JSON Response"
 validationError="Invalid JSON"
 formatOnBlur
 autosize
 minRows={4}
 id="resBody"
>
</JsonInput>
                <br/>
                <Center>
            <Button onClick={()=>{
  
   notifications.show({
    id: 'load-data',
    loading: true,
    title: 'Devices',
    message: 'trying to get a known device',
    autoClose: false,
    withCloseButton: false,
  });
  axios.post('https://api.bz9.net/getdevice',{
    access_token:AccessToken,
    hostname:hostname,
    tenant:tenant,
    deviceID:form9.values.deviceID,
}, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
}
).then(function(response){
    const resp = response.data;
    document.getElementById("resBody").value = JSON.stringify(resp);
    
    notifications.update({
        id: 'load-data',
        color: 'green',
        title: 'Success!',
        message: "Device creation payload sent successfully.",
        icon: <IconFaceId size="1rem" />,
        autoClose: 2000,
       }); 
}).catch(function(error){

    if (error.response) {

    
    } else if (error.request) {
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
    document.getElementById("resBody").value ='Error: '+ JSON.stringify(error.message);
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

 }}>Get a known device</Button>
</Center>
</Card>
            </div>
      );
}
}

export default GetDevice;
