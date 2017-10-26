var formattedName = HTMLheaderName.replace("%data%", "Filipe Vaz");
var formattedRole = HTMLheaderRole.replace("%data%", " ");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var formattedbioPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").append(formattedbioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%","Welcome to my resume site!");
$("#header").append(formattedwelcomeMsg);
var formattedskillsStart = HTMLskillsStart;
$("#header").append(formattedskillsStart);
var formattedSkills = HTMLskills.replace("%data%", "HTML, CSS, JS, Python, Rails, Android");
$("#header").append(formattedSkills);
var formattedMobile = HTMLmobile.replace("%data%", "(27)99811-3589");
$("#topContacts").prepend(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", "filipealvesvaz@gmail.com");
$("#topContacts").prepend(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", "filipealvesvaz");
$("#topContacts").prepend(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", "@filipealvesvaz");
$("#topContacts").prepend(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", "Serra-ES");
$("#topContacts").prepend(formattedLocation);

 var work = {
     "jobs": [
     	{
          "employer": "effe",
          "title": "Developer" ,
          "location": "Serra", 
          "dates": "Currently",
          "description": "Full-Stack, Android"
        },
        {
          "employer": "SEDU",
          "title": "Intructor" ,
          "location": "Serra", 
          "dates": "Currently",
          "description": "Teaching programming classes"
        },
        {
          "employer": "SENAI",
          "title": "Intructor" ,
          "location": "Serra", 
          "dates": "2009 - 2015",
          "description": "Teaching programming classes"
        },     
        {
          "employer": "FABRA",
          "title": "Professor" ,
          "location": "Serra", 
          "dates": "2011 - 2012",
          "description": "Teaching programming classes"
        },
                 
    ],

    "display": function(){
        $("#workExperience").append(HTMLworkStart)
        work.jobs.forEach(function(job){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer)
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title)
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location)
        var formattedDates = HTMLworkDates.replace("%data%", job.dates)
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description)
        $(".work-entry:last").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates, formattedDescription)
        })
    }
}
work.display()

var project = {
	"projects": [
		{
		 "title": "",
		 "dates": "",
		 "description":"A website made with HTML",
		 "images": ["images/site1.jpg"],
		},
		{
		 "title": "",
		 "dates": "",
		 "description":"A website made with HTML and CSS",
		 "images": ["images/site2.jpg"],
		},
		{
		 "title": "",
		 "dates": "",
		 "description":"A static site dynamically generated with Python",
		 "images": ["images/site3.jpg"],
		},
	],


	"display": function(){
        $("#projects").append(HTMLprojectStart)
        project.projects.forEach(function(project){
        var formattedTitle = HTMLworkTitle.replace("%data%", project.title)
        var formattedDates = HTMLworkDates.replace("%data%", project.dates)
        var formattedDescription = HTMLworkDescription.replace("%data%", project.description)
        var formattedprojectImage = HTMLprojectImage.replace("%data%", project.images);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedprojectImage)
        })
    }
}
project.display()

var education = {
	"schools": [
	{
		"name": "SENAI",
		"degree": "Degree",
		"dates": 2014,
		"location": "Rio de Janeiro",
		"major": ["ED"],
	
	},
    {
      "name": "FAESA",
      "degree": "Degree",
      "dates": 2013,
      "location": "Vitória",
      "major": ["CS"],
    
    },
    {
      "name": "UNESC",
      "degree": "Degree",
      "dates": 2011,
      "location": "Serra",
      "major": ["CS"],
    
    },
    {
      "name": "CESA College",
      "degree": "Bachelor",
      "dates": 2008,
      "location": "Serra",
      "major": ["CS"],
    
    },
		
	],

	
	"display": function(){
        $("#education").append(HTMLschoolStart)
        education.schools.forEach(function(school){
        var formattedName = HTMLschoolName.replace("%data%", school.name)
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree)
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates)
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location)
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major)
        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates,formattedLocation, formattedMajor)

        
        })
    }
}
education.display()


$("#footerContacts").prepend(formattedMobile);
$("#footerContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedLocation);
