import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id:0, name: 'Angular Portfolio Web App', summary: 'This is a portfolio web application developed to showcase projects and relevant experience.',description: 'This is an angular web app built in order to show case professional background. It is built using Angular 17.3, TypeScript 5.4.2 and Node.Js 18.18 ', projectLink: 'https://github.com/Nabil-alhaffar/AngularPortfolio',tags: [Tag.ANGULAR, Tag.TYPESCRIPT,Tag.NODEJS],pictures: ["../../assets/angportfolio1.png","../../assets/angportfolio2.png", "../../assets/angportfolio3.png"]},
    { id:1, name: 'Inventory Manager App', summary: 'A cross platform N-tier based mobile system for managing inventory in a telecomm company without needing a desktop.', description: 'This is a project developed in order to do a better job tracking inventory in a phone on the go, without needing to refer to a desktop. This project consists of three parts: 1) Cross-platform iOS and Android Xamarin Application: This client application is used in order to manage inventory in a Metro by T-mobile franchise. This application will allow district managers to perform multiple tasks related to managing inventory including but not restricted to receiving orders, adding/subtracting stocks, shipping stocks to a different locations, counting stocks and reconciliation. It will communicate with an AzureSQL database using an ASP.NET Mobile app service. In addition, ituses OAuth 2.0 in order to authenticate and authorize users for different functions. 2) ASP.NET Web API: This application will use HTTP Clients in order to communicate with the AzureSQL Database. This app is hosted on Azure, and exchanges information with the database using Add/get/delete/update requests. The UI consists of Swashbuckles Swagger interface (Third Party), which provides great means of testing the API functions. 3) Database: In order to store the information used by this application, an SQL database has been created with multiple tables to store the needed data.',projectLink: 'https://github.com/Nabil-alhaffar/InventoryManagerApplication',tags: [Tag.CSHARP, Tag.ASPNET, Tag.XAMARIN],pictures: ["../../assets/inventoryManager1.png", "../../assets/inventoryManager2.png", "../../assets/inventoryManager3.png"]},
    { id:2,name: 'Smart Knife Station',summary: "Novelty application developed using python and Google's AI speech recognition API to pick the perfect type of cutlery for different kitchen applications.",description: 'This project is a knife block that uses the google speech recognition API in order to listen to commands and maps it to the best cutlery item for that particular task. The knife block will listen through a microphone connected to the RPI, and then gives the output in the form of LED buttons. For example, you would say "slice lemons", and the paring knife will be suggested. If you say "slice bagels", the bread knife will be suggested, and so on.',projectLink: 'https://github.com/Nabil-alhaffar/Knife-Station',tags: [Tag.PYTHON,],pictures: ["../../assets/knifeStation1.png", "../../assets/knifeStation2.png"]},
    {id:3,name: 'Smart Tea Brewer',summary: 'A Tizen.NET wearable application that uses different watch sensors and communicates with a tea brewer that was smartified using a Raspberry PI.',description: 'The watch uses multiple sensors embedded within the smartwatch (such as HeartRateSensor, SleepState, Ambient temperature) in order to suggest a type of tea to neutralize the off levels. Once the tea has been suggested, the application will prompt the user to insert the suggested tea type leaves in the steeper. Finally, users can connect their smart watch app to the smart tea brewer in order to steep the tea based on the right tea temperature.',projectLink: 'https://github.com/Nabil-alhaffar/Smart-Tea-Brewer', tags: [Tag.CSHARP, Tag.ASPNET, Tag.PYTHON, Tag.XAMARIN], pictures: ["../../assets/images-coming.png"]},
    { id:4, name: 'Swift Periodic Table iOS App ',description: 'This application reads information from a JSON file, in order to view information from the periodic table in a master-detail view.',summary:'This is a periodic table iOS application developed with Swift and xCode to display key element information.',projectLink: 'https://github.com/Nabil-alhaffar/Periodic-Table-Swift-App',tags: [Tag.SWIFT],pictures: ["../../assets/images-coming.png"]},
    {id:5,name: 'Radio Frequency Breath Detection ',summary: 'This application uses the Random Forests ML algorithm and the Walabot radio frequency sensor to detect abnormalities in breath for health applications.',description: 'This is a python project that uses a radio frequency device called walabot, in addition to the machine learning algorithm Random Forrests, in order to detect breathing action and record data. A hue light is being used as an indicator,  being triggered when there is breathing action. A different color shows if abnormalities are detected',projectLink: 'https://github.com/Nabil-alhaffar/WalabotProjects',tags: [Tag.C, Tag.PYTHON],pictures: ["../../assets/images-coming.png"]},
    {id:6, name: 'Radio Frequency Fall Detection ',summary: 'This application uses the Walabot Radio Frequency sensor to detect falling targets, and alert a registered caregiver via SMS.',description: 'This is a python project that uses a radio frequency device called walabot, in addition to the machine learning algorithm Random Forrests in order to detect breathing action and record data. A hue light is being used as an indicator,  being triggered when there is breathing action. Data was internally collected to train the model for predictions',projectLink: 'https://github.com/Nabil-alhaffar/WalabotProjects',tags: [Tag.C, Tag.PYTHON],pictures: ["../../assets/images-coming.png"]},
    {id:7, name: 'Radio Frequency People Counter',summary: 'This application uses the Walabot radio frequency sensor in order to locate and thus count moving targets.',description: 'This is a C++ program that uses Walabot -which relies on radio frequency- in order to keep count of the number of people in a room. The project uses the Walabot API, along an algorithm used to localize and keep count of the people. Software Used: Visual Studio 2019, Walabot API. Hardware Used: Walabot Developer ',projectLink: 'https://github.com/Nabil-alhaffar/WalabotProjects',tags: [Tag.C],pictures: ["../../assets/images-coming.png"]},
    { id:8,name: 'Walkabout iOS App',summary:'Basic swift project that tracks user movement (run, drive, etc..), records the path, and displays key information pertaining to the path travelled.',description: 'This application relies on iOS devices GPS information to record route, and calculate key information including average speed and distance traveled', projectLink: 'https://github.com/Nabil-alhaffar/Walkabout',tags: [Tag.SWIFT], pictures: ["../../assets/images-coming.png"]}
   ];
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number): Project{
    let project = this.projects.find(project=> project.id  == id);
    if(project == undefined){
      throw new TypeError('There is no project that matches the id: '+ id)

    }
    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]){
   
    let filteredProjects: Project[]=[];
    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag)== false){
          foundAll = false;
        }
      });
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;

  }
}
