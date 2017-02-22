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

if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkill);
    formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkill);
}

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
// var formattedMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
// var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
// var githubURL = HTMLgithub.replace('%data%', bio.contact.github);
// var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
// var bioPic = HTMLbioPic.replace('%data%', bio.picture);
// var welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.message);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
// $('#topContacts').append(formattedMobile);
// $('#topContacts').append(formattedEmail);
// $('#topContacts').append(githubURL);
// $('#topContacts').append(formattedLocation);
// $('#header').append(bioPic);
// $('#header').append(welcomeMsg);
// $('#header').append(HTMLskillsStart);
// $('#header').append(skillHTML);
// $('#header').append(skillCSS);
// $('#header').append(skillJavaScript);


// $('#footerContacts').append(formattedMobile);
// $('#footerContacts').append(formattedEmail);
// $('#footerContacts').append(githubURL);
// $('#footerContacts').append(formattedLocation);
