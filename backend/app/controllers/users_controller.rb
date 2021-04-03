class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index]
    
    def index
        users = User.all 
        render json: users
    end
    
    def profile
        render json: { user: UserSerializer.new(@user) } , status: :accepted
    end
    
    def create
        @user = User.new(user_params)
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end
