/*
This is my resumerBuilder.js solution to take care of dynamically adding content to my resume.
It contains information about the schema for objects and display function implementations.

David Emukpere. a.k.a siriusted
 */
/*
Create objects bio, education, work and projects according to given schema.
Modifications include:
- a url property "forEach" job object in the work.jobs array
- a certificate property "forEach" course object in the education.onlineCourses array
- a url property "forEach" project object in the projects.projects array
*/
var bio = {
  name: "David Emukpere",
  role: "Front-End Web Developer",
  contacts: {
    mobile: "(+234)-807 864 1735",
    email: "davidemukpere@gmail.com",
    github: "siriusted",
    twitter: "@siriusted",
    location: "Lagos"
  },
  welcomeMessage: "All or nothing. Passionate about technology, life, music and sports.",
  skills: ["Programming Languages: JavaScript, C++, Python",
    "Web Technologies: HTML, CSS, jQuery", "Electronics", "Piano", "Soccer"
  ],
  biopic: "images/david.jpg"
};

var education = {
  schools: [{
    name: "University of Lagos",
    location: "Yaba, Lagos",
    degree: "B.Sc.(Hons.)",
    majors: ["EE"],
    dates: "12/2009 - 02/2015",
    url: "http://www.unilag.edu.ng"
  }],
  onlineCourses: [{
      title: "Front End Developer Nanodegree",
      school: "Udacity",
      dates: "07/2017 - 08/2017",
      url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
      certificate: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    },
    {
      title: "Machine Learning",
      school: "Stanford University (Coursera)",
      dates: "12/2016 - 02/2017",
      url: "https://www.coursera.org/learn/machine-learning",
      certificate: "https://www.coursera.org/account/accomplishments/records/59DJZ5Y9VHEZ"
    },
    {
      title: "Algorithmic Toolbox",
      school: "University of California San Diego (Coursera)",
      dates: "09/2016 - 10/2016",
      url: "https://www.coursera.org/learn/algorithmic-toolbox",
      certificate: "https://www.coursera.org/account/accomplishments/records/LN6TEVULGVTA"
    },
  ]
};

var work = {
  jobs: [{
      employer: "Total Ascent",
      title: "Tutor",
      location: "Lekki, Lagos",
      dates: "11/2015 - in progress",
      description: "Deliver lectures explaining concepts tested on standardized exams such as the G.R.E. and G.M.A.T. Also conduct private individual coaching sessions for the aforementioned exams.",
      url: "http://www.total-ascent.com/",
    },
    {
      employer: "Aero Contractors Company",
      title: "Avionics Engineer Intern",
      location: "Ikeja, Lagos",
      dates: "05/2013 - 10/2013",
      description: "Participated in periodic maintenance checks on aircraft avionics systems e.g. T.C.A.S (Traffic Collision and Avoidance System) under the supervision of licensed avionics engineers. Also undertook bench repairs of defective electronic equipment used aboard the aircraft e.g. public address microphones.",
      url: "http://www.flyaero.com/",
    },
  ]
};

var projects = {
  projects: [{
      title: "Design of a voice-activated micro-aerial vehicle",
      dates: "08/2016 - 11/2016",
      description: "Designed and coded the control algorithm for a micro-aerial vehicle. Also, implemented communication between ground station and the vehicle with x-bee wireless communication modules.",
      images: ["images/awodi.jpg"],
      url: "#"
    },
    {
      title: "Design and Construction of a Prototype Electric Vehicle",
      dates: "02/2014 - 02/2015",
      description: "Designed a 3-Phase Brushless DC motor controller for the vehicle's propulsion system. Developed embedded control software in C++ using the Arduino platform. Also, fabricated the power electronics module for the controller. Vehicle entered for the Shell Eco Marathon Europe and Africa editions in 2014",
      images: ["images/sema.jpg", "images/semb.jpg"],
      url: "#"
    },
  ]
};

/*
The following section takes care of dynamically adding content to the resume with the help of helper.js
Each display function is encapsulated in the object representing the section it displays 
*/

/*
Bio display function. Adds information into the bio section. I feel there should be a cleaner and less repetitive way of doing this.
Unfortunately, I couldn't crack how to do this.
*/

bio.display = function() {
  var header = document.querySelector("#header");
  var hContacts = document.querySelector("#topContacts");
  var fContacts = document.getElementById("footerContacts");
  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  hContacts.innerHTML += formattedMobile + formattedEmail + formattedGithub +
    formattedTwitter + formattedLocation;
  fContacts.innerHTML += formattedMobile + formattedEmail + formattedGithub +
    formattedTwitter + formattedLocation;
  header.innerHTML = formattedHeaderName + formattedHeaderRole + header.innerHTML;
  header.innerHTML += formattedBioPic + formattedWelcomeMsg + HTMLskillsStart;
  var skills = document.querySelector("#skills");
  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    skills.innerHTML += formattedSkill;
  });
};

/*
Work display function. Basically iterate through the job objects in work.jobs array, and add them to the appropriate section
*/

work.display = function() {
  var workExperience = document.querySelector("#workExperience");
  work.jobs.forEach(function(job) {
    workExperience.innerHTML += HTMLworkStart;
    var formattedEmployer = HTMLworkEmployer.replace("#", job.url).replace(
      "%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    document.querySelector("#workExperience div:last-child").innerHTML =
      formattedEmployer + formattedTitle + formattedDates +
      formattedLocation + formattedDescription;
  });

};

/*
Education display function. Similar to work display function, just this time there are two properties with array 
types to be looped through and displayed accurately.
*/

education.display = function() {
  var schools = document.getElementById("education");
  education.schools.forEach(function(school) {
    schools.innerHTML += HTMLschoolStart;
    var formattedName = HTMLschoolName.replace("#", school.url).replace(
      "%data%", school.name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var entry = document.querySelector("#education div:last-child");
    entry.innerHTML = formattedName + formattedDegree + formattedDates +
      formattedLocation;
    school.majors.forEach(function(major) {
      entry.innerHTML += HTMLschoolMajor.replace("%data%", major);
    });
  });
  schools.innerHTML += HTMLonlineClasses;
  education.onlineCourses.forEach(function(course) {
    schools.innerHTML += HTMLschoolStart;
    var formattedTitle = HTMLonlineTitle.replace("#", course.url).replace(
      "%data%", course.title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedUrl = HTMLonlineURL.replace("#", course.certificate).replace(
      "%data%", course.url);
    document.querySelector("#education div:last-child").innerHTML +=
      formattedTitle + formattedSchool + formattedDates + formattedUrl;
  });
};

/*
Project display function. Similar to otherr display functions as well. Iterate through the projects.projects array, 
and add them to the appropriate section
*/

projects.display = function() {
  var projectsDone = document.querySelector("#projects");
  projects.projects.forEach(function(project) {
    projectsDone.innerHTML += HTMLprojectStart;
    var formattedTitle = HTMLprojectTitle.replace("#", project.url).replace(
      "%data%", project.title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%",
      project.description);
    var entry = document.querySelector("#projects div:last-child");
    entry.innerHTML = formattedTitle + formattedDates +
      formattedDescription;
    project.images.forEach(function(image) {
      entry.innerHTML += HTMLprojectImage.replace("%data%", image);
    });
  });
};


//Call each of the objects display function to display its contents in the resume. Using a forEach loop just cause it's pretty :)
[bio, education, work, projects].forEach(function(section) {
  section.display();
});

//Abracadabra. Map appear
document.getElementById("mapDiv").innerHTML += googleMap;