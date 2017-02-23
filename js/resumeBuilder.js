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

var projects = {
    projects: [
        {
            title: 'AlabamaCupRaces.com Website',
            dates: 'Jan 2017',
            description: 'I designed and developed a fully responsive website for the Alabama Cup Racing Association.',
            images: ['images/acra-site.png']
        }
    ]
};

var bio = {
    name: 'Tod McChesney',
    role: 'Front-End Web Developer',
    welcomeMessage: 'I am passionate about front-end web development.',
    biopic: 'images/profile.jpg',
    contacts: {
        mobile: '+41 79 123 4567',
        email: 'tod@example.com',
        github: 'https://github.com/TodMcChesney',
        location: 'Geneva, Switzerland'
    },
    skills: ['HTML', 'CSS', 'JavaScript']
};

var education = {
    schools: [
        {
            name: 'GED',
            location: 'Birmingham, Alabama',
            degree: 'Diploma',
            dates: 1990,
            url: 'http://example.com',
            majors: ['General']
        }
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Development',
            school: 'Treehouse',
            dates: 2015,
            url: 'https://teamtreehouse.com/todmcchesney'
        }
    ]
};

// Header section
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
var githubURL = HTMLgithub.replace('%data%', bio.contacts.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
var bioPic = HTMLbioPic.replace('%data%', bio.biopic);
var welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#header').append(bioPic);
$('#header').append(welcomeMsg);

// Header contact
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(githubURL);
$('#topContacts').append(formattedLocation);

// Footer contact info
$('#footerContacts').append(formattedMobile);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(githubURL);
$('#footerContacts').append(formattedLocation);

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills:last').append(formattedSkill);
    }
}

// Work experience section
function displayWork() {
    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        $('.work-entry:last').append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
        $('.work-entry:last').append(formattedDescription);
    }
}

displayWork();

// Projects section
projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
        $('.project-entry:last').append(formattedDescription);
        if (projects.projects[i].images.length > 0) {
            for (var ii = 0; ii < projects.projects[i].images.length; ii++) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[ii]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};

projects.display();

// Collecting clicks code
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

// internationalize button
function inName(oldName) {
    var finalName;
    var names = oldName.split(" ");
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    finalName = names.join(" ");
    return finalName;
}

$('#main').append(internationalizeButton);

// Google map
// $('#mapDiv').append(googleMap);
