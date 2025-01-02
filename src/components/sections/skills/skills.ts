import Dart from "@assets/skills/dart.svg";
import Firebase from "@assets/skills/firebase.svg";
import Flutter from "@assets/skills/flutter.svg";
import JavaScript from "@assets/skills/javascript.svg";
import Node from "@assets/skills/node.svg";
import Nuxt from "@assets/skills/nuxt.svg";
import React from "@assets/skills/react.svg";
import Sass from "@assets/skills/sass.svg";
import SQL from "@assets/skills/sql.svg";
import Tailwind from "@assets/skills/tailwind.svg";
import Testing from "@assets/skills/testing.svg";
import TypeScript from "@assets/skills/typescript.svg";
import Vue from "@assets/skills/vue.svg";

export interface Skill {
  name: string;
  icon: string;
}

export const skills: Array<Skill> = [
  {
    name: "Flutter",
    icon: Flutter.src,
  },
  {
    name: "Node.js",
    icon: Node.src,
  },

  {
    name: "Vue.js",
    icon: Vue.src,
  },

  {
    name: "Nuxt",
    icon: Nuxt.src,
  },
  {
    name: "React",
    icon: React.src,
  },
  {
    name: "Firebase",
    icon: Firebase.src,
  },
  {
    name: "SQL",
    icon: SQL.src,
  },
  {
    name: "Testing",
    icon: Testing.src,
  },
  {
    name: "Dart",
    icon: Dart.src,
  },
  {
    name: "JavaScript",
    icon: JavaScript.src,
  },
  {
    name: "TypeScript",
    icon: TypeScript.src,
  },
  {
    name: "Sass",
    icon: Sass.src,
  },
  {
    name: "Tailwind",
    icon: Tailwind.src,
  },
];
