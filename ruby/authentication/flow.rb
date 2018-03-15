#CREATING JWT TOKEN
  #User sends initial http request with their username and password
  #Hits our registration create action or sessions controller
  #use (1) secret_key, (2) algorithm, and (3) payload to create a unique token.
  #That action renders a json webtoken back once 
    #and store in localStorage on the browser.
#JWT AUTHENTICATING
#1. The user sends an HTTP request with authorization: jwt_token as one of the headers.
#2. Hits the corresponding controller action (e.g., index)
#3. The application controller ensures that each controller action includes a before_action authenticate_user.
#4. When the http question hits the controller we have access to the token with:
  #request.env("HTTP_AUTHORIZATION")
#5. Then call the Auth.decode method passing in the jwt_token value.
  #will have a return value of an array where first object is the user_id [{user_id: 1}]
  #Auth decode has access to (1) secret_key, (2) algorithm, and (3) jwt token passed by the user and can spit back the payload
#6. Use that return value to find the current_user (happening in the application_controller.rb file)
  #User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])[0]['user_id'])

#Sessions
  #Server issues a session 'asdkfahjrek;tbher'
  #Browser sends back key in header
  #Rack or somewhere one our server we have a CookieStore where we store the session_key wieth value of user_id
    #{'aefgjkhaerg;h' => {user_id: 1}}
#Problem: Application is stored on many servers and we're not sure which one it will be sent to (makes the CookieStore tough to implement.)
