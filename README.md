
# HID Authentication Diagnostic Project

HID Auth Diagnostic project offers a comprehensive suite of tools tailored for Web, Windows, Linux, and macOS platforms. These tools are specifically crafted to facilitate HID teams and customers in the realm of Authentication API training, empowering them to diagnose and pinpoint the root causes of API errors. Harnessing the capabilities of artificial intelligence, this cross-platform application aids the HID teams, and customers by providing valuable insights and assistance in the training process, and diagnosis.
ensuring a smoother and more efficient authentication experience.

[![CodeQL](https://github.com/hidglobal/ts-jamaltool/actions/workflows/codeql.yml/badge.svg)](https://github.com/hidglobal/ts-jamaltool/actions/workflows/codeql.yml)

## Live

You can test, train, and diagnostic your HID API endpoint on https://mrdoc.hiddemo.com/

## Dependencies

[Mantine](https://mantine.dev/) - User interface

[Socket.io](https://socket.io/) - Real-time CIBA notifications.

[ElectronJS](https://www.electronjs.org/) - Cross-platform desktop applications.

[ExpressJS](https://expressjs.com/) 

[Google AI SDK](https://github.com/google/generative-ai-js)

[QRcode.js](https://davidshimjs.github.io/qrcodejs/)

[ViteJS](https://vitejs.dev/)

[axios](https://axios-http.com/)

## Run Production Docker Container
[ NodeJS isn't required ]

This is going to download the optimized production build of the project build.zip which is only index.html, css, and js files then run it inside Alpine-nginx or ubuntu docker container. 

Please follow the instructions below:

1- Copy your desired docker file in your working directory, we have two docker files:

[Dockerfile](https://github.com/hidglobal/ts-jamaltool/blob/main/Dockerfile) is ubuntu and nginx
    
[Dockerfile-Alpine-Nginx](https://github.com/hidglobal/ts-jamaltool/blob/main/Dockerfile-Alpine-Nginx) is Alpine Linux and nginx

2- Build a docker image

```bash
  docker build -t hidiagdockerimage .
```
3- Build and run a docker container from the previously built docker image.

```bash
  docker container run -p 8080 -d --name hidiagcontainername hidiagdockerimage .
```

Now visit localhost:8080 

Enjoy!

## Run Development version Locally

Clone the project

```bash
  git clone https://github.com/hidglobal/ts-jamaltool.git
```

Go to the project directory

```bash
  cd ts-jamaltool
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## Screenshot

![Project Screenshot](https://gcdnb.pbrd.co/images/ZpCXzPZv7MFv.png?o=1)

## Authors

- Mohamed Jamal - [@mohamed-ghayyad](https://github.com/mohamed-ghayyad) 
- Dinesh - Partner Services Manager
- Darren Preece - Director of Technical Support
- Colin Dunn - Manager of Technical Support 

## License

IMPORTANT READ CAREFULLY – THESE TERMS APPLY TO THE COMPONENTS OR CODES (“COMPONENTS”) DISTRIBUTED BY HID GLOBAL CORPORATION OR AN HID GLOBAL CORPORATION AFFILIATED ENTITY (“HID”) FOR USE TO ALLOW YOU (YOU MAY ALSO BE REFERRED TO AS “YOUR”) TO INTEGRATE WITH THE HID AUTHENTICATION PLATFORM. BY USING, ACCESSING, OR DOWNLOADING THE COMPONENTS, YOU ACKNOWLEDGE THAT YOU HAVE READ THIS END USER LICENSE AGREEMENT (“EULA”), THAT YOU UNDERSTAND IT, AND THAT YOU AGREE TO BE BOUND BY ITS TERMS. IF YOU DO NOT AGREE TO THE TERMS AND CONDITIONS OF THIS EULA, YOU MAY NOT USE, ACCESS, or DOWNLOAD THE COMPONENTS IN ANY WAY OR FORM, IN PART OR IN WHOLE.

Ownership. The Components are licensed under the terms of this EULA, not sold. The Components and all authorized copies thereof, shall remain the exclusive property of HID, and shall not be used in any way other than as allowed by this EULA. You acknowledge that, as between HID and You, the Components and all Intellectual Property Rights with respect thereto, are and will at all times be the property of HID, even if Feedback (as defined below) is incorporated into current or subsequent versions of the Components. As used herein, “Intellectual Property Rights” mean worldwide common law and statutory rights associated with (a) patents and patent applications; (b) works of authorship, including mask work rights, copyrights, copyright applications, copyright registrations and “moral” rights; (c) the protection of trade and industrial secrets and confidential information; (d) all rights to registered and common law trademarks, trade names, trade dress, and service marks; and (e) other proprietary rights relating to intangible intellectual property (including but not limited to designs, design rights, source codes, proprietary material, know-how, ideas, concepts, methods, techniques, rights in databases and all other intellectual property rights and rights of a similar character whether registered or capable of registration).

Feedback. You may, from time to time, provide suggestions, comments or other feedback to HID with respect to the Components ("Feedback"). You agree that all Feedback is and shall be entirely voluntary. HID shall be free to disclose and use such Feedback as it sees fit, entirely without obligation of any kind to You.

License Grant. Subject to Your compliance with the terms of this EULA, HID grants You a revocable, non-exclusive, worldwide license, free of charge, to use, access, download, copy, modify, re-distribute, or merge the Components.

Term. This EULA will begin on the date You first use, access, or download the Components, and will continue to the extent such Components, in whole or in part, remain in Your possession or control. HID may terminate this EULA in its sole discretion at any time with or without prior notice to You. At the request of HID or upon the termination of this EULA, You will immediately stop using or accessing the Components, and return or destroy the Components, in whole or in part, including any copies thereof.

DISCLAIMER OF WARRANTY. EXCEPT AS EXPRESSLY STATED IN THIS EULA, THE COMPONENTS ARE PROVIDED “AS IS.” TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAWS, HID EXPRESSLY DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NONINFRINGEMENT. HID DOES NOT WARRANT THAT THE COMPONENTS WILL MEET YOUR REQUIREMENTS, OR THAT THE OPERATION OF THE COMPONENTS WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT DEFECTS IN THE COMPONENTS WILL BE CORRECTED. FURTHERMORE, NEITHER HID WARRANT OR MAKE ANY REPRESENTATIONS AND DISCLAIMS ALL LIABILITY REGARDING ANY LOSS OF DATA OR LOSS OF USE OF DATA (INCLUDING PERSONAL DATA), THE PERFORMANCE OR THE RESULTS OF THE USE OF THE COMPONENTS IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE. NO ORAL OR WRITTEN INFORMATION OR ADVICE GIVEN BY HID OR ITS AUTHORIZED REPRESENTATIVE SHALL CREATE A WARRANTY OR IN ANY WAY INCREASE THE SCOPE OF THIS WARRANTY. THE FOREGOING LIMITATIONS AND EXCLUSIONS APPLY TO THE EXTENT PERMITTED BY APPLICABLE LAW IN YOUR JURISDICTION. IF APPLICABLE LAW LIMITS THE APPLICATION OF THE PROVISIONS OF THIS SECTION, HID’S LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMISSIBLE.

LIMITATION OF LIABILITY. HID, ITS AGENTS, AND SUPPLIERS SHALL HAVE NO LIABILITY WHATSOEVER TO YOU IN CONNECTION WITH THE TERMS OF THIS EULA, INCLUDING WITHOUT LIMITATION, LIABILITY FOR ANY PROBLEMS IN OR CAUSED BY THE COMPONENTS, WHETHER DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL (INCLUDING LOST PROFITS), EVEN IF HID HAS BEEN ADVISED OF OR OTHERWISE HAS REASON TO KNOW OF THE POSSIBILITY OF SUCH DAMAGES. FURTHER LIABILITY FOR SUCH DAMAGE WILL BE EXCLUDED.

Entire Agreement. Unless agreed otherwise in signed writing by HID, the terms of this EULA contain the whole agreement between the parties relating to the subject matter hereof and supersedes all prior agreements, arrangements and understandings between the parties relating to that subject matter.
