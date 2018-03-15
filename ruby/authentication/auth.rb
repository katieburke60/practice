#lib/auth.rb

class Auth
  SECRET = Rails.application.secrets.jwt_secret
  def self.issue(payload)
    JWT.encode(payload, SECRET) #returns a JWT token
    #return value: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoxfQ.AYGASRINrV9hkRHtucXXeNJ1xNkeO-T1SFvPWpMstjI"
  end

  def self.decode (token)
    JWT.decode(token, SECRET).first #returns the payload we want to encapsilate
    #return value:  [{"account_id"=>1}, {"typ"=>"JWT", "alg"=>"HS256"}]
  end
  #SAME AS
  def self.decode(token)
    JWT.decode(token, Rails.application.secrets[:secret_key_base], true, {:algorithm => 'HS256'})
  end
end

#Need to make sure it autoloads the path
#config/application.rb
config.autoload_paths << Rails.root.join('lib')
