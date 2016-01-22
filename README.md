# shipped-buildpack-template-spark

Sample application to consume Cisco Spark API in Shipped.

Cisco Spark: Shipped Buildpack demo video (10 min). https://cisco.webex.com/cisco/ldr.php?RCID=98837d3fbf139ce537e8f11a660ccff0

# Deploy Sample application in Shipped
For creating Application in Shipped using Spark buildpack refer to getting started section of Shipped document: http://shipped-cisco.com/shipped/api-docs/build/index.html#walkthroughs

At service creation Step need to select "Cisco Spark" Buildpack under API tab.

![Add Spark API](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/add-spark-api.png?token=ALeq8NvvZL-D6me8xrXyEpoUAocV5g8aks5Wp8rZwA%3D%3D)

Rest project creation and and deployment section will remain same.

# Using the Sample application

## Step 1
Once application is up and running, following screen will appear. It requires a `auth token`, which can be retrieved by logging into [https://developer.ciscospark.com/](https://developer.ciscospark.com).  
![Login](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/login.png?token=ALeq8C4Qj64BNmJ8tL2TDQ247m3-Wx8Tks5Wp8IVwA%3D%3D)

## Step 2
After adding a valid `token` to application, list of all user rooms are shown.
![Home](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/home.png?token=ALeq8PJX_3c6E34lDnc1RSauSk4SmN22ks5Wp8NowA%3D%3D)

## Step 3
New room can be created, by clicking **New Room** button and then entering **Room Name** and **Invitation person email**.  
![New Room](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/new-room.png?token=ALeq8IfutpB_sw_YUuTtQl4lTAOIoFrtks5Wp8OFwA%3D%3D)

## Step 4
Clicking on Room name in rooms list will display all the messages of that room. User can chat with other person by typing and Send the message.  
![Messages](https://raw.githubusercontent.com/CiscoCloud/shipped-buildpack-template-spark/master/images/messages.png?token=ALeq8DSEwSVGJixwl7bEeVUHW1YOV9AGks5Wp8NCwA%3D%3D)

## Step 5
Clicking on Logout button, will log outs the user from application and opens Login page.
