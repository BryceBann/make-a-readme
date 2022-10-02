//needed packages to complete 
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
//prompting the questions to be filled to generate the read me 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'WHat is the title of your project',
        validate: titleInput => {
            if(titleInput){
                return true;
            }else{
                console.log('You need a title to contiune(required)');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project',
        validate: descriptionInput => {
            if(descriptionInput){
                return true;
            }else{
                console.log('You must give a project description to contiune');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your prject',
        validate: installationInput => {
            if(installationInput){
                return true;
            }else{
                console.log('You need to show installation onformation to contiune');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How to you use the project',
        validate: usageInput => {
            if(usageInput){
                return true;
            }else{
                console.log('You must sho how to use the project to contiune');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'how should people contribute to the project',
        validate: contributionInput => {
            if(contributionInput){
                return true;
            }else{
                console.log('You need to provide contribution information contiune');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How do you test the project',
        validate: testingInput => {
            if(testingInput){
                return true;
            }else{
                console.log('You must describe the testing process to contiune');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'choose a license for your project',
        choices: ['MIT', 'ISC', 'GNU', 'none'],
        validate: license=> {
            if(license){
                return true;
            }else{
                console.log('You need a license to contiune');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
        validate: githubInput => {
            if(githubInput){
                return true;
            }else{
                console.log('please enter your github username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'would you like to add your email',
        
    }
];

// function to make the readme file 
const writeToFile = (data) => {
    fs.writeFile('sampleReadMe.md', data, (err) => {
        if (err){
            return console.log("Error ocurred")
        }else{
            console.log('please check the new readme file')
        }
    })
}

// Function call to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

init()
.then((userInput) => {
    return generateMarkdown(userInput)
})
.then((mdInfo) => {
    return writeToFile(mdInfo)
})
.catch((err) => {
    console.log(err)
})