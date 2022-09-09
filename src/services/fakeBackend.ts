import { IncomingMessage } from "http";
import { Iproject } from "../types/projectTypes";

let projects: Iproject[] = [
  {
    name: "Rule The World",
    description:
      "We threaten the world with the Great Secret Weapon. The world is scared and everyone surrenders to us. After that, we party a lot. We really beat Justin Bieber",
    collaborators: [
      {
        name: "Dr. No",
        position: "Answer the questions as his name",
        id: 1576996323453,
      },
      {
        name: "Austin Powers",
        position: "Make a party... without break",
        id: 1576996323454,
      },
      {
        name: "dr. Evil",
        position: "He ask... one hundred billion dollar",
        id: 1576996323454,
      },
    ],

    id: 324234234234,
  },
  {
    name: "Develop the secret weapon",
    description:
      "kidnap the best scientists, force them to work, and in the end, wipe their 4000 hours of minecraft saves... muhahahha",
    collaborators: [
      {
        name: "Thomas Gabriel",
        position: "he is a genius... we need it",
        id: 1576323453,
      },
      {
        name: "Austin Powers",
        position: "Why is he here too?... I'm always everyehere, baby  ",
        id: 34256,
      },
      {
        name: "Scarlett Johansson",
        position: "Everyehere need a  Scarlett Johansson",
        id: 76543,
      },
      {
        name: "Lauren German",
        position: "If Scarlett j was taken by the Hulk",
        id: 74845,
      },
      {
        name: "Kat Dennings",
        position: "Because my friend loves her",
        id: 45464,
      },
    ],
    links: [
      {
        name: "Pizza",
        link: "https://awesome-saha-f9c0ec.netlify.app/",
        id: 69696969,
      },
      {
        name: "CV",
        link: "https://awesome-saha-f9c0ec.netlify.app/",
        id: 1234565789,
      },
      {
        name: "GTA",
        link: "https://priceless-feynman-7c7fe0.netlify.app/",
        id: 1234565789,
      },
    ],

    id: 234234234234,
  },
];

export function fakebackendAnswer(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}

export function fakebackendAdd(project: Iproject, timeToWait: number) {
  if (!projects.some((oneProject) => oneProject.id === project.id)) {
    projects.push(project);
  } else console.log("ebbű kettő van!");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}

export function fakebackendDelete(deleteProjectID: number, timeToWait: number) {
  projects = projects.filter((project) => project.id !== deleteProjectID);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, timeToWait);
  });
}


export function fakebackendResults(inComingid: number, timeToWait: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects.find(project=> project.id === inComingid));
      }, timeToWait);
    });
  }