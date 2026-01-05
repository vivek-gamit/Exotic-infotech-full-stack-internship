## What happens when a user submits a form

- When user submit the a form then user data convert in package and send to the server through HTTP request
- this HTTP request received by server the server apply it's validation and checks
- this data store in database 
- After this server send email or message on brower

### technology 
- **HTML** for website user structure & **JS** for user from validation
- **HTTP** server request
- **DNS** for handling web address which we write in web browser
- **server** to store data and provide whenever we need

---

## Difference between Web API and MVC

### Model Viwe Controller (MVC)
- **MVC** is used for web application development that handle both data and view
- It separate the application in three logical components
  
  **1) data model**
  - It contains  only the pure aplication data without containing logic like how user use this data
 
  **2) Presentation(viwe)**
  - It allow to access the models(aplication) data
  - But it dose not know the meaning of the data and how user can manipulate this data
 
  **3) Controller**
  - It exists between model and view
  - It listens the different events which is triggered by the view
  - It is basically use to manage query and transferring the result values to the models.
 
  **Example :** MVC is like a restaurant dining experience: You (the client) go to the restaurant, place an order with a waiter (Controller), the chef prepares the meal (Model/Data Logic), and the waiter brings the complete, plated dish (View/HTML) to your table

### Web API
- Used for creating HTTP services that return data only
- Web API return data in JSON, XML or other format
- **Example :** An API is like a food delivery service: You (a client application, like a mobile app or another website) use a delivery app (the API interface) to place an order. The kitchen (backend logic) prepares the food and packs it in a simple container (JSON/XML data). A delivery driver (API communication) brings you the package; you are responsible for plating and presenting the food however you want at your location. 