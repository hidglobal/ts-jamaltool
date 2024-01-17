import { isNotEmpty, useForm, isEmail } from "@mantine/form";
import {
  PasswordInput,
  Text,
  TextInput,
  Button,
  Group,
  Box,
  Center,
  Select,
  JsonInput,
  Tooltip,
  Switch,
  Textarea,
  Popover,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLock,
  IconCheck,
  IconFaceIdError,
  IconTrashX,
  IconUserDown,
} from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { useEffect, useState } from "react";

/** This component is using HID Authentication API End point to generate an access token to do various HID Authentication functions */
function AuthService() {
  const [visible, { toggle }] = useDisclosure(false);
  /**
   * Form for user input
   * - Hostname for API endpoint
   * - Tenant/Security Domain
   * - Username
   * - Password
   * - Client ID
   * - Client Secret
   * - Grant Type
   */
  const form = useForm({
    initialValues: {
      Host: sessionStorage.getItem("hostname"),
      Tenant: sessionStorage.getItem("tenant"),
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password"),
      client_id: sessionStorage.getItem("client_id"),
      client_secret: sessionStorage.getItem("client_secret"),
      grant_type: "password",
      access_token: sessionStorage.getItem("access_token"),
      tokenSwitch: "",
    },
    validateInputOnChange: true,
    validate: {
      Host: isNotEmpty("Enter a hostname"),
      Tenant: isNotEmpty("Enter a Tenant"),
      grant_type: isNotEmpty("Please choose a grant type"),
      client_id: isNotEmpty("Please enter a Client ID"),
      client_secret: isNotEmpty("Please enter Client Password"),
      username: isNotEmpty("Please enter a valid username"),
      password: isNotEmpty("Please enter a password"),
    },
  });
  const [TokenCheck, CheckedToken] = useState(false);
useEffect();
  if (TokenCheck) {
    // If TokenCheck is true, user has a token
    document.getElementById("noToken")?.setAttribute("hidden", "hidden");
    document.getElementById("gotToken")?.removeAttribute("hidden");
    document.getElementById("testCon")?.setAttribute("hidden", "hidden");
  } else {
    // If TokenCheck is false or null, user does not have a token
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken !== null) {
      // If access token is found in sessionStorage
      document.getElementById("noToken")?.setAttribute("hidden", "hidden");
      document.getElementById("gotToken")?.removeAttribute("hidden");
      document.getElementById("testCon")?.setAttribute("hidden", "hidden");
    } else {
      // If TokenCheck is false and no access token in sessionStorage
      document.getElementById("noToken")?.removeAttribute("hidden");
      document.getElementById("gotToken")?.setAttribute("hidden", "hidden");
      document.getElementById("testCon")?.removeAttribute("hidden");
    }
  }

  // Render authentication form
  return (
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
      {/* Title and description */}
      <Center>
        <h2>Login (Authentication Service)</h2>
      </Center>
      <Center>
        <Text>
          You can use any internet accessible (public) HID authentication
          product from AaaS, HID Appliance or HID AS and for private VPNs/DMZs
          please install these tools on your network.
        </Text>
      </Center>
      <Tooltip
        label="Please enter an Internet accessible HID API Endpoint for example: auth-eu.api.hidglobal.com, auth-de.api.hidglobal.com, auth-us.api.hidglobal.com "
        color="blue"
        withArrow
        arrowPosition="center"
      >
        <TextInput
          label="Host"
          placeholder="host"
          {...form.getInputProps("Host")}
        />
      </Tooltip>

      <TextInput
        mt="md"
        label="Tenant/Security Domain"
        placeholder="Tenant"
        {...form.getInputProps("Tenant")}
      />
      <br />

      <Switch
        label="Do you have an access token?"
        size="md"
        radius="lg"
        checked={TokenCheck}
        onChange={(event) => CheckedToken(event.currentTarget.checked)}
      />
      <br />
      <div id="gotToken" hidden>
        <Group position="left">
          <Popover width={280} withArrow shadow="md">
            <Popover.Target>
              <Text size="sm">Access Token 🛈</Text>
            </Popover.Target>
            <Popover.Dropdown>
              <a href="https://developers.hidglobal.com/authentication-service/reference/authentication-api-access-token">
                You can read more about access_token here
              </a>
            </Popover.Dropdown>
          </Popover>
        </Group>
        <TextInput
          mt="sm"
          placeholder="please paste an access token"
          {...form.getInputProps("access_token")}
          rightSection={
            <Button
              compact
              onClick={() => {
                sessionStorage.removeItem("access_token");
                form.setValues({
                  access_token: "",
                });
              }}
            >
              <IconTrashX />
            </Button>
          }
        />
        <br />
        <Center>
          <Tooltip
            label="You can get User Info and also test your access token at once."
            withArrow
            color="blue"
            arrowPosition="center"
          >
            <Button
              onClick={() => {
                let hostname = form.values.Host;
                let tenant = form.values.Tenant;
                let access_token = form.values.access_token;
                if (
                  hostname != null &&
                  tenant != null &&
                  access_token != null
                ) {
                  axios
                    .post(
                      "https://api.bz9.net/userinfo",
                      {
                        access_token: access_token,
                        hostname: hostname,
                        tenant: tenant,
                      },
                      {
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                      }
                    )
                    .then(function (response) {
                      notifications.show({
                        id: "load-data",
                        color: "teal",
                        title: "Connected!",
                        message: "Successfully recieved User Info",
                        icon: <IconCheck size="1rem" />,
                        autoClose: 2000,
                      });
                      document.getElementById("resBody").innerHTML =
                        JSON.stringify(response.data);
                    });
                }
              }}
            >
              <IconUserDown /> Get User Info
            </Button>
          </Tooltip>
        </Center>
      </div>
      <div id="noToken">
        <TextInput
          mt="md"
          label="Username"
          placeholder="Username"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Password"
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps("password")}
          icon={<IconLock size="1rem" />}
        />
        <Tooltip
          label="Please enter an OpenID API Integration Application ID ( Client ID )"
          color="blue"
          withArrow
          arrowPosition="center"
        >
          <TextInput
            mt="md"
            label="Client ID"
            placeholder="Client ID"
            {...form.getInputProps("client_id")}
          />
        </Tooltip>
        <Tooltip
          label="Please enter an OpenID API Integration Application password ( Client Password )"
          color="blue"
          withArrow
          arrowPosition="center"
        >
          <PasswordInput
            mt="md"
            label="Client Secret"
            placeholder="Client Secret"
            visible={visible}
            onVisibilityChange={toggle}
            {...form.getInputProps("client_secret")}
            icon={<IconLock size="1rem" />}
          />
        </Tooltip>

        <Select
          label="Grant Type"
          placeholder="password"
          data={[
            { value: "password", label: "Password" },
            { value: "client_credentials", label: "Client Credentials" },
          ]}
          {...form.getInputProps("grant_type")}
        />
      </div>
      <Group position="center" mt="xl">
        <Button
          variant="filled"
          onClick={() => {
            let hostname = form.values.Host;
            let tenant = form.values.Tenant;
            let grant_type = form.values.grant_type;
            let username = form.values.username;
            let password = form.values.password;
            let client_id = form.values.client_id;
            let client_secret = form.values.client_secret;
            sessionStorage.setItem("hostname", hostname);
            sessionStorage.setItem("tenant", tenant);
            sessionStorage.setItem("grant_type", grant_type);
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", password);
            sessionStorage.setItem("client_id", client_id);
            sessionStorage.setItem("client_secret", client_secret);
            if (TokenCheck == true) {
              sessionStorage.setItem("access_token", form.values.access_token);
            }
            notifications.show({
              id: "load-data",
              color: "green",
              title: "Authentication details!",
              message:
                "You have saved your HID Auth details to the browser session successfully.",
            });
          }}
        >
          Save
        </Button>
        <span id="testCon">
          <Button
            variant="outline"
            onClick={() => {
              let hostname = form.values.Host;
              sessionStorage.setItem("hostname", hostname);
              let tenant = form.values.Tenant;
              let grant_type = form.values.grant_type;
              let username = form.values.username;
              let password = form.values.password;
              let client_id = form.values.client_id;
              let client_secret = form.values.client_secret;
              notifications.show({
                id: "load-data",
                loading: true,
                title: "Connecting",
                message: "Connecting to " + hostname,
                autoClose: true,
                withCloseButton: true,
              });
              !!hostname
                ? axios
                    .post(
                      "https://api.bz9.net/conng",
                      {
                        grant_type: grant_type,
                        username: username,
                        password: password,
                        hostname: hostname,
                        tenant: tenant,
                        client_id: client_id,
                        client_secret: client_secret,
                      },
                      {
                        auth: {
                          username: client_id,
                          password: client_secret,
                        },
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded",
                        },
                      }
                    )
                    .then(function (response) {
                      {
                        document.getElementById("resBody").value =
                          JSON.stringify(response.data);
                        const resp = response.data;
                        var detail = response.data.detail;
                        var statusres = response.data.status;
                        if (response.data.access_token != null) {
                          notifications.update({
                            id: "load-data",
                            color: "teal",
                            title: "Connected!",
                            message:
                              "Successfully recieved an access token:\n " +
                              JSON.stringify(response.data.access_token),
                            icon: <IconCheck size="1rem" />,
                            autoClose: 2000,
                            // autoClose: 2000,
                          });
                          sessionStorage.setItem(
                            "access_token",
                            response.data.access_token?.replace(/"/g, "")
                          );
                          const response_data = JSON.stringify(
                            "Successful authentication and obtained access token of type bearer"
                          );
                          document.getElementById("resBody").innerHTML =
                            response_data;
                        }
                      }
                      document.getElementById("status").style.color = "green";
                      {
                        !!JSON.stringify(response.data.access_token)
                          ? (document.getElementById("status").innerText =
                              "Access Token: " +
                              JSON.stringify(
                                response.data.access_token
                              )?.replace(/"/g, "") +
                              "\nToken Type: " +
                              JSON.stringify(response.data.token_type)?.replace(
                                /"/g,
                                ""
                              ) +
                              "\nExpires in: " +
                              JSON.stringify(response.data.expires_in)?.replace(
                                /"/g,
                                ""
                              ))
                          : (document.getElementById("status").innerText =
                              "Error: " +
                              JSON.stringify(
                                response.data.error_description
                              )?.replace(/"/g, ""));
                      }
                    })
                    .catch(function (error) {
                      if (error.response) {
                      } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        notifications.update({
                          id: "load-data",
                          color: "red",
                          title: "Error!",
                          message:
                            "The request was made but no response was received",
                          icon: <IconFaceIdError size="1rem" />,
                          autoClose: 2000,
                        });
                        //document.getElementById("status").innerHTML = JSON.stringify(error.request);
                      }
                    })
                : notifications.update({
                    id: "load-data",
                    color: "red",
                    title: "Error!",
                    message:
                      "Sorry, you must provide an API end point to authenticate.",
                    icon: <IconFaceIdError size="1rem" />,
                    autoClose: 2000,
                  });
            }}
          >
            Test Connection
          </Button>
        </span>
        <Text fz="xs">
          All data is saved on your browser session and we don't keep any copy
          of your data.
        </Text>
      </Group>
      <br />

      <JsonInput
        label="Response Body"
        placeholder="JSON Response Body"
        formatOnBlur
        autosize
        minRows={4}
        id="resBody"
      />
      <br />
      <Center>
        <Button
          onClick={() => {
            const response_data = document.getElementById("resBody").innerHTML;
            const { GoogleGenerativeAI } = require("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(
              "AIzaSyAiMimtz8xXBJYF53jqJnO10YS4qJoyBog"
            );
            async function run() {
              const model = genAI.getGenerativeModel({ model: "gemini-pro" });
              let prompt =
                "Explain this HID Global Authentication API " + response_data;
              document.getElementById("ai").innerHTML =
                "Analyzing with HID smart systems....";
              const result = await model.generateContent(prompt);
              const response = await result.response;
              const text = response.text();
              document.getElementById("ai").innerHTML = text;
            }
            run();
          }}
        >
          Ask Generative AI
        </Button>
      </Center>
      <Textarea
        id="ai"
        label="HID smart system's response"
        minRows={8}
      ></Textarea>
    </Box>
  );
}

export default AuthService;
