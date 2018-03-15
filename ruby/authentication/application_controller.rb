class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods #gives us access to the authenticate_or_request_with_http_token method (typically included with a rails app.)
  before_action :authenticate_user

  def authenticate_user
    render json: {error: "Unauthorized"}, status: 401 unless logged_in?
  end
  #SAME AS
  def authenticate_user
    if logged_in?
      continue
    else
      render json: {error: "Unauthorized user", status: 401}
    end
  end

  def logged_in?
    #responds to: RestClient.get("http://localhost:4000/actions", {"Authorization" => "Bearer #{token}"})
      #Authorization key in the header and bearer with the token.
    authenticate_or_request_with_http_token do |token, options|
      #Authenticate: Try to verify that it's there and if they're logged in then get access to the token or request: send a 401 and tell them to login.
      Account.from_token(token)
    end
  end
  #SAME AS
  def logged_in?
    !!current_user
  end

  def current_user
    User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])[0]['user_id']) if request.env['HTTP_AUTHORIZATION'].present?
    #The request.env comes from what is sent from the user as their authorization information and gives us back the jwt token, which Auth.decode requires.
  end


end
