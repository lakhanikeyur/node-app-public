# MyApplication

This application contains simple example of using modern techstack for the development till deployment there are few exceptions and improvements that can be made but over all. This repo is just for the demo purposes please consider your option before using it.

## Task 1 

✅ Create a simple application which has a single "/version" endpoint.
 - Application created with node and express which serves the endpoint

✅ Containerise your application as a single deployable artifact, encapsulating all dependencies.
 - Conevrted it to the docker image using docker file

✅ Create a CI pipeline for your application
 - Github based worflow added to run the pipleline of continues integration which performs testing using jest and then encapsulating it into the docker file, then after pushed it to the docker hub.

✅ Create unit tests and/or a test suite that validates your code.
 - jest based testing added which check the endpoint return the valid code `200` as well as expected json object `myapplication` using axios. 

✅ Describe or demonstrate any risks associated with your application/deployment.
 - There are many aspects that can be improved the deployment can be managed using the helm and ansible for configuration management. Also the testing of the code using linter and container scanner can be added as additional steps in the CI pipeline. 

✅ Describe your approach to versioning your application/deployment.
 - The versioning can be defined as major.minor.buildID which follows the pattern of managing code using [gitflow.](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

✅ Write a clear and understandable README which explains your application and its deployment steps.

## Task 2

✅ Everything as Code
 - the deployment and service is in the `deploy-node` folder. which is at the moment deployed manually though it can be automated.

✅ Optimised for efficiency and simplicity & Elasticity / Scalability
 - Helm can simplify the deployement and adding the autoscalling using scalling policy and RBAC.
 
✅ Clear and understandable README