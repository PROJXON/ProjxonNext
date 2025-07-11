# PROJXON Website
![Next.js](https://img.shields.io/badge/Next.js-React-blue)
![WordPress](https://img.shields.io/badge/WordPress-Headless%20CMS-red)

## Table of contents
- [About the Project](#about-the-project)
    - [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Handover Notes](#handover-notes)

<!-- ABOUT THE PROJECT -->
## About The Project

[![PROJXON Homepage](https://www.simeondavenport.com/_next/image?url=%2Fimages%2Fprojects%2Fprojxon.PNG&w=3840&q=75)](https://projxon.com)

PROJXON is a leading business consulting firm helping medium-sized businesses achieve their full potential. This project aims to provide a comprehensive digital platform that enhances client engagement, streamlines communication, and showcases the firm's expertise through an intuitive and user-friendly website. By integrating modern design elements, responsive layouts, and optimized backend functionality, the project seeks to highlight PROJXON's services, share insightful research, and establish the firm as a trusted partner for business growth and innovation.



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![NextJS][Next.js]][Next-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Create a .env.local in root


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/PROJXON/ProjxonNext.git
   ```
2. Run npm install
3. Enter your API in frontend/projxon-web `.env`
   ```
  NEXT_PUBLIC_API_URL=https://api.projxon.com

  # WordPress API URLs
  WORDPRESS_API_URL=
  WORDPRESS_CUSTOM_API_URL=\
  WORDPRESS_JWT_URL=
  WORDPRESS_API_USERNAME=
  WORDPRESS_API_PASSWORD=

  # JWT Secret
  JWT_SECRET=

  # Email OAuth2 (for sending emails via Gmail)
  EMAIL_USER=
  EMAIL_CLIENT_ID=
  EMAIL_CLIENT_SECRET=
  EMAIL_REFRESH_TOKEN=
  EMAIL_REDIRECT_URI=
   ```

5. Start dev environment
   ```sh
   npm run dev
   ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- HANDOVER -->
## Handover Notes

<!-- - [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
<!-- ## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish -->


<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Top contributors:

<a href="https://github.com/gokillboss/Projxon/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=gokillboss/Projxon" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: projxon-web/src/assets/image.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
