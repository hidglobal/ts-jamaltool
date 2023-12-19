import { Center, Grid, Paper, Box, Timeline, Badge} from "@mantine/core";
import { Blockquote } from "@mantine/core";
import { IconCheck, IconFlame,IconGitBranch, IconTicTac } from "@tabler/icons-react";
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

<Grid.Col span={6}><Paper>HID Auth Diagnostic project is set of tools are designed to help HID teams in API training and diagnosis of the root causes of API errors.</Paper>
<b>Features:</b>
<Center>
<Timeline  active={13} bulletSize={24} lineWidth={2}>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Register a user"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Get list of Users"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test Password Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test OTP Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test HID Approve TOTP"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Test HID Approve Push Authentication"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Get a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Assign a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Clone a Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Provision Device"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create Password Authenticator"></Timeline.Item>
    <Timeline.Item bullet={<IconCheck size={12} />} title="Create OTP Authenticator"></Timeline.Item>
    
    </Timeline>
    </Center>
</Grid.Col>
<Grid.Col span={6}>   
<Blockquote
      cite="– Mohamed Jamal"
      icon={<IconFlame size="1.5rem" />}
    >
      Analysis HID Authentication OpenID/SCIM APIs and find root causes with ease.
    </Blockquote></Grid.Col>
</Grid>
</Box>
</>
    );
}
export default Dashboard;