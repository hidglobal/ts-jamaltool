import { Paper, TextInput, Button, Stepper, Box, Group, Grid, Chip, Badge, Center, Input, JsonInput, Code } from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconChevronDown, IconFaceIdError, IconEarOff, IconFaceId, IconLock, IconUserCircle, IconAt, IconPhonePlus, IconDeviceMobile } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { render } from 'react-dom';
import { Select } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { useMantineTheme } from '@mantine/core';


function ApprovePushAuth() {
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  let username = '';
  let Password = '';
  const clientId = '';
  const clientSecret = '';
  let policy = '';
  let hostname = sessionStorage.getItem("hostname");
  let Tenant = sessionStorage.getItem("tenant");
  let accessToken = sessionStorage.getItem("access_token");
  const [pvalue, setValue] = useState('');
  const form49 = useForm({
    initialValues: { userid: '', password: '', authType: 'AT_EMPOTP', deviceid: '', clientId: '', clientSecret: '', grant_type: 'password' },

    // functions will be used to validate values at corresponding key
    validate: (values) => {
      if (active === 1) {
        return {
          email:
            values.userid.trim().length < 3
              ? 'User ID must be at least 3 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 0) {
        return {
            userid: values.userid.trim().length < 2 ? 'Please enter a username': null,
            deviceid: values.deviceid.trim().length < 2 ? 'Please choose a device name':null,
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
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

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
              <br/>
              <div id="devices"></div>
              <br/>
              <Center><Button onClick={()=>{
                if(form49.values.userid.length>2){
             axios.post('http://localhost:4000/devicelist', {
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
                
                //console.log(devices.map(row => row.id));
                if(response.data.resources != null){
                    let devices = Array.from(response.data.resources);
                    
                let node = createRoot(document.getElementById('devices'));
                const device_data = devices.map(device => <option key={device.id} value={device.id}>{device.friendlyName || 'device not provisioned' }</option>);
                node.render(<Input component="select" rightSection={<IconChevronDown size={14} stroke={1.5} />} id="scdevice" value={pvalue} onChange={setValue}  icon={<IconDeviceMobile/>} radius="xl" size="sm" >
                {device_data}
                </Input>);
               
               function valuofme(){
 
                    console.log('You selected: ', pvalue);
               }
                   
                
                
            }
              })   
               
            }}
        }>List devices</Button></Center>

              <br />
</Paper>
            </Stepper.Step>
            <Stepper.Completed>
              <Center>
                <Button onClick={
                  () =>

                    axios.post('http://localhost:4000/approvetotp', {
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

export default ApprovePushAuth;