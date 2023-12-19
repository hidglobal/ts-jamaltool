
import { Text,TextInput, Button, Group, Box, Card,Grid, Chip, Badge, Center,PasswordInput} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId,IconLock, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { JsonInput } from '@mantine/core';

function CreateOTPAuth(){
    const [visible, { toggle }] = useDisclosure(false);
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
    const form6 = useForm({
        initialValues:{
			access_token:AccessToken,
            policy:'AT_OTP',
            Email: '',
            Password: '',
        },
    });
 
    const fetch = async () => {
        await axios.post('https://api.bz9.net/createotpAuthenticator',{
        access_token:AccessToken.replace(/(\r?\n|\r)/gm,""),
        hostname:hostname,
        tenant:tenant,
        Email:form6.values.Email,

        
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    ).then(function(response){
        const internalId = 'Internal ID of '+ form6.values.Email;
        const payload = JSON.stringify({
            "schemas" : [
              "urn:hid:scim:api:idp:2.0:Authenticator"
            ],
            "policy" : {
              "value" : "AT_OTP"
            },
            "status" : {
              "status" : "ENABLED",
              "expiryDate" : "2040-05-15T18:15:21+00:00",
              "startDate" : "2015-05-15T18:15:21+00:00"
            },
            "owner" : {
              "value" : internalId // the internal ID of the user (!= external ID), this ID is retrieved via the Users search endpoint
            }
          });
        
        notifications.update({
            id: 'load-data',
            color: 'green',
            title: 'OTP Authenticator',
            message: "Successfully created an OTP Authenticator.",
            icon: <IconFaceId size="1rem" />,
            autoClose: 2000,
           }); 
           document.getElementById("reqBody").innerHTML = payload;
           document.getElementById("resBody").innerHTML = JSON.stringify(response.data);
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
              
    return (

<Box pos="relative" sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
      >
        <Center><h3>Create an OTP authenticator.</h3></Center>
          <TextInput label="Access Token" placeholder="Token" {...form6.getInputProps('access_token')} />
          <TextInput label="Email" placeholder="Email" {...form6.getInputProps('Email')} />
        
                <br/>
                <Center>
            <Button onClick={()=>{
   
   notifications.show({
    id: 'load-data',
    loading: true,
    title: 'Authenticator',
    message: 'Creating OTP Authenticator..',
    autoClose: false,
    withCloseButton: false,
  });
fetch();

 }}>Create OTP Authenticator</Button>
</Center>
<JsonInput
      label="Payload"
      placeholder="JSON Request Payload"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
      id="reqBody"
    />
<JsonInput
      label="JSON Response Body"
      placeholder="JSON Response Body"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
      id="resBody"
    />
</Box>
  
      );

}

export default CreateOTPAuth;
