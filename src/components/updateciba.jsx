import { Button, TextInput,JsonInput, Group, Card, Center,Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from '@mantine/notifications';
import { IconAlertCircle } from "@tabler/icons-react";
import { IconFaceId, IconFaceIdError, IconWoman } from "@tabler/icons-react";
import axios from 'axios';
import { useEffect } from "react";



function UpdateCiba(){
    let hostname = sessionStorage.getItem("hostname");
    let Tenant = sessionStorage.getItem("tenant");
    let client_id = sessionStorage.getItem('client_id');
    let client_secret = sessionStorage.getItem('client_secret');
    let accessToken = sessionStorage.getItem("access_token");
   


    const form43 = useForm({
        initialValues: { cibaListener:'https://api.bz9.net/callback_url',CBPayload:'{\n            "urn:hid:scim:api:idp:2.0:UserAttribute": {\n            "attributes": [\n             {\n                "name": "ATR_CIBACB",\n                "value": "https://api.bz9.net/callback_url"\n              }\n            ]\n          }\n        }' },
      });

      function updatePay(){
        form43.values.CBPayload = '{\n            "urn:hid:scim:api:idp:2.0:UserAttribute": {\n            "attributes": [\n             {\n                "name": "ATR_CIBACB",\n                "value": "'+form43.values.cibaListener+'"\n              }\n            ]\n          }\n        }'
      }
      if(accessToken==null){
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
<>
<div id="alertmsg">{AlertMsg}</div>
<br/>

<Card>
    <Center><h3>Update CIBA Listener</h3></Center>
<TextInput label='CIBA Listener' placeholder="CIBA Callback URL" {...form43.getInputProps('cibaListener')}></TextInput>
<JsonInput
            label="Payload"
            placeholder="JSON Payload"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={4}
            {...form43.getInputProps('CBPayload')}>

          </JsonInput>

          <br/>
          <Center>
          <Group>

         <Button onClick={updatePay()}>Update Payload</Button>
<Button onClick={()=>{

    
notifications.show({
    id: 'load-data',
    loading: true,
    title: 'CIBA Listener',
    message: 'trying to update CIBA Listener Attribute',
    autoClose: false,
    withCloseButton: false,
  });
  axios.post('https://api.bz9.net/updateCB', {
    access_token: accessToken,
    hostname: hostname,
    tenant: Tenant,
    client_id: client_id,
    cbPayload: form43.values.CBPayload,
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }
  ).then(function (response) {
    const resp = response.data;
    document.getElementById("resbody").value = JSON.stringify(resp);

    notifications.update({
      id: 'load-data',
      color: 'green',
      title: 'Success!',
      message: "CIBA CB URL Updated successfully.",
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
      document.getElementById("resbody").value = 'Error: ' + JSON.stringify(error.message);
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


}}>Update CIBA Listener</Button>

 </Group>
 </Center>
<br/>
<JsonInput
            label="Response Body"
            placeholder="JSON Payload"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={4}
            id="resbody">

          </JsonInput>
          </Card>
          </>

    );
}


export default UpdateCiba;