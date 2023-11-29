import { Text,TextInput, Button, Stepper, Box, Group,Grid, Chip, Badge, Center,PasswordInput, JsonInput,Code} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId,IconLock, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';

function OTPAuth(){
    const [active, setActive] = useState(0);
    let username = '';
    let Password = '';
    	let hostname = sessionStorage.getItem("hostname");
	let Tenant =sessionStorage.getItem("tenant");
    let AccessToken = sessionStorage.getItem("access_token");
    const form7 = useForm({
        initialValues: { deviceID: '',clientID:'',clientSecret:'',deviceType: '',username:'',otpass:'',deviceiID:'',
        adevicePayload:'',
        sdevicePayload:'{\n  \"schemas\": [\n    \"urn:ietf:params:scim:api:messages:2.0:SearchRequest\"\n  ],\n  \"filter\": \"externalId eq 0973494699-1 and type eq DT_POCK_OE\",\n  \"sortBy\": \"id\",\n  \"sortOrder\": \"descending\",\n  \"startIndex\": 0,\n  \"count\": 100\n}'},
    
        // functions will be used to validate values at corresponding key
        validate: (values) => {
            if (active === 1) {
              return {
                username:
                  values.username.trim().length < 6
                    ? 'Username must include at least 6 characters'
                    : null,
              };
            }
      
            if (active === 0) {
              return {
                clientId: values.deviceID.trim().length < 2 ? 'Device External ID must include at least 2 characters' : null,
                clientSecret: values.deviceType.trim().length < 2 ? 'Device Type at least 2 characters' : null,
              };
            }
      
            return {};
          },
      });
      const nextStep = () =>
      setActive((current) => {
        if (form7.validate().hasErrors) {
          return current;
        }
        return current < 4 ? current + 1 : current;
      });
  
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

      return(
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
                  <Center><h3>Test OTP Authenticator.</h3></Center>


                  <Stepper active={active} breakpoint="sm">
                      <Stepper.Step label="Search for OTP Device" description="OTP Device settings">
                          <TextInput label="Device External ID" placeholder="External ID" {...form7.getInputProps('deviceID')} />
                            <TextInput label="Device type" placeholder='Device Type' {...form7.getInputProps('deviceType')} />
                              <br/><Center>
                              <Button onClick={
                                ()=>{
                                    form7.values.sdevicePayload = '{\n  \"schemas\": [\n    \"urn:ietf:params:scim:api:messages:2.0:SearchRequest\"\n  ],\n  \"filter\": \"externalId eq '+form7.values.deviceID+' and type eq '+form7.values.deviceType+'\",\n  \"sortBy\": \"id\",\n  \"sortOrder\": \"descending\",\n  \"startIndex\": 0,\n  \"count\": 100\n}'
                                    document.getElementById('reqBody1').value = JSON.stringify(form7.values.sdevicePayload)
                                    axios.post('http://localhost:4000/sdevice', { 
                          sdevicePayload: form7.values.sdevicePayload,
                          hostname: hostname,
                          tenant: Tenant,
                          access_token: AccessToken,
                        }, {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          }
                        }
                      ).then(function(response){
                          document.getElementById('resBody1').value = JSON.stringify(response.data);
                        }) 
                      
                                }
                              
                              }
                               /*
 ()=>
                                
                               */
                        >Search for device</Button></Center>
                              <br/>
                              <JsonInput
                      label="Request Body"
                      placeholder="JSON Request Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      minRows={4}
                      id="reqBody1" {...form7.getInputProps('sdevicePayload')}>

                  </JsonInput>
                              <JsonInput
                      label="Response Body"
                      placeholder="JSON Response Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      minRows={4}
                      id="resBody1">

                  </JsonInput>
                      </Stepper.Step>
                      <Stepper.Step label="Assign Device" description="User settings">
                          <TextInput label="Email" placeholder='Please enter your Email' {...form7.getInputProps('username')} />
                          <TextInput label="Device Internal ID" placeholder='9674' {...form7.getInputProps('deviceiID')} />
                          <br/>
                          <Center><Button onClick={

                            ()=>{
                                form7.values.adevicePayload = '{\n  \"schemas\":[\"urn:hid:scim:api:idp:2.0:Device\"],\n  \"id\":\"'+form7.values.deviceiID+'\",\n    \"owner\":{ \n   \"display\":\"'+form7.values.username+'\" \n     },   \n  \"status\":{\n    \"status\":\"ACTIVE\", \n   \"active\":true, \n    \"expiryDate\":"2045-11-30T11:54:31+0100", \n \"startDate\":\"2020-11-30T11:54:31+0100\" \n }}';
                                document.getElementById('reqBody2').value = JSON.stringify(form7.values.adevicePayload)
                                axios.post('http://localhost:4000/asdevice', { 
                          adevicePayload: form7.values.adevicePayload,
                          hostname: hostname,
                          tenant: Tenant,
                          deviceiID: form7.values.deviceiID,
                          access_token: AccessToken,
                        }, {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          }
                        }
                      ).then(function(response){
                          document.getElementById('resBody2').value = JSON.stringify(response.data);
                        }) 
                      
                                }
                              
                              
                            }
                          >Assign Device</Button></Center>
                          <JsonInput
                      label="Request Body"
                      placeholder="JSON Request Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      value='{
                        "schemas":[
                           "urn:hid:scim:api:idp:2.0:Device"
                        ],
                        "id":"96740",
                        "owner":{
                           "display":"jsmith@company.com"
                        },
                        "status":{
                           "status":"ACTIVE",
                           "active":true,
                           "expiryDate":"2025-11-30T11:54:31+0100",
                           "startDate":"2017-11-30T11:54:31+0100"
                        }
                     }'
                      minRows={4}
                      id="reqBody2" {...form7.getInputProps('adevicePayload')}>

                  </JsonInput>
                              <JsonInput
                      label="Response Body"
                      placeholder="JSON Response Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      minRows={4}
                      id="resBody2"></JsonInput>
                      </Stepper.Step>
                      <Stepper.Step label="Authenticate with Device" description="User OTP authentication">
                      <TextInput label="Client ID" placeholder='Please enter your OpenID Client' {...form7.getInputProps('clientID')} />
                      <PasswordInput label="Client Secret" placeholder='Please enter your OpenID Secret' {...form7.getInputProps('clientSecret')} />
                          <TextInput label="One time password" placeholder='Please enter your otp' {...form7.getInputProps('otpass')} />
                          <br/>
                          <Center><Button onClick={
                            ()=>{
                               
                                axios.post('http://localhost:4000/otpauth', { 
                          username: form7.values.username,
                          password1:form7.values.otpass,
                          client_id:form7.values.clientID,
                          client_secret:form7.values.clientSecret,
                          hostname: hostname,
                          tenant: Tenant,
                        }, {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          }
                        }
                      ).then(function(response){
                          document.getElementById('resBody3').value = JSON.stringify(response.data);
                        }) 
                      }
                            
                          }>Login</Button></Center><br/>
                          <JsonInput
                      label="Response Body"
                      placeholder="JSON Response Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      minRows={4}
                      id="resBody3"></JsonInput>
                      </Stepper.Step>
                      <Stepper.Completed>
                      <Center>
                      <Button onClick={
                          ()=>    
                                             
                        axios.post('http://localhost:4000/otpauth', { 
                          username: form7.values.username,
                          password:form7.values.password,
                          hostname: hostname,
                          tenant: Tenant,
                          client_id:form7.values.clientId,
                          client_secret:form7.values.clientSecret,
                        }, {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          }
                        }
                      ).then(function(response){
                          document.getElementById('resBody').value = JSON.stringify(response.data);
                          document.getElementById('status').innerHTML = '<span>Connected</span>';
                          document.getElementById('status').style.color = 'green';
                          document.getElementById('status').style.backgroundColor = 'white';
                        }) 
                      }

                      >
                          Login
                      </Button>
                  </Center>
                          <br/>
                          <Center><Badge  variant="filled" color='gray' id='status'>Disconnected</Badge></Center>
                          <br/>
                          <JsonInput
                      label="Response Body"
                      placeholder="JSON Response Body"
                      validationError="Invalid JSON"
                      formatOnBlur
                      autosize
                      minRows={4}
                      id="resBody">

                  </JsonInput>
                      </Stepper.Completed>
                  </Stepper>

                  <br />

                  <Group position="right" mt="xl">
                      {active !== 0 && (
                          <Button variant="default" onClick={prevStep}>
                              Back
                          </Button>
                      )}
                      {active !== 4 && <Button onClick={nextStep}>Next</Button>}
                  </Group>
                  


              </Box>
              </Grid.Col>
              <Grid.Col span={2}></Grid.Col>
          </Grid></>
            
      );

}

export default OTPAuth;