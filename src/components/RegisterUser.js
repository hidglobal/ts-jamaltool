
import { Text,TextInput, Button, Group, Box,Center,Select,JsonInput} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff } from '@tabler/icons-react';

function RegisterUser(){
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
    const form2 = useForm({
        initialValues:{
			access_token:AccessToken,
            Title: '',
            First_Name: '',
            Family_Name:'',
            Email:'',
            Phone_Number:''
        },
    });
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
		  <TextInput label="Access Token" placeholder="Token" {...form2.getInputProps('access_token')} />
          <TextInput label="Title" placeholder="Title" {...form2.getInputProps('Title')} />
          <TextInput mt="md" label="Family Name" placeholder="Family Name" {...form2.getInputProps('Family_Name')} />
          <TextInput mt="md" label="First Name" placeholder="First Name" {...form2.getInputProps('First_Name')} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form2.getInputProps('Email')} />
          <TextInput mt="md" label="Phone Number" placeholder="Phone Number" {...form2.getInputProps('Phone_Number')} />

          <Group position="center" mt="xl">
            <Button
              variant="outline"
              onClick={()=> {
					let usertitle = form2.values.Title;
					let userfamily = form2.values.Family_Name;
					let userfirst = form2.values.First_Name;
					let useremail = form2.values.Email;
					let userphone = form2.values.Phone_Number;
					notifications.show({
						id: 'load-data',
						loading: true,
						title: 'Authorization',
						message: 'Authenticating with Access token to '+hostname,
						autoClose: false,
						withCloseButton: false,
					  });
					axios.post('https://api.bz9.net/register', {
						Title: usertitle,   
						familyName: userfamily,
						firstName: userfirst,
						hostname: hostname,
						tenant: tenant,
						access_token:AccessToken.replace(/(\r?\n|\r)/gm,""),
						email:useremail,
						Phone:userphone,
					  }, {
						headers: {
						  'Content-Type': 'application/x-www-form-urlencoded',
						}
					  }
					  ).then(function(response){
					  {document.getElementById("resBody").value=JSON.stringify(response.data);}
					  document.getElementById("status").style.color = "green";
		
						  notifications.update({
							id: 'load-data',
							color: 'teal',
							title: 'Success!',
							message: response?.data.replace(/"/gm,""),
							icon: <IconCheck size="1rem" />,
							autoClose:2000
						   // autoClose: 2000,
						  })
						  
						  document.getElementById("status").innerHTML = response?.data.replace(/"/gm,"")
						
					  
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
					   document.getElementById("status").innerHTML = "Error!";
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

			}}
            >
            Create a new user
             
            </Button>
            <Text fz="xs">All data is saved on your browser session and we don't keep any copy of your data.</Text>
          </Group>
		  <br/>
		  <Text id="status" c="green"></Text> 
         <JsonInput
			label="Response Body"
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

export default RegisterUser;
