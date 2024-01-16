
import { Text,Textarea, Button,JsonInput, Group, Box, Card,Grid, Chip, Badge, Center, TextInput} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId, IconUserCircle, IconAt } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { useForm } from '@mantine/form';

let deviceList = [];

function CreateDevice(){
	let AccessToken = sessionStorage.getItem("access_token");
	let hostname = sessionStorage.getItem("hostname");
	let tenant = sessionStorage.getItem("tenant");
  const form8 = useForm({
    initialValues:{
  access_token:AccessToken,
  device_type:'DT_TDSV4',deviceExternalId:'',
      bPayload:'{\n \"schemas\": [\"urn:hid:scim:api:idp:2.0:Device\"],\n        \"externalId\": \"myExternalId\",\n        \"type\": \"DTC_TD898a\",\n        \"status\": {\n            \"status\": \"PENDING\",\n            \"expiryDate\": \"2039-06-12T14:46:58+02:00\",\n            \"startDate\": \"2017-06-12T14:46:58+02:00\"        \n}}',
    },
});

function detChange(){
  form8.values.bPayload = '{\n    "schemas": ["urn:hid:scim:api:idp:2.0:Device"],\n    "externalId": "'+form8.values.deviceExternalId+'",\n    "type": "'+form8.values.device_type+'",\n    "status": {\n        "status": "PENDING",\n        "expiryDate": "2039-06-12T14:46:58+02:00",\n        "startDate": "2017-06-12T14:46:58+02:00"\n    }\n  }'

}

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
<Grid grow gutter="sm">
</Grid>
<div id="alertmsg">{AlertMsg}</div>
<br/>
<Card>
<Center>
<h3>Create a device</h3>
</Center>
<TextInput label='Device External ID' placeholder='You can choose the name you like for the device.' {...form8.getInputProps('deviceExternalId')}></TextInput>
<TextInput label='Device Type' placeholder='Please enter an existing device type' {...form8.getInputProps('device_type')}></TextInput>
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
                  <Group>
                  <Button onClick={detChange()}>Update payload</Button> 
            <Button onClick={()=>{
  
   notifications.show({
    id: 'load-data',
    loading: true,
    title: 'Devices',
    message: 'trying to create a device',
    autoClose: false,
    withCloseButton: false,
  });
  axios.post('https://api.bz9.net/createdevice',{
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
    var resp = response.data;
    var detail = response.data.detail;
    var statusres = response.data.status;
    document.getElementById("resBody").value = JSON.stringify(resp);
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const genAI = new GoogleGenerativeAI('AIzaSyAiMimtz8xXBJYF53jqJnO10YS4qJoyBog');
    
    async function run() {      
    if(detail == null){
      if(resp.id!=null){
        const text= 'Your device was created successfully with this id '+resp.id;
        document.getElementById('ai').innerText = text;
        /*
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        */
      }
    }else{
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      const prompt = 'Explain this HID Global Authentication API error detail : '+ detail+ ' with this status code '+statusres;
      document.getElementById('ai').innerHTML = 'Analysing the error detail and status code....';
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
 
    }
    
    run();
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
 </Group>
</Center>
<Textarea
        placeholder=""
        label="Artificial Intelligence "
        autosize
        minRows={8}
        id="ai"
      />
</Card>
            </div>
      );
}


export default CreateDevice;
