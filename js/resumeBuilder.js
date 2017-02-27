// Bio object
var bio = {
    name: 'Tod McChesney',
    role: 'Front-End Web Developer',
    contacts: {
        mobile: '+41 79 123 4567',
        email: 'tod@example.com',
        github: 'https://github.com/TodMcChesney',
        location: 'Geneva, Switzerland'
    },
    welcomeMessage: 'I am passionate about front-end web development.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    biopic: 'images/profile.jpg'
};

// Work object
var work = {
    jobs: [
        {
            employer: 'Self Employed',
            title: 'Front-End Web Developer',
            location: 'Geneva, Switzerland',
            dates: 'Oct 2009 - Present',
            description: 'Front-end web development and web consulting'
        },
        {
            employer: 'Alabama Outdoors',
            title: 'eCommerce Manager',
            location: 'Birmingham, Alabama',
            dates: 'Apr 2013 - Apr 2016',
            description: 'Managed all eCommerce operations'
        },
        {
            employer: "Mountain High Outfitters",
            title: 'eCommerce Manager',
            location: 'Birmingham, Alabama',
            dates: 'Oct 2011 - Apr 2013',
            description: 'Managed all eCommerce operations'
        }
    ]
};

// Projects object
var projects = {
    projects: [
        {
            title: 'Alabama Cup Racing Association Website',
            dates: 'Jan 2017',
            description: 'I designed and developed a fully responsive website for the Alabama Cup Racing Association.',
            images: ['images/acra-phone.png', 'images/acra-tablet.png', 'images/acra-desktop.png']
        }
    ]
};

// Education object
var education = {
    schools: [
        {
            name: 'GED',
            location: 'Birmingham, Alabama',
            degree: 'Diploma',
            majors: ['General'],
            dates: 1990
        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Development',
            school: 'Treehouse',
            dates: 2015,
            url: 'https://teamtreehouse.com/todmcchesney'
        },
        {
            title: 'Web Design',
            school: 'Treehouse',
            dates: 2016,
            url: 'https://teamtreehouse.com/todmcchesney'
        },
        {
            title: 'WordPress Development',
            school: 'Treehouse',
            dates: 2016,
            url: 'https://teamtreehouse.com/todmcchesney'
        },
        {
            title: 'Full Stack JavaScript',
            school: 'Treehouse',
            dates: 2016,
            url: 'https://teamtreehouse.com/todmcchesney'
        }
    ]
};

// Display bio
bio.display = function() {
    var formattedNameRole = HTMLheaderName.replace('%data%', bio.name) +
        HTMLheaderRole.replace('%data%', bio.role);
    var formattedBioPicWelcomeMsg = HTMLbioPic.replace('%data%', bio.biopic) +
        HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header').prepend(formattedNameRole);
    $('#header').append(formattedBioPicWelcomeMsg);

    // Contact info for header and footer
    var formattedContacts = HTMLmobile.replace('%data%', bio.contacts.mobile) +
        HTMLemail.replace('%data%', bio.contacts.email) +
        HTMLgithub.replace('%data%', bio.contacts.github) +
        HTMLlocation.replace('%data%', bio.contacts.location);
    var idContacts = ['#topContacts', '#footerContacts'];
    for (var i = 0; i < idContacts.length; i++) {
        var id = idContacts[i];
        $(id).append(formattedContacts);
    }

    // Skills
    $('#header').append(HTMLskillsStart);
    for (var x = 0; x < bio.skills.length; x++) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[x]);
        $('#skills:last').append(formattedSkill);
    }
};
bio.display();

// Display work
work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedWork = HTMLworkEmployer.replace('%data%', work.jobs[i].employer) +
            HTMLworkTitle.replace('%data%', work.jobs[i].title) +
            HTMLworkDates.replace('%data%', work.jobs[i].dates) +
            HTMLworkLocation.replace('%data%', work.jobs[i].location) +
            HTMLworkDescription.replace('%data%', work.jobs[i].description);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedWork);
    }
};
work.display();

// Display projects
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        var formattedProject = HTMLprojectTitle.replace('%data%', projects.projects[i].title) +
            HTMLprojectDates.replace('%data%', projects.projects[i].dates) +
            HTMLprojectDescription.replace('%data%', projects.projects[i].description);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProject);
        for (var ii = 0; ii < projects.projects[i].images.length; ii++) {
            var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[ii]);
            $('.project-entry:last').append(formattedImage);
        }
    }
};
projects.display();

// Display education
education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchool = HTMLschoolName.replace('%data%', education.schools[i].name) +
            HTMLschoolDegree.replace('%data%', education.schools[i].degree) +
            HTMLschoolLocation.replace('%data%', education.schools[i].location) +
            HTMLschoolDates.replace('%data%', education.schools[i].dates) +
            HTMLschoolMajor.replace('%data%', education.schools[i].majors);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedSchool);
    }
    $('#education').append(HTMLonlineClasses);
    for (var x = 0; x < education.onlineCourses.length; x++) {
        var formattedOnlineCourse = HTMLonlineTitle.replace('%data%', education.onlineCourses[x].title) +
            HTMLonlineSchool.replace('%data%', education.onlineCourses[x].school) +
            HTMLonlineDates.replace('%data%', education.onlineCourses[x].dates) +
            HTMLonlineURL.replace(/%data%/g, education.onlineCourses[x].url);
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(formattedOnlineCourse);
    }
};
education.display();

// Display Google map
$('#mapDiv').append(googleMap);
