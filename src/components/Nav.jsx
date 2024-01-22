import { NavLink,Box,Navbar,ScrollArea,createStyles,rem } from "@mantine/core";
import { useDisclosure, useSessionStorage } from "@mantine/hooks";
import { IconHome,IconChevronRight,IconUsers,IconUserPlus,IconUserShield
,IconDeviceMobilePlus,IconDevicesPlus,IconUserQuestion,IconTools,IconFlame,IconActivity,IconFingerprint,IconGauge, IconUserCode, IconDeviceMobileBolt, IconDeviceCameraPhone, IconUserCog, IconUserCheck, IconEar} from "@tabler/icons-react";
import { isActive } from "@tiptap/react";
import { useReducer, useState } from 'react';
import { useLocation} from 'react-router-dom';

function Navlinks(){
  if(sessionStorage.getItem('activeItem')===null){
    sessionStorage.setItem('activeItem',0);
  }

    const [active, setActive] = useState(sessionStorage.getItem('activeItem'));
    const location = useLocation();
    const data = [
      { icon: IconGauge, label: 'Dashboard',href:'/'},
      {
        icon: IconFingerprint,
        label: 'Authentication',
        href:'/#/authentication'
      },
      { icon: IconUserPlus, label: 'Register user',href:'/#/register' },
      {icon: IconUserQuestion, label:'Users', href:'/#/Users'},
      {icon:IconDeviceMobilePlus,label:'Create Device',href:'/#/createdevice'},
      {icon:IconDeviceMobileBolt,label:'Get Device', href:'/#/getdevice'},
      {icon:IconDeviceCameraPhone,label:'Clone Device',href:'/#/clonedevice'},
      {icon:IconUserCog,label:'Assign Device',href:'/#/assigndevice'},
      {icon:IconUserCheck,label:'Provision Device',href:'/#/Provisiondevice'},
      {icon:IconUserShield,label: 'Create Password Authenticatior', href: '/#/createPasswordAuthenticator'},
      {icon:IconUserCode, label: 'Create OTP Authenticator', href:'/#/createOtpAuth'},
      {icon:IconFlame, label:'Test Password Authenticator',href:'/#/pauthenticate'},
      {icon:IconTools,label:'Test OTP Authenticator',href:'/#/otpAuth'},
      {icon:IconTools,label:'Test HID Approve TOTP', href:'/#/approvetotp'},
      {icon:IconGauge,label:'Test HID Approve Push Auth',href:'/#/approvepush'},
      {icon:IconEar,label:'Update CIBA Listener', href:'/#/updateCIBA'}
    ];
    const second = [


    ];
    const items = data.map((item, index) => (
      <NavLink
        key={item.label}
        active={index == active}
        label={item.label}
        description={item.description}
        rightSection={item.rightSection}
        component="a"
        href={item.href}
        icon={<item.icon size="1rem" stroke={1.5} />}
        onClick={() => {sessionStorage.setItem('activeItem',index);setActive(index);}}
        variant="filled"
      />
    ));


   return (

      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
   <Box>

   {items}


</Box>
</Navbar.Section>

    );
  
}

export default Navlinks;