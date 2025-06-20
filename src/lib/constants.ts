export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Team", href: "/team" },
  { name: "News", href: "/news" },
];

export const teamCategories = [
  {
    title: "Professor",
    members: [
      {
        name: "Aboah Armstrong",
        role: "Associate Professor",
        image: "/team/professor.jpg",
        bio: "Associate Professor at North Dakota State University specializing in [field]. With over [X] years of experience in research and teaching.",
        email: "aboah.armstrong@ndsu.edu",
      },
    ],
  },
  {
    title: "Graduate Students",
    members: [
      {
        name: "John Doe",
        role: "Ph.D. Student",
        image: "/team/student1.jpg",
        bio: "Research focus on [topic]",
        email: "john.doe@ndsu.edu",
      },
      // Add more students as needed
    ],
  },
  {
    title: "Alumni",
    members: [
      {
        name: "Jane Smith",
        role: "Ph.D. Graduate",
        image: "/team/alumni1.jpg",
        bio: "Graduated in 2023. Currently working at [company/institution]",
        email: "jane.smith@example.com",
      },
      // Add more alumni as needed
    ],
  },
];

export const news = [
  {
    id: 1,
    title: "First Paper Publication",
    description:
      "Congratulations to Blessing for getting his first paper accepted for publication.",
    date: "2024-12-13",
    image: "/news/paper-accepted.jpg",
  },
  {
    id: 2,
    title: "NAIRR Pilot Project Grant Awarded",
    description:
      "Congratulations! The SMART Lab was awarded NAIRR Pilot Project Grant.",
    date: "2024-12-10",
    image: "/news/grant-awarded.jpg",
  },
  {
    id: 3,
    title: "AI SUSTEIN Seed Grant",
    description:
      "Congratulations! The SMART Lab received a seed grant from AI SUSTEIN.",
    date: "2024-07-08",
    image: "/news/seed-grant.jpg",
  },
  {
    id: 4,
    title: "EDRF Grant Awarded",
    description: "Congratulations! The SMART Lab was awarded an EDRF grant.",
    date: "2024-07-02",
    image: "/news/edrf-grant.jpg",
  },
  {
    id: 5,
    title: "New Ph.D Students Join Lab",
    description:
      "Excited to welcome two new Ph.D students (Blessing and Joshua) into my lab.",
    date: "2024-06-10",
    image: "/news/new-students.jpg",
  },
  {
    id: 6,
    title: "Joining North Dakota State University",
    description:
      "Congratulations! Excited to be joining North Dakota State University as an Assistant Professor.",
    date: "2023-12-29",
    image: "/news/ndsu-joining.jpg",
  },
  {
    id: 7,
    title: "Paper Accepted to NeurIPS Workshop",
    description:
      "Congratulations! Our Paper got accepted to 2023 NeurIPS workshop, Gaze Meet Machine Learning.",
    date: "2023-10-27",
    image: "/news/neurips-workshop.jpg",
  },
  {
    id: 8,
    title: "Three Papers Accepted to TRB 2024",
    description:
      "Congratulations! Three of our papers got accepted to TRB 2024.",
    date: "2023-09-25",
    image: "/news/trb-2024.jpg",
  },
  {
    id: 9,
    title: "Paper Accepted to IEOM Conference",
    description:
      "Congratulations! Our Paper got accepted to IEOM International Conference in Detroit.",
    date: "2023-08-25",
    image: "/news/ieom-conference.jpg",
  },
  {
    id: 10,
    title: "Driver Distraction Paper Accepted to HFES",
    description:
      "Congratulations! Our paper on Classification of Human Driver Distraction was accepted to HFES 67th Intl. Annual Conference.",
    date: "2023-08-16",
    image: "/news/hfes-conference.jpg",
  },
  {
    id: 11,
    title: "Gaze-Guided Graph Neural Network Paper Accepted",
    description:
      "Congratulations! Our paper on Gaze-Guided Graph Neural Network as accepted to 2024 IEEE/CVF WACV.",
    date: "2023-08-15",
    image: "/news/wacv-2024.jpg",
  },
  {
    id: 12,
    title: "Joining University of Arizona",
    description:
      "Excited to be joining the University of Arizona as an Assistant Research Professor.",
    date: "2023-08-01",
    image: "/news/arizona-joining.jpg",
  },
  {
    id: 13,
    title: "Two Papers Accepted to CVPR 2023",
    description: "Two papers accepted for presentation at CVPR 2023.",
    date: "2023-04-17",
    image: "/news/cvpr-2023.jpg",
  },
  {
    id: 14,
    title: "Postdoctoral Position at Northwestern",
    description:
      "Join Northwestern University as a Postdoctoral Student under the Supervision of Dr. Ulas Bagci",
    date: "2023-01-01",
    image: "/news/northwestern-postdoc.jpg",
  },
  {
    id: 15,
    title: "PhD Graduation",
    description:
      "Graduated with a PhD from the University of Missouri-Columbia",
    date: "2022-12-17",
    image: "/news/phd-graduation.jpg",
  },
  {
    id: 16,
    title: "Driver Maneuver Detection Paper Published",
    description:
      "Driver Maneuver Detection and Analysis using Time Series Segmentation and Classification was accepted for publication",
    date: "2022-11-07",
    image: "/news/driver-maneuver-paper.jpg",
  },
  {
    id: 17,
    title: "Mobile Sensing Paper Published",
    description:
      "Mobile Sensing for Multipurpose Applications in Transportation was accepted for publication",
    date: "2022-10-12",
    image: "/news/mobile-sensing-paper.jpg",
  },
  {
    id: 18,
    title: "Oral Presentation at CVPR",
    description:
      "Oral presentation at CVPR: A Region-Based Deep Learning Approach to Automated Retail Checkout",
    date: "2022-06-20",
    image: "/news/cvpr-presentation.jpg",
  },
];

export const publications = [
  {
    id: 1,
    title:
      "DivNEDS: Diverse Naturalistic Edge Driving Scene Dataset for Autonomous Vehicle Scene Understanding",
    authors: "John Owusu Duah, Armstrong Aboah, Stephen Osafo-Gyamfi",
    subtext: "IEEE Access",
    image: "/divnends.png",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 2,
    title:
      "Low-Light Image Enhancement Framework for Improved Object Detection in Fisheye Lens Datasets",
    authors:
      "Dai Quoc Tran, Armstrong Aboah, Yuntae Jeon, Maged Shoman, Minsoo Park, Seunghee Park",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2024)",
    image: "/lowlight.png",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 3,
    title:
      "Enhancing traffic safety with parallel dense video captioning for end-to-end event analysis",
    authors: "Maged Shoman, Dongdong Wang, Armstrong Aboah, Mohamed Abdel-Aty",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2024)",
    image: "/vidcap.png",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 4,
    title:
      "3D Object Detection and High-Resolution Traffic Parameters Extraction Using Low-Resolution LiDAR Data",
    authors: "Linlin Zhang, Xiang Yu, Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext: "TRB",
    image: "/gaze.png",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 5,
    title:
      "GazeGNN: A Gaze-Guided Graph Neural Network for Chest X-ray Classification",
    authors:
      "Bin Wang, Hongyi Pan, Armstrong Aboah, Zheyuan Zhang, Elif Keles, Drew Torigian, Baris Turkbey, Elizabeth Krupinski, Jayaram Udupa, Ulas Bagci",
    subtext: "WACV 2024 [Early Accept]",
    image: "/gaze.png",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 6,
    title:
      "Classification of Human Driver Distraction Using 3D Convolutional Neural Networks",
    authors: "Kelvin Kwakye, Armstrong Aboah, Younho Seong, Sun Yi",
    subtext:
      "Proceedings of the Human Factors and Ergonomics Society Annual Meeting",
    image: "/3dcnn.jpeg",
    links: [{ label: "Paper", url: "#" }],
    year: 2024,
  },
  {
    id: 7,
    title:
      "Image2PCI--A Multitask Learning Framework for Estimating Pavement Condition Indices Directly from Images",
    authors:
      "Neema Jakisa Owor, Hang Du, Abdulateef Daud, Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext:
      "103rd Annual Conference of the Transportation Research Board (TRB), Washington, DC",
    image: "/nemma.gif",
    links: [{ label: "arXiv", url: "#" }],
    year: 2024,
  },
  {
    id: 8,
    title:
      "3D Object Detection and High-Resolution Traffic Parameters Extraction Using Low-Resolution LiDAR Data",
    authors: "Linlin Zhang, Xiang Yu, Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext:
      "103rd Annual Conference of the Transportation Research Board (TRB), Washington, DC",
    image: "/lidar1.jpg",
    links: [],
    year: 2024,
  },
  {
    id: 9,
    title:
      "Edge Computing-Enabled Road Condition Monitoring: System Development and Evaluation",
    authors:
      "Abdulateef Daud, Mark Amo-Boateng, Neema Jakisa Owor, Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext:
      "103rd Annual Conference of the Transportation Research Board (TRB), Washington, DC",
    image: "/edge-computing.png",
    links: [{ label: "arXiv", url: "#" }],
    year: 2024,
  },
  {
    id: 10,
    title:
      "DeepSegmenter: Temporal Action Localization for Detecting Anomalies in Untrimmed Naturalistic Driving Videos",
    authors:
      "Armstrong Aboah, Ulas Bagci, Abdul Rashid Mussah, Neema Jakisa Owor, Yaw Adu-Gyamfi",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2023)",
    image: "/driver.png",
    links: [
      { label: "arXiv", url: "#" },
      { label: "code", url: "#" },
    ],
    year: 2023,
  },
  {
    id: 11,
    title:
      "Real-time Multi-Class Helmet Violation Detection Using Few-Shot Data Sampling Technique and YOLOv8",
    authors: "Armstrong Aboah, Bin Wang, Ulas Bagci, Yaw Adu-Gyamfi",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2023)",
    image: "/realpred.jpg",
    links: [
      { label: "arXiv", url: "#" },
      { label: "code", url: "#" },
    ],
    year: 2023,
  },
  {
    id: 12,
    title:
      "GAZESAM: Interactive Image Segmentation with Eye Gaze and Segment Anything Model",
    authors: "Bin Wang, Armstrong Aboah, Zheyuan Zhang, Ulas Bagci",
    subtext: "Neural Information Processing Systems (NeurIPS workshop 2023)",
    image: "/icon.gif",
    links: [
      { label: "arXiv", url: "#" },
      { label: "Paper", url: "#" },
    ],
    year: 2023,
  },
  {
    id: 13,
    title:
      "Driver maneuver detection and analysis using time series segmentation and classification",
    authors: "Armstrong Aboah, Yaw Adu-Gyamfi et al.",
    subtext: "Journal of Transportation Engineering Part A: Systems",
    image: "/maneu.png",
    links: [{ label: "arXiv", url: "#" }],
    year: 2024,
  },
  {
    id: 14,
    title:
      "Smartphone-based pavement roughness estimation using deep learning with entity embedding",
    authors: "Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext: "Advances in Data Science and Adaptive Analysis",
    image: "/pave.jpg",
    links: [
      { label: "research gate", url: "#" },
      { label: "code", url: "#" },
    ],
    year: 2024,
  },
  {
    id: 15,
    title:
      "A vision-based system for traffic anomaly detection using deep learning and decision trees",
    authors:
      "Armstrong Aboah*, Maged Shoman*, Vishal Mandal, Yaw Adu-Gyamfi et al.",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2021)",
    image: "/anomaly.jpg",
    links: [
      { label: "arXiv", url: "#" },
      { label: "CVF", url: "#" },
    ],
    year: 2021,
  },
  {
    id: 16,
    title: "A region-based deep learning approach to automated retail checkout",
    authors: "Maged Shoman*, Armstrong Aboah*, Yaw Adu-Gyamfi et al.",
    subtext:
      "IEEE / CVF Computer Vision and Pattern Recognition Conference Workshop (CVPR 2022)",
    image: "/retail-checkout.png",
    links: [
      { label: "arXiv", url: "#" },
      { label: "CVF", url: "#" },
    ],
    year: 2022,
  },
  {
    id: 17,
    title:
      "Deep learning framework for predicting bus delays on multiple routes using heterogenous datasets",
    authors: "Maged Shoman, Armstrong Aboah, Yaw Adu-Gyamfi",
    subtext: "Journal of Big Data Analytics in Transportation",
    image: "/delay.jpg",
    links: [{ label: "research gate", url: "#" }],
    year: 2024,
  },
  {
    id: 18,
    title: "Pavement Condition Prediction",
    authors:
      "Ashkan Behzadian, Tanner Wambui Muturi, Amanda Mullins, Armstrong Aboah, Yaw Adu-Gyamfi et al.",
    subtext: "arXiv",
    image: "/pav1.jpg",
    links: [
      { label: "arXiv", url: "#" },
      { label: "competition", url: "#" },
    ],
    year: 2024,
  },
  {
    id: 19,
    title: "Mobile sensing for multipurpose applications in transportation",
    authors: "Armstrong Aboah, Michael Boeding, Yaw Adu-Gyamfi",
    subtext: "Journal of Big Data Analytics in Transportation",
    image: "/virtex.jpg",
    links: [{ label: "arXiv", url: "#" }],
    year: 2024,
  },
  {
    id: 20,
    title: "GC-GRU-N for Traffic Prediction using Loop Detector Data",
    authors: "Maged Shoman, Armstrong Aboah, Abdulateef Daud, Yaw Adu-Gyamfi",
    subtext: "IEEE Transactions on Intelligent Transportation Systems",
    image: "/gcru.jpg",
    links: [{ label: "arXiv", url: "#" }],
    year: 2024,
  },
];

export const projects = [
  {
    title: "movie-recommendation-system",
    description:
      "A simple NLP algorithm for recommending movies. In this project I developed a simple movie recommendation system, that returns the top 10 movies base on a given movie title.",
    status: "Completed",
    icon: "movie",
  },
  {
    title: "naturalistic-driving-studies-nds",
    description:
      "The goal of this Project was to understand the driver's environment in a naturalistic settings.",
    status: "Completed",
    icon: "car",
  },
  {
    title: "camvid-competition",
    description:
      "This repository contains implementations of multiple deep learning models (U-Net, FCN32 and SegNet) for multiclass semantic segmentation of the CamVid dataset.",
    status: "Completed",
    icon: "layers",
  },
  {
    title: "multclass-weather-classification",
    description:
      "This project involves a multiclass classification of the weather. Three main multi-classes were considered. They are '[day,rainy]', '[night,clear]', and '[day,clear]'. The project utilizes image data sourced from smartphone camera.",
    status: "Completed",
    icon: "cloud",
  },
];
