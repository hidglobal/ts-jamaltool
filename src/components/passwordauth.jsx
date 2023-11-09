import { Text,TextInput, Button, Stepper, Box, Group,Grid, Chip, Badge, Center,PasswordInput, JsonInput,Code} from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck,IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId,IconLock, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';

function PasswordAuth(){
    const [active, setActive] = useState(0);
    let email = '';
    let Password = '';
    const clientId = '';
    const clientSecret = '';
    let policy = '';
    	let hostname = sessionStorage.getItem("hostname");
	let Tenant =sessionStorage.getItem("tenant");
    const form4 = useForm({
        initialValues: { email: '', password: '',policy:'AT_STDPWD',channel:'CH_DIRECT',clientId:'',clientSecret:''},
    
        // functions will be used to validate values at corresponding key
        validate: (values) => {
            if (active === 1) {
              return {
                email:
                  values.email.trim().length < 6
                    ? 'Username must include at least 6 characters'
                    : null,
                password:
                  values.password.length < 6 ? 'Password must include at least 6 characters' : null,
              };
            }
      
            if (active === 0) {
              return {
                clientId: values.clientId.trim().length < 2 ? 'Client must include at least 2 characters' : null,
                clientSecret: values.clientSecret.trim().length < 2 ? 'Client Secret at least 2 characters' : null,
              };
            }
      
            return {};
          },
      });
      const nextStep = () =>
      setActive((current) => {
        if (form4.validate().hasErrors) {
          return current;
        }
        return current < 3 ? current + 1 : current;
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
                  <Center><h3>Test Password Authenticator.</h3></Center>


                  <Stepper active={active} breakpoint="sm">
                      <Stepper.Step label="Client Authentication" description="Client settings">
                          <TextInput label="Client ID" placeholder="Client" {...form4.getInputProps('clientId')} />
                          <PasswordInput
                              mt="md"
                              label="Client password"
                              placeholder="Password"
                              {...form4.getInputProps('clientSecret')} />
                              <br/>
                              <Badge  variant="filled" color='gray'>Disconnected</Badge>
                      </Stepper.Step>
                      <Stepper.Step label="User Authentication" description="User settings">
                          <TextInput label="Email" placeholder='Please enter your Email' {...form4.getInputProps('email')} />
                          <PasswordInput label="Password" placeholder='' {...form4.getInputProps('password')} />
                          <TextInput label="Authentication Policy" placeholder='AT_RESPWD' {...form4.getInputProps('policy')} />
                          <TextInput label="Channel" placeholder='CH_DIRECT' {...form4.getInputProps('channel')} />
                          <br/>
                          
                      </Stepper.Step>
                      <Stepper.Completed>
                      <Center>
                      <Button onClick={
                          ()=>    
                                             
                        axios.post('http://localhost:4000/passauth', { 
                          email: form4.values.email,
                          password:form4.values.password,
                          hostname: hostname,
                          tenant: Tenant,
                          client_id:form4.values.clientId,
                          client_secret:form4.values.clientSecret,
                        }, {
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          }
                        }
                      ).then(function(response){
                          document.getElementById('resBody').value = JSON.stringify(response.data);
                          document.getElementById('status').innerHTML = '<span>Connected</span>';
                          document.getElementById('status').style.color = 'green'
                        }) 
                      }

                      >
                          Login
                      </Button>
                  </Center>
                          Completed! and for test purposes these are the values:
                          <Code block mt="xl">
                              {JSON.stringify(form4.values, null, 2)}
                          </Code>
                          <Badge  variant="filled" color='gray' id='status'>Disconnected</Badge>
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

export default PasswordAuth;