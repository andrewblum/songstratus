json.extract! @user, :id, :username
json.profile_image_url @user.profile_image.url
json.banner_image_url @user.banner_image.url
