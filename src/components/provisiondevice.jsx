
import { Text, TextInput, Button, JsonInput, Group, Box, Card, Grid, Chip, Badge, Center } from '@mantine/core';
import axios from 'axios';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconAlertCircle, IconFaceIdError, IconEarOff, IconFaceId, IconUserCircle, IconAt } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useForm } from '@mantine/form';
const QRCode = require('qrcode');

function ProvisionDevice() {
  let AccessToken = sessionStorage.getItem("access_token");
  let hostname = sessionStorage.getItem("hostname");
  let tenant = sessionStorage.getItem("tenant");
  const form20 = useForm({
    initialValues: {
      access_token: AccessToken,
      deviceId: '',
      cPayload: '{\n        \"schemas\": [\"urn:hid:scim:api:idp:2.0:Provision\"],\n        \"deviceType\": \"DT_TDSV4\",\n        \"description\": \"did=14488,url=' + hostname + ':443/' + tenant + ',pch=CH_TDSPROV,pth=AT_TDSOOB,pct=CT_TDSOOB,pdt=DT_TDSOOB,mod=GEN,sec=\",\n        \"owner\": {\n            \"value\" : \"12896\"\n        },\n    \"attributes\": [{\n                \"name\": \"AUTH_TYPE\",\n                \"value\": \"AT_SMK\",\n                \"readOnly\": false\n            }\n        ]\n    }'
    }
  });

  return (
    <div>
      <Grid grow gutter="sm">
      </Grid>
      <Card>
        <Center>
          <h3>Provision Device</h3>
        </Center>
        <JsonInput
          label="Payload"
          placeholder="JSON request"
          validationError="Invalid JSON"
          formatOnBlur
          autosize
          minRows={4}
          id="reqBody"

          {...form20.getInputProps('cPayload')}
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
        <div id="provmsg"></div>
        <br />
        <Center>
          <Button onClick={() => {

            notifications.show({
              id: 'load-data',
              loading: true,
              title: 'Devices',
              message: 'trying to provision a device.',
              autoClose: false,
              withCloseButton: false,
            });
            axios.post('http://localhost:4000/provisiondevice', {
              access_token: AccessToken,
              hostname: hostname,
              tenant: tenant,
              cPayload: form20.values.cPayload,
            }, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }
            ).then(function (response) {
              const resp = response.data;
              document.getElementById("resBody").value = JSON.stringify(resp);
              const jsonrs = resp.attributes['0'].value;
              jsonrs.replace(" ", "");
              let svgsr = QRCode.toString(jsonrs, {
                errorCorrectionLevel: 'H',
                type: 'svg'
              }, function (err, data) {
                if (err) throw err;
                document.getElementById('qrcode').innerHTML = data;
              });


              notifications.update({
                id: 'load-data',
                color: 'green',
                title: 'Success!',
                message: "Device provisioning payload sent successfully.",
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

          }}>Provision device</Button>
        </Center>
        <Center>
          <br />
          <div id='qrcode' style={{ width: '200px', height: '200px', marginTop: '10px' }}></div></Center>
      </Card></div>
  );

}

export default ProvisionDevice;
