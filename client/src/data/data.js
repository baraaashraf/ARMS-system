import { iconsImgs,personsImgs } from "../utils/images";


export const navigationLinks = [
  {
    id: 1,
    title: "Home",
    image: iconsImgs.home,
    link: "/",
  },
  {
    id: 2,
    title: "Academic Program",
    image: iconsImgs.budget,
    link: "/academic_program",
  },
  {
    id: 3,
    title: "Template Cirriclum Review",
    image: iconsImgs.plane,
    link: "/TCR",
  },
  {
    id: 4,
    title: "About Us",
    image: iconsImgs.about_us,
    link: "/about_us",
  },
  {
    id: 5,
    title: "Account",
    image: iconsImgs.user,
    link: "/account",
  },
  {
    id: 6,
    title: "Settings",
    image: iconsImgs.gears,
    link: "/settings",
  },
];

export const transactions = [
  {
    id: 11,
    name: "Sarah Parker",
    image: personsImgs.person_four,
    date: "23/12/04",
    amount: 22000,
  },
  {
    id: 12,
    name: "Krisitine Carter",
    image: personsImgs.person_three,
    date: "23/07/21",
    amount: 20000,
  },
  {
    id: 13,
    name: "Irene Doe",
    image: personsImgs.person_two,
    date: "23/08/25",
    amount: 30000,
  },
];

export const reportData = [
  {
    id: 14,
    month: "Jan",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "Feb",
    value1: 45,
    value2: 60,
  },
  {
    id: 16,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Apr",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "May",
    value1: 45,
    value2: null,
  },
];

export const budget = [
  {
    id: 19,
    title: "Subscriptions",
    type: "Automated",
    amount: 22000,
  },
  {
    id: 20,
    title: "Loan Payment",
    type: "Automated",
    amount: 16000,
  },
  {
    id: 21,
    title: "Foodstuff",
    type: "Automated",
    amount: 20000,
  },
  {
    id: 22,
    title: "Subscriptions",
    type: null,
    amount: 10000,
  },
  {
    id: 23,
    title: "Subscriptions",
    type: null,
    amount: 40000,
  },
];

export const subscriptions = [
  {
    id: 24,
    title: "LinkedIn",
    due_date: "23/12/04",
    amount: 20000,
  },
  {
    id: 25,
    title: "Netflix",
    due_date: "23/12/10",
    amount: 5000,
  },
  {
    id: 26,
    title: "DSTV",
    due_date: "23/12/22",
    amount: 2000,
  },
];

export const BITphases = [
  {
    phaseName: "Phase 1",
    phaseTitle: "Establishment of New Academic Programme",
    link: "phase1",
  },
  {
    phaseName: "Phase 2",
    phaseTitle: "Provisional Accreditation Process Flow (Appendix A)",
    link: "phase2",
  },
  {
    phaseName: "Phase 3",
    phaseTitle: "Full Accreditation Process Flow (Appendix B)",
    link: "phase3",
  },
  {
    phaseName: "Phase 4",
    phaseTitle: "Curriculum Review Process Flow (Appendix C)",
    link: "phase4",
  },
  {
    phaseName: "Phase 5",
    phaseTitle: "New-cycle Accreditation/PMA Process Flwo (Appendix D)",
    link: "phase5",
  },
];

export const BITphase4 = [
  {
    title: "Internal and external assesors managment",
  },
  {
    title: "Preparing self-review report",
  },
  {
    title:
      "Preparing Strength, Weakness, Opportunity and Threat (SWOT) analysis",
  },
  {
    title: "Conducting alumni, industry and graduates survey and analysis",
  },
  {
    title: "Obtainging feedback from Board of Studies members",
  },
  {
    title: "Conducting benchmarking visit(s)",
  },
  {
    title:
      "Reviewing Programme Educatinoal Objectives (PEO), Programme Learning Outcomes (PLO) and Sejahtera Academic Framework (SAF) Elements",
  },
  {
    title: "Reviewing programme curriculum structure and course outline",
  },
  {
    title: "Proposal",
  },
];

export const TimelineData = [
  {
    Date: "Friday, 24 Nov",
    Title: "Appointing Assessors",
    Desc: "Internal and External Assessor Appointments",
  },
  {
    Date: "Monday, 15 Jan",
    Title: "Self-Review Report Preparation",
    Desc: "Facultyy Members Prepare Self-Review Reports",
  },
  {
    Date: "Friday, 24 Nov",
    Title: "SWOT Analysis",
    Desc: "Conduct SWOT Analysis Workshops",
  },
];
