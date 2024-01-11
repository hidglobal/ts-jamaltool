import { Paper, TextInput, Button, Stepper, Box, Group, Grid, Chip, Badge, Center, Input, JsonInput, Code, Loader,Card, Text } from '@mantine/core';
import axios from 'axios';
import { IconChevronDown,IconDeviceMobile, IconMoodX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { renderToString } from 'react-dom/server';
import { Notification } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const { io } = require("socket.io-client");

const socket = io("https://api.bz9.net");


function ApprovePushAuth() {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  let username = '';
  let Password = '';
  const clientId = '';

  let policy = '';
  let hostname = sessionStorage.getItem("hostname");
  let Tenant = sessionStorage.getItem("tenant");
  let accessToken = sessionStorage.getItem("access_token");
  let IdToken = sessionStorage.getItem('gToken');
  let client_id = sessionStorage.getItem('client_id');
  let client_secret = sessionStorage.getItem('client_secret');
  const [pvalue, setValue] = useState('');
  const form49 = useForm({
    initialValues: { userid: '', pushBody: '',
    bcPayload:'{  \"scope\": \"openid hid-tx-sign\",  \n    \"client_notification_token\": \"8d67dc78-7faa-4d41-aabd-67707b374255\", \n     \"acr_values\": \"mod-mf\", \n     \"login_hint_token\": \"\"\n  }'
    , pHeader: '{\"alg\" : \"none\",\"typ\" : \"JWT\" }', deviceid: '', clientId: '', clientSecret: '', craftedPayload: '' },

    // functions will be used to validate values at corresponding key
    validate: (values) => {
      if (active === 1) {
      }

      if (active === 0) {
        return {
          userid: values.userid.trim().length < 2 ? 'Please enter a username' : null,
          deviceid: sessionStorage.getItem('deviceid').length < 2 ? 'Please choose a device id' : null,
        };
      }

      return {};
    },
  });
  const nextStep = () =>
    setActive((current) => {
      if (form49.validate().hasErrors) {
        return current;
      }
      return current < 4 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const navigate = useNavigate();
  if(accessToken===null){
    
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
    <><Grid>
      <Grid.Col span={2}></Grid.Col>
      <Grid.Col span={8}>

        <Box pos="relative" sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
        >
          <Center><h3>Test HID Approve Push Authentication.</h3></Center>


          <Stepper active={active} breakpoint="sm">
            <Stepper.Step label="Select Device" description="User settings">
              <Paper shadow="xs" p="md">
                <TextInput label="Email" placeholder='Please enter your email/username' {...form49.getInputProps('userid')} />
                <br />

                <br />
                <Center><Button onClick={() => {
                  if (form49.values.userid.length > 2) {
                    axios.post('https://api.bz9.net/devicelist', {
                      userid: form49.values.userid,
                      hostname: hostname,
                      access_token: accessToken,
                      tenant: Tenant,
                      client_id: form49.values.clientId,
                      client_secret: form49.values.clientSecret,
                    }, {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      }
                    }
                    ).then(function (response) {
                      document.getElementById('resBody').value = JSON.stringify(response.data);

                      if (response.data.resources != null) {
                        let devices = Array.from(response.data.resources);
                        const userinternal = response?.data?.resources['0']?.owner.value;
                        sessionStorage.setItem('userInternalId', userinternal);
                        const device_data = devices.map(device => <option key={device.id} value={device.id}>{device.friendlyName || 'Device is not provisioned'}</option>);
                        let devicehtm = renderToString(<Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />} id="scdevice" value={pvalue} onChange={setValue(document.getElementById('scdevice')?.value)} icon={<IconDeviceMobile />} radius="xl" size="sm" {...form49.getInputProps('deviceid')} >
                          {device_data}
                        </Input>);
                        document.getElementById('devices').innerHTML = devicehtm;
                        document.getElementById('userinternal').innerText = 'Your user internal ID: ' + userinternal;



                      }
                    })

                  }
                }
                }>List devices</Button></Center>
                <br />
                <div id="devices"></div>
                <br />
                <div id="currentDevice"></div>
                <div id="userinternal"></div>
                {document.getElementById('scdevice')?.value?.length > 2 &&
                  <Center><Button id="SelectDv" onClick={() => {
                    if (document.getElementById('scdevice')?.value != null) {
                      const deviceName = document.getElementById('scdevice')?.options[document.getElementById('scdevice').selectedIndex].text;
                      const deviceID = document.getElementById('scdevice')?.value;
                      document.getElementById('currentDevice').innerHTML = 'Current selected device: ' + deviceName;
                      document.getElementById('currentDevice').innerHTML += '<br/>Current selected device id: ' + deviceID;
                      sessionStorage.setItem('deviceid', deviceID);
                      sessionStorage.setItem('deviceName', deviceName);
                    }
                  }}>Select device</Button></Center>
                }
              </Paper>
            </Stepper.Step>
            <Stepper.Step label="Craft ID Token" description="ID Token Settings">
              <Center><Chip defaultChecked color="indigo" variant="filled">You have selected this device to send Push Notification: {sessionStorage.getItem('deviceName')}</Chip></Center>
              <br />

              <Center><h4>Craft Header and Body of the Push Notification. ( Generate ID Token )</h4></Center>
              <TextInput label="Transaction Message" id="tds" />

              <JsonInput
                label="Body"
                placeholder="Crafted Body of the Push Message"
                validationError="Invalid JSON"
                formatOnBlur
                autosize
                minRows={4}
                id="bodyPush"
                {...form49.getInputProps('pushBody')}
                >
              </JsonInput>
              <JsonInput
                label="Header"
                placeholder="Crafted Header of the Push Message"
                validationError="Invalid JSON"
                formatOnBlur
                autosize
                minRows={4}
                {...form49.getInputProps('pHeader')}

                id="headerPush">

              </JsonInput>
              <br />
              <Center>
                
                <Button onClick={
                  () => {

                    const deviceInternalID = sessionStorage.getItem('deviceid');
                    var tds = document.getElementById('tds')?.value;
                    var header = {
                      "alg" : "none",
                      "typ" : "JWT"
                  };
                    var stringifiedHeader = btoa(JSON
                      .stringify(header));

                    var encodedHeader = stringifiedHeader;
                    var data = {};
                    if (deviceInternalID.length < 2) {
                      data = {
                        "usercode": form49.values.userid,

                        "authpol": "AT_PASA",
                        "tds": tds,
                        "createSession": "0"

                      };

                    }
                    else {
                      data = {
                        "usercode": form49.values.userid,
                        "deviceid": deviceInternalID,
                        "authpol": "AT_PASA",
                        "tds": tds,
                        "createSession": "0"

                      };
                      
                    }
                    form49.setFieldValue('pushBody',JSON.stringify(data));
                    var stringifiedData = btoa(JSON.stringify(data));
                    var encodedData = stringifiedData;
                    let CIBAtokenLogin = encodedHeader + "." + encodedData + ".";
                    form49.setFieldValue('bcPayload','{  \"scope\": \"openid hid-tx-sign\",  \n    \"client_notification_token\": \"8d67dc78-7faa-4d41-aabd-67707b374255\", \n     \"acr_values\": \"mod-mf\", \n     \"login_hint_token\": \"'+CIBAtokenLogin+'\"\n  }');
                    document.getElementById('gToken').innerText = 'Generated Token:\n' + CIBAtokenLogin;
                    
                    const messagesuccess = renderToString(<Center><Chip defaultChecked color="teal" variant="filled">Successfully crafted an ID Token.</Chip></Center>)
                    document.getElementById('cmsg').innerHTML = messagesuccess;
                  }}>Craft ID Token</Button></Center>
              <br />
              <Code color="teal" block id='gToken'></Code>
              <br />
              <div id="cmsg"></div>
            </Stepper.Step>
            <Stepper.Step label="Push Notification" description="Push Settings">
            <JsonInput
                label="Payload"
                validationError="Invalid JSON"
                formatOnBlur
                autosize
                minRows={4}
                id="bcPayload"
                {...form49.getInputProps('bcPayload')}
                >
                
              </JsonInput>
              <br/>
              <Center>
              <Button onClick={()=>{

                axios.post('https://api.bz9.net/bcauthorize', {
                  hostname: hostname,
                  tenant: Tenant,
                  bcPayload: form49.values.bcPayload,
                  access_token: accessToken,
                  client_id: client_id,
                  client_secret: client_secret,
                }, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  }
                }
                ).then(function (response) {
                  document.getElementById('resBody').value = JSON.stringify(response?.data);
                  const auth_req_id = response?.data.auth_req_id;
                  if(auth_req_id?.length>2){
      
                    const loader = renderToString(<>
                    <Center>
                    <Notification
                    title="Push Notification sent successfully"
                    color="teal" 
                  >
                    <Loader color="teal" size={12} /> Please wait until we recieve verification from HID Approve
                  </Notification>
                  </Center>
                    </>);
                    document.getElementById('loader').innerHTML = loader;
                    
			function callback(){
		        const id_token = socket.on('clientstatus',(arg)=>{
			const loader2 = renderToString(<>
                    <Center>
                    <Notification
                    title="HID Approve Status"
                    color="blue"
                  >
                    You have choosen to {arg} the request
                  </Notification>
                  </Center>
                    </>);

			document.getElementById('loader').innerHTML= loader2;
			});
		
			};
                    setInterval(callback,100);
                    /* let count = 0;
                    setInterval(()=>{
			socket.volatile.emit("ping",++count)
			},50);
                    */
                      //document.getElementById('loader').innerHTML = JSON.stringify(get_token);
                  }else{
                    
                    const ErrorNot = renderToString(<>
                      <Center>
                      <Notification
                      title="Error when sending Push Notification"
                      color="red" 
                      icon={<IconMoodX size="1.2rem" />}
                    >
                      There's an error when we tried to send the Push Notification.
                    </Notification>
                    </Center>
                      </>);
                      document.getElementById('loader').innerHTML = ErrorNot;
                  }
                  
             


              
            
              })}}>Send Push Notification</Button></Center>
              <br/>
              <div id="loader"></div>
            </Stepper.Step>
            <Stepper.Completed>
              <Center>
                <Button onClick={
                  () =>

                    axios.post('https://api.bz9.net/approvetotp', {
                      username: form49.values.username,
                      password: form49.values.password,
                      hostname: hostname,
                      tenant: Tenant,
                      client_id: form49.values.clientId,
                      client_secret: form49.values.clientSecret,
                    }, {
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                      }
                    }
                    ).then(function (response) {
                      document.getElementById('resBody').value = JSON.stringify(response.data);
                      document.getElementById('status').innerHTML = '<span>Connected</span>';
                      document.getElementById('status').style.color = 'green';
                      document.getElementById('status').style.backgroundColor = 'white';
                    })
                }

                >
                  Test HID Approve Push Notification
                </Button>
              </Center>
              <br />
              <Center><Badge variant="filled" color='gray' id='status'>Disconnected</Badge></Center>
            </Stepper.Completed>
          </Stepper>

          <br />

          <Group position="right" mt="xl">
            {active !== 0 && (
              <Button variant="default" onClick={prevStep}>
                Back
              </Button>
            )}
            {active !== 3 && <Button onClick={nextStep}>Next</Button>}
          </Group>
          <JsonInput
            label="Response Body"
            placeholder="JSON Response Body"
            validationError="Invalid JSON"
            formatOnBlur
            autosize
            minRows={4}
            id="resBody">

          </JsonInput>


        </Box>
      </Grid.Col>
      <Grid.Col span={2}></Grid.Col>
    </Grid></>

  );
            }

}

export default ApprovePushAuth;
