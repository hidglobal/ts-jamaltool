import { isNotEmpty, useForm, isEmail } from '@mantine/form';
import { PasswordInput, Text, TextInput, Button, Group, Box, Center, Select, JsonInput, Tooltip, Textarea} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLock, IconCheck, IconAlertCircle, IconFaceIdError, IconEarOff } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import axios from 'axios';
//var brain = require('brain');

function AuthService() {
  const [visible, { toggle }] = useDisclosure(false);
  const form = useForm({
    initialValues: {
      Host: sessionStorage.getItem("hostname"),
      Tenant: sessionStorage.getItem("tenant"),
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password"),
      client_id: sessionStorage.getItem("client_id"),
      client_secret: sessionStorage.getItem("client_secret"),
      grant_type: 'password'
    },
    validateInputOnChange: true
    ,
    validate: {
      Host: isNotEmpty('Enter a hostname'),
      Tenant: isNotEmpty('Enter a Tenant'),
      grant_type: isNotEmpty('Please choose a grant type'),
      client_id: isNotEmpty('Please enter a Client ID'),
      client_secret: isNotEmpty('Please enter Client Password'),
      username: isNotEmpty('Please enter a valid username'),
      password: isNotEmpty('Please enter a password'),
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
      <Center><h2>Login (Authentication Service)</h2></Center>
      <Center><Text>You can use any internet accessible (public) HID authentication product from AaaS, HID Appliance or HID AS and for private VPNs/DMZs please install these tools on your network.</Text></Center>
      <Tooltip
      label="Please enter an Internet accessible HID API Endpoint for example: auth-eu.api.hidglobal.com, auth-de.api.hidglobal.com, auth-us.api.hidglobal.com "
      color="blue"
      withArrow
      arrowPosition="center"
    >
      <TextInput label="Host" placeholder="host" {...form.getInputProps('Host')} />
</Tooltip>

      <TextInput mt="md" label="Tenant/Security Domain" placeholder="Tenant" {...form.getInputProps('Tenant')} />
      <TextInput mt="md" label="Username" placeholder="Username" {...form.getInputProps('username')} />
      <PasswordInput mt="md" label="Password" placeholder="Password" visible={visible}
        onVisibilityChange={toggle} {...form.getInputProps('password')} icon={<IconLock size="1rem" />} />
              <Tooltip
      label="Please enter an OpenID API Integration Application ID ( Client ID )"
      color="blue"
      withArrow
      arrowPosition="center"
    >
      <TextInput mt="md" label="Client ID" placeholder="Client ID" {...form.getInputProps('client_id')} />
      </Tooltip>
      <Tooltip
      label="Please enter an OpenID API Integration Application password ( Client Password )"
      color="blue"
      withArrow
      arrowPosition="center"
    >
      <PasswordInput mt="md" label="Client Secret" placeholder="Client Secret" visible={visible}
        onVisibilityChange={toggle} {...form.getInputProps('client_secret')} icon={<IconLock size="1rem" />} />
        </Tooltip>

      <Select
        label="Grant Type"
        placeholder="password"
        data={[
          { value: 'password', label: 'Password' },
          { value: 'client_credentials', label: 'Client Credentials' },
          { value: 'authorization_code', label: 'Authorization Code (not implemented yet)' },
          { value: 'refresh_token', label: 'Refresh Token (not implemented yet)' },
        ]}
        {...form.getInputProps('grant_type')}
      />
      <Group position="center" mt="xl">
        <Button
          variant="filled"
          onClick={() => {
            let hostname = form.values.Host;
            sessionStorage.setItem("hostname", hostname);
            let tenant = form.values.Tenant;
            sessionStorage.setItem("tenant", tenant);
            let grant_type = form.values.grant_type;
            sessionStorage.setItem("grant_type", grant_type);
            let username = form.values.username;
            sessionStorage.setItem("username", username);
            let password = form.values.password;
            sessionStorage.setItem("password", password);
            let client_id = form.values.client_id;
            sessionStorage.setItem("client_id", client_id);
            let client_secret = form.values.client_secret;
            sessionStorage.setItem("client_secret", client_secret);
            notifications.update({
              id: 'load-data',
              color: 'green',
              title: 'Authentication details!',
              message: "You have saved your HID Auth details to the browser session successfully.",
              icon: <IconEarOff size="1rem" />,
              autoClose: 2000,
            })
          }
          }
        >
          Save

        </Button>
        <Button variant="outline" onClick=
          {() => {

            let hostname = form.values.Host;
            sessionStorage.setItem("hostname", hostname);
            let tenant = form.values.Tenant;
            let grant_type = form.values.grant_type;
            let username = form.values.username;
            let password = form.values.password;
            let client_id = form.values.client_id;
            let client_secret = form.values.client_secret;
            notifications.show({
              id: 'load-data',
              loading: true,
              title: 'Connecting',
              message: 'Connecting to ' + hostname,
              autoClose: false,
              withCloseButton: false,
            });
            (!!hostname) ? axios.post('https://api.bz9.net/conng', {
              grant_type: grant_type,
              username: username,
              password: password,
              hostname: hostname,
              tenant: tenant,
              client_id: client_id,
              client_secret: client_secret,
            }, {
              auth: {
                username: client_id,
                password: client_secret,
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }
            ).then(function (response) {
              { document.getElementById("resBody").value = JSON.stringify(response.data); 
              const resp = response.data;
              var detail = response.data.detail;
              var statusres = response.data.status;
              if(response.data.access_token!=null){
                notifications.update({
                  id: 'load-data',
                  color: 'teal',
                  title: 'Connected!',
                  message: "Successfully recieved an access token:\n " + JSON.stringify(response.data.access_token),
                  icon: <IconCheck size="1rem" />,
                  autoClose: 2000
                  // autoClose: 2000,
                }) 
                sessionStorage.setItem("access_token", response.data.access_token?.replace(/"/g, ''));
                var response_data = JSON.stringify('Successful authentication and obtained access token of type bearer');
              }else{
                var response_data = JSON.stringify(response.data);
              }
              

              const { GoogleGenerativeAI } = require("@google/generative-ai");
              const genAI = new GoogleGenerativeAI('AIzaSyAiMimtz8xXBJYF53jqJnO10YS4qJoyBog');
              
              async function run() {      

                const model = genAI.getGenerativeModel({ model: "gemini-pro"});
              
                if(detail!=null && statusres !=null){
                  const prompt = 'Explain this HID Global Authentication API error detail : '+ detail+ ' with this status code '+statusres;
                }
                
                const prompt = 'Explain this HID Global Authentication API ' + response_data;
                document.getElementById('ai').innerHTML = 'Analysing....';
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                document.getElementById('ai').innerHTML = text;
                /*
                var msg = new SpeechSynthesisUtterance();
                msg.text = text;
                window.speechSynthesis.speak(msg);
                */
              
           
            }
              
              run();
            
            
            }
              document.getElementById("status").style.color = "green";
              {
                (!!JSON.stringify(response.data.access_token)) ? document.getElementById("status").innerText = "Access Token: " + JSON.stringify(response.data.access_token)?.replace(/"/g, '')
                  + "\nToken Type: " + JSON.stringify(response.data.token_type)?.replace(/"/g, '') + "\nExpires in: " + JSON.stringify(response.data.expires_in)?.replace(/"/g, '') :
                  document.getElementById("status").innerText = "Error: " + JSON.stringify(response.data.error_description)?.replace(/"/g, '')
              }

             
              
              


              


            }).catch(function (error) {

              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                //document.getElementById("status").innerHTML = JSON.stringify(error.response.data);
                document.getElementById("status").innerHTML = JSON.stringify(error.response.status);

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
              } 
              


            }) :
              notifications.update({
                id: 'load-data',
                color: 'red',
                title: 'Error!',
                message: "Sorry, you must provide an API end point to authenticate.",
                icon: <IconFaceIdError size="1rem" />,
                autoClose: 2000,
              });

          }}>Test Connection</Button>
        <Text fz="xs">All data is saved on your browser session and we don't keep any copy of your data.</Text>
      </Group>
      <br />
      
      <JsonInput
        label="Response Body"
        placeholder="JSON Response Body"
        validationError="Invalid JSON"
        formatOnBlur
        autosize
        minRows={4}
        id="resBody"
      />
      <Textarea id="ai" label="AI" minRows={8}>


      </Textarea>
    </Box>


  );

}

export default AuthService;
