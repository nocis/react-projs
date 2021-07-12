/*
Students may decide to take different "tracks" or sequences of courses in the Computer Science curriculum. There may be more than one track that includes the same course, but each student follows a single linear track from a "root" node to a "leaf" node. In the graph below, their path always moves left to right.

Write a function that takes a list of (source, destination) pairs, and returns the name of all of the courses that the students could be taking when they are halfway through their track of courses.

Sample input:
all_courses = [
    ["Logic", "COBOL"],
    ["Data Structures", "Algorithms"],
    ["Creative Writing", "Data Structures"],
    ["Algorithms", "COBOL"],
    ["Intro to Computer Science", "Data Structures"],
    ["Logic", "Compilers"],
    ["Data Structures", "Logic"],
    ["Creative Writing", "System Administration"],
    ["Databases", "System Administration"],
    ["Creative Writing", "Databases"],
    ["Intro to Computer Science", "Graphics"],
]

Sample output (in any order):
          ["Data Structures", "Creative Writing", "Databases", "Intro to Computer Science"]

All paths through the curriculum (midpoint *highlighted*):

*Intro to C.S.* -> Graphics
Intro to C.S. -> *Data Structures* -> Algorithms -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> COBOL
Intro to C.S. -> *Data Structures* -> Logic -> Compiler
Creative Writing -> *Databases* -> System Administration
*Creative Writing* -> System Administration
Creative Writing -> *Data Structures* -> Algorithms -> COBOL
Creative Writing -> *Data Structures* -> Logic -> COBOL
Creative Writing -> *Data Structures* -> Logic -> Compilers

Visual representation:

                    ____________
                    |          |
                    | Graphics |
               ---->|__________|
               |                          ______________
____________   |                          |            |
|          |   |    ______________     -->| Algorithms |--\     _____________
| Intro to |   |    |            |    /   |____________|   \    |           |
| C.S.     |---+    | Data       |   /                      >-->| COBOL     |
|__________|    \   | Structures |--+     ______________   /    |___________|
                 >->|____________|   \    |            |  /
____________    /                     \-->| Logic      |-+      _____________
|          |   /    ______________        |____________|  \     |           |
| Creative |  /     |            |                         \--->| Compilers |
| Writing  |-+----->| Databases  |                              |___________|
|__________|  \     |____________|-\     _________________________
               \                    \    |                       |
                \--------------------+-->| System Administration |
                                         |_______________________|

Complexity analysis variables:

n: number of pairs in the input

*/

"use strict";

const prereqs_courses1 = [
  ["Data Structures", "Algorithms"],
  ["Foundations of Computer Science", "Operating Systems"],
  ["Computer Networks", "Computer Architecture"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Computer Architecture", "Data Structures"],
  ["Software Design", "Computer Networks"],
];

const prereqs_courses2 = [
  ["Data Structures", "Algorithms"],
  ["Algorithms", "Foundations of Computer Science"],
  ["Foundations of Computer Science", "Logic"],
];

const prereqs_courses3 = [["Data Structures", "Algorithms"]];

const allCourses = [
  ["Logic", "COBOL"],
  ["Data Structures", "Algorithms"],
  ["Creative Writing", "Data Structures"],
  ["Algorithms", "COBOL"],
  ["Intro to Computer Science", "Data Structures"],
  ["Logic", "Compilers"],
  ["Data Structures", "Logic"],
  ["Creative Writing", "System Administration"],
  ["Databases", "System Administration"],
  ["Creative Writing", "Databases"],
  ["Intro to Computer Science", "Graphics"],
];

function topo(edges) {
  let head = new Set();
  let tail = new Set();
  let emap = new Map();
  edges.forEach(([h, t]) => {
    tail.add(t);
  });

  edges.forEach(([h, t]) => {
    head.add(h);
    if (tail.has(h)) {
      head.delete(h);
    }

    emap.has(h) ? emap.get(h).push(t) : emap.set(h, [t]);
  });
  console.log(emap);
  console.log(head);

  let path = [];
  head.forEach((ele) => {
    path = path.concat(getPath(ele, emap));
  });

  let res = new Set();
  path.forEach((arr) => {
    let idx = Math.floor((arr.length - 1) / 2);
    console.log(idx, arr.length, arr[idx]);
    res.add(arr[idx]);
  });
  console.log(path);
  console.log(res);
}
function getPath(head, emap) {
  let path = [];
  if (emap.has(head) && emap.get(head).length) {
    emap.get(head).forEach((ele) => {
      path = path.concat(getPath(ele, emap));
    });
  } else {
    path.push([]);
  }

  let res = path.map((i) => {
    i.unshift(head);
    return i;
  });
  return res;
}

topo(allCourses);
