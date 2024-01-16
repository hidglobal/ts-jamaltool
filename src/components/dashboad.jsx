import { Center, Grid, Paper, Box, Timeline, Badge, Text} from "@mantine/core";
import { Blockquote } from "@mantine/core";
import { IconCheck, IconFlame,IconUserCircle } from "@tabler/icons-react";
function Dashboard(){


    function getDateTime() {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
    };
    setInterval(function(){
        let currentTime = getDateTime();
        document.getElementById("digital-clock").innerHTML =  currentTime;
    }, 1000);
    return(
<>
<Box>
    <Center><h1>HID Auth Diagnostic Tool v0.1</h1></Center>
    <Center>
    <Badge color="indigo" size="xl" radius="lg" variant="dot">
      <div id='digital-clock'></div>
      </Badge>
    </Center>

<Grid>

<Grid.Col span={6}><Paper>HID Auth Diagnostic project is set of tools are designed to help HID teams and customers in Authentication API training and diagnosis of the root causes of API errors with the power of AI.</Paper>
<b>Features:</b>
<Center>
<Timeline  active={13} bulletSize={24} lineWidth={2}>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Register a user"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Get list of Users"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Get a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Assign a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Clone a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Provision Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create Password Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create OTP Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test Password Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test OTP Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test HID Approve TOTP"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test HID Approve Push Authentication"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Update CIBA Listener"></Timeline.Item>
    <Timeline.Item title="More" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed"><Text size="xs" mt={4}>coming soon</Text></Timeline.Item>
    
    </Timeline>
    </Center>
</Grid.Col>
<Grid.Col span={6}>   
<Blockquote
      cite="– Mohamed Jamal"
      icon={<IconFlame size="1.5rem" />}
    >
      Analysis HID Authentication OpenID/SCIM APIs and find root causes with ease.
    </Blockquote>
    <br/>
    <h3>Credits:</h3>
    <Timeline  active={13} bulletSize={24} lineWidth={2}>
    <Timeline.Item bullet={<IconUserCircle size={18} />} title="Mohamed, Jamal" >
        <Text color="dimmed" size="sm">Civil engineer, Software engineer, Technical Support engineer with HID.</Text>
        <Text color="dimmed" size="sm">Adept at bridging the gap between traditional engineering and cutting-edge technology to enhance project efficiency.</Text>
        <Text size="xs" mt={4}>cutting-edge technology, Innovation, Ideas, development, and testing.</Text>
    </Timeline.Item>
    <Timeline.Item bullet={<IconUserCircle size={18} />} title="Madan, Dinesh" >
        <Text color="dimmed" size="sm">Consumer Authentication Partner Services Manager.</Text>
        <Text size="xs" mt={4}>Innovation, Ideas and testing.</Text>
    </Timeline.Item>
    <Timeline.Item bullet={<IconUserCircle size={18} />} title="Preece, Darren" >
        <Text color="dimmed" size="sm">Associate Director, Technical Support.</Text>
        <Text size="xs" mt={4}>Motivation and Innovation.</Text>
    </Timeline.Item>
    <Timeline.Item bullet={<IconUserCircle size={18} />} title="Dunn, Colin" >
        <Text color="dimmed" size="sm">Manager, Technical Support</Text>
        <Text size="xs" mt={4}>Motivation, Innovation and testing.</Text>
    </Timeline.Item>
    </Timeline>
    </Grid.Col>
</Grid>
</Box>
</>
    );
}
export default Dashboard;