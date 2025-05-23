import { Button, TextInput, JsonInput, Group, Card, Center, Alert } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from '@mantine/notifications';
import { IconAlertCircle, IconFaceId, IconFaceIdError } from "@tabler/icons-react";
import axios from 'axios';
import { API_HOST } from '../config'; 

function UpdateCiba() {
    let hostname = sessionStorage.getItem("hostname");
    let Tenant = sessionStorage.getItem("tenant");
    let client_id = sessionStorage.getItem('client_id');
    let client_secret = sessionStorage.getItem('client_secret');
    let accessToken = sessionStorage.getItem("access_token");

    // Set initial cibaListener value
    const initialCibaListener = `${API_HOST}/callback_url`;
    // Set initial CBPayload value using initialCibaListener
    const initialCBPayload = `{
            "urn:hid:scim:api:idp:2.0:UserAttribute": {
            "attributes": [
             {
                "name": "ATR_CIBACB",
                "value": "${initialCibaListener}"
              }
            ]
          }
        }`;

    const form43 = useForm({
        initialValues: { 
            cibaListener: initialCibaListener,
            CBPayload: initialCBPayload
        },
    });

    function updatePay() {
        form43.setFieldValue('CBPayload', `{
            "urn:hid:scim:api:idp:2.0:UserAttribute": {
            "attributes": [
             {
                "name": "ATR_CIBACB",
                "value": "${form43.values.cibaListener}"
              }
            ]
          }
        }`);
    }

    let AlertMsg = '';
    if (accessToken == null) {
        AlertMsg = (
            <Center>
                <Card>
                    <Alert icon={<IconAlertCircle size="1rem" />} title="Authentication" color="orange">
                        Please authenticate to HID API endpoint on <a href="/authentication">this link</a>.
                    </Alert>
                </Card>
            </Center>
        );
    }

    return (
        <>
            <div id="alertmsg">{AlertMsg}</div>
            <br />
            <Card>
                <Center><h3>Update CIBA Listener</h3></Center>
                <TextInput label='CIBA Listener' placeholder="CIBA Callback URL" {...form43.getInputProps('cibaListener')} />
                <JsonInput
                    label="Payload"
                    placeholder="JSON Payload"
                    validationError="Invalid JSON"
                    formatOnBlur
                    autosize
                    minRows={4}
                    {...form43.getInputProps('CBPayload')}
                />
                <br />
                <Center>
                    <Group>
                        <Button onClick={updatePay}>Update Payload</Button>
                        <Button onClick={() => {
                            notifications.show({
                                id: 'load-data',
                                loading: true,
                                title: 'CIBA Listener',
                                message: 'trying to update CIBA Listener Attribute',
                                autoClose: false,
                                withCloseButton: false,
                            });
                            axios.post(`${API_HOST}/updateCB`, {
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
                                    // handle error
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
                                    document.getElementById("resbody").value = 'Error: ' + JSON.stringify(error.message);
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
                <br />
                <JsonInput
                    label="Response Body"
                    placeholder="JSON Payload"
                    validationError="Invalid JSON"
                    formatOnBlur
                    autosize
                    minRows={4}
                    id="resbody"
                />
            </Card>
        </>
    );
}

export default UpdateCiba;
