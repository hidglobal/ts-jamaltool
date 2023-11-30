
import { Text,TextInput, Button, Group, Box, Card,Grid, Chip, Badge, Center,PasswordInput, JsonInput} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId,IconLock, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

function CreatePasswordAuth(){
    const [visible, { toggle }] = useDisclosure(false);
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
    const form3 = useForm({
        initialValues:{
			access_token:AccessToken,
            policy:'AT_STDPWD',
            Email: '',
            Password: '',
        },
    });
    const fetch = async () => {
        await axios.post('http://localhost:4000/createAuthenticator',{
        access_token:AccessToken.replace(/(\r?\n|\r)/gm,""),
        hostname:hostname,
        tenant:tenant,
        Email:form3.values.Email,
        Password:form3.values.Password,
        policy:form3.values.policy,
        
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
    }
    ).then(function(response){
       
        
        notifications.update({
            id: 'load-data',
            color: 'green',
            title: 'Password Authenticator',
            message: JSON.stringify(response.data.replace(/(\r?\n|\r)/gm,"")),
            icon: <IconFaceId size="1rem" />,
            autoClose: 2000,
           }); 
           document.getElementById('resBody').innerHTML = response;
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
        document.getElementById('resBody').innerHTML = error;
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
        <Center><h3>Create a password authenticator.</h3></Center>
          <TextInput label="Access Token" placeholder="Token" {...form3.getInputProps('access_token')} />
          <TextInput label="Policy" placeholder='AT_STDPWD' {...form3.getInputProps('policy')}/>
          <TextInput label="Email" placeholder="Email" {...form3.getInputProps('Email')} />
          <PasswordInput mt="md" label="Password" placeholder="Password"  
          visible={visible}
          onVisibilityChange={toggle}
          {...form3.getInputProps('Password')}
          icon={<IconLock size="1rem" />}
          />
        
                <br/>
                <Center>
            <Button onClick={()=>{
   
   notifications.show({
    id: 'load-data',
    loading: true,
    title: 'Authenticator',
    message: 'Creating Password Authenticator..',
    autoClose: false,
    withCloseButton: false,
  });
fetch();

 }}>Create Password Authenticator</Button>
</Center>

</Box>
  
      );

}

export default CreatePasswordAuth;
