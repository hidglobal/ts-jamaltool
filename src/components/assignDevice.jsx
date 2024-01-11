
import { Text, TextInput, Button, JsonInput, Group, Card, Grid, Center } from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconFaceIdError, IconFaceId } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';


function AssignDevice() {
  let AccessToken = sessionStorage.getItem("access_token");
  let hostname = sessionStorage.getItem("hostname");
  let tenant = sessionStorage.getItem("tenant");
  const form19 = useForm({
    initialValues: {
      access_token: AccessToken,
      deviceId: '',
      ownerId: '',
      cPayload: '{\n        \"schemas\": [\"urn:hid:scim:api:idp:2.0:Device\"],\n        \"status\": {\n            \"status\": \"ACTIVE\",\n            \"active\": true\n        },\n        \"owner\": {\n            \"value\": \"13128\" \n       }\n    }'
    }
  });

  function updatePayload(){
    form19.values.cPayload = '{\n        \"schemas\": [\"urn:hid:scim:api:idp:2.0:Device\"],\n        \"status\": {\n            \"status\": \"ACTIVE\",\n            \"active\": true\n        },\n        \"owner\": {\n            \"value\": \"'+form19.values.ownerId+'\" \n       }\n    }'
  }
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
          <h3>Assign device to a user.</h3>
        </Center>
        <TextInput label='Device ID' placeholder='Device ID' {...form19.getInputProps('deviceId')} />
        <TextInput label='User ID' placeholder='User Internal ID' {...form19.getInputProps('ownerId')} />
        <JsonInput
          label="Payload"
          placeholder="JSON request"
          validationError="Invalid JSON"
          formatOnBlur
          autosize
          minRows={4}
          id="reqBody"

          {...form19.getInputProps('cPayload')}
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
        <br />
        <Center>
          <Group>
            <Button onClick={updatePayload()}>Update Payload</Button>
          
          <Button onClick={() => {

            notifications.show({
              id: 'load-data',
              loading: true,
              title: 'Devices',
              message: 'trying to assign a device to a user.',
              autoClose: false,
              withCloseButton: false,
            });
            axios.post('https://api.bz9.net/assigndevice', {
              access_token: AccessToken,
              hostname: hostname,
              tenant: tenant,
              deviceID: form19.values.deviceId,
              cPayload: form19.values.cPayload,
            }, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }
            ).then(function (response) {
              const resp = response.data;
              document.getElementById("resBody").value = JSON.stringify(resp);

              notifications.update({
                id: 'load-data',
                color: 'green',
                title: 'Success!',
                message: "Device binding payload sent successfully.",
                icon: <IconFaceId size="1rem" />,
                autoClose: 2000,
              });
            }).catch(function (error) {

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
                document.getElementById("resBody").value = 'Error: ' + JSON.stringify(error.message);
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

          }}>Assign device</Button>
          </Group>
        </Center>
      </Card>
    </div>
  );
        }
}

export default AssignDevice;
