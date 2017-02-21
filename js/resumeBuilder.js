var bio = {
    name: 'Tod McChesney',
    role: 'Front-End Web Developer',
    contact: {
        mobile: '+41 79 123 4567',
        email: 'tod@example.com',
        github: 'https://github.com/TodMcChesney',
        location: 'Geneva, Switzerland'
    },
    message: 'I am passionate about front-end web development.',
    skills: ['HTML', 'CSS', 'JavaScript'],
    picture: 'images/profile.jpg'
};
var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var githubURL = HTMLgithub.replace('%data%', bio.contact.github);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
var bioPic = HTMLbioPic.replace('%data%', bio.picture);
var welcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.message);
var skillHTML = HTMLskills.replace('%data%', bio.skills[0]);
var skillCSS = HTMLskills.replace('%data%', bio.skills[1]);
var skillJavaScript = HTMLskills.replace('%data%', bio.skills[2]);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(githubURL);
$('#topContacts').append(formattedLocation);
$('#header').append(bioPic);
$('#header').append(welcomeMsg);
$('#header').append(HTMLskillsStart);
$('#header').append(skillHTML);
$('#header').append(skillCSS);
$('#header').append(skillJavaScript);


$('#footerContacts').append(formattedMobile);
$('#footerContacts').append(formattedEmail);
$('#footerContacts').append(githubURL);
$('#footerContacts').append(formattedLocation);
