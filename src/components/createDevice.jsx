
import { Text,TextInput, Button,JsonInput, Group, Box, Card,Grid, Chip, Badge, Center} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useState,useEffect } from 'react';
import { useForm } from '@mantine/form';

let deviceList = [];

function CreateDevice(){
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
  const form8 = useForm({
    initialValues:{
  access_token:AccessToken,
      bPayload:'{\n \"schemas\": [\"urn:hid:scim:api:idp:2.0:Device\"],\n        \"externalId\": \"myExternalId\",\n        \"type\": \"DTC_TD898a\",\n        \"status\": {\n            \"status\": \"PENDING\",\n            \"expiryDate\": \"2039-06-12T14:46:58+02:00\",\n            \"startDate\": \"2017-06-12T14:46:58+02:00\"        \n}}',
    },
});

    return (
<div>
<Grid grow gutter="sm">
</Grid>
<Card>
<Center>
<h3>Create a device</h3>
</Center>
<JsonInput
 label="Payload"
 placeholder="JSON request"
 validationError="Invalid JSON"
 formatOnBlur
 autosize
 minRows={4}
 id="reqBody"
 value='{
  "schemas": ["urn:hid:scim:api:idp:2.0:Device"],
  "externalId": "myExternalId",
  "type": "DT_TDSV4",
  "status": {
      "status": "PENDING",
      "expiryDate": "2039-06-12T14:46:58+02:00",
      "startDate": "2017-06-12T14:46:58+02:00"
  }
}'
 {...form8.getInputProps('bPayload')}
>
</JsonInput>
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
    message: 'trying to create a device',
    autoClose: false,
    withCloseButton: false,
  });
  axios.post('http://localhost:4000/createdevice',{
    access_token:AccessToken,
    hostname:hostname,
    tenant:tenant,
    bPayload:form8.values.bPayload,
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

 }}>Create device</Button>
</Center>
</Card>
            </div>
      );

}

export default CreateDevice;
