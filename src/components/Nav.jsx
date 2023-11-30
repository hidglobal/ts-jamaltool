import { NavLink,Box,Navbar,ScrollArea,createStyles,rem } from "@mantine/core";
import { IconHome,IconListDetails,IconUsers,IconUserPlus,IconUserShield
,IconDeviceMobilePlus,IconDevicesPlus,IconUserQuestion,IconTools,IconFlame} from "@tabler/icons-react";
import { isActive } from "@tiptap/react";
import { useState } from 'react';
import { useLocation} from 'react-router-dom';

function Navlinks(){
    const [active, setActive] = useState(0);
    const location = useLocation();
    //console.log(location.pathname);

   return (

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
   <Box>

<NavLink component="a" label="Authentication" href="/" icon={<IconListDetails size="1rem"

/>} />

  <NavLink component="a" label="Register User" icon={<IconUserPlus size="1rem"/>} href="/register"  />
  <NavLink component="a" label="Create Password Authenticator" href="/createPasswordAuthenticator" icon={<IconUserShield size="1rem"/>} />
  <NavLink component="a" label="Create OTP Authenticator" href="/createOtpAuth" icon={<IconUserShield size="1rem"/>} />
  <NavLink component="a" href="/Users" label="View Users" icon={<IconUserQuestion size="1rem"/>} />

<NavLink
        label="Devices"
        icon={<IconDevicesPlus size="1.5rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink label="Create Device" component="a" href="/createdevice" icon={<IconDeviceMobilePlus size="1rem"/>} />
        <NavLink label="Get Device" component="a" href="/getdevice" icon={<IconDeviceMobilePlus size="1rem"/>} />
        <NavLink label="Clone Device" component="a" href="/clonedevice" icon={<IconDeviceMobilePlus size="1rem"/>} />
        <NavLink label="Assign Device" component="a" href="/assigndevice" icon={<IconDeviceMobilePlus size="1rem"/>} />
        <NavLink label="Provision Device" component="a" href="/Provisiondevice" icon={<IconDeviceMobilePlus size="1rem"/>} />
</NavLink>
<NavLink
        label="Tools"
        icon={<IconTools size="1.5rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink component="a" label="Test Password Authenticator" icon={<IconFlame size="1rem"/>} href="/pauthenticate"/>
        <NavLink component="a" href="/otpAuth" label="Test OTP Authenticator" icon={<IconFlame size="1rem"/>} />
        <NavLink label="Test Push workflow (Without CIBA)" icon={<IconFlame size="1rem"/>} />
        <NavLink label="Test Push workflow (With CIBA) Update CIBA Listener" icon={<IconFlame size="1rem"/>} />
        <NavLink label="Update CIBA Listener with Debug Logs - External Service" icon={<IconFlame size="1rem"/>} />
        <NavLink label="Logs" icon={<IconFlame size="1rem"/>} />

</NavLink>

</Box>
</Navbar.Section>

    );
  
}

export default Navlinks;