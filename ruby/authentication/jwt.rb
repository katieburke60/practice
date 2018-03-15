JWT.encode({object we want to send}, password) #Response: jwt token
JWT.encode({account_id: 1}, 'beef_101') #example

#2. Send token down to the user

#3. The user sends the token back and we need to verify that it's them (on every request)
JWT.decode(token, password) #Returns:  [{"account_id"=>1}, {"typ"=>"JWT", "alg"=>"HS256"}]


#SOURCES
#https://www.youtube.com/watch?v=shsE8ZPfLgY
