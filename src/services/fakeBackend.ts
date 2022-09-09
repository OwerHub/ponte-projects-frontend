import { Iproject } from "../types/projectTypes";

const projects:Iproject[]= [
    {
        name: "Rule The World",
        description: "We threaten the world with the Great Secret Weapon. The world is scared and everyone surrenders to us. After that, we party a lot. We really beat Justin Bieber",
        colleges:[
           {
            name: "Dr. No",
            position: "Answer the questions as his name",
            id: 12345
           },
           {
            name: "Austin Powers",
            position: "Make a party... without break",
            id:23456
           },
           {
            name: "dr. Evil",
            position: "He ask... one hundred billion dollar",
            id:34567
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Develop the secret weapon",
        description: "kidnap the best scientists, force them to work, and in the end, wipe their 4000 hours of minecraft saves... muhahahha",
        colleges:[
           {
            name: "Thomas Gabriel",
            position: "he is a genius... we need it",
            id: 45678
           },
           {
            name: "Austin Powers",
            position: "Why is he here too?... I'm always everyehere, baby  ",
            id: 34256
           },
           {
            name: "Scarlett Johansson",
            position: "Everyehere need a  Scarlett Johansson",
            id:76543
           },
           {
            name: "Lauren German",
            position: "If Scarlett j was taken by the Hulk",
            id: 74845
           },
           {
            name: "Kat Dennings",
            position: "Because my friend loves her",
            id: 45464
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Rule The World",
        description: "We threaten the world with the Great Secret Weapon. The world is scared and everyone surrenders to us. After that, we party a lot. We really beat Justin Bieber",
        colleges:[
           {
            name: "Dr. No",
            position: "Answer the questions as his name",
            id: 12345
           },
           {
            name: "Austin Powers",
            position: "Make a party... without break",
            id:23456
           },
           {
            name: "dr. Evil",
            position: "He ask... one hundred billion dollar",
            id:34567
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Develop the secret weapon",
        description: "kidnap the best scientists, force them to work, and in the end, wipe their 4000 hours of minecraft saves... muhahahha",
        colleges:[
           {
            name: "Thomas Gabriel",
            position: "he is a genius... we need it",
            id: 45678
           },
           {
            name: "Austin Powers",
            position: "Why is he here too?... I'm always everyehere, baby  ",
            id: 34256
           },
           {
            name: "Scarlett Johansson",
            position: "Everyehere need a  Scarlett Johansson",
            id:76543
           },
           {
            name: "Lauren German",
            position: "If Scarlett j was taken by the Hulk",
            id: 74845
           },
           {
            name: "Kat Dennings",
            position: "Because my friend loves her",
            id: 45464
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Rule The World",
        description: "We threaten the world with the Great Secret Weapon. The world is scared and everyone surrenders to us. After that, we party a lot. We really beat Justin Bieber",
        colleges:[
           {
            name: "Dr. No",
            position: "Answer the questions as his name",
            id: 12345
           },
           {
            name: "Austin Powers",
            position: "Make a party... without break",
            id:23456
           },
           {
            name: "dr. Evil",
            position: "He ask... one hundred billion dollar",
            id:34567
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Develop the secret weapon",
        description: "kidnap the best scientists, force them to work, and in the end, wipe their 4000 hours of minecraft saves... muhahahha",
        colleges:[
           {
            name: "Thomas Gabriel",
            position: "he is a genius... we need it",
            id: 45678
           },
           {
            name: "Austin Powers",
            position: "Why is he here too?... I'm always everyehere, baby  ",
            id: 34256
           },
           {
            name: "Scarlett Johansson",
            position: "Everyehere need a  Scarlett Johansson",
            id:76543
           },
           {
            name: "Lauren German",
            position: "If Scarlett j was taken by the Hulk",
            id: 74845
           },
           {
            name: "Kat Dennings",
            position: "Because my friend loves her",
            id: 45464
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Rule The World",
        description: "We threaten the world with the Great Secret Weapon. The world is scared and everyone surrenders to us. After that, we party a lot. We really beat Justin Bieber",
        colleges:[
           {
            name: "Dr. No",
            position: "Answer the questions as his name",
            id: 12345
           },
           {
            name: "Austin Powers",
            position: "Make a party... without break",
            id:23456
           },
           {
            name: "dr. Evil",
            position: "He ask... one hundred billion dollar",
            id:34567
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    },
    {
        name: "Develop the secret weapon",
        description: "kidnap the best scientists, force them to work, and in the end, wipe their 4000 hours of minecraft saves... muhahahha",
        colleges:[
           {
            name: "Thomas Gabriel",
            position: "he is a genius... we need it",
            id: 45678
           },
           {
            name: "Austin Powers",
            position: "Why is he here too?... I'm always everyehere, baby  ",
            id: 34256
           },
           {
            name: "Scarlett Johansson",
            position: "Everyehere need a  Scarlett Johansson",
            id:76543
           },
           {
            name: "Lauren German",
            position: "If Scarlett j was taken by the Hulk",
            id: 74845
           },
           {
            name: "Kat Dennings",
            position: "Because my friend loves her",
            id: 45464
           }
        ],
        links: [
            "secret", "secret", "secret"
        ]
    }
 

] 


export function fakebackendAnswer (timeToWait: number) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(projects)
        }, timeToWait);
    })
 }