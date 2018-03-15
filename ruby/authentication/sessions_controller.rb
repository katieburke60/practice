def create
  user = User.find_by(email: params[:email])
  if user.authenticate(params[:password]) #method that we have available through bcrypt
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end
end
