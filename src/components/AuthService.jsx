import { isNotEmpty, useForm, isEmail } from '@mantine/form';
import { PasswordInput, Text, TextInput, Button, Group, Box, Center, Select, JsonInput, LoadingOverlay } from '@mantine/core';
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
      <Center><Text>Login (Customer Domain)</Text></Center>
      <TextInput label="Host" placeholder="host" {...form.getInputProps('Host')} />


      <TextInput mt="md" label="Tenant/Security Domain" placeholder="Tenant" {...form.getInputProps('Tenant')} />
      <TextInput mt="md" label="Username" placeholder="Username" {...form.getInputProps('username')} />
      <PasswordInput mt="md" label="Password" placeholder="Password" visible={visible}
        onVisibilityChange={toggle} {...form.getInputProps('password')} icon={<IconLock size="1rem" />} />
      <TextInput mt="md" label="Client ID" placeholder="Client ID" {...form.getInputProps('client_id')} />
      <PasswordInput mt="md" label="Client Secret" placeholder="Client Secret" visible={visible}
        onVisibilityChange={toggle} {...form.getInputProps('client_secret')} icon={<IconLock size="1rem" />} />

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
              message: "You have saved the access token to the browser session successfully.",
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
              { document.getElementById("resBody").value = JSON.stringify(response.data); }
              document.getElementById("status").style.color = "green";
              {
                (!!JSON.stringify(response.data.access_token)) ? document.getElementById("status").innerText = "Access Token: " + JSON.stringify(response.data.access_token).replace(/"/g, '')
                  + "\nToken Type: " + JSON.stringify(response.data.token_type).replace(/"/g, '') + "\nExpires in: " + JSON.stringify(response.data.expires_in).replace(/"/g, '') :
                  document.getElementById("status").innerText = "Error: " + JSON.stringify(response.data.error_description).replace(/"/g, '')
              }


              sessionStorage.setItem("access_token", response.data.access_token.replace(/"/g, ''));
              var access_token = response.data.access_token;
              {
                !!JSON.stringify(response.data.access_token) ? notifications.update({
                  id: 'load-data',
                  color: 'teal',
                  title: 'Connected!',
                  message: "Successfully recieved an access token:\n " + JSON.stringify(response.data.access_token),
                  icon: <IconCheck size="1rem" />,
                  autoClose: 2000
                  // autoClose: 2000,
                }) :
                  notifications.update({
                    id: 'load-data',
                    color: 'red',
                    title: 'Authentication error!',
                    message: "Failed to get a token",
                    icon: <IconEarOff size="1rem" />,
                    autoClose: 2000,
                  })
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
              } else {
                // Something happened in setting up the request that triggered an Error
                document.getElementById("status").innerHTML = 'Error: ' + JSON.stringify(error.message);
                notifications.update({
                  id: 'load-data',
                  color: 'red',
                  title: 'Error!',
                  message: "Something happened in setting up the request that triggered an Error!",
                  icon: <IconFaceIdError size="1rem" />,
                  autoClose: 2000,
                });
              }


            }) :
              notifications.update({
                id: 'load-data',
                color: 'red',
                title: 'Error!',
                message: "Hooray!! Empty Host lol",
                icon: <IconFaceIdError size="1rem" />,
                autoClose: 2000,
              });

          }}>Test Connection</Button>
        <Text fz="xs">All data is saved on your browser session and we don't keep any copy of your data.</Text>
      </Group>
      <br />
      {(!!JSON.stringify(sessionStorage.getItem("access_token"))) ? <Text id="status" c="red"></Text> : <Text id="status" c="green"></Text>}
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

export default AuthService;
