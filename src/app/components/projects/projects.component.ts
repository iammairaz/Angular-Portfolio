import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[] = [
    {
      title : 'AMP Automation tool',
      technologies :'MEAN,HTML/CSS,AngularMaterial',
      description : [
        `Responsible for creating Restful APIs using Node.js with the help of Express.js library
        for CRUD operations and populated data in UI`,
        `Worked on MongoDB performed aggregation operations on data and develop Pipelines
        for APIs to fetch the data from Mongo.`,
        `Responsible for Design, Development of Frontend UI using HTML, CSS, Bootstrap,
        Typescript and Javascript`,
      ],
    },
    {
      title : 'FoodCorner',
      technologies : `MEAN,HTML/CSS,Toastr,bcrypt.js`,
      description : [
        `Created Restful APIs for posting order details, login details, registration details and to
        fetch the data from MongoDB`,
        `Used Express.js for creating APIs and MongoDB as data base, JSONwebtoken & bcrypt
        for encrypting the password, used Mongoose for creating model schemas and used
        Paypal as payment gateway`,
        `Design, Development and Integration.`
      ]
    },
    {
      title : 'WeatherApp',
      technologies : 'Angular,HTML/CSS,Typescript',
      description : [
        `Angular base web application to check weather data for any city around the world`,
        `Used built in API to fetch the data and used HTML/CSS and angular to design frontend`,
      ]
    },
    {
      title : 'Mkart',
      technologies : 'HTML/SCSS, Angular,Typescript',
      description : [
        `It's an E-commerce angular based web application, that uses local JSON servers
        to store signup/login details.`,
        `HTML,SCSS and Angular for frontend styling and used built-in API to  fetch product
        details & populated it in UI.`
      ]
    },
    {
      title : 'CryptoChecker',
      technologies : 'HTML/SCSS,AngularMaterial,Angular',
      description : [
        `Angular based web application to check live updates, market capital, trending etc.
        for different crypto currencies.`,
        `Used HTMl/SCSS and Angular Material for frontend designing and used built-in API to
        get crypto currencies data`,
        `Also try to make it responsive for mobile users.`
      ]
    },
    {
      title : 'NewsApp',
      technologies : 'Angular,HTML/SCSS,tailwind CSS',
      description : [
        `Angular based web application to check the news of world events like spots, entertainment etc.`,
        `Used Angulat, HTMl/SCSS and tailwind CSS for frontend styling and used built-in
        APIs to fetch the news data.`
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
