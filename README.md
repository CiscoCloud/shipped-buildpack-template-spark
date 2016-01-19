# shipped-buildpack-template-spark

Sample application to consume Cisco Spark API in Shipped.

# Deploy Sample application in Shipped
For creating Application in Shipped using Spark buildpack refer to getting started section of Shipped document: http://shipped-cisco.com/shipped/api-docs/build/index.html#walkthroughs

At service creation Step need to select "Cisco Spark" Buildpack under API tab. Rest project creation and and deployment section will remain same.

# Using the Sample application

## Step 1
Once application is up and running, following screen will appear. It requires a `auth token`, which can be retrieved by logging into [https://developer.ciscospark.com/](https://developer.ciscospark.com).  
![Login](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/login.png)

## Step 2
After adding a valid `token` to application, list of all user rooms are shown.
![Home](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/home.png)

## Step 3
New room can be created, by clicking **New Room** button and then entering **Room Name** and **Invitation person email**.  
![New Room](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/new-room.png)

## Step 4
Clicking on Room name in rooms list will display all the messages of that room. User can chat with other person by typing and Send the message.  
![Messages](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/messages.png)

## Step 5
Clicking on Logout button, will log outs the user from application and opens Login page.
