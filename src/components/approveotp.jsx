import {
  TextInput,
  Button,
  Stepper,
  Box,
  Group,
  Grid,
  PinInput,
  Badge,
  Center,
  Alert,
  PasswordInput,
  JsonInput,
  Card,
} from "@mantine/core";
import axios from "axios";
import {
  IconAlertCircle,
} from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";

function ApproveOTPAuth() {
  const [active, setActive] = useState(0);
  let username = "";
  let Password = "";
  let policy = "";
  let hostname = sessionStorage.getItem("hostname");
  let Tenant = sessionStorage.getItem("tenant");
  let client_id = sessionStorage.getItem("client_id");
  let client_secret = sessionStorage.getItem("client_secret");
  let accessToken = sessionStorage.getItem("access_token");
  const form4 = useForm({
    initialValues: {
      username: "",
      password: "",
      clientId: client_id,
      clientSecret: client_secret,
      grant_type: "password",
    },

    // functions will be used to validate values at corresponding key
    validate: (values) => {
      if (active === 1) {
        return {
          email:
            values.username.trim().length < 6
              ? "Username must include at least 6 characters"
              : null,
          password:
            values.password.length < 6
              ? "Password must include at least 6 characters"
              : null,
        };
      }

      if (active === 0) {
        return {
          clientId:
            values.clientId?.length < 2
              ? "Client must include at least 2 characters"
              : null,
          clientSecret:
            values.clientSecret?.length < 2
              ? "Client Secret at least 2 characters"
              : null,
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

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  if (accessToken == null) {
    var AlertMsg = (
      <Center>
        <Card>
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title="Authentication"
            color="orange"
          >
            Please authenticate to HID API endpoint on{" "}
            <a href="/authentication">this link</a>.
          </Alert>
        </Card>
      </Center>
    );
  } else {
    var AlertMsg = "";
  }

  return (
    <>
      <Grid>
        <Grid.Col span={2}></Grid.Col>
        <Grid.Col span={8}>
          <div id="alertmsg">{AlertMsg}</div>
          <br />
          <Box
            pos="relative"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,
              cursor: "pointer",

              "&:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[5]
                    : theme.colors.gray[1],
              },
            })}
          >
            <Center>
              <h3>Test HID Approve TOTP Auth.</h3>
            </Center>

            <Stepper active={active} breakpoint="sm">
              <Stepper.Step
                label="Client Authentication"
                description="Client settings"
              >
                <TextInput
                  label="Client ID"
                  placeholder="Client"
                  {...form4.getInputProps("clientId")}
                />
                <PasswordInput
                  mt="md"
                  label="Client password"
                  placeholder="Password"
                  {...form4.getInputProps("clientSecret")}
                />
                <br />
              </Stepper.Step>
              <Stepper.Step
                label="OTP Authentication"
                description="User settings"
              >
                <TextInput
                  label="Email"
                  placeholder="Please enter your Email"
                  {...form4.getInputProps("username")}
                />
                <br />
                <Group position="center">
                  <label>One Time Password</label>
                  <PinInput
                    label="One Time Password"
                    placeholder=""
                    {...form4.getInputProps("password")}
                    oneTimeCode
                    aria-label="One time password"
                    length={6}
                  />
                </Group>
                <br />
              </Stepper.Step>
              <Stepper.Completed>
                <Center>
                  <Button
                    onClick={() =>
                      axios
                        .post(
                          "https://api.bz9.net/approvetotp",
                          {
                            username: form4.values.username,
                            password: form4.values.password,
                            hostname: hostname,
                            tenant: Tenant,
                            client_id: form4.values.clientId,
                            client_secret: form4.values.clientSecret,
                          },
                          {
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          }
                        )
                        .then(function (response) {
                          document.getElementById("resBody").value =
                            JSON.stringify(response.data);
                          document.getElementById("status").innerHTML =
                            "<span>Connected</span>";
                          document.getElementById("status").style.color =
                            "green";
                          document.getElementById(
                            "status"
                          ).style.backgroundColor = "white";
                        })
                    }
                  >
                    Test HID Approve OTP Login
                  </Button>
                </Center>
                <br />
                <Center>
                  <Badge variant="filled" color="gray" id="status">
                    Disconnected
                  </Badge>
                </Center>
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
              id="resBody"
            ></JsonInput>
          </Box>
        </Grid.Col>
        <Grid.Col span={2}></Grid.Col>
      </Grid>
    </>
  );
}

export default ApproveOTPAuth;
